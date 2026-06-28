import { QuestionV2 } from "@/lib/quiz-types";

const cpe310Chapter1: QuestionV2[] = [
  {
    id: "cpe310_ch1_001",
    course: "CPE 310",
    chapter: "Chapter 1",
    text: "According to Nwana's 1996 definition, a software agent is best described as a software entity that functions in what manner within its environment?",
    options: [
      "Synchronously and strictly on demand",
      "Continuously and autonomously",
      "Periodically when invoked by a user",
      "Predictably in a pre-scripted sequence",
    ],
    correctAnswer: 1,
    explanation:
      "Nwana's 1996 definition states that a software agent functions continuously and autonomously in a particular environment, often inhabited by other agents and processes. This continuous, autonomous operation is the core of the definition.",
  },
  {
    id: "cpe310_ch1_002",
    course: "CPE 310",
    chapter: "Chapter 1",
    text: "A monitoring agent keeps running for weeks without anyone restarting or commanding it. Which of Nwana's attributes does this most directly illustrate?",
    options: ["Social ability", "Delegation", "Continuity", "Reactivity"],
    correctAnswer: 2,
    explanation:
      "Continuity is defined as operating persistently over time without constant human intervention. An agent that runs for weeks unattended is demonstrating continuity rather than the other attributes.",
  },
  {
    id: "cpe310_ch1_003",
    course: "CPE 310",
    chapter: "Chapter 1",
    text: "According to Nwana's definition, proactivity means an agent acts only when directly commanded.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "This is false. The notes define proactivity as initiating behaviour in pursuit of goals, not only on command. Acting solely on command would contradict proactivity.",
  },
  {
    id: "cpe310_ch1_004",
    course: "CPE 310",
    chapter: "Chapter 1",
    text: "An agent that books travel and submits expense reports for an employee, acting in the employee's stead, is exercising which attribute?",
    options: ["Continuity", "Reactivity", "Mobility", "Delegation"],
    correctAnswer: 3,
    explanation:
      "Delegation is defined as acting on behalf of a user, system, or organisation. An agent performing tasks in an employee's stead is carrying out delegated intent.",
  },
  {
    id: "cpe310_ch1_005",
    course: "CPE 310",
    chapter: "Chapter 1",
    text: "In the comparison of traditional software and software agents, which trait belongs to a traditional program rather than an agent?",
    options: [
      "Relies on synchronous, blocking execution",
      "Utilizes asynchronous, event-driven execution",
      "Maintains dynamic beliefs, goals, and intentions",
      "Self-directs the completion of assigned tasks",
    ],
    correctAnswer: 0,
    explanation:
      "The comparison table lists synchronous, blocking execution as a property of traditional programs, while asynchronous event-driven execution, persistent mental state, and self-directed completion belong to agents.",
  },
  {
    id: "cpe310_ch1_006",
    course: "CPE 310",
    chapter: "Chapter 1",
    text: "In the comparison table, a traditional program is described as adapting to dynamic, uncertain environments.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "This is false. The table assigns adapting to dynamic, uncertain environments to the software agent, while the traditional program requires exact inputs and explicit instructions.",
  },
  {
    id: "cpe310_ch1_007",
    course: "CPE 310",
    chapter: "Chapter 1",
    text: "The six core characteristics that form the backbone of agent design (autonomy, social ability, reactivity, proactivity, adaptability, mobility) are attributed in the notes to which source?",
    options: [
      "Hewitt (1973)",
      "Selfridge (1959)",
      "Nwana (1996)",
      "Vaswani et al. (2017)",
    ],
    correctAnswer: 2,
    explanation:
      "The notes state these six characteristics come from Nwana (1996) and remain the backbone of agent design today. The other figures are associated with different contributions.",
  },
  {
    id: "cpe310_ch1_008",
    course: "CPE 310",
    chapter: "Chapter 1",
    text: "Among the six core characteristics of a software agent, which one is noted as applying only to some agents?",
    options: ["Autonomy", "Reactivity", "Proactivity", "Mobility"],
    correctAnswer: 3,
    explanation:
      "The core characteristics list marks mobility as belonging to some agents, describing it as the ability to move across different system environments or networks. The other characteristics are presented as general.",
  },
  {
    id: "cpe310_ch1_009",
    course: "CPE 310",
    chapter: "Chapter 1",
    text: "In the evolution timeline of software agents, which contribution is attributed to Oliver Selfridge in 1959?",
    options: [
      "The Actor Model with async messaging",
      "Autonomous software entities as 'demons'",
      "Multi-agent systems for distributed AI",
      "A formal typology of software agents",
    ],
    correctAnswer: 1,
    explanation:
      "The timeline credits Selfridge (1959) with autonomous software entities. The Actor Model is Hewitt's, MAS is Lesser's, and the formal typology is Nwana's.",
  },
  {
    id: "cpe310_ch1_010",
    course: "CPE 310",
    chapter: "Chapter 1",
    text: "Victor Lesser's 1977 contribution to the field of agents was the pioneering of which area?",
    options: [
      "Multi-agent systems (MAS) and distributed AI",
      "The transformer architecture for deep learning",
      "The Pandemonium model of autonomous demons",
      "The first formal typology of software agents",
    ],
    correctAnswer: 0,
    explanation:
      "Lesser (1977) pioneered distributed AI and multi-agent systems, studying how independent entities cooperate, coordinate, and negotiate. The other options belong to Vaswani, Selfridge, and Nwana respectively.",
  },
  {
    id: "cpe310_ch1_011",
    course: "CPE 310",
    chapter: "Chapter 1",
    text: "Wooldridge & Jennings in the 1990s are credited with which contribution to agent theory?",
    options: [
      "Introducing autonomous 'demons' for distributed problem solving",
      "Inventing asynchronous message passing for the Actor Model",
      "Publishing the first formal agent typology and classification",
      "Categorising agents along a spectrum from reactive to deliberative",
    ],
    correctAnswer: 3,
    explanation:
      "The notes state Wooldridge & Jennings categorised agents along a spectrum from reactive to deliberative and emphasised distributed action over centralised reasoning. The other contributions belong to Selfridge, Hewitt, and Nwana.",
  },
  {
    id: "cpe310_ch1_012",
    course: "CPE 310",
    chapter: "Chapter 1",
    text: "In Selfridge's Pandemonium Model, what were the 'demons'?",
    options: [
      "Synchronous subroutines designed for hand-coded static decision trees",
      "Small autonomous software entities that perceive and act independently",
      "High-dimensional vector stores utilized specifically for long-term memory",
      "Fixed grammar rules implemented directly as rigid system behaviors",
    ],
    correctAnswer: 1,
    explanation:
      "The Pandemonium Model introduced 'demons' as small autonomous software entities that could perceive their environment and act independently. The notes describe them as a direct ancestor of modern microagents.",
  },
  {
    id: "cpe310_ch1_013",
    course: "CPE 310",
    chapter: "Chapter 1",
    text: "In Hewitt's Actor Model, how do actors interact with one another?",
    options: [
      "Through a single, centralized shared global memory",
      "By blocking synchronous procedure calls sequentially",
      "Solely through asynchronous messages with no shared state",
      "Through hard-coded, tightly coupled grammar behaviors",
    ],
    correctAnswer: 2,
    explanation:
      "The Actor Model specifies that actors interact solely through asynchronous messages with no shared state, which enables scalable and fault-tolerant systems. This isolation is one of its three core attributes.",
  },
  {
    id: "cpe310_ch1_014",
    course: "CPE 310",
    chapter: "Chapter 1",
    text: "The Actor Model, with isolated state and asynchronous interaction, was introduced by Carl Hewitt in 1973.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "This is true. The notes credit Hewitt (1973) with the Actor Model, whose three core attributes are isolation of state and behaviour, asynchronous interaction, and dynamic creation and task delegation.",
  },
  {
    id: "cpe310_ch1_015",
    course: "CPE 310",
    chapter: "Chapter 1",
    text: "In Nwana's typology, a simple thermostat agent that responds directly to stimuli is an example of which agent type?",
    options: ["Reactive", "Deliberative", "Mobile", "Collaborative"],
    correctAnswer: 0,
    explanation:
      "Nwana's typology classifies the reactive agent as stimulus-response with low cognitive load, giving a thermostat agent as the example. The other types involve planning, movement, or coordination.",
  },
  {
    id: "cpe310_ch1_016",
    course: "CPE 310",
    chapter: "Chapter 1",
    text: "Which agent type in Nwana's typology is defined by planning and reasoning, carrying a high cognitive load?",
    options: ["Reactive", "Deliberative", "Mobile", "Learning"],
    correctAnswer: 1,
    explanation:
      "The deliberative agent is described as one that plans and reasons, with a high cognitive load, exemplified by a planning assistant. Reactive agents are stimulus-response, while mobile and learning agents emphasise other capabilities.",
  },
  {
    id: "cpe310_ch1_017",
    course: "CPE 310",
    chapter: "Chapter 1",
    text: "Most modern agents, which blend stimulus-response with planning, fall under which of Nwana's categories?",
    options: ["Reactive", "Mobile", "Hybrid", "Learning"],
    correctAnswer: 2,
    explanation:
      "The hybrid type combines reactive and deliberative behaviour, with a medium-to-high cognitive load, and the notes describe it as covering most modern agents. The pure reactive type lacks the deliberative component.",
  },
  {
    id: "cpe310_ch1_018",
    course: "CPE 310",
    chapter: "Chapter 1",
    text: "In Nwana's typology, an agent characterised as a network crawler that moves across environments is which type?",
    options: ["Collaborative", "Deliberative", "Reactive", "Mobile"],
    correctAnswer: 3,
    explanation:
      "The mobile agent is defined by moving across environments, with a network crawler given as the example. Collaborative agents instead coordinate with others.",
  },
  {
    id: "cpe310_ch1_019",
    course: "CPE 310",
    chapter: "Chapter 1",
    text: "A multi-agent system in which agents coordinate with one another to distribute work matches which of Nwana's types?",
    options: ["Collaborative", "Reactive", "Mobile", "Learning"],
    correctAnswer: 0,
    explanation:
      "The collaborative type is defined as coordinating with others, with a multi-agent system as the example and distributed cognitive load. The learning type instead emphasises improvement over time.",
  },
  {
    id: "cpe310_ch1_020",
    course: "CPE 310",
    chapter: "Chapter 1",
    text: "Among the Three Pillars of modern software agents, which one is described as 'the Foundation', enabling independent operation without human prompts?",
    options: ["Asynchronicity", "Agency", "Autonomy", "Mobility"],
    correctAnswer: 2,
    explanation:
      "Autonomy is labelled the Foundation, describing operation without human prompts, decisions from internal state, and management of its own lifecycle. Asynchronicity is the mechanism and agency the differentiator.",
  },
  {
    id: "cpe310_ch1_021",
    course: "CPE 310",
    chapter: "Chapter 1",
    text: "Which pillar is described as 'the Mechanism', emphasising non-blocking communication and reacting to events in real time?",
    options: ["Autonomy", "Agency", "Reactivity", "Asynchronicity"],
    correctAnswer: 3,
    explanation:
      "Asynchronicity is labelled the Mechanism, characterised by real-time reaction to events, no blocking calls, loose coupling, and scalable non-blocking communication. Autonomy and agency play different roles.",
  },
  {
    id: "cpe310_ch1_022",
    course: "CPE 310",
    chapter: "Chapter 1",
    text: "Which of the Three Pillars is identified as 'the Differentiator' — what makes a system truly 'agentic'?",
    options: ["Autonomy", "Agency", "Asynchronicity", "Continuity"],
    correctAnswer: 1,
    explanation:
      "Agency is named the Differentiator, defined by goal-directed behaviour, carrying delegated intent, and acting with intention and purpose — what makes a system truly agentic.",
  },
  {
    id: "cpe310_ch1_023",
    course: "CPE 310",
    chapter: "Chapter 1",
    text: "According to the notes, autonomy and asynchronicity together are sufficient conditions for a system to be a software agent.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "This is false. The notes state that autonomy and asynchronicity are necessary but not sufficient conditions; agency, which introduces goal-directed behaviour and delegated intent, is what makes a system a software agent.",
  },
  {
    id: "cpe310_ch1_024",
    course: "CPE 310",
    chapter: "Chapter 1",
    text: "According to the AGENCY principle, what distinguishes a true software agent from a system that is merely autonomous and asynchronous?",
    options: [
      "Its ability to act with intention and purpose",
      "Its use of blocking synchronous system calls",
      "Its reliance on exact, pre-scripted instructions",
      "Its lack of persistent, long-term memory goals",
    ],
    correctAnswer: 0,
    explanation:
      "The AWS quote in the notes states that an autonomous, asynchronous system might still be a reactive service; what makes it an agent is its ability to act with intention and purpose — to be agentic.",
  },
  {
    id: "cpe310_ch1_025",
    course: "CPE 310",
    chapter: "Chapter 1",
    text: "In the Perceive → Reason → Act cycle, which activity belongs to the PERCEIVE stage?",
    options: [
      "Prioritising goals and selecting active intentions",
      "Executing chosen actions toward delegated goals",
      "Evaluating the feedback loop for the next cycle",
      "Gathering inputs to update internal state and beliefs",
    ],
    correctAnswer: 3,
    explanation:
      "The PERCEIVE stage gathers events, sensor inputs, and API signals, updating internal state and beliefs about the environment. Goal prioritisation belongs to REASON and execution to ACT.",
  },
  {
    id: "cpe310_ch1_026",
    course: "CPE 310",
    chapter: "Chapter 1",
    text: "What completes the feedback loop in the Perceive-Reason-Act cycle after the ACT stage executes a chosen action?",
    options: [
      "The plan library is permanently flushed and deleted",
      "Results feed back into the next perception cycle",
      "The agent process halts until a human restarts it",
      "Beliefs are fully discarded before the next cycle",
    ],
    correctAnswer: 1,
    explanation:
      "In the ACT stage, executed actions cause an environment change and feed results back into the next perception cycle, forming the feedback loop. This continuous loop guides all agent behaviour.",
  },
  {
    id: "cpe310_ch1_027",
    course: "CPE 310",
    chapter: "Chapter 1",
    text: "In an agent's mental state, the internal representation of the environment based on perception (e.g., 'Package X is in Warehouse A') is called what?",
    options: ["Goals", "Intentions", "Beliefs", "Plan Library"],
    correctAnswer: 2,
    explanation:
      "Beliefs are defined as the internal representation of the environment based on perception, updated when new sensor or API data arrives. Goals are desired outcomes and intentions are committed plans.",
  },
  {
    id: "cpe310_ch1_028",
    course: "CPE 310",
    chapter: "Chapter 1",
    text: "In the mental-state model, when a logistics agent commits to 'Use Route B, notify recipient, dispatch truck', this committed plan is referred to as its what?",
    options: ["Intentions", "Beliefs", "Goals", "Perceptions"],
    correctAnswer: 0,
    explanation:
      "Intentions are the chosen plans the agent commits to, updated when a plan is selected from the plan library. The example given in the notes is exactly this route-and-dispatch commitment.",
  },
  {
    id: "cpe310_ch1_029",
    course: "CPE 310",
    chapter: "Chapter 1",
    text: "Which of the four functional modules of an agent interfaces with the environment through inputs such as text, audio, and sensors?",
    options: [
      "Cognitive Module",
      "Perception Module",
      "Action Module",
      "Learning Module",
    ],
    correctAnswer: 1,
    explanation:
      "The Perception Module interfaces with the environment through diverse inputs, extracting features, recognising events, and interpreting context. The cognitive, action, and learning modules handle reasoning, execution, and adaptation.",
  },
  {
    id: "cpe310_ch1_030",
    course: "CPE 310",
    chapter: "Chapter 1",
    text: "Which functional module executes decisions by interfacing with the digital or physical world through actuators, APIs, or tools?",
    options: [
      "Cognitive Module",
      "Perception Module",
      "Action Module",
      "Learning Module",
    ],
    correctAnswer: 2,
    explanation:
      "The Action Module executes decisions by interfacing with the digital or physical world, translating intent into behaviour through actuators, APIs, or tools.",
  },
  {
    id: "cpe310_ch1_031",
    course: "CPE 310",
    chapter: "Chapter 1",
    text: "The notes use the analogy 'Senses → Brain → Hands → Memory' to describe the four functional modules of an agent.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "This is true. The notes summarise the four modules as Senses (perception), Brain (cognition), Hands (action), and Memory (learning), and state all four must work together for true agency.",
  },
  {
    id: "cpe310_ch1_032",
    course: "CPE 310",
    chapter: "Chapter 1",
    text: "Within the cognitive module, which submodule defines the agent's intent and direction, handling explicit aims like 'submit report by 5pm'?",
    options: [
      "Planning Submodule",
      "Decision-Making Submodule",
      "Perception Submodule",
      "Goals Submodule",
    ],
    correctAnswer: 3,
    explanation:
      "The Goals Submodule defines agent intent and direction — what the agent wants — handling both explicit goals like 'submit report by 5pm' and implicit ones, and is continuously re-evaluated.",
  },
  {
    id: "cpe310_ch1_033",
    course: "CPE 310",
    chapter: "Chapter 1",
    text: "The cognitive submodule that evaluates available plans, weighs conflicting goals, and serves as the central arbitration engine is which one?",
    options: [
      "Decision-Making Submodule",
      "Goals Submodule",
      "Planning Submodule",
      "Learning Submodule",
    ],
    correctAnswer: 0,
    explanation:
      "The Decision-Making Submodule evaluates available plans and actions, weighs conflicting goals using confidence thresholds, and acts as the central arbitration engine, deciding which step comes next.",
  },
  {
    id: "cpe310_ch1_034",
    course: "CPE 310",
    chapter: "Chapter 1",
    text: "In LLM-based agents, the active context window that holds current task information and conversation history corresponds to which type of memory?",
    options: [
      "Long-term memory",
      "Plan library",
      "Short-term memory",
      "Agent store",
    ],
    correctAnswer: 2,
    explanation:
      "Short-term memory stores transient context within a session, including dialogue state and recent observations, and in LLM agents corresponds to the active context window, lost between sessions without persistence.",
  },
  {
    id: "cpe310_ch1_035",
    course: "CPE 310",
    chapter: "Chapter 1",
    text: "In LLM agents, persistent knowledge that supports cross-session continuity is encoded using which mechanism?",
    options: [
      "The active, transient context window",
      "Blocking synchronous API function calls",
      "Stateless execution of primitive actions",
      "Persistent vector databases or agent stores",
    ],
    correctAnswer: 3,
    explanation:
      "Long-term memory encodes persistent knowledge from past experiences and, in LLM agents, is implemented through vector databases or agent stores, supporting cross-session continuity and learning.",
  },
  {
    id: "cpe310_ch1_036",
    course: "CPE 310",
    chapter: "Chapter 1",
    text: "Which learning paradigm optimises behaviour through trial and error to maximise cumulative reward, such as learning the fastest task-completion strategy?",
    options: [
      "Supervised Learning with labeled data",
      "Reinforcement Learning via trial and error",
      "Unsupervised Learning through clustering",
      "In-Context Learning using few-shot prompts",
    ],
    correctAnswer: 1,
    explanation:
      "Reinforcement Learning optimises behaviour through trial and error, maximising cumulative reward, with the example of learning the fastest task completion strategy. Supervised learning instead uses labelled examples.",
  },
  {
    id: "cpe310_ch1_037",
    course: "CPE 310",
    chapter: "Chapter 1",
    text: "Which learning paradigm lets LLM-based agents adapt through prompt examples without retraining, enabling rapid session-level adaptation?",
    options: [
      "In-Context / Few-Shot Learning",
      "Reinforcement Learning from Feedback",
      "Supervised Fine-Tuning Learning",
      "Unsupervised Clustering Learning",
    ],
    correctAnswer: 0,
    explanation:
      "In-Context / Few-Shot Learning allows LLM-based agents to adapt through prompt examples without retraining, providing rapid, flexible, session-level adaptation, distinct from the retraining-based paradigms.",
  },
  {
    id: "cpe310_ch1_038",
    course: "CPE 310",
    chapter: "Chapter 1",
    text: "Which statement correctly contrasts traditional symbolic reasoning with LLM-powered reasoning as presented in the notes?",
    options: [
      "Traditional reasoning is highly probabilistic, while LLM reasoning is strictly deterministic",
      "Traditional reasoning embeds knowledge in weights, while LLMs use hand-coded rules",
      "Traditional reasoning easily handles open-ended scenarios, while LLMs are quite brittle",
      "Traditional reasoning relies on static plan libraries, while LLMs generate dynamic plans",
    ],
    correctAnswer: 3,
    explanation:
      "Traditional agent reasoning relies on static plan libraries and hand-coded logic and is brittle in unforeseen situations, whereas LLM-powered reasoning generates dynamic plans from context and is flexible in novel situations.",
  },
  {
    id: "cpe310_ch1_039",
    course: "CPE 310",
    chapter: "Chapter 1",
    text: "Retrieval-Augmented Generation (RAG) helps an LLM-based agent achieve long-term memory by doing what when a goal is issued?",
    options: [
      "Fine-tuning the underlying model weights for every incoming user request",
      "Searching a retrieval index and appending relevant results to the prompt",
      "Wiping the active context window to free up space for the new request",
      "Blocking execution entirely until a human operator supplies the answer",
    ],
    correctAnswer: 1,
    explanation:
      "RAG works by searching a retrieval index — semantic search over documents, past conversations, and knowledge bases — and appending the results to the prompt when a goal is issued, addressing the LLM's context-window limits.",
  },
  {
    id: "cpe310_ch1_040",
    course: "CPE 310",
    chapter: "Chapter 1",
    text: "The notes present 'RAG + Agent Store' as the practical architecture for enterprise-grade agent memory.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "This is true. The notes explicitly state that RAG combined with an Agent Store is the practical architecture for enterprise-grade agent memory and a key design pattern students should master.",
  },
  {
    id: "cpe310_ch1_041",
    course: "CPE 310",
    chapter: "Chapter 1",
    text: "In the three-way comparison, which description of the 'Agency' characteristic correctly matches Agentic AI?",
    options: [
      "None — it functions strictly as a passive tool for human operators",
      "Implicit — it features basic reactive behaviors without deep planning",
      "Explicit — it demonstrates clear purpose and self-directed behavior",
      "Simulated — it relies entirely on rigid, pre-programmed model inference",
    ],
    correctAnswer: 2,
    explanation:
      "In the comparison table, Agentic AI is given explicit agency — purpose and self-direction — while Traditional AI has none and Software Agents have implicit or basic agency.",
  },
  {
    id: "cpe310_ch1_042",
    course: "CPE 310",
    chapter: "Chapter 1",
    text: "Agentic AI is described as the convergence of four pillars. Which of the following is one of those pillars?",
    options: [
      "The Perceive-Reason-Act cognitive model",
      "Synchronous blocking execution patterns",
      "Rigidly hand-coded grammar behaviors",
      "The Pandemonium demon architecture",
    ],
    correctAnswer: 0,
    explanation:
      "The four convergence pillars are architectural lineage (MAS + Actor Model), the Perceive-Reason-Act cognitive model, generative power (LLMs/transformers), and operational flexibility (cloud-native, serverless). The Perceive-Reason-Act model is one of them.",
  },
  {
    id: "cpe310_ch1_043",
    course: "CPE 310",
    chapter: "Chapter 1",
    text: "How do the notes define believable agents?",
    options: [
      "Agents designed to perfectly simulate physical reality and constraints in every computational detail",
      "Autonomous agents with the same powerful properties as characters from the traditional character-based arts",
      "Agents programmed to strictly maximize cumulative computational reward through rigorous trial and error",
      "Agents constructed exclusively to execute fixed, pre-scripted logical workflows on direct human demand",
    ],
    correctAnswer: 1,
    explanation:
      "Believable agents are defined as autonomous agents that have the same powerful properties as characters from the traditional character-based arts — interactive versions of personality-rich characters from film, animation, and literature.",
  },
  {
    id: "cpe310_ch1_044",
    course: "CPE 310",
    chapter: "Chapter 1",
    text: "The notes state 'Believable ≠ Realistic'. What does this distinction mean?",
    options: [
      "The primary goal is to perfectly reproduce real-world physics and logic",
      "Believable agents must always be rendered with photorealistic graphics",
      "The goal is the illusion of a living personality, not reality simulation",
      "Believable agents must avoid exhibiting any distinct personality traits",
    ],
    correctAnswer: 2,
    explanation:
      "The distinction 'Believable ≠ Realistic' means the goal is not simulation of reality but creating the illusion of a living personality. Realism is explicitly not the objective.",
  },
  {
    id: "cpe310_ch1_045",
    course: "CPE 310",
    chapter: "Chapter 1",
    text: "According to the notes, high intelligence is a required condition for a believable agent.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "This is false. The notes state 'Believable ≠ Intelligent', explaining that high intelligence is not required and that emotional richness and consistency matter more.",
  },
  {
    id: "cpe310_ch1_046",
    course: "CPE 310",
    chapter: "Chapter 1",
    text: "Which of the following is listed among the six requirements for believability?",
    options: [
      "Synchronicity — the strict synchronous execution of all assigned tasks",
      "Detachment — the complete elimination of all emotional internal state",
      "Rigidity — the reliance on a single, fixed behavior for all situations",
      "Personality — consistent, artistically chosen traits across all behaviors",
    ],
    correctAnswer: 3,
    explanation:
      "The six requirements for believability are personality, emotion, self-motivation, change, social relationships, and consistency. Personality is defined as consistent, artistically chosen traits that permeate all behaviours.",
  },
  {
    id: "cpe310_ch1_047",
    course: "CPE 310",
    chapter: "Chapter 1",
    text: "Among the requirements for the illusion of life, what does 'Resource Bounded' assert about a believable agent?",
    options: [
      "It has cognitive and physical limits, as perfect rationality harms believability",
      "It must consistently compute optimal decisions using unlimited system resources",
      "It is strictly restricted to pursuing only one goal at any given moment in time",
      "It must remain entirely unaware of its environment to preserve its internal state",
    ],
    correctAnswer: 0,
    explanation:
      "The Resource Bounded requirement states the agent has cognitive and physical limits, and that perfect rationality breaks believability. This contrasts with concurrent goal pursuit and being situated, which are separate requirements.",
  },
  {
    id: "cpe310_ch1_048",
    course: "CPE 310",
    chapter: "Chapter 1",
    text: "In the Hap Architecture, which element refers to the leaf-level executable steps such as animations, utterances, and movements?",
    options: ["Goals", "Behaviors", "Primitive Actions", "Beliefs"],
    correctAnswer: 2,
    explanation:
      "In Hap, Primitive Actions are the leaf-level executable steps — animations, utterances, and movements — that return success or failure to their parent. Goals are high-level desires and behaviors are the plans for achieving them.",
  },
  {
    id: "cpe310_ch1_049",
    course: "CPE 310",
    chapter: "Chapter 1",
    text: "In Hap, the existence of multiple behaviors per goal, chosen based on context and personality, is referred to as what?",
    options: [
      "Resource bounding",
      "Prompt chaining",
      "Feature extraction",
      "Situated Variation",
    ],
    correctAnswer: 3,
    explanation:
      "Hap allows multiple behaviors per goal, described as Situated Variation, with the appropriate behavior chosen based on context and personality. Behaviors are the plans for achieving goals.",
  },
  {
    id: "cpe310_ch1_050",
    course: "CPE 310",
    chapter: "Chapter 1",
    text: "The emotion pipeline in Hap is described as proceeding in which order?",
    options: [
      "Emotional Expression → Emotion State → Emotion Generation",
      "Emotion Generation → Emotion State → Emotional Expression",
      "Emotion State → Emotional Expression → Emotion Generation",
      "Emotion Generation → Emotional Expression → Emotion State",
    ],
    correctAnswer: 1,
    explanation:
      "The notes describe the pipeline as Emotion Generation → Emotion State → Emotional Expression, where events are appraised, intensity values decay over time, and the state maps to behavioural features.",
  },
  {
    id: "cpe310_ch1_051",
    course: "CPE 310",
    chapter: "Chapter 1",
    text: "In the Hap approach to natural language generation, how are grammar rules treated?",
    options: [
      "As integrated Hap behaviors, executed like any other agent action",
      "As a separate non-Hap module run after the core agent finishes",
      "As strictly fixed strings that never vary with environmental context",
      "As isolated primitive actions that are guaranteed never to fail",
    ],
    correctAnswer: 0,
    explanation:
      "In the Hap NLG approach, grammar rules are themselves Hap behaviors, executed like any other agent action, with situated variation choosing phrasings based on context, emotional state, and personality.",
  },
  {
    id: "cpe310_ch1_052",
    course: "CPE 310",
    chapter: "Chapter 1",
    text: "Which guideline for building believable agents reflects the principle that modularity helps code reuse but hurts believability?",
    options: [
      "Study the Unique — prioritize generality over specific believability",
      "Irrationality Is OK — ensure characters avoid logical decision making",
      "Copy & Modify — heavily reuse isolated modular behavior patterns",
      "Embrace Integration — ensure all aspects work together seamlessly",
    ],
    correctAnswer: 3,
    explanation:
      "The 'Embrace Integration' guideline states that modularity helps code reuse but hurts believability, so all aspects of the agent must work together seamlessly. This matches the unified nature of the Hap architecture.",
  },
  {
    id: "cpe310_ch1_053",
    course: "CPE 310",
    chapter: "Chapter 1",
    text: "Which set of four traits is used in the notes to define collaborative AI agents?",
    options: [
      "Synchronous, strictly isolated, entirely stateless, and hardcoded",
      "Autonomous, continuously interconnected, goal-oriented, and specialized",
      "Hyper-realistic, artificially intelligent, photorealistic, and scripted",
      "Purely reactive, highly brittle, strictly deterministic, and monolithic",
    ],
    correctAnswer: 1,
    explanation:
      "Collaborative AI agents are defined by four traits: autonomous, interconnected, goal-oriented, and specialized — each agent perceives and acts independently while communicating and sharing a common objective.",
  },
  {
    id: "cpe310_ch1_054",
    course: "CPE 310",
    chapter: "Chapter 1",
    text: "Why do the notes argue that real-world problems require collaborative agents rather than a single agent?",
    options: [
      "A single agent always executes faster and more accurately than any multi-agent team",
      "Collaborative agents completely remove the computational need for continuous learning",
      "Real-world problems require diverse expertise combined in parallel, like a specialist team",
      "Single agents inherently lack the necessary sensors to perceive their environment at all",
    ],
    correctAnswer: 2,
    explanation:
      "The notes explain that a single agent excels at one task, but problems like disease diagnosis require diverse expertise; collaborative agents mimic a team of specialists combining NLP, data mining, reasoning, and adaptive learning in parallel.",
  },
  {
    id: "cpe310_ch1_055",
    course: "CPE 310",
    chapter: "Chapter 1",
    text: "In the five-step learning pipeline for collaborative agents, which step immediately follows 'Data Ingestion & Preprocessing'?",
    options: [
      "Knowledge Extraction",
      "Decision Support",
      "Feedback Loops",
      "Pattern Detection",
    ],
    correctAnswer: 0,
    explanation:
      "The pipeline runs Data Ingestion & Preprocessing → Knowledge Extraction → Pattern Detection → Decision Support → Feedback Loops, so Knowledge Extraction directly follows ingestion, with NLP agents extracting key concepts.",
  },
  {
    id: "cpe310_ch1_056",
    course: "CPE 310",
    chapter: "Chapter 1",
    text: "In the Multi-Agent Resume & Cover Letter Optimizer, which agent rates documents 0–100 for relevance, clarity, and impact?",
    options: [
      "Resume Parser",
      "Scoring Agent",
      "Match & Gap Analyst",
      "Final Review Agent",
    ],
    correctAnswer: 1,
    explanation:
      "The Scoring Agent rates documents from 0 to 100 for relevance, clarity, and impact. The Resume Parser extracts CV data, the Match & Gap Analyst compares CV to requirements, and the Final Review Agent checks readiness.",
  },
  {
    id: "cpe310_ch1_057",
    course: "CPE 310",
    chapter: "Chapter 1",
    text: "In the Resume Optimizer workflow, which agent compares the CV to the job requirements to highlight strengths and gaps?",
    options: [
      "Enhancement Agent",
      "Cover Letter Parser",
      "Match & Gap Analyst",
      "Job Description Analyzer",
    ],
    correctAnswer: 2,
    explanation:
      "The Match & Gap Analyst compares the CV to the job requirements, highlighting strengths and gaps. The Enhancement Agent then suggests edits, while the Job Description Analyzer identifies essential skills and keywords.",
  },
  {
    id: "cpe310_ch1_058",
    course: "CPE 310",
    chapter: "Chapter 1",
    text: "Which of the following is listed as a benefit of collaborative AI?",
    options: [
      "Guaranteed elimination of all data privacy concerns",
      "Removal of the need for any feedback loops",
      "A single point of control replacing all specialists",
      "Improved accuracy and speed through parallel processing and cross-verification",
    ],
    correctAnswer: 3,
    explanation:
      "Among the benefits, improved accuracy and speed comes from parallel processing and cross-verification between agents, which significantly reduces errors. Other listed benefits are scalability, personalization, and continuous improvement.",
  },
  {
    id: "cpe310_ch1_059",
    course: "CPE 310",
    chapter: "Chapter 1",
    text: "Which item is identified as a challenge or consideration for collaborative AI?",
    options: [
      "Data privacy and ethics, requiring transparent and auditable decision-making",
      "Continuous improvement through feedback loops",
      "Context-aware personalization for each learner",
      "Horizontal scalability for growing data volumes",
    ],
    correctAnswer: 0,
    explanation:
      "The challenges section lists data privacy and ethics, interoperability, and bias and transparency. Continuous improvement, personalization, and scalability are listed instead as benefits of collaborative AI.",
  },
];

export default cpe310Chapter1;
