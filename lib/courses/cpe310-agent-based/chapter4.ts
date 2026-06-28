import { QuestionV2 } from "@/lib/quiz-types";

const cpe310Chapter4: QuestionV2[] = [
  {
    id: "cpe310_ch4_001",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "How do the notes define agent architecture?",
    options: [
      "The complete set of physical hardware sensors and motor actuators attached to a robotic system",
      "The internal design of an intelligent agent that defines how it perceives its environment, makes decisions, and performs actions to achieve goals",
      "The categorical list of all external physical and digital environments in which an agent may be successfully deployed",
      "A structured database of static facts and logical rules that maintains state but possesses no active decision-making role",
    ],
    correctAnswer: 1,
    explanation:
      "Agent architecture is defined as the internal design of an intelligent agent that determines how it perceives its environment, makes decisions, and performs actions to achieve goals. It is about internal design, not merely hardware or environments.",
  },
  {
    id: "cpe310_ch4_002",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "In the basic closed-loop interaction cycle, which ordering of components is correct?",
    options: [
      "Environment → Actuators → Knowledge Base → Processing Unit → Sensors → Environment",
      "Sensors → Environment → Actuators → Processing Unit → Knowledge Base → Sensors",
      "Environment → Sensors → Processing Unit → Knowledge Base → Actuators → Environment",
      "Processing Unit → Sensors → Environment → Knowledge Base → Actuators → Processing Unit",
    ],
    correctAnswer: 2,
    explanation:
      "The closed-loop cycle runs Environment → (percepts) → Sensors → Processing Unit → Knowledge Base → Actuators → (actions) → Environment. Percepts flow in through sensors and actions flow out through actuators, closing the loop.",
  },
  {
    id: "cpe310_ch4_003",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "In the closed-loop architecture, what is the role of the sensors?",
    options: [
      "Interpret incoming percepts, apply logical reasoning, and explicitly decide what physical actions to execute",
      "Store accumulated knowledge, condition-action rules, environmental facts, and learned historical experience",
      "Execute the final selected physical actions directly into the surrounding external environment",
      "Detect dynamic changes in the surrounding environment and capture raw data to generate internal percepts",
    ],
    correctAnswer: 3,
    explanation:
      "Sensors are described as detecting changes in the environment and capturing data. Interpreting percepts is the processing unit's job, storing knowledge is the knowledge base's, and executing actions is the actuators'.",
  },
  {
    id: "cpe310_ch4_004",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "Which component of the closed-loop architecture interprets percepts, reasons, and decides what to do?",
    options: ["Processing Unit", "Sensors", "Knowledge Base", "Actuators"],
    correctAnswer: 0,
    explanation:
      "The processing unit interprets percepts, reasons, and decides what to do. Sensors capture data, the knowledge base stores information, and actuators carry out the chosen actions.",
  },
  {
    id: "cpe310_ch4_005",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "What does the knowledge base store in the closed-loop architecture?",
    options: [
      "The explicit control signals for the physical motors used to move the agent through the environment",
      "Only the single most recently acquired sensory percept, discarding all previous historical environmental data",
      "The active log of physical actions that are currently being executed by the agent's attached hardware actuators",
      "The agent's accumulated knowledge, condition-action rules, environmental facts, and learned historical experience",
    ],
    correctAnswer: 3,
    explanation:
      "The knowledge base stores knowledge, rules, facts, and experience. It is the agent's repository of information, distinct from the sensing, processing, and actuation components.",
  },
  {
    id: "cpe310_ch4_006",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "In the closed-loop cycle, actuators affect the environment, sensors then detect the resulting changes, and this new information starts the cycle again.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "This is true. The feedback loop is described exactly this way: actuators affect the environment, the environment changes, sensors detect those changes, and the new information restarts the cycle.",
  },
  {
    id: "cpe310_ch4_007",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "Which list correctly names the four types of agent architecture given in the notes?",
    options: [
      "The Sensor Module, the Processing Unit, the Knowledge Base, and the Actuator Module",
      "Simple Reactive Agents, Reactive Planners, Deliberative Architectures, Layered Architectures",
      "The Perception Architecture, the Reasoning Architecture, the Planning Architecture, and the Actuation Architecture",
      "The Upper Deliberative Layer, the Middle Coordination Layer, the Lower Reactive Layer, and the Environment",
    ],
    correctAnswer: 1,
    explanation:
      "The notes classify agent architecture into four types: Simple Reactive Agents, Reactive Planners, Deliberative Architectures, and Layered Architectures. The other options list components or layers rather than architecture types.",
  },
  {
    id: "cpe310_ch4_008",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "Which of the following is one of the four types of agent architecture listed in the notes?",
    options: [
      "Condition–Action Architectures, which rely exclusively on static if-then programming rules",
      "Sensor-Fusion Architectures, which merge multiple hardware inputs into a single percept",
      "Layered Architectures, which divide control into multiple cooperating hierarchical levels",
      "Knowledge-Base Architectures, which store absolute facts without active reasoning engines",
    ],
    correctAnswer: 2,
    explanation:
      "Layered Architectures is one of the four listed types, alongside Simple Reactive Agents, Reactive Planners, and Deliberative Architectures. The other options are not among the four named types.",
  },
  {
    id: "cpe310_ch4_009",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "What characterises a Simple Reactive Agent?",
    options: [
      "It reacts directly to immediate percepts using simple condition–action rules without maintaining any internal state",
      "It builds a comprehensive internal world model and executes long-term planning before taking any physical action",
      "It divides system control into cooperating upper, middle, and lower layers to balance reasoning and reaction",
      "It reasons exclusively through complex logical inference by evaluating facts stored in a centralized knowledge base",
    ],
    correctAnswer: 0,
    explanation:
      "A simple reactive agent reacts directly to percepts using condition–action rules. Building a world model and planning describes a deliberative architecture, while dividing control into layers describes a layered architecture.",
  },
  {
    id: "cpe310_ch4_010",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "What is the working principle of a Simple Reactive Agent?",
    options: [
      "The Sense → Perceive → React → Act cycle",
      "The Perceive → Reason → Plan → Act cycle",
      "The Sense → Match Rule → Act cycle",
      "The Goal → Plan → Coordinate → React cycle",
    ],
    correctAnswer: 2,
    explanation:
      "The simple reactive agent's working principle is Sense → Match Rule → Act, a continuous cycle of stimulus–response. Sense → Perceive → React → Act is instead the reactive planner's principle.",
  },
  {
    id: "cpe310_ch4_011",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "In a Simple Reactive Agent, what do the condition–action rules do?",
    options: [
      "Store the agent's long-term environmental experience and dynamically learned strategic behaviors",
      "Directly match incoming sensor percepts to static rules to determine the immediate corresponding action",
      "Continuously build and update a complete internal model of the external world based on historical data",
      "Coordinate complex concurrent tasks and explicitly resolve resource conflicts between architectural layers",
    ],
    correctAnswer: 1,
    explanation:
      "Condition–action rules match percepts to rules and determine the corresponding action. Simple reactive agents have no memory or world model, so storing experience and modelling the world are not their function.",
  },
  {
    id: "cpe310_ch4_012",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "Which of the following is listed as an advantage of a Simple Reactive Agent?",
    options: [
      "The ability to generate highly effective long-term strategic plans",
      "The explicit explainability of complex multi-step reasoning processes",
      "The robust support for running multiple parallel behaviors simultaneously",
      "The extremely fast response time resulting from low computational overhead",
    ],
    correctAnswer: 3,
    explanation:
      "Among the advantages of a simple reactive agent are fast response time, easy design, low computational cost, and suitability for real-time systems. Long-term planning and explainability are strengths of deliberative architectures instead.",
  },
  {
    id: "cpe310_ch4_013",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "A Simple Reactive Agent maintains memory of past percepts.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "This is false. The notes list 'No memory' as a disadvantage of simple reactive agents; they react directly to current percepts without retaining past ones.",
  },
  {
    id: "cpe310_ch4_014",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "Which of the following is given as an application of Simple Reactive Agents?",
    options: [
      "Automatic sliding doors that trigger instantly when proximity sensors detect immediate human physical presence",
      "Complex portfolio management and pattern-based fraud detection algorithms utilized in the finance industry",
      "Long-term patient treatment planning and deductive medical diagnosis support systems in healthcare",
      "Multi-step strategic planning and resource allocation optimization within enterprise decision support systems",
    ],
    correctAnswer: 0,
    explanation:
      "Applications of simple reactive agents include automatic doors, thermostats, traffic light controllers, line-following robots, and basic game AI. Finance, healthcare, and strategic decision support are applications of deliberative architecture.",
  },
  {
    id: "cpe310_ch4_015",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "How do the notes define Reactive Planners?",
    options: [
      "Agents that rely solely on static condition–action rules, executing direct responses with absolutely no planning capabilities",
      "Agents that combine immediate reactions with basic planning capabilities and adapt dynamically to changing environments",
      "Agents that explicitly reason purely through deep logical inference and world modeling before performing any physical action",
      "Agents that store all historical knowledge in a single static knowledge base utilized for complex backward chaining",
    ],
    correctAnswer: 1,
    explanation:
      "Reactive planners are defined as agents that combine immediate reactions with basic planning capabilities and adapt dynamically to changing environments. Pure condition–action behaviour without planning describes a simple reactive agent.",
  },
  {
    id: "cpe310_ch4_016",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "Reactive planners can adapt dynamically to changing environments.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "This is true. The notes describe reactive planners as combining immediate reactions with basic planning and adapting dynamically to changing environments, which is also reflected in their advantage of working well in dynamic environments.",
  },
  {
    id: "cpe310_ch4_017",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "Which set correctly lists the components of a Reactive Planner?",
    options: [
      "The basic pipeline of Sensors, direct Condition–Action Rules, and physical Actuators",
      "The cognitive pipeline of a World Model, a Reasoning Engine, a Planner, and Actuators",
      "The hierarchical pipeline of an Upper Deliberative Layer, Middle Layer, and Lower Layer",
      "The specific pipeline of Sensors, a Perception Module, Behavior Modules, Action Selection, and Actuators",
    ],
    correctAnswer: 3,
    explanation:
      "A reactive planner's architecture flow consists of Sensors, a Perception Module, Reactive Rules/Behavior Modules, Action Selection, and Actuators. The three-component list belongs to the simple reactive agent and the world-model list to the deliberative architecture.",
  },
  {
    id: "cpe310_ch4_018",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "In a Reactive Planner, what is the role of the Action Selection component?",
    options: [
      "Continuously interpret raw sensor data and explicitly detect relevant environmental conditions",
      "Directly capture raw physical information from the environment before passing it to the perception module",
      "Select the most appropriate action from competing behaviors, typically using priority-based arbitration",
      "Apply deep logical deduction and inference rules over an internally maintained knowledge base",
    ],
    correctAnswer: 2,
    explanation:
      "Action Selection chooses the most appropriate action, for example through priority-based arbitration. Interpreting sensor data is the perception module's task, and capturing information is the sensors' task.",
  },
  {
    id: "cpe310_ch4_019",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "What is the working principle of a Reactive Planner?",
    options: [
      "The continuous feedback loop of Sense → Perceive → React → Act",
      "The direct stimulus-response loop of Sense → Match Rule → Act",
      "The cognitive reasoning loop of Goal → Reason → Plan → Execute",
      "The layered coordination loop of Plan → Coordinate → React → Sense",
    ],
    correctAnswer: 0,
    explanation:
      "The reactive planner's working principle is Sense → Perceive → React → Act in a continuous feedback loop. Sense → Match Rule → Act is the simpler principle of the simple reactive agent.",
  },
  {
    id: "cpe310_ch4_020",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "Which of the following is listed as an advantage of Reactive Planners?",
    options: [
      "The ability to provide complete, highly accurate long-term reasoning about future environmental consequences",
      "Supports parallel behaviors such as obstacle avoidance and goal seeking operating simultaneously",
      "The capability to continuously maintain a complete, deep, and globally accurate internal world model",
      "The intrinsic ability to learn extensively from past historical experiences within traditional architectural designs",
    ],
    correctAnswer: 1,
    explanation:
      "An advantage of reactive planners is that they support parallel behaviors, with multiple behaviors operating simultaneously. Complete long-term reasoning, a deep world model, and extensive learning are explicitly listed as limitations, not advantages.",
  },
  {
    id: "cpe310_ch4_021",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "Which of the following is listed as a limitation of Reactive Planners?",
    options: [
      "They suffer from an excessively slow response time, making them totally unviable in real-time environments",
      "They possess a strict inability to function properly if provided with incomplete or noisy sensor information",
      "They frequently experience severe behavior conflicts when multiple reactive rules or parallel behaviors compete",
      "They incur a very high computational cost due to the heavy processing requirements of global long-term planning",
    ],
    correctAnswer: 2,
    explanation:
      "A listed limitation is that behavior conflicts can occur when multiple reactive rules compete with each other. Reactive planners are actually noted as fast, robust with incomplete information, and low in computational cost.",
  },
  {
    id: "cpe310_ch4_022",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "Which of the following is given as an application of Reactive Planners?",
    options: [
      "Simple automatic sliding doors that trigger instantly upon detecting a person's immediate physical presence",
      "Standard residential thermostats that trigger heating or cooling based strictly on the current room temperature",
      "Basic educational line-following robots that react directly to immediate inputs from downward-facing optical sensors",
      "Unmanned Aerial Vehicles dynamically adapting to shifting wind patterns, sudden no-fly zones, and rapid mission changes",
    ],
    correctAnswer: 3,
    explanation:
      "Applications of reactive planners include robotics, autonomous vehicles, UAVs adapting to wind and no-fly zones, cybersecurity, disaster response, and industrial automation. Automatic doors, thermostats, and line-following robots are simple reactive agent applications.",
  },
  {
    id: "cpe310_ch4_023",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "How is a Deliberative Architecture defined in the notes?",
    options: [
      "An architecture that uses an internal model of the environment to reason, plan, and make logical decisions before performing actions to achieve goals",
      "An architecture that reacts directly to incoming percepts using static condition–action rules without maintaining any internal world model",
      "An architecture whose only functional components are basic hardware sensors for input and simple motor actuators for physical output",
      "An architecture that selects physical actions purely by running priority-based arbitration across competing parallel behavior modules",
    ],
    correctAnswer: 0,
    explanation:
      "A deliberative architecture uses an internal model of the environment to reason, plan, and make logical decisions before acting to achieve goals. Reacting directly with condition–action rules and no model describes the simple reactive agent.",
  },
  {
    id: "cpe310_ch4_024",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "What are the three internal subcomponents of the deliberative agent system?",
    options: [
      "The hardware Sensors, the static Condition–Action Rules, and the physical Actuators",
      "The Upper Deliberative Layer, the Middle Coordination Layer, and the Lower Reactive Layer",
      "The Perception Module, the Priority Action Selection module, and the parallel Behavior Modules",
      "The World Model/Knowledge Base, the Reasoning Engine/Inference, and the Planner/Goal Selection Module",
    ],
    correctAnswer: 3,
    explanation:
      "The deliberative agent system contains a World Model/Knowledge Base, a Reasoning Engine/Inference, and a Planner/Goal Selection Module. The other options list simple-reactive components, layered-architecture layers, and reactive-planner components.",
  },
  {
    id: "cpe310_ch4_025",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "Within a deliberative architecture, what does the Reasoning Engine / Inference component do?",
    options: [
      "Captures raw sensory percepts directly from the physical environment to build the initial state representation",
      "Applies logical inference, deduction, and domain rules, deriving new facts and evaluating consequences of possible actions",
      "Selects the most appropriate immediate behaviors through a system of strict priority-based arbitration",
      "Executes the final chosen physical actions by directly interfacing with the system's external hardware actuators",
    ],
    correctAnswer: 1,
    explanation:
      "The reasoning engine applies logical inference, deduction, and domain rules, deriving new facts and evaluating the consequences of possible actions. Capturing percepts is sensing, and executing actions is the actuators' role.",
  },
  {
    id: "cpe310_ch4_026",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "Which of the following is listed as an advantage of a Deliberative Architecture?",
    options: [
      "An extremely fast physical response time that makes it perfectly suitable for dynamic real-time systems",
      "A very low overall computational cost due to the complete lack of complex internal state management",
      "High explainability, as decisions can be clearly traced through explicit logical reasoning and planning steps",
      "Complete operational independence from the accuracy or completeness of any internal environmental model",
    ],
    correctAnswer: 2,
    explanation:
      "Advantages of deliberative architecture include goal-oriented behavior, logical reasoning, explainability (traceable decisions), better long-term planning, and flexibility in structured environments. Fast response and low cost are strengths of reactive approaches, not deliberative ones.",
  },
  {
    id: "cpe310_ch4_027",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "Which of the following is listed as a limitation of a Deliberative Architecture?",
    options: [
      "It incurs a high computational cost, since explicit planning and deep reasoning require significant processing power",
      "It suffers from a complete structural inability to formulate or pursue explicit long-term operational goals",
      "It possesses absolutely no inherent capacity for applying logical reasoning or deduction to novel scenarios",
      "It strictly lacks any form of internal world model, preventing it from predicting future environmental states",
    ],
    correctAnswer: 0,
    explanation:
      "Limitations of deliberative architecture include high computational cost, slow response time, dependence on accurate models, complex implementation, and scalability issues. Goal pursuit, reasoning, and a world model are central features, not limitations.",
  },
  {
    id: "cpe310_ch4_028",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "A deliberative architecture is well suited to real-time or rapidly changing environments.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "This is false. The notes list slow response time as a limitation and state deliberative architecture is not suitable for real-time or rapidly changing environments because planning and reasoning are costly.",
  },
  {
    id: "cpe310_ch4_029",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "Which of the following is given as an application of Deliberative Architecture?",
    options: [
      "Basic automatic sliding doors that open instantly upon detecting immediate human physical presence",
      "Simple educational line-following robots that react instantly to changes in downward-facing optical sensors",
      "Complex healthcare treatment planning, logical diagnosis support, and long-term patient management systems",
      "Simple, highly predictable enemy movement patterns utilized primarily in early arcade video games",
    ],
    correctAnswer: 2,
    explanation:
      "Deliberative architecture is applied in robotics and automation, decision support systems, healthcare, finance, and intelligent assistants. Automatic doors, line-following robots, and basic game enemy movement are simple reactive agent applications.",
  },
  {
    id: "cpe310_ch4_030",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "How is a Layered Architecture defined in the notes?",
    options: [
      "A design that relies entirely on a single, monolithic condition–action rule set with absolutely no hierarchical layers",
      "A design in which control is divided into multiple layers, each performing a specific function and cooperating with the others for efficient decision-making and action",
      "A design consisting exclusively of a deep internal world model and a complex logical reasoning engine",
      "A design that selects physical actions purely by mapping immediate percepts through stimulus–response reflexes",
    ],
    correctAnswer: 1,
    explanation:
      "A layered architecture divides control into multiple layers, each performing a specific function and cooperating with the others to achieve efficient decision-making and action execution. The single rule-set and stimulus–response descriptions fit the simple reactive agent.",
  },
  {
    id: "cpe310_ch4_031",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "In a layered architecture, what does the upper (deliberative) layer handle?",
    options: [
      "It exclusively handles real-time physical reflex actions and the immediate processing of raw sensor data",
      "It actively handles task coordination and direct conflict resolution between competing parallel behaviors",
      "It strictly manages the direct, low-level execution of precise motor control signals to the physical hardware",
      "It manages high-level planning and reasoning, including explicit goal formulation, long-term planning, and world model evaluation",
    ],
    correctAnswer: 3,
    explanation:
      "The upper deliberative layer handles planning and reasoning, including goal formulation, long-term planning, and world model reasoning. Reflex actions belong to the lower layer and coordination to the middle layer.",
  },
  {
    id: "cpe310_ch4_032",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "What is the function of the middle (executive / coordination) layer in a layered architecture?",
    options: [
      "It performs task coordination, explicit conflict resolution, and the selection of appropriate active behaviors",
      "It performs complex goal formulation, deep logical reasoning, and strategic long-term execution planning",
      "It performs immediate reflex actions, rapid real-time sensor processing, and direct hardware actuation",
      "It serves as the dedicated memory bank for exclusively storing the agent's complete internal world model",
    ],
    correctAnswer: 0,
    explanation:
      "The middle executive/coordination layer performs task coordination, conflict resolution, and behavior selection, taking plans from above and choosing appropriate behaviors. Goal formulation is the upper layer's role and reflex actions the lower layer's.",
  },
  {
    id: "cpe310_ch4_033",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "In a layered architecture, which tasks are handled by the lower (reactive) layer?",
    options: [
      "It manages abstract goal formulation, deductive reasoning, and strategic long-term task planning",
      "It strictly manages raw sensor processing, immediate physical reflex actions, and real-time environmental responses",
      "It handles structural conflict resolution among multiple competing behaviors attempting to access resources",
      "It performs complex world model reasoning by logically evaluating facts across stored domain knowledge",
    ],
    correctAnswer: 1,
    explanation:
      "The lower reactive layer handles sensor processing, reflex actions, and real-time responses, executing selected behaviors and gathering percepts. Long-term planning and world-model reasoning are upper-layer functions.",
  },
  {
    id: "cpe310_ch4_034",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "In a layered architecture, the lower (reactive) layer handles real-time reactions and interaction with the environment.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "This is true. The notes state that the lower layers handle real-time reactions and interaction with the environment, including reflex actions and sensor processing.",
  },
  {
    id: "cpe310_ch4_035",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "Which statement best describes how the layers work together in a layered architecture?",
    options: [
      "The lower layer formulates strategic long-term goals while the upper layer exclusively executes real-time physical reactions",
      "Each architectural layer operates in complete physical isolation with absolutely no information exchanged between them",
      "The middle layer executes direct motor commands while the lower layer strictly focuses on long-term strategy and planning",
      "The upper layer sets goals and plans, the middle layer coordinates tasks and selects behaviors, and the lower layer reacts and gathers percepts from the environment",
    ],
    correctAnswer: 3,
    explanation:
      "The layers cooperate: the upper layer sets long-term goals and plans, the middle layer takes those plans and coordinates tasks and behavior selection, and the lower layer executes behaviors, reacts immediately, and gathers percepts. The environment returns feedback through sensors.",
  },
  {
    id: "cpe310_ch4_036",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "Which of the following is listed as an advantage of a Layered Architecture?",
    options: [
      "The formal guarantee of perfect global mathematical optimality in decision-making across all distinct layers",
      "The complete structural elimination of all communication latency and processing overhead between components",
      "High modularity, allowing the clear separation of diverse computational concerns into distinct, focused layers",
      "The complete operational independence of the higher deliberative layers from any data gathered by the lower layers",
    ],
    correctAnswer: 2,
    explanation:
      "Advantages of layered architecture include modularity, scalability, maintainability, robustness, and flexibility. Global optimality, zero communication overhead, and independence from lower layers are contradicted by the listed limitations.",
  },
  {
    id: "cpe310_ch4_037",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "Which of the following is listed as a limitation of a Layered Architecture?",
    options: [
      "It suffers from communication overhead, as vital information must constantly pass between layers, adding processing latency",
      "It demonstrates a complete architectural inability to support any fast, real-time responses to sudden environmental stimuli",
      "It suffers from a complete lack of system modularity, forcing developers to build entirely monolithic control structures",
      "It inherently provides absolutely no architectural support for long-term planning, deep logical deduction, or complex reasoning",
    ],
    correctAnswer: 0,
    explanation:
      "Limitations of layered architecture include increased complexity, communication overhead (latency from passing information between layers), difficulty optimizing globally, dependency on lower layers, and difficult debugging. Modularity and support for both reactive behavior and reasoning are listed as strengths.",
  },
  {
    id: "cpe310_ch4_038",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "A key advantage of a layered architecture is that it reduces overall system complexity compared with simpler designs.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "This is false. The notes list 'Increased Complexity' as a limitation of layered architecture, noting that designing and coordinating multiple layers is complex rather than simpler.",
  },
  {
    id: "cpe310_ch4_039",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "Which of the following is given as an application of Layered Architecture?",
    options: [
      "A simple, standalone residential thermostat that strictly triggers heating or cooling based on current temperature",
      "Advanced autonomous drones executing stable flight control, real-time obstacle avoidance, and high-level mission planning",
      "A basic automatic sliding door that triggers a single opening reflex upon instantly detecting physical human proximity",
      "An educational line-following robot that relies exclusively on instantaneous reactions to downward-facing optical sensors",
    ],
    correctAnswer: 1,
    explanation:
      "Applications of layered architecture include robotics, autonomous vehicles, game AI, drones (stable control, obstacle avoidance, mission planning), and smart systems. Thermostats, automatic doors, and line-following robots are simple reactive agent applications.",
  },
  {
    id: "cpe310_ch4_040",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "In a Reactive Planner, what is the role of the Perception Module?",
    options: [
      "Directly execute the final selected physical actions using the agent's attached hardware actuators in the environment",
      "Perform deep logical search and complex planning over extended sequences of explicitly formulated long-term goals",
      "Continuously interpret raw incoming sensor data in order to successfully detect relevant operational environmental conditions",
      "Act as the primary persistent memory store for all accumulated facts, rules, and long-term learned historical experience",
    ],
    correctAnswer: 2,
    explanation:
      "The perception module of a reactive planner interprets sensor data and detects relevant conditions, sitting between the sensors and the reactive rules. Executing actions is the actuators' role, and long-term planning is not a reactive planner's strength.",
  },
  {
    id: "cpe310_ch4_041",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "Within a deliberative architecture, what does the Planner / Goal Selection Module do?",
    options: [
      "Routinely captures raw physical percepts directly from the external environment utilizing the hardware sensors",
      "Strictly applies static condition–action rules to guarantee the agent reacts instantly to sudden physical stimuli",
      "Maintains the central database that persistently stores the agent's accumulated facts, rules, objects, and beliefs",
      "Considers active goals and possible action sequences, explicitly searches or plans, and selects the optimal path to achieve them",
    ],
    correctAnswer: 3,
    explanation:
      "The Planner/Goal Selection Module considers goals and possible action sequences, searches or plans, and selects the best action or plan to achieve the goals. Storing facts and beliefs is the world model/knowledge base's role.",
  },
  {
    id: "cpe310_ch4_042",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "Which of the following is listed as a disadvantage of a Simple Reactive Agent?",
    options: [
      "It entirely lacks the capacity to maintain a world model, meaning it cannot plan ahead or anticipate future states",
      "It incurs an exceedingly high computational cost due to the heavy processing demands of its internal reasoning engine",
      "It suffers from an inherently slow physical response time because it must exhaustively search its complex knowledge base",
      "It experiences significant communication latency and operational overhead caused by passing data between its multiple layers",
    ],
    correctAnswer: 0,
    explanation:
      "Disadvantages of a simple reactive agent include no memory, cannot plan ahead, poor performance in complex environments, and limited intelligence. High computational cost, slow response, and inter-layer overhead are drawbacks of deliberative or layered architectures.",
  },
];

export default cpe310Chapter4;
