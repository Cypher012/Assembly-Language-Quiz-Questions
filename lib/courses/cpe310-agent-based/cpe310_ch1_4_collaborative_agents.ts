import { QuestionV2 } from "@/lib/quiz-types";

const cpe310Chapter1_4Questions: QuestionV2[] = [
  {
    id: "cpe310_ch4_001",
    course: "CPE 310",
    chapter: "Chapter 1.4",
    text: "Among the traits of collaborative AI agents, which trait is described as each agent independently perceiving, deciding, and acting on its environment, with no hand-holding required?",
    options: ["Autonomous", "Interconnected", "Goal-Oriented", "Specialized"],
    correctAnswer: 0,
    explanation:
      "Autonomous is described as each agent independently perceiving, deciding, and acting on its environment, with no hand-holding required.\n\nInterconnected instead describes agents actively communicating, exchanging data, insights, and decisions, not independent action.\n\nGoal-Oriented instead describes agents sharing a common or complementary objective, not independent perception and action.\n\nSpecialized instead describes each agent handling a unique function, not independent action itself.",
  },
  {
    id: "cpe310_ch4_002",
    course: "CPE 310",
    chapter: "Chapter 1.4",
    text: "Among the traits of collaborative AI agents, which trait describes agents actively communicating, exchanging data, insights, and decisions with each other?",
    options: ["Interconnected", "Autonomous", "Goal-Oriented", "Specialized"],
    correctAnswer: 0,
    explanation:
      "Interconnected describes agents actively communicating, exchanging data, insights, and decisions with each other.\n\nAutonomous instead describes each agent independently perceiving and acting, not the communication between agents.\n\nGoal-Oriented instead describes agents sharing a common or complementary objective, not the act of communicating.\n\nSpecialized instead describes each agent handling a unique function, not the act of communicating.",
  },
  {
    id: "cpe310_ch4_003",
    course: "CPE 310",
    chapter: "Chapter 1.4",
    text: "Among the traits of collaborative AI agents, which trait describes agents sharing a common objective or complementary goals, requiring coordination and negotiation?",
    options: ["Goal-Oriented", "Autonomous", "Interconnected", "Specialized"],
    correctAnswer: 0,
    explanation:
      "Goal-Oriented describes agents sharing a common objective or complementary goals, requiring coordination and negotiation.\n\nAutonomous instead describes each agent independently perceiving and acting, not specifically shared goals.\n\nInterconnected instead describes agents actively communicating, a related but distinct trait from having shared objectives.\n\nSpecialized instead describes each agent handling a unique function, not specifically shared objectives.",
  },
  {
    id: "cpe310_ch4_004",
    course: "CPE 310",
    chapter: "Chapter 1.4",
    text: "Among the traits of collaborative AI agents, which trait describes each agent handling a unique function, mirroring how teams work in human organizations?",
    options: ["Specialized", "Autonomous", "Interconnected", "Goal-Oriented"],
    correctAnswer: 0,
    explanation:
      "Specialized describes each agent handling a unique function, mirroring how teams work in human organizations.\n\nAutonomous instead describes each agent independently perceiving and acting, not specifically having a unique function.\n\nInterconnected instead describes agents actively communicating, not specifically having a unique function.\n\nGoal-Oriented instead describes agents sharing a common or complementary objective, not specifically having a unique function.",
  },
  {
    id: "cpe310_ch4_005",
    course: "CPE 310",
    chapter: "Chapter 1.4",
    text: "Which of the following is listed as one of the four traits of collaborative AI agents, describing agents that handle a unique function?",
    options: ["Specialized", "Centralized", "Homogeneous", "Isolated"],
    correctAnswer: 0,
    explanation:
      "Specialized is one of the four traits of collaborative AI agents, describing agents that each handle a unique function.\n\nCentralized is not one of the four listed traits; collaborative agents are instead described as distributed and interconnected.\n\nHomogeneous is not one of the four listed traits; agents are instead described as specialized and distinct from one another.\n\nIsolated is not one of the four listed traits; agents are instead described as interconnected, actively communicating with each other.",
  },
  {
    id: "cpe310_ch4_006",
    course: "CPE 310",
    chapter: "Chapter 1.4",
    text: "Why is a single agent described as insufficient for real-world problems like disease diagnosis or optimizing a job application?",
    options: [
      "A single agent excels at one task, but real-world problems require diverse expertise",
      "A single agent is always slower than any multi-agent system, regardless of the task",
      "A single agent cannot be programmed to perceive any environment at all",
      "A single agent always costs more money to build than multiple agents",
    ],
    correctAnswer: 0,
    explanation:
      "A single agent excels at one task, but real-world problems like disease diagnosis or optimizing a job application require diverse expertise, which collaborative agents provide by combining specialists.\n\nAlways being slower regardless of task is not the stated reason; the reason given is about the breadth of expertise required, not raw speed.\n\nA single agent being unable to perceive any environment contradicts the basic definition of an agent as something that perceives and acts.\n\nAlways costing more money is not the stated reason for needing multiple agents; the reason is diverse expertise.",
  },
  {
    id: "cpe310_ch4_007",
    course: "CPE 310",
    chapter: "Chapter 1.4",
    text: "Collaborative agents are described as mimicking a team of specialists combining which capabilities?",
    options: [
      "NLP, data mining, reasoning, and adaptive learning",
      "Only physical manufacturing and assembly skills",
      "Exclusively financial auditing procedures",
      "Only manual paper-based data entry",
    ],
    correctAnswer: 0,
    explanation:
      "Collaborative agents mimic a team of specialists combining NLP, data mining, reasoning, and adaptive learning to tackle different aspects of a problem in parallel.\n\nPhysical manufacturing and assembly skills are not the capabilities described as being combined here.\n\nFinancial auditing procedures are not the capabilities described as being combined here.\n\nManual paper-based data entry is not the capabilities described as being combined here.",
  },
  {
    id: "cpe310_ch4_008",
    course: "CPE 310",
    chapter: "Chapter 1.4",
    text: "In the example flow of specialist agents combining into a complex solution, which three agent types are named?",
    options: [
      "NLP Agent, Data Mining Agent, Reasoning Agent",
      "Marketing Agent, Sales Agent, Legal Agent",
      "Hardware Agent, Firmware Agent, Network Agent",
      "Sensor Agent, Actuator Agent, Battery Agent",
    ],
    correctAnswer: 0,
    explanation:
      "The example flow names NLP Agent, Data Mining Agent, and Reasoning Agent combining to produce a complex solution.\n\nMarketing, Sales, and Legal Agents are not the agent types named in this example flow.\n\nHardware, Firmware, and Network Agents are not the agent types named in this example flow.\n\nSensor, Actuator, and Battery Agents are not the agent types named in this example flow.",
  },
  {
    id: "cpe310_ch4_009",
    course: "CPE 310",
    chapter: "Chapter 1.4",
    text: "Which of the following is listed as a benefit of parallel collaboration among agents?",
    options: ["Depth", "Efficiency", "All of these", "None of these"],
    correctAnswer: 2,
    explanation:
      "The benefits of parallel collaboration are listed as Depth, Efficiency, and Resilience, so both Depth and Efficiency are correct, making All of these the right choice.",
  },
  {
    id: "cpe310_ch4_010",
    course: "CPE 310",
    chapter: "Chapter 1.4",
    text: "Which of the following is listed as one of the four types of learning that collaborative agents harness, alongside machine learning and deep learning?",
    options: [
      "Symbolic reasoning",
      "Quantum annealing",
      "Manual spreadsheet entry",
      "Physical dexterity training",
    ],
    correctAnswer: 0,
    explanation:
      "Symbolic reasoning is listed alongside machine learning, reinforcement learning, and deep learning as one of the four types of learning collaborative agents harness.\n\nQuantum annealing is not one of the four listed types of learning.\n\nManual spreadsheet entry is not a learning paradigm and is not listed.\n\nPhysical dexterity training is not one of the four listed types of learning.",
  },
  {
    id: "cpe310_ch4_011",
    course: "CPE 310",
    chapter: "Chapter 1.4",
    text: "In the pipeline for how collaborative agents learn, which step involves gathering and cleaning data from diverse sources such as medical records, images, and job postings?",
    options: [
      "Data Ingestion & Preprocessing",
      "Knowledge Extraction",
      "Pattern Detection",
      "Decision Support",
    ],
    correctAnswer: 0,
    explanation:
      "Data Ingestion & Preprocessing involves gathering and cleaning data from diverse sources such as medical records, images, and job postings, the first step in the pipeline.\n\nKnowledge Extraction instead involves NLP agents extracting clinically significant concepts or key resume components, a step after data is already gathered and cleaned.\n\nPattern Detection instead involves deep learning agents identifying trends and anomalies, a later step than initial data gathering.\n\nDecision Support instead involves reasoning agents synthesizing evidence, a later step than initial data gathering.",
  },
  {
    id: "cpe310_ch4_012",
    course: "CPE 310",
    chapter: "Chapter 1.4",
    text: "In the pipeline for how collaborative agents learn, which step involves NLP agents extracting clinically significant concepts or key resume components?",
    options: [
      "Knowledge Extraction",
      "Data Ingestion & Preprocessing",
      "Pattern Detection",
      "Feedback Loops",
    ],
    correctAnswer: 0,
    explanation:
      "Knowledge Extraction involves NLP agents extracting clinically significant concepts or key resume components.\n\nData Ingestion & Preprocessing instead involves gathering and cleaning raw data, a step before extraction of specific concepts occurs.\n\nPattern Detection instead involves deep learning agents identifying trends and anomalies, a step after knowledge has been extracted.\n\nFeedback Loops instead involves agents learning from real-world outcomes, the final step, not extraction itself.",
  },
  {
    id: "cpe310_ch4_013",
    course: "CPE 310",
    chapter: "Chapter 1.4",
    text: "In the pipeline for how collaborative agents learn, which step involves deep learning agents identifying trends, anomalies, or predictive factors such as disease progression?",
    options: [
      "Pattern Detection",
      "Data Ingestion & Preprocessing",
      "Knowledge Extraction",
      "Decision Support",
    ],
    correctAnswer: 0,
    explanation:
      "Pattern Detection involves deep learning agents identifying trends, anomalies, or predictive factors, such as disease progression.\n\nData Ingestion & Preprocessing instead involves gathering and cleaning raw data, a step before pattern detection occurs.\n\nKnowledge Extraction instead involves NLP agents extracting significant concepts, a step before pattern detection occurs.\n\nDecision Support instead involves reasoning agents synthesizing evidence, a step after patterns have been detected.",
  },
  {
    id: "cpe310_ch4_014",
    course: "CPE 310",
    chapter: "Chapter 1.4",
    text: "In the pipeline for how collaborative agents learn, which step involves reasoning agents synthesizing evidence and generating actionable recommendations?",
    options: [
      "Decision Support",
      "Data Ingestion & Preprocessing",
      "Knowledge Extraction",
      "Pattern Detection",
    ],
    correctAnswer: 0,
    explanation:
      "Decision Support involves reasoning agents synthesizing evidence and generating actionable recommendations.\n\nData Ingestion & Preprocessing instead involves gathering and cleaning raw data, an earlier step than synthesizing evidence.\n\nKnowledge Extraction instead involves NLP agents extracting significant concepts, an earlier step than synthesizing evidence.\n\nPattern Detection instead involves deep learning agents identifying trends, an earlier step than synthesizing evidence into recommendations.",
  },
  {
    id: "cpe310_ch4_015",
    course: "CPE 310",
    chapter: "Chapter 1.4",
    text: "In the pipeline for how collaborative agents learn, which step involves agents learning from real-world outcomes and each other, continuously improving accuracy?",
    options: [
      "Feedback Loops",
      "Data Ingestion & Preprocessing",
      "Pattern Detection",
      "Decision Support",
    ],
    correctAnswer: 0,
    explanation:
      "Feedback Loops involves agents learning from real-world outcomes and each other, continuously improving accuracy, the final step in the pipeline.\n\nData Ingestion & Preprocessing instead is the first step, gathering raw data, not the continuous improvement step.\n\nPattern Detection instead involves identifying trends, an earlier step than the continuous feedback and improvement step.\n\nDecision Support instead involves generating recommendations, an earlier step than the continuous feedback and improvement step.",
  },
  {
    id: "cpe310_ch4_016",
    course: "CPE 310",
    chapter: "Chapter 1.4",
    text: "Which of the following is listed as a step in the five-step pipeline describing how collaborative agents learn?",
    options: [
      "Manual Approval Queue",
      "Cold Storage Archiving",
      "All of these",
      "None of these",
    ],
    correctAnswer: 3,
    explanation:
      "The five-step pipeline is Data Ingestion & Preprocessing, Knowledge Extraction, Pattern Detection, Decision Support, and Feedback Loops. Neither a Manual Approval Queue nor Cold Storage Archiving is one of these five named steps, making None of these the right choice.",
  },
  {
    id: "cpe310_ch4_017",
    course: "CPE 310",
    chapter: "Chapter 1.4",
    text: "In the Multi-Agent Resume & Cover Letter Optimizer case study, which agent extracts skills, experience, education, and achievements from the CV?",
    options: [
      "Resume Parser",
      "Cover Letter Parser",
      "Job Description Analyzer",
      "Match & Gap Analyst",
    ],
    correctAnswer: 0,
    explanation:
      "The Resume Parser extracts skills, experience, education, and achievements from the CV.\n\nThe Cover Letter Parser instead extracts key statements and applicant intent from the cover letter, not the CV itself.\n\nThe Job Description Analyzer instead identifies essential skills, qualifications, and keywords from the job posting, not the CV.\n\nThe Match & Gap Analyst instead compares the CV to job requirements, a step that comes after the CV has already been parsed.",
  },
  {
    id: "cpe310_ch4_018",
    course: "CPE 310",
    chapter: "Chapter 1.4",
    text: "In the Multi-Agent Resume & Cover Letter Optimizer case study, which agent extracts key statements and applicant intent, described as optional?",
    options: [
      "Cover Letter Parser",
      "Resume Parser",
      "Enhancement Agent",
      "Scoring Agent",
    ],
    correctAnswer: 0,
    explanation:
      "The Cover Letter Parser extracts key statements and applicant intent from the cover letter, and is described as optional.\n\nThe Resume Parser instead extracts skills, experience, education, and achievements from the CV, not the cover letter.\n\nThe Enhancement Agent instead suggests edits to tailor language and optimize formatting, a later step in the pipeline.\n\nThe Scoring Agent instead rates documents for relevance, clarity, and impact, a later step in the pipeline.",
  },
  {
    id: "cpe310_ch4_019",
    course: "CPE 310",
    chapter: "Chapter 1.4",
    text: "In the Multi-Agent Resume & Cover Letter Optimizer case study, which agent identifies essential skills, qualifications, and keywords from the job posting?",
    options: [
      "Job Description Analyzer",
      "Resume Parser",
      "Cover Letter Parser",
      "Final Review Agent",
    ],
    correctAnswer: 0,
    explanation:
      "The Job Description Analyzer identifies essential skills, qualifications, and keywords from the job posting.\n\nThe Resume Parser instead extracts skills and experience from the CV, not the job posting.\n\nThe Cover Letter Parser instead extracts key statements from the cover letter, not the job posting.\n\nThe Final Review Agent instead cross-checks grammar and submission readiness, a much later step than analyzing the job posting.",
  },
  {
    id: "cpe310_ch4_020",
    course: "CPE 310",
    chapter: "Chapter 1.4",
    text: "In the Multi-Agent Resume & Cover Letter Optimizer case study, which agent compares the CV to job requirements, highlighting strengths and gaps?",
    options: [
      "Match & Gap Analyst",
      "Resume Parser",
      "Enhancement Agent",
      "Scoring Agent",
    ],
    correctAnswer: 0,
    explanation:
      "The Match & Gap Analyst compares the CV to job requirements, highlighting strengths and gaps.\n\nThe Resume Parser instead extracts data from the CV, a step before comparison to job requirements occurs.\n\nThe Enhancement Agent instead suggests edits based on the comparison, a step after the match and gap analysis.\n\nThe Scoring Agent instead rates the documents numerically, a step after the match and gap analysis.",
  },
  {
    id: "cpe310_ch4_021",
    course: "CPE 310",
    chapter: "Chapter 1.4",
    text: "In the Multi-Agent Resume & Cover Letter Optimizer case study, which agent suggests edits to tailor language, add keywords, and optimize formatting?",
    options: [
      "Enhancement Agent",
      "Match & Gap Analyst",
      "Scoring Agent",
      "Final Review Agent",
    ],
    correctAnswer: 0,
    explanation:
      "The Enhancement Agent suggests edits to tailor language, add keywords, and optimize formatting.\n\nThe Match & Gap Analyst instead identifies strengths and gaps, a step before enhancement suggestions are made.\n\nThe Scoring Agent instead rates documents numerically, a step after enhancements have been suggested.\n\nThe Final Review Agent instead cross-checks grammar and coherence, the final step, after enhancements have already been applied.",
  },
  {
    id: "cpe310_ch4_022",
    course: "CPE 310",
    chapter: "Chapter 1.4",
    text: "In the Multi-Agent Resume & Cover Letter Optimizer case study, which agent rates documents from 0 to 100 for relevance, clarity, and impact?",
    options: [
      "Scoring Agent",
      "Resume Parser",
      "Job Description Analyzer",
      "Enhancement Agent",
    ],
    correctAnswer: 0,
    explanation:
      "The Scoring Agent rates documents from 0 to 100 for relevance, clarity, and impact.\n\nThe Resume Parser instead extracts data from the CV, an earlier step than numerical scoring.\n\nThe Job Description Analyzer instead identifies job requirements, an earlier step than numerical scoring.\n\nThe Enhancement Agent instead suggests edits, a step before the final numerical scoring is applied.",
  },
  {
    id: "cpe310_ch4_023",
    course: "CPE 310",
    chapter: "Chapter 1.4",
    text: "In the Multi-Agent Resume & Cover Letter Optimizer case study, which agent cross-checks grammar, coherence, and submission readiness as the final step?",
    options: [
      "Final Review Agent",
      "Resume Parser",
      "Match & Gap Analyst",
      "Scoring Agent",
    ],
    correctAnswer: 0,
    explanation:
      "The Final Review Agent cross-checks grammar, coherence, and submission readiness, the last of the seven agents in the pipeline.\n\nThe Resume Parser instead is the first agent, extracting data from the CV, not the final review step.\n\nThe Match & Gap Analyst instead compares the CV to job requirements, an earlier step than the final review.\n\nThe Scoring Agent instead rates the documents numerically, a step before the final grammar and readiness review.",
  },
  {
    id: "cpe310_ch4_024",
    course: "CPE 310",
    chapter: "Chapter 1.4",
    text: "Which of the following is listed as one of the seven agents in the Multi-Agent Resume & Cover Letter Optimizer case study?",
    options: [
      "Enhancement Agent",
      "Salary Negotiation Agent",
      "Interview Scheduling Agent",
      "Background Check Agent",
    ],
    correctAnswer: 0,
    explanation:
      "Enhancement Agent is one of the seven named agents, alongside Resume Parser, Cover Letter Parser, Job Description Analyzer, Match & Gap Analyst, Scoring Agent, and Final Review Agent.\n\nSalary Negotiation Agent is not one of the seven named agents in this case study.\n\nInterview Scheduling Agent is not one of the seven named agents in this case study.\n\nBackground Check Agent is not one of the seven named agents in this case study.",
  },
  {
    id: "cpe310_ch4_025",
    course: "CPE 310",
    chapter: "Chapter 1.4",
    text: "In the Collaborative Workflow for the resume optimizer, what is the first step?",
    options: [
      "Upload CV, cover letter, and job description",
      "Scoring Agent rates on multiple factors",
      "Final Review ensures polished, submission-ready documents",
      "Enhancement Agent suggests informed revisions",
    ],
    correctAnswer: 0,
    explanation:
      "The first step of the Collaborative Workflow is uploading the CV, cover letter, and job description.\n\nThe Scoring Agent rating documents is instead the sixth step, near the end of the workflow, not the first.\n\nFinal Review ensuring polished, submission-ready documents is instead the seventh and final step, not the first.\n\nThe Enhancement Agent suggesting revisions is instead the fifth step, not the first.",
  },
  {
    id: "cpe310_ch4_026",
    course: "CPE 310",
    chapter: "Chapter 1.4",
    text: "In the Collaborative Workflow for the resume optimizer, which step immediately follows the parsing agents extracting relevant data?",
    options: [
      "Job description analysis identifies employer priorities",
      "Upload CV, cover letter, and job description",
      "Scoring Agent rates on multiple factors",
      "Final Review ensures polished, submission-ready documents",
    ],
    correctAnswer: 0,
    explanation:
      "Job description analysis identifying employer priorities is the step that immediately follows the parsing agents extracting relevant data, the third step in the workflow.\n\nUploading the CV, cover letter, and job description is instead the first step, occurring before parsing, not after it.\n\nThe Scoring Agent rating documents is instead a much later step, near the end of the workflow.\n\nFinal Review is instead the last step of the workflow, occurring much later.",
  },
  {
    id: "cpe310_ch4_027",
    course: "CPE 310",
    chapter: "Chapter 1.4",
    text: "In the Collaborative Workflow for the resume optimizer, what is the last step?",
    options: [
      "Final Review ensures polished, submission-ready documents",
      "Upload CV, cover letter, and job description",
      "Parsing agents extract relevant data",
      "Match & Gap Analysis identifies fit and areas to improve",
    ],
    correctAnswer: 0,
    explanation:
      "Final Review ensuring polished, submission-ready documents is the seventh and last step of the Collaborative Workflow.\n\nUploading documents is instead the first step of the workflow, not the last.\n\nParsing agents extracting relevant data is instead the second step of the workflow, not the last.\n\nMatch & Gap Analysis is instead the fourth step of the workflow, not the last.",
  },
  {
    id: "cpe310_ch4_028",
    course: "CPE 310",
    chapter: "Chapter 1.4",
    text: "Which application area is described as specialist agents analysing imaging, genetics, and clinical data to deliver comprehensive diagnoses?",
    options: [
      "Collaborative Diagnostics",
      "Personalized Medicine",
      "Virtual Health Assistants",
      "Organizational Learning",
    ],
    correctAnswer: 0,
    explanation:
      "Collaborative Diagnostics is described as specialist agents analysing imaging, genetics, and clinical data to deliver comprehensive diagnoses.\n\nPersonalized Medicine instead integrates patient history, genomics, and clinical trial data to tailor treatment plans, a related but distinct application.\n\nVirtual Health Assistants instead monitor patient adherence and provide real-time education, a related but distinct application.\n\nOrganizational Learning instead simulates policy impacts and assists with staff training, an unrelated application area to diagnostics.",
  },
  {
    id: "cpe310_ch4_029",
    course: "CPE 310",
    chapter: "Chapter 1.4",
    text: "Which application area is described as agents integrating patient history, genomics, and clinical trial data to tailor individual treatment plans?",
    options: [
      "Personalized Medicine",
      "Collaborative Diagnostics",
      "Virtual Health Assistants",
      "Organizational Learning",
    ],
    correctAnswer: 0,
    explanation:
      "Personalized Medicine is described as agents integrating patient history, genomics, and clinical trial data to tailor individual treatment plans.\n\nCollaborative Diagnostics instead analyses imaging, genetics, and clinical data to deliver diagnoses, a related but distinct application from tailoring treatment plans.\n\nVirtual Health Assistants instead monitor patient adherence and provide real-time education, a related but distinct application.\n\nOrganizational Learning instead simulates policy impacts and assists with staff training, an unrelated application area to treatment planning.",
  },
  {
    id: "cpe310_ch4_030",
    course: "CPE 310",
    chapter: "Chapter 1.4",
    text: "Which application area is described as teams of agents monitoring patient adherence and providing real-time adaptive education?",
    options: [
      "Virtual Health Assistants",
      "Collaborative Diagnostics",
      "Personalized Medicine",
      "Organizational Learning",
    ],
    correctAnswer: 0,
    explanation:
      "Virtual Health Assistants are described as teams of agents monitoring patient adherence and providing real-time adaptive education.\n\nCollaborative Diagnostics instead analyses imaging and clinical data for diagnoses, a related but distinct application from ongoing patient monitoring.\n\nPersonalized Medicine instead tailors treatment plans using patient history and genomics, a related but distinct application from ongoing monitoring.\n\nOrganizational Learning instead simulates policy impacts and staff training, an unrelated application area to patient monitoring.",
  },
  {
    id: "cpe310_ch4_031",
    course: "CPE 310",
    chapter: "Chapter 1.4",
    text: "Which application area is described as agents simulating policy impacts and assisting with staff training and enterprise knowledge management?",
    options: [
      "Organizational Learning",
      "Collaborative Diagnostics",
      "Personalized Medicine",
      "Virtual Health Assistants",
    ],
    correctAnswer: 0,
    explanation:
      "Organizational Learning is described as agents simulating policy impacts and assisting with staff training and enterprise knowledge management.\n\nCollaborative Diagnostics instead analyses imaging and clinical data for diagnoses, an unrelated application area to organizational training.\n\nPersonalized Medicine instead tailors treatment plans, an unrelated application area to organizational training.\n\nVirtual Health Assistants instead monitor patient adherence, an unrelated application area to organizational training.",
  },
  {
    id: "cpe310_ch4_032",
    course: "CPE 310",
    chapter: "Chapter 1.4",
    text: "Which of the following is listed as an application of collaborative AI in healthcare and learning?",
    options: [
      "Collaborative Diagnostics",
      "Organizational Learning",
      "All of these",
      "None of these",
    ],
    correctAnswer: 2,
    explanation:
      "The four listed applications are Collaborative Diagnostics, Personalized Medicine, Virtual Health Assistants, and Organizational Learning, so both Collaborative Diagnostics and Organizational Learning are correct, making All of these the right choice.",
  },
  {
    id: "cpe310_ch4_033",
    course: "CPE 310",
    chapter: "Chapter 1.4",
    text: "Which benefit of collaborative AI is described as parallel processing and cross-verification between agents significantly reducing errors?",
    options: [
      "Improved Accuracy & Speed",
      "Scalability",
      "Personalization",
      "Continuous Improvement",
    ],
    correctAnswer: 0,
    explanation:
      "Improved Accuracy & Speed is described as parallel processing and cross-verification between agents significantly reducing errors.\n\nScalability instead is described as agents scaling horizontally to handle growth in data volumes, not error reduction specifically.\n\nPersonalization instead is described as delivering context-aware insights targeted to specific needs, not error reduction.\n\nContinuous Improvement instead is described as systems evolving through ongoing feedback loops, not the specific error-reduction mechanism.",
  },
  {
    id: "cpe310_ch4_034",
    course: "CPE 310",
    chapter: "Chapter 1.4",
    text: "Which benefit of collaborative AI is described as agents scaling horizontally to handle exponential growth in medical and educational data volumes?",
    options: [
      "Scalability",
      "Improved Accuracy & Speed",
      "Personalization",
      "Continuous Improvement",
    ],
    correctAnswer: 0,
    explanation:
      "Scalability is described as agents scaling horizontally to handle exponential growth in medical and educational data volumes.\n\nImproved Accuracy & Speed instead is described as parallel processing and cross-verification reducing errors, not specifically horizontal scaling.\n\nPersonalization instead is described as delivering context-aware insights, not specifically horizontal scaling.\n\nContinuous Improvement instead is described as systems evolving through feedback loops, not specifically horizontal scaling.",
  },
  {
    id: "cpe310_ch4_035",
    course: "CPE 310",
    chapter: "Chapter 1.4",
    text: "Which benefit of collaborative AI is described as systems delivering context-aware insights targeted at the specific needs of each learner or patient?",
    options: [
      "Personalization",
      "Scalability",
      "Improved Accuracy & Speed",
      "Continuous Improvement",
    ],
    correctAnswer: 0,
    explanation:
      "Personalization is described as systems delivering context-aware insights targeted at the specific needs of each learner or patient.\n\nScalability instead is described as scaling horizontally to handle data growth, not tailoring insights to individuals.\n\nImproved Accuracy & Speed instead is described as parallel processing reducing errors, not tailoring insights to individuals.\n\nContinuous Improvement instead is described as systems evolving through feedback loops, not tailoring insights to individuals.",
  },
  {
    id: "cpe310_ch4_036",
    course: "CPE 310",
    chapter: "Chapter 1.4",
    text: "Which benefit of collaborative AI is described as systems evolving dynamically through ongoing feedback loops, becoming smarter the more they run?",
    options: [
      "Continuous Improvement",
      "Scalability",
      "Personalization",
      "Improved Accuracy & Speed",
    ],
    correctAnswer: 0,
    explanation:
      "Continuous Improvement is described as systems evolving dynamically through ongoing feedback loops, becoming smarter the more they run.\n\nScalability instead is described as scaling horizontally to handle data growth, not the ongoing feedback-driven evolution over time.\n\nPersonalization instead is described as delivering context-aware insights, not the ongoing feedback-driven evolution over time.\n\nImproved Accuracy & Speed instead is described as parallel processing reducing errors, not the ongoing feedback-driven evolution over time.",
  },
  {
    id: "cpe310_ch4_037",
    course: "CPE 310",
    chapter: "Chapter 1.4",
    text: "Which of the following is listed as a benefit of collaborative AI?",
    options: [
      "Scalability",
      "Personalization",
      "All of these",
      "None of these",
    ],
    correctAnswer: 2,
    explanation:
      "The four listed benefits of collaborative AI are Improved Accuracy & Speed, Scalability, Personalization, and Continuous Improvement, so both Scalability and Personalization are correct, making All of these the right choice.",
  },
  {
    id: "cpe310_ch4_038",
    course: "CPE 310",
    chapter: "Chapter 1.4",
    text: "Which challenge of collaborative AI is described as sensitive patient and learner information needing protection, with decision-making that must remain transparent and auditable?",
    options: [
      "Data Privacy & Ethics",
      "Interoperability",
      "Bias & Transparency",
      "Scalability",
    ],
    correctAnswer: 0,
    explanation:
      "Data Privacy & Ethics is described as sensitive patient and learner information needing protection, with decision-making that must remain transparent and auditable.\n\nInteroperability instead is described as agents needing to function reliably across diverse systems and platforms, not specifically data protection.\n\nBias & Transparency instead is described as guarding against algorithmic unfairness, a related but distinct concern from data protection.\n\nScalability is a listed benefit, not one of the three listed challenges.",
  },
  {
    id: "cpe310_ch4_039",
    course: "CPE 310",
    chapter: "Chapter 1.4",
    text: "Which challenge of collaborative AI is described as agents needing to function reliably across diverse systems, platforms, and organizations, where standards matter?",
    options: [
      "Interoperability",
      "Data Privacy & Ethics",
      "Bias & Transparency",
      "Personalization",
    ],
    correctAnswer: 0,
    explanation:
      "Interoperability is described as agents needing to function reliably across diverse systems, platforms, and organizations, where standards matter.\n\nData Privacy & Ethics instead is described as protecting sensitive information, a related but distinct concern from cross-system compatibility.\n\nBias & Transparency instead is described as guarding against algorithmic unfairness, a related but distinct concern from cross-system compatibility.\n\nPersonalization is a listed benefit, not one of the three listed challenges.",
  },
  {
    id: "cpe310_ch4_040",
    course: "CPE 310",
    chapter: "Chapter 1.4",
    text: "Which challenge of collaborative AI is described as systems needing to actively guard against algorithmic unfairness and provide explainable reasoning?",
    options: [
      "Bias & Transparency",
      "Data Privacy & Ethics",
      "Interoperability",
      "Continuous Improvement",
    ],
    correctAnswer: 0,
    explanation:
      "Bias & Transparency is described as systems needing to actively guard against algorithmic unfairness and provide explainable reasoning for their outputs.\n\nData Privacy & Ethics instead is described as protecting sensitive information and ensuring auditability, a related but distinct concern from algorithmic fairness.\n\nInteroperability instead is described as functioning reliably across systems and platforms, a related but distinct concern from algorithmic fairness.\n\nContinuous Improvement is a listed benefit, not one of the three listed challenges.",
  },
  {
    id: "cpe310_ch4_041",
    course: "CPE 310",
    chapter: "Chapter 1.4",
    text: "Which of the following is listed as one of the three challenges and considerations for collaborative AI, alongside Data Privacy & Ethics?",
    options: [
      "Interoperability",
      "Overstaffing",
      "Excessive automation speed",
      "Hardware obsolescence",
    ],
    correctAnswer: 0,
    explanation:
      "Interoperability is listed alongside Data Privacy & Ethics and Bias & Transparency as one of the three challenges and considerations for collaborative AI.\n\nOverstaffing is not one of the three listed challenges.\n\nExcessive automation speed is not one of the three listed challenges.\n\nHardware obsolescence is not one of the three listed challenges.",
  },
  {
    id: "cpe310_ch4_042",
    course: "CPE 310",
    chapter: "Chapter 1.4",
    text: "Which future direction is described as deeper embedding of collaborative agents into personal education journeys and patient education platforms?",
    options: [
      "Lifelong Learning Integration",
      "Rapid Knowledge Dissemination",
      "Regulatory Frameworks",
      "Data Privacy & Ethics",
    ],
    correctAnswer: 0,
    explanation:
      "Lifelong Learning Integration is described as deeper embedding of collaborative agents into personal education journeys and patient education platforms.\n\nRapid Knowledge Dissemination instead is described as accelerating skills training delivery, a related but distinct future direction.\n\nRegulatory Frameworks instead is described as developing governance standards, a related but distinct future direction.\n\nData Privacy & Ethics is a listed challenge, not one of the three listed future directions.",
  },
  {
    id: "cpe310_ch4_043",
    course: "CPE 310",
    chapter: "Chapter 1.4",
    text: "Which future direction is described as accelerating skills training delivery, pushing updated knowledge to learners in near real-time?",
    options: [
      "Rapid Knowledge Dissemination",
      "Lifelong Learning Integration",
      "Regulatory Frameworks",
      "Interoperability",
    ],
    correctAnswer: 0,
    explanation:
      "Rapid Knowledge Dissemination is described as accelerating skills training delivery, pushing updated knowledge to learners in near real-time.\n\nLifelong Learning Integration instead is described as embedding agents into personal education journeys, a related but distinct future direction from rapid updates.\n\nRegulatory Frameworks instead is described as developing governance standards, a related but distinct future direction from rapid updates.\n\nInteroperability is a listed challenge, not one of the three listed future directions.",
  },
  {
    id: "cpe310_ch4_044",
    course: "CPE 310",
    chapter: "Chapter 1.4",
    text: "Which future direction is described as developing governance standards to ensure collaborative AI is deployed equitably, transparently, and safely?",
    options: [
      "Regulatory Frameworks",
      "Lifelong Learning Integration",
      "Rapid Knowledge Dissemination",
      "Scalability",
    ],
    correctAnswer: 0,
    explanation:
      "Regulatory Frameworks is described as developing governance standards to ensure collaborative AI is deployed equitably, transparently, and safely.\n\nLifelong Learning Integration instead is described as embedding agents into education journeys, a related but distinct future direction from governance.\n\nRapid Knowledge Dissemination instead is described as accelerating skills training delivery, a related but distinct future direction from governance.\n\nScalability is a listed benefit, not one of the three listed future directions.",
  },
  {
    id: "cpe310_ch4_045",
    course: "CPE 310",
    chapter: "Chapter 1.4",
    text: "Which of the following is listed as one of the three future directions for collaborative AI?",
    options: [
      "Full Agent Deregulation",
      "Single-Vendor Lock-In",
      "All of these",
      "None of these",
    ],
    correctAnswer: 3,
    explanation:
      "The three listed future directions are Lifelong Learning Integration, Rapid Knowledge Dissemination, and Regulatory Frameworks. Neither Full Agent Deregulation nor Single-Vendor Lock-In is one of these three named directions, making None of these the right choice.",
  },
  {
    id: "cpe310_ch4_046",
    course: "CPE 310",
    chapter: "Chapter 1.4",
    text: "Collaborative agents are best summarised as which of the following?",
    options: [
      "A team of AI minds working in concert, autonomous, interconnected, and specialized",
      "A single monolithic model with no internal divisions",
      "A purely theoretical concept with no real applications",
      "A replacement for all human healthcare workers",
    ],
    correctAnswer: 0,
    explanation:
      "The Key Takeaways summarise collaborative agents as a team of AI minds working in concert, autonomous, interconnected, and specialized.\n\nA single monolithic model with no internal divisions contradicts the described specialization and interconnection across multiple agents.\n\nBeing purely theoretical with no real applications contradicts the case study and application examples described, such as healthcare and resume optimization.\n\nReplacing all human healthcare workers overstates the described role; applications like virtual health assistants support rather than replace human involvement.",
  },
  {
    id: "cpe310_ch4_047",
    course: "CPE 310",
    chapter: "Chapter 1.4",
    text: "Distributed intelligence is described as enabling which of the following?",
    options: [
      "Tackling real-world complexity no single model could handle alone",
      "Guaranteeing zero errors under all possible conditions",
      "Eliminating the need for any data privacy safeguards",
      "Removing all requirements for coordination between agents",
    ],
    correctAnswer: 0,
    explanation:
      "The Key Takeaways state distributed intelligence enables tackling real-world complexity no single model could handle alone.\n\nGuaranteeing zero errors under all conditions is not a claim made in the Key Takeaways.\n\nEliminating data privacy safeguards directly contradicts the separately listed challenge of Data Privacy & Ethics.\n\nRemoving coordination requirements contradicts the Goal-Oriented trait, which explicitly requires coordination and negotiation among agents.",
  },
  {
    id: "cpe310_ch4_048",
    course: "CPE 310",
    chapter: "Chapter 1.4",
    text: "Real applications of collaborative agents are described as spanning which domains?",
    options: [
      "Healthcare diagnostics, personalized medicine, and organizational learning",
      "Exclusively video game level design",
      "Only professional sports officiating",
      "Solely astronomical telescope calibration",
    ],
    correctAnswer: 0,
    explanation:
      "The Key Takeaways state real applications span healthcare diagnostics, personalized medicine, and organizational learning.\n\nVideo game level design is not one of the domains named in the Key Takeaways.\n\nProfessional sports officiating is not one of the domains named in the Key Takeaways.\n\nAstronomical telescope calibration is not one of the domains named in the Key Takeaways.",
  },
  {
    id: "cpe310_ch4_049",
    course: "CPE 310",
    chapter: "Chapter 1.4",
    text: "Collaborative AI agents are described as Autonomous, Interconnected, Goal-Oriented, and Specialized, mirroring how teams work in human organizations.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "This is True. These four traits are listed directly as defining collaborative AI agents, with Specialized explicitly described as mirroring how teams work in human organizations.",
  },
  {
    id: "cpe310_ch4_050",
    course: "CPE 310",
    chapter: "Chapter 1.4",
    text: "In the pipeline for how collaborative agents learn, Pattern Detection is the very first step, occurring before any data has been gathered or cleaned.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "This is False. Data Ingestion & Preprocessing is the first step in the pipeline, gathering and cleaning data; Pattern Detection is the third step, occurring after data has already been gathered, cleaned, and had knowledge extracted from it.",
  },
  {
    id: "cpe310_ch4_051",
    course: "CPE 310",
    chapter: "Chapter 1.4",
    text: "In the Multi-Agent Resume & Cover Letter Optimizer case study, the Resume Parser is the seventh and final agent, running only after the Final Review Agent has completed its work.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "This is False. The Resume Parser is the first of the seven agents, extracting data from the CV; the Final Review Agent is the seventh and final agent, not the Resume Parser.",
  },
  {
    id: "cpe310_ch4_052",
    course: "CPE 310",
    chapter: "Chapter 1.4",
    text: "Improved Accuracy & Speed, Scalability, Personalization, and Continuous Improvement are all listed as benefits of collaborative AI.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "This is True. These four benefits are listed directly as the advantages collaborative AI provides.",
  },
  {
    id: "cpe310_ch4_053",
    course: "CPE 310",
    chapter: "Chapter 1.4",
    text: "Data Privacy & Ethics, Interoperability, and Bias & Transparency are listed as future directions for collaborative AI, while Lifelong Learning Integration is listed as a current challenge.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "This is False. Data Privacy & Ethics, Interoperability, and Bias & Transparency are listed as challenges and considerations, while Lifelong Learning Integration is listed as a future direction, the reverse of this statement's pairing.",
  },
  {
    id: "cpe310_ch4_054",
    course: "CPE 310",
    chapter: "Chapter 1.4",
    text: "Which of the following is listed among the further reading resources referenced for this course?",
    options: [
      "Nwana, H.S. (1996), 'Software Agents: An Overview'",
      "A cookbook of regional recipes",
      "A user manual for a specific smartphone model",
      "A style guide for academic citation formatting only",
    ],
    correctAnswer: 0,
    explanation:
      "Nwana, H.S. (1996), 'Software Agents: An Overview', is listed among the further reading resources, described as the foundational typology paper.\n\nA cookbook of regional recipes is not one of the listed further reading resources.\n\nA smartphone user manual is not one of the listed further reading resources.\n\nAn academic citation style guide alone is not one of the listed further reading resources.",
  },
  {
    id: "cpe310_ch4_055",
    course: "CPE 310",
    chapter: "Chapter 1.4",
    text: "Which of the following is listed among the further reading resources, described as the transformer architecture paper?",
    options: [
      "Vaswani et al. (2017), 'Attention Is All You Need'",
      "A newspaper article about stock market trends",
      "A patent filing for an unrelated mechanical device",
      "A children's picture book about robots",
    ],
    correctAnswer: 0,
    explanation:
      "Vaswani et al. (2017), 'Attention Is All You Need', is listed among the further reading resources, described as the transformer architecture paper.\n\nA newspaper article about stock market trends is not one of the listed further reading resources.\n\nAn unrelated mechanical patent filing is not one of the listed further reading resources.\n\nA children's picture book about robots is not one of the listed further reading resources.",
  },
];

export default cpe310Chapter1_4Questions;
