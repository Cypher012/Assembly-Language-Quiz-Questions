import { QuestionV2 } from "@/lib/quiz-types";

const csc306Lecture10AiQuestions: QuestionV2[] = [
  {
    id: "csc306_ch14_001",
    course: "CSC 306",
    chapter: "Chapter 14",
    text: "Which era of the AI-HCI relationship, spanning the 1990s-2010s, involved AI working invisibly through spam filters and recommendation engines, with users unaware AI was involved?",
    options: [
      "AI behind the interface",
      "AI as the interface",
      "AI as co-designer",
      "AI as the sole designer"
    ],
    correctAnswer: 0,
    explanation: "AI behind the interface, spanning the 1990s-2010s, involved AI working invisibly through spam filters and recommendation engines, with users experiencing outputs without knowing AI was involved.\n\nAI as the interface instead spans the 2010s-2020s, with voice assistants and chatbots moving AI into direct interaction, not invisible operation.\n\nAI as co-designer instead spans the 2020s onward, with generative AI creating content and interfaces directly, not working invisibly.\n\nAI as the sole designer is not one of the three named eras in this material."
  },
  {
    id: "csc306_ch14_002",
    course: "CSC 306",
    chapter: "Chapter 14",
    text: "Which era of the AI-HCI relationship, spanning the 2010s-2020s, involved voice assistants and chatbots moving AI into direct interaction that users talked to and trusted or distrusted explicitly?",
    options: [
      "AI as the interface",
      "AI behind the interface",
      "AI as co-designer",
      "AI as arbiter"
    ],
    correctAnswer: 0,
    explanation: "AI as the interface, spanning the 2010s-2020s, involved voice assistants like Siri and Alexa, and chatbots, moving AI into direct interaction that users talked to and trusted or distrusted explicitly.\n\nAI behind the interface instead spans the 1990s-2010s, with AI working invisibly, not through direct conversational interaction.\n\nAI as co-designer instead spans the 2020s onward, with generative AI creating content directly, a later era than voice assistants becoming mainstream.\n\nAI as arbiter is not one of the three named eras in this material."
  },
  {
    id: "csc306_ch14_003",
    course: "CSC 306",
    chapter: "Chapter 14",
    text: "The central HCI challenge of the 2020s is described as designing the experience of interacting with a system that cannot be fully what?",
    options: [
      "Predicted or controlled",
      "Purchased or licensed",
      "Advertised or marketed",
      "Patented or copyrighted"
    ],
    correctAnswer: 0,
    explanation: "The central HCI challenge of the 2020s is designing the experience of interacting with a system that cannot be fully predicted or controlled, given generative AI's unpredictable outputs.\n\nPurchasing or licensing is a business concern unrelated to this stated central design challenge.\n\nAdvertising or marketing is a business concern unrelated to this stated central design challenge.\n\nPatenting or copyrighting is a legal concern unrelated to this stated central design challenge."
  },
  {
    id: "csc306_ch14_004",
    course: "CSC 306",
    chapter: "Chapter 14",
    text: "Which type of conversational interface uses rule-based decision trees, predictable but brittle, best for narrow, repetitive tasks like FAQ handling?",
    options: [
      "Scripted chatbots",
      "NLP chatbots",
      "LLM assistants",
      "Voice agents"
    ],
    correctAnswer: 0,
    explanation: "Scripted chatbots use rule-based decision trees, predictable but brittle, failing outside their defined paths, best for narrow tasks like FAQ handling.\n\nNLP chatbots instead are trained on language to understand intent and entities, more flexible than a fixed decision tree.\n\nLLM assistants instead are open-ended and general-purpose, the opposite of a narrow, rule-based decision tree.\n\nVoice agents instead combine speech recognition, NLP, and synthesis, a different modality than a text-based decision tree."
  },
  {
    id: "csc306_ch14_005",
    course: "CSC 306",
    chapter: "Chapter 14",
    text: "Which type of conversational interface is trained on language to understand intent and entities, more flexible than scripted chatbots but still bounded by training data?",
    options: [
      "NLP chatbots",
      "Scripted chatbots",
      "LLM assistants",
      "Voice agents"
    ],
    correctAnswer: 0,
    explanation: "NLP chatbots are trained on language to understand intent and entities, more flexible than scripted chatbots, but still bounded by training data and requiring intent taxonomy design.\n\nScripted chatbots instead use rigid, rule-based decision trees, less flexible than NLP-based understanding.\n\nLLM assistants instead are open-ended and general-purpose, less bounded than a defined intent taxonomy.\n\nVoice agents instead combine speech recognition, NLP, and synthesis together, a broader category than text-based NLP chatbots alone."
  },
  {
    id: "csc306_ch14_006",
    course: "CSC 306",
    chapter: "Chapter 14",
    text: "Which type of conversational interface, such as GPT, Claude, and Gemini, is open-ended and general-purpose, but introduces challenges like hallucination and prompt injection?",
    options: [
      "LLM assistants",
      "Scripted chatbots",
      "NLP chatbots",
      "Voice agents"
    ],
    correctAnswer: 0,
    explanation: "LLM assistants, such as GPT, Claude, and Gemini, are open-ended and general-purpose, but introduce challenges like hallucination, inconsistency, and prompt injection.\n\nScripted chatbots instead use narrow, rule-based decision trees, the opposite of open-ended, general-purpose capability.\n\nNLP chatbots instead are bounded by a defined intent taxonomy, more limited than a general-purpose LLM.\n\nVoice agents instead focus on speech recognition and synthesis specifically, a different combination of challenges than hallucination and prompt injection."
  },
  {
    id: "csc306_ch14_007",
    course: "CSC 306",
    chapter: "Chapter 14",
    text: "Which recommendation for designing conversational UIs states that error recovery in conversation must feel human, not robotic?",
    options: [
      "A recommendation listed under Designing Conversational UIs",
      "A recommendation that applies only to typed chat interfaces",
      "A recommendation that applies only to voice interfaces",
      "A recommendation that contradicts all other guidance in this section"
    ],
    correctAnswer: 0,
    explanation: "This is one of the recommendations listed under Designing Conversational UIs, alongside designing for failure and providing clear affordances.\n\nRestricting it to typed chat only is not supported; the guidance applies broadly to conversational interfaces, spoken or typed.\n\nRestricting it to voice interfaces only is not supported; the guidance applies broadly to conversational interfaces generally.\n\nDescribing it as contradicting other guidance misrepresents it; it complements the other listed recommendations rather than conflicting with them."
  },
  {
    id: "csc306_ch14_008",
    course: "CSC 306",
    chapter: "Chapter 14",
    text: "Which adaptive or personalised interface type suggests content or products based on past behaviour, with the core challenge of balancing relevance with serendipity and avoiding filter bubbles?",
    options: [
      "Recommendation Systems",
      "Adaptive UI",
      "User Modelling",
      "Context-Aware Computing"
    ],
    correctAnswer: 0,
    explanation: "Recommendation Systems suggest content, products, or actions based on past behaviour, with the core challenge of balancing relevance with serendipity and avoiding filter bubbles, as with Netflix or Spotify.\n\nAdaptive UI instead reconfigures the interface itself based on observed usage, not suggesting external content.\n\nUser Modelling instead builds an internal model of the user's expertise and goals, a broader concept than content suggestions specifically.\n\nContext-Aware Computing instead uses sensor data like location and time, not past behaviour patterns for content suggestions."
  },
  {
    id: "csc306_ch14_009",
    course: "CSC 306",
    chapter: "Chapter 14",
    text: "Which adaptive interface type reconfigures itself based on observed usage, surfacing frequently used features while rarely used ones recede, such as Microsoft Office's adaptive menus?",
    options: [
      "Adaptive UI",
      "Recommendation Systems",
      "User Modelling",
      "Context-Aware Computing"
    ],
    correctAnswer: 0,
    explanation: "Adaptive UI reconfigures itself based on observed usage, surfacing frequently used features while rarely used ones recede, illustrated by Microsoft Office's adaptive menus and Gmail's Smart Reply.\n\nRecommendation Systems instead suggest external content or products, not reconfigure the interface's own layout.\n\nUser Modelling instead builds an internal model of user expertise and goals, a broader concept than surfacing frequently used features.\n\nContext-Aware Computing instead uses sensor data to infer context, not observed feature usage frequency."
  },
  {
    id: "csc306_ch14_010",
    course: "CSC 306",
    chapter: "Chapter 14",
    text: "Which adaptive interface type builds an internal model of the user's expertise level, preferences, and goals, with the risk that an incorrect, invisible model cannot be corrected by the user?",
    options: [
      "User Modelling",
      "Recommendation Systems",
      "Adaptive UI",
      "Context-Aware Computing"
    ],
    correctAnswer: 0,
    explanation: "User Modelling builds an internal model of the user's expertise level, preferences, and goals, with the risk that an incorrect, invisible model cannot be corrected by the user.\n\nRecommendation Systems instead suggest content based on past behaviour, a narrower application than a general user model.\n\nAdaptive UI instead reconfigures the interface layout based on usage, a specific application rather than a general internal model.\n\nContext-Aware Computing instead uses sensor data like location, a different input than an internal model of expertise and goals."
  },
  {
    id: "csc306_ch14_011",
    course: "CSC 306",
    chapter: "Chapter 14",
    text: "Which adaptive interface type uses sensor data such as location, time, and device to infer context, such as Maps suggesting nearby lunch spots?",
    options: [
      "Context-Aware Computing",
      "Recommendation Systems",
      "Adaptive UI",
      "User Modelling"
    ],
    correctAnswer: 0,
    explanation: "Context-Aware Computing uses sensor data such as location, time, device, and activity to infer context and adapt accordingly, illustrated by Maps suggesting nearby lunch spots.\n\nRecommendation Systems instead suggest content based on past behaviour patterns, not real-time sensor data.\n\nAdaptive UI instead reconfigures layout based on feature usage frequency, not sensor-inferred context.\n\nUser Modelling instead builds a model of expertise and preferences, a different input than real-time sensor data."
  },
  {
    id: "csc306_ch14_012",
    course: "CSC 306",
    chapter: "Chapter 14",
    text: "Which way that AI is changing the design process itself involves generating hundreds of concept variations and layouts, shifting the designer's role toward curation and critique?",
    options: [
      "Ideation partner",
      "Code generation",
      "User research synthesis",
      "Usability prediction"
    ],
    correctAnswer: 0,
    explanation: "Ideation partner involves AI generating hundreds of concept variations, layouts, and copy options, shifting the designer's role toward curation and critique.\n\nCode generation instead involves AI writing functional UI code from descriptions, a different stage of the process than early ideation.\n\nUser research synthesis instead involves AI transcribing interviews and clustering findings, a research stage rather than idea generation.\n\nUsability prediction instead involves AI predicting where users will look before testing, a validation stage rather than idea generation."
  },
  {
    id: "csc306_ch14_013",
    course: "CSC 306",
    chapter: "Chapter 14",
    text: "Which way that AI is changing the design process involves transcribing interviews, identifying themes, and generating personas from raw qualitative data?",
    options: [
      "User research synthesis",
      "Ideation partner",
      "Code generation",
      "Usability prediction"
    ],
    correctAnswer: 0,
    explanation: "User research synthesis involves AI transcribing interviews, identifying themes, clustering findings, and generating personas from raw qualitative data, though it can miss nuance.\n\nIdeation partner instead generates concept variations and layouts, not synthesis of research data.\n\nCode generation instead writes functional UI code, not synthesis of qualitative research.\n\nUsability prediction instead predicts where users will look and click, not synthesis of interview data."
  },
  {
    id: "csc306_ch14_014",
    course: "CSC 306",
    chapter: "Chapter 14",
    text: "Which way that AI is changing the design process trains models on eye-tracking and click data to predict where users will look before any users are tested?",
    options: [
      "Usability prediction",
      "Ideation partner",
      "Code generation",
      "User research synthesis"
    ],
    correctAnswer: 0,
    explanation: "Usability prediction trains models on eye-tracking and click data to predict where users will look and click before any users are tested, useful for early validation but not a replacement for real testing.\n\nIdeation partner instead generates concept variations, not predictions about where users will look.\n\nCode generation instead writes functional UI code, not predictions about visual attention.\n\nUser research synthesis instead processes qualitative interview data, not predictive eye-tracking modelling."
  },
  {
    id: "csc306_ch14_015",
    course: "CSC 306",
    chapter: "Chapter 14",
    text: "Which AI ethics issue is illustrated by a hiring algorithm trained on past hires rejecting future applicants who resemble past rejections?",
    options: [
      "Algorithmic bias",
      "Opacity & explainability",
      "Manipulation at scale",
      "Consent & data use"
    ],
    correctAnswer: 0,
    explanation: "Algorithmic bias is illustrated by a hiring algorithm trained on past hires rejecting future applicants who resemble past rejections, replicating historical inequities while presenting the outcome as neutral.\n\nOpacity & explainability instead concerns users being unable to understand why a decision was made, not the biased pattern itself.\n\nManipulation at scale instead concerns engagement-optimised systems exploiting emotional vulnerabilities, a different concern than biased hiring outcomes.\n\nConsent & data use instead concerns whether users meaningfully agree to data collection, not biased algorithmic outcomes."
  },
  {
    id: "csc306_ch14_016",
    course: "CSC 306",
    chapter: "Chapter 14",
    text: "Which AI ethics issue states that most users cannot understand why an AI made a decision, such as a rejected loan, and cannot challenge what they cannot see?",
    options: [
      "Opacity & explainability",
      "Algorithmic bias",
      "Manipulation at scale",
      "Accountability gaps"
    ],
    correctAnswer: 0,
    explanation: "Opacity & explainability states that most users cannot understand why an AI made a decision, such as a rejected loan, and cannot challenge what they cannot see, making explainable AI a UX problem.\n\nAlgorithmic bias instead concerns models replicating historical inequities, a related but distinct issue from a user's inability to see the reasoning.\n\nManipulation at scale instead concerns engagement-optimised systems exploiting emotional vulnerabilities, not the transparency of a single decision.\n\nAccountability gaps instead concerns diffuse responsibility when harm occurs, a related but distinct issue from explaining a specific decision."
  },
  {
    id: "csc306_ch14_017",
    course: "CSC 306",
    chapter: "Chapter 14",
    text: "Which AI ethics issue states that the interface design maximising watch time is not the same as the design that promotes wellbeing, since outrage spreads faster than calm?",
    options: [
      "Manipulation at scale",
      "Algorithmic bias",
      "Opacity & explainability",
      "Consent & data use"
    ],
    correctAnswer: 0,
    explanation: "Manipulation at scale states that the interface design maximising watch time is not the same as the design promoting wellbeing, since recommendation systems optimised for engagement exploit emotional vulnerabilities and outrage spreads faster than calm.\n\nAlgorithmic bias instead concerns replicating historical inequities in decisions, a different issue than engagement-driven emotional exploitation.\n\nOpacity & explainability instead concerns users being unable to understand a decision, not engagement optimisation.\n\nConsent & data use instead concerns whether consent is meaningfully informed, not engagement-driven emotional exploitation."
  },
  {
    id: "csc306_ch14_018",
    course: "CSC 306",
    chapter: "Chapter 14",
    text: "Which AI ethics issue states that the UI collecting consent is often designed to manufacture agreement rather than inform it, making dark patterns the norm?",
    options: [
      "Consent & data use",
      "Algorithmic bias",
      "Manipulation at scale",
      "Accountability gaps"
    ],
    correctAnswer: 0,
    explanation: "Consent & data use states that the UI collecting consent is often designed to manufacture agreement rather than inform it, making dark patterns the norm in consent flows.\n\nAlgorithmic bias instead concerns replicating historical inequities in model outputs, not the design of a consent interface.\n\nManipulation at scale instead concerns engagement optimisation exploiting emotional vulnerabilities, not consent interface design specifically.\n\nAccountability gaps instead concerns diffuse responsibility for harm, not the design of a consent interface."
  },
  {
    id: "csc306_ch14_019",
    course: "CSC 306",
    chapter: "Chapter 14",
    text: "Which AI ethics issue states that when an AI system causes harm, responsibility is diffuse across training data, model developers, the product team, and the deploying organisation?",
    options: [
      "Accountability gaps",
      "Algorithmic bias",
      "Opacity & explainability",
      "Manipulation at scale"
    ],
    correctAnswer: 0,
    explanation: "Accountability gaps states that when an AI system causes harm, responsibility is diffuse across training data, model developers, the product team, and the deploying organisation, and HCI practitioners are not neutral in this chain.\n\nAlgorithmic bias instead concerns the model replicating historical inequities, a distinct issue from who is responsible after harm occurs.\n\nOpacity & explainability instead concerns users being unable to see the reasoning behind a decision, a distinct issue from diffuse responsibility.\n\nManipulation at scale instead concerns engagement-driven exploitation, a distinct issue from diffuse responsibility for harm."
  },
  {
    id: "csc306_ch14_020",
    course: "CSC 306",
    chapter: "Chapter 14",
    text: "Which type of AI uncertainty describes large language models generating plausible but false information confidently?",
    options: [
      "Hallucination",
      "Confidence calibration",
      "Non-determinism",
      "Scope creep"
    ],
    correctAnswer: 0,
    explanation: "Hallucination describes large language models generating plausible but false information confidently, which is dangerous when the interface presents AI output as authoritative.\n\nConfidence calibration instead concerns a model expressing the same certainty for a confident answer and a mere guess, a related but distinct problem from false content itself.\n\nNon-determinism instead concerns the same prompt producing different outputs at different times, not false but confident content.\n\nScope creep instead concerns a system responding to inputs it is not appropriate for, a different problem than generating false information."
  },
  {
    id: "csc306_ch14_021",
    course: "CSC 306",
    chapter: "Chapter 14",
    text: "Which type of AI uncertainty describes a model expressing the same certainty about a 99% confident answer and a 55% guess, requiring the interface to communicate epistemic state?",
    options: [
      "Confidence calibration",
      "Hallucination",
      "Non-determinism",
      "Scope creep"
    ],
    correctAnswer: 0,
    explanation: "Confidence calibration describes a model expressing the same certainty about a 99% confident answer and a 55% guess, requiring the interface to communicate epistemic state, not just the answer.\n\nHallucination instead concerns generating plausible but false information, a distinct problem from mismatched confidence signalling.\n\nNon-determinism instead concerns the same prompt producing different outputs over time, a distinct problem from confidence signalling.\n\nScope creep instead concerns a system responding to inappropriate inputs, a distinct problem from confidence signalling."
  },
  {
    id: "csc306_ch14_022",
    course: "CSC 306",
    chapter: "Chapter 14",
    text: "Which type of AI uncertainty describes the same prompt producing different outputs at different times, surprising users who rely on software reproducibility?",
    options: [
      "Non-determinism",
      "Hallucination",
      "Confidence calibration",
      "Scope creep"
    ],
    correctAnswer: 0,
    explanation: "Non-determinism describes the same prompt producing different outputs at different times, surprising users who rely on the reproducibility they expect from traditional software.\n\nHallucination instead concerns generating plausible but false information, a distinct problem from output variability across runs.\n\nConfidence calibration instead concerns mismatched certainty signalling, a distinct problem from output variability across runs.\n\nScope creep instead concerns responding to inappropriate inputs, a distinct problem from output variability across runs."
  },
  {
    id: "csc306_ch14_023",
    course: "CSC 306",
    chapter: "Chapter 14",
    text: "Which type of AI uncertainty describes general-purpose systems responding to every input, including ones they are not appropriate for, requiring clear scope signalling?",
    options: [
      "Scope creep",
      "Hallucination",
      "Non-determinism",
      "Confidence calibration"
    ],
    correctAnswer: 0,
    explanation: "Scope creep describes general-purpose AI systems responding to every input, including ones they are not appropriate for, requiring clear scope signalling to prevent inappropriate questions.\n\nHallucination instead concerns generating plausible but false information, a distinct problem from responding outside an appropriate scope.\n\nNon-determinism instead concerns inconsistent outputs across runs, a distinct problem from responding outside an appropriate scope.\n\nConfidence calibration instead concerns mismatched certainty signalling, a distinct problem from responding outside an appropriate scope."
  },
  {
    id: "csc306_ch14_024",
    course: "CSC 306",
    chapter: "Chapter 14",
    text: "Which design strategy for AI uncertainty requires that if AI makes a suggestion, correction must be one action away, with zero friction to override, edit, or reject?",
    options: [
      "Always-visible correction path",
      "Disclose confidence levels",
      "Human-in-the-loop for high stakes",
      "Transparent sourcing"
    ],
    correctAnswer: 0,
    explanation: "Always-visible correction path requires that if AI makes a suggestion, correction must be one action away, with zero friction for the user to override, edit, or reject it.\n\nDisclose confidence levels instead concerns showing uncertainty visually through hedged language or probability ranges, not the correction mechanism itself.\n\nHuman-in-the-loop for high stakes instead concerns requiring human review before action in domains like medical diagnosis, a different strategy.\n\nTransparent sourcing instead concerns linking AI outputs to their sources, not the correction mechanism itself."
  },
  {
    id: "csc306_ch14_025",
    course: "CSC 306",
    chapter: "Chapter 14",
    text: "Which design strategy for AI uncertainty requires human review of AI output before action in domains like medical diagnosis, legal advice, and financial decisions?",
    options: [
      "Human-in-the-loop for high stakes",
      "Disclose confidence levels",
      "Always-visible correction path",
      "Graceful degradation"
    ],
    correctAnswer: 0,
    explanation: "Human-in-the-loop for high stakes requires human review of AI output before action in domains like medical diagnosis, legal advice, and financial decisions, enforced by the interface, not just suggested.\n\nDisclose confidence levels instead concerns showing uncertainty visually, a different strategy than mandatory human review.\n\nAlways-visible correction path instead concerns making correction one action away, a different strategy than mandatory review before any action.\n\nGraceful degradation instead concerns offering alternatives when confidence is low, a different strategy than mandatory human review."
  },
  {
    id: "csc306_ch14_026",
    course: "CSC 306",
    chapter: "Chapter 14",
    text: "Which design strategy for AI uncertainty states that when confidence is below a threshold, the system should offer alternatives like search or human help rather than guessing confidently?",
    options: [
      "Graceful degradation",
      "Transparent sourcing",
      "Disclose confidence levels",
      "Human-in-the-loop for high stakes"
    ],
    correctAnswer: 0,
    explanation: "Graceful degradation states that when confidence is below a threshold, the system should say so and offer alternatives, such as search or human help, rather than guessing confidently.\n\nTransparent sourcing instead concerns linking outputs to their sources so users can verify them, a different strategy than offering fallback alternatives.\n\nDisclose confidence levels instead concerns showing uncertainty visually through hedged language, a related but distinct strategy from offering fallback alternatives.\n\nHuman-in-the-loop for high stakes instead concerns mandatory review in high-stakes domains, a different strategy than offering fallback alternatives generally."
  },
  {
    id: "csc306_ch14_027",
    course: "CSC 306",
    chapter: "Chapter 14",
    text: "On the Automation Spectrum, which point is illustrated by autocomplete, spell-check, and recommendation carousels, where AI recommends but the human decides?",
    options: [
      "AI suggests",
      "Full human control",
      "AI acts, human confirms",
      "Full AI control"
    ],
    correctAnswer: 0,
    explanation: "AI suggests is illustrated by autocomplete, spell-check, and recommendation carousels, where AI recommends but the human decides.\n\nFull human control instead means AI provides no assistance at all, the opposite end of the spectrum from AI-generated suggestions.\n\nAI acts, human confirms instead means AI executes but waits for approval, such as a drafted email before sending, a step further than mere suggestion.\n\nFull AI control instead means AI acts without human involvement at all, the opposite end of the spectrum from human-decided suggestions."
  },
  {
    id: "csc306_ch14_028",
    course: "CSC 306",
    chapter: "Chapter 14",
    text: "On the Automation Spectrum, which point is illustrated by smart reply drafts and AI-written emails that wait for approval before sending?",
    options: [
      "AI acts, human confirms",
      "AI suggests",
      "AI acts, human monitors",
      "Full AI control"
    ],
    correctAnswer: 0,
    explanation: "AI acts, human confirms is illustrated by smart reply drafts and AI-written emails that execute but wait for approval before sending.\n\nAI suggests instead means AI only recommends, such as autocomplete, without pre-drafting a full action awaiting approval.\n\nAI acts, human monitors instead means AI executes automatically, with the human only able to override afterward, such as autopilot, not waiting for upfront approval.\n\nFull AI control instead means AI acts entirely without human involvement, not waiting for any approval step."
  },
  {
    id: "csc306_ch14_029",
    course: "CSC 306",
    chapter: "Chapter 14",
    text: "On the Automation Spectrum, which point is illustrated by autopilot, spam filters, and fraud detection, where AI executes automatically but the human can override?",
    options: [
      "AI acts, human monitors",
      "AI suggests",
      "AI acts, human confirms",
      "Full human control"
    ],
    correctAnswer: 0,
    explanation: "AI acts, human monitors is illustrated by autopilot, spam filters, and fraud detection, where AI executes automatically and the human can override rather than pre-approve.\n\nAI suggests instead means AI only recommends without acting, a lower level of automation than automatic execution.\n\nAI acts, human confirms instead means AI waits for approval before acting, the opposite order from acting first and allowing monitoring.\n\nFull human control instead means AI provides no assistance at all, the opposite end of the spectrum from automatic AI execution."
  },
  {
    id: "csc306_ch14_030",
    course: "CSC 306",
    chapter: "Chapter 14",
    text: "Which key design decision in human-AI systems concerns defining triggers carefully, since uninvited AI intervention during focus states degrades performance and trust?",
    options: [
      "When should AI intervene?",
      "How visible is the AI's role?",
      "Who is responsible for AI errors?",
      "How much does the AI system cost to run?"
    ],
    correctAnswer: 0,
    explanation: "When should AI intervene concerns defining triggers carefully, since uninvited AI intervention during a user's focus states degrades performance and trust.\n\nHow visible is the AI's role instead concerns whether users know AI is involved, which changes how they calibrate trust, a related but distinct decision.\n\nWho is responsible for AI errors instead concerns making the accountability chain legible, a related but distinct decision from timing of intervention.\n\nRunning cost is a technical and business concern, not one of the three key design decisions listed in this material."
  },
  {
    id: "csc306_ch14_031",
    course: "CSC 306",
    chapter: "Chapter 14",
    text: "Which emerging area in the Road Ahead is illustrated by Neuralink and others moving from research to clinical deployment, bypassing motor constraints entirely?",
    options: [
      "Brain-Computer Interfaces",
      "Spatial Computing",
      "Ambient Intelligence",
      "Multimodal AI"
    ],
    correctAnswer: 0,
    explanation: "Brain-Computer Interfaces are illustrated by Neuralink and others moving from research to clinical deployment, bypassing motor constraints entirely and raising profound ethical questions.\n\nSpatial Computing instead is illustrated by AR/VR/MR dissolving the boundary between digital and physical space, not direct neural interfaces.\n\nAmbient Intelligence instead is illustrated by computing embedded in the environment, such as smart cities, not direct neural interfaces.\n\nMultimodal AI instead is illustrated by interfaces understanding voice, gesture, gaze, and expression together, not direct neural interfaces."
  },
  {
    id: "csc306_ch14_032",
    course: "CSC 306",
    chapter: "Chapter 14",
    text: "Which emerging area in the Road Ahead observes that the majority of future internet users are in Africa, South Asia, and Southeast Asia, representing an enormous design opportunity?",
    options: [
      "Global South Contexts",
      "Ambient Intelligence",
      "Spatial Computing",
      "Personalised Medicine UX"
    ],
    correctAnswer: 0,
    explanation: "Global South Contexts notes that the majority of future internet users are in Africa, South Asia, and Southeast Asia, whose devices, connectivity, and needs are not the template used by most HCI research, representing an enormous design opportunity.\n\nAmbient Intelligence instead concerns computing embedded in the environment like smart cities, not global user demographics.\n\nSpatial Computing instead concerns AR/VR/MR dissolving digital and physical boundaries, not global user demographics.\n\nPersonalised Medicine UX instead concerns wearables, genomics, and health AI, not global user demographics."
  },
  {
    id: "csc306_ch14_033",
    course: "CSC 306",
    chapter: "Chapter 14",
    text: "GOMS stands for Goals, Operators, Methods, and Selection rules, used to predict task completion times.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "This statement is true. GOMS stands for Goals, Operators, Methods, and Selection rules, and is attributed to Card, Moran, and Newell in 1983 to predict task completion times."
  },
  {
    id: "csc306_ch14_034",
    course: "CSC 306",
    chapter: "Chapter 14",
    text: "Which of Nielsen's 10 heuristics calls for using words, phrases, and concepts familiar to the user, following real-world conventions?",
    options: [
      "Match Between System & Real World",
      "Visibility of System Status",
      "Consistency & Standards",
      "Help & Documentation"
    ],
    correctAnswer: 0,
    explanation: "Match Between System & Real World calls for using words, phrases, and concepts familiar to the user, following real-world conventions and presenting information in a natural logical order.\n\nVisibility of System Status instead calls for keeping users informed via timely feedback, not familiar wording.\n\nConsistency & Standards instead calls for following platform and industry conventions so words mean the same thing, a related but distinct heuristic from real-world familiarity.\n\nHelp & Documentation instead calls for searchable, task-focused help, not familiar wording."
  },
  {
    id: "csc306_ch14_035",
    course: "CSC 306",
    chapter: "Chapter 14",
    text: "Which of the following accurately describes a design implication of a law discussed in cognitive ergonomics?",
    options: [
      "Hick's Law favours progressive disclosure to reduce the number of choices shown at once",
      "Fitts's Law recommends making critical targets as small as possible to save space",
      "All of these",
      "None of these"
    ],
    correctAnswer: 0,
    explanation: "Hick's Law favouring progressive disclosure to reduce the number of choices shown at once is stated directly, since decision time rises with choice count. Fitts's Law instead recommends making critical targets large, not small, since larger targets are faster and easier to acquire. Since only the Hick's Law statement is accurate, that is the correct answer."
  },
  {
    id: "csc306_ch14_036",
    course: "CSC 306",
    chapter: "Chapter 14",
    text: "Which physical ergonomics design consideration recommends placing frequently used controls within the natural reach envelope, not at the arm's extremes?",
    options: [
      "Reach zones",
      "Target sizes",
      "Weight distribution",
      "Environmental context"
    ],
    correctAnswer: 0,
    explanation: "Reach zones recommends placing frequently used controls within the natural reach envelope, not at the arm's extremes, reducing strain from overreaching.\n\nTarget sizes instead concerns minimum tap dimensions like 9mm, not the spatial placement of controls.\n\nWeight distribution instead concerns balancing a handheld device's weight, not control placement.\n\nEnvironmental context instead concerns conditions like sunlight or gloves, not control placement within reach."
  },
  {
    id: "csc306_ch14_037",
    course: "CSC 306",
    chapter: "Chapter 14",
    text: "Sensory memory is described as lasting longer than working memory before information fades.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "This statement is false. Sensory memory lasts less than one second, while working memory lasts 15 to 30 seconds, meaning sensory memory is actually much shorter-lived, not longer."
  },
  {
    id: "csc306_ch14_038",
    course: "CSC 306",
    chapter: "Chapter 14",
    text: "Before committing to an input or output modality, asking how long the session will be helps designers account for what factor?",
    options: [
      "Fatigue, posture, and cognitive load tolerance over short bursts versus extended use",
      "The exact retail price the hardware manufacturer will charge",
      "The number of employees the company has hired that year",
      "The specific font used in the company's promotional materials"
    ],
    correctAnswer: 0,
    explanation: "Asking how long the session will be helps account for fatigue, posture, and cognitive load tolerance, since short bursts versus extended use changes everything about these factors.\n\nHardware retail price is a business detail unrelated to session length considerations.\n\nEmployee headcount is a business detail unrelated to session length considerations.\n\nPromotional material fonts are a branding detail unrelated to session length considerations."
  },
  {
    id: "csc306_ch14_039",
    course: "CSC 306",
    chapter: "Chapter 14",
    text: "Which of the following is an accurate description of WCAG conformance levels?",
    options: [
      "Level A removes the most severe barriers and is required for legal compliance in many jurisdictions",
      "Level AA is the standard target covering the vast majority of users with disabilities",
      "All of these",
      "None of these"
    ],
    correctAnswer: 2,
    explanation: "Both statements are accurate. Level A removes the most severe barriers and is required for legal compliance in many jurisdictions. Level AA is separately described as the standard target, covering the vast majority of users with disabilities and required by most accessibility laws worldwide. Since both are correct, the answer is that both apply."
  },
  {
    id: "csc306_ch14_040",
    course: "CSC 306",
    chapter: "Chapter 14",
    text: "The F-Pattern eye-tracking finding suggests that critical information should be placed where on a page, and avoided where?",
    options: [
      "Along the top and left, avoiding the bottom-right corner",
      "Exclusively in the exact center of the page, avoiding all edges",
      "Only inside the page footer, avoiding the header entirely",
      "Randomly distributed, since scan patterns cannot be predicted"
    ],
    correctAnswer: 0,
    explanation: "The F-Pattern suggests placing critical information along the top and down the left side, since users scan in an F-shape, avoiding the bottom-right corner where attention is weakest.\n\nRestricting placement to the exact center avoiding all edges misrepresents the F-shaped scan, which follows top and left edges specifically.\n\nRestricting placement to the footer only avoiding the header contradicts the F-Pattern, which emphasizes the top of the page first.\n\nRandom distribution contradicts the entire premise of the F-Pattern, which is a predictable, studied scanning behaviour."
  },
  {
    id: "csc306_ch14_041",
    course: "CSC 306",
    chapter: "Chapter 14",
    text: "The Z-Pattern eye-tracking pattern is recommended for dense, content-heavy pages rather than sparse layouts like landing pages.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "This statement is false. The Z-Pattern is recommended for sparse layouts, such as landing pages and posters, while the F-Pattern is the one associated with denser, content-heavy pages."
  },
  {
    id: "csc306_ch14_042",
    course: "CSC 306",
    chapter: "Chapter 14",
    text: "Requiring first-time users to complete their first order without consulting documentation is an example of which type of design requirement?",
    options: [
      "User Experience Requirements",
      "Functional Requirements",
      "Organisational Requirements",
      "Non-Functional Requirements"
    ],
    correctAnswer: 0,
    explanation: "This is an example of User Experience Requirements, which describe qualities of the interaction itself, such as learnability, illustrated by first-time users completing an order without documentation.\n\nFunctional Requirements instead describe what the system must do, such as filtering orders, not the learnability quality of the experience.\n\nOrganisational Requirements instead describe legal or business constraints, not learnability.\n\nNon-Functional Requirements instead describe measurable performance like load time, not learnability specifically."
  },
  {
    id: "csc306_ch14_043",
    course: "CSC 306",
    chapter: "Chapter 14",
    text: "Which of the following accurately describes a component of a persona?",
    options: [
      "Tech literacy records the user's exact home postal address",
      "A quote records the user's blood type for medical purposes",
      "All of these",
      "None of these"
    ],
    correctAnswer: 3,
    explanation: "Neither statement is accurate. Tech literacy instead records comfort level with technology, not a postal address. A quote instead captures a real or composite phrase representing the user's voice, not medical information like blood type. Since both statements are inaccurate, none of these applies."
  },
  {
    id: "csc306_ch14_044",
    course: "CSC 306",
    chapter: "Chapter 14",
    text: "Which reason for iterating states that users, technology, and business contexts shift, so an iterative process accommodates change rather than resisting it?",
    options: [
      "Requirements change",
      "Cheaper to fix early",
      "Design is discovery",
      "Failure is cheap on paper"
    ],
    correctAnswer: 0,
    explanation: "Requirements change states that users, technology, and business contexts shift, and iterative design accommodates this change rather than resisting it.\n\nCheaper to fix early instead concerns the rising cost of errors found later, a different reason than shifting context.\n\nDesign is discovery instead concerns learning the actual problem by trying to solve it, a different reason than shifting context.\n\nFailure is cheap on paper instead concerns the low cost of a failed sketch versus a failed deployed feature, a different reason than shifting context."
  },
  {
    id: "csc306_ch14_045",
    course: "CSC 306",
    chapter: "Chapter 14",
    text: "User Modelling risks producing a bad experience specifically because an incorrect, invisible model cannot be corrected by the user.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "This statement is true. User Modelling's risk is stated directly: incorrect models produce a bad experience, and invisible models cannot be corrected by the user since they do not know the model exists."
  },
  {
    id: "csc306_ch14_046",
    course: "CSC 306",
    chapter: "Chapter 14",
    text: "Which issue severity level from prototype testing means users complete the task, but only with significant difficulty or error, prioritised in the next iteration?",
    options: [
      "Serious",
      "Critical",
      "Minor",
      "Positive"
    ],
    correctAnswer: 0,
    explanation: "Serious means users complete the task with significant difficulty or error, prioritised in the next iteration, one level below Critical.\n\nCritical instead means users cannot complete the primary task at all, a more severe outcome than completing it with difficulty.\n\nMinor instead means users succeed but express confusion or frustration, a less severe outcome than significant difficulty or error.\n\nPositive instead documents things that worked well, not a problem of any severity."
  },
  {
    id: "csc306_ch14_047",
    course: "CSC 306",
    chapter: "Chapter 14",
    text: "Which of the following accurately describes a point on the Automation Spectrum?",
    options: [
      "Full human control means AI provides no assistance at all",
      "Full AI control is described as common in the majority of everyday consumer products today",
      "All of these",
      "None of these"
    ],
    correctAnswer: 0,
    explanation: "Full human control meaning AI provides no assistance at all is stated directly, representing total human control with high cognitive load. Full AI control is instead described as rare and high-risk outside very narrow, tested domains, the opposite of being common in everyday products. Since only the Full human control statement is accurate, that is the correct answer."
  },
  {
    id: "csc306_ch14_048",
    course: "CSC 306",
    chapter: "Chapter 14",
    text: "Which of the following is an example of a positively worded SUS statement?",
    options: [
      "I thought the various functions in this system were well integrated",
      "I found the system unnecessarily complex",
      "I would need support to use this system",
      "I found the system very cumbersome to use"
    ],
    correctAnswer: 0,
    explanation: "'I found the various functions in this system were well integrated' is one of the five positively worded, odd-numbered SUS statements.\n\n'I found the system unnecessarily complex' is instead one of the five negatively worded, even-numbered statements.\n\n'I would need support to use this system' is instead one of the five negatively worded, even-numbered statements.\n\n'I found the system very cumbersome to use' is instead one of the five negatively worded, even-numbered statements."
  },
  {
    id: "csc306_ch14_049",
    course: "CSC 306",
    chapter: "Chapter 14",
    text: "Automated accessibility audit tools alone are sufficient to fully certify that a product is accessible, with no further testing required.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "This statement is false. Automated tools catch only about 30% of accessibility issues, and cannot detect poor alt text quality, logical reading order problems, or cognitive complexity, meaning human testing is still required."
  },
  {
    id: "csc306_ch14_050",
    course: "CSC 306",
    chapter: "Chapter 14",
    text: "Which WCAG success criterion, 3.3.1 at level A, requires errors to be identified in text, stating which field is wrong and why?",
    options: [
      "Error identification",
      "Contrast (minimum)",
      "Focus visible",
      "Keyboard"
    ],
    correctAnswer: 0,
    explanation: "Error identification, success criterion 3.3.1 at level A, requires errors to be identified in text, not colour alone, stating which field is wrong and why.\n\nContrast (minimum) instead requires specific colour contrast ratios, not error message wording.\n\nFocus visible instead requires visible keyboard focus outlines, not error message wording.\n\nKeyboard instead requires operability without a mouse, not error message wording."
  },
  {
    id: "csc306_ch14_051",
    course: "CSC 306",
    chapter: "Chapter 14",
    text: "Which of the following is a recommended checkout design principle?",
    options: [
      "Multiple payment options should be offered, since fewer options mean fewer completed purchases",
      "A persistent order summary should let users see what they are buying throughout checkout",
      "All of these",
      "None of these"
    ],
    correctAnswer: 2,
    explanation: "Both statements are accurate. Multiple payment options should be offered, since fewer payment options mean fewer completed purchases. A persistent order summary should separately let users see what they are buying throughout checkout, removed only on the final confirmation step. Since both are correct, the answer is that both apply."
  },
  {
    id: "csc306_ch14_052",
    course: "CSC 306",
    chapter: "Chapter 14",
    text: "Which WCAG success criterion, 4.1.2 at level A, requires all UI components to have an accessible name, role, and state via HTML or ARIA?",
    options: [
      "Name, role, value",
      "Non-text content",
      "Contrast (minimum)",
      "Error identification"
    ],
    correctAnswer: 0,
    explanation: "Name, role, value, success criterion 4.1.2 at level A, requires all UI components to have an accessible name, role, and state via HTML or ARIA.\n\nNon-text content instead requires alt text for images, not component name, role, and state.\n\nContrast (minimum) instead requires specific colour contrast ratios, not component name, role, and state.\n\nError identification instead requires text-based error identification, not component name, role, and state."
  },
  {
    id: "csc306_ch14_053",
    course: "CSC 306",
    chapter: "Chapter 14",
    text: "The Purple Pound figure of 274 billion pounds is described as representing disabled people's annual spending power in the UK alone.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "This statement is true. The Purple Pound is explicitly described as the annual spending power of disabled people in the UK alone, cited as part of the market expansion case for inclusive design."
  },
  {
    id: "csc306_ch14_054",
    course: "CSC 306",
    chapter: "Chapter 14",
    text: "Which category of disability is illustrated by blindness, deafness, or paralysis, conditions that are ongoing rather than expected to resolve?",
    options: [
      "Permanent",
      "Temporary",
      "Situational",
      "Organisational"
    ],
    correctAnswer: 0,
    explanation: "Permanent disability is illustrated by conditions like blindness, deafness, or paralysis, which are ongoing rather than expected to resolve.\n\nTemporary disability instead is illustrated by conditions like a broken arm or post-surgery recovery, expected to resolve over time.\n\nSituational disability instead is illustrated by conditions like bright sunlight or one hand occupied, arising from context rather than the body.\n\nOrganisational is not one of the three named disability duration categories in this material."
  },
  {
    id: "csc306_ch14_055",
    course: "CSC 306",
    chapter: "Chapter 14",
    text: "Which of the following accurately describes a Core Web Vital metric?",
    options: [
      "LCP measures how much content shifts unexpectedly during page load",
      "FID targets a response time of 2.5 seconds or less to the first interaction",
      "All of these",
      "None of these"
    ],
    correctAnswer: 3,
    explanation: "Neither statement is accurate. LCP actually measures how quickly the main content loads, not layout shift, which is instead measured by CLS. FID instead targets a response of 100 milliseconds or less, not 2.5 seconds, which is instead the LCP target. Since both statements are inaccurate, none of these applies."
  },
  {
    id: "csc306_ch14_056",
    course: "CSC 306",
    chapter: "Chapter 14",
    text: "Which of the Four Components of Information Architecture concerns how users find specific content when browsing fails, including query formulation and filter design?",
    options: [
      "Search systems",
      "Organisation systems",
      "Labelling systems",
      "Navigation systems"
    ],
    correctAnswer: 0,
    explanation: "Search systems concern how users find specific content when browsing fails, with query formulation, result display, and filter design determining whether search works in practice.\n\nOrganisation systems instead concern how content is categorised and structured, not the act of searching.\n\nLabelling systems instead concern the words used for categories and links, not the act of searching.\n\nNavigation systems instead concern how users move through content via menus and breadcrumbs, not the act of searching directly."
  },
  {
    id: "csc306_ch14_057",
    course: "CSC 306",
    chapter: "Chapter 14",
    text: "Voice agents combine speech recognition, natural language processing, and synthesis, and introduce acoustic design challenges suited to ambient and hands-free contexts.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "This statement is true. Voice agents combine speech recognition, NLP, and synthesis, adding acoustic design challenges, with ambient computing and hands-free contexts defining their use cases."
  },
  {
    id: "csc306_ch14_058",
    course: "CSC 306",
    chapter: "Chapter 14",
    text: "In the e-commerce funnel, roughly what percentage of users reach the Browse stage, covering product listings, search, filters, and categories?",
    options: [
      "About 60%",
      "About 100%",
      "About 30%",
      "About 8%"
    ],
    correctAnswer: 0,
    explanation: "Roughly 60% of users are estimated to reach the Browse stage, covering product listings, search, filters, and categories.\n\nAbout 100% instead represents the Awareness stage at the very top of the funnel, before any browsing occurs.\n\nAbout 30% instead represents the Product View stage, later in the funnel than Browse.\n\nAbout 8% instead represents the Checkout stage, much later in the funnel than Browse."
  },
  {
    id: "csc306_ch14_059",
    course: "CSC 306",
    chapter: "Chapter 14",
    text: "Which of the following accurately describes an AI ethics issue discussed in relation to HCI?",
    options: [
      "Algorithmic bias occurs when models trained on historical data replicate historical inequities",
      "Opacity and explainability means AI decisions are always fully transparent to users by default",
      "All of these",
      "None of these"
    ],
    correctAnswer: 0,
    explanation: "Algorithmic bias occurring when models trained on historical data replicate historical inequities is stated directly, illustrated by a hiring algorithm rejecting applicants like past rejections. Opacity and explainability instead states that most users cannot understand why an AI made a decision, the opposite of decisions being fully transparent by default. Since only the algorithmic bias statement is accurate, that is the correct answer."
  }
];

export default csc306Lecture10AiQuestions;
