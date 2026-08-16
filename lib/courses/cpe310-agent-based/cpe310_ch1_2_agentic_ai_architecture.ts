import { QuestionV2 } from "@/lib/quiz-types";

const cpe310Chapter1_2Questions: QuestionV2[] = [
  {
    id: "cpe310_ch2_001",
    course: "CPE 310",
    chapter: "Chapter 1.2",
    text: "Among the four functional modules of an agent, which module interfaces with the environment through diverse inputs such as text, audio, and sensors?",
    options: [
      "Perception Module",
      "Cognitive Module",
      "Action Module",
      "Learning Module",
    ],
    correctAnswer: 0,
    explanation:
      "The Perception Module interfaces with the environment through diverse inputs, text, audio, and sensors, extracting features, recognising events, and interpreting context.\n\nThe Cognitive Module instead is the deliberative core, managing goals, planning, and decision-making, not the raw interfacing with inputs.\n\nThe Action Module instead executes decisions by interfacing with the digital or physical world, not the input side.\n\nThe Learning Module instead enables adaptation and improvement over time through memory, not the raw interfacing with inputs.",
  },
  {
    id: "cpe310_ch2_002",
    course: "CPE 310",
    chapter: "Chapter 1.2",
    text: "Among the four functional modules of an agent, which module is described as the deliberative core, managing goals, planning, and decision-making?",
    options: [
      "Cognitive Module",
      "Perception Module",
      "Action Module",
      "Learning Module",
    ],
    correctAnswer: 0,
    explanation:
      "The Cognitive Module is the deliberative core, managing goals, planning, and decision-making, transforming raw perception into purposeful, goal-directed behaviour.\n\nThe Perception Module instead interfaces with the environment through diverse inputs, a step before cognition occurs.\n\nThe Action Module instead executes decisions, a step after cognition has occurred.\n\nThe Learning Module instead enables adaptation through memory, a related but distinct role from deliberation itself.",
  },
  {
    id: "cpe310_ch2_003",
    course: "CPE 310",
    chapter: "Chapter 1.2",
    text: "Among the four functional modules of an agent, which module executes decisions by interfacing with the digital or physical world through actuators, APIs, or tools?",
    options: [
      "Action Module",
      "Perception Module",
      "Cognitive Module",
      "Learning Module",
    ],
    correctAnswer: 0,
    explanation:
      "The Action Module executes decisions by interfacing with the digital or physical world, translating intent into behaviour through actuators, APIs, or tools.\n\nThe Perception Module instead interfaces with the environment through inputs, not the execution of decisions.\n\nThe Cognitive Module instead manages goals, planning, and decision-making, a step before action is executed.\n\nThe Learning Module instead enables adaptation through memory, not the execution of decisions.",
  },
  {
    id: "cpe310_ch2_004",
    course: "CPE 310",
    chapter: "Chapter 1.2",
    text: "Among the four functional modules of an agent, which module operates through short-term and long-term memory to refine strategies from experience?",
    options: [
      "Learning Module",
      "Perception Module",
      "Cognitive Module",
      "Action Module",
    ],
    correctAnswer: 0,
    explanation:
      "The Learning Module enables adaptation and improvement over time, operating through short-term and long-term memory to refine strategies from experience.\n\nThe Perception Module instead interfaces with the environment through inputs, not memory-based refinement.\n\nThe Cognitive Module instead manages goals, planning, and decision-making, a related but distinct role from memory-based adaptation.\n\nThe Action Module instead executes decisions, not memory-based refinement of strategies.",
  },
  {
    id: "cpe310_ch2_005",
    course: "CPE 310",
    chapter: "Chapter 1.2",
    text: "The four functional modules of an agent are memorably compared to which four things?",
    options: [
      "Senses, Brain, Hands, Memory",
      "Eyes, Mouth, Ears, Nose",
      "Input, Output, Storage, Power",
      "CPU, RAM, Disk, Network",
    ],
    correctAnswer: 0,
    explanation:
      "The four modules are memorably compared to Senses, Brain, Hands, and Memory, for Perception, Cognitive, Action, and Learning respectively, all of which must work together for true agency.\n\nEyes, Mouth, Ears, Nose is not the comparison given for the four modules.\n\nInput, Output, Storage, Power is not the comparison given for the four modules.\n\nCPU, RAM, Disk, Network is not the comparison given for the four modules.",
  },
  {
    id: "cpe310_ch2_006",
    course: "CPE 310",
    chapter: "Chapter 1.2",
    text: "Within the Cognitive Module, which submodule defines the agent's intent and direction, and is continuously re-evaluated?",
    options: [
      "Goals Submodule",
      "Planning Submodule",
      "Decision-Making Submodule",
      "Perception Submodule",
    ],
    correctAnswer: 0,
    explanation:
      "The Goals Submodule defines the agent's intent and direction, is central to the reasoning cycle, and is continuously re-evaluated.\n\nThe Planning Submodule instead constructs strategies to achieve goals, a step after goals are defined.\n\nThe Decision-Making Submodule instead evaluates available plans and actions, a step after planning.\n\nA Perception Submodule is not one of the Cognitive Module's three named submodules; Perception is instead a separate top-level module.",
  },
  {
    id: "cpe310_ch2_007",
    course: "CPE 310",
    chapter: "Chapter 1.2",
    text: "Within the Cognitive Module, which submodule constructs strategies to achieve goals, using hierarchical task decomposition and chain-of-thought sequences?",
    options: [
      "Planning Submodule",
      "Goals Submodule",
      "Decision-Making Submodule",
      "Action Submodule",
    ],
    correctAnswer: 0,
    explanation:
      "The Planning Submodule constructs strategies to achieve goals, generating action sequences through hierarchical task decomposition and chain-of-thought sequences.\n\nThe Goals Submodule instead defines the agent's intent and direction, a step before planning how to achieve it.\n\nThe Decision-Making Submodule instead evaluates available plans and actions, a step after planning has generated them.\n\nAn Action Submodule is not one of the Cognitive Module's three named submodules; Action is instead a separate top-level module.",
  },
  {
    id: "cpe310_ch2_008",
    course: "CPE 310",
    chapter: "Chapter 1.2",
    text: "Within the Cognitive Module, which submodule evaluates available plans and actions, weighing conflicting goals and accounting for consequences?",
    options: [
      "Decision-Making Submodule",
      "Goals Submodule",
      "Planning Submodule",
      "Learning Submodule",
    ],
    correctAnswer: 0,
    explanation:
      "The Decision-Making Submodule evaluates available plans and actions, weighs conflicting goals, accounts for consequences, and serves as the central arbitration engine.\n\nThe Goals Submodule instead defines the agent's intent and direction, not the evaluation of competing plans.\n\nThe Planning Submodule instead constructs strategies and generates action sequences, a step before decision-making evaluates them.\n\nA Learning Submodule is not one of the Cognitive Module's three named submodules; Learning is instead a separate top-level module.",
  },
  {
    id: "cpe310_ch2_009",
    course: "CPE 310",
    chapter: "Chapter 1.2",
    text: "Which of the following is listed as one of the three submodules of the Cognitive Module?",
    options: [
      "Memory Submodule",
      "Perception Submodule",
      "All of these",
      "None of these",
    ],
    correctAnswer: 3,
    explanation:
      "The Cognitive Module's three submodules are Goals, Planning, and Decision-Making. Neither a Memory Submodule nor a Perception Submodule is one of these three; Memory belongs to the Learning Module and Perception is its own separate top-level module, making None of these the right choice.",
  },
  {
    id: "cpe310_ch2_010",
    course: "CPE 310",
    chapter: "Chapter 1.2",
    text: "Which of the following is listed as an input modality of the Perception Module?",
    options: [
      "Audio, such as spoken instructions and environmental sounds",
      "Currency, such as digital payment tokens",
      "Weather forecasts distributed via email",
      "Printed newspaper articles only",
    ],
    correctAnswer: 0,
    explanation:
      "Audio, such as spoken instructions and environmental sounds, is listed as an input modality of the Perception Module, alongside text and sensor data.\n\nCurrency and payment tokens are not listed as an input modality of the Perception Module.\n\nWeather forecasts via email are not specifically listed as an input modality of the Perception Module.\n\nPrinted newspaper articles are not listed as an input modality of the Perception Module.",
  },
  {
    id: "cpe310_ch2_011",
    course: "CPE 310",
    chapter: "Chapter 1.2",
    text: "Which Perception Module function is described as extracting meaningful representations from raw data, the first step in making environmental signals machine-actionable?",
    options: [
      "Feature Extraction",
      "Object & Event Recognition",
      "Semantic Interpretation",
      "Tool Invocation",
    ],
    correctAnswer: 0,
    explanation:
      "Feature Extraction extracts meaningful representations from raw data, the first step in making environmental signals machine-actionable.\n\nObject & Event Recognition instead identifies relevant objects, events, and state changes, a step that follows feature extraction.\n\nSemantic Interpretation instead builds an actionable understanding of context from extracted features, a later step than initial extraction.\n\nTool Invocation is not a Perception Module function; it belongs to the Action Module.",
  },
  {
    id: "cpe310_ch2_012",
    course: "CPE 310",
    chapter: "Chapter 1.2",
    text: "Which Perception Module function identifies relevant objects, events, and state changes within the data stream?",
    options: [
      "Object & Event Recognition",
      "Feature Extraction",
      "Semantic Interpretation",
      "Physical Actuation",
    ],
    correctAnswer: 0,
    explanation:
      "Object & Event Recognition identifies relevant objects, events, and state changes within the data stream.\n\nFeature Extraction instead extracts meaningful representations from raw data, a step before object and event recognition occurs.\n\nSemantic Interpretation instead builds an actionable understanding of context, a step after objects and events are recognised.\n\nPhysical Actuation is not a Perception Module function; it belongs to the Action Module.",
  },
  {
    id: "cpe310_ch2_013",
    course: "CPE 310",
    chapter: "Chapter 1.2",
    text: "Which Perception Module function builds an accurate, actionable understanding of the current context from extracted features?",
    options: [
      "Semantic Interpretation",
      "Feature Extraction",
      "Object & Event Recognition",
      "Integrated Interaction",
    ],
    correctAnswer: 0,
    explanation:
      "Semantic Interpretation builds an accurate, actionable understanding of the current context from extracted features.\n\nFeature Extraction instead extracts meaningful representations from raw data, a step before semantic interpretation occurs.\n\nObject & Event Recognition instead identifies relevant objects and events, a step before semantic interpretation occurs.\n\nIntegrated Interaction is not a Perception Module function; it belongs to the Action Module.",
  },
  {
    id: "cpe310_ch2_014",
    course: "CPE 310",
    chapter: "Chapter 1.2",
    text: "In Agentic AI, LLM tokenisation of text inputs is effectively described as which of the following?",
    options: [
      "A perception step, converting user intent into a structured representation the agent can reason over",
      "A physical actuation step, moving a robotic arm",
      "A learning paradigm exclusively used for reinforcement learning",
      "A step that only occurs after the agent has already acted",
    ],
    correctAnswer: 0,
    explanation:
      "LLM tokenisation of text inputs is described as effectively a perception step, converting user intent into a structured representation the agent can reason over.\n\nPhysical actuation of a robotic arm belongs to the Action Module, not perception via tokenisation.\n\nTokenisation is not described as exclusively a reinforcement learning paradigm.\n\nTokenisation is described as an early perception step, not something occurring only after the agent has already acted.",
  },
  {
    id: "cpe310_ch2_015",
    course: "CPE 310",
    chapter: "Chapter 1.2",
    text: "The quality of which module is described as setting the ceiling on overall agent performance, since bad input leads to bad reasoning and bad actions?",
    options: [
      "Perception Module",
      "Action Module",
      "Learning Module",
      "Cognitive Module's Decision-Making Submodule only",
    ],
    correctAnswer: 0,
    explanation:
      "The Perception Module's quality is described as setting the ceiling on agent performance, since bad perception leads to bad reasoning and bad actions.\n\nThe Action Module instead executes decisions after perception and reasoning have already occurred, not the module described as setting this ceiling.\n\nThe Learning Module instead refines strategies over time, not the module described as setting this immediate performance ceiling.\n\nRestricting this to only the Decision-Making Submodule ignores that the described bottleneck is specifically the Perception Module.",
  },
  {
    id: "cpe310_ch2_016",
    course: "CPE 310",
    chapter: "Chapter 1.2",
    text: "Among the Action Module's three output channels, which channel translates decisions into hardware instructions, such as steering robots or triggering valves?",
    options: [
      "Physical Actuation",
      "Integrated Interaction",
      "Tool Invocation",
      "Feature Extraction",
    ],
    correctAnswer: 0,
    explanation:
      "Physical Actuation, for embodied agents, translates decisions into hardware instructions, such as steering robots, triggering valves, or turning on IoT sensors.\n\nIntegrated Interaction instead invokes APIs and cloud services for digital agents, not physical hardware instructions.\n\nTool Invocation instead calls modular, callable skills like search or calculation, not physical hardware instructions.\n\nFeature Extraction is not an Action Module output channel; it belongs to the Perception Module.",
  },
  {
    id: "cpe310_ch2_017",
    course: "CPE 310",
    chapter: "Chapter 1.2",
    text: "Among the Action Module's three output channels, which channel invokes APIs and cloud services, updates databases, and triggers workflows for digital agents?",
    options: [
      "Integrated Interaction",
      "Physical Actuation",
      "Tool Invocation",
      "Semantic Interpretation",
    ],
    correctAnswer: 0,
    explanation:
      "Integrated Interaction, for digital agents, invokes APIs and cloud services, updates databases and records, and triggers workflows and pipelines.\n\nPhysical Actuation instead translates decisions into hardware instructions for embodied agents, not digital API calls.\n\nTool Invocation instead calls modular, callable skills like search or calculation, a related but distinct output channel.\n\nSemantic Interpretation is not an Action Module output channel; it belongs to the Perception Module.",
  },
  {
    id: "cpe310_ch2_018",
    course: "CPE 310",
    chapter: "Chapter 1.2",
    text: "Among the Action Module's three output channels, which channel is described as providing extended capabilities such as search, summarisation, calculation, and code execution?",
    options: [
      "Tool Invocation",
      "Physical Actuation",
      "Integrated Interaction",
      "Object & Event Recognition",
    ],
    correctAnswer: 0,
    explanation:
      "Tool Invocation provides extended capabilities such as search, summarisation, calculation, and code execution and testing, using modular, callable skills.\n\nPhysical Actuation instead translates decisions into hardware instructions, not modular callable skills.\n\nIntegrated Interaction instead invokes APIs and cloud services for digital agents, a related but distinct output channel.\n\nObject & Event Recognition is not an Action Module output channel; it belongs to the Perception Module.",
  },
  {
    id: "cpe310_ch2_019",
    course: "CPE 310",
    chapter: "Chapter 1.2",
    text: "Which of the following is given as an example under the Integrated Interaction output channel?",
    options: [
      "AWS Lambda, SQS, EventBridge",
      "Steering robots and triggering valves",
      "MCP tools and Bedrock tool use",
      "Manufacturing process control",
    ],
    correctAnswer: 0,
    explanation:
      "AWS Lambda, SQS, EventBridge are given as examples under Integrated Interaction, the digital agent output channel.\n\nSteering robots and triggering valves are instead given as examples under Physical Actuation, not Integrated Interaction.\n\nMCP tools and Bedrock tool use are instead given as examples under Tool Invocation, not Integrated Interaction.\n\nManufacturing process control is instead given as an example under Physical Actuation, not Integrated Interaction.",
  },
  {
    id: "cpe310_ch2_020",
    course: "CPE 310",
    chapter: "Chapter 1.2",
    text: "Which of the following is listed as one of the Action Module's three output channels?",
    options: [
      "Semantic Broadcasting",
      "Cognitive Delegation",
      "All of these",
      "None of these",
    ],
    correctAnswer: 3,
    explanation:
      "The Action Module's three output channels are Physical Actuation, Integrated Interaction, and Tool Invocation. Neither Semantic Broadcasting nor Cognitive Delegation is one of these three named channels, making None of these the right choice.",
  },
  {
    id: "cpe310_ch2_021",
    course: "CPE 310",
    chapter: "Chapter 1.2",
    text: "Within the Learning Module, which type of memory stores transient context within a session, such as current task information and dialogue state, and is often lost between sessions?",
    options: [
      "Short-Term Memory",
      "Long-Term Memory",
      "Plan Library",
      "Physical Data Repository",
    ],
    correctAnswer: 0,
    explanation:
      "Short-Term Memory stores transient context within a session, current task information, recent observations, and dialogue state, and is lost between sessions without persistence.\n\nLong-Term Memory instead encodes persistent knowledge from past experiences, supporting cross-session continuity, not transient within-session context.\n\nPlan Library is a separate agent theory concept for pre-stored action sequences, not a type of memory named here.\n\nPhysical Data Repository is a database concept from a different course context, not named here.",
  },
  {
    id: "cpe310_ch2_022",
    course: "CPE 310",
    chapter: "Chapter 1.2",
    text: "Within the Learning Module, which type of memory encodes persistent knowledge from past experiences and supports cross-session continuity?",
    options: [
      "Long-Term Memory",
      "Short-Term Memory",
      "Working Memory",
      "Sensory Memory",
    ],
    correctAnswer: 0,
    explanation:
      "Long-Term Memory encodes persistent knowledge from past experiences, previously encountered goals and outcomes, and supports cross-session continuity and learning.\n\nShort-Term Memory instead stores transient context within a single session, not persistent knowledge across sessions.\n\nWorking Memory is not the term used for either type of memory in this material.\n\nSensory Memory is not the term used for either type of memory in this material.",
  },
  {
    id: "cpe310_ch2_023",
    course: "CPE 310",
    chapter: "Chapter 1.2",
    text: "In LLM agents, Short-Term Memory is described as corresponding to which of the following?",
    options: [
      "The active context window",
      "A vector database or agent store",
      "A physical hard disk drive",
      "The model's frozen pretrained weights",
    ],
    correctAnswer: 0,
    explanation:
      "In LLM agents, Short-Term Memory is described as the active context window.\n\nA vector database or agent store is instead described as how LLM agents implement Long-Term Memory, not Short-Term Memory.\n\nA physical hard disk drive is a hardware concept, not the described LLM analogy for Short-Term Memory.\n\nThe model's frozen pretrained weights relate to fine-tuning, not the described analogy for Short-Term Memory.",
  },
  {
    id: "cpe310_ch2_024",
    course: "CPE 310",
    chapter: "Chapter 1.2",
    text: "In LLM agents, Long-Term Memory is described as corresponding to which of the following?",
    options: [
      "Vector databases or agent stores",
      "The active context window",
      "A single line of console output",
      "A printed user manual",
    ],
    correctAnswer: 0,
    explanation:
      "In LLM agents, Long-Term Memory is described as vector databases or agent stores.\n\nThe active context window is instead described as how LLM agents implement Short-Term Memory, not Long-Term Memory.\n\nA single line of console output is not the described analogy for Long-Term Memory.\n\nA printed user manual is not the described analogy for Long-Term Memory.",
  },
  {
    id: "cpe310_ch2_025",
    course: "CPE 310",
    chapter: "Chapter 1.2",
    text: "Which learning paradigm updates models from labelled examples or human feedback, such as learning to classify user intent from past conversations?",
    options: [
      "Supervised Learning",
      "Unsupervised Learning",
      "Reinforcement Learning",
      "In-Context / Few-Shot Learning",
    ],
    correctAnswer: 0,
    explanation:
      "Supervised Learning updates models from labelled examples or human feedback, exemplified by learning to classify user intent from past conversations.\n\nUnsupervised Learning instead identifies hidden patterns in unlabelled data, not labelled examples or feedback.\n\nReinforcement Learning instead optimises behaviour through trial and error, maximising cumulative reward, not labelled examples.\n\nIn-Context / Few-Shot Learning instead adapts through prompt examples without retraining, a different mechanism from updating a model from labelled data.",
  },
  {
    id: "cpe310_ch2_026",
    course: "CPE 310",
    chapter: "Chapter 1.2",
    text: "Which learning paradigm identifies hidden patterns in unlabelled data, such as clustering signals to detect anomalies in a monitoring system?",
    options: [
      "Unsupervised Learning",
      "Supervised Learning",
      "Reinforcement Learning",
      "Continued Pretraining & Fine-Tuning",
    ],
    correctAnswer: 0,
    explanation:
      "Unsupervised Learning identifies hidden patterns in unlabelled data, exemplified by clustering signals to detect anomalies in a monitoring system.\n\nSupervised Learning instead updates models from labelled examples or human feedback, not unlabelled data.\n\nReinforcement Learning instead optimises behaviour through trial and error and reward, not pattern discovery in unlabelled data.\n\nContinued Pretraining & Fine-Tuning instead embeds agent-like behaviour into model weights for domain-specific agents, a different mechanism from pattern discovery.",
  },
  {
    id: "cpe310_ch2_027",
    course: "CPE 310",
    chapter: "Chapter 1.2",
    text: "Which learning paradigm optimises behaviour through trial and error, maximising cumulative reward, such as learning the fastest task completion strategy?",
    options: [
      "Reinforcement Learning",
      "Supervised Learning",
      "Unsupervised Learning",
      "In-Context / Few-Shot Learning",
    ],
    correctAnswer: 0,
    explanation:
      "Reinforcement Learning optimises behaviour through trial and error, maximising cumulative reward, exemplified by learning the fastest task completion strategy.\n\nSupervised Learning instead updates models from labelled examples, not trial-and-error reward maximisation.\n\nUnsupervised Learning instead identifies hidden patterns in unlabelled data, not trial-and-error reward maximisation.\n\nIn-Context / Few-Shot Learning instead adapts through prompt examples without retraining, a different mechanism from reward-based optimisation.",
  },
  {
    id: "cpe310_ch2_028",
    course: "CPE 310",
    chapter: "Chapter 1.2",
    text: "Which learning paradigm allows LLM-based agents to adapt through prompt examples without retraining, described as rapid, flexible, and session-level adaptation?",
    options: [
      "In-Context / Few-Shot Learning",
      "Supervised Learning",
      "Reinforcement Learning",
      "Continued Pretraining & Fine-Tuning",
    ],
    correctAnswer: 0,
    explanation:
      "In-Context / Few-Shot Learning allows LLM-based agents to adapt through prompt examples without retraining, rapid, flexible, and session-level.\n\nSupervised Learning instead requires updating the model from labelled examples, not adapting purely through prompt examples.\n\nReinforcement Learning instead requires trial-and-error optimisation over time, not immediate prompt-based adaptation.\n\nContinued Pretraining & Fine-Tuning instead embeds behaviour into model weights, requiring retraining rather than avoiding it.",
  },
  {
    id: "cpe310_ch2_029",
    course: "CPE 310",
    chapter: "Chapter 1.2",
    text: "Which learning approach embeds agent-like behaviour into a model's weights for domain-specific agents, reducing prompt length and improving efficiency?",
    options: [
      "Continued Pretraining & Fine-Tuning",
      "Unsupervised Learning",
      "In-Context / Few-Shot Learning",
      "Reinforcement Learning",
    ],
    correctAnswer: 0,
    explanation:
      "Continued Pretraining & Fine-Tuning embeds agent-like behaviour into a model's weights for domain-specific agents, reducing prompt length and improving efficiency.\n\nUnsupervised Learning instead identifies hidden patterns in unlabelled data, not embedding behaviour into weights for a specific domain.\n\nIn-Context / Few-Shot Learning instead adapts through prompt examples without retraining, the opposite of embedding behaviour into weights.\n\nReinforcement Learning instead optimises behaviour through trial and error and reward, a different mechanism from fine-tuning weights.",
  },
  {
    id: "cpe310_ch2_030",
    course: "CPE 310",
    chapter: "Chapter 1.2",
    text: "The Emergent Feedback Loop describes agents as becoming which of the following, as each action influences future perceptions, experience, memory, and refined reasoning?",
    options: [
      "Self-improving systems",
      "Completely static and unchanging systems",
      "Systems that forget everything after each single action",
      "Systems that require manual reprogramming after every task",
    ],
    correctAnswer: 0,
    explanation:
      "The Emergent Feedback Loop describes agents as becoming self-improving systems, as each action influences future perceptions, experience, memory, and refined reasoning.\n\nBeing completely static and unchanging contradicts the described emergent improvement through the feedback loop.\n\nForgetting everything after each action contradicts the described role of memory in refining reasoning over time.\n\nRequiring manual reprogramming after every task contradicts the described self-improving, automatic nature of the feedback loop.",
  },
  {
    id: "cpe310_ch2_031",
    course: "CPE 310",
    chapter: "Chapter 1.2",
    text: "In the convergence timeline of agent theory and generative AI, which year is credited with the Transformers paper, 'Attention Is All You Need'?",
    options: ["2017", "1996", "2022", "2024"],
    correctAnswer: 0,
    explanation:
      "2017 is credited with Transformers, the 'Attention Is All You Need' paper.\n\n1996 is instead credited with Nwana's formal agent framework, not Transformers.\n\n2022 is instead credited with ChatGPT, conversational AI at scale, not Transformers.\n\n2024 is instead credited with Bedrock Agents and the MCP protocol, not Transformers.",
  },
  {
    id: "cpe310_ch2_032",
    course: "CPE 310",
    chapter: "Chapter 1.2",
    text: "In the convergence timeline of agent theory and generative AI, which year is credited with ChatGPT, bringing conversational AI at scale?",
    options: ["2022", "2017", "1996", "2023"],
    correctAnswer: 0,
    explanation:
      "2022 is credited with ChatGPT, conversational AI at scale.\n\n2017 is instead credited with Transformers, not ChatGPT.\n\n1996 is instead credited with Nwana's formal agent framework, not ChatGPT.\n\n2023 is instead credited with Open LLMs like Llama, Falcon, and Mistral, not ChatGPT.",
  },
  {
    id: "cpe310_ch2_033",
    course: "CPE 310",
    chapter: "Chapter 1.2",
    text: "In the convergence timeline of agent theory and generative AI, which year is credited with Bedrock Agents and the MCP protocol?",
    options: ["2024", "2017", "2022", "2025"],
    correctAnswer: 0,
    explanation:
      "2024 is credited with Bedrock Agents and the MCP protocol.\n\n2017 is instead credited with Transformers, not Bedrock Agents and MCP.\n\n2022 is instead credited with ChatGPT, not Bedrock Agents and MCP.\n\n2025 is instead credited with Agentic AI at enterprise scale, not specifically Bedrock Agents and MCP.",
  },
  {
    id: "cpe310_ch2_034",
    course: "CPE 310",
    chapter: "Chapter 1.2",
    text: "Comparing traditional symbolic agent reasoning to LLM-powered agent reasoning, which of the following describes traditional agent reasoning?",
    options: [
      "Static plan libraries with hand-coded logic and decision trees",
      "Dynamic plans generated from context",
      "Probabilistic, creative, and adaptive reasoning",
      "Handles open-ended, unseen scenarios",
    ],
    correctAnswer: 0,
    explanation:
      "Traditional agent reasoning uses static plan libraries with hand-coded logic and decision trees, requiring explicit domain knowledge encoding.\n\nDynamic plans generated from context is instead a trait of LLM-powered agent reasoning, not traditional reasoning.\n\nProbabilistic, creative, and adaptive reasoning is instead a trait of LLM-powered agent reasoning, not traditional reasoning.\n\nHandling open-ended, unseen scenarios is instead a trait of LLM-powered agent reasoning, not traditional reasoning.",
  },
  {
    id: "cpe310_ch2_035",
    course: "CPE 310",
    chapter: "Chapter 1.2",
    text: "Comparing traditional symbolic agent reasoning to LLM-powered agent reasoning, which of the following describes LLM-powered agent reasoning?",
    options: [
      "Natural language goals as prompt context, flexible in novel situations",
      "Fast, deterministic, and predictable",
      "Limited to what developers anticipated",
      "Brittle in unforeseen situations",
    ],
    correctAnswer: 0,
    explanation:
      "LLM-powered agent reasoning uses natural language goals as prompt context and is flexible in novel situations.\n\nBeing fast, deterministic, and predictable is instead a trait of traditional symbolic agent reasoning, not LLM-powered reasoning.\n\nBeing limited to what developers anticipated is instead a trait of traditional symbolic agent reasoning, not LLM-powered reasoning.\n\nBeing brittle in unforeseen situations is instead a trait of traditional symbolic agent reasoning, not LLM-powered reasoning.",
  },
  {
    id: "cpe310_ch2_036",
    course: "CPE 310",
    chapter: "Chapter 1.2",
    text: "Which key enhancement in generative AI agents describes LLMs generating chain-of-thought reasoning and decomposing tasks into sub-goals, using goals and plans passed as prompt context?",
    options: [
      "LLMs as Cognitive Engines",
      "Tool Use Through Prompting",
      "Context-Aware Planning",
      "Few-Shot In-Context Learning",
    ],
    correctAnswer: 0,
    explanation:
      "LLMs as Cognitive Engines describes goals and plans being passed as prompt context, with the LLM generating chain-of-thought reasoning and decomposing tasks into sub-goals.\n\nTool Use Through Prompting instead describes LLMs calling APIs, searching, and querying databases via ReAct-style prompting, a related but distinct enhancement.\n\nContext-Aware Planning instead describes agents generating and revising plans dynamically, a related but distinct enhancement.\n\nFew-Shot In-Context Learning instead describes adapting behaviours through prompt engineering alone, a related but distinct enhancement.",
  },
  {
    id: "cpe310_ch2_037",
    course: "CPE 310",
    chapter: "Chapter 1.2",
    text: "Which key enhancement in generative AI agents describes LLMs calling APIs, searching, querying databases, and interpreting outputs via ReAct prompting?",
    options: [
      "Tool Use Through Prompting",
      "LLMs as Cognitive Engines",
      "Prompt Context as Memory",
      "Context-Aware Planning",
    ],
    correctAnswer: 0,
    explanation:
      "Tool Use Through Prompting describes LLMs calling APIs, searching, querying databases, calculating, and interpreting outputs via tool-use agents or ReAct (Reasoning + Acting) prompting.\n\nLLMs as Cognitive Engines instead describes goals and plans passed as prompt context for chain-of-thought reasoning, a related but distinct enhancement.\n\nPrompt Context as Memory instead describes memory, plans, and goals encoded as prompt tokens, a related but distinct enhancement.\n\nContext-Aware Planning instead describes dynamically generated and revised plans, a related but distinct enhancement.",
  },
  {
    id: "cpe310_ch2_038",
    course: "CPE 310",
    chapter: "Chapter 1.2",
    text: "Which key enhancement in generative AI agents describes memory, plans, and goals being encoded as prompt tokens passed to the model, replacing symbolic knowledge bases?",
    options: [
      "Prompt Context as Memory",
      "Tool Use Through Prompting",
      "Context-Aware Planning",
      "Few-Shot In-Context Learning",
    ],
    correctAnswer: 0,
    explanation:
      "Prompt Context as Memory describes memory, plans, and goals being encoded as prompt tokens passed to the model, replacing symbolic knowledge bases.\n\nTool Use Through Prompting instead describes calling APIs and querying databases via ReAct prompting, a related but distinct enhancement.\n\nContext-Aware Planning instead describes dynamically generating and revising plans, a related but distinct enhancement.\n\nFew-Shot In-Context Learning instead describes adapting behaviours through prompt engineering alone, a related but distinct enhancement.",
  },
  {
    id: "cpe310_ch2_039",
    course: "CPE 310",
    chapter: "Chapter 1.2",
    text: "Which key enhancement in generative AI agents describes agents generating and revising plans dynamically based on current goal, environment, and feedback, without hardcoded plan libraries?",
    options: [
      "Context-Aware Planning",
      "LLMs as Cognitive Engines",
      "Tool Use Through Prompting",
      "Prompt Context as Memory",
    ],
    correctAnswer: 0,
    explanation:
      "Context-Aware Planning describes agents generating and revising plans dynamically based on current goal, environment, and feedback, with no hardcoded plan libraries needed.\n\nLLMs as Cognitive Engines instead describes chain-of-thought reasoning from prompt context, a related but distinct enhancement.\n\nTool Use Through Prompting instead describes calling APIs and databases via ReAct prompting, a related but distinct enhancement.\n\nPrompt Context as Memory instead describes encoding memory and goals as prompt tokens, a related but distinct enhancement.",
  },
  {
    id: "cpe310_ch2_040",
    course: "CPE 310",
    chapter: "Chapter 1.2",
    text: "The core challenge in achieving long-term memory in LLM-based agents is described as which of the following?",
    options: [
      "LLMs have context window limits and cannot remember across sessions without explicit memory infrastructure",
      "LLMs have unlimited memory and never forget anything",
      "LLMs cannot process text input of any kind",
      "LLMs require physical hardware upgrades every session",
    ],
    correctAnswer: 0,
    explanation:
      "The core challenge is that LLMs have context window limits, and cannot remember across sessions without explicit memory infrastructure.\n\nLLMs having unlimited memory contradicts the described core challenge of limited context windows.\n\nLLMs being unable to process text input at all contradicts their fundamental function as text-based models.\n\nRequiring physical hardware upgrades every session is not the described core challenge; the challenge is about memory infrastructure, not hardware.",
  },
  {
    id: "cpe310_ch2_041",
    course: "CPE 310",
    chapter: "Chapter 1.2",
    text: "Which technique searches a retrieval index of documents, past conversations, or knowledge bases when a goal is issued, and appends results to the prompt?",
    options: [
      "Retrieval-Augmented Generation (RAG)",
      "Prompt Chaining",
      "Continued Pretraining",
      "Physical Actuation",
    ],
    correctAnswer: 0,
    explanation:
      "Retrieval-Augmented Generation (RAG) searches a retrieval index of documents, past conversations, or knowledge bases when a goal is issued, and appends results to the prompt.\n\nPrompt Chaining instead maintains short-term context across calls by passing structured conversation history and outcomes between LLM invocations, a related but distinct technique.\n\nContinued Pretraining instead fine-tunes a model on enterprise data, embedding behaviour into weights, a different technique from retrieval-based search.\n\nPhysical Actuation is an Action Module output channel, not a long-term memory technique.",
  },
  {
    id: "cpe310_ch2_042",
    course: "CPE 310",
    chapter: "Chapter 1.2",
    text: "Which technique maintains short-term context across calls by passing structured conversation history, current plan, and action outcomes between LLM invocations?",
    options: [
      "Prompt Chaining",
      "Retrieval-Augmented Generation (RAG)",
      "Agent Store",
      "Continued Pretraining",
    ],
    correctAnswer: 0,
    explanation:
      "Prompt Chaining maintains short-term context across calls by passing structured conversation history, current plan, and action outcomes between LLM invocations.\n\nRetrieval-Augmented Generation (RAG) instead searches a retrieval index and appends results to the prompt, a related but distinct technique.\n\nAgent Store instead stores state, history, decisions, and outcomes in vector or document stores, a related but distinct technique.\n\nContinued Pretraining instead fine-tunes a model on enterprise data, a different technique from passing conversation history between calls.",
  },
  {
    id: "cpe310_ch2_043",
    course: "CPE 310",
    chapter: "Chapter 1.2",
    text: "Which combination is described as 'the practical architecture for enterprise-grade agent memory', a key design pattern students should master?",
    options: [
      "RAG + Agent Store",
      "Physical Actuation + Tool Invocation",
      "Supervised Learning + Unsupervised Learning",
      "Continuity + Delegation",
    ],
    correctAnswer: 0,
    explanation:
      "RAG plus Agent Store is described as the practical architecture for enterprise-grade agent memory, a key design pattern students should master.\n\nPhysical Actuation plus Tool Invocation are Action Module output channels, not the described memory architecture.\n\nSupervised Learning plus Unsupervised Learning are separate learning paradigms, not the described memory architecture.\n\nContinuity plus Delegation are terms from Nwana's definition, not the described memory architecture.",
  },
  {
    id: "cpe310_ch2_044",
    course: "CPE 310",
    chapter: "Chapter 1.2",
    text: "Comparing Traditional AI, Software Agents, and Agentic AI, which is described as having 'Batch / synchronous' execution?",
    options: [
      "Traditional AI",
      "Software Agents",
      "Agentic AI",
      "None of the three",
    ],
    correctAnswer: 0,
    explanation:
      "Traditional AI is described as having 'Batch / synchronous' execution.\n\nSoftware Agents instead are described as 'Event-driven / scheduled', not batch/synchronous.\n\nAgentic AI instead is described as 'Async, event-driven, goal-driven', not batch/synchronous.\n\nBatch/synchronous execution is explicitly attributed to Traditional AI, contradicting a claim that none of the three matches it.",
  },
  {
    id: "cpe310_ch2_045",
    course: "CPE 310",
    chapter: "Chapter 1.2",
    text: "Comparing Traditional AI, Software Agents, and Agentic AI, which is described as having 'High; adaptive strategies' for autonomy?",
    options: [
      "Agentic AI",
      "Traditional AI",
      "Software Agents",
      "None of the three",
    ],
    correctAnswer: 0,
    explanation:
      "Agentic AI is described as having 'High; adaptive strategies' for autonomy.\n\nTraditional AI instead is described as having 'Limited; needs orchestration' autonomy, not high adaptive autonomy.\n\nSoftware Agents instead are described as having 'Medium; predefined bounds' autonomy, not high adaptive autonomy.\n\nHigh, adaptive autonomy is explicitly attributed to Agentic AI, contradicting a claim that none of the three matches it.",
  },
  {
    id: "cpe310_ch2_046",
    course: "CPE 310",
    chapter: "Chapter 1.2",
    text: "Comparing Traditional AI, Software Agents, and Agentic AI, which is described as 'Reactive AND proactive' in reactivity?",
    options: [
      "Agentic AI",
      "Traditional AI",
      "Software Agents",
      "None of the three",
    ],
    correctAnswer: 0,
    explanation:
      "Agentic AI is described as 'Reactive AND proactive' in reactivity.\n\nTraditional AI instead is described as 'Reactive to input data' only, not reactive and proactive.\n\nSoftware Agents instead are described as 'Reactive to events' only, not reactive and proactive.\n\nBeing reactive and proactive is explicitly attributed to Agentic AI, contradicting a claim that none of the three matches it.",
  },
  {
    id: "cpe310_ch2_047",
    course: "CPE 310",
    chapter: "Chapter 1.2",
    text: "Comparing Traditional AI, Software Agents, and Agentic AI, which is described as having 'None - direct user tasks' for delegated intent?",
    options: [
      "Traditional AI",
      "Software Agents",
      "Agentic AI",
      "None of the three",
    ],
    correctAnswer: 0,
    explanation:
      "Traditional AI is described as having 'None - direct user tasks' for delegated intent.\n\nSoftware Agents instead are described as having 'Partial - limited scope' delegated intent, not none.\n\nAgentic AI instead is described as having delegated intent 'Yes - across services & systems', not none.\n\nHaving no delegated intent is explicitly attributed to Traditional AI, contradicting a claim that none of the three matches it.",
  },
  {
    id: "cpe310_ch2_048",
    course: "CPE 310",
    chapter: "Chapter 1.2",
    text: "Comparing Traditional AI, Software Agents, and Agentic AI, which infrastructure is described as a 'Composable agent mesh + cloud'?",
    options: [
      "Agentic AI",
      "Traditional AI",
      "Software Agents",
      "None of the three",
    ],
    correctAnswer: 0,
    explanation:
      "Agentic AI's infrastructure is described as a 'Composable agent mesh + cloud'.\n\nTraditional AI instead has infrastructure described as 'Embedded in apps', not a composable agent mesh.\n\nSoftware Agents instead have infrastructure described as 'Middleware / service layer', not a composable agent mesh.\n\nA composable agent mesh plus cloud is explicitly attributed to Agentic AI, contradicting a claim that none of the three matches it.",
  },
  {
    id: "cpe310_ch2_049",
    course: "CPE 310",
    chapter: "Chapter 1.2",
    text: "Which of the following is listed as a characteristic compared across Traditional AI, Software Agents, and Agentic AI?",
    options: ["Execution", "Agency", "All of these", "None of these"],
    correctAnswer: 2,
    explanation:
      "The comparison table lists Execution, Autonomy, Reactivity, Decision-Making, Delegated Intent, Learning, Agency, and Infrastructure as compared characteristics, so both Execution and Agency are correct, making All of these the right choice.",
  },
  {
    id: "cpe310_ch2_050",
    course: "CPE 310",
    chapter: "Chapter 1.2",
    text: "Among the Four Pillars of Agentic AI Convergence, which pillar traces its architectural lineage to multi-agent systems and the Actor Model?",
    options: [
      "Architectural Lineage",
      "Cognitive Model",
      "Generative Power",
      "Operational Flexibility",
    ],
    correctAnswer: 0,
    explanation:
      "Architectural Lineage traces multi-agent systems plus the Actor Model to distributed, isolated, asynchronous agent design with message-passing coordination.\n\nCognitive Model instead refers to the Perceive-Reason-Act cycle, not the architectural lineage from multi-agent systems.\n\nGenerative Power instead refers to LLMs and transformer models, not the architectural lineage.\n\nOperational Flexibility instead refers to cloud-native, serverless computing, not the architectural lineage.",
  },
  {
    id: "cpe310_ch2_051",
    course: "CPE 310",
    chapter: "Chapter 1.2",
    text: "Among the Four Pillars of Agentic AI Convergence, which pillar refers to LLMs and transformer models enabling flexible, contextual reasoning without hand-coded rules?",
    options: [
      "Generative Power",
      "Architectural Lineage",
      "Cognitive Model",
      "Operational Flexibility",
    ],
    correctAnswer: 0,
    explanation:
      "Generative Power refers to LLMs and transformer models, enabling flexible, contextual reasoning without hand-coded rules, with natural language as the interface to intelligence.\n\nArchitectural Lineage instead refers to multi-agent systems and the Actor Model, not LLMs and transformers.\n\nCognitive Model instead refers to the Perceive-Reason-Act cycle, not LLMs and transformers.\n\nOperational Flexibility instead refers to cloud-native, serverless computing, not LLMs and transformers.",
  },
  {
    id: "cpe310_ch2_052",
    course: "CPE 310",
    chapter: "Chapter 1.2",
    text: "Among the Four Pillars of Agentic AI Convergence, which pillar refers to cloud-native, serverless computing matching the asynchronous, autonomous nature of agents?",
    options: [
      "Operational Flexibility",
      "Architectural Lineage",
      "Cognitive Model",
      "Generative Power",
    ],
    correctAnswer: 0,
    explanation:
      "Operational Flexibility refers to cloud-native, serverless computing, scalable, event-driven infrastructure that matches the asynchronous, autonomous nature of agents.\n\nArchitectural Lineage instead refers to multi-agent systems and the Actor Model, not cloud infrastructure.\n\nCognitive Model instead refers to the Perceive-Reason-Act cycle, not cloud infrastructure.\n\nGenerative Power instead refers to LLMs and transformer models, not cloud infrastructure.",
  },
  {
    id: "cpe310_ch2_053",
    course: "CPE 310",
    chapter: "Chapter 1.2",
    text: "Which of the following is listed as an example under Enterprise Automation, one of the Agentic AI application categories?",
    options: [
      "AI coding assistants (Amazon Q)",
      "Customer service orchestration",
      "Human-in-the-loop review steps",
      "Smart city traffic management",
    ],
    correctAnswer: 0,
    explanation:
      "AI coding assistants such as Amazon Q are listed as an example under Enterprise Automation.\n\nCustomer service orchestration is instead listed as an example under Multi-Agent Systems, not Enterprise Automation.\n\nHuman-in-the-loop review steps is instead listed as an example under Human-Agent Collaboration, not Enterprise Automation.\n\nSmart city traffic management is instead listed as an example under Multi-Agent Systems, not Enterprise Automation.",
  },
  {
    id: "cpe310_ch2_054",
    course: "CPE 310",
    chapter: "Chapter 1.2",
    text: "Which of the following is listed as an example under Multi-Agent Systems, one of the Agentic AI application categories?",
    options: [
      "Supply chain optimisation agents",
      "Document processing & summarisation",
      "Escalation to human experts",
      "Autonomous report generation",
    ],
    correctAnswer: 0,
    explanation:
      "Supply chain optimisation agents are listed as an example under Multi-Agent Systems.\n\nDocument processing and summarisation is instead listed as an example under Enterprise Automation, not Multi-Agent Systems.\n\nEscalation to human experts is instead listed as an example under Human-Agent Collaboration, not Multi-Agent Systems.\n\nAutonomous report generation is instead listed as an example under Enterprise Automation, not Multi-Agent Systems.",
  },
  {
    id: "cpe310_ch2_055",
    course: "CPE 310",
    chapter: "Chapter 1.2",
    text: "Which of the following is listed as an example under Human-Agent Collaboration, one of the Agentic AI application categories?",
    options: [
      "Explainable decision trails",
      "Financial trading agent networks",
      "Multi-step research workflows",
      "Factory & logistics coordination",
    ],
    correctAnswer: 0,
    explanation:
      "Explainable decision trails are listed as an example under Human-Agent Collaboration, described as augmentation, not replacement.\n\nFinancial trading agent networks are instead listed as an example under Multi-Agent Systems, not Human-Agent Collaboration.\n\nMulti-step research workflows are instead listed as an example under Enterprise Automation, not Human-Agent Collaboration.\n\nFactory and logistics coordination is instead listed as an example under Multi-Agent Systems, not Human-Agent Collaboration.",
  },
  {
    id: "cpe310_ch2_056",
    course: "CPE 310",
    chapter: "Chapter 1.2",
    text: "Human-Agent Collaboration is described as representing which of the following?",
    options: [
      "Augmentation, not replacement",
      "Complete replacement of all human workers",
      "The elimination of any human oversight",
      "A category with no real-world examples",
    ],
    correctAnswer: 0,
    explanation:
      "Human-Agent Collaboration is described as augmentation, not replacement.\n\nComplete replacement of all human workers contradicts the explicit 'augmentation, not replacement' framing.\n\nEliminating human oversight contradicts the listed examples like human-in-the-loop review and escalation to human experts.\n\nThe category is given several real-world examples, contradicting a claim that it has none.",
  },
  {
    id: "cpe310_ch2_057",
    course: "CPE 310",
    chapter: "Chapter 1.2",
    text: "Comparing design decisions for a Traditional Software Agent versus Agentic AI, how does a traditional software agent typically reason?",
    options: [
      "Symbolic rules / decision trees",
      "LLM prompt context + chain-of-thought",
      "Dynamic tool use via MCP / prompting",
      "Serverless composable agent mesh",
    ],
    correctAnswer: 0,
    explanation:
      "A traditional software agent reasons using symbolic rules and decision trees.\n\nLLM prompt context plus chain-of-thought reasoning is instead how Agentic AI reasons, not a traditional software agent.\n\nDynamic tool use via MCP or prompting is instead how Agentic AI uses tools, not how a traditional agent reasons.\n\nA serverless composable agent mesh describes deployment, not the reasoning mechanism, and is associated with Agentic AI, not traditional agents.",
  },
  {
    id: "cpe310_ch2_058",
    course: "CPE 310",
    chapter: "Chapter 1.2",
    text: "Comparing design decisions for a Traditional Software Agent versus Agentic AI, how does Agentic AI typically remember information?",
    options: [
      "Vector store + RAG + prompt context",
      "A pre-written plan library",
      "A structured knowledge base only",
      "Hard-coded API calls",
    ],
    correctAnswer: 0,
    explanation:
      "Agentic AI remembers using a vector store plus RAG plus prompt context.\n\nA pre-written plan library is instead how a traditional software agent plans, not how Agentic AI remembers.\n\nA structured knowledge base only is instead how a traditional software agent remembers, not Agentic AI.\n\nHard-coded API calls describe how a traditional software agent uses tools, not how Agentic AI remembers.",
  },
  {
    id: "cpe310_ch2_059",
    course: "CPE 310",
    chapter: "Chapter 1.2",
    text: "Comparing design decisions for a Traditional Software Agent versus Agentic AI, what is listed as the main risk of a traditional software agent?",
    options: [
      "Brittleness in unforeseen cases",
      "Hallucination, unpredictability, cost",
      "Excessive flexibility in novel situations",
      "Too much dynamic tool use",
    ],
    correctAnswer: 0,
    explanation:
      "The main risk listed for a traditional software agent is brittleness in unforeseen cases.\n\nHallucination, unpredictability, and cost is instead listed as the main risk of Agentic AI, not a traditional software agent.\n\nExcessive flexibility in novel situations is not the listed risk for a traditional software agent, which is instead described as brittle and inflexible.\n\nToo much dynamic tool use is not the listed risk for a traditional software agent, which instead uses hard-coded API calls.",
  },
  {
    id: "cpe310_ch2_060",
    course: "CPE 310",
    chapter: "Chapter 1.2",
    text: "LLMs are described as replacing which two things to enable flexible, open-ended agent reasoning?",
    options: [
      "The plan library and the rule engine",
      "The Perception Module and the Action Module entirely",
      "The physical actuators and the sensors",
      "The concept of memory itself",
    ],
    correctAnswer: 0,
    explanation:
      "The Part 2 Key Takeaways state LLMs replace the plan library and rule engine, enabling flexible, open-ended reasoning.\n\nReplacing the Perception Module and Action Module entirely is not stated; the four modules still apply to both classical and LLM-based agents.\n\nReplacing physical actuators and sensors is not stated; these remain part of the Action and Perception Modules.\n\nReplacing memory itself is not stated; instead, long-term memory requires explicit infrastructure like RAG and vector stores.",
  },
  {
    id: "cpe310_ch2_061",
    course: "CPE 310",
    chapter: "Chapter 1.2",
    text: "Achieving long-term memory in agents is stated to require which of the following?",
    options: [
      "Explicit infrastructure: RAG, vector stores, prompt chaining",
      "No infrastructure at all; it happens automatically",
      "Only physical hard drives with no software component",
      "A single centralised mainframe computer",
    ],
    correctAnswer: 0,
    explanation:
      "The Part 2 Key Takeaways state long-term memory requires explicit infrastructure: RAG, vector stores, and prompt chaining.\n\nRequiring no infrastructure at all contradicts the explicit statement that long-term memory requires deliberate infrastructure.\n\nRequiring only physical hard drives with no software ignores the software infrastructure, like RAG and vector stores, explicitly named.\n\nA single centralised mainframe is not the infrastructure described for achieving long-term memory.",
  },
  {
    id: "cpe310_ch2_062",
    course: "CPE 310",
    chapter: "Chapter 1.2",
    text: "Agentic AI is defined as the combination of which elements?",
    options: [
      "Autonomy + Asynchronicity + Agency + Generative AI + Cloud-Native infrastructure",
      "Only hardware sensors and physical actuators",
      "A single programming language and nothing else",
      "Manual human control with no software involvement",
    ],
    correctAnswer: 0,
    explanation:
      "The Part 2 Key Takeaways define Agentic AI = Autonomy + Asynchronicity + Agency + Generative AI + Cloud-Native infrastructure.\n\nOnly hardware sensors and actuators is far narrower than the described combination of software and infrastructure elements.\n\nA single programming language is not part of the described definition of Agentic AI.\n\nManual human control with no software involvement directly contradicts the autonomy and generative AI components of the definition.",
  },
  {
    id: "cpe310_ch2_063",
    course: "CPE 310",
    chapter: "Chapter 1.2",
    text: "The Cognitive Module manages goals, planning, and decision-making, transforming raw perception into purposeful, goal-directed behaviour.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "This is True. The Cognitive Module is described as the deliberative core, managing goals, planning, and decision-making, transforming raw perception into purposeful, goal-directed behaviour.",
  },
  {
    id: "cpe310_ch2_064",
    course: "CPE 310",
    chapter: "Chapter 1.2",
    text: "Short-Term Memory encodes persistent knowledge from past experiences and supports cross-session continuity, while Long-Term Memory is lost between sessions without persistence.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "This is False. It reverses the two memory types: Long-Term Memory is the one that encodes persistent knowledge and supports cross-session continuity, while Short-Term Memory is the one that is lost between sessions without persistence.",
  },
  {
    id: "cpe310_ch2_065",
    course: "CPE 310",
    chapter: "Chapter 1.2",
    text: "Traditional agent reasoning uses static plan libraries and hand-coded logic, while LLM-powered agent reasoning generates dynamic plans from context and natural language goals.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "This is True. Traditional agent reasoning is described as using static plan libraries and hand-coded logic and decision trees, while LLM-powered agent reasoning generates dynamic plans from context using natural language goals as prompt context.",
  },
  {
    id: "cpe310_ch2_066",
    course: "CPE 310",
    chapter: "Chapter 1.2",
    text: "In the convergence timeline, 2023 is credited with the release of Open LLMs such as Llama, Falcon, and Mistral.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "This is True. The convergence timeline credits 2023 with Open LLMs, specifically naming Llama, Falcon, and Mistral.",
  },
  {
    id: "cpe310_ch2_067",
    course: "CPE 310",
    chapter: "Chapter 1.2",
    text: "Agentic AI's decision-making is described as 'Model inference only', identical to Traditional AI, since both rely purely on statistical prediction with no contextual reasoning.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "This is False. Traditional AI's decision-making is described as 'Model inference only', but Agentic AI's decision-making is described as 'Contextual, LLM-enhanced', not identical to Traditional AI.",
  },
  {
    id: "cpe310_ch2_068",
    course: "CPE 310",
    chapter: "Chapter 1.2",
    text: "Which of the following is listed as one of the named learning paradigms for how agents improve over time?",
    options: [
      "Reinforcement Learning",
      "In-Context / Few-Shot Learning",
      "All of these",
      "None of these",
    ],
    correctAnswer: 2,
    explanation:
      "The learning paradigms covered are Supervised Learning, Unsupervised Learning, Reinforcement Learning, and In-Context / Few-Shot Learning, alongside Continued Pretraining & Fine-Tuning, so both Reinforcement Learning and In-Context / Few-Shot Learning are correct, making All of these the right choice.",
  },
  {
    id: "cpe310_ch2_069",
    course: "CPE 310",
    chapter: "Chapter 1.2",
    text: "Which of the following is listed as a technique for achieving long-term memory in LLM-based agents?",
    options: [
      "Retrieval-Augmented Generation (RAG)",
      "Prompt Chaining",
      "All of these",
      "None of these",
    ],
    correctAnswer: 2,
    explanation:
      "The techniques for achieving long-term memory include the Agent Store, Retrieval-Augmented Generation (RAG), Prompt Chaining, and Continued Pretraining / Fine-Tuning, so both RAG and Prompt Chaining are correct, making All of these the right choice.",
  },
  {
    id: "cpe310_ch2_070",
    course: "CPE 310",
    chapter: "Chapter 1.2",
    text: "Which of the following is listed as one of the Four Pillars of Agentic AI Convergence?",
    options: [
      "Regulatory Compliance",
      "Manufacturing Throughput",
      "All of these",
      "None of these",
    ],
    correctAnswer: 3,
    explanation:
      "The Four Pillars of Agentic AI Convergence are Architectural Lineage, Cognitive Model, Generative Power, and Operational Flexibility. Neither Regulatory Compliance nor Manufacturing Throughput is one of these four named pillars, making None of these the right choice.",
  },
];

export default cpe310Chapter1_2Questions;
