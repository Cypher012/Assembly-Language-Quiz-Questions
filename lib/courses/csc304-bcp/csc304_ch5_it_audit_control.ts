import { QuestionV2 } from "../../quiz-types";

const csc304Chapter5Questions: QuestionV2[] = [
  {
    id: "csc304_ch5_001",
    course: "CSC 304",
    chapter: "Chapter 5",
    text: "Why do organizations need standards for IT audit and control?",
    options: [
      "To meet organizational compliance and manage risk given sensitive data and cybersecurity threats",
      "To reduce the number of employees needed in the accounting department",
      "To replace the need for any physical security measures",
      "To eliminate the requirement for data backups"
    ],
    correctAnswer: 0,
    explanation: "The Why IT Audit and Control section lists data sensitivity, cybersecurity threats, and the necessity of standards for organizational compliance and risk management as the drivers for IT audit and control.\n\nReducing accounting staff is not mentioned anywhere in the source as a purpose of audit standards.\n\nReplacing physical security is contradicted by the source, which treats physical access breaches as a threat to guard against, not something audit replaces.\n\nEliminating backups is never discussed in the source and runs opposite to the goal of protecting data."
  },
  {
    id: "csc304_ch5_002",
    course: "CSC 304",
    chapter: "Chapter 5",
    text: "Which of the following is listed as a threat that makes IT audit and control necessary?",
    options: [
      "Excessive employee training budgets",
      "Cybersecurity risks and hacking",
      "Overuse of paper-based filing",
      "Too many software updates"
    ],
    correctAnswer: 1,
    explanation: "The Why IT Audit and Control section names cybersecurity risks, hacking, and unauthorized access as the threats driving the need for audit and control.\n\nExcessive training budgets is not listed as a threat anywhere in the source.\n\nPaper-based filing overuse is not mentioned as a threat in the source.\n\nToo many software updates is not identified as a threat in the source material."
  },
  {
    id: "csc304_ch5_003",
    course: "CSC 304",
    chapter: "Chapter 5",
    text: "What is an information system?",
    options: [
      "A single application used only for storing files",
      "A network of computers connected for entertainment",
      "People, hardware, software, data, and procedures interacting to provide timely information",
      "A physical building where servers are housed"
    ],
    correctAnswer: 2,
    explanation: "The Information Systems Fundamentals section defines an information system as a collection of people, hardware, software, data, and procedures that interact to provide timely information to authorized recipients for decision-making.\n\nA single software application for file storage is far narrower than the definition given and omits people and procedures.\n\nA network for entertainment misstates the purpose, which the source ties to decision-making, not entertainment.\n\nA physical building for servers describes infrastructure, not the definition of an information system given in the source."
  },
  {
    id: "csc304_ch5_004",
    course: "CSC 304",
    chapter: "Chapter 5",
    text: "In the general system model of INPUT, PROCESSING, STORAGE, and OUTPUT, what role does feedback play?",
    options: [
      "It permanently deletes outdated stored data",
      "It replaces the need for the processing stage",
      "It only applies to human systems, never computer-based systems",
      "It enables system adjustment and control, and is critical for detecting deviations"
    ],
    correctAnswer: 3,
    explanation: "The General System Model section states that feedback enables system adjustment and control, and is critical for maintaining operational integrity and detecting deviations.\n\nDeleting outdated data is not a function described for feedback in the source.\n\nReplacing the processing stage is not supported, since feedback is shown as a separate loop that adjusts the system rather than substituting a stage.\n\nRestricting feedback to human systems contradicts the source, which lists computer-based systems among the system types the model applies to."
  },
  {
    id: "csc304_ch5_005",
    course: "CSC 304",
    chapter: "Chapter 5",
    text: "What is the primary objective of an IS control?",
    options: [
      "To provide reasonable assurance that business objectives will be achieved",
      "To guarantee that no employee ever makes an error",
      "To eliminate the need for a separate audit function",
      "To increase the price of IT services sold to clients"
    ],
    correctAnswer: 0,
    explanation: "The IS Controls section defines control as policies, procedures, practices, and enterprise structure designed to provide reasonable assurance that business objectives will be achieved, and to prevent, detect, and correct undesired events.\n\nGuaranteeing zero employee error overstates the definition, which speaks of reasonable assurance rather than a guarantee.\n\nEliminating the audit function contradicts the source, which treats auditing as the process that evaluates these very controls.\n\nIncreasing service pricing is not part of the control definition given in the source."
  },
  {
    id: "csc304_ch5_006",
    course: "CSC 304",
    chapter: "Chapter 5",
    text: "In IS audit terminology, the process of reviewing implemented systems and evaluating the effectiveness of controls is called auditing.",
    options: [
      "True",
      "False",
      "Maybe",
      "I don't know"
    ],
    correctAnswer: 0,
    explanation: "The IS Controls section defines IS auditing as the process of reviewing implemented systems, providing consultation, and evaluating the reliability and operational effectiveness of controls, which matches this statement exactly."
  },
  {
    id: "csc304_ch5_007",
    course: "CSC 304",
    chapter: "Chapter 5",
    text: "IS auditing involves reviewing implemented systems, providing consultation, and evaluating what?",
    options: [
      "The color scheme of the user interface",
      "The reliability and operational effectiveness of controls",
      "The number of employees in the marketing department",
      "The physical dimensions of the server room"
    ],
    correctAnswer: 1,
    explanation: "The IS Controls section defines IS auditing as reviewing implemented systems, providing consultation, and evaluating the reliability and operational effectiveness of controls.\n\nInterface color scheme is not part of the IS auditing definition given in the source.\n\nMarketing department headcount is unrelated to the definition of IS auditing in the source.\n\nServer room dimensions are not mentioned as part of what IS auditing evaluates."
  },
  {
    id: "csc304_ch5_008",
    course: "CSC 304",
    chapter: "Chapter 5",
    text: "Which business driver is listed as a reason control and audit are essential in the big data era?",
    options: [
      "Fewer organizations are collecting data than before",
      "Technology is becoming a minor component of business",
      "Massive information volumes require management",
      "Decision-making no longer relies on data"
    ],
    correctAnswer: 2,
    explanation: "The Why Control and Audit Are Essential section lists the big data era, described as massive information volumes requiring management, as a business driver.\n\nFewer organizations collecting data contradicts the big data era premise stated in the source.\n\nTechnology becoming minor contradicts the source, which describes technology integration as a core component of modern business.\n\nDecision-making no longer relying on data contradicts the source, which states data is critical for organizational decision-making."
  },
  {
    id: "csc304_ch5_009",
    course: "CSC 304",
    chapter: "Chapter 5",
    text: "Among the business drivers for control and audit, what quality must information flow maintain throughout an organization?",
    options: [
      "The largest possible file size",
      "Information restricted only to executives",
      "Information stored in a single uncontrolled format",
      "Timely and accurate information"
    ],
    correctAnswer: 3,
    explanation: "The Why Control and Audit Are Essential section states the need to ensure timely, accurate information flow throughout the organization.\n\nLargest possible file size is not a quality the source associates with information flow.\n\nRestricting information only to executives is not stated as a requirement for information flow in the source.\n\nAn uncontrolled single format contradicts the emphasis on data quality, integrity, reliability, and validity described in the source."
  },
  {
    id: "csc304_ch5_010",
    course: "CSC 304",
    chapter: "Chapter 5",
    text: "What is described as the primary reason for asset safeguarding?",
    options: [
      "Maintaining data integrity to achieve system effectiveness and efficiency",
      "Reducing the number of software licenses purchased",
      "Increasing employee turnover",
      "Avoiding the use of computer-based systems entirely"
    ],
    correctAnswer: 0,
    explanation: "The Asset Safeguarding section states the primary reason is to maintain data integrity to achieve system effectiveness, system efficiency, and support business continuity.\n\nReducing software licenses is not connected to asset safeguarding in the source.\n\nIncreasing employee turnover is not a stated goal of asset safeguarding.\n\nAvoiding computer-based systems entirely contradicts the source's framing of information systems as central to business operations."
  },
  {
    id: "csc304_ch5_011",
    course: "CSC 304",
    chapter: "Chapter 5",
    text: "What consequence of poor controls is described when high-level decisions rely on inaccurate data?",
    options: [
      "Faster processing speed",
      "Incorrect decisions",
      "Increased employee satisfaction",
      "Lower operating costs"
    ],
    correctAnswer: 1,
    explanation: "The Organizational Costs of Data Loss section lists incorrect decisions as a consequence, since high-level decisions require accurate data for quality outcomes.\n\nFaster processing speed is not listed as a consequence of poor controls in the source.\n\nIncreased employee satisfaction is not connected to poor controls in the source.\n\nLower operating costs is not a consequence the source attributes to poor controls; instead it frames poor controls as costly."
  },
  {
    id: "csc304_ch5_012",
    course: "CSC 304",
    chapter: "Chapter 5",
    text: "Which of the following is a goal of internal control?",
    options: [
      "Effectiveness",
      "Maximizing employee overtime hours",
      "All of these",
      "None of these"
    ],
    correctAnswer: 0,
    explanation: "The Goals of Internal Control section lists asset safeguarding, data integrity, system efficiency, and effectiveness as the four goals, so effectiveness is directly supported. Maximizing employee overtime hours is never mentioned anywhere in the source as a goal of internal control."
  },
  {
    id: "csc304_ch5_013",
    course: "CSC 304",
    chapter: "Chapter 5",
    text: "Which of the following is listed among the primary threats under the costs of computer abuse?",
    options: [
      "Excessive employee vacation days",
      "Overly detailed documentation",
      "Unauthorized access to systems",
      "Too frequent software backups"
    ],
    correctAnswer: 2,
    explanation: "The Costs of Computer Abuse section lists unauthorized access to systems, viruses and malware, physical access breaches, sensitive data theft, and data integrity compromise as primary threats.\n\nExcessive vacation days is not listed as a threat in the source.\n\nOverly detailed documentation is not identified as a threat in the source.\n\nToo frequent backups is not listed as a threat; the source treats data protection measures as desirable, not harmful."
  },
  {
    id: "csc304_ch5_014",
    course: "CSC 304",
    chapter: "Chapter 5",
    text: "An external auditor's attest objectives focus on which two areas?",
    options: [
      "Employee morale and workplace culture",
      "Marketing strategy and brand image",
      "Product pricing and sales volume",
      "Asset safeguarding and data integrity"
    ],
    correctAnswer: 3,
    explanation: "The Information Systems Auditing section states that the external auditor's attest objectives focus on asset safeguarding and data integrity.\n\nEmployee morale and workplace culture are not part of the attest objectives described in the source.\n\nMarketing strategy and brand image are not mentioned as auditor objectives in the source.\n\nProduct pricing and sales volume are not part of the attest objectives described in the source."
  },
  {
    id: "csc304_ch5_015",
    course: "CSC 304",
    chapter: "Chapter 5",
    text: "What distinguishes an internal auditor's management objectives from an external auditor's attest objectives?",
    options: [
      "Internal auditors add effectiveness and efficiency objectives to the attest objectives",
      "Internal auditors ignore asset safeguarding entirely",
      "Internal auditors focus only on marketing outcomes broadly",
      "Internal auditors are not concerned with data integrity"
    ],
    correctAnswer: 0,
    explanation: "The Two Perspectives section states internal auditors pursue the attest objectives of asset safeguarding and data integrity, plus effectiveness objectives and efficiency objectives.\n\nIgnoring asset safeguarding contradicts the source, which includes it as part of the internal auditor's objectives.\n\nFocusing only on marketing outcomes is not mentioned anywhere in the source.\n\nBeing unconcerned with data integrity contradicts the source, which lists data integrity as part of the internal auditor's objectives."
  },
  {
    id: "csc304_ch5_016",
    course: "CSC 304",
    chapter: "Chapter 5",
    text: "Which of the following is listed as a goal of internal control?",
    options: [
      "Maximum staff turnover",
      "System efficiency",
      "Reduced customer base",
      "Elimination of all data storage"
    ],
    correctAnswer: 1,
    explanation: "The Goals of Internal Control section lists asset safeguarding, data integrity, system efficiency, and effectiveness as the four goals.\n\nMaximum staff turnover is not listed as a goal of internal control in the source.\n\nReduced customer base is not mentioned as a goal in the source.\n\nEliminating all data storage contradicts the source's emphasis on protecting and maintaining data."
  },
  {
    id: "csc304_ch5_017",
    course: "CSC 304",
    chapter: "Chapter 5",
    text: "Under internal control components, which assessment areas apply to the personnel component?",
    options: [
      "Only the number of years a company has existed",
      "Only the physical height of the office building",
      "Staff trustworthiness, knowledge, competence, and qualifications",
      "Only the brand of computer equipment used"
    ],
    correctAnswer: 2,
    explanation: "The Personnel section lists staff trustworthiness, knowledge and competence, appropriate skills and training, and qualifications and background as assessment areas.\n\nCompany age is not part of the personnel assessment areas listed in the source.\n\nBuilding height is not mentioned anywhere in the personnel component.\n\nComputer equipment brand is not part of the personnel assessment areas in the source."
  },
  {
    id: "csc304_ch5_018",
    course: "CSC 304",
    chapter: "Chapter 5",
    text: "An external auditor's objectives include effectiveness and efficiency objectives in addition to asset safeguarding and data integrity.",
    options: [
      "True",
      "False",
      "Maybe",
      "I don't know"
    ],
    correctAnswer: 1,
    explanation: "The Two Perspectives section states that effectiveness and efficiency objectives belong to the internal auditor, who adds them on top of the attest objectives. The external auditor's attest objectives are limited to asset safeguarding and data integrity only."
  },
  {
    id: "csc304_ch5_019",
    course: "CSC 304",
    chapter: "Chapter 5",
    text: "A company requires that the employee who authorizes a purchase order is different from the employee who executes the payment. Which internal control component does this illustrate?",
    options: [
      "Record keeping",
      "Management supervision and review",
      "Concentration of programs and data",
      "Segregation of duties"
    ],
    correctAnswer: 3,
    explanation: "The Segregation of Duties section describes splitting stages of transaction processing between different people, giving authorization versus execution as an example, which matches this scenario.\n\nRecord keeping concerns protection and storage of documents and audit trails, not splitting duties between people.\n\nManagement supervision and review concerns detecting errors and fraud through oversight, not the structural separation of tasks.\n\nConcentration of programs and data concerns separating storage locations by sensitivity, not dividing responsibilities among staff."
  },
  {
    id: "csc304_ch5_020",
    course: "CSC 304",
    chapter: "Chapter 5",
    text: "A finance system requires a digital signature before a budget request is approved. Which internal control component does this represent?",
    options: [
      "Authorization procedures",
      "Access to assets and records",
      "Concentration of programs and data",
      "Personnel"
    ],
    correctAnswer: 0,
    explanation: "The Authorization Procedures section lists digital signatures and digitized budget approval workflows as examples of ensuring transactions are properly approved, matching this scenario.\n\nAccess to assets and records concerns protecting records from unauthorized access and monitoring access attempts, not approval workflows.\n\nConcentration of programs and data concerns separating storage by sensitivity, not approval of transactions.\n\nPersonnel concerns staff trustworthiness and competence, not the approval mechanism for a transaction."
  },
  {
    id: "csc304_ch5_021",
    course: "CSC 304",
    chapter: "Chapter 5",
    text: "Which control component is primarily concerned with protection and storage of documents and audit trails?",
    options: [
      "Authorization procedures",
      "Record keeping",
      "Segregation of duties",
      "Management supervision and review"
    ],
    correctAnswer: 1,
    explanation: "The Record Keeping section lists protection and storage of documents, transaction details documentation, audit trails, and retention and archival as its controls.\n\nAuthorization procedures ensure transactions are properly approved, which is a different concern from storing documents.\n\nSegregation of duties splits processing stages between people, not document storage.\n\nManagement supervision and review focuses on detecting errors and fraud through oversight, not document retention."
  },
  {
    id: "csc304_ch5_022",
    course: "CSC 304",
    chapter: "Chapter 5",
    text: "Which control measures are listed under access to assets and records?",
    options: [
      "Increasing the number of company holidays",
      "Reducing the number of audit reports produced",
      "Implementing access controls and monitoring access attempts",
      "Removing all password requirements"
    ],
    correctAnswer: 2,
    explanation: "The Access to Assets and Records section lists protecting records from unauthorized access, implementing access controls, monitoring and logging access attempts, and restricting physical access to sensitive materials.\n\nCompany holiday count is not part of this control component in the source.\n\nReducing audit reports is not listed as an access control measure in the source.\n\nRemoving password requirements contradicts the goal of protecting records from unauthorized access."
  },
  {
    id: "csc304_ch5_023",
    course: "CSC 304",
    chapter: "Chapter 5",
    text: "What is the stated purpose of management supervision and review as an internal control component?",
    options: [
      "To increase the marketing budget",
      "To replace the need for authorization procedures",
      "To eliminate the need for record keeping",
      "To help detect and deter both errors and fraud"
    ],
    correctAnswer: 3,
    explanation: "The Management Supervision and Review section states its purpose is to help detect and deter both errors and fraud, through regular review, monitoring exceptions, follow-up, and performance monitoring.\n\nIncreasing marketing budget is unrelated to this control component in the source.\n\nReplacing authorization procedures is not stated; the source lists both as distinct components, not substitutes.\n\nEliminating record keeping is not supported, since the source lists both as separate, coexisting components."
  },
  {
    id: "csc304_ch5_024",
    course: "CSC 304",
    chapter: "Chapter 5",
    text: "Which of the following is included among ISACA's IS auditing publications?",
    options: [
      "IS Auditing Standards",
      "IS Auditing Guidelines",
      "All of these",
      "None of these"
    ],
    correctAnswer: 2,
    explanation: "The ISACA section lists IS Auditing Standards as 16 mandatory requirements and IS Auditing Guidelines as 39 guidelines for applying those standards, so both named items are real ISACA publications, making all of these the correct choice.

Since both specific options are supported by the source, neither can be selected alone, and none of these is ruled out because at least one option is true."
  },
  {
    id: "csc304_ch5_025",
    course: "CSC 304",
    chapter: "Chapter 5",
    text: "What is the rationale behind separating storage locations by sensitivity under concentration of programs and data?",
    options: [
      "To minimize risk exposure and unauthorized access",
      "To make files easier to delete accidentally",
      "To increase the total storage cost without benefit",
      "To ensure all data is stored in one shared public folder"
    ],
    correctAnswer: 0,
    explanation: "The Concentration of Programs and Data section states the rationale for separate storage locations is to minimize risk exposure and unauthorized access.\n\nMaking files easier to delete accidentally is not a goal described in the source.\n\nIncreasing storage cost without benefit is not the rationale given in the source.\n\nStoring all data in one shared public folder is the opposite of the separation strategy the source describes."
  },
  {
    id: "csc304_ch5_026",
    course: "CSC 304",
    chapter: "Chapter 5",
    text: "An IS auditor must be competent to independently evaluate whether business process activities meet which two criteria?",
    options: [
      "Completed faster than the previous fiscal year end",
      "Recorded to established standards and reported to established criteria",
      "Approved only by the marketing department head",
      "Documented only in handwritten paper form"
    ],
    correctAnswer: 1,
    explanation: "The IS Auditor Profile section states the auditor must independently evaluate whether activities are recorded according to established standards and reported according to established criteria.\n\nCompletion speed relative to a previous year is not part of the competence requirement described in the source.\n\nMarketing department approval is not mentioned as a criterion in the source.\n\nHandwritten documentation is not a requirement described in the source."
  },
  {
    id: "csc304_ch5_027",
    course: "CSC 304",
    chapter: "Chapter 5",
    text: "What are the two basic functions of an IS auditor?",
    options: [
      "Software development and marketing research",
      "Payroll processing and inventory counting",
      "Evidence collection and evidence evaluation",
      "Hardware repair and network cabling"
    ],
    correctAnswer: 2,
    explanation: "The IS Auditor Profile section lists evidence collection and evidence evaluation as the two basic functions of an IS auditor.\n\nSoftware development and marketing research are not listed as basic auditor functions in the source.\n\nPayroll processing and inventory counting are not part of the auditor's basic functions described in the source.\n\nHardware repair and network cabling are not mentioned as auditor functions in the source."
  },
  {
    id: "csc304_ch5_028",
    course: "CSC 304",
    chapter: "Chapter 5",
    text: "Which of the following is listed as a key skill of an IT auditor?",
    options: [
      "Expertise in graphic design software",
      "Fluency in a foreign programming syntax not used by the organization",
      "Certification in culinary arts",
      "Risk assessment capabilities"
    ],
    correctAnswer: 3,
    explanation: "The IT Auditor Skills and Functions section lists risk assessment capabilities among the key skills, alongside technical knowledge, audit methodologies, business process understanding, communication, independence, and critical thinking.\n\nGraphic design expertise is not listed as a key skill in the source.\n\nUnused foreign programming syntax is not a skill described in the source.\n\nCulinary arts certification is not mentioned as a relevant skill in the source."
  },
  {
    id: "csc304_ch5_029",
    course: "CSC 304",
    chapter: "Chapter 5",
    text: "Which of the following is listed as a function of an IT auditor?",
    options: [
      "Assess control effectiveness and identify vulnerabilities",
      "Design the company marketing logo",
      "Set annual employee salary levels",
      "Manage the company cafeteria budget"
    ],
    correctAnswer: 0,
    explanation: "The IT Auditor Skills and Functions section lists assessing control effectiveness, identifying risks and vulnerabilities, evaluating compliance, providing recommendations, monitoring findings, and reporting to stakeholders as functions.\n\nDesigning a company logo is not listed as an auditor function in the source.\n\nSetting employee salaries is not part of the auditor's functions described in the source.\n\nManaging a cafeteria budget is not mentioned as an IT auditor function in the source."
  },
  {
    id: "csc304_ch5_030",
    course: "CSC 304",
    chapter: "Chapter 5",
    text: "The ISACA IS Auditing Guidelines consist of 39 guidelines that provide guidance on applying IS auditing standards.",
    options: [
      "True",
      "False",
      "Maybe",
      "I don't know"
    ],
    correctAnswer: 0,
    explanation: "The ISACA section states that IS Auditing Guidelines consist of 39 guidelines providing guidance on applying IS auditing standards, which matches this statement exactly."
  },
  {
    id: "csc304_ch5_031",
    course: "CSC 304",
    chapter: "Chapter 5",
    text: "An IT auditor is beginning an audit and reviews previous audit reports, conducts pre-audit interviews, and does background reading to determine the main focus areas. Which phase of the IS audit process is this?",
    options: [
      "Fieldwork",
      "Scoping and pre-audit survey",
      "Analysis",
      "Closure"
    ],
    correctAnswer: 1,
    explanation: "The Phase 1: Scoping and Pre-Audit Survey section lists background reading, web browsing, previous audit reports, pre-audit interviews, observations, and subjective impressions as information sources for determining the main focus areas.\n\nFieldwork involves gathering evidence and testing controls once the scope is already set, not determining the initial focus.\n\nAnalysis involves sorting and reviewing evidence already gathered, which comes after scoping.\n\nClosure involves preparing notes for future audits and follow-up, which occurs at the end of the process, not the beginning."
  },
  {
    id: "csc304_ch5_032",
    course: "CSC 304",
    chapter: "Chapter 5",
    text: "During which phase of the IS audit process does the auditor develop a risk-control-matrix and allocate resources?",
    options: [
      "Reporting",
      "Scoping and pre-audit survey",
      "Planning and preparation",
      "Closure"
    ],
    correctAnswer: 2,
    explanation: "The Phase 2: Planning and Preparation section lists breaking scope into detail, generating an audit work plan, developing a risk-control-matrix, allocating resources, and establishing a schedule.\n\nReporting involves communicating findings and recommendations, which happens later, not developing the risk-control-matrix.\n\nScoping and pre-audit survey determines the main focus areas before detailed planning occurs, and does not include the risk-control-matrix.\n\nClosure involves follow-up and archiving documentation after the audit is complete, not building the risk-control-matrix."
  },
  {
    id: "csc304_ch5_033",
    course: "CSC 304",
    chapter: "Chapter 5",
    text: "Interviewing staff and managers, reviewing documents and printouts, and testing controls belong to which phase of the IS audit process?",
    options: [
      "Planning and preparation",
      "Analysis",
      "Closure",
      "Fieldwork"
    ],
    correctAnswer: 3,
    explanation: "The Phase 3: Fieldwork section lists gathering evidence, interviewing staff and managers, reviewing documents, printouts and data, observing processes, testing controls, and documenting findings.\n\nPlanning and preparation focuses on generating the work plan and risk-control-matrix before evidence gathering begins.\n\nAnalysis focuses on sorting and reviewing evidence already collected during fieldwork, not collecting it.\n\nClosure focuses on follow-up and archiving after the audit's substantive work is complete."
  },
  {
    id: "csc304_ch5_034",
    course: "CSC 304",
    chapter: "Chapter 5",
    text: "An auditor examines political, economic, social, and technological factors affecting an organization's IT environment. Which analysis technique is being applied?",
    options: [
      "PEST analysis",
      "SWOT analysis",
      "Segregation of duties review",
      "Authorization procedure review"
    ],
    correctAnswer: 0,
    explanation: "The Phase 4: Analysis section lists PEST analysis as covering political, economic, social, and technological factors, matching this scenario exactly.\n\nSWOT analysis instead covers strengths, weaknesses, opportunities, and threats, a different set of factors than political, economic, social, and technological ones.\n\nSegregation of duties review is an internal control component concerned with dividing responsibilities, not an analysis technique for external factors.\n\nAuthorization procedure review concerns transaction approval, not the categorization of environmental factors."
  },
  {
    id: "csc304_ch5_035",
    course: "CSC 304",
    chapter: "Chapter 5",
    text: "Which analysis technique used during the Analysis phase examines strengths, weaknesses, opportunities, and threats?",
    options: [
      "PEST analysis",
      "SWOT analysis",
      "COBIT framework",
      "ITIL framework"
    ],
    correctAnswer: 1,
    explanation: "The Phase 4: Analysis section lists SWOT analysis as covering strengths, weaknesses, opportunities, and threats.\n\nPEST analysis instead covers political, economic, social, and technological factors, a different framework from SWOT.\n\nCOBIT is described elsewhere in the material as a framework of IT control objectives, not an analysis technique used in Phase 4.\n\nITIL is described as best practices for IT service management, not an analysis technique used during the Analysis phase."
  },
  {
    id: "csc304_ch5_036",
    course: "CSC 304",
    chapter: "Chapter 5",
    text: "Which of the following is a phase of the IS audit process?",
    options: [
      "Marketing campaign design",
      "Employee birthday scheduling",
      "All of these",
      "None of these"
    ],
    correctAnswer: 3,
    explanation: "The IS Audit Process section lists exactly six phases: Scoping and Pre-Audit Survey, Planning and Preparation, Fieldwork, Analysis, Reporting, and Closure. Marketing campaign design and employee birthday scheduling do not appear among these six phases anywhere in the source, so none of these is correct."
  },
  {
    id: "csc304_ch5_037",
    course: "CSC 304",
    chapter: "Chapter 5",
    text: "During which phase does the auditor communicate findings to management and discuss remediation actions?",
    options: [
      "Fieldwork",
      "Scoping and pre-audit survey",
      "Reporting",
      "Analysis"
    ],
    correctAnswer: 2,
    explanation: "The Phase 5: Reporting section lists communicating findings to management, presenting analysis results, providing recommendations, discussing remediation actions, and establishing a timeline for improvements.\n\nFieldwork focuses on gathering evidence and testing controls, which occurs before findings are communicated.\n\nScoping and pre-audit survey occurs at the start of the audit, well before findings exist to report.\n\nAnalysis focuses on sorting and organizing evidence, which precedes communicating the findings to management."
  },
  {
    id: "csc304_ch5_038",
    course: "CSC 304",
    chapter: "Chapter 5",
    text: "Which activities are listed under the closure phase of the IS audit process?",
    options: [
      "Gathering evidence and interviewing operational staff",
      "Developing a risk-control-matrix for the audit",
      "Presenting analysis results to management initially",
      "Preparing notes for future audits and follow-up"
    ],
    correctAnswer: 3,
    explanation: "The Phase 6: Closure section lists preparing notes for future audits, following up on management actions, ensuring promised actions are completed, documenting lessons learned, and archiving documentation.\n\nGathering evidence and interviewing staff describes the Fieldwork phase, which occurs earlier in the process.\n\nDeveloping a risk-control-matrix describes the Planning and Preparation phase, not Closure.\n\nPresenting analysis results for the first time describes the Reporting phase, which precedes Closure."
  },
  {
    id: "csc304_ch5_039",
    course: "CSC 304",
    chapter: "Chapter 5",
    text: "Which organization issues 16 mandatory requirements for IS auditing and reporting?",
    options: [
      "ISACA",
      "IIA",
      "ITIL",
      "ISO 27001"
    ],
    correctAnswer: 0,
    explanation: "The ISACA section states its IS Auditing Standards consist of 16 mandatory requirements for IS auditing and reporting.\n\nIIA is described as issuing the Global Technology Audit Guide, not the 16 mandatory standards.\n\nITIL is described as best practices in IT service management, not a set of mandatory auditing standards.\n\nISO 27001 is described as a specification for information security management, not the source of the 16 mandatory requirements."
  },
  {
    id: "csc304_ch5_040",
    course: "CSC 304",
    chapter: "Chapter 5",
    text: "What is COBIT?",
    options: [
      "A single software tool for encrypting stored files",
      "A framework of good business practices for information technology",
      "A physical security device for server rooms",
      "A payroll processing system for staff"
    ],
    correctAnswer: 1,
    explanation: "The COBIT section defines it as a framework containing good business practices relating to information technology, used to provide control objectives, guide IT governance, and align IT with business objectives.\n\nAn encryption software tool is not how COBIT is described in the source.\n\nA physical security device misrepresents COBIT, which the source frames as a governance framework, not hardware.\n\nA payroll processing system is unrelated to the definition of COBIT given in the source."
  },
  {
    id: "csc304_ch5_041",
    course: "CSC 304",
    chapter: "Chapter 5",
    text: "Which standard focuses on establishing and maintaining an effective information security management system using continual improvement?",
    options: [
      "COBIT",
      "ITIL",
      "ISO 27001",
      "GTAG"
    ],
    correctAnswer: 2,
    explanation: "The ISO 27001 section states its objectives are to establish and maintain an effective information management system using a continual improvement approach, and to select proportionate security controls.\n\nCOBIT is described as a framework of IT control objectives and governance practices, not specifically a continual-improvement security management standard.\n\nITIL is described as best practices in IT service management, a different focus from information security management.\n\nGTAG is described as a guide issued by the IIA on IT management and controls, not a continual-improvement security management standard itself."
  },
  {
    id: "csc304_ch5_042",
    course: "CSC 304",
    chapter: "Chapter 5",
    text: "The Analysis phase of the IS audit process comes before the Fieldwork phase in the sequence described.",
    options: [
      "True",
      "False",
      "Maybe",
      "I don't know"
    ],
    correctAnswer: 1,
    explanation: "The IS Audit Process section orders the phases as Scoping and Pre-Audit Survey, Planning and Preparation, Fieldwork, Analysis, Reporting, and Closure, so Fieldwork precedes Analysis rather than following it."
  },
  {
    id: "csc304_ch5_043",
    course: "CSC 304",
    chapter: "Chapter 5",
    text: "The Institute of Internal Auditors contributes to IT audit practice primarily by issuing which guide?",
    options: [
      "The COBIT Framework Manual",
      "The ISO 27001 Specification",
      "The ITIL Service Handbook",
      "The Global Technology Audit Guide"
    ],
    correctAnswer: 3,
    explanation: "The IIA section states the Institute of Internal Auditors issues the Global Technology Audit Guide, providing management guidance on IT management, controls, security, and IT-associated risks.\n\nThe COBIT Framework is attributed to a separate body describing control objectives for IT, not the IIA's contribution.\n\nThe ISO 27001 Specification is a distinct information security management standard, not something the IIA issues.\n\nThe ITIL Service Handbook is described under IT service management best practices, not as an IIA publication."
  },
  {
    id: "csc304_ch5_044",
    course: "CSC 304",
    chapter: "Chapter 5",
    text: "ITIL was developed by which body and covers which area?",
    options: [
      "The UK's Office of Government Commerce, covering best practices in IT service management",
      "A private consulting firm, covering only network cabling standards",
      "A university research lab, covering only academic grading systems",
      "An international bank, covering only currency exchange rates"
    ],
    correctAnswer: 0,
    explanation: "The ITIL section states it is developed by the UK's Office of Government Commerce, defining best practices in IT service management to provide a systematic, professional approach.\n\nA private consulting firm focused on cabling standards is not how the source describes ITIL's origin or scope.\n\nA university research lab focused on grading systems is unrelated to the source's description of ITIL.\n\nAn international bank focused on currency exchange is not connected to ITIL as described in the source."
  },
  {
    id: "csc304_ch5_045",
    course: "CSC 304",
    chapter: "Chapter 5",
    text: "Which of the 3 E's of audit standards concerns whether resources are acquired at the lowest cost while minimizing waste?",
    options: [
      "Efficiency",
      "Economy",
      "Effectiveness",
      "Equity"
    ],
    correctAnswer: 1,
    explanation: "The Audit Standards and Metrics section defines economy as the cost-effectiveness of resource acquisition, asking whether resources are acquired at the lowest cost and minimizing waste.\n\nEfficiency instead concerns whether resources are used optimally to maximize output from input, not acquisition cost.\n\nEffectiveness concerns whether intended results and business objectives are achieved, not acquisition cost.\n\nEquity is not one of the 3 E's listed in the source."
  },
  {
    id: "csc304_ch5_046",
    course: "CSC 304",
    chapter: "Chapter 5",
    text: "Which of the 3 E's asks whether resources are being used optimally to produce maximum output from input?",
    options: [
      "Economy",
      "Effectiveness",
      "Efficiency",
      "Compliance"
    ],
    correctAnswer: 2,
    explanation: "The Audit Standards and Metrics section defines efficiency as effective use of resources, asking whether resources are used optimally for maximum output from input.\n\nEconomy instead concerns cost-effectiveness of resource acquisition, a different question from optimal use.\n\nEffectiveness concerns whether intended results and objectives are achieved, not resource utilization itself.\n\nCompliance is listed separately among the objectives of IS/IT controls, not as one of the 3 E's."
  },
  {
    id: "csc304_ch5_047",
    course: "CSC 304",
    chapter: "Chapter 5",
    text: "Which objective of IS/IT controls concerns adherence to applicable laws, regulations, and standards?",
    options: [
      "Asset safeguarding",
      "System efficiency",
      "Data integrity",
      "Compliance"
    ],
    correctAnswer: 3,
    explanation: "The Objectives of IS/IT Controls section lists compliance as adherence to applicable laws, regulations, and standards.\n\nAsset safeguarding instead concerns protecting organizational assets from loss, theft, or unauthorized use, a different objective.\n\nSystem efficiency concerns optimizing use of IT resources and processes, not legal adherence.\n\nData integrity concerns ensuring data is accurate, complete, and reliable, not regulatory adherence."
  },
  {
    id: "csc304_ch5_048",
    course: "CSC 304",
    chapter: "Chapter 5",
    text: "Which of the following is one of the 3 E's of audit standards?",
    options: [
      "Effectiveness",
      "Equity",
      "All of these",
      "None of these"
    ],
    correctAnswer: 0,
    explanation: "The Audit Standards and Metrics section names economy, efficiency, and effectiveness as the 3 E's, so effectiveness is directly supported. Equity is never mentioned anywhere in the source as one of the 3 E's, so it cannot be included."
  },
  {
    id: "csc304_ch5_049",
    course: "CSC 304",
    chapter: "Chapter 5",
    text: "Which objective of IS/IT controls involves identifying, assessing, and mitigating IT-related risks?",
    options: [
      "Risk management",
      "Effectiveness",
      "Asset safeguarding",
      "Compliance"
    ],
    correctAnswer: 0,
    explanation: "The Objectives of IS/IT Controls section defines risk management as identifying, assessing, and mitigating IT-related risks.\n\nEffectiveness instead concerns achieving business objectives through proper IT management, not risk identification specifically.\n\nAsset safeguarding concerns protecting assets from loss, theft, or unauthorized use, a related but distinct objective.\n\nCompliance concerns adherence to laws and regulations, not the identification and mitigation of risks."
  },
  {
    id: "csc304_ch5_050",
    course: "CSC 304",
    chapter: "Chapter 5",
    text: "Which of the following is listed as a supporting function of IS/IT controls?",
    options: [
      "Increasing the number of paid holidays",
      "Detecting and preventing fraud and errors",
      "Reducing the size of the IT budget to zero",
      "Removing all data backups"
    ],
    correctAnswer: 1,
    explanation: "The Supporting Functions subsection lists enabling informed decision-making, protecting confidentiality, ensuring continuity of IT operations, and detecting and preventing fraud and errors.\n\nIncreasing paid holidays is not listed as a supporting function in the source.\n\nReducing the IT budget to zero contradicts the goal of ensuring continuity of IT operations.\n\nRemoving all data backups contradicts the goal of protecting confidentiality and ensuring continuity described in the source."
  },
];

export default csc304Chapter5Questions;
