import { QuestionV2 } from "@/lib/quiz-types";

const cpe310Chapter6Questions: QuestionV2[] = [
  {
    id: "cpe310_ch6_001",
    course: "CPE 310",
    chapter: "Chapter 6",
    text: "How is a learning agent defined?",
    options: [
      "An intelligent system that improves its performance over time by learning from experience and interactions with its environment",
      "A system that relies exclusively on predefined rules and never changes its behavior",
      "A physical robot that can only operate on a single fixed track",
      "A software program that cannot interact with its environment at all"
    ],
    correctAnswer: 0,
    explanation: "Learning Agents defines a learning agent as an intelligent system that improves its performance over time by learning from experience and interactions with its environment, instead of relying only on predefined rules.\n\nRelying exclusively on predefined rules is explicitly what a learning agent is contrasted against, not what it does.\n\nBeing restricted to a single fixed track is not part of the definition of a learning agent, which concerns improving performance through experience, not physical movement constraints.\n\nBeing unable to interact with its environment contradicts the definition, since learning agents learn from interactions with their environment."
  },
  {
    id: "cpe310_ch6_002",
    course: "CPE 310",
    chapter: "Chapter 6",
    text: "Which component of a learning agent chooses actions based on current knowledge and interacts directly with the environment?",
    options: [
      "The critic",
      "The performance element",
      "The problem generator",
      "The learning element"
    ],
    correctAnswer: 1,
    explanation: "Components of a Learning Agent describes the performance element as choosing actions based on current knowledge and interacting directly with the environment.\n\nThe critic instead evaluates how well the agent is performing and provides feedback, rather than choosing actions itself.\n\nThe problem generator instead suggests exploratory actions to gain new knowledge, not the component that acts on current knowledge.\n\nThe learning element instead improves the performance element by learning from experience, rather than directly interacting with the environment."
  },
  {
    id: "cpe310_ch6_003",
    course: "CPE 310",
    chapter: "Chapter 6",
    text: "Which component of a learning agent improves the performance element by learning from experience?",
    options: [
      "The critic",
      "The problem generator",
      "The learning element",
      "The performance element"
    ],
    correctAnswer: 2,
    explanation: "Components of a Learning Agent describes the learning element as improving the performance element by learning from experience.\n\nThe critic instead evaluates performance and provides feedback to the learning element, rather than improving the performance element directly.\n\nThe problem generator instead suggests exploratory actions, a different role from improving the performance element.\n\nThe performance element is the component being improved, not the one that carries out the improvement."
  },
  {
    id: "cpe310_ch6_004",
    course: "CPE 310",
    chapter: "Chapter 6",
    text: "Which component of a learning agent evaluates how well the agent is performing and provides feedback to the learning element?",
    options: [
      "The problem generator",
      "The performance element",
      "The actuator",
      "The critic"
    ],
    correctAnswer: 3,
    explanation: "Components of a Learning Agent describes the critic as evaluating how well the agent is performing and providing feedback to the learning element.\n\nThe problem generator instead suggests exploratory actions to gain new knowledge, not evaluating performance.\n\nThe performance element instead chooses actions and interacts with the environment, rather than evaluating performance.\n\nAn actuator is a physical component that executes actions, not one of the four named components of a learning agent."
  },
  {
    id: "cpe310_ch6_005",
    course: "CPE 310",
    chapter: "Chapter 6",
    text: "Which component of a learning agent suggests exploratory actions to gain new knowledge?",
    options: [
      "The problem generator",
      "The critic",
      "The performance element",
      "The learning element"
    ],
    correctAnswer: 0,
    explanation: "Components of a Learning Agent describes the problem generator as suggesting exploratory actions to gain new knowledge.\n\nThe critic instead evaluates performance and provides feedback, not suggesting new actions to try.\n\nThe performance element instead chooses actions based on current knowledge, rather than suggesting exploratory ones.\n\nThe learning element instead improves the performance element using experience, not suggesting exploratory actions."
  },
  {
    id: "cpe310_ch6_006",
    course: "CPE 310",
    chapter: "Chapter 6",
    text: "A self-driving car that learns better driving strategies by analysing previous trips, road conditions, and driver feedback is given as an example of which type of agent?",
    options: [
      "A mobile agent",
      "A learning agent",
      "An economically inspired agent",
      "A purely reactive agent"
    ],
    correctAnswer: 1,
    explanation: "Learning Agents gives the self-driving car analysing previous trips, road conditions, and driver feedback as its real-world example of a learning agent.\n\nA mobile agent is instead defined by migrating between computers or network nodes carrying its code and state, a different concept unrelated to learning driving strategies.\n\nAn economically inspired agent is instead defined by using concepts like auctions and market pricing, not learning from driving experience.\n\nA purely reactive agent with fixed rules is the opposite of this example, which explicitly improves its strategies over time rather than relying only on fixed rules."
  },
  {
    id: "cpe310_ch6_007",
    course: "CPE 310",
    chapter: "Chapter 6",
    text: "Which of the following is listed as an application area for learning agents?",
    options: [
      "Healthcare diagnosis",
      "Cloud resource allocation",
      "All of these",
      "None of these"
    ],
    correctAnswer: 0,
    explanation: "Learning Agents lists recommendation systems, autonomous vehicles, robotics, healthcare diagnosis, and financial trading as applications, so healthcare diagnosis is supported. Cloud resource allocation is instead listed as an application of economically inspired multi-agent systems, not learning agents, so it is not supported here."
  },
  {
    id: "cpe310_ch6_008",
    course: "CPE 310",
    chapter: "Chapter 6",
    text: "Financial trading and autonomous vehicles are both listed as application areas for learning agents.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "Learning Agents lists recommendation systems, autonomous vehicles, robotics, healthcare diagnosis, and financial trading among its application areas, so both financial trading and autonomous vehicles are correctly listed."
  },
  {
    id: "cpe310_ch6_009",
    course: "CPE 310",
    chapter: "Chapter 6",
    text: "How is a Multi-Agent System, or MAS, defined?",
    options: [
      "A single intelligent agent operating entirely alone with no environment",
      "A predefined script with no autonomous decision-making of any kind",
      "Two or more intelligent agents that interact within a shared environment",
      "A physical robot that has no software component"
    ],
    correctAnswer: 2,
    explanation: "Multi-Agent Systems defines a MAS as consisting of two or more intelligent agents that interact within a shared environment.\n\nA single agent operating entirely alone contradicts the requirement of two or more agents interacting within a shared environment.\n\nA predefined script with no autonomous decision-making does not match the description of intelligent, interacting agents.\n\nA physical robot with no software component is not what a MAS is defined as; MAS concerns interacting intelligent agents, not the presence or absence of physical hardware."
  },
  {
    id: "cpe310_ch6_010",
    course: "CPE 310",
    chapter: "Chapter 6",
    text: "In a Multi-Agent System, what is true of each individual agent?",
    options: [
      "It shares a single goal that is identical for every agent, with no independent decision-making",
      "It is entirely forbidden from communicating with any other agent",
      "It must always act in direct opposition to every other agent in the system",
      "It has its own goals and makes independent decisions, while being able to cooperate or compete with others"
    ],
    correctAnswer: 3,
    explanation: "Multi-Agent Systems states that each agent in a MAS has its own goals, makes independent decisions, can cooperate or compete, and communicates with other agents.\n\nSharing a single identical goal with no independent decision-making contradicts the description of agents having their own goals and independent decision-making.\n\nBeing forbidden from communicating contradicts the explicit statement that each agent communicates with other agents.\n\nAlways acting in direct opposition contradicts the description that agents can cooperate, not only compete."
  },
  {
    id: "cpe310_ch6_011",
    course: "CPE 310",
    chapter: "Chapter 6",
    text: "Which of the following is listed as a core characteristic of a Multi-Agent System?",
    options: [
      "Autonomous",
      "Centralized",
      "Static",
      "Isolated"
    ],
    correctAnswer: 0,
    explanation: "Characteristics of Multi-Agent Systems lists autonomous, distributed, intelligent, interactive, and cooperative or competitive as the core characteristics.\n\nCentralized contradicts the listed characteristic of being distributed, which describes agents spread across a system rather than governed by a single center.\n\nStatic is not one of the listed characteristics, and MAS agents are described as interactive, not unchanging.\n\nIsolated contradicts the listed characteristic of being interactive, which describes agents communicating and engaging with one another."
  },
  {
    id: "cpe310_ch6_012",
    course: "CPE 310",
    chapter: "Chapter 6",
    text: "Which of the following is listed as a core characteristic of a Multi-Agent System?",
    options: [
      "Centralized control",
      "Distributed",
      "Fixed, unchanging behavior",
      "Complete isolation from other agents"
    ],
    correctAnswer: 1,
    explanation: "Characteristics of Multi-Agent Systems lists distributed as one of the core characteristics, alongside autonomous, intelligent, interactive, and cooperative or competitive.\n\nCentralized control is the opposite of being distributed, the actual listed characteristic.\n\nFixed, unchanging behavior contradicts the interactive and intelligent nature described for MAS agents.\n\nComplete isolation contradicts the listed characteristic of being interactive, which involves communication among agents."
  },
  {
    id: "cpe310_ch6_013",
    course: "CPE 310",
    chapter: "Chapter 6",
    text: "In the smart city example, what role do vehicle agents play?",
    options: [
      "They control traffic light intersections directly",
      "They exclusively request priority over all other vehicles",
      "They communicate with traffic lights",
      "They act entirely independently, never exchanging any information"
    ],
    correctAnswer: 2,
    explanation: "The Smart City Example describes vehicle agents as communicating with traffic lights, distinct from traffic light agents, which control intersections, and emergency vehicle agents, which request priority.\n\nControlling traffic light intersections directly is instead the role of traffic light agents, not vehicle agents.\n\nExclusively requesting priority over all other vehicles is instead the role of emergency vehicle agents specifically, not general vehicle agents.\n\nActing entirely independently with no information exchange contradicts the description of vehicle agents communicating with traffic lights."
  },
  {
    id: "cpe310_ch6_014",
    course: "CPE 310",
    chapter: "Chapter 6",
    text: "In the smart city example, which type of agent requests priority at intersections?",
    options: [
      "Traffic light agents",
      "Vehicle agents",
      "Pedestrian agents",
      "Emergency vehicle agents"
    ],
    correctAnswer: 3,
    explanation: "The Smart City Example describes emergency vehicle agents as requesting priority, distinct from traffic light agents that control intersections and vehicle agents that communicate with traffic lights.\n\nTraffic light agents instead control intersections directly, not requesting priority for themselves.\n\nVehicle agents instead communicate with traffic lights generally, without the specific priority-requesting role given to emergency vehicle agents.\n\nPedestrian agents are not mentioned anywhere in the smart city example."
  },
  {
    id: "cpe310_ch6_015",
    course: "CPE 310",
    chapter: "Chapter 6",
    text: "What is the overall outcome when traffic light agents, vehicle agents, and emergency vehicle agents work together in the smart city example?",
    options: [
      "They reduce congestion",
      "They worsen congestion",
      "They eliminate traffic infrastructure",
      "They disable traffic lights"
    ],
    correctAnswer: 0,
    explanation: "The Smart City Example states that together, traffic light agents, vehicle agents, and emergency vehicle agents reduce congestion.\n\nIncreasing congestion deliberately contradicts the stated goal and outcome of the smart city multi-agent system.\n\nEliminating the need for traffic infrastructure is not described; the agents work alongside existing infrastructure like traffic lights, not replacing it.\n\nCausing traffic lights to stop functioning contradicts the described cooperative role of traffic light agents controlling intersections."
  },
  {
    id: "cpe310_ch6_016",
    course: "CPE 310",
    chapter: "Chapter 6",
    text: "Which of the following is listed as an advantage of using Multi-Agent Systems?",
    options: [
      "Single point of failure",
      "Scalability",
      "Slower problem solving",
      "Centralized decision making"
    ],
    correctAnswer: 1,
    explanation: "Advantages of Multi-Agent Systems lists scalability, fault tolerance, faster problem solving, and distributed decision making as the benefits of using a MAS.\n\nA guaranteed single point of failure contradicts the listed advantage of fault tolerance, which MAS is designed to provide.\n\nSlower problem solving contradicts the listed advantage of faster problem solving.\n\nCentralized decision making only contradicts the listed advantage of distributed decision making."
  },
  {
    id: "cpe310_ch6_017",
    course: "CPE 310",
    chapter: "Chapter 6",
    text: "Fault tolerance and centralized decision making are both listed as advantages of Multi-Agent Systems.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "This is false: Advantages of Multi-Agent Systems lists scalability, fault tolerance, faster problem solving, and distributed decision making, not centralized decision making, which contradicts the distributed nature of a MAS."
  },
  {
    id: "cpe310_ch6_018",
    course: "CPE 310",
    chapter: "Chapter 6",
    text: "How are economically inspired multi-agent systems described?",
    options: [
      "Systems where agents are forbidden from ever exchanging any resources",
      "Systems that rely exclusively on random resource allocation with no coordination",
      "Systems that use concepts from economics to coordinate agents, which act like buyers, sellers, or bidders",
      "Systems where only one single agent is ever active at a time"
    ],
    correctAnswer: 2,
    explanation: "Economically Inspired Multi-Agent Systems defines them as systems that use concepts from economics to coordinate agents, with agents acting like buyers, sellers, or bidders, and economic mechanisms helping allocate limited resources efficiently.\n\nForbidding resource exchange contradicts the entire premise of using economic mechanisms like buying, selling, and bidding to allocate resources.\n\nRelying on random allocation with no coordination contradicts the description of economic mechanisms efficiently allocating limited resources.\n\nHaving only one single active agent contradicts the multi-agent nature of these systems, which coordinate multiple agents acting as buyers, sellers, or bidders."
  },
  {
    id: "cpe310_ch6_019",
    course: "CPE 310",
    chapter: "Chapter 6",
    text: "Which of the following is listed as an economic principle used in economically inspired multi-agent systems?",
    options: [
      "Fixed, centrally set pricing",
      "Guaranteed equal resource shares",
      "A ban on negotiation",
      "Auctions"
    ],
    correctAnswer: 3,
    explanation: "Economic Principles Used lists auctions, market pricing, supply and demand, utility maximization, negotiation, and contracts as the key principles.\n\nFixed, non-negotiable pricing set by a central authority contradicts the listed principle of market pricing, which is typically responsive to supply and demand rather than fixed centrally.\n\nGuaranteed equal resource shares regardless of demand contradicts the listed principle of supply and demand, which allocates resources based on need and availability, not equal shares.\n\nProhibiting negotiation directly contradicts negotiation being one of the listed economic principles used."
  },
  {
    id: "cpe310_ch6_020",
    course: "CPE 310",
    chapter: "Chapter 6",
    text: "Which of the following is listed as an economic principle used in economically inspired multi-agent systems?",
    options: [
      "Utility maximization",
      "A ban on contracts",
      "Elimination of market pricing entirely",
      "A ban on bidding"
    ],
    correctAnswer: 0,
    explanation: "Economic Principles Used lists utility maximization as one of the key principles, alongside auctions, market pricing, supply and demand, negotiation, and contracts.\n\nBanning contracts contradicts contracts being one of the listed economic principles.\n\nEliminating market pricing contradicts market pricing being one of the listed economic principles.\n\nRequiring that agents never bid contradicts auctions being one of the listed principles, which inherently involve bidding."
  },
  {
    id: "cpe310_ch6_021",
    course: "CPE 310",
    chapter: "Chapter 6",
    text: "Which of the following is listed as an economic principle used in economically inspired multi-agent systems?",
    options: [
      "A fixed number of participants that never changes",
      "Supply and demand",
      "A single, unchangeable price for every resource",
      "A requirement that no agent ever negotiates"
    ],
    correctAnswer: 1,
    explanation: "Economic Principles Used lists supply and demand as one of the key principles, alongside auctions, market pricing, utility maximization, negotiation, and contracts.\n\nA fixed, unchanging number of participants is not part of the listed economic principles, which describe dynamic mechanisms like auctions and market pricing.\n\nA single, unchangeable price contradicts the listed principle of market pricing, which responds to supply and demand.\n\nRequiring that no agent negotiate contradicts negotiation being one of the listed economic principles."
  },
  {
    id: "cpe310_ch6_022",
    course: "CPE 310",
    chapter: "Chapter 6",
    text: "In the cloud computing example, how does the cloud provider allocate servers among several users requesting computing resources?",
    options: [
      "By giving every user an exactly identical, fixed allocation regardless of need",
      "By randomly assigning servers with no consideration of user requests",
      "Through an auction where users bid based on their needs",
      "By refusing all requests until a single user remains"
    ],
    correctAnswer: 2,
    explanation: "The Cloud Computing Example describes the cloud provider allocating servers through an auction where users bid based on their needs.\n\nGiving every user an identical, fixed allocation regardless of need contradicts the auction mechanism, which allocates based on bids reflecting differing needs.\n\nRandomly assigning servers with no consideration of requests contradicts the described auction process, which is based on bidding, not randomness.\n\nRefusing all requests until one user remains is not part of the described allocation mechanism, which serves multiple users through bidding."
  },
  {
    id: "cpe310_ch6_023",
    course: "CPE 310",
    chapter: "Chapter 6",
    text: "Which of the following is listed as an application of economically inspired multi-agent systems?",
    options: [
      "Distributed databases",
      "Financial trading",
      "All of these",
      "None of these"
    ],
    correctAnswer: 3,
    explanation: "Applications of economically inspired multi-agent systems lists cloud resource allocation, smart grids, e-commerce, supply chains, and ride-sharing platforms. Distributed databases is instead listed as a mobile agent application, and financial trading is instead listed as a learning agent application, so neither is supported here and None of these is correct."
  },
  {
    id: "cpe310_ch6_024",
    course: "CPE 310",
    chapter: "Chapter 6",
    text: "Smart grids and supply chains are both listed as applications of economically inspired multi-agent systems.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "Applications of economically inspired multi-agent systems lists cloud resource allocation, smart grids, e-commerce, supply chains, and ride-sharing platforms, so both smart grids and supply chains are correctly listed applications."
  },
  {
    id: "cpe310_ch6_025",
    course: "CPE 310",
    chapter: "Chapter 6",
    text: "How are collaborating agents defined?",
    options: [
      "Agents that always operate in strict isolation from one another",
      "Agents that are prohibited from sharing any information",
      "Agents that exist only within economically inspired systems",
      "Agents that work together to achieve a common objective"
    ],
    correctAnswer: 3,
    explanation: "Collaborating Agents defines them as agents that work together to achieve a common objective.\n\nOperating in strict isolation contradicts the definition of collaborating agents working together toward a common objective.\n\nBeing prohibited from sharing information contradicts the description that collaborating agents share information, resources, and responsibilities.\n\nCollaborating agents are a general concept, not one restricted only to economically inspired systems, which is a separate topic in the notes."
  },
  {
    id: "cpe310_ch6_026",
    course: "CPE 310",
    chapter: "Chapter 6",
    text: "Which of the following is listed as something collaborating agents share?",
    options: [
      "Responsibilities",
      "A single identical goal that forbids any individual objectives",
      "Nothing at all, since collaboration requires no sharing",
      "Only their physical location, with no other resources"
    ],
    correctAnswer: 0,
    explanation: "Collaborating Agents lists information, resources, and responsibilities as what agents share.\n\nA single identical goal forbidding individual objectives is not how sharing is described; the notes list information, resources, and responsibilities specifically, not a claim about eliminating individual objectives.\n\nSharing nothing at all directly contradicts the description of collaborating agents sharing information, resources, and responsibilities.\n\nOnly sharing physical location is not listed; the notes specify information, resources, and responsibilities as what is shared."
  },
  {
    id: "cpe310_ch6_027",
    course: "CPE 310",
    chapter: "Chapter 6",
    text: "Which of the following is listed as a feature of collaborating agents?",
    options: [
      "Refusal to communicate",
      "Shared planning",
      "Total avoidance of coordination",
      "Guaranteed conflict"
    ],
    correctAnswer: 1,
    explanation: "Collaborating Agents lists cooperation, communication, coordination, and shared planning as their features.\n\nRefusing to communicate contradicts communication being a listed feature of collaborating agents.\n\nAvoiding coordination contradicts coordination being a listed feature of collaborating agents.\n\nGuaranteed conflict contradicts cooperation being a listed feature of collaborating agents."
  },
  {
    id: "cpe310_ch6_028",
    course: "CPE 310",
    chapter: "Chapter 6",
    text: "In the warehouse example, how do robots collaborate to reduce delivery time?",
    options: [
      "By having every robot handle the exact same shelf simultaneously",
      "By having all robots remain stationary at all times",
      "By dividing tasks so each robot handles different shelves",
      "By assigning all tasks to a single robot while the rest remain idle"
    ],
    correctAnswer: 2,
    explanation: "The Warehouse Example describes robots collaborating by dividing tasks so each robot handles different shelves, reducing delivery time.\n\nHaving every robot handle the exact same shelf simultaneously contradicts the described task division, which spreads work across different shelves.\n\nRemaining stationary at all times contradicts the active task of handling shelves to reduce delivery time.\n\nAssigning all tasks to a single robot while others remain idle contradicts the described collaborative division of labor among multiple robots."
  },
  {
    id: "cpe310_ch6_029",
    course: "CPE 310",
    chapter: "Chapter 6",
    text: "Which of the following is listed as a benefit of collaborating agents?",
    options: [
      "Increased workload for every agent",
      "Slower task completion",
      "Reduced efficiency",
      "Higher reliability"
    ],
    correctAnswer: 3,
    explanation: "Benefits of collaborating agents lists faster completion, higher reliability, better efficiency, and reduced workload.\n\nIncreased workload contradicts the listed benefit of reduced workload.\n\nSlower task completion contradicts the listed benefit of faster completion.\n\nReduced efficiency contradicts the listed benefit of better efficiency."
  },
  {
    id: "cpe310_ch6_030",
    course: "CPE 310",
    chapter: "Chapter 6",
    text: "How is an agent team defined?",
    options: [
      "A group of agents organized to solve complex problems collectively, with each agent performing specialized tasks",
      "A single agent that performs every task in a system alone",
      "A group of agents that are forbidden from having any specialization",
      "A team that can only exist within economically inspired systems"
    ],
    correctAnswer: 0,
    explanation: "Agent Teams defines it as a group of agents organized to solve complex problems collectively, with each agent performing specialized tasks.\n\nA single agent performing every task alone contradicts the definition of a team as a group of multiple agents.\n\nForbidding specialization contradicts the definition, which explicitly states each agent performs specialized tasks.\n\nAgent teams are a general concept applicable across multi-agent systems, not restricted only to economically inspired systems."
  },
  {
    id: "cpe310_ch6_031",
    course: "CPE 310",
    chapter: "Chapter 6",
    text: "In the disaster response example, which agent searches affected areas?",
    options: [
      "The mapping agent",
      "The drone agent",
      "The medical agent",
      "The communication agent"
    ],
    correctAnswer: 1,
    explanation: "The Disaster Response Example describes the drone agent as searching affected areas, distinct from the mapping, medical, and communication agents.\n\nThe mapping agent instead creates maps, not searching affected areas directly.\n\nThe medical agent instead identifies injured people, a different specialized role from searching areas.\n\nThe communication agent instead contacts rescue teams, a different specialized role from searching areas."
  },
  {
    id: "cpe310_ch6_032",
    course: "CPE 310",
    chapter: "Chapter 6",
    text: "In the disaster response example, which agent creates maps?",
    options: [
      "The drone agent",
      "The medical agent",
      "The mapping agent",
      "The communication agent"
    ],
    correctAnswer: 2,
    explanation: "The Disaster Response Example describes the mapping agent as creating maps, distinct from the drone, medical, and communication agents.\n\nThe drone agent instead searches affected areas, a different specialized role from creating maps.\n\nThe medical agent instead identifies injured people, a different specialized role from creating maps.\n\nThe communication agent instead contacts rescue teams, a different specialized role from creating maps."
  },
  {
    id: "cpe310_ch6_033",
    course: "CPE 310",
    chapter: "Chapter 6",
    text: "In the disaster response example, which agent identifies injured people?",
    options: [
      "The drone agent",
      "The mapping agent",
      "The communication agent",
      "The medical agent"
    ],
    correctAnswer: 3,
    explanation: "The Disaster Response Example describes the medical agent as identifying injured people, distinct from the drone, mapping, and communication agents.\n\nThe drone agent instead searches affected areas, a different specialized role from identifying injuries.\n\nThe mapping agent instead creates maps, a different specialized role from identifying injuries.\n\nThe communication agent instead contacts rescue teams, a different specialized role from identifying injuries."
  },
  {
    id: "cpe310_ch6_034",
    course: "CPE 310",
    chapter: "Chapter 6",
    text: "In the disaster response example, which agent contacts rescue teams?",
    options: [
      "The communication agent",
      "The drone agent",
      "The mapping agent",
      "The medical agent"
    ],
    correctAnswer: 0,
    explanation: "The Disaster Response Example describes the communication agent as contacting rescue teams, distinct from the drone, mapping, and medical agents.\n\nThe drone agent instead searches affected areas, a different specialized role from contacting rescue teams.\n\nThe mapping agent instead creates maps, a different specialized role from contacting rescue teams.\n\nThe medical agent instead identifies injured people, a different specialized role from contacting rescue teams."
  },
  {
    id: "cpe310_ch6_035",
    course: "CPE 310",
    chapter: "Chapter 6",
    text: "What is emphasized about what the drone, mapping, medical, and communication agents accomplish together in the disaster response example?",
    options: [
      "They accomplish nothing that a single agent could not do alone",
      "They accomplish tasks impossible for a single agent",
      "They actively work against each other's objectives",
      "They only function if all communication between them is disabled"
    ],
    correctAnswer: 1,
    explanation: "The Disaster Response Example emphasizes that together, the agents accomplish tasks impossible for a single agent.\n\nAccomplishing nothing that a single agent could not do alone directly contradicts the emphasis on tasks being impossible for a single agent.\n\nWorking against each other's objectives contradicts the specialized, complementary roles described for each agent in this team.\n\nRequiring disabled communication contradicts the coordinated nature of an agent team, which depends on the agents working together."
  },
  {
    id: "cpe310_ch6_036",
    course: "CPE 310",
    chapter: "Chapter 6",
    text: "Which of the following is listed as an advantage of agent teams?",
    options: [
      "Guaranteed sequential processing only",
      "Decreased robustness",
      "Parallel processing",
      "Reduced efficiency"
    ],
    correctAnswer: 2,
    explanation: "Advantages of agent teams lists parallel processing, task specialization, increased robustness, and improved efficiency.\n\nGuaranteed sequential processing only contradicts the listed advantage of parallel processing.\n\nDecreased robustness contradicts the listed advantage of increased robustness.\n\nReduced efficiency contradicts the listed advantage of improved efficiency."
  },
  {
    id: "cpe310_ch6_037",
    course: "CPE 310",
    chapter: "Chapter 6",
    text: "Task specialization and reduced network traffic are both listed as advantages of agent teams.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "This is false: Advantages of agent teams lists parallel processing, task specialization, increased robustness, and improved efficiency. Reduced network traffic is instead listed as an advantage of mobile agents, not agent teams."
  },
  {
    id: "cpe310_ch6_038",
    course: "CPE 310",
    chapter: "Chapter 6",
    text: "How is agent modeling defined?",
    options: [
      "The process of physically manufacturing a robot's outer casing",
      "A technique used only for economically inspired systems",
      "A method for permanently disabling an agent's decision-making",
      "The process of designing how an agent behaves"
    ],
    correctAnswer: 3,
    explanation: "Agent Modeling defines it as the process of designing how an agent behaves.\n\nPhysically manufacturing a robot's outer casing is not related to agent modeling, which concerns designing behavior, goals, and decision-making, not physical construction.\n\nAgent modeling is a general concept, not restricted only to economically inspired systems, which is a separate topic in the notes.\n\nDisabling an agent's decision-making contradicts the purpose of agent modeling, which specifies the decision-making process rather than disabling it."
  },
  {
    id: "cpe310_ch6_039",
    course: "CPE 310",
    chapter: "Chapter 6",
    text: "Which of the following is listed as something agent modeling specifies?",
    options: [
      "Beliefs",
      "The physical color of an agent's outer shell",
      "The stock price of the company that built the agent",
      "The weather conditions on the day the agent was built"
    ],
    correctAnswer: 0,
    explanation: "Agent Modeling lists goals, beliefs, knowledge, capabilities, decision-making process, and communication methods as what it specifies.\n\nThe physical color of an agent's outer shell is not part of what agent modeling specifies, which concerns behavior, goals, and decision-making, not cosmetic appearance.\n\nThe stock price of the company that built the agent has no connection to agent modeling as described.\n\nWeather conditions on the day of construction are not part of what agent modeling specifies."
  },
  {
    id: "cpe310_ch6_040",
    course: "CPE 310",
    chapter: "Chapter 6",
    text: "Which of the following is listed as something agent modeling specifies?",
    options: [
      "A hardware serial number",
      "Capabilities",
      "The manufacturer's name",
      "The agent's warranty expiration date"
    ],
    correctAnswer: 1,
    explanation: "Agent Modeling lists goals, beliefs, knowledge, capabilities, decision-making process, and communication methods as what it specifies.\n\nA hardware serial number is not part of what agent modeling specifies, which concerns behavior-related properties like goals and capabilities, not identification numbers.\n\nThe manufacturer's name alone is not part of what agent modeling specifies.\n\nA warranty expiration date is not part of what agent modeling specifies."
  },
  {
    id: "cpe310_ch6_041",
    course: "CPE 310",
    chapter: "Chapter 6",
    text: "Automatic doors are given as an example of which type of agent model?",
    options: [
      "Deliberative agents",
      "Hybrid agents, which combine reactive and deliberative approaches",
      "Reactive agents, which respond immediately to environmental changes",
      "Economically inspired agents, which act like buyers or sellers"
    ],
    correctAnswer: 2,
    explanation: "Types of Agent Models gives automatic doors as the example of reactive agents, which respond immediately to environmental changes.\n\nDeliberative agents are instead exemplified by chess-playing AI, which thinks and plans before acting, unlike the immediate response of automatic doors.\n\nHybrid agents are instead exemplified by autonomous vehicles, combining reactive and deliberative approaches, not matching the simple immediate response of automatic doors.\n\nEconomically inspired agents are a separate topic entirely, involving auctions and bidding, unrelated to automatic doors."
  },
  {
    id: "cpe310_ch6_042",
    course: "CPE 310",
    chapter: "Chapter 6",
    text: "Chess-playing AI is given as an example of which type of agent model?",
    options: [
      "Reactive agents",
      "Hybrid agents",
      "Mobile agents",
      "Deliberative agents"
    ],
    correctAnswer: 3,
    explanation: "Types of Agent Models gives chess-playing AI as the example of deliberative agents, which think and plan before acting.\n\nReactive agents are instead exemplified by automatic doors, responding immediately rather than planning ahead like a chess AI.\n\nHybrid agents are instead exemplified by autonomous vehicles, combining reactive and deliberative approaches, not the pure planning approach of a chess AI.\n\nMobile agents are a separate concept entirely, defined by migrating between computers, unrelated to chess-playing AI."
  },
  {
    id: "cpe310_ch6_043",
    course: "CPE 310",
    chapter: "Chapter 6",
    text: "Autonomous vehicles are given as an example of which type of agent model?",
    options: [
      "Hybrid agents",
      "Reactive agents",
      "Deliberative agents",
      "Robotic agents only"
    ],
    correctAnswer: 0,
    explanation: "Types of Agent Models gives autonomous vehicles as the example of hybrid agents, which combine reactive and deliberative approaches.\n\nReactive agents are instead exemplified by automatic doors, a purely immediate-response example unlike the combined approach of autonomous vehicles.\n\nDeliberative agents are instead exemplified by chess-playing AI, a purely planning-based example unlike the combined approach of autonomous vehicles.\n\nAutonomous vehicles are specifically classified as hybrid, combining both reactive and deliberative capability, not purely robotic with no deliberative capability."
  },
  {
    id: "cpe310_ch6_044",
    course: "CPE 310",
    chapter: "Chapter 6",
    text: "Which of the following is listed as a purpose of agent modeling?",
    options: [
      "Making agent behavior completely unpredictable",
      "Predicting agent behavior",
      "Increasing system design complexity unnecessarily",
      "Preventing any cooperation between agents"
    ],
    correctAnswer: 1,
    explanation: "Why Agent Modeling lists predicting agent behavior, improving cooperation, increasing efficiency, and simplifying system design as its purposes.\n\nMaking behavior completely unpredictable contradicts the listed purpose of predicting agent behavior.\n\nIncreasing design complexity unnecessarily contradicts the listed purpose of simplifying system design.\n\nPreventing cooperation contradicts the listed purpose of improving cooperation."
  },
  {
    id: "cpe310_ch6_045",
    course: "CPE 310",
    chapter: "Chapter 6",
    text: "Simplifying system design is listed as one of the purposes of agent modeling.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "Why Agent Modeling lists predicting agent behavior, improving cooperation, increasing efficiency, and simplifying system design as its purposes."
  },
  {
    id: "cpe310_ch6_046",
    course: "CPE 310",
    chapter: "Chapter 6",
    text: "How is multi-agent learning defined?",
    options: [
      "The study of a single isolated agent that never interacts with anything",
      "A technique used exclusively to design an agent's physical appearance",
      "The study of how multiple agents learn while interacting with one another",
      "A method for preventing any agent from ever learning"
    ],
    correctAnswer: 2,
    explanation: "Multi-Agent Learning defines it as studying how multiple agents learn while interacting with one another.\n\nStudying a single isolated agent contradicts the multi-agent, interactive nature of the definition.\n\nDesigning physical appearance is unrelated to multi-agent learning, which concerns how agents learn through interaction.\n\nPreventing learning directly contradicts the definition, which is specifically about how agents do learn."
  },
  {
    id: "cpe310_ch6_047",
    course: "CPE 310",
    chapter: "Chapter 6",
    text: "In multi-agent learning, agents may learn independently, cooperatively, or in which other way?",
    options: [
      "Randomly, unrelated to other agents",
      "Only via physical contact",
      "Only by copying code exactly",
      "Competitively"
    ],
    correctAnswer: 3,
    explanation: "Multi-Agent Learning states that agents may learn independently, cooperatively, or competitively.\n\nLearning entirely randomly with no relationship to other agents is not one of the three listed modes, which specifically describe relationships to other agents: independent, cooperative, or competitive.\n\nRequiring direct physical contact is not described as a mode of multi-agent learning.\n\nCopying another agent's code exactly is not described as one of the listed learning modes."
  },
  {
    id: "cpe310_ch6_048",
    course: "CPE 310",
    chapter: "Chapter 6",
    text: "Which of the following is listed as a technique used in multi-agent learning?",
    options: [
      "Q-Learning",
      "A method that guarantees agents never update their behavior",
      "A technique restricted only to single-agent, non-interactive systems",
      "A method that requires no interaction with the environment"
    ],
    correctAnswer: 0,
    explanation: "Learning Methods lists reinforcement learning, Q-learning, deep reinforcement learning, and evolutionary learning as techniques used in multi-agent learning.\n\nA method guaranteeing agents never update their behavior contradicts the entire premise of learning, which involves updating behavior over time.\n\nThese techniques are specifically used in multi-agent, interactive contexts, not restricted to single-agent, non-interactive systems.\n\nReinforcement-style learning techniques inherently require interaction with the environment, not the absence of it."
  },
  {
    id: "cpe310_ch6_049",
    course: "CPE 310",
    chapter: "Chapter 6",
    text: "Which of the following is listed as a technique used in multi-agent learning?",
    options: [
      "A purely manual, hand-coded rule system with no learning component",
      "Deep Reinforcement Learning",
      "A method that only works when exactly one agent exists",
      "A fixed lookup table that is never updated"
    ],
    correctAnswer: 1,
    explanation: "Learning Methods lists reinforcement learning, Q-learning, deep reinforcement learning, and evolutionary learning as techniques used in multi-agent learning.\n\nA purely manual, hand-coded rule system with no learning component contradicts the premise of a learning technique, which involves adapting from experience.\n\nThese techniques are described specifically in the context of multiple interacting agents, not a method requiring exactly one agent.\n\nA fixed lookup table that is never updated contradicts the adaptive nature of the listed learning techniques."
  },
  {
    id: "cpe310_ch6_050",
    course: "CPE 310",
    chapter: "Chapter 6",
    text: "Reinforcement Learning and Evolutionary Learning are both listed as techniques used in multi-agent learning.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "Learning Methods lists reinforcement learning, Q-learning, deep reinforcement learning, and evolutionary learning, so both reinforcement learning and evolutionary learning are correctly listed techniques."
  },
  {
    id: "cpe310_ch6_051",
    course: "CPE 310",
    chapter: "Chapter 6",
    text: "Which of the following is listed as a challenge in multi-agent learning?",
    options: [
      "Perfect information always available",
      "No communication overhead at all",
      "Partial information",
      "Guaranteed scalability with no limitations"
    ],
    correctAnswer: 2,
    explanation: "Challenges in Multi-Agent Learning lists dynamic environments, partial information, coordination, communication overhead, and scalability as difficulties.\n\nPerfect, complete information available at all times is the opposite of the listed challenge of partial information.\n\nA total absence of communication overhead contradicts communication overhead being one of the listed challenges.\n\nGuaranteed scalability with no limitations contradicts scalability being listed as a challenge, implying it is not guaranteed."
  },
  {
    id: "cpe310_ch6_052",
    course: "CPE 310",
    chapter: "Chapter 6",
    text: "Which of the following is listed as a challenge in multi-agent learning?",
    options: [
      "Environments that never change under any circumstances",
      "Guaranteed coordination with zero effort required",
      "Unlimited communication bandwidth with no overhead",
      "Dynamic environments"
    ],
    correctAnswer: 3,
    explanation: "Challenges in Multi-Agent Learning lists dynamic environments as one of the difficulties, alongside partial information, coordination, communication overhead, and scalability.\n\nAn environment that never changes describes a static environment, the opposite of the listed dynamic environments challenge.\n\nGuaranteed coordination with zero effort contradicts coordination being listed as a challenge, implying it requires effort.\n\nUnlimited bandwidth with no overhead contradicts communication overhead being listed as a challenge."
  },
  {
    id: "cpe310_ch6_053",
    course: "CPE 310",
    chapter: "Chapter 6",
    text: "In the robot soccer example, which of the following is listed as something each robot learns?",
    options: [
      "Passing the ball",
      "Leaving the field after one game",
      "Ignoring the ball entirely",
      "Disabling the other team's robots"
    ],
    correctAnswer: 0,
    explanation: "The Robot Soccer Example lists passing, defending, shooting, and team coordination as what each robot learns.\n\nLeaving the field permanently after one game is not part of the described learning, which concerns ongoing skills like passing and shooting across repeated games.\n\nIgnoring the ball entirely contradicts learning soccer-relevant skills like passing and shooting, which directly involve the ball.\n\nDisabling the other team's robots is not part of the described skills; the example focuses on legitimate soccer skills like passing, defending, and shooting."
  },
  {
    id: "cpe310_ch6_054",
    course: "CPE 310",
    chapter: "Chapter 6",
    text: "In the robot soccer example, how does performance change over time?",
    options: [
      "It stays exactly the same regardless of how many games are played",
      "It improves through repeated games",
      "It always worsens with every additional game played",
      "It is determined entirely at random with no relationship to practice"
    ],
    correctAnswer: 1,
    explanation: "The Robot Soccer Example states that performance improves through repeated games.\n\nStaying exactly the same contradicts the stated improvement through repeated games.\n\nAlways worsening contradicts the stated improvement, which is a positive trend, not a decline.\n\nBeing determined entirely at random contradicts the learning-based improvement described, which comes from repeated practice through games."
  },
  {
    id: "cpe310_ch6_055",
    course: "CPE 310",
    chapter: "Chapter 6",
    text: "How are robotic agents defined?",
    options: [
      "Purely software-based programs with no physical presence of any kind",
      "Agents that exist only inside economic auction systems",
      "Physical intelligent agents that perceive their surroundings and act through sensors and actuators",
      "Agents that are incapable of perceiving their surroundings"
    ],
    correctAnswer: 2,
    explanation: "Robotic Agents defines them as physical intelligent agents that perceive their surroundings and act through sensors and actuators.\n\nBeing purely software-based with no physical presence contradicts the definition of robotic agents as physical entities.\n\nRobotic agents are a general concept, not restricted to economic auction systems, which is a separate topic in the notes.\n\nBeing incapable of perceiving surroundings directly contradicts the definition, which states robotic agents perceive their surroundings."
  },
  {
    id: "cpe310_ch6_056",
    course: "CPE 310",
    chapter: "Chapter 6",
    text: "Which of the following is listed as a sensor component of a robotic agent?",
    options: [
      "Grippers",
      "Wheels",
      "Motors",
      "LiDAR"
    ],
    correctAnswer: 3,
    explanation: "Components of robotic agents lists cameras, GPS, LiDAR, infrared sensors, and microphones as sensors.\n\nGrippers instead are listed as an actuator, a component that acts on the environment, not one that senses it.\n\nWheels instead are listed as an actuator, used for movement, not sensing.\n\nMotors instead are listed as an actuator, providing motion, not sensory input."
  },
  {
    id: "cpe310_ch6_057",
    course: "CPE 310",
    chapter: "Chapter 6",
    text: "Which of the following is listed as an actuator component of a robotic agent?",
    options: [
      "Wheels",
      "Cameras",
      "GPS",
      "Microphones"
    ],
    correctAnswer: 0,
    explanation: "Components of robotic agents lists wheels, arms, motors, and grippers as actuators.\n\nCameras instead are listed as a sensor, used for perceiving the environment, not for acting on it.\n\nGPS instead is listed as a sensor, used for locating the agent, not for acting on the environment.\n\nMicrophones instead are listed as a sensor, used for perceiving sound, not for acting on the environment."
  },
  {
    id: "cpe310_ch6_058",
    course: "CPE 310",
    chapter: "Chapter 6",
    text: "Cameras and grippers are both listed as sensor components of a robotic agent.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "This is false: Components of robotic agents lists cameras, GPS, LiDAR, infrared sensors, and microphones as sensors. Grippers are instead listed as an actuator, not a sensor."
  },
  {
    id: "cpe310_ch6_059",
    course: "CPE 310",
    chapter: "Chapter 6",
    text: "Arms and grippers are both listed as sensor components, rather than actuator components, of a robotic agent.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "This is false: Components of robotic agents lists arms and grippers as actuators, not sensors. Sensors instead include cameras, GPS, LiDAR, infrared sensors, and microphones."
  },
  {
    id: "cpe310_ch6_060",
    course: "CPE 310",
    chapter: "Chapter 6",
    text: "Which of the following is listed as a type of robotic agent?",
    options: [
      "A type restricted to underwater use",
      "Farm robots",
      "A type never used in a factory",
      "A type used only for trading"
    ],
    correctAnswer: 1,
    explanation: "Types of robotic agents lists industrial, medical, service, agricultural, and military robots.\n\nA type restricted only to underwater use is not one of the listed types of robotic agent.\n\nIndustrial robots are explicitly listed as a type that operates in factory settings, so it is not true that robots can never operate in a factory.\n\nFinancial trading is associated with learning agent applications elsewhere in the notes, not with a listed type of robotic agent."
  },
  {
    id: "cpe310_ch6_061",
    course: "CPE 310",
    chapter: "Chapter 6",
    text: "Which of the following is listed as a type of robotic agent?",
    options: [
      "A type used only for cloud resource allocation",
      "A type that never interacts with any physical object",
      "Medical robots",
      "A type restricted to virtual, non-physical environments only"
    ],
    correctAnswer: 2,
    explanation: "Types of robotic agents lists industrial, medical, service, agricultural, and military robots.\n\nCloud resource allocation is associated with economically inspired multi-agent systems elsewhere in the notes, not a listed type of robotic agent.\n\nRobotic agents are defined as physical agents that act through actuators, so it is not true that they never interact with physical objects.\n\nRobotic agents are explicitly defined as physical agents, not restricted to virtual, non-physical environments."
  },
  {
    id: "cpe310_ch6_062",
    course: "CPE 310",
    chapter: "Chapter 6",
    text: "Which of the following is given as an example of a robotic agent?",
    options: [
      "A migrating mobile agent",
      "An economic bidding agent",
      "A deliberative chess program",
      "Surgical robots"
    ],
    correctAnswer: 3,
    explanation: "Examples of robotic agents lists robot vacuum cleaners, warehouse robots, delivery robots, and surgical robots.\n\nA mobile agent that migrates across network nodes is a separate concept entirely, defined by software migration rather than physical sensors and actuators.\n\nAn economically inspired bidding agent is a separate concept, participating in auctions rather than being a physical robotic example.\n\nA purely deliberative chess-playing program is the example given for deliberative agent modeling, not for robotic agents."
  },
  {
    id: "cpe310_ch6_063",
    course: "CPE 310",
    chapter: "Chapter 6",
    text: "Warehouse robots and delivery robots are both given as examples of robotic agents.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "Examples of robotic agents lists robot vacuum cleaners, warehouse robots, delivery robots, and surgical robots, so both warehouse robots and delivery robots are correctly listed examples."
  },
  {
    id: "cpe310_ch6_064",
    course: "CPE 310",
    chapter: "Chapter 6",
    text: "How is a mobile agent defined?",
    options: [
      "Software that migrates between machines, carrying its code and state",
      "A physical robot with wheels that moves across a factory floor",
      "A program that is permanently fixed to a single machine and cannot move",
      "A hardware device with no software component"
    ],
    correctAnswer: 0,
    explanation: "Mobile Agents defines a mobile agent as a software program that can migrate between computers or network nodes while carrying its code, data, and execution state.\n\nA physical robot with wheels describes a robotic agent, a different concept from the software-based migration of a mobile agent.\n\nBeing permanently fixed to a single machine directly contradicts the definition of a mobile agent as something that migrates between machines.\n\nA hardware device with no software component contradicts the definition of a mobile agent as a software program."
  },
  {
    id: "cpe310_ch6_065",
    course: "CPE 310",
    chapter: "Chapter 6",
    text: "How does a mobile agent differ from traditional software that stays on one machine?",
    options: [
      "A mobile agent is incapable of carrying any data with it",
      "A mobile agent moves to where the required resources or data are located",
      "A mobile agent must always remain on the machine where it was created",
      "A mobile agent cannot execute any code once it starts running"
    ],
    correctAnswer: 1,
    explanation: "Mobile Agents states that unlike traditional software that stays on one machine, a mobile agent moves to where the required resources or data are located.\n\nBeing incapable of carrying data contradicts the definition, which states a mobile agent carries its code, data, and execution state.\n\nBeing required to remain on its creation machine contradicts the core distinguishing feature of a mobile agent, which is its ability to migrate.\n\nBeing unable to execute code contradicts the definition, which states a mobile agent carries its execution state, implying it continues running."
  },
  {
    id: "cpe310_ch6_066",
    course: "CPE 310",
    chapter: "Chapter 6",
    text: "Which of the following is listed as an advantage of mobile agents?",
    options: [
      "Increased network traffic in every scenario",
      "Higher communication costs than traditional software",
      "Reduced network traffic",
      "Reduced flexibility compared to fixed software"
    ],
    correctAnswer: 2,
    explanation: "Advantages of mobile agents lists reduced network traffic, faster execution, lower communication costs, greater flexibility, and better scalability.\n\nIncreased network traffic contradicts the listed advantage of reduced network traffic.\n\nHigher communication costs contradicts the listed advantage of lower communication costs.\n\nReduced flexibility contradicts the listed advantage of greater flexibility."
  },
  {
    id: "cpe310_ch6_067",
    course: "CPE 310",
    chapter: "Chapter 6",
    text: "Which of the following is listed as an advantage of mobile agents?",
    options: [
      "Slower execution than fixed software",
      "Worse scalability",
      "Loss of flexibility",
      "Faster execution"
    ],
    correctAnswer: 3,
    explanation: "Advantages of mobile agents lists reduced network traffic, faster execution, lower communication costs, greater flexibility, and better scalability.\n\nSlower execution contradicts the listed advantage of faster execution.\n\nWorse scalability contradicts the listed advantage of better scalability.\n\nComplete loss of flexibility contradicts the listed advantage of greater flexibility."
  },
  {
    id: "cpe310_ch6_068",
    course: "CPE 310",
    chapter: "Chapter 6",
    text: "Lower communication costs and increased robustness are both listed as advantages of mobile agents.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "This is false: Advantages of mobile agents lists reduced network traffic, faster execution, lower communication costs, greater flexibility, and better scalability. Increased robustness is instead listed as an advantage of agent teams, not mobile agents."
  },
  {
    id: "cpe310_ch6_069",
    course: "CPE 310",
    chapter: "Chapter 6",
    text: "How does a mobile agent gather information from multiple servers, as described in the example of how it works?",
    options: [
      "It travels to each server, processes the data locally, and returns only the final results",
      "It repeatedly sends requests across the internet from a single fixed location for every piece of data",
      "It refuses to process any data and only stores raw, unprocessed information",
      "It deletes all data on every server it visits"
    ],
    correctAnswer: 0,
    explanation: "How It Works describes a mobile agent as traveling to each server, processing the data locally, and returning only the final results, instead of repeatedly sending requests across the internet.\n\nRepeatedly sending requests across the internet from a fixed location describes the traditional approach the mobile agent is explicitly contrasted against.\n\nRefusing to process data and only storing raw information contradicts the description of the agent processing data locally at each server.\n\nDeleting data on every server visited is not part of the described process, which involves processing and returning results, not deletion."
  },
  {
    id: "cpe310_ch6_070",
    course: "CPE 310",
    chapter: "Chapter 6",
    text: "Which of the following is listed as an application of mobile agents?",
    options: [
      "Internet of Things (IoT)",
      "Distributed databases",
      "All of these",
      "None of these"
    ],
    correctAnswer: 2,
    explanation: "Applications of mobile agents lists distributed databases, network management, cloud computing, e-commerce, Internet of Things, and cybersecurity monitoring, so both IoT and distributed databases are supported, making All of these correct."
  },
  {
    id: "cpe310_ch6_071",
    course: "CPE 310",
    chapter: "Chapter 6",
    text: "Which of the following is listed as an application of mobile agents?",
    options: [
      "Cybersecurity monitoring",
      "Network management",
      "All of these",
      "None of these"
    ],
    correctAnswer: 2,
    explanation: "Applications of mobile agents lists distributed databases, network management, cloud computing, e-commerce, Internet of Things, and cybersecurity monitoring, so both cybersecurity monitoring and network management are supported, making All of these correct."
  },
  {
    id: "cpe310_ch6_072",
    course: "CPE 310",
    chapter: "Chapter 6",
    text: "Cloud computing and financial trading are both listed as applications of mobile agents.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "This is false: Applications of mobile agents lists distributed databases, network management, cloud computing, e-commerce, Internet of Things, and cybersecurity monitoring. Financial trading is instead listed as an application of learning agents, not mobile agents."
  },
  {
    id: "cpe310_ch6_073",
    course: "CPE 310",
    chapter: "Chapter 6",
    text: "A company deploys software agents that travel to remote data centers, run their analysis locally at each center, and bring back only the summarized results, rather than transferring raw data over the network. Which concept does this best illustrate?",
    options: [
      "A purely reactive agent responding to a single fixed stimulus",
      "A mobile agent, reducing network traffic by processing data where it resides",
      "An economically inspired agent bidding in an auction",
      "A critic component of a learning agent"
    ],
    correctAnswer: 1,
    explanation: "This illustrates a mobile agent, which migrates to where data is located, processes it locally, and returns only the final results, reducing network traffic as described in how mobile agents work.\n\nA purely reactive agent responding to a single fixed stimulus does not capture the described migration and local processing across multiple data centers.\n\nAn economically inspired agent bidding in an auction concerns resource allocation through bidding, not the migration-and-local-processing behavior described here.\n\nA critic component evaluates a learning agent's performance and provides feedback, an unrelated concept to migrating software processing data remotely."
  },
  {
    id: "cpe310_ch6_074",
    course: "CPE 310",
    chapter: "Chapter 6",
    text: "A hospital deploys several specialized software agents: one monitors patient vitals, one schedules staff, one manages medication inventory, and one analyzes diagnostic images, all working toward the shared goal of better patient care. Which concept does this best illustrate?",
    options: [
      "A single reactive agent using only condition-action rules",
      "A mobile agent migrating between network nodes",
      "An agent team, with specialized agents combining efforts on a complex problem",
      "An economically inspired agent participating in a market auction"
    ],
    correctAnswer: 2,
    explanation: "This illustrates an agent team, where a group of agents is organized to solve complex problems collectively, with each agent performing a specialized task, matching the disaster response example's structure of specialized roles working toward a shared goal.\n\nA single reactive agent using only condition-action rules does not match the multiple specialized agents described here, which is inherently a multi-agent structure.\n\nA mobile agent migrating between network nodes concerns software movement across machines, not the coordination of multiple specialized roles toward a shared goal.\n\nAn economically inspired agent participating in a market auction concerns resource allocation through bidding, not specialized task coordination for patient care."
  },
  {
    id: "cpe310_ch6_075",
    course: "CPE 310",
    chapter: "Chapter 6",
    text: "Which of the following pairs correctly matches an agent model type to its given example?",
    options: [
      "Reactive agents matched with chess-playing AI, and deliberative agents matched with automatic doors",
      "Hybrid agents matched with chess-playing AI, and reactive agents matched with autonomous vehicles",
      "Deliberative agents matched with autonomous vehicles, and hybrid agents matched with automatic doors",
      "Reactive agents matched with automatic doors, and deliberative agents matched with chess-playing AI"
    ],
    correctAnswer: 3,
    explanation: "Types of Agent Models pairs reactive agents with automatic doors and deliberative agents with chess-playing AI, with hybrid agents separately paired with autonomous vehicles.\n\nSwapping the pairing, reactive with chess-playing AI and deliberative with automatic doors, reverses the actual examples given.\n\nPairing hybrid agents with chess-playing AI misattributes the deliberative example, and pairing reactive agents with autonomous vehicles misattributes the hybrid example.\n\nPairing deliberative agents with autonomous vehicles misattributes the hybrid example, and pairing hybrid agents with automatic doors misattributes the reactive example."
  },
  {
    id: "cpe310_ch6_076",
    course: "CPE 310",
    chapter: "Chapter 6",
    text: "How do the roles of the performance element and the critic in a learning agent differ?",
    options: [
      "The performance element acts, while the critic evaluates and gives feedback",
      "The performance element evaluates past actions, while the critic chooses and executes new actions",
      "Both components perform the exact same function with no distinction",
      "Neither component ever interacts with the learning element in any way"
    ],
    correctAnswer: 0,
    explanation: "Components of a Learning Agent describes the performance element as choosing actions and interacting with the environment, while the critic evaluates performance and provides feedback to the learning element, which then improves the performance element.\n\nReversing the roles, with the performance element evaluating and the critic choosing actions, contradicts the specific roles assigned to each component.\n\nThe notes distinguish these as four separate components with distinct roles, so they are not described as performing the exact same function.\n\nThe critic is explicitly described as providing feedback to the learning element, so it does interact with it, contradicting a claim of no interaction."
  },
  {
    id: "cpe310_ch6_077",
    course: "CPE 310",
    chapter: "Chapter 6",
    text: "How does an agent team differ from a general multi-agent system?",
    options: [
      "An agent team consists of exactly one agent, while a MAS requires at least two",
      "A team emphasizes specialized agents solving problems together, while a MAS is broader",
      "An agent team can never involve any specialization, unlike a MAS",
      "A MAS is a subtype of an agent team, rather than the reverse"
    ],
    correctAnswer: 1,
    explanation: "Agent Teams describes a team as specifically emphasizing specialized agents organized to solve complex problems collectively, a more specific structure than the general definition of a MAS as any two or more interacting intelligent agents.\n\nAn agent team is described as a group of agents, not a single agent, so it is not the case that it consists of exactly one agent.\n\nAgent teams are specifically defined by each agent performing specialized tasks, the opposite of never involving specialization.\n\nThe notes present the agent team as a more specific concept building on the general MAS idea, not the MAS as a subtype of the team."
  },
  {
    id: "cpe310_ch6_078",
    course: "CPE 310",
    chapter: "Chapter 6",
    text: "Why might a system designer choose a hybrid agent model over a purely reactive one for an autonomous vehicle?",
    options: [
      "Because a purely reactive model is always slower than a hybrid model in every situation",
      "Because a hybrid model requires no sensors at all, unlike a reactive model",
      "Because a hybrid model combines reactive responses with deliberative planning",
      "Because reactive models are only usable in economically inspired systems"
    ],
    correctAnswer: 2,
    explanation: "Types of Agent Models describes hybrid agents, exemplified by autonomous vehicles, as combining reactive and deliberative approaches, giving both the immediate responsiveness of reactive agents and the planning ability of deliberative agents that a purely reactive model lacks.\n\nReactive models are described as responding immediately, which is often fast, not universally slower than a hybrid model in every situation.\n\nHybrid agents are not described as requiring no sensors; sensing remains necessary for the reactive component of the hybrid approach.\n\nReactive models are a general agent modeling concept, not restricted to economically inspired systems, which is an entirely separate topic in the notes."
  },
  {
    id: "cpe310_ch6_079",
    course: "CPE 310",
    chapter: "Chapter 6",
    text: "Which learning mode would best describe two robot soccer teams that improve their own performance while each tries to outscore the opposing team?",
    options: [
      "Independent learning with no relationship to any other agent",
      "A mode that only exists within economically inspired systems",
      "A mode restricted to single-agent environments",
      "Competitive learning"
    ],
    correctAnswer: 3,
    explanation: "Multi-Agent Learning lists competitive learning as one of the modes in which agents may learn, matching the scenario of two teams trying to outscore each other while each improves its own performance.\n\nIndependent learning with no relationship to other agents does not capture the direct opposition between the two teams described here.\n\nThis learning mode is a general multi-agent learning concept, not restricted to economically inspired systems.\n\nThis scenario explicitly involves multiple interacting agents, the opposite of being restricted to single-agent environments."
  },
  {
    id: "cpe310_ch6_080",
    course: "CPE 310",
    chapter: "Chapter 6",
    text: "In the smart city example, traffic light agents, vehicle agents, and emergency vehicle agents each have distinct roles yet work toward a shared outcome. Which characteristic of multi-agent systems does this best illustrate?",
    options: [
      "Autonomous, cooperative agents with distinct roles toward a shared goal",
      "A single centralized agent controlling every other agent directly",
      "Complete isolation between all agents in the system",
      "An economic auction determining every agent's actions"
    ],
    correctAnswer: 0,
    explanation: "Characteristics of Multi-Agent Systems describes MAS agents as autonomous, distributed, intelligent, interactive, and cooperative or competitive, which matches traffic light, vehicle, and emergency vehicle agents each acting autonomously in distinct roles while cooperating toward reduced congestion.\n\nA single centralized agent controlling every other agent contradicts the distributed characteristic of a MAS, where agents act autonomously rather than being centrally controlled.\n\nComplete isolation contradicts the interactive characteristic, since the agents in this example communicate and coordinate with each other.\n\nAn economic auction is a separate concept from economically inspired multi-agent systems, not part of the smart city traffic example, which does not involve bidding."
  },
  {
    id: "cpe310_ch6_081",
    course: "CPE 310",
    chapter: "Chapter 6",
    text: "A university deploys agents that bid for limited classroom scheduling slots, with the highest-value request winning each slot. Which concept does this best illustrate?",
    options: [
      "A purely reactive agent responding to a single fixed stimulus",
      "An economically inspired multi-agent system, using an auction mechanism to allocate limited resources",
      "A mobile agent migrating between network nodes",
      "A critic component evaluating a learning agent's performance"
    ],
    correctAnswer: 1,
    explanation: "This illustrates an economically inspired multi-agent system, since agents act like bidders and an auction-style mechanism, similar to the cloud computing example, is used to allocate limited scheduling slots efficiently.\n\nA purely reactive agent responding to a single fixed stimulus does not capture the described bidding and resource allocation process.\n\nA mobile agent migrating between network nodes concerns software movement, an unrelated concept to bidding for scheduling slots.\n\nA critic component evaluates performance within a single learning agent, unrelated to a multi-agent bidding and allocation scenario."
  },
  {
    id: "cpe310_ch6_082",
    course: "CPE 310",
    chapter: "Chapter 6",
    text: "How does the challenge of partial information in multi-agent learning differ from the challenge of communication overhead?",
    options: [
      "Both challenges describe exactly the same underlying problem with different names",
      "Partial information only affects economically inspired systems, while communication overhead only affects robotic agents",
      "Partial information means incomplete knowledge; overhead means messaging cost",
      "Communication overhead means agents have too much knowledge, the opposite of partial information"
    ],
    correctAnswer: 2,
    explanation: "Challenges in Multi-Agent Learning lists partial information and communication overhead as two separate difficulties: partial information concerns incomplete knowledge, while communication overhead concerns the cost of exchanging messages, distinct problems listed alongside dynamic environments, coordination, and scalability.\n\nThe notes list these as two separate, distinct challenges, not the same underlying problem under different names.\n\nBoth challenges are described generally for multi-agent learning, not restricted specifically to economically inspired systems or robotic agents.\n\nCommunication overhead concerns the cost of exchanging messages, not having too much knowledge, so it is not simply the opposite of partial information."
  },
  {
    id: "cpe310_ch6_083",
    course: "CPE 310",
    chapter: "Chapter 6",
    text: "A delivery company uses many small software agents that travel to warehouse servers, calculate optimal routes locally using data at each server, and send back only the finalized routes. Which advantage of mobile agents does this scenario best demonstrate?",
    options: [
      "Increased server hardware costs at every warehouse",
      "Guaranteed elimination of all computation at the warehouse servers",
      "A requirement that the agent never returns any results",
      "Reduced network traffic, since raw data is not repeatedly transferred"
    ],
    correctAnswer: 3,
    explanation: "This demonstrates reduced network traffic, since the mobile agent processes route data locally at each server and sends back only finalized results, rather than repeatedly transferring raw data across the network, matching the description of how mobile agents work.\n\nIncreased server hardware costs is not a listed advantage of mobile agents, and this scenario does not describe hardware cost changes.\n\nProcessing occurs locally at the warehouse servers, so it is not true that computation there is eliminated.\n\nThe agent is described as sending back finalized routes, so it is not true that it never returns any results."
  },
  {
    id: "cpe310_ch6_084",
    course: "CPE 310",
    chapter: "Chapter 6",
    text: "A factory uses several robots, each specialized for welding, painting, or assembly, coordinating their schedules so the overall production line runs efficiently. Which concept best captures both the physical nature of these robots and their coordinated roles?",
    options: [
      "Robotic agents organized as an agent team, combining physical sensors and actuators with specialized, coordinated roles",
      "Mobile agents, since they migrate between different network servers",
      "A single learning agent with no other agents present",
      "An economically inspired system where robots bid against each other for tasks"
    ],
    correctAnswer: 0,
    explanation: "This combines robotic agents, physical intelligent agents that act through sensors and actuators, with the agent team concept of specialized agents coordinating on complex problems, matching both the physical robots and their specialized welding, painting, and assembly roles.\n\nMobile agents are defined by migrating between network nodes as software, not by having a physical presence on a factory floor.\n\nThe scenario explicitly describes several specialized robots working together, not a single learning agent operating alone.\n\nNothing in the scenario describes bidding or auction-based allocation between the robots, so it does not illustrate an economically inspired system."
  },
  {
    id: "cpe310_ch6_085",
    course: "CPE 310",
    chapter: "Chapter 6",
    text: "Which of the following best distinguishes a deliberative agent from a reactive agent, based on the definitions given?",
    options: [
      "A deliberative agent can only exist in economically inspired systems, unlike a reactive agent",
      "A deliberative agent thinks and plans before acting, while a reactive agent responds immediately to environmental changes",
      "A reactive agent always takes longer to respond than a deliberative agent",
      "There is no meaningful difference between the two types"
    ],
    correctAnswer: 1,
    explanation: "Types of Agent Models distinguishes deliberative agents, which think and plan before acting, from reactive agents, which respond immediately to environmental changes.\n\nDeliberative agents are a general agent modeling concept, not restricted to economically inspired systems, which is a separate topic in the notes.\n\nReactive agents are described as responding immediately, which is typically faster, not slower, than a deliberative agent's planning process.\n\nThe notes explicitly distinguish these as two different types with different examples, automatic doors versus chess-playing AI, so there is a meaningful difference."
  }
];

export default cpe310Chapter6Questions;
