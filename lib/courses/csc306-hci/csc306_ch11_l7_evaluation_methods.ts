import { QuestionV2 } from "@/lib/quiz-types";

const csc306Lecture7EvaluationQuestions: QuestionV2[] = [
  {
    id: "csc306_ch11_001",
    course: "CSC 306",
    chapter: "Chapter 11",
    text: "Per the Nielsen 2000 statistic cited, roughly what percentage of usability problems are found by testing with just 5 users?",
    options: [
      "85%", "25%", "50%", "99%"
    ],
    correctAnswer: 0,
    explanation: "The Nielsen 2000 statistic cited states that 85% of usability problems are found by testing with just 5 users.\n\n25% substantially understates the cited figure for this usability testing statistic.\n\n50% also understates the cited figure for this usability testing statistic.\n\n99% overstates the cited figure for this usability testing statistic."
  },
  {
    id: "csc306_ch11_002",
    course: "CSC 306",
    chapter: "Chapter 11",
    text: "Which reason evaluation matters states that data from testing gives you something to show stakeholders who want to change something that already works?",
    options: [
      "Evaluation protects the design decision",
      "Design assumptions fail on contact with users",
      "Usability problems compound",
      "It drives the iteration cycle"
    ],
    correctAnswer: 0,
    explanation: "Evaluation protects the design decision, since data from testing gives you something to show stakeholders who want to change something that works, with evidence beating opinion.\n\nDesign assumptions fail on contact with users instead concerns discovering what seems obvious to a designer is not obvious to a user, a different reason.\n\nUsability problems compound instead concerns how confused users create errors that breed workarounds, a different reason.\n\nIt drives the iteration cycle instead concerns evaluation being the engine of improvement, a different reason from defending a decision to stakeholders."
  },
  {
    id: "csc306_ch11_003",
    course: "CSC 306",
    chapter: "Chapter 11",
    text: "Which evaluation method is described as user-based and formative, where real users attempt real tasks, called the gold standard for discovering usability problems?",
    options: [
      "Usability Testing",
      "Heuristic Evaluation",
      "Cognitive Walkthrough",
      "A/B Testing"
    ],
    correctAnswer: 0,
    explanation: "Usability Testing is user-based and formative, where real users attempt real tasks, described as the gold standard for discovering usability problems.\n\nHeuristic Evaluation instead is expert-based and formative, with trained evaluators inspecting against principles, not real users attempting tasks.\n\nCognitive Walkthrough instead is expert-based and formative, simulating a user's thought process, not real users performing tasks.\n\nA/B Testing instead is user-based but summative, comparing two versions rather than discovering problems through direct task attempts."
  },
  {
    id: "csc306_ch11_004",
    course: "CSC 306",
    chapter: "Chapter 11",
    text: "Which evaluation method is expert-based and formative, involving trained evaluators inspecting an interface against a set of usability principles?",
    options: [
      "Heuristic Evaluation",
      "Usability Testing",
      "A/B Testing",
      "SUS / UMUX"
    ],
    correctAnswer: 0,
    explanation: "Heuristic Evaluation is expert-based and formative, with trained evaluators inspecting an interface against a set of usability principles.\n\nUsability Testing instead is user-based, with real users attempting tasks, not experts inspecting against principles.\n\nA/B Testing instead is user-based and summative, comparing two versions, not expert inspection.\n\nSUS / UMUX instead is user-based and summative, a standardised questionnaire, not expert inspection."
  },
  {
    id: "csc306_ch11_005",
    course: "CSC 306",
    chapter: "Chapter 11",
    text: "Which evaluation method is user-based and summative, comparing two versions shown to different users simultaneously by comparing performance metrics?",
    options: [
      "A/B Testing",
      "Heuristic Evaluation",
      "Cognitive Walkthrough",
      "Think-Aloud Protocol"
    ],
    correctAnswer: 0,
    explanation: "A/B Testing is user-based and summative, showing two versions to different users simultaneously and comparing performance metrics.\n\nHeuristic Evaluation instead is expert-based and formative, not a comparison of two live versions with users.\n\nCognitive Walkthrough instead is expert-based and formative, simulating a user's thought process, not a live comparison test.\n\nThink-Aloud Protocol instead is user-based but formative, having users narrate their thoughts, not comparing two versions."
  },
  {
    id: "csc306_ch11_006",
    course: "CSC 306",
    chapter: "Chapter 11",
    text: "In the usability testing process, which step involves briefing the participant, obtaining informed consent, and reassuring them they are testing the system, not themselves?",
    options: [
      "Welcome & consent",
      "Warm-up questions",
      "Task completion",
      "Post-session debrief"
    ],
    correctAnswer: 0,
    explanation: "Welcome & consent involves briefing the participant, obtaining informed consent for recording, and reassuring them they are testing the system, not themselves.\n\nWarm-up questions instead asks about background and technology habits, a step after the initial welcome and consent.\n\nTask completion instead presents realistic tasks one at a time, a later step than the initial welcome.\n\nPost-session debrief instead asks open questions and completes questionnaires, the final step, not the opening one."
  },
  {
    id: "csc306_ch11_007",
    course: "CSC 306",
    chapter: "Chapter 11",
    text: "In the usability testing process, which step prompts participants to verbalise their thinking and expectations as they interact?",
    options: [
      "Think-aloud narration",
      "Welcome & consent",
      "Warm-up questions",
      "Post-session debrief"
    ],
    correctAnswer: 0,
    explanation: "Think-aloud narration prompts participants to verbalise their thinking and expectations as they interact, revealing assumptions and mental models in real time.\n\nWelcome & consent instead is the opening step of briefing and obtaining consent, not narration during a task.\n\nWarm-up questions instead asks about background and habits, a step before tasks begin, not narration during them.\n\nPost-session debrief instead asks open questions after the task is complete, not narration during the task itself."
  },
  {
    id: "csc306_ch11_008",
    course: "CSC 306",
    chapter: "Chapter 11",
    text: "Which mode of usability testing is scalable to hundreds of participants and lower cost per session, but offers no ability to probe or clarify?",
    options: [
      "Unmoderated",
      "Moderated",
      "Contextual",
      "Longitudinal"
    ],
    correctAnswer: 0,
    explanation: "Unmoderated testing is scalable to hundreds of participants and lower cost per session, but offers no ability to probe or clarify responses.\n\nModerated testing instead allows real-time clarification and rich qualitative data, but is time-intensive with typically smaller sample sizes.\n\nContextual is not one of the two named usability testing modes in this material; it instead describes a separate research method.\n\nLongitudinal is not one of the two named usability testing modes in this material; it instead describes diary study research."
  },
  {
    id: "csc306_ch11_009",
    course: "CSC 306",
    chapter: "Chapter 11",
    text: "Which mode of usability testing offers rich qualitative data and real-time clarification, but is time-intensive and may be biased by facilitator presence?",
    options: [
      "Moderated",
      "Unmoderated",
      "Automated",
      "Remote-only"
    ],
    correctAnswer: 0,
    explanation: "Moderated testing offers rich qualitative data and real-time clarification, but is time-intensive to run and analyse, and facilitator presence may bias results.\n\nUnmoderated testing instead scales to hundreds of participants at lower cost, but with no ability to probe or clarify, the opposite tradeoff.\n\nAutomated is not one of the two named usability testing modes in this material.\n\nRemote-only is not one of the two named usability testing modes in this material; unmoderated testing is the closer match but not the exact term used."
  },
  {
    id: "csc306_ch11_010",
    course: "CSC 306",
    chapter: "Chapter 11",
    text: "In the heuristic evaluation process, why does each evaluator inspect the interface alone, typically for 1 to 2 hours?",
    options: [
      "Independence prevents anchoring bias",
      "It is a legal requirement in most jurisdictions",
      "Group inspection is technically impossible to arrange",
      "Solo inspection is always faster than group inspection"
    ],
    correctAnswer: 0,
    explanation: "Each evaluator inspects the interface alone because independence prevents anchoring bias, ensuring findings are not skewed by hearing another evaluator's opinion first.\n\nLegal requirement is not the reasoning given for independent evaluation in this material.\n\nGroup inspection being technically impossible is not the reasoning given; the debrief stage explicitly involves a group session later.\n\nSpeed alone is not the stated reasoning; the explicit reason given is avoiding anchoring bias."
  },
  {
    id: "csc306_ch11_011",
    course: "CSC 306",
    chapter: "Chapter 11",
    text: "On Nielsen's Severity Scale for heuristic evaluation, which rating represents a catastrophic problem where users cannot complete the primary task, a release-blocker?",
    options: [
      "4", "1", "2", "0"
    ],
    correctAnswer: 0,
    explanation: "A rating of 4 on Nielsen's Severity Scale represents a catastrophic problem, where users cannot complete the primary task, making it a release-blocker.\n\nA rating of 1 instead represents a cosmetic-only problem, fixed if time allows, far less severe than catastrophic.\n\nA rating of 2 instead represents a minor problem causing friction that users can recover from unaided.\n\nA rating of 0 instead means evaluators disagree that this is a usability problem at all."
  },
  {
    id: "csc306_ch11_012",
    course: "CSC 306",
    chapter: "Chapter 11",
    text: "On Nielsen's Severity Scale, a rating of 3 represents which level of problem?",
    options: [
      "Major problem, impeding task completion, which must be fixed before release",
      "Cosmetic only, fixed if time allows",
      "Not a problem at all, disagreed upon by evaluators",
      "Catastrophic, a release-blocker"
    ],
    correctAnswer: 0,
    explanation: "A rating of 3 represents a major problem that impedes task completion and must be fixed before release, one step below catastrophic.\n\nCosmetic only, fixed if time allows, is instead a rating of 1, a much less severe level than 3.\n\nNot a problem at all is instead a rating of 0, the lowest level on the scale.\n\nCatastrophic, a release-blocker, is instead a rating of 4, one level more severe than 3."
  },
  {
    id: "csc306_ch11_013",
    course: "CSC 306",
    chapter: "Chapter 11",
    text: "A cognitive walkthrough evaluates which specific usability quality: how easily a new user can figure out an interface without training?",
    options: [
      "Learnability",
      "Efficiency",
      "Memorability",
      "Error Recovery"
    ],
    correctAnswer: 0,
    explanation: "A cognitive walkthrough evaluates learnability, how easily a new user can figure out an interface without training, by asking whether a typical user would know what to do next at each step.\n\nEfficiency instead concerns how quickly an already-learned task can be performed, not first-time figuring-out.\n\nMemorability instead concerns returning after a break, not a first-time new user's understanding.\n\nError Recovery instead concerns recovering from mistakes, not first-time understanding of what to do."
  },
  {
    id: "csc306_ch11_014",
    course: "CSC 306",
    chapter: "Chapter 11",
    text: "In a cognitive walkthrough, which of the four questions asks whether the button, link, or affordance is visible, and whether visual hierarchy directs attention to it?",
    options: [
      "Will the user notice the correct control?",
      "Will the user know they need to perform this action?",
      "Will the user understand that the control does what they need?",
      "Will the user get feedback that the action succeeded?"
    ],
    correctAnswer: 0,
    explanation: "Will the user notice the correct control asks whether the button, link, or affordance is visible, and whether visual hierarchy directs attention to it.\n\nWill the user know they need to perform this action instead asks whether the action is discoverable at all, a step before noticing the specific control.\n\nWill the user understand that the control does what they need instead asks whether the label communicates function clearly, a step after noticing the control.\n\nWill the user get feedback that the action succeeded instead asks whether the system confirms the outcome, a step after the control is used."
  },
  {
    id: "csc306_ch11_015",
    course: "CSC 306",
    chapter: "Chapter 11",
    text: "In a cognitive walkthrough, which of the four questions asks whether the system confirms an action in a way the user will notice and correctly interpret?",
    options: [
      "Will the user get feedback that the action succeeded?",
      "Will the user know they need to perform this action?",
      "Will the user notice the correct control?",
      "Will the user understand that the control does what they need?"
    ],
    correctAnswer: 0,
    explanation: "Will the user get feedback that the action succeeded asks whether the system confirms the action in a way the user will notice and correctly interpret, the final question in the sequence.\n\nWill the user know they need to perform this action instead asks about discoverability of the action itself, the first question in the sequence.\n\nWill the user notice the correct control instead asks about visibility of the specific control, the second question in the sequence.\n\nWill the user understand that the control does what they need instead asks about label clarity, the third question in the sequence."
  },
  {
    id: "csc306_ch11_016",
    course: "CSC 306",
    chapter: "Chapter 11",
    text: "What is the strength of a cognitive walkthrough, compared to expert-based heuristic evaluation?",
    options: [
      "It reveals learnability gaps that heuristic evaluation misses",
      "It always requires zero time or resources to conduct",
      "It replaces the need for any user testing forever",
      "It only applies to systems with more than 1 million users"
    ],
    correctAnswer: 0,
    explanation: "A cognitive walkthrough's strength is that it reveals learnability gaps that expert-based heuristic evaluation misses, though its limit is validity only for new users on well-defined tasks.\n\nRequiring zero time or resources contradicts the described process, which still requires evaluators stepping through tasks methodically.\n\nReplacing all future user testing contradicts the stated limitation that it is only valid for new users on well-defined tasks, not a full substitute.\n\nA user-count threshold of one million is not mentioned anywhere as a condition for using this method."
  },
  {
    id: "csc306_ch11_017",
    course: "CSC 306",
    chapter: "Chapter 11",
    text: "The System Usability Scale, developed by John Brooke, uses ten alternating-polarity items on what kind of scale?",
    options: [
      "A 5-point Likert scale",
      "A 3-point Likert scale",
      "A 10-point Likert scale",
      "A pass/fail binary scale"
    ],
    correctAnswer: 0,
    explanation: "SUS uses ten alternating-polarity items on a 5-point Likert scale, with scores combined to produce a final result on a 0 to 100 scale.\n\nA 3-point Likert scale understates the granularity of the scale actually used for each SUS item.\n\nA 10-point Likert scale overstates the granularity of the scale actually used for each SUS item.\n\nA pass/fail binary scale contradicts the graded, multi-point nature of SUS items."
  },
  {
    id: "csc306_ch11_018",
    course: "CSC 306",
    chapter: "Chapter 11",
    text: "Under the SUS score interpretation given here, a score in which range is rated 'Good'?",
    options: [
      "68-84",
      "0-50",
      "51-67",
      "85-100"
    ],
    correctAnswer: 0,
    explanation: "A score of 68 to 84 is rated Good in this SUS interpretation scale.\n\n0 to 50 is instead rated Poor, a much lower range than Good.\n\n51 to 67 is instead rated OK or Marginal, one band below Good.\n\n85 to 100 is instead rated Excellent, one band above Good."
  },
  {
    id: "csc306_ch11_019",
    course: "CSC 306",
    chapter: "Chapter 11",
    text: "The UMUX questionnaire uses four items on what kind of scale, and is described as better suited to which context than SUS?",
    options: [
      "A 7-point Likert scale, better suited to mobile contexts",
      "A 3-point Likert scale, better suited to desktop-only contexts",
      "A 100-point scale, better suited to enterprise software only",
      "A pass/fail scale, better suited to games only"
    ],
    correctAnswer: 0,
    explanation: "UMUX uses four items, two positive and two negative, on a 7-point Likert scale, and is described as faster to complete and better suited to mobile contexts than SUS.\n\nA 3-point scale understates the actual scale granularity used by UMUX items.\n\nA 100-point scale overstates the actual per-item scale used; the combined SUS score uses a 0-100 range, not each individual item.\n\nA pass/fail scale contradicts the graded, multi-point nature of UMUX items."
  },
  {
    id: "csc306_ch11_020",
    course: "CSC 306",
    chapter: "Chapter 11",
    text: "Which of the four UMUX items is phrased as a negative statement?",
    options: [
      "Using this system is a frustrating experience",
      "This system's capabilities meet my requirements",
      "This system is easy to use",
      "I would recommend this system to a friend"
    ],
    correctAnswer: 0,
    explanation: "'Using this system is a frustrating experience' is one of the two negatively phrased UMUX items, alongside a statement about time spent correcting errors.\n\n'This system's capabilities meet my requirements' is instead one of the two positively phrased UMUX items.\n\n'This system is easy to use' is instead one of the two positively phrased UMUX items.\n\n'I would recommend this system to a friend' is not one of the four UMUX items listed in this material."
  },
  {
    id: "csc306_ch11_021",
    course: "CSC 306",
    chapter: "Chapter 11",
    text: "Which type of user feedback data is described as the most reliable, since it is observed rather than reported, including clicks, paths, and errors?",
    options: [
      "Behavioural data",
      "Verbal data",
      "Physiological data",
      "Quantitative data"
    ],
    correctAnswer: 0,
    explanation: "Behavioural data, such as clicks, paths, time on task, and errors, is described as the most reliable because it is observed, not reported.\n\nVerbal data instead is described as rich but filtered through self-perception, less reliable than direct observation.\n\nPhysiological data instead is described as objective but expensive and requiring careful interpretation, a different category from general behavioural observation.\n\nQuantitative data instead is described as comparable and trackable, but able to hide the 'why' behind a number, a different concern than reliability."
  },
  {
    id: "csc306_ch11_022",
    course: "CSC 306",
    chapter: "Chapter 11",
    text: "Which type of user feedback data includes eye tracking, pupil dilation, and heart rate, described as objective but expensive and requiring careful interpretation?",
    options: [
      "Physiological data",
      "Behavioural data",
      "Verbal data",
      "Quantitative data"
    ],
    correctAnswer: 0,
    explanation: "Physiological data includes eye tracking, pupil dilation, heart rate variability, and galvanic skin response, objective but expensive and requiring careful interpretation.\n\nBehavioural data instead includes clicks, paths, and errors, a more commonly accessible and less costly category than physiological sensors.\n\nVerbal data instead includes think-aloud narration and interview responses, not sensor-based physiological measurement.\n\nQuantitative data instead includes SUS scores and completion rates, not raw physiological sensor readings."
  },
  {
    id: "csc306_ch11_023",
    course: "CSC 306",
    chapter: "Chapter 11",
    text: "Which analysis pitfall is illustrated by a user saying 'I don't like the button colour' when the real problem is that the button is invisible?",
    options: [
      "Fixing symptoms",
      "Confirmation bias",
      "Anecdote as evidence",
      "Ignoring positive findings"
    ],
    correctAnswer: 0,
    explanation: "Fixing symptoms is illustrated by a user complaining about button colour when the real problem is that the button is invisible, meaning the cause, not the complaint, should be solved.\n\nConfirmation bias instead concerns noticing data that confirms existing decisions and discounting what contradicts them, a different pitfall.\n\nAnecdote as evidence instead concerns treating one user's strong opinion as a finding, a different pitfall than misdiagnosing a cause.\n\nIgnoring positive findings instead concerns discounting evidence of what works, a different pitfall than misdiagnosing a complaint's cause."
  },
  {
    id: "csc306_ch11_024",
    course: "CSC 306",
    chapter: "Chapter 11",
    text: "Which analysis pitfall is described as noticing data that confirms your existing design decisions while discounting what contradicts them?",
    options: [
      "Confirmation bias",
      "Fixing symptoms",
      "Collecting without acting",
      "Anecdote as evidence"
    ],
    correctAnswer: 0,
    explanation: "Confirmation bias is noticing data that confirms your existing design decisions while discounting what contradicts them.\n\nFixing symptoms instead concerns solving a surface complaint rather than its underlying cause, a different pitfall.\n\nCollecting without acting instead concerns evaluation that never feeds back into design, a different pitfall than biased interpretation.\n\nAnecdote as evidence instead concerns treating one user's opinion as a general finding, a different pitfall than favoring confirming data."
  },
  {
    id: "csc306_ch11_025",
    course: "CSC 306",
    chapter: "Chapter 11",
    text: "In the Impact versus Effort prioritisation framework, which quadrant represents high-impact, low-effort changes that should be prioritised immediately?",
    options: [
      "Fix now",
      "Plan carefully",
      "Easy but low-value",
      "Avoid or park"
    ],
    correctAnswer: 0,
    explanation: "Fix now represents high-impact, low-effort changes, which should be prioritised immediately.\n\nPlan carefully instead represents high-impact but high-effort changes, requiring proper resourcing rather than immediate action.\n\nEasy but low-value instead represents low-effort, low-impact changes, addressed only in quiet periods, not prioritised immediately.\n\nAvoid or park instead represents high-effort, low-impact changes, which should be deprioritised or dropped, not fixed immediately."
  },
  {
    id: "csc306_ch11_026",
    course: "CSC 306",
    chapter: "Chapter 11",
    text: "In the Impact versus Effort framework, which quadrant represents high-effort, low-impact changes that should be avoided or dropped?",
    options: [
      "Avoid or park",
      "Fix now",
      "Plan carefully",
      "Easy but low-value"
    ],
    correctAnswer: 0,
    explanation: "Avoid or park represents high-effort, low-impact changes, which should be deprioritised or dropped entirely.\n\nFix now instead represents high-impact, low-effort changes, prioritised immediately, the opposite quadrant.\n\nPlan carefully instead represents high-impact, high-effort changes, requiring scheduling with proper resourcing, not simple avoidance.\n\nEasy but low-value instead represents low-effort, low-impact changes, addressed in quiet periods, not avoided or dropped outright."
  },
  {
    id: "csc306_ch11_027",
    course: "CSC 306",
    chapter: "Chapter 11",
    text: "In closing the loop on iterative improvement, why must re-testing specifically target the changed interactions in the next round?",
    options: [
      "Fixes sometimes introduce new problems",
      "It is required by international law in every jurisdiction",
      "Changed interactions never need to be tested again",
      "Only the original untouched areas need retesting"
    ],
    correctAnswer: 0,
    explanation: "Re-testing must specifically target the changed interactions because fixes sometimes introduce new problems, and the changed areas are where this is most likely to appear.\n\nInternational legal requirement is not the reasoning given for this practice in this material.\n\nClaiming changed interactions never need retesting directly contradicts the explicit instruction to re-test them.\n\nClaiming only untouched areas need retesting reverses the actual guidance, which specifically targets the changed areas."
  },
  {
    id: "csc306_ch11_028",
    course: "CSC 306",
    chapter: "Chapter 11",
    text: "Which of the following accurately describes an evaluation method or a related concept?",
    options: [
      "A heuristic evaluation involves ten alternating-polarity items on a 5-point scale",
      "A/B testing is expert-based and formative, simulating a new user's thought process",
      "All of these",
      "None of these"
    ],
    correctAnswer: 3,
    explanation: "Neither statement is accurate. Ten alternating-polarity items on a 5-point scale instead describes the SUS questionnaire, not heuristic evaluation, which has trained evaluators inspect against usability principles. A/B testing is instead user-based and summative, comparing two versions with real users, not an expert simulation of a new user's thought process, which describes a cognitive walkthrough. Since both statements are inaccurate, none of these applies."
  },
  {
    id: "csc306_ch11_029",
    course: "CSC 306",
    chapter: "Chapter 11",
    text: "Building something and evaluating it are described as the same discipline, so mastering one automatically means mastering the other.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "This statement is false. Building something and evaluating it are described as not the same discipline, and a team needs both, since being skilled at construction does not guarantee skill at evaluation."
  },
  {
    id: "csc306_ch11_030",
    course: "CSC 306",
    chapter: "Chapter 11",
    text: "Evaluation that never feeds back into design is described as wasted effort, since every session must end with what?",
    options: [
      "Prioritised next steps",
      "A signed non-disclosure agreement",
      "A public press release",
      "An entirely new research team"
    ],
    correctAnswer: 0,
    explanation: "Collecting without acting describes evaluation that never feeds back into design as wasted effort, and every session must end with prioritised next steps.\n\nA signed non-disclosure agreement is not the described requirement for closing an evaluation session.\n\nA public press release is not the described requirement for closing an evaluation session.\n\nAn entirely new research team is not the described requirement for closing an evaluation session."
  }
];

export default csc306Lecture7EvaluationQuestions;
