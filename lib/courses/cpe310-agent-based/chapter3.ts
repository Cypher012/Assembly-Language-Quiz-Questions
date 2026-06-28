import { QuestionV2 } from "@/lib/quiz-types";

const cpe310Chapter3: QuestionV2[] = [
  {
    id: "cpe310_ch2_001",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "According to the notes, how is an agent defined?",
    options: [
      "A disembodied store of heuristic expertise operating entirely within an abstract, isolated domain of computational discourse",
      "A computer system capable of autonomous action within a specific environment in order to achieve its delegated goals",
      "A passive computational service provider that strictly initiates action only when an external method or function is explicitly invoked",
      "A static software program that executes pre-scripted instructions blindly within a strictly guaranteed-fixed external environment",
    ],
    correctAnswer: 1,
    explanation:
      "The notes define an agent as a computer system capable of autonomous action in some environment in order to achieve its delegated goals. Autonomy and delegated goals are the central elements of this definition.",
  },
  {
    id: "cpe310_ch2_002",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "The notes picture an agent as being in a close-coupled, continual interaction with its environment. Which cycle expresses this?",
    options: [
      "The strictly linear sequence of compile → link → load → run → halt",
      "The procedural sequence of query → rule-match → answer → stop",
      "The continuous sequence of sense → decide → act → sense → decide",
      "The object-oriented sequence of encapsulate → message → method → return",
    ],
    correctAnswer: 2,
    explanation:
      "The notes describe the agent's interaction with its environment as a continual loop of sense → decide → act → sense → decide → … This close-coupled, ongoing cycle is what keeps the agent engaged with a changing world.",
  },
  {
    id: "cpe310_ch2_003",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "The notes describe an agent as being in a close-coupled, continual interaction with its environment.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "This is true. The notes explicitly state we think of an agent as being in a close-coupled, continual interaction with its environment, captured by the sense → decide → act cycle.",
  },
  {
    id: "cpe310_ch2_004",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "In the thermostat example of a simple agent, what is the delegated goal and what are the actions?",
    options: [
      "Delegated Goal: continuously monitor for incoming email messages; Available Actions: execute specific GUI notifications",
      "Delegated Goal: physically push and maneuver tiles to fill holes; Available Actions: execute distinct movement steps",
      "Delegated Goal: diagnose complex human blood diseases; Available Actions: process queries and output medical facts",
      "Delegated Goal: consistently maintain the ambient room temperature; Available Actions: toggle the heating unit on or off",
    ],
    correctAnswer: 3,
    explanation:
      "For the thermostat, the notes give the delegated goal as maintaining room temperature, with actions being heat on/off. Monitoring email is the biff example, and the others belong to Tileworld and MYCIN.",
  },
  {
    id: "cpe310_ch2_005",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "What is the delegated goal of the biff UNIX program used as a simple-agent example?",
    options: [
      "To continuously monitor the system for incoming email messages and visually flag them via the user interface",
      "To consistently maintain a target ambient room temperature by selectively toggling a connected heating unit",
      "To autonomously navigate a simulated grid in order to physically push specific tiles to fill designated holes",
      "To proactively negotiate resource access protocols with other independent software entities on a shared network",
    ],
    correctAnswer: 0,
    explanation:
      "The notes describe biff as a simple agent whose delegated goal is to monitor for incoming email and flag it, with GUI actions. Maintaining temperature is the thermostat's goal.",
  },
  {
    id: "cpe310_ch2_006",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "Why do the notes consider the thermostat and biff to be uninteresting agents?",
    options: [
      "Because they completely lack the ability to perceive any changes occurring within their operational environments",
      "Because they are strictly passive programs that do not possess any delegated goals from a human operator",
      "Because the internal decision-making processes they employ to select their actions are computationally trivial",
      "Because implementing them requires solving the most complex challenges of artificial general intelligence",
    ],
    correctAnswer: 2,
    explanation:
      "The notes state these agents are trivial because the decision making they do is trivial. They still have delegated goals and perceive their environment, but their reasoning is minimal.",
  },
  {
    id: "cpe310_ch2_007",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "An intelligent agent is typically said to exhibit which three types of behaviour?",
    options: [
      "Procedural execution, declarative reasoning, and post-declarative optimization",
      "Reactive responsiveness, pro-active goal generation, and social interaction",
      "Mobile network traversal, benevolent task execution, and veracious reporting",
      "Accessible state management, deterministic logic, and episodic memory storage",
    ],
    correctAnswer: 1,
    explanation:
      "The notes state we think of an intelligent agent as exhibiting three types of behaviour: reactive, pro-active, and social. The other options name programming styles, additional properties, and environment properties.",
  },
  {
    id: "cpe310_ch2_008",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "How do the notes define a reactive system?",
    options: [
      "A system that autonomously generates and attempts to achieve its own internal goals entirely on its own initiative",
      "A system that relies exclusively on interacting with peer agents via extensive cooperation and negotiation protocols",
      "A system that executes pre-scripted instructions blindly because its underlying environment is guaranteed to be static",
      "A system that maintains ongoing interaction with its environment and responds to changes in time for it to be useful",
    ],
    correctAnswer: 3,
    explanation:
      "A reactive system is defined as one that maintains an ongoing interaction with its environment and responds to changes in it in time for the response to be useful. Generating goals is proactiveness, and interacting with others is social ability.",
  },
  {
    id: "cpe310_ch2_009",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "A reactive system responds to changes in its environment in time for the response to be useful.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "This is true. The notes define reactivity precisely as responding to environmental changes in time for the response to be useful, which is what makes the response valuable in a dynamic world.",
  },
  {
    id: "cpe310_ch2_010",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "Which description best captures pro-activeness as presented in the notes?",
    options: [
      "Generating and attempting to achieve specific goals, taking the initiative, and actively recognizing new opportunities",
      "Maintaining an ongoing environmental interaction and responding to immediate changes quickly enough to be useful",
      "Reaching complex agreements with other peer agents on matters of common interest through structured negotiation",
      "Continuously recording precise information about the external environment in an internal, highly structured data store",
    ],
    correctAnswer: 0,
    explanation:
      "Pro-activeness is described as goal-directed behaviour: generating and attempting to achieve goals, not being driven solely by events, taking the initiative, and recognising opportunities. Mere responsiveness is reactivity.",
  },
  {
    id: "cpe310_ch2_011",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "Social ability in agents is described as the ability to interact with other agents (and possibly humans) via which three means?",
    options: [
      "Through continuous environmental perception, structured internal deliberation, and executing definitive physical actions",
      "Through forming informational beliefs, developing motivational desires, and committing to specific executing intentions",
      "Through executing mobile network traversal, ensuring veracious data reporting, and acting with strict benevolence",
      "Through active cooperation towards shared goals, coordination of interdependencies, and negotiation of mutual agreements",
    ],
    correctAnswer: 3,
    explanation:
      "The notes define social ability as the ability to interact with other agents via cooperation, coordination, and negotiation, with communication as the minimum. The other triples describe a control cycle, the BDI states, and additional properties.",
  },
  {
    id: "cpe310_ch2_012",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "In the notes, cooperation as a sub-form of social ability is best described as what?",
    options: [
      "Systematically managing the logistical interdependencies between various independent agent activities",
      "Reaching binding agreements on contested matters through structured offer and counter-offer protocols",
      "Working together seamlessly as a unified team in order to successfully achieve a mutually shared goal",
      "Consistently recording and predicting the internal belief states of other autonomous agents in the network",
    ],
    correctAnswer: 2,
    explanation:
      "Cooperation is defined as working together as a team to achieve a shared goal, often because no single agent can achieve it alone or because cooperation yields a better result. Managing interdependencies is coordination.",
  },
  {
    id: "cpe310_ch2_013",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "Two agents both want to use the same non-sharable resource, so they must arrange their use of it. Which sub-form of social ability does this illustrate?",
    options: [
      "The sub-form of Cooperation, where the agents combine their distinct capabilities to complete a shared task",
      "The sub-form of Coordination, where the agents carefully manage the logistical interdependencies of their actions",
      "The sub-form of Negotiation, where the agents reach a compromise strictly through an offer and counter-offer process",
      "The sub-form of Benevolence, where one agent voluntarily surrenders its resource access to prioritize the other",
    ],
    correctAnswer: 1,
    explanation:
      "Coordination is defined as managing the interdependencies between activities, and the notes give the non-sharable resource example exactly for coordination. Cooperation is about a shared goal, while negotiation is about reaching agreements.",
  },
  {
    id: "cpe310_ch2_014",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "You want to watch a movie tonight but your housemate wants to watch football on the single TV, so you agree to football tonight and a movie tomorrow. Which sub-form of social ability is this?",
    options: [
      "The sub-form of Negotiation, involving reaching an agreement on a common interest through offer and compromise",
      "The sub-form of Cooperation, involving pooling distinct individual resources to achieve a single unified team goal",
      "The sub-form of Coordination, involving the strict management of overlapping logistical interdependencies",
      "The sub-form of Veracity, involving agents communicating their true internal preferences without any deception",
    ],
    correctAnswer: 0,
    explanation:
      "Negotiation is the ability to reach agreements on matters of common interest, typically involving offer, counter-offer, and compromise — exactly the TV-and-football deal given in the notes. Coordination concerns interdependencies rather than reaching a deal.",
  },
  {
    id: "cpe310_ch2_015",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "Which of the following is listed among the five additional agent properties in the notes?",
    options: [
      "The property of Reactivity, allowing the agent to respond to immediate environmental changes",
      "The property of Determinism, ensuring the agent always takes the same action in a given state",
      "The property of Veracity, dictating that the agent will not knowingly communicate false information",
      "The property of Soundness, guaranteeing that the agent will never select an invalid or failing action",
    ],
    correctAnswer: 2,
    explanation:
      "The notes list five additional properties: mobility, veracity, benevolence, rationality, and learning/adaption. Reactivity is one of the three core intelligent-agent behaviours, not one of these additional properties.",
  },
  {
    id: "cpe310_ch2_016",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "The notes give three named differences between agents and objects. Which set states them correctly?",
    options: [
      "Software agents are typically characterized as being intrinsically mobile, veracious, and completely benevolent entities",
      "Software agents are universally defined as operating in accessible, strictly static, and entirely discrete environments",
      "Software agents are formally proven to execute behaviors that are strictly sound, complete, and mathematically optimal",
      "Software agents are distinguished by being highly autonomous, smart (flexible in behavior), and fundamentally active",
    ],
    correctAnswer: 3,
    explanation:
      "The notes distinguish agents from objects by saying agents are autonomous, smart (capable of flexible reactive/pro-active/social behaviour), and active rather than passive. The other options mix in additional properties, environment properties, and synthesis terms.",
  },
  {
    id: "cpe310_ch2_017",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "How do the notes characterise an object (in contrast to an agent)?",
    options: [
      "An object autonomously decides whether to honor action requests based entirely on its own internal goal structures",
      "An object encapsulates internal state, communicates via message passing, and has methods that operate on that state",
      "An object is dynamically situated in a changing physical environment and acts directly upon the external real world",
      "An object actively generates and systematically pursues its own novel goals completely on its own distinct initiative",
    ],
    correctAnswer: 1,
    explanation:
      "An object is characterised as encapsulating state, communicating via message passing, and having methods corresponding to operations on that state. Deciding autonomously whether to act is precisely what distinguishes agents from objects.",
  },
  {
    id: "cpe310_ch2_018",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "In the notes, MYCIN is used as an example of what?",
    options: [
      "A traditional expert system that holds a wealth of rule-based knowledge about diagnosing blood diseases in humans",
      "A purely reactive agent that lacks internal state and operates exactly like a simple temperature-regulating thermostat",
      "A sophisticated mobile agent that autonomously traverses distributed networks to negotiate shared server resources",
      "A simulated agent-based grid environment specifically designed for evaluating the efficiency of tile-pushing algorithms",
    ],
    correctAnswer: 0,
    explanation:
      "MYCIN is given as an expert system that holds a wealth of rule-based knowledge about blood diseases in humans, providing advice when a doctor supplies facts and queries. It illustrates the contrast between expert systems and agents.",
  },
  {
    id: "cpe310_ch2_019",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "Which two differences between agents and expert systems do the notes name, using MYCIN to illustrate them?",
    options: [
      "Agents encapsulate their internal state and communicate via message passing, whereas the MYCIN expert system does neither",
      "Agents are situated in an environment and perform active operations, whereas MYCIN is unaware of the world and acts only on queries",
      "Agents are defined by highly deterministic and episodic behavior, whereas MYCIN utilizes continuous and unpredictable execution",
      "Agents represent formally sound and complete computational systems, whereas MYCIN produces mathematically unsound answers",
    ],
    correctAnswer: 1,
    explanation:
      "The notes say agents are situated in an environment (MYCIN is not aware of the world; it only obtains information by asking the user) and agents act (MYCIN does not operate on patients). These two points are the named differences.",
  },
  {
    id: "cpe310_ch2_020",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "What is the notes' position on the relationship between building an agent and solving AI?",
    options: [
      "We must completely solve natural language processing, computer vision, and common-sense reasoning before creating agents",
      "Building software agents and solving traditional artificial intelligence are considered to be entirely unrelated technical problems",
      "We do not have to solve all of artificial intelligence to build a useful agent — applying a little intelligence goes a long way",
      "Software agents must demonstrate the absolute maximum possible level of general intelligence to be considered commercially useful",
    ],
    correctAnswer: 2,
    explanation:
      "The notes argue that to build a useful agent we simply want a system that can choose the right action, typically in a limited domain, so we do not have to solve all of AI — 'a little intelligence goes a long way'. The Etzioni anecdote reinforces this.",
  },
  {
    id: "cpe310_ch2_021",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "According to the notes, we must first solve all the problems of AI before we can build a useful agent.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "This is false. The notes explicitly say we do not have to solve all the problems of AI to build a useful agent, summarised as 'a little intelligence goes a long way'.",
  },
  {
    id: "cpe310_ch2_022",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "What is 'folk psychology' as used in the notes?",
    options: [
      "A formal mathematical framework designed to systematically map continuous environment state transitions to discrete actions",
      "The standardized computational practice of assigning specific real-valued utilities to all possible system execution runs",
      "The automated algorithmic synthesis of software agents directly from the documented constraints of a task environment",
      "The approach of predicting and explaining behavior by attributing human-like attitudes such as believing, wanting, and hoping",
    ],
    correctAnswer: 3,
    explanation:
      "Folk psychology is described as predicting and explaining human behaviour by attributing attitudes such as believing, wanting, hoping, and fearing — as in the example of Janine taking her umbrella. The other options describe formal architecture, utility, and synthesis.",
  },
  {
    id: "cpe310_ch2_023",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "Dennett coined the term 'intentional system' to describe entities whose behaviour can be predicted in what way?",
    options: [
      "By consistently utilizing the method of attributing high-level beliefs, desires, and rational acumen to the entity",
      "By rigorously calculating and measuring the expected numerical utility of all possible physical execution runs",
      "By formally validating the logical soundness and completeness of a provided automated synthesis algorithm",
      "By exhaustively enumerating and mapping the finite set of discrete environment states within the system",
    ],
    correctAnswer: 0,
    explanation:
      "Dennett defined an intentional system as an entity whose behaviour can be predicted by the method of attributing belief, desires, and rational acumen. The other options describe utility, synthesis, and the formal environment model.",
  },
  {
    id: "cpe310_ch2_024",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "According to Dennett's distinction, what characterises a first-order intentional system?",
    options: [
      "It holds complex beliefs and desires specifically regarding its own internal beliefs and the distinct desires of others",
      "It strictly functions as a purely reactive mechanism and therefore possesses no internal beliefs or desires of any kind",
      "It possesses basic beliefs and desires but completely lacks any nested beliefs and desires about other beliefs and desires",
      "It evaluates its operational environment by meticulously assigning numerical utilities to every possible future state",
    ],
    correctAnswer: 2,
    explanation:
      "A first-order intentional system has beliefs and desires but no beliefs and desires about beliefs and desires. Having beliefs about beliefs is what defines a second-order system.",
  },
  {
    id: "cpe310_ch2_025",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "What makes a second-order intentional system more sophisticated than a first-order one?",
    options: [
      "It contains a significantly larger and more diverse physical repertoire of available actions within its operational environment",
      "It possesses complex beliefs and desires about beliefs and desires — effectively modeling its own mind and the minds of others",
      "It effectively leverages advanced virtualization techniques to concurrently implement more agents on a given hardware machine",
      "It utilizes a highly sophisticated mathematical algorithm to assign numerical utilities to complete runs rather than isolated states",
    ],
    correctAnswer: 1,
    explanation:
      "A second-order intentional system has beliefs and desires (and other intentional states) about beliefs and desires — both those of others and its own. This nesting of intentional states is what distinguishes it from first-order systems.",
  },
  {
    id: "cpe310_ch2_026",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "A second-order intentional system has beliefs and desires about beliefs and desires.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "This is true. Dennett's definition states that a second-order intentional system has beliefs and desires about beliefs and desires, both its own and those of others.",
  },
  {
    id: "cpe310_ch2_027",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "How do the notes describe the intentional notions (belief, desire, etc.) in relation to complex systems?",
    options: [
      "They serve as highly precise, real-valued physical measurements of a computational system's underlying electronic circuitry",
      "They function as formal numerical utilities that must be rigorously maximized over all possible execution runs of the system",
      "They are defined as the specific encapsulated methods and interfaces that an object-oriented system exposes for message passing",
      "They act as powerful abstraction tools that provide a convenient, familiar way to describe, explain, and predict complex behavior",
    ],
    correctAnswer: 3,
    explanation:
      "The notes call the intentional notions abstraction tools that provide a convenient and familiar way of describing, explaining, and predicting the behaviour of complex systems, alongside earlier abstractions like procedures, abstract data types, and objects.",
  },
  {
    id: "cpe310_ch2_028",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "In the post-declarative discussion, what characterises procedural programming?",
    options: [
      "The programmer explicitly specifies exactly what the system should do, detailing every required execution step",
      "The programmer states what needs to be achieved and lets a built-in control mechanism figure out the execution",
      "The programmer provides a high-level delegated goal and relies entirely on a built-in theory of rational agency",
      "The programmer manually assigns a utility value of 0 or 1 to each potential execution run to indicate success or failure",
    ],
    correctAnswer: 0,
    explanation:
      "In procedural programming, the notes say we specify exactly what a system should do. Stating only what to achieve is declarative programming, and giving a high-level delegated goal is the agent-level approach.",
  },
  {
    id: "cpe310_ch2_029",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "How is declarative programming described in the notes?",
    options: [
      "We explicitly dictate exactly what the system must do by providing a rigidly defined, step-by-step procedural execution script",
      "We allow the system to operate entirely autonomously according to a highly complex, built-in theory of rational agency",
      "We utilize advanced algorithmic synthesis to automatically generate an entire software agent directly from a task environment",
      "We simply state what we want to achieve and let a built-in control mechanism systematically figure out exactly what to do",
    ],
    correctAnswer: 3,
    explanation:
      "Declarative programming is described as stating something we want to achieve, giving general information about relationships between objects, and letting a built-in control mechanism (e.g., goal-directed theorem proving) figure out what to do. Saying exactly what to do is procedural.",
  },
  {
    id: "cpe310_ch2_030",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "In declarative programming, the programmer specifies exactly how the system should perform each step.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "This is false. Specifying exactly what the system should do is procedural programming; declarative programming instead states what to achieve and lets a control mechanism work out how.",
  },
  {
    id: "cpe310_ch2_031",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "How is the agent-level (post-declarative) approach distinguished from declarative programming in the notes?",
    options: [
      "We explicitly specify each individual procedural step the system must carry out to ensure the goal is successfully met",
      "We rigorously assign precise numerical utilities to individual environment states to formally guide the execution path",
      "We give a high-level description of the delegated goal and rely on the agent's built-in theory of rational agency to achieve it",
      "We exhaustively enumerate every possible execution run within the task environment to perfectly map the decision tree",
    ],
    correctAnswer: 2,
    explanation:
      "With agents, the notes say we give a high-level description of the delegated goal and let the control mechanism figure out what to do, knowing it will act in accordance with a built-in theory of rational agency. This goes a step beyond declarative programming.",
  },
  {
    id: "cpe310_ch2_032",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "In the abstract architecture, what is E = {e, e′, …}?",
    options: [
      "The comprehensive repertoire of all discrete actions currently available to the software agent",
      "A finite set containing all of the possible discrete, instantaneous states of the environment",
      "The complete set of all theoretically possible execution runs that currently end in an action",
      "The comprehensive collection of all continuously updated internal states held by the agent",
    ],
    correctAnswer: 1,
    explanation:
      "The notes assume the environment may be in any of a finite set E of discrete, instantaneous states. The agent's actions form the separate set Ac, and runs and internal states are modelled by other symbols.",
  },
  {
    id: "cpe310_ch2_033",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "What does Ac = {α, α′, …} represent, and what do these elements do?",
    options: [
      "The agent's repertoire of available actions, which actively transform the current state of the environment",
      "The precise set of internal percepts that are generated continuously by the agent's perception function",
      "The complete set of environment states that remain theoretically reachable from the initial state e₀",
      "The internal, highly structured data elements that effectively record the historical execution of the agent",
    ],
    correctAnswer: 0,
    explanation:
      "Ac is the agent's repertoire of possible actions, which transform the state of the environment. Percepts come from the see function and environment states form the set E.",
  },
  {
    id: "cpe310_ch2_034",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "How is a run r of an agent in an environment defined?",
    options: [
      "A deterministic, hard-coded mapping that strictly links one specific environment state to one specific action",
      "A precise, real-valued numerical utility score that is systematically assigned to each specific environment state",
      "A chronological, interleaved sequence consisting of alternating environment states and the agent's actions",
      "A specialized formal pair combining an environment structure and a logical predicate representing success",
    ],
    correctAnswer: 2,
    explanation:
      "A run is defined as a sequence of interleaved environment states and actions, e.g. e₀ →(α₀) e₁ →(α₁) e₂ → … A pair of an environment and a predicate is instead a task environment.",
  },
  {
    id: "cpe310_ch2_035",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "The state transformer function τ : R^Ac → ℘(E) represents the behaviour of what, and what does it map?",
    options: [
      "The operational behavior of the agent; it systematically maps internal cognitive states to specifically chosen physical actions",
      "The operational behavior of the perception system; it systematically maps external environment states to internal percepts",
      "The operational behavior of the utility model; it systematically maps full execution runs to real-valued numerical utilities",
      "The operational behavior of the environment; it maps a run ending in an action to a set of possible resulting successor states",
    ],
    correctAnswer: 3,
    explanation:
      "The state transformer function τ represents the behaviour of the environment, mapping a run that ends in an action to the set (power set ℘(E)) of possible successor states. Mapping internal states to actions is the agent's action function.",
  },
  {
    id: "cpe310_ch2_036",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "In the formal model, what does τ(r) = ∅ signify?",
    options: [
      "Every state in the environment is considered equally probable as the immediate successor to the current state",
      "There are no possible successor states remaining for r, indicating that the run has officially ended ('game over')",
      "The underlying environment is completely accessible to the agent, providing perfect information at all times",
      "The agent has successfully achieved the maximum possible utility score for the current execution run r",
    ],
    correctAnswer: 1,
    explanation:
      "If τ(r) = ∅, there are no possible successor states to the run r, so the notes say the run has ended ('game over'). It signals termination, not accessibility or utility.",
  },
  {
    id: "cpe310_ch2_037",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "An environment Env is formally given as a triple ⟨E, e₀, τ⟩. What are these three components?",
    options: [
      "A defined set of environment states, a specific initial starting state, and a state transformer function",
      "A defined set of interacting agents, a real-valued numerical utility function, and a formal success predicate",
      "A defined set of internal percepts, an internally maintained historical state, and an action selection function",
      "A defined set of potential execution runs, a calculated probability value, and an expected overall utility",
    ],
    correctAnswer: 0,
    explanation:
      "The environment triple ⟨E, e₀, τ⟩ consists of the set E of environment states, the initial state e₀ ∈ E, and the state transformer function τ. The other options confuse this with agents, perception, or utility constructs.",
  },
  {
    id: "cpe310_ch2_038",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "An agent is formally a function Ag : R^E → Ac. What does this signify about its decisions?",
    options: [
      "The agent determines its subsequent action based exclusively on the single current state, completely ignoring history",
      "The agent determines what action to perform based on the entire history of the system it has witnessed up to that point",
      "The agent determines its subsequent action by selecting completely at random from its repertoire of available actions",
      "The agent determines what action to perform by evaluating only the immediate numerical utility of the current state",
    ],
    correctAnswer: 1,
    explanation:
      "Because Ag maps runs ending in a state (R^E) to actions, the agent makes a decision about what action to perform based on the history of the system it has witnessed to date. Deciding from the current state alone characterises a purely reactive agent.",
  },
  {
    id: "cpe310_ch2_039",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "A purely reactive agent is modelled as action : E → Ac. What distinguishes it?",
    options: [
      "It continuously records the complete chronological history of states within an internal, highly structured data mechanism",
      "It systematically processes complex sequences of internal percepts in order to map them to optimal physical actions",
      "It bases its decision making entirely on the present environment state, with absolutely no reference to historical events",
      "It exclusively interacts with other peer agents through sophisticated negotiation protocols to determine its actions",
    ],
    correctAnswer: 2,
    explanation:
      "A purely reactive agent decides what to do without reference to its history, basing decisions entirely on the present — formalised as action : E → Ac, with the thermostat as the example. Keeping a history is what state-based agents do.",
  },
  {
    id: "cpe310_ch2_040",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "What does the function see : E → Per do in the perception model?",
    options: [
      "It systematically maps the agent's internal cognitive states directly to the selection of corresponding physical actions",
      "It systematically maps a combination of an internal state and a new percept to a dynamically updated internal state",
      "It systematically maps complete historical execution runs to specific real-valued utilities to evaluate overall performance",
      "It systematically maps external environment states to internal percepts, representing the agent's ability to observe the world",
    ],
    correctAnswer: 3,
    explanation:
      "The see function captures the agent's ability to observe its environment, mapping environment states to percepts (see : E → Per). Mapping internal states to actions is the action function, and updating internal state is the next function.",
  },
  {
    id: "cpe310_ch2_041",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "For a state-based agent, the action-selection function is defined as action : I → Ac. What does it map?",
    options: [
      "It maps the agent's internally maintained cognitive states directly to the selection of specific physical actions",
      "It maps the external states of the environment directly to the generation of specific internal sensory percepts",
      "It maps a combination of an internal state and a percept to a newly updated and recorded internal state",
      "It maps complete historical execution runs directly to formal probabilities of achieving successful task completion",
    ],
    correctAnswer: 0,
    explanation:
      "For an agent with state, the action function is a mapping from internal states to actions (action : I → Ac). Mapping environment states to percepts is see, and updating the internal state is next.",
  },
  {
    id: "cpe310_ch2_042",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "The function next : I × Per → I is introduced for state-based agents. What does it do?",
    options: [
      "It maps an external state of the environment directly to the generation of a specific internal sensory percept",
      "It maps an internally maintained cognitive state directly to the selection of a specific physical action for execution",
      "It maps a combination of a current internal state and a new sensory percept to a newly updated internal state",
      "It maps a complete execution run that ends in a specific action directly to a set of possible resulting successor states",
    ],
    correctAnswer: 2,
    explanation:
      "The next function maps an internal state together with a percept (I × Per) to a new internal state I, updating the agent's record of the environment. Producing percepts is see and selecting actions is action.",
  },
  {
    id: "cpe310_ch2_043",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "In the agent control loop, after the agent starts in initial internal state i₀ and repeats forever, what is the correct order of the repeated steps?",
    options: [
      "Perform a selected action via the action function, observe the world via see, update state via next, and then never repeat",
      "Generate a percept via see, update the internal state via next, select an action via action, and then perform that action",
      "Select an action via action, perform that action, observe the environment via see, and then formally stop the execution",
      "Update the internal state via next, perform a selected action via action, and then generate a new sensory percept via see",
    ],
    correctAnswer: 1,
    explanation:
      "The control loop repeats forever: observe the environment and generate a percept through see, update the internal state via next, select an action via action, and perform the action. Perception precedes state update, which precedes action selection.",
  },
  {
    id: "cpe310_ch2_044",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "How do the notes define an accessible environment?",
    options: [
      "An environment in which any physical action executed by the agent is guaranteed to have a single, highly predictable effect",
      "An environment in which the agent's overall performance depends strictly on completely discrete, unlinked execution episodes",
      "An environment that remains perfectly static and can only be changed directly through the agent's own active interventions",
      "An environment in which the agent is capable of obtaining complete, accurate, and up-to-date information about the current state",
    ],
    correctAnswer: 3,
    explanation:
      "An accessible environment is one in which the agent can obtain complete, accurate, up-to-date information about the environment's state; the more accessible it is, the simpler agents are to build. A single guaranteed effect defines a deterministic environment.",
  },
  {
    id: "cpe310_ch2_045",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "A deterministic environment is characterised by which property?",
    options: [
      "Any action has a single guaranteed effect, with no uncertainty about the resulting state",
      "The agent can always obtain complete, accurate, and up-to-date information about the current state",
      "Other dynamic processes continually change the system state entirely beyond the agent's direct control",
      "The environment consists of a strictly fixed, finite number of available actions and discrete percepts",
    ],
    correctAnswer: 0,
    explanation:
      "A deterministic environment is one in which any action has a single guaranteed effect — there is no uncertainty about the state that will result. Complete information defines accessibility, and a fixed finite number of actions/percepts defines a discrete environment.",
  },
  {
    id: "cpe310_ch2_046",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "What defines an episodic environment, and why is it simpler for the developer?",
    options: [
      "The environment remains perfectly static unless the agent acts, meaning no external processes interfere with planning",
      "Every physical action executed by the agent produces a single guaranteed effect, making all future outcomes highly predictable",
      "The environment provides infinitely many continuous percepts, allowing the agent to utilize smooth, uninterrupted reasoning",
      "Performance depends on discrete episodes with no link between them, so the agent can decide based only on the current episode",
    ],
    correctAnswer: 3,
    explanation:
      "In an episodic environment, performance depends on a number of discrete episodes with no link between performance in different scenarios, so the agent need only reason about the current episode. Changing only through the agent's actions is the static property.",
  },
  {
    id: "cpe310_ch2_047",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "Which statement correctly contrasts static and dynamic environments?",
    options: [
      "A static environment provides complete, up-to-date sensory information, whereas a dynamic environment is completely inaccessible",
      "A static environment consists of a finite number of discrete states, whereas a dynamic environment relies on continuous real-valued signals",
      "A static environment changes only through the agent's actions, whereas a dynamic environment has other processes operating beyond the agent's control",
      "A static environment guarantees a single outcome for every physical action, whereas a dynamic environment is broken into unconnected episodes",
    ],
    correctAnswer: 2,
    explanation:
      "A static environment can be assumed to remain unchanged except by the agent's own actions, while a dynamic environment has other processes operating on it and changes beyond the agent's control. The physical world is given as highly dynamic.",
  },
  {
    id: "cpe310_ch2_048",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "Russell and Norvig's examples in the notes give chess and taxi driving to illustrate which distinction?",
    options: [
      "The fundamental difference between fully accessible environments (chess) and partially inaccessible environments (taxi driving)",
      "The fundamental difference between discrete finite environments (chess) and continuous real-valued environments (taxi driving)",
      "The fundamental difference between purely static environments (chess) and highly dynamic changing environments (taxi driving)",
      "The fundamental difference between strictly deterministic environments (chess) and entirely non-deterministic environments (taxi driving)",
    ],
    correctAnswer: 1,
    explanation:
      "An environment is discrete if there are a fixed, finite number of actions and percepts; the notes cite chess as a discrete environment and taxi driving as a continuous one. The examples specifically illustrate the discrete vs continuous distinction.",
  },
  {
    id: "cpe310_ch2_049",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "The notes state that the physical world can, to all intents and purposes, be regarded as non-deterministic.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "This is true. In discussing deterministic vs non-deterministic environments, the notes say the physical world can to all intents and purposes be regarded as non-deterministic.",
  },
  {
    id: "cpe310_ch2_050",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "A utility function over states is written u : E → ℝ. What does it associate?",
    options: [
      "It systematically associates a specific real-valued number with every possible discrete state of the environment",
      "It systematically associates a strict boolean success or failure bit with every complete execution run",
      "It systematically associates a formal statistical probability with every potential run of the given agent",
      "It systematically associates an optimal physical action with every internally maintained cognitive state",
    ],
    correctAnswer: 0,
    explanation:
      "A utility function over states associates a real number with every environment state (u : E → ℝ); the agent's task is then to bring about high-utility states. Assigning 0/1 to runs is a predicate task specification.",
  },
  {
    id: "cpe310_ch2_051",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "What disadvantage do the notes identify for assigning utilities to individual states?",
    options: [
      "It inherently requires the underlying environment to remain fully accessible and perfectly static at all times",
      "It formally forces the environment to behave deterministically, completely eliminating any probabilistic outcomes",
      "It makes it exceedingly difficult to specify a long-term strategic view by focusing strictly on isolated instantaneous states",
      "It artificially guarantees that the agent will always successfully navigate towards the absolute best possible state",
    ],
    correctAnswer: 2,
    explanation:
      "The notes note that the disadvantage of utilities over individual states is that it is difficult to specify a long-term view, suggesting a possible discount for later states. This is why utilities over runs are introduced.",
  },
  {
    id: "cpe310_ch2_052",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "A utility function over runs is written u : R → ℝ. What advantage do the notes attribute to it?",
    options: [
      "It completely removes all sources of uncertainty from the environment by assigning a strictly deterministic probability",
      "It makes numerical utilities entirely unnecessary to specify, relying instead on a simple boolean success predicate",
      "It provides a formal mathematical guarantee regarding the strict soundness and completeness of the agent synthesis",
      "It allows the system to take an inherently long-term view by evaluating the complete sequence of states and actions",
    ],
    correctAnswer: 3,
    explanation:
      "Assigning utilities to runs themselves takes an inherently long-term view, addressing the limitation of state-based utilities. It can also be extended to incorporate probabilities of different states emerging.",
  },
  {
    id: "cpe310_ch2_053",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "Peter Cheeseman's critique of utility-based approaches, as cited in the notes, raises which concern?",
    options: [
      "Utility frameworks inherently render complex environments completely inaccessible and computationally non-deterministic",
      "'Where do the numbers come from?' — people generally do not naturally think in terms of precise numerical utilities",
      "Utility functions can mathematically only be defined over instantaneous states, preventing any long-term run evaluation",
      "The formally calculated expected utility can never accurately sum to one across an agent's complete set of execution runs",
    ],
    correctAnswer: 1,
    explanation:
      "The notes attribute to Peter Cheeseman the question 'Where do the numbers come from?', noting that people don't think in terms of utilities, so it is hard for them to specify tasks this way — though the approach still works in certain scenarios.",
  },
  {
    id: "cpe310_ch2_054",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "In the Tileworld, the utility of a run is defined as the number of holes filled divided by the number of holes that appeared. What utility results if the agent fills every hole?",
    options: [
      "It results in a maximum utility of exactly 1, representing a perfect success rate for that specific execution run",
      "It results in a baseline utility of exactly 0, indicating that the system's overall entropy has been fully neutralized",
      "It results in a utility equal to the total absolute number of holes that appeared throughout the entire environment",
      "It results in a negative utility value, dynamically penalizing the agent for consuming excessive computational resources",
    ],
    correctAnswer: 0,
    explanation:
      "Because Tileworld utility is (holes filled)/(holes that appeared), filling all holes gives a utility of 1, while filling none gives 0. The Tileworld is a grid of tiles, obstacles, and holes where the agent scores by filling holes.",
  },
  {
    id: "cpe310_ch2_055",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "The expected utility of an agent, EU(Ag, Env) = Σ u(r)·P(r | Ag, Env), combines which two quantities over the runs?",
    options: [
      "The total quantity of accessible environment states and the specific number of available physical actions",
      "The formally calculated utility of each execution run and the statistical probability that the given run occurs",
      "The overall degree of environmental accessibility and the exact level of operational determinism within the system",
      "The mathematical soundness of the automated synthesis algorithm and its corresponding algorithmic completeness",
    ],
    correctAnswer: 1,
    explanation:
      "Expected utility sums, over all runs of the agent in the environment, the utility of each run multiplied by the probability that the run occurs. The run probabilities for a given agent/environment sum to one.",
  },
  {
    id: "cpe310_ch2_056",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "How is the optimal agent Ag_opt defined for an environment Env?",
    options: [
      "It is formally defined as the specific agent that successfully minimizes the total number of execution runs that prematurely end",
      "It is formally defined as the specific agent that can be completely implemented on the smallest possible physical machine m",
      "It is formally defined as the specific agent that successfully maximizes the expected utility over all possible agents in AG",
      "It is formally defined as the specific agent that consistently and successfully avoids all designated bad states within set B",
    ],
    correctAnswer: 2,
    explanation:
      "The optimal agent is defined as the one that maximises expected utility, i.e. argmax over all Ag ∈ AG of EU(Ag, Env). Restricting to agents implementable on a machine m gives the bounded optimal agent instead.",
  },
  {
    id: "cpe310_ch2_057",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "According to the notes, an optimal agent is guaranteed to achieve the best outcome on every single run.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "This is false. The notes caution that being optimal does not mean an agent will be best; only that, on average, we can expect it to do best, because it maximises expected utility.",
  },
  {
    id: "cpe310_ch2_058",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "How is the bounded optimal agent Ag_bopt defined with respect to a machine m?",
    options: [
      "It is the specific theoretical agent that successfully maximizes expected utility among the entire unrestricted set of all possible agents in AG",
      "It is defined as any agent that systematically succeeds in at least one execution run without completely exhausting the machine's memory limit",
      "It is the specific optimal agent that structurally utilizes the absolute fewest internal cognitive states to process its real-time percepts",
      "It is the specific agent that successfully maximizes expected utility among only those distinct agents that are actually implementable on machine m",
    ],
    correctAnswer: 3,
    explanation:
      "Because some agents cannot be implemented on some computers, AG_m denotes agents implementable on machine m, and the bounded optimal agent is argmax over Ag ∈ AG_m of EU(Ag, Env). It restricts the optimisation to realisable agents.",
  },
  {
    id: "cpe310_ch2_059",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "A predicate task specification is written Ψ : R → {0, 1}. How are the two output values interpreted?",
    options: [
      "An output of 1 mathematically indicates that the agent succeeds on that specific run, while an output of 0 strictly indicates that it fails",
      "An output of 1 formally denotes that the execution run is perfectly accessible, while an output of 0 denotes that it is completely inaccessible",
      "An output of 1 logically specifies that the environment is strictly deterministic, while an output of 0 specifies a non-deterministic environment",
      "An output of 1 structurally represents the absolute maximum expected utility, while an output of 0 represents the baseline average utility",
    ],
    correctAnswer: 0,
    explanation:
      "A predicate task specification is a special case of assigning utilities to histories: if a run is assigned 1 the agent succeeds on that run, otherwise it fails. It maps each run to either 0 (false) or 1 (true).",
  },
  {
    id: "cpe310_ch2_060",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "A task environment is a pair ⟨Env, Ψ⟩. What does a task environment specify?",
    options: [
      "It explicitly specifies only the calculated real-valued numerical utility of each individual, instantaneous environment state",
      "It strictly specifies only the formal statistical probabilities with which specific execution runs are predicted to occur",
      "It completely specifies the properties of the system the agent will inhabit alongside the criteria by which its success or failure is judged",
      "It comprehensively specifies only the complex internal cognitive states and the raw sensory percepts utilized by the software agent",
    ],
    correctAnswer: 2,
    explanation:
      "A task environment ⟨Env, Ψ⟩ pairs an environment with a predicate over runs, specifying both the properties of the system the agent will inhabit and the criteria by which the agent will be judged to have failed or succeeded.",
  },
  {
    id: "cpe310_ch2_061",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "Using R_Ψ(Ag, Env) for the runs that satisfy Ψ, when does an agent succeed in a task environment ⟨Env, Ψ⟩?",
    options: [
      "The agent is judged to formally succeed only when the specific set of satisfying runs R_Ψ(Ag, Env) evaluates to completely empty",
      "The agent is judged to formally succeed when the set of satisfying runs R_Ψ(Ag, Env) is exactly equal to the complete set of all possible runs R(Ag, Env)",
      "The agent is judged to formally succeed strictly when the state transformer function τ(r) = ∅ evaluates true for every possible execution run",
      "The agent is judged to formally succeed precisely when its formally calculated expected utility EU(Ag, Env) perfectly equals zero",
    ],
    correctAnswer: 1,
    explanation:
      "An agent succeeds in ⟨Env, Ψ⟩ when R_Ψ(Ag, Env) = R(Ag, Env) — that is, when every possible run of the agent satisfies the predicate Ψ. An empty satisfying set would mean it never succeeds.",
  },
  {
    id: "cpe310_ch2_062",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "How is an achievement task specified, and when does the agent succeed?",
    options: [
      "It is explicitly specified by a designated set B of 'bad' states; the agent formally succeeds only if it can perfectly avoid all of them",
      "It is explicitly specified by a real-valued numerical utility over each state; the agent formally succeeds only if this utility is maximized",
      "It is explicitly specified by a precise probability distribution over all runs; the agent formally succeeds only if the distribution sums to one",
      "It is explicitly specified by a designated set G of 'good' states; the agent formally succeeds if it is guaranteed to bring about at least one of them",
    ],
    correctAnswer: 3,
    explanation:
      "An achievement task is of the form 'achieve state of affairs φ' and is specified by a set G of good/goal states; the agent succeeds if it is guaranteed to bring about at least one of them. Avoiding a set B of bad states characterises a maintenance task.",
  },
  {
    id: "cpe310_ch2_063",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "A maintenance task is specified by a set B of 'bad' states. When does the agent succeed at it?",
    options: [
      "The agent succeeds strictly if it successfully manages to avoid all states in B, never performing actions that bring about any state within that set",
      "The agent succeeds dynamically if it actively maneuvers the environment to intentionally bring about at least one distinct state contained within set B",
      "The agent succeeds optimally if it computationally maximizes the formal expected utility over all possible execution runs generated within the environment",
      "The agent succeeds reactively if every execution run it produces terminates immediately, thereby preventing any state transition from occurring",
    ],
    correctAnswer: 0,
    explanation:
      "A maintenance task is of the form 'maintain state of affairs ψ', specified by a set B of bad states; the agent succeeds if it avoids all states in B and never performs actions resulting in any bad state. Bringing about a good state is the achievement-task criterion.",
  },
  {
    id: "cpe310_ch2_064",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "In a maintenance task, the agent succeeds if it manages to avoid all the states in the 'bad' set B.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "This is true. A maintenance goal is specified by a set B of bad states, and the agent succeeds in an environment if it avoids all states in B and never performs actions that result in any of them.",
  },
  {
    id: "cpe310_ch2_065",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "Agent synthesis is described in the notes as which kind of activity?",
    options: [
      "The manual process of meticulously hand-coding deterministic stimulus-response rules for a purely reactive software agent",
      "The analytical process of carefully assigning precise, real-valued numerical utilities to every single instantaneous environment state",
      "The collaborative process of systematically negotiating a formal operational agreement between two entirely independent software agents",
      "The algorithmic process of automatic programming, which automatically generates an agent guaranteed to succeed in a given task environment",
    ],
    correctAnswer: 3,
    explanation:
      "Agent synthesis is described as automatic programming: the goal is a program that takes a task environment and automatically generates an agent that succeeds in it. This is formalised by the syn function.",
  },
  {
    id: "cpe310_ch2_066",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "The synthesis function has the signature syn : TE → (AG ∪ {⊥}). What is the role of ⊥ in this signature?",
    options: [
      "It formally represents the absolute optimal software agent that can be generated for the specified input task environment",
      "It mathematically represents the comprehensive set of all designated 'bad' states that the synthesized agent must strictly avoid",
      "It functions conceptually like a 'null' value in standard programming, being returned whenever no successful agent can be generated",
      "It statistically represents the precise calculated probability that a specifically generated execution run will successfully occur",
    ],
    correctAnswer: 2,
    explanation:
      "The syn function maps a task environment (TE) to either an agent in AG or ⊥, where the notes say to think of ⊥ as being like null in Java. It represents the case where the function does not return an agent.",
  },
  {
    id: "cpe310_ch2_067",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "What does it mean for a synthesis algorithm to be sound?",
    options: [
      "It guarantees that it will successfully and consistently return some form of functional agent for absolutely every possible given input",
      "It guarantees that whenever it actually returns an agent, that specific agent will definitely succeed in the task environment passed as input",
      "It guarantees that it will always successfully return a functional agent whenever a valid agent that solves the environment is known to exist",
      "It guarantees that it will systematically and accurately assign the absolute maximum possible numerical utility to every generated execution run",
    ],
    correctAnswer: 1,
    explanation:
      "A synthesis algorithm is sound if, whenever it returns an agent, that agent succeeds in the task environment given as input. Being guaranteed to return an agent when a successful one exists is completeness, not soundness.",
  },
  {
    id: "cpe310_ch2_068",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "What does it mean for a synthesis algorithm to be complete?",
    options: [
      "It is formally guaranteed to successfully return an agent whenever there exists at least one agent that will succeed in the given task environment",
      "It is formally guaranteed that whenever it returns a synthesized agent, that specific agent will definitively succeed in the provided task environment",
      "It is formally guaranteed to maintain strict computational persistence, ensuring that it never returns a null or ⊥ value under any circumstances",
      "It is formally guaranteed to exclusively return the specific bounded optimal agent that holds the highest possible calculated expected utility",
    ],
    correctAnswer: 0,
    explanation:
      "A synthesis algorithm is complete if it is guaranteed to return an agent whenever there exists an agent that will succeed in the task environment given as input. The guarantee that any returned agent succeeds is soundness.",
  },
  {
    id: "cpe310_ch2_069",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "A sound synthesis algorithm may return an agent that fails in the task environment given as input.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "This is false. Soundness guarantees precisely that whenever the algorithm returns an agent, that agent succeeds in the input task environment, so a sound algorithm cannot return a failing agent.",
  },
];

export default cpe310Chapter3;
