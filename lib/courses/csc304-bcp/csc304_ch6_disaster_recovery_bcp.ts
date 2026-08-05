import { QuestionV2 } from "../../quiz-types";

const csc304Chapter6Questions: QuestionV2[] = [
  {
    id: "csc304_ch6_001",
    course: "CSC 304",
    chapter: "Chapter 6",
    text: "What is the focus of business continuity, as distinguished from disaster recovery?",
    options: [
      "Maintaining operations of the organization",
      "Restarting operations after failure",
      "Improving marketing during downtime",
      "Increasing headcount during a crisis"
    ],
    correctAnswer: 0,
    explanation: "The Business Continuity vs Disaster Recovery table lists maintaining operations of the organization as the focus of business continuity, contrasted with restarting operations as the focus of disaster recovery.\n\nRestarting operations after failure is the table's stated focus for disaster recovery, not business continuity.\n\nImproving marketing during downtime is never mentioned in the table.\n\nIncreasing headcount during a crisis is not part of the comparison in the table."
  },
  {
    id: "csc304_ch6_002",
    course: "CSC 304",
    chapter: "Chapter 6",
    text: "What is disaster recovery's target concerned with?",
    options: [
      "Proactive prevention of incidents",
      "What happens once the plan fails",
      "Routine daily backups only",
      "Annual budget planning process"
    ],
    correctAnswer: 1,
    explanation: "The Business Continuity vs Disaster Recovery table states disaster recovery's target is when BCP fails and service is disrupted.\n\nProactive prevention is listed in the table as business continuity's scope, not disaster recovery's target.\n\nRoutine daily backups only is not the stated target for disaster recovery in the table.\n\nAnnual budget planning is not mentioned anywhere in the table."
  },
  {
    id: "csc304_ch6_003",
    course: "CSC 304",
    chapter: "Chapter 6",
    text: "A company only acts once a disruption has already occurred and works to restart its operations. Which approach does this describe?",
    options: [
      "Business resumption planning",
      "Vulnerability assessment",
      "Disaster recovery",
      "Crisis management"
    ],
    correctAnswer: 2,
    explanation: "The Business Continuity vs Disaster Recovery table defines disaster recovery as restarting operations, reactively, once BCP fails and service is disrupted, which matches this scenario.\n\nBusiness resumption planning is described as one of the three main areas of continuity planning addressing operational aspects, not a reactive restart process itself.\n\nVulnerability assessment is a phase of BCP development aimed at reducing the probability of disaster, not restarting operations after one occurs.\n\nCrisis management is described as effective, timely response to crises while minimizing loss, a distinct concept from restarting operations."
  },
  {
    id: "csc304_ch6_004",
    course: "CSC 304",
    chapter: "Chapter 6",
    text: "Which of the following describes business continuity's scope as opposed to disaster recovery's scope?",
    options: [
      "Reactive restoration",
      "Randomized testing",
      "Financial auditing",
      "Proactive prevention"
    ],
    correctAnswer: 3,
    explanation: "The Business Continuity vs Disaster Recovery table lists proactive prevention as business continuity's scope, contrasted with reactive restoration as disaster recovery's scope.\n\nReactive restoration is the table's stated scope for disaster recovery, not business continuity.\n\nRandomized testing is not mentioned anywhere in the table.\n\nFinancial auditing is not part of the scope comparison in the table."
  },
  {
    id: "csc304_ch6_005",
    course: "CSC 304",
    chapter: "Chapter 6",
    text: "What is a Business Continuity Plan (BCP)?",
    options: [
      "A logistical plan validated before a disaster occurs",
      "A plan created only after a disaster has ended",
      "A marketing plan for post-crisis rebranding",
      "A financial audit conducted annually"
    ],
    correctAnswer: 0,
    explanation: "The Business Continuity Planning section defines a BCP as a practical logistical plan created and validated before a disaster occurs, enabling recovery and restoration of operations and maintenance of critical functions.\n\nA plan created only after a disaster has ended contradicts the source, which stresses the plan must exist before the disaster occurs.\n\nA marketing plan for rebranding is not mentioned anywhere in the source.\n\nAn annual financial audit is not part of the definition of BCP given in the source."
  },
  {
    id: "csc304_ch6_006",
    course: "CSC 304",
    chapter: "Chapter 6",
    text: "Disaster recovery is proactive, taking place before any threat materializes.",
    options: [
      "True",
      "False",
      "Maybe",
      "I don't know"
    ],
    correctAnswer: 1,
    explanation: "The Business Continuity vs Disaster Recovery table states disaster recovery's scope is reactive restoration, occurring when BCP fails and service is disrupted. Proactive prevention is instead the scope attributed to business continuity, not disaster recovery."
  },
  {
    id: "csc304_ch6_007",
    course: "CSC 304",
    chapter: "Chapter 6",
    text: "What is the rationale for creating a continuity plan before a disaster occurs?",
    options: [
      "To avoid the need for any staff training",
      "To let management continue operations under stress and time-compressed situations",
      "To reduce the size of the IT department",
      "To eliminate the need for a recovery plan entirely"
    ],
    correctAnswer: 1,
    explanation: "The Business Continuity Planning section states the rationale is to ensure effective planning and enable management to continue operations under stress and time-compressed situations.\n\nAvoiding staff training is never mentioned as a rationale in the source.\n\nReducing IT department size is not connected to the rationale for pre-disaster planning in the source.\n\nEliminating the need for a recovery plan contradicts the source, which treats disaster recovery planning as one of the three main continuity planning areas."
  },
  {
    id: "csc304_ch6_008",
    course: "CSC 304",
    chapter: "Chapter 6",
    text: "Which of the three main areas of continuity planning addresses operational aspects?",
    options: [
      "Disaster recovery planning",
      "Crisis management",
      "Business resumption planning",
      "Vulnerability assessment"
    ],
    correctAnswer: 2,
    explanation: "The Components of Continuity Planning section lists business resumption planning as covering operational aspects, alongside disaster recovery planning for technological aspects and crisis management for crisis response.\n\nDisaster recovery planning is described as covering technological aspects, not operational aspects.\n\nCrisis management is described as covering effective, timely response to crises, not operational aspects specifically.\n\nVulnerability assessment is a phase of BCP development, not one of the three main areas of continuity planning."
  },
  {
    id: "csc304_ch6_009",
    course: "CSC 304",
    chapter: "Chapter 6",
    text: "Which main area of continuity planning addresses the technological aspects of business continuity?",
    options: [
      "Business resumption planning",
      "Crisis management",
      "Business impact analysis",
      "Disaster recovery planning"
    ],
    correctAnswer: 3,
    explanation: "The Components of Continuity Planning section describes disaster recovery planning as covering the technological aspects of business continuity.\n\nBusiness resumption planning is described as covering operational aspects, not technological aspects.\n\nCrisis management is described as covering timely crisis response, not technological aspects.\n\nBusiness impact analysis is a phase of BCP development, not one of the three main areas of continuity planning."
  },
  {
    id: "csc304_ch6_010",
    course: "CSC 304",
    chapter: "Chapter 6",
    text: "Which main area of continuity planning focuses on effective, timely response to crises while minimizing loss and damage?",
    options: [
      "Crisis management",
      "Business resumption planning",
      "Disaster recovery planning",
      "Maintenance program"
    ],
    correctAnswer: 0,
    explanation: "The Components of Continuity Planning section defines crisis management as effective, timely response to crises while minimizing loss and damage.\n\nBusiness resumption planning is described as covering operational aspects, not timely crisis response specifically.\n\nDisaster recovery planning is described as covering technological aspects, a distinct concern from crisis response.\n\nMaintenance program is a phase of BCP development concerned with keeping the plan current, not crisis response."
  },
  {
    id: "csc304_ch6_011",
    course: "CSC 304",
    chapter: "Chapter 6",
    text: "Which phase of the business continuity lifecycle involves identifying vulnerabilities?",
    options: [
      "Determination of recovery alternatives",
      "Risk assessment",
      "Recovery plan implementation",
      "Recovery plan validation"
    ],
    correctAnswer: 1,
    explanation: "The Business Continuity Lifecycle section lists risk assessment as the phase that identifies vulnerabilities.\n\nDetermination of recovery alternatives is described as evaluating options, which comes after vulnerabilities are identified.\n\nRecovery plan implementation is described as executing the chosen strategy, not identifying vulnerabilities.\n\nRecovery plan validation is described as testing and verifying the strategy, the final phase rather than the first."
  },
  {
    id: "csc304_ch6_012",
    course: "CSC 304",
    chapter: "Chapter 6",
    text: "Which of the following is one of the three main areas of continuity planning?",
    options: [
      "Business resumption planning",
      "Crisis management",
      "All of these",
      "None of these"
    ],
    correctAnswer: 2,
    explanation: "The Components of Continuity Planning section lists business resumption planning, disaster recovery planning, and crisis management as the three main areas, so both named items are genuinely part of the list, making all of these correct.\n\nSince both specific options are supported by the source, neither can be selected alone, and none of these is ruled out because at least one option is true."
  },
  {
    id: "csc304_ch6_013",
    course: "CSC 304",
    chapter: "Chapter 6",
    text: "Which phase of the business continuity lifecycle involves testing and verifying the chosen recovery strategy?",
    options: [
      "Risk assessment",
      "Determination of recovery alternatives",
      "Recovery plan validation",
      "Recovery plan implementation"
    ],
    correctAnswer: 2,
    explanation: "The Business Continuity Lifecycle section lists recovery plan validation as the phase that tests and verifies the strategy, coming after implementation.\n\nRisk assessment is described as identifying vulnerabilities, the first phase rather than the testing phase.\n\nDetermination of recovery alternatives is described as evaluating options, which precedes testing.\n\nRecovery plan implementation is described as executing the strategy, which comes before it is validated."
  },
  {
    id: "csc304_ch6_014",
    course: "CSC 304",
    chapter: "Chapter 6",
    text: "What is the stated target of the business continuity lifecycle regarding critical resources?",
    options: [
      "Maximum resource quantities regardless of cost",
      "Zero resource allocation during recovery",
      "Unlimited budget for any recovery option",
      "Optimum resource costs with minimum tangible and intangible losses"
    ],
    correctAnswer: 3,
    explanation: "The Business Continuity Lifecycle section states the target is critical resource quantities at optimum costs with minimum tangible and intangible losses.\n\nMaximum resource quantities regardless of cost contradicts the emphasis on optimum cost stated in the source.\n\nZero resource allocation during recovery contradicts the goal of maintaining critical resources described in the source.\n\nUnlimited budget for any recovery option is not supported, since the source specifically calls for optimum, not unlimited, costs."
  },
  {
    id: "csc304_ch6_015",
    course: "CSC 304",
    chapter: "Chapter 6",
    text: "Which of the following is listed among the resource sets required in the business continuity lifecycle?",
    options: [
      "Telecommunication",
      "Advertising",
      "Shareholder relations",
      "Product packaging"
    ],
    correctAnswer: 0,
    explanation: "The Business Continuity Lifecycle section lists information, technology, telecommunication, processes, people, and facilities as the resource sets required.\n\nAdvertising is not listed among the resource sets in the source.\n\nShareholder relations is not part of the resource sets described in the source.\n\nProduct packaging is not mentioned as one of the resource sets in the source."
  },
  {
    id: "csc304_ch6_016",
    course: "CSC 304",
    chapter: "Chapter 6",
    text: "What is the primary objective of BCP regarding organizational loss?",
    options: [
      "Maximize insurance claims after a disaster",
      "Minimize disruption costs so the organization survives",
      "Eliminate all IT infrastructure",
      "Increase disruption costs to justify budget increases"
    ],
    correctAnswer: 1,
    explanation: "The BCP Objectives and Goals section states the primary objective is to minimize loss by minimizing costs associated with disruptions, enabling the organization to survive disaster, and reestablishing normal operations.\n\nMaximizing insurance claims is never mentioned as an objective in the source.\n\nEliminating all IT infrastructure contradicts the goal of restoring and maintaining operations.\n\nIncreasing disruption costs directly contradicts the stated objective of minimizing such costs."
  },
  {
    id: "csc304_ch6_017",
    course: "CSC 304",
    chapter: "Chapter 6",
    text: "Which key objective of a contingency plan concerns protecting personnel on premises during a disaster?",
    options: [
      "Management succession",
      "Complexity reduction",
      "Safety and well-being",
      "Coordination"
    ],
    correctAnswer: 2,
    explanation: "The Key Objectives of Contingency Plan section lists safety and well-being as protecting personnel on premises during a disaster.\n\nManagement succession instead concerns establishing emergency powers and succession, a different objective.\n\nComplexity reduction concerns simplifying the recovery effort, not personnel safety.\n\nCoordination concerns effectively coordinating recovery tasks, not protecting personnel."
  },
  {
    id: "csc304_ch6_018",
    course: "CSC 304",
    chapter: "Chapter 6",
    text: "The Business Impact Analysis phase determines the maximum allowable downtime for each critical process.",
    options: [
      "True",
      "False",
      "Maybe",
      "I don't know"
    ],
    correctAnswer: 0,
    explanation: "The Business Impact Analysis section lists determining maximum allowable downtime for each process as one of its key tasks, matching this statement exactly."
  },
  {
    id: "csc304_ch6_019",
    course: "CSC 304",
    chapter: "Chapter 6",
    text: "Which key objective of a contingency plan concerns establishing emergency powers and succession?",
    options: [
      "Duration minimization",
      "Damage minimization",
      "Safety and well-being",
      "Management succession"
    ],
    correctAnswer: 3,
    explanation: "The Key Objectives of Contingency Plan section lists management succession as establishing emergency powers and succession.\n\nDuration minimization instead concerns reducing interruption length, a different objective.\n\nDamage minimization concerns limiting immediate losses, not succession planning.\n\nSafety and well-being concerns protecting personnel on premises, not emergency powers or succession."
  },
  {
    id: "csc304_ch6_020",
    course: "CSC 304",
    chapter: "Chapter 6",
    text: "Which key objective of a contingency plan concerns simplifying the recovery effort?",
    options: [
      "Complexity reduction",
      "Critical operations",
      "Coordination",
      "Identify critical functions"
    ],
    correctAnswer: 0,
    explanation: "The Key Objectives of Contingency Plan section lists complexity reduction as simplifying the recovery effort.\n\nCritical operations instead concerns continuing essential business functions, a different objective.\n\nCoordination concerns effectively coordinating recovery tasks, not simplifying the effort itself.\n\nIdentify critical functions concerns determining lines of business and supporting functions, a distinct objective from simplification."
  },
  {
    id: "csc304_ch6_021",
    course: "CSC 304",
    chapter: "Chapter 6",
    text: "Which of the following is listed as a BCP goal?",
    options: [
      "Increase the number of vendors used",
      "Identify weaknesses and implement prevention programs",
      "Reduce employee training budgets",
      "Expand marketing campaigns"
    ],
    correctAnswer: 1,
    explanation: "The BCP Goals section lists identifying weaknesses and implementing prevention programs, minimizing disruption duration, facilitating effective recovery coordination, and reducing recovery complexity.\n\nIncreasing the number of vendors is not listed as a BCP goal in the source.\n\nReducing employee training budgets is not mentioned as a BCP goal in the source.\n\nExpanding marketing campaigns is not part of the BCP goals described in the source."
  },
  {
    id: "csc304_ch6_022",
    course: "CSC 304",
    chapter: "Chapter 6",
    text: "Which BCP goal concerns limiting how long a disruption lasts?",
    options: [
      "Reduce recovery complexity",
      "Identify weaknesses and implement prevention programs",
      "Minimize disruption duration",
      "Facilitate effective recovery coordination"
    ],
    correctAnswer: 2,
    explanation: "The BCP Goals section lists minimizing disruption duration as one of the four stated goals.\n\nReduce recovery complexity is a separate goal concerned with simplifying recovery, not limiting duration.\n\nIdentify weaknesses and implement prevention programs is a separate goal concerned with prevention, not duration.\n\nFacilitate effective recovery coordination is a separate goal concerned with coordinating tasks, not limiting disruption length."
  },
  {
    id: "csc304_ch6_023",
    course: "CSC 304",
    chapter: "Chapter 6",
    text: "Which key objective of a contingency plan concerns determining lines of business and supporting functions?",
    options: [
      "Duration minimization",
      "Coordination",
      "Safety and well-being",
      "Identify critical functions"
    ],
    correctAnswer: 3,
    explanation: "The Key Objectives of Contingency Plan section defines identify critical functions as determining lines of business and supporting functions.\n\nDuration minimization instead concerns reducing interruption length, a different objective.\n\nCoordination concerns effectively coordinating recovery tasks, not identifying which functions are critical.\n\nSafety and well-being concerns protecting personnel on premises, not identifying business functions."
  },
  {
    id: "csc304_ch6_024",
    course: "CSC 304",
    chapter: "Chapter 6",
    text: "Which of the following is a phase of the business continuity lifecycle?",
    options: [
      "Risk assessment",
      "Marketing alignment",
      "All of these",
      "None of these"
    ],
    correctAnswer: 0,
    explanation: "The Business Continuity Lifecycle section lists risk assessment, determination of recovery alternatives, recovery plan implementation, and recovery plan validation as its four phases, so risk assessment is directly supported. Marketing alignment is never mentioned anywhere in the source as a lifecycle phase."
  },
  {
    id: "csc304_ch6_025",
    course: "CSC 304",
    chapter: "Chapter 6",
    text: "Which phase of BCP development focuses on establishing a foundation and support, including forming a steering committee?",
    options: [
      "Pre-planning activities",
      "Vulnerability assessment",
      "Business impact analysis",
      "Plan development"
    ],
    correctAnswer: 0,
    explanation: "The Phases of BCP Development section describes pre-planning activities as establishing foundation and support, with activities including establishing a steering committee.\n\nVulnerability assessment instead aims to reduce the probability of disaster occurrence, a later phase.\n\nBusiness impact analysis aims to systematically assess potential impacts, a distinct phase from foundation-building.\n\nPlan development aims to formulate alternative operating strategies, which comes after the foundation is already established."
  },
  {
    id: "csc304_ch6_026",
    course: "CSC 304",
    chapter: "Chapter 6",
    text: "What is a deliverable of the pre-planning activities phase?",
    options: [
      "A fully tested recovery plan",
      "A policy supporting recovery programs",
      "A finalized maintenance schedule",
      "A completed vulnerability assessment report"
    ],
    correctAnswer: 1,
    explanation: "The Pre-Planning Activities section lists a policy supporting recovery programs and an awareness program for management and senior staff as deliverables.\n\nA fully tested recovery plan is a deliverable of the later testing phase, not pre-planning.\n\nA finalized maintenance schedule belongs to the maintenance program phase, which comes later.\n\nA completed vulnerability assessment report belongs to the vulnerability assessment phase, a separate later phase."
  },
  {
    id: "csc304_ch6_027",
    course: "CSC 304",
    chapter: "Chapter 6",
    text: "Which phase of BCP development aims to reduce the probability of disaster occurrence?",
    options: [
      "Testing the plan",
      "Maintenance program",
      "Vulnerability assessment",
      "Plan development"
    ],
    correctAnswer: 2,
    explanation: "The Vulnerability Assessment section states its objective is to reduce the probability of disaster occurrence.\n\nTesting the plan aims to ensure procedures are complete and personnel are competent, not to reduce disaster probability.\n\nMaintenance program aims to keep the plan current and relevant, a different objective.\n\nPlan development aims to formulate alternative operating strategies, not reduce disaster probability."
  },
  {
    id: "csc304_ch6_028",
    course: "CSC 304",
    chapter: "Chapter 6",
    text: "Which phase of BCP development determines the maximum allowable downtime for each process?",
    options: [
      "Detailed definition of requirements",
      "Plan development",
      "Testing the plan",
      "Business impact analysis"
    ],
    correctAnswer: 3,
    explanation: "The Business Impact Analysis section lists determining maximum allowable downtime for each process among its key tasks.\n\nDetailed definition of requirements instead profiles recovery requirements and identifies needed resources, a later phase.\n\nPlan development formulates alternative operating strategies, not downtime calculations.\n\nTesting the plan verifies procedures are complete and workable, a much later phase than downtime determination."
  },
  {
    id: "csc304_ch6_029",
    course: "CSC 304",
    chapter: "Chapter 6",
    text: "Which key task belongs to the Business Impact Analysis phase?",
    options: [
      "Identify and quantify threats to critical processes",
      "Define recovery teams and assign responsibilities",
      "Implement version control procedures",
      "Conduct the test and analyze results"
    ],
    correctAnswer: 0,
    explanation: "The Business Impact Analysis section lists identifying and quantifying threats and risks to critical business processes among its key tasks.\n\nDefining recovery teams and assigning responsibilities belongs to the plan development phase, not BIA.\n\nImplementing version control procedures belongs to the maintenance program phase, a much later phase.\n\nConducting the test and analyzing results belongs to the initial plan testing and implementation phase, not BIA."
  },
  {
    id: "csc304_ch6_030",
    course: "CSC 304",
    chapter: "Chapter 6",
    text: "A backup plan focuses on complete system restoration, while a recovery plan focuses on data availability.",
    options: [
      "True",
      "False",
      "Maybe",
      "I don't know"
    ],
    correctAnswer: 1,
    explanation: "The Key Difference table reverses this: the backup plan's outcome is data availability, while the recovery plan's outcome is system functionality through complete system restoration. This statement swaps the two plan types' actual outcomes."
  },
  {
    id: "csc304_ch6_031",
    course: "CSC 304",
    chapter: "Chapter 6",
    text: "Which phase of BCP development profiles recovery requirements and identifies resources such as hardware, software, and personnel needed for critical functions?",
    options: [
      "Business impact analysis",
      "Detailed definition of requirements",
      "Plan development",
      "Maintenance program"
    ],
    correctAnswer: 1,
    explanation: "The Detailed Definition of Requirements section describes profiling recovery requirements and identifying resources including hardware, software, documentation, outside support, facilities, and personnel.\n\nBusiness impact analysis instead assesses potential impacts and determines downtime, a distinct earlier phase.\n\nPlan development formulates alternative operating strategies, which comes after requirements are already defined.\n\nMaintenance program keeps the plan current after it has already been built, not during requirements definition."
  },
  {
    id: "csc304_ch6_032",
    course: "CSC 304",
    chapter: "Chapter 6",
    text: "In the detailed definition of requirements phase, recovery strategies are developed for which types of outages?",
    options: [
      "Only permanent outages",
      "Only outages lasting under one hour",
      "Short-term, intermediate-term, and long-term outages",
      "Only outages affecting external vendors"
    ],
    correctAnswer: 2,
    explanation: "The Detailed Definition of Requirements section states recovery strategies are developed for short-term, intermediate-term, and long-term outages.\n\nOnly permanent outages narrows the scope incorrectly, since the source explicitly covers three outage durations, not just permanent ones.\n\nOnly outages under one hour is not a category mentioned in the source.\n\nOnly outages affecting external vendors is not one of the outage categories described in the source."
  },
  {
    id: "csc304_ch6_033",
    course: "CSC 304",
    chapter: "Chapter 6",
    text: "Which phase of BCP development formulates alternative operating strategies split into business and technical tiers?",
    options: [
      "Vulnerability assessment",
      "Pre-planning activities",
      "Maintenance program",
      "Plan development"
    ],
    correctAnswer: 3,
    explanation: "The Plan Development section describes formulating appropriate alternative operating strategies using two-tiered recovery strategies covering the business tier and the technical tier.\n\nVulnerability assessment instead aims to reduce disaster probability, an earlier phase without tiered strategies.\n\nPre-planning activities establishes foundation and support, well before tiered strategies are formulated.\n\nMaintenance program keeps the plan current after it is built, not during strategy formulation."
  },
  {
    id: "csc304_ch6_034",
    course: "CSC 304",
    chapter: "Chapter 6",
    text: "What is the objective of the testing the plan phase?",
    options: [
      "Ensure procedures are complete and personnel competent",
      "Establish the initial project schedule",
      "Identify organizational risks",
      "Determine ownership and responsibility for the plan"
    ],
    correctAnswer: 0,
    explanation: "The Testing the Plan section states its objective is to ensure procedures are complete, workable, and personnel are competent.\n\nEstablishing the initial project schedule belongs to the pre-planning activities phase, not testing.\n\nIdentifying organizational risks belongs to the business impact analysis phase, an earlier phase.\n\nDetermining ownership and responsibility belongs to the maintenance program phase, which comes after testing."
  },
  {
    id: "csc304_ch6_035",
    course: "CSC 304",
    chapter: "Chapter 6",
    text: "Which phase of BCP development is concerned with keeping the plan current and relevant through version control?",
    options: [
      "Testing the plan",
      "Maintenance program",
      "Business impact analysis",
      "Detailed definition of requirements"
    ],
    correctAnswer: 1,
    explanation: "The Maintenance Program section states its objective is to keep the plan current and relevant, including implementing version control procedures.\n\nTesting the plan instead verifies procedures are complete and personnel competent, a distinct earlier phase.\n\nBusiness impact analysis assesses potential impacts and downtime, unrelated to ongoing version control.\n\nDetailed definition of requirements profiles recovery requirements, an earlier phase than maintenance."
  },
  {
    id: "csc304_ch6_036",
    course: "CSC 304",
    chapter: "Chapter 6",
    text: "Which of the following is one of the eight phases of BCP development?",
    options: [
      "Customer satisfaction survey",
      "Marketing budget allocation",
      "All of these",
      "None of these"
    ],
    correctAnswer: 3,
    explanation: "The Phases of BCP Development section lists exactly eight phases: pre-planning activities, vulnerability assessment, business impact analysis, detailed definition of requirements, plan development, testing the plan, maintenance program, and initial plan testing and implementation. Neither a customer satisfaction survey nor marketing budget allocation appears among these eight phases anywhere in the source, so none of these is correct."
  },
  {
    id: "csc304_ch6_037",
    course: "CSC 304",
    chapter: "Chapter 6",
    text: "Which activity is listed as part of the maintenance program phase?",
    options: [
      "Determine maximum allowable downtime for each process",
      "Develop recovery standards for the business tier",
      "Identify maintenance triggers for organizational, operational, or structural changes",
      "Conduct thorough security assessment of communications"
    ],
    correctAnswer: 2,
    explanation: "The Maintenance Program section lists identifying maintenance triggers for organizational, operational, or structural changes among its key elements.\n\nDetermining maximum allowable downtime belongs to the business impact analysis phase, an earlier phase.\n\nDeveloping recovery standards for the business tier belongs to the plan development phase, not maintenance.\n\nConducting a thorough security assessment of communications belongs to the vulnerability assessment phase, an earlier phase."
  },
  {
    id: "csc304_ch6_038",
    course: "CSC 304",
    chapter: "Chapter 6",
    text: "What is the first step listed in the initial plan testing and implementation process?",
    options: [
      "Analyze test results",
      "Modify plans as appropriate",
      "Conduct the test",
      "Define test purpose and approach"
    ],
    correctAnswer: 3,
    explanation: "The Initial Plan Testing and Implementation section lists defining test purpose and approach as the first of six steps, followed by identifying test teams, structuring the test, conducting the test, analyzing results, and modifying plans.\n\nAnalyzing test results is listed as the fifth step, not the first.\n\nModifying plans as appropriate is listed as the sixth and final step.\n\nConducting the test is listed as the fourth step, well after the process begins."
  },
  {
    id: "csc304_ch6_039",
    course: "CSC 304",
    chapter: "Chapter 6",
    text: "Which step comes immediately after identifying test teams in the initial plan testing and implementation process?",
    options: [
      "Structure the test",
      "Define test purpose and approach",
      "Conduct the test",
      "Modify plans as appropriate"
    ],
    correctAnswer: 0,
    explanation: "The Initial Plan Testing and Implementation section lists the sequence as defining test purpose, identifying test teams, structuring the test, conducting the test, analyzing results, and modifying plans, so structuring the test follows identifying test teams directly.\n\nDefine test purpose and approach is the first step, preceding identifying test teams, not following it.\n\nConduct the test is listed as the fourth step, two steps after identifying test teams.\n\nModify plans as appropriate is the final step, well after identifying test teams."
  },
  {
    id: "csc304_ch6_040",
    course: "CSC 304",
    chapter: "Chapter 6",
    text: "After running a disaster recovery test, a team reviews the results and revises procedures accordingly. Which two steps of the initial plan testing and implementation process does this describe?",
    options: [
      "Define test purpose and identify test teams",
      "Analyze test results and modify plans as appropriate",
      "Structure the test and conduct the test",
      "Establish steering committee and develop project schedules"
    ],
    correctAnswer: 1,
    explanation: "The Initial Plan Testing and Implementation section lists analyzing test results followed by modifying plans as appropriate as the final two steps, matching the scenario of reviewing results and revising procedures.\n\nDefine test purpose and identify test teams describes the first two steps, which occur before any test is run.\n\nStructure the test and conduct the test describes the third and fourth steps, which occur before results are reviewed.\n\nEstablish steering committee and develop project schedules describes pre-planning activities, an entirely earlier phase."
  },
  {
    id: "csc304_ch6_041",
    course: "CSC 304",
    chapter: "Chapter 6",
    text: "Which plan type specifies actions undertaken immediately when a disaster occurs?",
    options: [
      "Backup plan",
      "Recovery plan",
      "Emergency plan",
      "Maintenance program"
    ],
    correctAnswer: 2,
    explanation: "The Plan Types section defines the emergency plan as specifying actions undertaken immediately when disaster occurs, including rapid response procedures and immediate escalation protocols.\n\nThe backup plan instead specifies backup type and frequency, aimed at quick operation restoration, not immediate disaster actions.\n\nThe recovery plan sets out procedures to restore full system capabilities, a later-stage concern than immediate response.\n\nMaintenance program is a phase of BCP development concerned with keeping the plan current, not a plan type triggered at the moment of disaster."
  },
  {
    id: "csc304_ch6_042",
    course: "CSC 304",
    chapter: "Chapter 6",
    text: "The BCP Goals include minimizing disruption duration and reducing recovery complexity.",
    options: [
      "True",
      "False",
      "Maybe",
      "I don't know"
    ],
    correctAnswer: 0,
    explanation: "The BCP Goals section lists minimizing disruption duration and reducing recovery complexity among its four stated goals, matching this statement exactly."
  },
  {
    id: "csc304_ch6_043",
    course: "CSC 304",
    chapter: "Chapter 6",
    text: "Which plan type specifies the type and frequency of backups and identifies the storage location?",
    options: [
      "Emergency plan",
      "Recovery plan",
      "Vulnerability assessment",
      "Backup plan"
    ],
    correctAnswer: 3,
    explanation: "The Plan Types section describes the backup plan as specifying type and frequency of backups, documenting procedures, and identifying storage location and assembly site.\n\nThe emergency plan instead specifies immediate response actions when disaster occurs, not backup scheduling.\n\nThe recovery plan sets out procedures for full system restoration, a different focus than backup scheduling.\n\nVulnerability assessment is a phase of BCP development aimed at reducing disaster probability, not a plan type about backups."
  },
  {
    id: "csc304_ch6_044",
    course: "CSC 304",
    chapter: "Chapter 6",
    text: "Which plan type sets out procedures to restore full information system capabilities?",
    options: [
      "Recovery plan",
      "Emergency plan",
      "Backup plan",
      "Business impact analysis"
    ],
    correctAnswer: 0,
    explanation: "The Plan Types section defines the recovery plan as setting out procedures to restore full information system capabilities, identifying the recovery committee and application recovery priority.\n\nThe emergency plan instead specifies immediate response actions at the moment of disaster, not full system restoration.\n\nThe backup plan aims at quick operation restoration through backups, a narrower focus than complete system restoration.\n\nBusiness impact analysis is a phase of BCP development that assesses potential impacts, not a plan type for restoration."
  },
  {
    id: "csc304_ch6_045",
    course: "CSC 304",
    chapter: "Chapter 6",
    text: "What does the backup plan aim to achieve?",
    options: [
      "Complete system restoration",
      "Quick operation restoration",
      "Immediate escalation protocols",
      "Long-term budget planning"
    ],
    correctAnswer: 1,
    explanation: "The Plan Types section states the backup plan aims at quick operation restoration.\n\nComplete system restoration is instead the stated focus of the recovery plan, a different plan type.\n\nImmediate escalation protocols belong to the emergency plan, not the backup plan.\n\nLong-term budget planning is not mentioned anywhere in the description of the backup plan."
  },
  {
    id: "csc304_ch6_046",
    course: "CSC 304",
    chapter: "Chapter 6",
    text: "Which plan type identifies the recovery committee and indicates the application recovery priority sequence?",
    options: [
      "Emergency plan",
      "Backup plan",
      "Recovery plan",
      "Crisis management"
    ],
    correctAnswer: 2,
    explanation: "The Plan Types section states the recovery plan identifies the recovery committee and responsibilities and indicates application recovery priority and sequence.\n\nThe emergency plan instead specifies immediate response actions, not recovery committee structure.\n\nThe backup plan specifies backup type and storage location, not committee structure or recovery priority.\n\nCrisis management is one of the three main continuity planning areas, not a plan type with a recovery committee."
  },
  {
    id: "csc304_ch6_047",
    course: "CSC 304",
    chapter: "Chapter 6",
    text: "In the comparison between backup and recovery plans, what is the outcome associated with a backup plan?",
    options: [
      "System functionality",
      "Reduced recovery complexity",
      "Employee safety",
      "Data availability"
    ],
    correctAnswer: 3,
    explanation: "The Key Difference table between backup and recovery plans lists data availability as the outcome for the backup plan, contrasted with system functionality for the recovery plan.\n\nSystem functionality is the table's stated outcome for the recovery plan, not the backup plan.\n\nReduced recovery complexity is not an outcome listed in the table for either plan type.\n\nEmployee safety is not part of the outcome comparison in the table."
  },
  {
    id: "csc304_ch6_048",
    course: "CSC 304",
    chapter: "Chapter 6",
    text: "Which of the following is a key objective of a contingency plan?",
    options: [
      "Safety and well-being",
      "Coordination",
      "All of these",
      "None of these"
    ],
    correctAnswer: 2,
    explanation: "The Key Objectives of Contingency Plan section lists safety and well-being as protecting personnel on premises and coordination as effectively coordinating recovery tasks, so both named items are genuinely part of the list, making all of these correct.\n\nSince both specific options are supported by the source, neither can be selected alone, and none of these is ruled out because at least one option is true."
  },
  {
    id: "csc304_ch6_049",
    course: "CSC 304",
    chapter: "Chapter 6",
    text: "In the comparison between backup and recovery plans, what is the timeline associated with a recovery plan?",
    options: [
      "After disruption occurs",
      "Ongoing and scheduled",
      "Only during pre-planning",
      "Only during vulnerability assessment"
    ],
    correctAnswer: 0,
    explanation: "The Key Difference table lists after disruption occurs as the timeline for the recovery plan, contrasted with ongoing and scheduled for the backup plan.\n\nOngoing and scheduled is the table's stated timeline for the backup plan, not the recovery plan.\n\nOnly during pre-planning is not a timeline listed in the table for either plan type.\n\nOnly during vulnerability assessment is not part of the timeline comparison in the table."
  },
  {
    id: "csc304_ch6_050",
    course: "CSC 304",
    chapter: "Chapter 6",
    text: "What is the scope of a recovery plan when compared with a backup plan?",
    options: [
      "Backup creation and management",
      "Full system restoration",
      "Data preservation only",
      "Risk identification only"
    ],
    correctAnswer: 1,
    explanation: "The Key Difference table lists full system restoration as the scope of the recovery plan, contrasted with backup creation and management as the scope of the backup plan.\n\nBackup creation and management is the table's stated scope for the backup plan, not the recovery plan.\n\nData preservation only reflects the backup plan's focus in the table, not the recovery plan's scope.\n\nRisk identification only is not part of the scope comparison in the table for either plan type."
  },
];

export default csc304Chapter6Questions;
