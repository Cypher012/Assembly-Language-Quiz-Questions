import { QuestionV2 } from "@/lib/quiz-types";

const csc306Chapter2Questions: QuestionV2[] = [
  {
    id: "csc306_ch2_001",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "Which of the following best matches the ISO 9241-11:2018 definition of usability?",
    options: [
      "How well specified users achieve specified goals with effectiveness, efficiency, and satisfaction in context",
      "The extent to which a product is free of software bugs and crashes",
      "The extent to which an interface uses bright colours and animated transitions",
      "The extent to which a product costs less than its competitors"
    ],
    correctAnswer: 0,
    explanation: "ISO 9241-11:2018 defines usability as the extent to which specified users can use a product to achieve specified goals with effectiveness, efficiency and satisfaction in a specified context of use.\n\nFreedom from bugs and crashes is a software quality concern, not the ISO definition of usability, which centres on users, goals, and context.\n\nBright colours and animated transitions are visual design choices, not part of this definition.\n\nCost relative to competitors is a business consideration unrelated to the ISO usability definition."
  },
  {
    id: "csc306_ch2_002",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "Jakob Nielsen (1993) describes usability as what kind of property?",
    options: [
      "A single, one-dimensional property with one attribute",
      "A multi-component property with five traditional attributes",
      "A property that only applies to desktop software",
      "A property that can only be measured after a product has failed in the market"
    ],
    correctAnswer: 1,
    explanation: "Nielsen (1993) states that usability is not a single, one-dimensional property of a user interface, but has multiple components and is traditionally associated with five usability attributes.\n\nDescribing usability as single and one-dimensional is the direct opposite of Nielsen's view.\n\nNielsen's definition is not restricted to desktop software; it applies generally to user interfaces.\n\nNielsen's definition does not require market failure before usability can be measured; the five components are measurable independently at any stage."
  },
  {
    id: "csc306_ch2_003",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "The three dimensions of context for usability are specified users, specified goals, and specified context of use. Which of the following belongs under specified context of use?",
    options: [
      "Novices versus experts",
      "Completing a task",
      "Device and platform constraints",
      "Making a transaction"
    ],
    correctAnswer: 2,
    explanation: "Device and platform constraints are listed under the specified context of use dimension, alongside physical environment, social setting, and organizational culture.\n\nNovices versus experts is listed under specified users, not context of use.\n\nCompleting a task is listed under specified goals, describing what the user wants to accomplish rather than the surrounding context.\n\nMaking a transaction is also listed under specified goals, not context of use."
  },
  {
    id: "csc306_ch2_004",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "A desktop website is squeezed directly onto a phone screen, producing small buttons that are hard to tap and difficult navigation for a user who is on the move. The same users want the same goal as on desktop. What does this case study illustrate?",
    options: [
      "The design failed because the users changed between desktop and mobile",
      "The design failed because the goal changed between desktop and mobile",
      "The design failed because the ISO definition of usability does not apply to mobile apps",
      "The design failed because the context changed while the interface stayed the same"
    ],
    correctAnswer: 3,
    explanation: "The case study is built around the lesson 'same users, same goals, wrong context': the interface was not adapted to the mobile context, such as smaller screens and on-the-move usage, even though the users and their goals stayed the same.\n\nThe users did not change between the desktop and mobile versions, so a change in users does not explain the failure.\n\nThe goal, such as completing a task or finding information, also stayed the same, so a change in goal does not explain the failure.\n\nThe ISO definition of usability applies to any specified context, including mobile; the case study shows what happens when context is ignored, not that the definition fails to apply."
  },
  {
    id: "csc306_ch2_005",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "Good HCI starts with context, since technology changes but context is constant.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "This statement is true. It is presented as the key lesson of the mobile app case study, emphasizing that even when users and goals remain the same, ignoring context produces a failed design."
  },
  {
    id: "csc306_ch2_006",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "Which of the following is one of the three dimensions that give usability its context, alongside specified users and specified context of use?",
    options: [
      "Specified goals",
      "Specified budget",
      "Specified programming language",
      "Specified marketing plan"
    ],
    correctAnswer: 0,
    explanation: "Specified goals is the second of the three dimensions of usability context, covering things like completing a task, finding information, making a transaction, or communicating with others.\n\nSpecified budget is not one of the three dimensions described.\n\nSpecified programming language is not one of the three dimensions described.\n\nSpecified marketing plan is not one of the three dimensions described."
  },
  {
    id: "csc306_ch2_007",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "A new user is able to book a flight in under five minutes without prior experience with the system. Which of Nielsen's five usability components does this measure most directly?",
    options: [
      "Efficiency",
      "Learnability",
      "Memorability",
      "Error Rate"
    ],
    correctAnswer: 1,
    explanation: "Learnability asks whether first-time users can accomplish basic tasks, measured through time-to-first-success, exactly what a new user booking a flight in under five minutes demonstrates.\n\nEfficiency concerns how fast users complete tasks once they have already learned the system, not a first-time user's experience.\n\nMemorability concerns whether returning users can remember how to use the system after a break, not a first attempt.\n\nError Rate concerns how often users make mistakes and how serious those mistakes are, not the speed of a successful first attempt."
  },
  {
    id: "csc306_ch2_008",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "A support agent who already knows the system resolves a customer call one second faster than before. Which of Nielsen's five usability components does this measure?",
    options: [
      "Learnability",
      "Satisfaction",
      "Efficiency",
      "Error Rate"
    ],
    correctAnswer: 2,
    explanation: "Efficiency asks how fast users can complete tasks once they have learned the system, measured through task completion time for expert users, matching an experienced agent resolving a call faster.\n\nLearnability concerns first-time users accomplishing basic tasks, not an already-trained agent's speed.\n\nSatisfaction concerns how pleasant the experience feels subjectively, not raw task completion time.\n\nError Rate concerns the frequency and severity of mistakes, not the speed of a correct action."
  },
  {
    id: "csc306_ch2_009",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "A user returns to a system after two weeks away and completes their task without needing a tutorial. Which usability component does this best demonstrate?",
    options: [
      "Efficiency",
      "Error Rate",
      "Satisfaction",
      "Memorability"
    ],
    correctAnswer: 3,
    explanation: "Memorability asks whether returning users can remember how to use the system, measured through error rate and relearning time after a break, matching a user who needs no tutorial after two weeks away.\n\nEfficiency concerns task completion speed for users who already know the system well, not recall after a break.\n\nError Rate concerns how often and how seriously users err, not whether they remember the system.\n\nSatisfaction concerns subjective pleasantness, not the ability to recall how to use the system."
  },
  {
    id: "csc306_ch2_010",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "A system uses confirm dialogs that successfully prevent users from accidentally deleting files. Which usability component is this an example of managing well?",
    options: [
      "Error Rate",
      "Learnability",
      "Efficiency",
      "Memorability"
    ],
    correctAnswer: 0,
    explanation: "Error Rate concerns how often users make errors and how serious they are, measured by errors per task, severity, and recovery time; confirm dialogs preventing accidental deletions is given as a direct example of managing this component.\n\nLearnability concerns first-time task success, not error prevention specifically.\n\nEfficiency concerns speed of task completion, not the prevention of mistakes.\n\nMemorability concerns recall after time away, not error prevention."
  },
  {
    id: "csc306_ch2_011",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "Users rate a checkout experience 4.7 out of 5 on a survey. Which of Nielsen's five usability components is being measured?",
    options: [
      "Learnability",
      "Satisfaction",
      "Efficiency",
      "Error Rate"
    ],
    correctAnswer: 1,
    explanation: "Satisfaction asks how pleasant the experience is subjectively, measured through tools like the SUS questionnaire or Likert scale surveys, matching users rating a checkout experience 4.7 out of 5.\n\nLearnability is measured through time-to-first-success on tasks, not a subjective rating scale.\n\nEfficiency is measured through task completion time, not a satisfaction rating.\n\nError Rate is measured through the number and severity of errors, not a subjective satisfaction score."
  },
  {
    id: "csc306_ch2_012",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "Which of the following is one of Nielsen's five usability components?",
    options: [
      "Effectiveness",
      "Utility",
      "Efficiency",
      "Safety"
    ],
    correctAnswer: 2,
    explanation: "Efficiency is one of Nielsen's five usability components, alongside learnability, memorability, error rate, and satisfaction.\n\nEffectiveness is instead part of the separate list of six usability goals, not Nielsen's five components.\n\nUtility is also part of the six usability goals rather than the five components.\n\nSafety is likewise part of the six usability goals rather than the five components."
  },
  {
    id: "csc306_ch2_013",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "A word processor reliably saves files without ever losing user data. Which usability goal does this best demonstrate?",
    options: [
      "Efficiency",
      "Utility",
      "Safety",
      "Effectiveness"
    ],
    correctAnswer: 3,
    explanation: "Effectiveness asks whether users can complete tasks accurately and completely, and a word processor that saves files without data loss is given directly as an example of an effective system.\n\nEfficiency concerns minimising steps, time, and effort, not the accuracy or completeness of saved data.\n\nUtility concerns whether the system offers the functions users actually need, not the accuracy of a save operation.\n\nSafety concerns protecting users from dangerous states such as accidental loss, which is related but distinct from the accuracy and completeness that defines effectiveness here."
  },
  {
    id: "csc306_ch2_014",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "A mobile banking app lets a user complete a transfer in three taps instead of navigating ten menus. Which usability goal does this best demonstrate?",
    options: [
      "Efficiency",
      "Effectiveness",
      "Learnability",
      "Memorability"
    ],
    correctAnswer: 0,
    explanation: "Efficiency asks whether the system minimises steps, time, and effort, and completing a transfer in three taps instead of ten menus is given directly as an example of this goal.\n\nEffectiveness concerns whether tasks are completed accurately and completely, not the number of steps required.\n\nLearnability concerns how easily the system can be learned from scratch, not the number of steps for an already-known task.\n\nMemorability concerns whether users can recall how to use the system after time away, not the step count of a task."
  },
  {
    id: "csc306_ch2_015",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "A system shows a 'Delete?' confirmation, offers undo functionality, and grays out unavailable options. Which usability goal do these features primarily serve?",
    options: [
      "Utility",
      "Safety",
      "Learnability",
      "Efficiency"
    ],
    correctAnswer: 1,
    explanation: "Safety asks whether the system protects users from dangerous states, and delete confirmations, undo functionality, and greyed-out unavailable options are given directly as examples of this goal.\n\nUtility concerns whether the system offers the right functions users need, not protection from dangerous states.\n\nLearnability concerns how easily the system is learned from scratch, not protection from error states.\n\nEfficiency concerns minimising steps and effort, which these safety features can actually work against by adding extra steps."
  },
  {
    id: "csc306_ch2_016",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "A graphic design tool has no undo function, even though it looks visually polished. Which usability goal does this tool lack, regardless of its aesthetics?",
    options: [
      "Learnability",
      "Memorability",
      "Utility",
      "Effectiveness"
    ],
    correctAnswer: 2,
    explanation: "Utility asks whether a system offers the right functions users actually need, and a graphic design tool without undo is given directly as an example that lacks utility regardless of aesthetics.\n\nLearnability concerns how easily a system is learned from scratch, which is a separate concern from whether a needed function exists at all.\n\nMemorability concerns recall after time away, unrelated to whether the undo function exists.\n\nEffectiveness concerns accuracy and completeness of task completion, which is related but distinct from whether the right functions are offered in the first place."
  },
  {
    id: "csc306_ch2_017",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "A floppy disk icon is instantly recognised as meaning Save, and a pair of scissors is instantly recognised as meaning Cut. Which usability goal do these icons demonstrate?",
    options: [
      "Memorability",
      "Efficiency",
      "Utility",
      "Learnability"
    ],
    correctAnswer: 3,
    explanation: "Learnability asks how easily users can learn the system from scratch, and the floppy disk and scissors icons are given directly as examples of instantly recognisable, easy-to-learn symbols.\n\nMemorability concerns whether users can recall the system after not using it for a while, which is a related but separate goal from first-time learning.\n\nEfficiency concerns minimising steps and effort, not the recognisability of an icon.\n\nUtility concerns whether the right functions are offered, not how easily an icon's meaning is learned."
  },
  {
    id: "csc306_ch2_018",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "Ctrl+Z is used for undo consistently across many applications, making it easy for users to recall even after time away. Which usability goal does this best demonstrate?",
    options: [
      "Memorability",
      "Learnability",
      "Effectiveness",
      "Safety"
    ],
    correctAnswer: 0,
    explanation: "Memorability asks whether users can remember how to use a system after not using it for a while, and Ctrl+Z being consistent and easy to recall across applications is given directly as an example of this goal.\n\nLearnability concerns learning a system from scratch for the first time, not recall after time away.\n\nEffectiveness concerns accuracy and completeness of task completion, not recall of a shortcut.\n\nSafety concerns protection from dangerous states, not memorability of a shortcut."
  },
  {
    id: "csc306_ch2_019",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "A design team gives novice users large buttons and step-by-step wizards, which ends up slowing down expert users who would rather use keyboard shortcuts. Which pair of usability goals is in tension here?",
    options: [
      "Safety and utility",
      "Learnability and efficiency",
      "Effectiveness and memorability",
      "Utility and safety"
    ],
    correctAnswer: 1,
    explanation: "This is the learnability versus efficiency trade-off: systems optimised for novice learnability, such as large buttons and wizards, can slow down expert efficiency, while shortcuts that boost expert efficiency remain invisible to beginners.\n\nSafety and utility is a different pairing not discussed as being in tension in this scenario.\n\nEffectiveness and memorability are not the goals described as trading off in this wizard-versus-shortcut scenario.\n\nUtility and safety is not the pairing illustrated by novice wizards slowing down expert users."
  },
  {
    id: "csc306_ch2_020",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "Progressive disclosure, where an interface is simple by default and reveals advanced features only on demand, is offered as a solution to which trade-off?",
    options: [
      "Safety versus efficiency",
      "Utility versus learnability",
      "Learnability versus efficiency",
      "Effectiveness versus memorability"
    ],
    correctAnswer: 2,
    explanation: "Progressive disclosure is given as the solution to the learnability versus efficiency trade-off, keeping the interface simple for novices by default while making advanced features available on demand for experts.\n\nThe safety versus efficiency trade-off is instead addressed with solutions like 'do not show again' options, batch undo, and smart defaults.\n\nThe utility versus learnability trade-off is instead addressed with task-based UI, contextual toolbars, and progressive feature reveal, a related but separately named solution.\n\nEffectiveness versus memorability is not one of the three trade-offs discussed."
  },
  {
    id: "csc306_ch2_021",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "Confirmation dialogs and undo steps protect users from mistakes, but they also add extra steps that frustrate experienced users performing repetitive tasks. Which trade-off does this describe?",
    options: [
      "Learnability versus efficiency",
      "Utility versus learnability",
      "Memorability versus safety",
      "Safety versus efficiency"
    ],
    correctAnswer: 3,
    explanation: "This is the safety versus efficiency trade-off: confirmation dialogs and undo steps protect users from errors, which is a safety benefit, but the extra steps frustrate experienced users trying to work efficiently.\n\nLearnability versus efficiency instead concerns novice-friendly features like wizards slowing down experts, not safety features specifically.\n\nUtility versus learnability concerns feature-rich tools being harder to learn, not confirmation dialogs.\n\nMemorability versus safety is not one of the three trade-offs discussed."
  },
  {
    id: "csc306_ch2_022",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "Feature-rich tools such as Photoshop and Excel satisfy many different user needs, but their cognitive overload makes them hard to learn. Which trade-off does this describe?",
    options: [
      "Utility versus learnability",
      "Safety versus efficiency",
      "Learnability versus efficiency",
      "Effectiveness versus utility"
    ],
    correctAnswer: 0,
    explanation: "This is the utility versus learnability trade-off: feature-rich tools like Photoshop and Excel satisfy diverse utility needs, but the resulting cognitive overload makes the tool harder to learn.\n\nSafety versus efficiency instead concerns confirmation dialogs and undo steps slowing down repetitive tasks, not feature richness.\n\nLearnability versus efficiency instead concerns novice-friendly wizards slowing down experts, a different pairing.\n\nEffectiveness versus utility is not one of the three trade-offs discussed."
  },
  {
    id: "csc306_ch2_023",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "Task-based UI, contextual toolbars, and progressive feature reveal are offered as solutions to which usability trade-off?",
    options: [
      "Learnability versus efficiency",
      "Utility versus learnability",
      "Safety versus efficiency",
      "Effectiveness versus memorability"
    ],
    correctAnswer: 1,
    explanation: "Task-based UI, contextual toolbars, and progressive feature reveal are given as the proposed solution to the utility versus learnability trade-off, helping feature-rich tools remain learnable despite offering many functions.\n\nThe learnability versus efficiency trade-off is instead addressed with progressive disclosure, a related but differently named solution.\n\nThe safety versus efficiency trade-off is instead addressed with 'do not show again' options, batch undo, and smart defaults.\n\nEffectiveness versus memorability is not one of the three trade-offs discussed."
  },
  {
    id: "csc306_ch2_024",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "Not all usability goals can be maximised at the same time in a single design.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "This statement is true. The trade-offs section is built entirely around the principle that usability goals create tensions, such as learnability versus efficiency, safety versus efficiency, and utility versus learnability, meaning goals cannot all be maximised simultaneously."
  },
  {
    id: "csc306_ch2_025",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "A file upload shows a progress bar and a 'Message sent' confirmation while it works. Which Nielsen heuristic does this satisfy?",
    options: [
      "Match Between System and Real World",
      "User Control and Freedom",
      "Visibility of System Status",
      "Consistency and Standards"
    ],
    correctAnswer: 2,
    explanation: "Visibility of System Status calls for always keeping users informed about what is happening with appropriate feedback, and a progress bar with a 'Message sent' confirmation is exactly this kind of feedback.\n\nMatch Between System and Real World concerns using familiar words and concepts rather than jargon, not status feedback.\n\nUser Control and Freedom concerns providing undo and clearly marked emergency exits, not status updates.\n\nConsistency and Standards concerns following platform conventions so actions mean the same thing everywhere, not informing users of current status."
  },
  {
    id: "csc306_ch2_026",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "An interface labels its delete function 'Persist to disk removal' instead of a familiar word like 'Delete'. Which Nielsen heuristic does this violate?",
    options: [
      "Aesthetic and Minimalist Design",
      "Help and Documentation",
      "Flexibility and Efficiency of Use",
      "Match Between System and Real World"
    ],
    correctAnswer: 3,
    explanation: "Match Between System and Real World calls for the system to speak the user's language using familiar words rather than system-oriented jargon, and 'Persist to disk removal' is exactly the kind of jargon this heuristic warns against, unlike a familiar word such as 'Delete'.\n\nAesthetic and Minimalist Design concerns avoiding irrelevant information cluttering a screen, not the wording of a single label.\n\nHelp and Documentation concerns providing assistance when needed, not the plain language of a function's own label.\n\nFlexibility and Efficiency of Use concerns accelerators for expert users, unrelated to jargon in a label."
  },
  {
    id: "csc306_ch2_027",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "Which Nielsen heuristic is satisfied by providing a clearly marked 'Discard changes?' dialog and supporting undo and redo?",
    options: [
      "User Control and Freedom",
      "Error Prevention",
      "Recognition Rather Than Recall",
      "Consistency and Standards"
    ],
    correctAnswer: 0,
    explanation: "User Control and Freedom calls for clearly marked emergency exits and support for undo and redo, since users often choose functions by mistake, which matches a 'Discard changes?' dialog and undo and redo support directly.\n\nError Prevention concerns careful design that stops a problem from occurring in the first place, which is a related but distinct heuristic from offering a way out after a mistake.\n\nRecognition Rather Than Recall concerns making options visible so users do not need to remember them, unrelated to undo and exits.\n\nConsistency and Standards concerns following platform conventions, not providing an escape route from a mistaken action."
  },
  {
    id: "csc306_ch2_028",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "Which Nielsen heuristic is illustrated by using Ctrl+C and Ctrl+V for copy and paste the same way across all applications, and using red for error and green for success across systems?",
    options: [
      "Recognition Rather Than Recall",
      "Consistency and Standards",
      "Error Prevention",
      "Help and Documentation"
    ],
    correctAnswer: 1,
    explanation: "Consistency and Standards calls for users to never wonder whether different words, situations, or actions mean the same thing, following platform conventions, matching the Ctrl+C, Ctrl+V, and red-green colour examples directly.\n\nRecognition Rather Than Recall concerns minimising memory load by making options visible, not following shared conventions across systems.\n\nError Prevention concerns careful design that stops mistakes before they happen, not standard shortcuts and colour meanings.\n\nHelp and Documentation concerns providing assistance, unrelated to shared shortcut and colour conventions."
  },
  {
    id: "csc306_ch2_029",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "Instead of accepting free-typed dates in formats like 'March 5th' or '05/03', a form provides a calendar picker that only allows valid dates. Which Nielsen heuristic does this satisfy?",
    options: [
      "Help Users Recognise and Recover from Errors",
      "Flexibility and Efficiency of Use",
      "Error Prevention",
      "Aesthetic and Minimalist Design"
    ],
    correctAnswer: 2,
    explanation: "Error Prevention favours a careful design that prevents a problem from occurring at all, and date pickers instead of free text are given directly as an example of this heuristic.\n\nHelp Users Recognise and Recover from Errors concerns how error messages are worded after a mistake has already happened, not preventing the mistake in the first place.\n\nFlexibility and Efficiency of Use concerns accelerators for expert users, unrelated to constraining date input.\n\nAesthetic and Minimalist Design concerns avoiding irrelevant information, not preventing invalid input."
  },
  {
    id: "csc306_ch2_030",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "An interface shows a list of recently opened files and visible menu options instead of requiring users to type remembered commands. Which Nielsen heuristic does this satisfy?",
    options: [
      "Flexibility and Efficiency of Use",
      "Consistency and Standards",
      "Visibility of System Status",
      "Recognition Rather Than Recall"
    ],
    correctAnswer: 3,
    explanation: "Recognition Rather Than Recall calls for minimising the user's memory load by making objects, actions, and options visible, and a recent files list with visible menu options instead of command-line prompts is given directly as an example.\n\nFlexibility and Efficiency of Use concerns accelerators such as keyboard shortcuts for experts, not visible options for recognition.\n\nConsistency and Standards concerns following shared conventions, not reducing memory load through visibility.\n\nVisibility of System Status concerns showing what the system is currently doing, not showing available options to reduce recall."
  },
  {
    id: "csc306_ch2_031",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "Keyboard shortcuts, macros, and custom workflows that are invisible to novices but speed up interaction for experienced users are examples of which Nielsen heuristic?",
    options: [
      "Flexibility and Efficiency of Use",
      "Recognition Rather Than Recall",
      "Error Prevention",
      "Aesthetic and Minimalist Design"
    ],
    correctAnswer: 0,
    explanation: "Flexibility and Efficiency of Use describes accelerators that are unseen by novice users but may speed up interaction for experts, matching keyboard shortcuts, macros, and custom workflows directly.\n\nRecognition Rather Than Recall concerns making options visible to reduce memory load, the opposite of an accelerator hidden from novices.\n\nError Prevention concerns stopping mistakes before they occur, unrelated to speeding up expert interaction.\n\nAesthetic and Minimalist Design concerns removing irrelevant information from a display, not accelerating expert workflows."
  },
  {
    id: "csc306_ch2_032",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "A landing page removes decorative elements and keeps only information relevant to the user's current task. Which Nielsen heuristic does this satisfy?",
    options: [
      "Consistency and Standards",
      "Aesthetic and Minimalist Design",
      "Help and Documentation",
      "User Control and Freedom"
    ],
    correctAnswer: 1,
    explanation: "Aesthetic and Minimalist Design calls for avoiding irrelevant or rarely needed information, since every extra unit of information competes with relevant information, matching a clean landing page with decorative elements removed.\n\nConsistency and Standards concerns following shared conventions across the system, not removing clutter from one page.\n\nHelp and Documentation concerns providing assistance to users, unrelated to visual clutter.\n\nUser Control and Freedom concerns undo and exits from mistaken actions, unrelated to minimalist visual design."
  },
  {
    id: "csc306_ch2_033",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "An error message reads 'Invalid email, did you mean @gmail.com?' instead of 'Error 404: Input validation failed'. Which Nielsen heuristic does this satisfy?",
    options: [
      "Error Prevention",
      "Match Between System and Real World",
      "Help Users Recognise and Recover from Errors",
      "Visibility of System Status"
    ],
    correctAnswer: 2,
    explanation: "Help Users Recognise and Recover from Errors calls for error messages expressed in plain language that precisely indicate the problem and suggest a solution, matching the specific, constructive 'did you mean' message over a technical error code.\n\nError Prevention concerns stopping the mistake before it happens, but this example addresses an error message shown after a mistake has already occurred.\n\nMatch Between System and Real World concerns general system language and concepts, while this heuristic specifically concerns the wording of error messages.\n\nVisibility of System Status concerns showing ongoing system state, not the plain-language wording of an error."
  },
  {
    id: "csc306_ch2_034",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "Context-sensitive tooltips, a searchable FAQ, and onboarding walkthroughs are examples of which Nielsen heuristic?",
    options: [
      "Recognition Rather Than Recall",
      "Flexibility and Efficiency of Use",
      "User Control and Freedom",
      "Help and Documentation"
    ],
    correctAnswer: 3,
    explanation: "Help and Documentation notes that even though it is better if a system can be used without documentation, it may be necessary to provide help, matching tooltips, a searchable FAQ, and onboarding walkthroughs directly.\n\nRecognition Rather Than Recall concerns making options visible to reduce memory load, a different mechanism from providing supplementary help content.\n\nFlexibility and Efficiency of Use concerns accelerators for experts, unrelated to help content.\n\nUser Control and Freedom concerns undo and exits, unrelated to documentation."
  },
  {
    id: "csc306_ch2_035",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "Which of the following is an accurate pairing of an example with the Nielsen heuristic it illustrates?",
    options: [
      "An elevator floor number display illustrates Visibility of System Status",
      "An autocomplete suggestion list illustrates Aesthetic and Minimalist Design",
      "All of these",
      "None of these"
    ],
    correctAnswer: 0,
    explanation: "An elevator floor number display is listed directly as an example of Visibility of System Status, since it keeps users informed of the current state. An autocomplete suggestion list is instead listed as an example of Recognition Rather Than Recall, not Aesthetic and Minimalist Design, so that pairing is incorrect. Since only the first pairing is accurate, that is the correct answer."
  },
  {
    id: "csc306_ch2_036",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "Nielsen's 10 heuristics are described as strict rules that must never be broken, rather than rules of thumb.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "This statement is false. The heuristics are explicitly framed as rules of thumb, not strict rules, meaning they guide evaluation rather than acting as rigid requirements that can never be broken."
  },
  {
    id: "csc306_ch2_037",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "In a heuristic evaluation, roughly how many usability problems do studies show that five independent evaluators tend to find?",
    options: [
      "About 75%",
      "About 25%",
      "About 50%",
      "About 100%"
    ],
    correctAnswer: 0,
    explanation: "Studies cited in the evaluation process show that five evaluators find approximately 75% of usability problems, which is why 3 to 5 experts evaluating independently is the recommended starting point.\n\nAbout 25% understates the figure given for five independent evaluators.\n\nAbout 50% also understates the figure given.\n\nAbout 100% overstates the figure; even five evaluators are not expected to find every problem."
  },
  {
    id: "csc306_ch2_038",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "In the heuristic evaluation process, what does each evaluator do during the Walkthrough step?",
    options: [
      "Meets with other evaluators to debate the final severity ratings",
      "Inspects the interface alone, checking every element against all 10 heuristics",
      "Interviews real users about their experience with the interface",
      "Writes the final prioritised report for the design team"
    ],
    correctAnswer: 1,
    explanation: "The Walkthrough step has each evaluator inspect the interface alone, checking every element against all 10 heuristics, before any group discussion happens.\n\nMeeting with other evaluators to debate ratings describes the later Aggregate and Debrief step, not the individual Walkthrough.\n\nInterviewing real users describes usability testing, a separate measurement method from heuristic evaluation, which involves no users.\n\nWriting the final prioritised report describes the later Report and Iterate step, not the Walkthrough."
  },
  {
    id: "csc306_ch2_039",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "During the Log Issues step of a heuristic evaluation, what information is recorded for each violation?",
    options: [
      "Only the name of the evaluator who found it",
      "Only the total number of issues found across the whole team",
      "Which heuristic is violated, where it occurs, and a severity rating",
      "Only a screenshot, with no further detail"
    ],
    correctAnswer: 2,
    explanation: "The Log Issues step records which heuristic is violated, where the violation occurs, and a severity rating for each violation found during the walkthrough.\n\nRecording only the evaluator's name would omit the heuristic, location, and severity information this step is meant to capture.\n\nRecording only a total count would lose the detail needed to fix specific issues, which is the purpose of individually logging each violation.\n\nRecording only a screenshot without the heuristic, location, or severity would not satisfy what this step requires."
  },
  {
    id: "csc306_ch2_040",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "In Nielsen's severity rating scale for heuristic evaluation, which rating represents a catastrophic usability problem?",
    options: [
      "0",
      "2",
      "3",
      "4"
    ],
    correctAnswer: 3,
    explanation: "The severity scale runs from 0 to 4, where 4 represents a catastrophic problem, the most severe rating on the scale.\n\nA rating of 0 means the issue is not a usability problem at all, the opposite end of the scale.\n\nA rating of 2 represents a minor problem, well below catastrophic.\n\nA rating of 3 represents a major problem, still one level below catastrophic."
  },
  {
    id: "csc306_ch2_041",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "During the Aggregate and Debrief step of a heuristic evaluation, how do evaluators decide which issues to prioritise?",
    options: [
      "By severity multiplied by frequency",
      "By whichever issue was logged first",
      "By alphabetical order of the heuristic name",
      "By a random draw among the evaluators"
    ],
    correctAnswer: 0,
    explanation: "In the Aggregate and Debrief step, evaluators meet to share findings, discuss them, and prioritise fixes by severity multiplied by frequency.\n\nPrioritising by whichever issue was logged first ignores how severe or how frequent the issue actually is.\n\nAlphabetical order of the heuristic name has no connection to how serious or common an issue is.\n\nA random draw would not reflect the deliberate severity and frequency prioritisation this step describes."
  },
  {
    id: "csc306_ch2_042",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "In the Report and Iterate step of a heuristic evaluation, which issues does the design team fix first?",
    options: [
      "Whichever issues are cheapest to fix",
      "High-severity issues",
      "Only issues rated 0 or 1",
      "Issues chosen at random from the log"
    ],
    correctAnswer: 1,
    explanation: "In the Report and Iterate step, the design team receives a prioritised list and fixes high-severity issues first, with the evaluation process repeating afterward.\n\nChoosing whichever issues are cheapest to fix ignores the severity-based prioritisation this step describes.\n\nIssues rated 0 or 1 are cosmetic or not real problems, the opposite of what should be fixed first.\n\nChoosing issues at random contradicts the deliberate, severity-based ordering this step is built around."
  },
  {
    id: "csc306_ch2_043",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "Which usability measurement method involves recruiting 5 to 8 representative users, giving them realistic tasks, and using a think-aloud protocol to reveal their mental models?",
    options: [
      "Heuristic Evaluation",
      "SUS Questionnaire",
      "Usability Testing",
      "Analytics and Logs"
    ],
    correctAnswer: 2,
    explanation: "Usability Testing recruits 5 to 8 representative users, gives them realistic tasks, and observes them, often using a think-aloud protocol to reveal their mental models.\n\nHeuristic Evaluation involves 3 to 5 experts reviewing the interface with no users involved, the opposite of recruiting representative users.\n\nSUS Questionnaire is a 10-item standardised survey producing a 0 to 100 score, not an observed task session.\n\nAnalytics and Logs rely on production usage data such as click-through rates, not a moderated task session with users."
  },
  {
    id: "csc306_ch2_044",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "Which usability measurement method uses 3 to 5 experts, involves no users, is fast and cheap, and is best used early in the design process?",
    options: [
      "Usability Testing",
      "SUS Questionnaire",
      "Analytics and Logs",
      "Heuristic Evaluation"
    ],
    correctAnswer: 3,
    explanation: "Heuristic Evaluation uses 3 to 5 experts, involves no users, is fast and cheap, and is best used early in the design process, producing a severity-ranked issue list.\n\nUsability Testing instead requires recruiting 5 to 8 representative users, the opposite of involving no users.\n\nSUS Questionnaire is a standardised post-task survey completed by users, not an expert-only review.\n\nAnalytics and Logs rely on production usage data, which requires the product to already be live rather than being used early in design."
  },
  {
    id: "csc306_ch2_045",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "Which usability measurement method relies on click-through rates, drop-off points, time on task, and error frequency collected at scale in production?",
    options: [
      "Analytics and Logs",
      "Usability Testing",
      "Heuristic Evaluation",
      "SUS Questionnaire"
    ],
    correctAnswer: 0,
    explanation: "Analytics and Logs rely on click-through rates, drop-off points and exit pages, time on task at scale, and error frequency in production, combined with qualitative methods.\n\nUsability Testing relies on observing a small number of users completing realistic tasks in a moderated session, not large-scale production data.\n\nHeuristic Evaluation relies on expert review against the 10 heuristics, not usage data collected at scale.\n\nSUS Questionnaire relies on a 10-item survey completed after a task, not passively collected production logs."
  },
  {
    id: "csc306_ch2_046",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "In the OAU Student Portal analytics case study, which step of the registration funnel showed the biggest drop-off?",
    options: [
      "Step 1: Select Level",
      "Step 3: Select Department",
      "Step 2: Select Courses",
      "Step 4: Review and Confirm"
    ],
    correctAnswer: 1,
    explanation: "Step 3, Select Department, is identified as the biggest drop-off point, falling from 80% of users at Step 2 down to 40% at Step 3.\n\nStep 1, Select Level, is the starting point of the funnel at 100% and is not where the sharp drop occurs.\n\nStep 2, Select Courses, still retains 80% of users, before the sharp decline at the next step.\n\nStep 4, Review and Confirm, comes after the biggest drop has already occurred, retaining 33% of the original users."
  },
  {
    id: "csc306_ch2_047",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "In the OAU Student Portal case study, what percentage of visitors ultimately completed registration?",
    options: [
      "85%",
      "40%",
      "30%",
      "33%"
    ],
    correctAnswer: 2,
    explanation: "The case study reports that only 30% of visitors completed registration, the final figure in the funnel after the drop-offs at earlier steps.\n\n85% instead reflects the percentage of visitors who visited the course registration page at all, not those who completed it.\n\n40% reflects the percentage remaining at Step 3, Select Department, not the final completion rate.\n\n33% reflects the percentage remaining at Step 4, Review and Confirm, one step before the final completion figure."
  },
  {
    id: "csc306_ch2_048",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "In the OAU Student Portal case study, the Help page being the most-visited page on the portal is used as evidence of what?",
    options: [
      "Students prefer reading help content over registering",
      "The portal has too many pages",
      "The registration deadline was extended",
      "The system is not self-explanatory"
    ],
    correctAnswer: 3,
    explanation: "The Help page being the most-visited page is listed as a data-driven insight showing that the system is not self-explanatory, since users need to seek help to understand it.\n\nThe case study does not claim students prefer help content over registering; visiting Help reflects confusion, not a competing preference.\n\nThe number of pages on the portal is not discussed as a cause in this insight.\n\nA registration deadline extension is not mentioned anywhere in the case study."
  },
  {
    id: "csc306_ch2_049",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "Analytics and logs are described as needing to be combined with qualitative methods, rather than being relied on alone to explain user behaviour.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "This statement is true. Analytics and Logs are explicitly described as combining with qualitative methods, since analytics reveal that a problem exists at a given step without explaining why users behave that way."
  },
  {
    id: "csc306_ch2_050",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "Who developed the System Usability Scale, and in what year?",
    options: [
      "John Brooke, 1996",
      "Jakob Nielsen, 1993",
      "James Gibson, 1979",
      "Donald Norman, 1988"
    ],
    correctAnswer: 0,
    explanation: "The System Usability Scale was developed by John Brooke in 1996, described as a quick, reliable, standardised usability measurement tool.\n\nJakob Nielsen is instead associated with the five usability components and the 10 usability heuristics, not the creation of SUS.\n\nJames Gibson is associated with originating the concept of affordance in ecological psychology, not SUS.\n\nDonald Norman is associated with applying affordance to design and later distinguishing signifiers from affordances, not SUS."
  },
  {
    id: "csc306_ch2_051",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "Users rate each of the 10 SUS statements on a scale of 1 to 5, and the individual question scores are then combined into a final score on what scale?",
    options: [
      "0 to 10",
      "0 to 100",
      "1 to 5",
      "0 to 1000"
    ],
    correctAnswer: 1,
    explanation: "Users rate each of the 10 SUS statements on a 1 to 5 Likert scale, and these are combined into a final score on a 0 to 100 scale.\n\n0 to 10 is not the scale used for the final SUS score.\n\n1 to 5 is instead the scale used for each individual statement, not the combined final score.\n\n0 to 1000 overstates the range of the final SUS score."
  },
  {
    id: "csc306_ch2_052",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "In SUS scoring, how is the score calculated for an odd-numbered statement such as 'I thought the system was easy to use'?",
    options: [
      "5 minus the response value",
      "The response value multiplied by 2.5",
      "The response value minus 1",
      "The response value divided by 5"
    ],
    correctAnswer: 2,
    explanation: "For the odd-numbered, positively worded statements, the score is calculated as the response value minus 1, before all 10 question scores are summed and multiplied by 2.5.\n\nFive minus the response value is instead the formula used for even-numbered, negatively worded statements, not odd-numbered ones.\n\nMultiplying by 2.5 is applied to the sum of all 10 question scores at the very end, not to a single odd-numbered response.\n\nDividing by 5 is not part of the SUS scoring method at any step."
  },
  {
    id: "csc306_ch2_053",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "In SUS scoring, how is the score calculated for an even-numbered statement such as 'I found the system unnecessarily complex'?",
    options: [
      "The response value minus 1",
      "The response value multiplied by 2.5",
      "The response value plus 1",
      "5 minus the response value"
    ],
    correctAnswer: 3,
    explanation: "For the even-numbered, negatively worded statements, the score is calculated as 5 minus the response value, before all 10 question scores are summed and multiplied by 2.5.\n\nThe response value minus 1 is instead the formula used for odd-numbered, positively worded statements, not even-numbered ones.\n\nMultiplying by 2.5 is applied to the sum of all 10 scores at the final step, not to a single even-numbered response.\n\nAdding 1 to the response value is not part of the SUS scoring method."
  },
  {
    id: "csc306_ch2_054",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "Which of the following is one of the five positively worded, odd-numbered SUS statements?",
    options: [
      "I thought the system was easy to use",
      "I found the system unnecessarily complex",
      "I thought there was too much inconsistency in this system",
      "I needed to learn many things before I could get started"
    ],
    correctAnswer: 0,
    explanation: "'I thought the system was easy to use' is listed as one of the five positively worded, odd-numbered SUS statements, scored using the response-value-minus-1 formula.\n\n'I found the system unnecessarily complex' is instead one of the five negatively worded, even-numbered statements.\n\n'I thought there was too much inconsistency in this system' is also one of the negatively worded, even-numbered statements.\n\n'I needed to learn many things before I could get started' is also one of the negatively worded, even-numbered statements."
  },
  {
    id: "csc306_ch2_055",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "A product receives a SUS score of 85. Using the standard SUS score interpretation bands, what rating does this fall into?",
    options: [
      "Poor",
      "Excellent",
      "Good",
      "Best in Class"
    ],
    correctAnswer: 1,
    explanation: "A score of 85 falls in the 80 to 90 range, which the interpretation table labels Excellent, described as well-designed and user-friendly.\n\nPoor applies to scores below 60, far lower than 85.\n\nGood applies to the 68 to 80 range, just below where 85 falls.\n\nBest in Class applies to scores above 90, just above where 85 falls."
  },
  {
    id: "csc306_ch2_056",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "Using the standard SUS score interpretation bands, a score in which range is described as 'OK, average, with some problems'?",
    options: [
      "Below 60",
      "68 to 80",
      "60 to 68",
      "Above 90"
    ],
    correctAnswer: 2,
    explanation: "The 60 to 68 range is labelled OK, described as average with some problems, sitting between the Poor and Good ratings.\n\nBelow 60 is instead labelled Poor, describing significant usability issues, a worse rating than OK.\n\n68 to 80 is instead labelled Good, describing an above-average, mostly usable product, a better rating than OK.\n\nAbove 90 is labelled Best in Class, describing exceptional usability, far better than OK."
  },
  {
    id: "csc306_ch2_057",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "Which of the following is given as a reason to use the SUS questionnaire?",
    options: [
      "It requires at least 5 to 8 users to complete a think-aloud protocol session",
      "It produces a severity-ranked list of issues found by experts",
      "It can only be measured using production analytics and logs",
      "It is quick to complete, usually about 2 minutes"
    ],
    correctAnswer: 3,
    explanation: "SUS is described as quick to complete, usually about 2 minutes, works for any type of user and system, and is reliable and widely used for benchmarking.\n\nRequiring 5 to 8 users and a think-aloud protocol describes Usability Testing, not SUS, which is a short questionnaire rather than an observed task session.\n\nProducing a severity-ranked list of expert-found issues describes Heuristic Evaluation, not SUS, which is completed by ordinary users rather than experts.\n\nRelying only on production analytics and logs describes the Analytics and Logs method, not SUS, which is a standardised post-task survey."
  },
  {
    id: "csc306_ch2_058",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "Who introduced the term 'affordance' in 1966, in a work titled The Senses Considered as Perceptual Systems?",
    options: [
      "James J. Gibson",
      "Donald A. Norman",
      "Jakob Nielsen",
      "John Brooke"
    ],
    correctAnswer: 0,
    explanation: "James J. Gibson introduced the term affordance in 1966 in The Senses Considered as Perceptual Systems, describing what the environment offers an animal.\n\nDonald A. Norman later applied affordance to design in 1988 and distinguished signifiers in 2013, but he did not coin the original term.\n\nJakob Nielsen is associated with usability components and heuristics, not the origin of affordance.\n\nJohn Brooke is associated with developing the System Usability Scale, unrelated to the concept of affordance."
  },
  {
    id: "csc306_ch2_059",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "In 1979, Gibson developed the concept of affordance further in The Ecological Approach to Visual Perception. What key property did he attribute to affordances there?",
    options: [
      "They are entirely designed by engineers rather than discovered",
      "They are relational, existing between an actor and the environment",
      "They apply only to digital, screen-based interfaces",
      "They are fixed properties of the user alone, unrelated to any object"
    ],
    correctAnswer: 1,
    explanation: "In 1979, Gibson developed affordance as relational, existing between an actor and the environment rather than being a property of either alone.\n\nGibson describes affordances as existing in the environment itself, not as something engineers design into an object.\n\nGibson's 1979 work concerns ecological perception broadly, not specifically digital or screen-based interfaces, which did not yet dominate design at the time.\n\nDescribing affordances as a fixed property of the user alone contradicts the relational nature Gibson attributes to them."
  },
  {
    id: "csc306_ch2_060",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "In 1988, Donald Norman applied the concept of affordance to design in The Design of Everyday Things. What did he focus on?",
    options: [
      "The chemical composition of materials used in manufacturing",
      "The marketing budget required to launch a new product",
      "Perceived affordances in human-made objects",
      "The programming languages used to build interactive systems"
    ],
    correctAnswer: 2,
    explanation: "Norman's 1988 application of affordance to design focused on perceived affordances in human-made objects, translating Gibson's ecological concept into a design tool.\n\nMaterial chemical composition is not the focus Norman brought to affordance in this work.\n\nMarketing budgets are unrelated to Norman's application of affordance to design.\n\nProgramming languages are unrelated to Norman's 1988 focus on perceived affordances."
  },
  {
    id: "csc306_ch2_061",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "In his 1999 revision, what did Norman argue about real affordances compared to perceived affordances for interface design?",
    options: [
      "Real affordances are the only kind that matter for interfaces",
      "Perceived affordances should be eliminated from interface design entirely",
      "Real and perceived affordances are exactly the same thing",
      "Real affordances are less important than perceived affordances"
    ],
    correctAnswer: 3,
    explanation: "In 1999, Norman revised his position to argue that real affordances are less important than perceived affordances for interface design, since users act on what they perceive is possible.\n\nClaiming real affordances are the only kind that matter contradicts the 1999 revision, which favours perceived affordances for interfaces.\n\nEliminating perceived affordances entirely is the opposite of what the 1999 revision argues, since it favours them over real affordances.\n\nTreating real and perceived affordances as identical ignores the distinction Norman is specifically drawing attention to in this revision."
  },
  {
    id: "csc306_ch2_062",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "What critical clarification did Norman introduce in the 2013 revised edition of his work?",
    options: [
      "Signifiers, as distinct from affordances",
      "The five usability components",
      "The ISO 9241-11 definition of usability",
      "The System Usability Scale"
    ],
    correctAnswer: 0,
    explanation: "In the 2013 revised edition, Norman introduced signifiers as distinct from affordances, a clarification described as critical for HCI.\n\nThe five usability components are attributed to Nielsen, not to Norman's 2013 revision.\n\nThe ISO 9241-11 definition of usability comes from the ISO standard, not from Norman's 2013 work.\n\nThe System Usability Scale was developed by John Brooke in 1996, unrelated to Norman's 2013 clarification."
  },
  {
    id: "csc306_ch2_063",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "Which of the following accurately describes a milestone in the origins of affordance?",
    options: [
      "Gibson introduced the term affordance in 1966",
      "Norman introduced the term affordance for the first time in 2013",
      "All of these",
      "None of these"
    ],
    correctAnswer: 0,
    explanation: "Gibson introduced the term affordance in 1966, in The Senses Considered as Perceptual Systems, making the first statement accurate. Norman did not introduce the term affordance itself in 2013; by that point the term had existed since 1966, and what Norman introduced in 2013 was the distinct concept of signifiers. Since only the first statement is accurate, that is the correct answer."
  },
  {
    id: "csc306_ch2_064",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "Gibson's 1979 definition describes the affordances of the environment as what?",
    options: [
      "The set of buttons and menus visible on a screen at any given time",
      "What the environment offers the animal, what it provides or furnishes, for good or ill",
      "The technical specifications of a device's hardware",
      "The price a consumer pays for a manufactured product"
    ],
    correctAnswer: 1,
    explanation: "Gibson defines the affordances of the environment as what it offers the animal, what it provides or furnishes, either for good or ill, a broad ecological definition rather than a narrow design term.\n\nA screen's visible buttons and menus is a much narrower, design-specific idea than Gibson's original ecological definition.\n\nHardware specifications are a technical detail unrelated to Gibson's definition of affordance.\n\nProduct pricing is a business detail unrelated to Gibson's definition of affordance."
  },
  {
    id: "csc306_ch2_065",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "A dropdown menu affords selection for an experienced web user, but not for someone encountering a digital interface for the very first time. Which core principle of affordance does this illustrate?",
    options: [
      "Affordances are independent of perception",
      "Affordances are neutral, offering both good and ill",
      "Affordances are relational, existing between object and person",
      "Affordances are identical to signifiers"
    ],
    correctAnswer: 2,
    explanation: "This illustrates that affordances are relational: they are not properties of the interface alone or the user alone, but exist in the relationship between the two, which is why the same dropdown affords selection for one user but not another.\n\nIndependence of perception instead means an affordance exists whether or not it is noticed, which is a different point from why two different users experience the same menu differently.\n\nThe 'for good or ill' principle concerns affordances being neutral in value, not why experience level changes what is afforded.\n\nAffordances and signifiers are explicitly distinguished as different concepts elsewhere, not treated as identical."
  },
  {
    id: "csc306_ch2_066",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "A hidden navigation menu still affords access to content even if no user currently knows it is there. Which core principle of affordance does this illustrate?",
    options: [
      "Affordances are relational",
      "Affordances are neutral, for good or ill",
      "Affordances require a signifier to exist",
      "Affordances are independent of perception"
    ],
    correctAnswer: 3,
    explanation: "This illustrates that affordances are independent of perception: they exist whether or not a user perceives them, so a hidden menu still affords access even before anyone discovers it.\n\nThe relational principle instead concerns how an affordance depends on the relationship between object and person, not whether it is currently perceived.\n\nThe 'for good or ill' principle concerns the neutral, dual-use nature of affordances, not whether they are noticed.\n\nAn affordance existing without being perceived is exactly what shows that a signifier is not required for the affordance itself to exist, only for it to be communicated."
  },
  {
    id: "csc306_ch2_067",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "A social media feed affords connection with friends, but it also affords compulsive scrolling. Which core principle of affordance does this best illustrate?",
    options: [
      "Affordances are neutral, for good or ill",
      "Affordances are relational",
      "Affordances are independent of perception",
      "Affordances are the same as constraints"
    ],
    correctAnswer: 0,
    explanation: "This illustrates that affordances are neutral, for good or ill: a social media feed affords both connection and compulsive scrolling, and design ethics comes from which affordances are highlighted or suppressed.\n\nThe relational principle concerns how an affordance depends on the relationship between object and user, not the dual positive and negative nature of a single affordance.\n\nIndependence of perception concerns whether an affordance is noticed, not whether it is good or harmful.\n\nAffordances and constraints are separate concepts; constraints restrict actions, while this example concerns the dual-use nature of an existing affordance."
  },
  {
    id: "csc306_ch2_068",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "Affordances are inherently good or bad on their own, regardless of which ones a designer chooses to highlight or suppress.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "This statement is false. The 'for good or ill' principle explicitly states that affordances are neutral, using the example of a social media feed affording both connection and compulsive scrolling, with design ethics coming from which affordances a designer chooses to highlight or suppress, not from the affordance being inherently good or bad."
  },
  {
    id: "csc306_ch2_069",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "A recessed button and a rough-textured grip both suggest how to interact with an object based on shape, texture, weight, and position. Which type of affordance is this?",
    options: [
      "Perceived Affordance",
      "Physical Affordance",
      "False Affordance",
      "Hidden Affordance"
    ],
    correctAnswer: 1,
    explanation: "Physical Affordances are properties of the physical form, such as shape, texture, weight, and position, that suggest or constrain interaction, matching a recessed button or a rough grip directly.\n\nPerceived Affordances concern what users believe they can do based on visual and cultural cues, which may not involve physical texture at all, such as on a screen.\n\nFalse Affordances mislead users into expecting an action the object does not support, unlike a recessed button that genuinely can be pressed.\n\nHidden Affordances are real but undiscoverable without instruction, unlike a physically obvious recessed shape."
  },
  {
    id: "csc306_ch2_070",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "A greyed-out button appears disabled to a user based on visual convention, whether or not that impression is accurate. Which type of affordance is this?",
    options: [
      "Physical Affordance",
      "False Affordance",
      "Perceived Affordance",
      "Hidden Affordance"
    ],
    correctAnswer: 2,
    explanation: "Perceived Affordances describe what users believe they can do based on visual and cultural cues, which may or may not match the actual affordance, matching a greyed-out button that looks disabled based on convention.\n\nPhysical Affordances arise from real physical form such as shape and texture, not a screen-based visual convention.\n\nFalse Affordances specifically mislead about an action the object does not support at all, a stronger claim than a greyed appearance that is usually accurate.\n\nHidden Affordances are real actions with no visible signal at all, the opposite of a greyed-out button that does visibly signal something."
  },
  {
    id: "csc306_ch2_071",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "A decorative piece of underlined text looks exactly like a hyperlink, but clicking it does nothing. Which type of affordance does this illustrate?",
    options: [
      "Physical Affordance",
      "Perceived Affordance",
      "Hidden Affordance",
      "False Affordance"
    ],
    correctAnswer: 3,
    explanation: "False Affordances occur when an object appears to afford an action it does not actually support, causing errors and frustration, matching decorative underlined text that looks clickable but is static.\n\nPhysical Affordances describe real, physically constrained interactions, not a misleading visual cue on a screen.\n\nPerceived Affordances can be accurate or inaccurate, but the defining feature of this example is that the signal is specifically wrong, which is what makes it a false affordance rather than just a perceived one.\n\nHidden Affordances describe a real action with no visible signal, the opposite of a highly visible cue that turns out to be misleading."
  },
  {
    id: "csc306_ch2_072",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "Right-click context menus are a real, working feature, but many users never discover them without being told or exploring by chance. Which type of affordance does this illustrate?",
    options: [
      "Hidden Affordance",
      "Physical Affordance",
      "Perceived Affordance",
      "False Affordance"
    ],
    correctAnswer: 0,
    explanation: "Hidden Affordances are real affordances with no visible signal, where the action genuinely exists but users cannot discover it without instruction, exploration, or luck, matching right-click context menus directly.\n\nPhysical Affordances concern real-world objects with tangible form, not a screen-based feature discovered only by chance.\n\nPerceived Affordances concern a visual or cultural cue that leads users to believe an action is possible, but a right-click menu has no such cue at all.\n\nFalse Affordances mislead users toward an action that does not work, whereas a right-click menu genuinely works once discovered."
  },
  {
    id: "csc306_ch2_073",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "A progress bar on a loading screen appears to move forward but actually stalls indefinitely, never reflecting real progress. Which type of affordance does this illustrate?",
    options: [
      "Physical Affordance",
      "False Affordance",
      "Hidden Affordance",
      "Perceived Affordance"
    ],
    correctAnswer: 1,
    explanation: "A fake progress bar that stalls is given directly as an example of a False Affordance, since it signals an action or process that is not actually happening as shown.\n\nPhysical Affordances concern real physical form and texture, not a misleading digital progress indicator.\n\nHidden Affordances concern a genuine action with no visible signal, the opposite of a highly visible but misleading progress bar.\n\nPerceived Affordances describe a general visual cue that may or may not be accurate, but the stalling progress bar specifically misleads users, which is the defining trait of a false affordance."
  },
  {
    id: "csc306_ch2_074",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "Swiping left to delete an item in iOS is a genuine feature, but a first-time user has no way to know it exists without being told or stumbling on it. Which type of affordance does this illustrate?",
    options: [
      "False Affordance",
      "Physical Affordance",
      "Hidden Affordance",
      "Perceived Affordance"
    ],
    correctAnswer: 2,
    explanation: "Swipe left to delete in iOS is given directly as an example of a Hidden Affordance, since the affordance genuinely exists but is not discoverable without instruction, exploration, or luck.\n\nFalse Affordances mislead users toward an action that does not actually work, unlike a swipe gesture that genuinely does work once found.\n\nPhysical Affordances concern real-world objects with tangible shape and texture, not a touchscreen gesture.\n\nPerceived Affordances rely on a visible cue that suggests the action, but a hidden gesture like this has no such visible cue at all."
  },
  {
    id: "csc306_ch2_075",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "Which of the following is an accurate example of a type of affordance?",
    options: [
      "A pull handle fitted to a push door is an example of a False Affordance",
      "Scissors holes that invite inserting fingers are an example of a Physical Affordance",
      "All of these",
      "None of these"
    ],
    correctAnswer: 2,
    explanation: "Both statements are accurate. A pull handle fitted to a push door is listed directly as an example of a False Affordance, since it signals the wrong action. Scissors holes that invite inserting fingers are listed directly as an example of a Physical Affordance, since their shape suggests the action through form alone. Since both statements are correct, the answer is that both apply."
  },
  {
    id: "csc306_ch2_076",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "In the Norman Door case study, what specifically is wrong with the Bad Door?",
    options: [
      "It has no handle of any kind, so users cannot find where to grip it",
      "It is transparent, so users cannot see where the door frame is",
      "It automatically opens for every user, removing the need for a handle",
      "It has a pull handle fitted to a door that actually opens by pushing"
    ],
    correctAnswer: 3,
    explanation: "The Bad Door has a pull handle fitted to a push door: the horizontal bar grip powerfully signals 'pull', but the door actually opens outward by pushing, causing every first-time user to fail.\n\nThe Bad Door is described as having a handle, just the wrong kind for how the door actually opens, not as having no handle at all.\n\nTransparency and visibility of the door frame are not part of the Bad Door example.\n\nAn automatically opening door is not the Bad Door example; the case study concerns a manually operated door with a misleading handle."
  },
  {
    id: "csc306_ch2_077",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "In the Norman Door case study, why does the Good Door succeed where the Bad Door fails?",
    options: [
      "Its flat push plate has no affordance for pulling, so pushing is the only available action",
      "It has a large sign explaining exactly how to open it",
      "It is much heavier than the Bad Door, forcing users to push harder",
      "It uses a bright colour to attract the user's attention"
    ],
    correctAnswer: 0,
    explanation: "The Good Door uses a flat push plate that has no affordance for pulling, meaning pushing is the only available action, so users succeed immediately without needing any instruction.\n\nThe Good Door's success is explicitly attributed to its physical form removing the wrong action, not to an explanatory sign, which is instead how the Instructed Door compensates for a design failure.\n\nDoor weight is not discussed as the reason the Good Door succeeds.\n\nColour is not discussed as the reason the Good Door succeeds; its flat plate shape is what removes the possibility of pulling."
  },
  {
    id: "csc306_ch2_078",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "In the Norman Door case study, what does the Instructed Door represent?",
    options: [
      "A door with no handle and no sign, requiring trial and error",
      "A handle with a 'PUSH' sign, where the sign compensates for a false affordance",
      "A door that has been completely redesigned with a new push plate",
      "A door that only opens for authorised staff using a keycard"
    ],
    correctAnswer: 1,
    explanation: "The Instructed Door is any handle paired with a 'PUSH' sign, where the sign, acting as a signifier, compensates for the handle's false affordance; it is better than nothing but still means the underlying design has failed and needs patching.\n\nA door with no handle and no sign at all is not what the Instructed Door describes, since the whole point is that a sign has been added.\n\nA completely redesigned push plate describes the Good Door, not the Instructed Door, which keeps the original misleading handle and adds a sign instead.\n\nKeycard-restricted access is not part of the Norman Door case study at all."
  },
  {
    id: "csc306_ch2_079",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "If users consistently make the same mistake when using an interface or object, who does the Norman Door lesson hold responsible?",
    options: [
      "The user is at fault for not reading instructions",
      "Neither the design nor the user, since mistakes are random",
      "The design is at fault, not the user",
      "Whichever party paid for the product's development"
    ],
    correctAnswer: 2,
    explanation: "The HCI lesson states that if users consistently make the same mistake, it is the design's fault, not the user's, and that the interface should be blamed rather than the person.\n\nBlaming the user for not reading instructions is the opposite of the lesson, which explicitly shifts responsibility to the design.\n\nDescribing the mistakes as random contradicts the case study, which shows the same predictable mistake happening to nearly every first-time user because of the design itself.\n\nWho funded the product is not discussed as a factor in this lesson at all."
  },
  {
    id: "csc306_ch2_080",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "When a sign has to tell users whether to push or pull a door, what does Norman say this indicates?",
    options: [
      "The design is working exactly as intended",
      "The sign is unnecessary and should be removed",
      "The door was manufactured incorrectly",
      "The design has failed"
    ],
    correctAnswer: 3,
    explanation: "Norman states that when a sign says push or pull, the design has failed, since a well-designed door's own form should make the correct action obvious without any sign at all.\n\nA design working as intended would not require a sign to clarify basic operation, which contradicts calling this success.\n\nThe sign is not described as unnecessary; it is described as a necessary patch for a design that already failed, better than nothing but still evidence of failure.\n\nManufacturing error is not the point of this observation, which concerns the design of the affordance itself, not a production defect."
  },
  {
    id: "csc306_ch2_081",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "A Norman Door is a door so poorly designed that users consistently push when they should pull, or vice versa.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "This statement is true. A Norman Door is defined exactly this way, named after Donald Norman as a symbol of design that prioritises aesthetics over usability."
  },
  {
    id: "csc306_ch2_082",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "Why is designing affordances for a graphical interface fundamentally different from designing affordances for a physical object?",
    options: [
      "Pixels have no physical properties, so a user cannot touch or feel a screen",
      "Graphical interfaces are always more expensive to design than physical objects",
      "Physical objects cannot be manufactured with any consistent shape",
      "Graphical interfaces do not require any visual design decisions at all"
    ],
    correctAnswer: 0,
    explanation: "The core problem is that pixels have no physical properties such as texture or weight, so a user cannot touch a pixel or feel whether something is pressable, unlike a physical object discovered through touch and trial.\n\nCost comparisons between graphical and physical design are not the reason given for this fundamental difference.\n\nPhysical objects are described as being physically constrained by the laws of form and material, not as lacking consistent shape.\n\nGraphical interfaces are described as depending entirely on visual design decisions, the opposite of requiring none."
  },
  {
    id: "csc306_ch2_083",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "A recessed physical button cannot be 'pulled' because its form physically prevents that action. What does this illustrate about physical affordances?",
    options: [
      "Real affordances only exist after a user has been trained to use them",
      "Real affordances are physically constrained by the laws of form and material",
      "Real affordances are identical to perceived affordances in every case",
      "Real affordances disappear once a signifier is added"
    ],
    correctAnswer: 1,
    explanation: "This illustrates that real affordances are physically constrained by the laws of form and material: a recessed button's shape genuinely prevents it from being pulled, unlike a digital button where such constraints are only illusions.\n\nThe recessed button constrains action through its physical form immediately, not only after training.\n\nReal and perceived affordances are explicitly distinguished elsewhere, since a perceived affordance may not match the real one, so treating them as identical is inaccurate.\n\nAdding a signifier communicates an affordance more clearly; it does not cause the underlying real affordance to disappear."
  },
  {
    id: "csc306_ch2_084",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "A flat rectangle on a screen looks pressable only because it has a shadow, a border, and a label. What does this illustrate about digital affordances?",
    options: [
      "Digital affordances are physically constrained by the laws of form and material",
      "Digital buttons are indistinguishable from physical buttons in every respect",
      "Perceived affordances on screens are created entirely through visual design decisions",
      "Shadows and borders have no effect on how usable an interface feels"
    ],
    correctAnswer: 2,
    explanation: "This illustrates that perceived affordances on screens are created entirely through visual design decisions, since a flat rectangle only looks pressable when shadow, border, or label cues are deliberately added.\n\nPhysical constraint by the laws of form and material describes real, physical affordances, not the illusion created on a flat screen.\n\nDigital buttons are explicitly distinguished from physical buttons, since pixels have no physical properties such as texture or weight.\n\nShadows and borders are described as the very cues that create the illusion of pressability, so claiming they have no effect contradicts the example."
  },
  {
    id: "csc306_ch2_085",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "Which of the following is listed as one of the five key challenges of digital affordances?",
    options: [
      "Physical objects require no visual design at all",
      "Users can always feel whether a screen element is pressable",
      "Learned conventions and visual cues are unnecessary in digital interfaces",
      "All interactive affordances are illusions created by visual design"
    ],
    correctAnswer: 3,
    explanation: "One of the five key challenges is that all interactive affordances in a graphical interface are illusions created by visual design, since designers use visual cues to make the brain perceive possibilities for action.\n\nPhysical objects requiring no visual design at all is not one of the five listed digital affordance challenges.\n\nUsers being able to feel whether something is pressable is the opposite of the challenge described, since screens provide no physical feedback.\n\nLearned conventions and visual cues are described as essential, not unnecessary, since without them a digital interface would be confusing."
  },
  {
    id: "csc306_ch2_086",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "A designer adds a drop shadow beneath a rectangle to make it look raised above the background. Which purpose does this visual cue primarily serve?",
    options: [
      "Creating the illusion of depth, suggesting a raised, pressable surface",
      "Reducing the file size of the interface's images",
      "Making the element completely invisible to the user",
      "Preventing the element from ever being clicked"
    ],
    correctAnswer: 0,
    explanation: "Shadows are listed as a visual cue that creates the illusion of depth, suggesting a button is raised and therefore pressable, matching a drop shadow added beneath a rectangle.\n\nReducing file size is a technical performance concern, not the purpose of a shadow as a visual affordance cue.\n\nA shadow makes an element look more prominent and raised, not invisible.\n\nA shadow signals that an element can be pressed; it does not prevent interaction."
  },
  {
    id: "csc306_ch2_087",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "Which of the following is listed as a visual cue that helps create the illusion of interactivity on a screen?",
    options: [
      "The device's battery percentage",
      "Cursor change on hover",
      "The programming language used to build the app",
      "The number of tabs open in the browser"
    ],
    correctAnswer: 1,
    explanation: "Cursor change on hover is listed among the visual cues, such as shadows, gradients, borders, icons, and motion or animation feedback, that create the illusion of depth, material, and interactivity.\n\nBattery percentage is a device status indicator, not a visual affordance cue for an interface element.\n\nThe underlying programming language is invisible to the user and is not a visual cue at all.\n\nThe number of open browser tabs is unrelated to signalling whether a specific interface element is interactive."
  },
  {
    id: "csc306_ch2_088",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "In graphical interfaces, interactive affordances are real physical properties of the pixels themselves, independent of any visual design decisions.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "This statement is false. Pixels have no physical properties such as texture or weight, so interactive affordances in a graphical interface are illusions created entirely through visual design decisions, not real physical properties of the pixels themselves."
  },
  {
    id: "csc306_ch2_089",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "Which of the following accurately pairs a GUI element with the visual affordance signal it relies on?",
    options: [
      "A raised, bordered button relies on shadow and border to signal a pressable surface",
      "A resize corner handle relies on a diagonal arrow cursor appearing on hover to signal it can be dragged",
      "All of these",
      "None of these"
    ],
    correctAnswer: 2,
    explanation: "Both statements are accurate. A raised, bordered button relying on shadow and border to signal a pressable surface is listed directly in the GUI affordance signals table. A resize corner handle relying on a diagonal arrow cursor appearing on hover is also listed directly in the same table. Since both pairings are correct, the answer is that both apply."
  },
  {
    id: "csc306_ch2_090",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "In GUI design, what does underlined blue text signal to users?",
    options: [
      "A field the user should type free text into",
      "A control the user should drag to resize the window",
      "A hyperlink convention, inviting the user to click to navigate",
      "A warning that the current action cannot be undone"
    ],
    correctAnswer: 2,
    explanation: "Underlined blue text combines colour and underline to signal the hyperlink convention, and users expect to click it to navigate elsewhere.\n\nA text-entry field is instead signalled differently, such as by a dotted border or blinking cursor, not by blue underlined text.\n\nA resize control is instead signalled by a diagonal arrow cursor on a corner handle, not by underlined text.\n\nAn irreversible-action warning is not the signal associated with underlined blue text in this table."
  },
  {
    id: "csc306_ch2_091",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "In GUI design, what does a scrollbar with arrows at each end signal to users?",
    options: [
      "That the page has finished loading completely",
      "That the user's account is currently logged in",
      "That the current form field is required",
      "That the content can be scrolled by dragging"
    ],
    correctAnswer: 3,
    explanation: "A scrollbar with a vertical bar and end arrows signals that the content is draggable, and users expect to scroll the content using it.\n\nPage load completion is instead signalled by other cues, such as a progress indicator disappearing, not by a scrollbar's presence.\n\nLogin status is unrelated to a scrollbar's visual signal.\n\nA required form field is typically signalled by an asterisk or similar marker, not by a scrollbar."
  },
  {
    id: "csc306_ch2_092",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "In GUI design, a toggle switch that looks like a light switch communicates which expectation to users?",
    options: [
      "Tap to toggle the state on or off",
      "Drag the entire switch off the screen to delete it",
      "Double-click to open a settings menu",
      "Hold the switch down to zoom into the interface"
    ],
    correctAnswer: 0,
    explanation: "A toggle switch with an on/off appearance like a light switch signals that users should tap it to toggle the state, drawing on a familiar real-world metaphor.\n\nDragging the switch off the screen to delete it is not the expected interaction signalled by a toggle's on/off appearance.\n\nDouble-clicking to open a settings menu is not the interaction associated with a toggle switch's visual design.\n\nHolding the switch down to zoom is not the interaction this signal communicates."
  },
  {
    id: "csc306_ch2_093",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "Why did Norman introduce the term 'signifier' in 2013?",
    options: [
      "Because affordances had been proven not to exist in physical objects",
      "Because affordances and anti-affordances are often not visible, so a term for their perceived signal was needed",
      "Because usability testing had shown that users no longer needed any visual cues",
      "Because the ISO definition of usability required a new term"
    ],
    correctAnswer: 1,
    explanation: "Norman introduced the term signifier because the presence of affordances and anti-affordances is often not visible, and he needed a term for the perceived signal that indicates an affordance, as he states directly.\n\nAffordances were not disproven in physical objects; physical affordances are described as real and physically constrained.\n\nUsability testing showing users no longer need visual cues is not the reason given, and contradicts the entire premise that signifiers are needed to guide users.\n\nThe ISO usability definition is a separate standard unrelated to Norman's reason for introducing signifiers."
  },
  {
    id: "csc306_ch2_094",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "Which of the following best describes an affordance, as distinguished from a signifier?",
    options: [
      "A perceptible signal that must always be deliberately designed and placed",
      "A label such as 'Submit' that tells the user what an action will do",
      "The actual relationship between an object and a person, existing whether or not it is perceived",
      "A tooltip that appears only when the user hovers over an element"
    ],
    correctAnswer: 2,
    explanation: "An affordance is the actual relationship between an object and a person, determined by physical or functional properties, and it exists whether or not it is perceived, such as a door affording opening regardless of any signage.\n\nA signal that must always be deliberately designed and placed describes a signifier, not an affordance, since affordances exist independent of whether anyone designed a signal for them.\n\nA 'Submit' label is given as an example of a signifier, not an affordance itself.\n\nA hover tooltip is also given as an example of a signifier used in GUIs, not an affordance."
  },
  {
    id: "csc306_ch2_095",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "Which of the following best describes a signifier, as distinguished from an affordance?",
    options: [
      "A property determined purely by physical or functional properties, regardless of any visible signal",
      "Something that cannot be intentional, only ever accidental",
      "Something that can never appear in a digital interface",
      "A perceptible signal, deliberately designed or placed, that communicates how to act"
    ],
    correctAnswer: 3,
    explanation: "A signifier is a perceptible signal that communicates where and how an action should occur, and unlike an affordance, it must be deliberately designed and placed, whether intentional or accidental.\n\nBeing determined purely by physical or functional properties regardless of visible signal describes an affordance, not a signifier.\n\nSignifiers can be intentional, such as a button border, or accidental, such as a worn step forming a path, so claiming they can never be intentional is incorrect.\n\nSignifiers are described as doing all the work in GUIs through shadows, labels, icons, tooltips, and cursor changes, so they clearly can appear in digital interfaces."
  },
  {
    id: "csc306_ch2_096",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "A worn, visible path across a patch of grass forms where many people have walked the same shortcut over time, without anyone deliberately painting a trail. Which kind of signifier does this illustrate?",
    options: [
      "An accidental signifier left as residue of previous behaviour",
      "An explicit signifier deliberately placed by a single designer",
      "A signifier that only exists in digital interfaces",
      "A signifier that is identical to an affordance"
    ],
    correctAnswer: 0,
    explanation: "A worn path across grass is given directly as an example of a signifier that can be accidental, formed as residue of previous behaviour rather than being deliberately placed by any one designer.\n\nAn explicit signifier is one deliberately placed by a designer, such as a 'Click here' label, which is the opposite of an accidentally worn path.\n\nSignifiers are not limited to digital interfaces; a worn path is a physical, real-world example.\n\nAffordances and signifiers are explicitly distinguished as different concepts, so treating them as identical misrepresents both."
  },
  {
    id: "csc306_ch2_097",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "Since digital affordances are invisible on a screen, what does all the work of guiding user action in GUI design?",
    options: [
      "Physical affordances",
      "Signifiers",
      "Server response time",
      "The device's operating system version"
    ],
    correctAnswer: 1,
    explanation: "Because digital affordances are invisible, signifiers do all the work in GUI design, meaning every design decision, from shadows to labels to icons, is essentially a signifier guiding the user.\n\nPhysical affordances apply to real-world objects with tangible form, not to invisible, pixel-based digital elements.\n\nServer response time is a backend performance factor unrelated to how a visible interface communicates possible actions.\n\nThe operating system version is a technical detail unrelated to how signifiers guide user action on screen."
  },
  {
    id: "csc306_ch2_098",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "Which of the following is an accurate distinction between an affordance and a signifier?",
    options: [
      "A door handle signifies pulling because of its shape, while the word 'PULL' affords that pulling is the correct action",
      "A push plate affords pulling because of its flat shape, while a recessed button signifies pushing",
      "All of these",
      "None of these"
    ],
    correctAnswer: 3,
    explanation: "Neither statement is accurate. A door handle affords pulling because of its shape and position, while the printed word 'PULL' signifies that pulling is the correct action; the first statement reverses this, incorrectly calling the handle's shape a signifier and the printed word an affordance. A push plate's flat shape affords pushing, not pulling, so the second statement also misassigns both the action and the concept. Since both statements are inaccurate, none of these applies."
  },
  {
    id: "csc306_ch2_099",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "Labels such as 'Click here', 'Submit', and 'Cancel', icons paired with text, and onboarding walkthroughs are examples of which type of signifier?",
    options: [
      "Residue Signifiers",
      "Perceived Signifiers",
      "Explicit Signifiers",
      "Absent Signifiers"
    ],
    correctAnswer: 2,
    explanation: "Explicit Signifiers are deliberate, intentional signals placed by designers, matching labels like 'Click here' or 'Submit', icons paired with text, and onboarding walkthroughs directly.\n\nResidue Signifiers are traces left by previous users, such as a worn path or greasy touchscreen spots, not a label deliberately written by a designer.\n\nPerceived Signifiers are visual properties users interpret without explicit instruction, such as a raised button look, unlike an explicit text label.\n\nAbsent Signifiers describe a missing signal entirely, the opposite of a clearly placed label."
  },
  {
    id: "csc306_ch2_100",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "A dotted border around a field and a blinking cursor are visual properties that users interpret as signals without any explicit instruction. Which type of signifier is this?",
    options: [
      "Explicit Signifiers",
      "Residue Signifiers",
      "Absent Signifiers",
      "Perceived Signifiers"
    ],
    correctAnswer: 3,
    explanation: "Perceived Signifiers are visual properties users interpret as signals without explicit instruction, matching a dotted border signalling an editable field and a blinking cursor signalling a text entry point directly.\n\nExplicit Signifiers are deliberate written labels or instructions, a more direct communication than an interpreted visual property.\n\nResidue Signifiers are traces left by previous interactions, such as a worn path, not an interpreted visual style like a dotted border.\n\nAbsent Signifiers describe a missing signal, the opposite of a dotted border or blinking cursor that is present and interpretable."
  },
  {
    id: "csc306_ch2_101",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "A mobile app supports a pull-to-refresh gesture, but there is no visual cue anywhere in the interface hinting that this gesture exists. Which type of signifier situation does this illustrate?",
    options: [
      "Absent Signifiers",
      "Explicit Signifiers",
      "Residue Signifiers",
      "Perceived Signifiers"
    ],
    correctAnswer: 0,
    explanation: "Absent Signifiers describe situations where signifiers are missing, leading to hidden affordances and confusion, matching a pull-to-refresh gesture with no visual cue directly.\n\nExplicit Signifiers are deliberately placed signals such as labels, the opposite of a missing cue.\n\nResidue Signifiers are traces left by previous interactions, not a complete absence of any signal.\n\nPerceived Signifiers are visual properties users can interpret, which requires some visible property to exist in the first place, unlike this gesture with no cue at all."
  },
  {
    id: "csc306_ch2_102",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "When signifiers are missing from an interface, what does this typically lead to?",
    options: [
      "Guaranteed improvement in task completion time",
      "Hidden affordances and confusion",
      "An automatic increase in the SUS score",
      "A reduction in the number of physical affordances available"
    ],
    correctAnswer: 1,
    explanation: "Absent signifiers are described as leading to hidden affordances and confusion, since a real action with no visible signal cannot be discovered without instruction, exploration, or luck.\n\nMissing signifiers make an interface harder to use, so a guaranteed improvement in completion time is the opposite of the expected outcome.\n\nSUS scores reflect subjective satisfaction gathered through a questionnaire; a missing signifier is not described as automatically changing this score.\n\nSignifiers concern how affordances are communicated, not how many physical affordances exist in the first place."
  },
  {
    id: "csc306_ch2_103",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "An elevator's card reader is hidden from view, so users do not know it exists, compared to a prominent 'Insert card' label with an arrow pointing to the reader. Which core design principle does this pair of examples illustrate?",
    options: [
      "Feedback",
      "Constraints",
      "Visibility",
      "Mapping"
    ],
    correctAnswer: 2,
    explanation: "Visibility calls for making controls and possible actions visible, since the more visible a function is, the easier it is to discover and use, matching the hidden reader versus prominent labelled reader example directly.\n\nFeedback concerns sending information back about the result of an action already taken, not whether a control is visible in the first place.\n\nConstraints concern restricting which actions are possible, not whether an existing control can be seen.\n\nMapping concerns whether controls are spatially arranged to match their effects, a different concern from simple visibility of a single control."
  },
  {
    id: "csc306_ch2_104",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "A button click produces no visual response at all, leaving the user unsure whether it worked, compared to a button that depresses, shows a spinner, and displays a 'Submitting' message. Which core design principle does this pair of examples illustrate?",
    options: [
      "Visibility",
      "Mapping",
      "Conceptual Model",
      "Feedback"
    ],
    correctAnswer: 3,
    explanation: "Feedback calls for sending information back to users about the result of their action, through sound, highlight, animation, or text, matching the silent button versus the depressing button with a spinner and message.\n\nVisibility concerns whether a control can be seen at all before it is used, not the response after it has been clicked.\n\nMapping concerns the spatial arrangement of controls relative to their effects, unrelated to post-click response.\n\nConceptual Model concerns whether the interface communicates an accurate model of how the system works overall, a broader concern than a single click's feedback."
  },
  {
    id: "csc306_ch2_105",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "A date field accepts free text such as 'March 5th', '05/03', and '2024-03-05', which are all parsed differently, compared to a calendar picker that only allows valid dates and disables future dates. Which core design principle does this pair of examples illustrate?",
    options: [
      "Constraints",
      "Visibility",
      "Consistency",
      "Feedback"
    ],
    correctAnswer: 0,
    explanation: "Constraints call for restricting the actions that can be performed to reduce errors and guide users toward correct actions, matching the free-text date field versus a calendar picker that only allows valid dates.\n\nVisibility concerns whether a control can be discovered at all, not whether its input is restricted to valid values.\n\nConsistency concerns using similar elements for similar tasks across a system, not restricting the range of valid input for one field.\n\nFeedback concerns informing the user about the result of an action already taken, not restricting what can be entered."
  },
  {
    id: "csc306_ch2_106",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "A stove uses a single linear row of knobs to control a 2x2 grid of burners, leaving users unsure which knob controls which burner, compared to knobs arranged in the same 2x2 grid as the burners. Which core design principle does this pair of examples illustrate?",
    options: [
      "Constraints",
      "Mapping",
      "Consistency",
      "Conceptual Model"
    ],
    correctAnswer: 1,
    explanation: "Mapping calls for controls to be spatially arranged to match their effects, since the closer the mapping is to reality, the easier it is to learn, matching the linear knob row versus the 2x2 grid arrangement directly.\n\nConstraints concern restricting which actions are possible, not the spatial arrangement of controls that are already allowed.\n\nConsistency concerns using similar elements for similar tasks across contexts, not the physical layout of one set of controls relative to what they control.\n\nConceptual Model concerns the user's overall understanding of how the system works, a broader concern than the spatial layout of knobs alone."
  },
  {
    id: "csc306_ch2_107",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "Save is triggered with Ctrl+S in one application, File then Write in a second application, and Ctrl+W in a third, compared to Ctrl+S working for Save across every application on a platform. Which core design principle does this pair of examples illustrate?",
    options: [
      "Mapping",
      "Constraints",
      "Consistency",
      "Feedback"
    ],
    correctAnswer: 2,
    explanation: "Consistency calls for similar operations to use similar elements, since inconsistency forces users to relearn and increases errors, matching the three different Save shortcuts versus a single shared Ctrl+S shortcut.\n\nMapping concerns the spatial arrangement of controls relative to their effects, not which keyboard shortcut is assigned to an action.\n\nConstraints concern restricting which actions are possible, not standardising which shortcut performs an already-available action.\n\nFeedback concerns the response after an action is taken, not whether the same shortcut is used across applications."
  },
  {
    id: "csc306_ch2_108",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "Files deleted with the Delete key seem to vanish with no indication of where they went, compared to a trash can icon where deleted files visibly sit and can be restored or permanently deleted. Which core design principle does this pair of examples illustrate?",
    options: [
      "Visibility",
      "Constraints",
      "Mapping",
      "Conceptual Model"
    ],
    correctAnswer: 3,
    explanation: "Conceptual Model calls for the interface to communicate an accurate model of how the system works, matching the user's mental model, matching the confusing vanishing-file example versus the trash can icon that models deletion as reversible storage.\n\nVisibility concerns whether a control can be seen, not whether the overall system model matches user expectations.\n\nConstraints concern restricting possible actions, not communicating a mental model of what happens after an action.\n\nMapping concerns spatial arrangement of controls relative to their effects, a narrower concern than the overall conceptual model of a system's behaviour."
  },
  {
    id: "csc306_ch2_109",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "Which of the following accurately pairs a core design principle with a good example of it?",
    options: [
      "Feedback is illustrated by a button that depresses, shows a spinner, and displays a 'Submitting' message",
      "Mapping is illustrated by Ctrl+S working the same way across every application",
      "All of these",
      "None of these"
    ],
    correctAnswer: 0,
    explanation: "Feedback being illustrated by a depressing button, spinner, and 'Submitting' message matches the good example given directly for that principle. Ctrl+S working consistently across applications is instead the good example given for Consistency, not Mapping, which concerns the spatial arrangement of controls like stove knobs. Since only the first statement pairs the principle with its correct example, that is the correct answer."
  },
  {
    id: "csc306_ch2_110",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "Non-interactive elements that look clickable cause users to click, see nothing happen, and repeat the attempt out of confusion and frustration. Which principles does this common mistake violate?",
    options: [
      "False Affordance and Consistency",
      "Hidden Affordance and Visibility",
      "Feedback only",
      "Aesthetic and Minimalist Design only"
    ],
    correctAnswer: 0,
    explanation: "Non-interactive elements that look clickable is listed as violating False Affordance and Consistency, since the element signals an action it does not support and behaves inconsistently with genuinely clickable elements.\n\nHidden Affordance and Visibility is instead the violation listed for interactive elements with no visual cue, the opposite problem of an element that looks interactive but is not.\n\nFeedback alone is the violation listed for forms that give no response after submission, a different mistake from a misleadingly clickable-looking element.\n\nAesthetic and Minimalist Design alone is the violation listed for overloaded menus with no visual hierarchy, not for elements that falsely look clickable."
  },
  {
    id: "csc306_ch2_111",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "Interactive elements with no visual cue cause features to go undiscovered, as users assume the functionality does not exist. Which principles does this common mistake violate?",
    options: [
      "False Affordance and Consistency",
      "Hidden Affordance and Visibility",
      "Feedback only",
      "Consistency and Mapping"
    ],
    correctAnswer: 1,
    explanation: "Interactive elements with no visual cue is listed as violating Hidden Affordance and Visibility, since a genuinely working feature remains invisible and therefore undiscovered.\n\nFalse Affordance and Consistency is instead the violation listed for non-interactive elements that look clickable, the opposite problem of an element that looks interactive but is not.\n\nFeedback alone is the violation listed for forms with no response after submission, a different mistake from an undiscoverable feature.\n\nConsistency and Mapping is instead the violation listed for inconsistent button behaviour across screens, not for a feature with no visual cue at all."
  },
  {
    id: "csc306_ch2_112",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "A form gives no feedback after a user submits it, leading users to submit multiple times and causing duplicate entries and data errors. Which principle does this common mistake violate?",
    options: [
      "Mapping",
      "Aesthetic and Minimalist Design",
      "Feedback",
      "Constraints"
    ],
    correctAnswer: 2,
    explanation: "No feedback after submitting a form is listed as violating the Feedback principle directly, causing users to submit multiple times and creating duplicate entries and data errors.\n\nMapping concerns the spatial arrangement of controls relative to their effects, not the absence of a response after submission.\n\nAesthetic and Minimalist Design concerns irrelevant information cluttering a display, not a missing confirmation after an action.\n\nConstraints concern restricting which actions are possible, not informing the user about the outcome of an action already taken."
  },
  {
    id: "csc306_ch2_113",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "Inconsistent button behaviour across different screens causes users to make errors by applying rules learned on one screen to another. Which principles does this common mistake violate?",
    options: [
      "False Affordance and Consistency",
      "Hidden Affordance and Visibility",
      "Feedback only",
      "Consistency and Mapping"
    ],
    correctAnswer: 3,
    explanation: "Inconsistent button behaviour across screens is listed as violating Consistency and Mapping, since users apply rules learned on one screen incorrectly to another where the same button behaves differently.\n\nFalse Affordance and Consistency is instead the violation listed for non-interactive elements that look clickable, a different underlying mistake.\n\nHidden Affordance and Visibility is instead the violation listed for interactive elements with no visual cue, not for buttons that behave inconsistently.\n\nFeedback alone is the violation listed for forms with no response after submission, not for inconsistent button behaviour."
  },
  {
    id: "csc306_ch2_114",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "Jargon-filled error messages leave users unable to understand what went wrong or how to fix it. Which of Nielsen's heuristics does this common mistake violate?",
    options: [
      "Heuristic #9: Help Users Recognise and Recover from Errors",
      "Heuristic #1: Visibility of System Status",
      "Heuristic #4: Consistency and Standards",
      "Heuristic #7: Flexibility and Efficiency of Use"
    ],
    correctAnswer: 0,
    explanation: "Jargon-filled error messages are listed as violating Heuristic #9, Help Users Recognise and Recover from Errors, which calls for plain language that precisely indicates the problem and suggests a solution.\n\nHeuristic #1 concerns keeping users informed of ongoing system status, not the plain-language wording of an error message.\n\nHeuristic #4 concerns following shared platform conventions, not the clarity of error message wording.\n\nHeuristic #7 concerns accelerators for expert users, unrelated to how an error message is worded."
  },
  {
    id: "csc306_ch2_115",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "Overloaded menus with no visual hierarchy cause cognitive overload, leading users to give up or choose the wrong option. Which principle does this common mistake violate?",
    options: [
      "Feedback",
      "Aesthetic and Minimalist Design",
      "Constraints",
      "Conceptual Model"
    ],
    correctAnswer: 1,
    explanation: "Overloaded menus with no visual hierarchy is listed as violating Aesthetic and Minimalist Design, since every extra unit of irrelevant information competes with relevant information and increases cognitive overload.\n\nFeedback concerns informing users about the result of an action, not the visual clutter of a menu.\n\nConstraints concern restricting which actions are possible, not the amount of information displayed at once.\n\nConceptual Model concerns whether the system communicates an accurate mental model, a different concern from menu clutter."
  },
  {
    id: "csc306_ch2_116",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "In the iPod case study, what allowed a new user to operate the scroll wheel without ever needing a manual?",
    options: [
      "Its Efficiency, achieved through reaching a song in three clicks",
      "Its Satisfaction, achieved through the tactile click feedback",
      "Its Learnability, achieved through one-thumb scroll wheel operation",
      "Its Memorability, achieved through a single consistent control paradigm"
    ],
    correctAnswer: 2,
    explanation: "The iPod's Learnability is credited to operating the scroll wheel with one thumb, requiring no manual, matching a new user's first experience directly.\n\nEfficiency is instead credited to reaching a song in three clicks rather than seven, a measure of speed for an already-learned system, not first-time learning.\n\nSatisfaction is instead credited to the tactile click feedback of the scroll wheel, a subjective pleasure rather than ease of first-time learning.\n\nMemorability is instead credited to the single, consistent control paradigm making the system unforgettable, a recall benefit rather than first-time learnability."
  },
  {
    id: "csc306_ch2_117",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "In the iPod case study, reaching a desired song in three clicks instead of seven, as with some competitors, is credited to which usability component?",
    options: [
      "Learnability",
      "Memorability",
      "Error Rate",
      "Efficiency"
    ],
    correctAnswer: 3,
    explanation: "Efficiency is credited with the iPod reaching a song in three clicks instead of seven like competitors, reflecting fast task completion once the system is understood.\n\nLearnability is instead credited to the one-thumb scroll wheel requiring no manual, a first-time-use benefit rather than click count.\n\nMemorability is instead credited to the single, consistent control paradigm, a recall benefit rather than click efficiency.\n\nError Rate is not the component discussed in relation to the three-click song selection."
  },
  {
    id: "csc306_ch2_118",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "In the iPod case study, the physical click of the scroll wheel delivering tactile feedback is credited to which usability component?",
    options: [
      "Satisfaction",
      "Efficiency",
      "Learnability",
      "Error Rate"
    ],
    correctAnswer: 0,
    explanation: "Satisfaction is credited with the physical click of the scroll wheel delivering tactile feedback, contributing to a pleasant subjective experience.\n\nEfficiency is instead credited to reaching a song in three clicks, a speed measure rather than a subjective tactile experience.\n\nLearnability is instead credited to one-thumb operation requiring no manual, a first-time-use benefit rather than tactile pleasure.\n\nError Rate concerns the frequency and severity of mistakes, unrelated to the tactile click sensation."
  },
  {
    id: "csc306_ch2_119",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "In the iPod case study, what made the click wheel's affordance so effective?",
    options: [
      "It required a printed instruction manual explaining every gesture",
      "Its circular groove visually and physically invited rotation, and the central button's recess afforded pressing",
      "It relied entirely on a hidden gesture that only power users could discover",
      "It used the exact same layout as a typewriter keyboard"
    ],
    correctAnswer: 1,
    explanation: "The click wheel's affordance is credited to its circular groove visually and physically inviting rotation, with the central button's recess affording pressing, so every action was physically communicated with no hidden functions.\n\nThe case study explicitly credits the iPod's success partly to needing no manual, contradicting the idea that a manual explained its gestures.\n\nThe iPod's affordances are described as having no hidden functions at all, the opposite of relying on a hidden gesture only power users could find.\n\nA typewriter keyboard layout is not mentioned in the iPod case study; instead, the metaphor referenced is a record player's dial."
  },
  {
    id: "csc306_ch2_120",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "In the iPod case study, the design principle of Constraints is illustrated by which fact?",
    options: [
      "Only relevant options appeared at each menu level",
      "A click sound and screen update confirmed every action",
      "Users could not navigate to a non-existent option",
      "The same interaction pattern was used across all functions"
    ],
    correctAnswer: 2,
    explanation: "Constraints in the iPod case study is illustrated by the fact that users could not navigate to a non-existent option, restricting possible actions to valid ones only.\n\nOnly relevant options appearing at each menu level is instead the example given for Visibility, not Constraints.\n\nA click sound and screen update confirming every action is instead the example given for Feedback, not Constraints.\n\nThe same interaction pattern across all functions is instead the example given for Consistency, not Constraints."
  },
  {
    id: "csc306_ch2_121",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "The iPod's click wheel drew on the culturally familiar metaphor of a typewriter's keyboard.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "This statement is false. The iPod case study credits its affordance success to the metaphor of a record player's dial, described as culturally familiar to users, not a typewriter's keyboard."
  },
  {
    id: "csc306_ch2_122",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "In the healthcare interface failures case study, medications like Hydromorphone and Morphine were displayed in the same font and size in a dropdown list. Which of the following was identified as a violation caused by this design?",
    options: [
      "A hidden affordance, since the drug names could not be found in the dropdown at all",
      "A perceived affordance, since the drug names looked pressable like buttons",
      "A physical affordance, since the drug names had a raised, textured appearance",
      "A false affordance, since both drug names looked equally selectable and equally important"
    ],
    correctAnswer: 3,
    explanation: "The drug name confusion problem is identified as a false affordance, since displaying both similarly named drugs in the same font and size made them look equally selectable and equally important, disguising the risk of choosing the wrong one.\n\nA hidden affordance would mean the drugs could not be found at all, but the actual problem is that both were visible and equally prominent, increasing the risk of selecting the wrong one.\n\nA perceived affordance concerns whether an element looks interactive, which is not the specific violation named for this drug list problem.\n\nA physical affordance concerns real-world texture and shape, which does not apply to a dropdown list of drug names on a screen."
  },
  {
    id: "csc306_ch2_123",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "In the healthcare interface failures case study, an infusion pump's ambiguous decimal point placement caused nurses to accidentally enter ten times the correct dose. Which heuristic violation was identified alongside this problem?",
    options: [
      "No clear status, and a technical error message",
      "Overloaded menus with no visual hierarchy",
      "A missing metaphor for the dosage entry screen",
      "Excessive visibility of the confirmation screen"
    ],
    correctAnswer: 0,
    explanation: "The infusion pump problem was linked to no clear system status after entry, violating Heuristic #1, and a technical error message instead of plain language, violating Heuristic #9, alongside a hidden affordance in the confirmation screen that was easy to skip.\n\nOverloaded menus with no visual hierarchy is instead the mistake identified in the alert fatigue problem, not the infusion pump problem.\n\nA missing metaphor is not one of the violations listed for the infusion pump case.\n\nThe confirmation screen in this case was described as a hidden affordance because it was too easy to skip, the opposite of excessive visibility."
  },
  {
    id: "csc306_ch2_124",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "In the healthcare interface failures case study, clinical systems generated over 100 drug interaction alerts per day per doctor, and 96% were overridden. What consequence followed from this volume of alerts?",
    options: [
      "Doctors requested even more alerts to be added to the system",
      "Critical alerts were missed among the overwhelming volume of alerts",
      "Nurses stopped using the infusion pump entirely",
      "The drug database was permanently taken offline"
    ],
    correctAnswer: 1,
    explanation: "With over 100 alerts per day and 96% being overridden, critical alerts were missed among the overwhelming volume, illustrating alert fatigue caused by overloaded, non-minimalist information and a lack of visual hierarchy between alerts.\n\nDoctors requesting more alerts contradicts the case study, where the problem was too many, not too few, alerts.\n\nNurses abandoning the infusion pump is not described as a consequence of alert fatigue in this case study.\n\nTaking the drug database offline is not mentioned as a consequence of alert fatigue in this case study."
  },
  {
    id: "csc306_ch2_125",
    course: "CSC 306",
    chapter: "Chapter 2",
    text: "Which of the following accurately describes a violation identified in the healthcare interface failures case study?",
    options: [
      "The alert fatigue problem violated the usability goal of Utility, since most alerts were irrelevant",
      "The drug name confusion problem was caused by a hidden affordance that made the drug list impossible to find",
      "All of these",
      "None of these"
    ],
    correctAnswer: 0,
    explanation: "The alert fatigue problem is explicitly linked to a violation of the usability goal Utility, since most of the alerts were irrelevant to the doctor's actual needs. The drug name confusion problem was instead caused by a false affordance, where similarly named drugs looked equally selectable, not a hidden affordance making the list impossible to find at all. Since only the first statement is accurate, that is the correct answer."
  }
];

export default csc306Chapter2Questions;
