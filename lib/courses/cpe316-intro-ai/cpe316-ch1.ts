import { QuestionV2 } from "@/lib/quiz-types";

const cpe316Chapter1Questions: QuestionV2[] = [
  {
    id: "cpe316_ch1_001",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "In what year, and by whom, was the Summer Workshop that gave rise to the title 'Artificial Intelligence' called?",
    options: [
      "1956, by John McCarthy",
      "1950, by Alan Turing at Bletchley Park",
      "1943, by Warren McCulloch and Walter Pitts",
      "1965, by Marvin Minsky"
    ],
    correctAnswer: 0,
    explanation: "The title Artificial Intelligence emerged at a Summer Workshop called in 1956 by John McCarthy.\n\nAlan Turing is associated with the Turing Test rather than with calling this particular workshop, and the year 1950 does not match.\n\nWarren McCulloch is not credited in this material with calling the workshop, and 1943 does not match either.\n\nMarvin Minsky attended the workshop rather than calling it, and 1965 does not match the year given."
  },
  {
    id: "cpe316_ch1_002",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "Which two approaches to Artificial Intelligence were propounded at the founding workshop?",
    options: [
      "Stochastic/Statistical/Probabilistic, and Theory-based formulation of logic with symbols",
      "Neural network modelling, and evolutionary computation used in practice",
      "Rule-based expert systems, and fuzzy logic",
      "Reinforcement learning, and supervised learning"
    ],
    correctAnswer: 0,
    explanation: "Two approaches were propounded: Stochastic/Statistical/Probabilistic, and Theory based formulation of logic with symbols, both situating the substance of intelligence in the numerical rendering of human mental abstraction.\n\nNeural network modelling and evolutionary computation are not the two approaches named as emerging from the founding workshop in this material.\n\nRule-based expert systems and fuzzy logic are likewise not the pair named here.\n\nReinforcement learning and supervised learning are modern machine learning categories, not the two approaches attributed to the founding workshop."
  },
  {
    id: "cpe316_ch1_003",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "What is the ultimate aim of the 'Hard-AI' or 'Human-level Intelligence' school of thought?",
    options: [
      "To create an autonomous mechanism that could imitate and even surpass human capacity for intelligence",
      "To create an automated mechanism that simulates and supports efficient expression of human mental activity in daily life",
      "To define a consensual criterion for distinguishing Intelligent from Unintelligent agencies",
      "To reduce every instance of human reasoning to a single unifying mathematical proof"
    ],
    correctAnswer: 0,
    explanation: "In the Hard-AI school of thought, the ultimate aim is to create an autonomous mechanism that could imitate and even, perhaps, surpass human capacity for intelligence.\n\nSimulating and supporting efficient expression of human mental activity is instead the aim of the Soft-AI school, a different school of thought.\n\nDefining a consensual criterion for Intelligent versus Unintelligent is described as unresolved in conventional literature, not as the aim of Hard-AI.\n\nReducing reasoning to a single mathematical proof is not an aim attributed to either school of thought here."
  },
  {
    id: "cpe316_ch1_004",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "What is the aim of the 'Soft-AI' or 'Utilitarian Intelligence' school of thought?",
    options: [
      "To create an autonomous mechanism that surpasses human intelligence entirely",
      "To create an automate mechanism that could simulate, and perhaps support, efficient expression of human mental activity",
      "To prove that thinking machines are logically impossible under any definition",
      "To replicate the human brain's neurons exactly within a mechanism"
    ],
    correctAnswer: 1,
    explanation: "The Soft-AI or Utilitarian Intelligence school aims to create an automate mechanism that could simulate, and perhaps be used to support, efficient expression of human mental activity.\n\nSurpassing human intelligence entirely is instead the aim attributed to Hard-AI, the other school of thought.\n\nProving thinking machines logically impossible is closer to Feynman's own remark, not the stated aim of the Soft-AI school itself.\n\nExactly replicating brain neurons is not the aim given for Soft-AI in this material."
  },
  {
    id: "cpe316_ch1_005",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "How did Richard Feynman respond to the question of whether a machine could ever think like humans and be more intelligent than them?",
    options: [
      "That a machine thinking like humans is impossible, but whether machines are intelligent depends on the definition of intelligence",
      "That machines will inevitably surpass human intelligence once processing speed is sufficient",
      "That the question is meaningless and should never be discussed by scientists",
      "That machines already think exactly like human beings do"
    ],
    correctAnswer: 0,
    explanation: "Richard Feynman responded that a machine that thinks like human beings is impossible, but that whether machines are intelligent depends on the definition of intelligence.\n\nClaiming machines will inevitably surpass humans once speed is sufficient reverses Feynman's actual position on thinking like a human.\n\nDismissing the question as meaningless and undiscussable is instead closer to Turing's stance on a related but different question, not Feynman's response here.\n\nClaiming machines already think exactly like humans directly contradicts what Feynman is quoted as saying."
  },
  {
    id: "cpe316_ch1_006",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "Within Arokun, what does an informed enquiry seek to construct, and to what criteria must it conform?",
    options: [
      "Alaye, an Explanation, conforming to the criteria of Tito., Consistency",
      "Asofin, a Definition, conforming to the criteria of Kikun, Coherence, above all else",
      "Iwi, a narrative, conforming to the criteria of Idamo., Identity, above all",
      "Oruko., a name, conforming to the criteria of Onka, Number"
    ],
    correctAnswer: 0,
    explanation: "An informed enquiry seeks to construct Alaye, an Explanation, that conforms to the criteria of Tito., Consistency.\n\nAsofin, a Definition, is the broader activity being discussed, and its own criterion of coherence is attached to meaningful enquiry generally rather than being paired with Kikun in this specific statement about informed enquiry.\n\nIwi, a narrative, paired with Idamo. is not the pairing given for informed enquiry here.\n\nOruko. and Onka are explicitly said elsewhere not to be definitions at all, so they cannot be what an informed enquiry constructs."
  },
  {
    id: "cpe316_ch1_007",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "Why is competency described as inexpressible in the discussion of self-recursion?",
    options: [
      "Because infinity is inherent in a self-recursion, and an instance in which infinity is inherent is inexpressible",
      "Because competency is only ever demonstrated once and cannot be observed again",
      "Because competency requires a Pseudo language of symbols that has not yet been invented anywhere in the modern world",
      "Because competency can only be assessed through regular, context-neutral language"
    ],
    correctAnswer: 0,
    explanation: "Competency is self-recursive, and infinity is inherent in a self-recursion, since every Previous state has a unique Previous and every Next state has a unique Next; therefore an instance in which infinity is inherent, such as competency, is inexpressible.\n\nCompetency being demonstrated only once is not the reasoning given for its inexpressibility.\n\nThe absence of an invented Pseudo language of symbols is not the stated reason either.\n\nRestricting assessment to regular, context-neutral language is not the argument made about competency's inexpressibility."
  },
  {
    id: "cpe316_ch1_008",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "Through what kind of instrument of language is an informed explanation formulated and prescribed?",
    options: [
      "An instrument of context-neutral language",
      "An instrument of context-sensitive language exclusively",
      "An instrument of regular language exclusively",
      "A Pseudo language of symbols"
    ],
    correctAnswer: 0,
    explanation: "An informed explanation comprises finite instances of expression and is therefore formulated and prescribed through an instrument of context-neutral language.\n\nContext-sensitive language is instead associated with meaningful definitions grounded in metaphor, a different pairing.\n\nRegular language exclusively is not the instrument named for an informed explanation.\n\nA Pseudo language of symbols concerns computational mechanism rendering, not the formulation of an informed explanation."
  },
  {
    id: "cpe316_ch1_009",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "What is Iruju, and why is it inherent in the attempt to define the term Asofin (Definition) itself?",
    options: [
      "Iruju means Ambiguity, and it is inherent because the axiom being defined is also a term in the expression of its own definition",
      "Iruju means Coherence, and it is inherent because every definition must reference at least two other definitions",
      "Iruju means Consistency, and it is inherent because contradictory definitions cannot both be admissible",
      "Iruju means Identity, and it is inherent because every term must be given a unique numerical label"
    ],
    correctAnswer: 0,
    explanation: "Iruju, Ambiguity, is inherent in the recursive expression of defining Asofin, because the axiom to be defined is also a term in the expression of its own definition.\n\nCoherence is a separate criterion applied to meaningful enquiry and definitions, not the meaning of Iruju.\n\nConsistency is likewise a separate criterion, Tito., not what Iruju names.\n\nRequiring a unique numerical label describes Onka, a Number, which is explicitly said not to be a definition at all."
  },
  {
    id: "cpe316_ch1_010",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "Which of the following is a failure that an informed definition, within Arokun, must avoid?",
    options: [
      "Being cyclic, where the term being defined appears in its own narrative",
      "Being precise, where terms ascribe identity to a unique or familiar range",
      "All of these",
      "None of these"
    ],
    correctAnswer: 0,
    explanation: "Being cyclic is listed as a failure an informed definition must avoid, since a cyclic definition is self-recursive and not explicit.\n\nBeing precise is instead listed as a required feature of a good definition, not a failure to avoid, so it does not belong alongside the cyclic failure.\n\nSince only the cyclic claim is a genuine listed failure, both claims together cannot be correct.\n\nSince the cyclic claim is genuinely a listed failure, it is not the case that neither claim is correct."
  },
  {
    id: "cpe316_ch1_011",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "How is Asofin (a Definition) rendered in its Yoruba expression?",
    options: [
      "A succinct narrative for expressing an unfamiliar experience or instance using familiar Terms",
      "A numerical label used to distinguish one instance from every other instance in a system",
      "A cyclic expression in which the axiom appears within its own narrative",
      "A collection of synonyms drawn from a standard dictionary"
    ],
    correctAnswer: 0,
    explanation: "The Yoruba definition of Asofin is rendered as a succinct narrative for expressing an unfamiliar experience or instance using familiar Terms.\n\nA numerical label describes Onka, a Number, which is explicitly excluded from counting as a definition.\n\nA cyclic expression describing the axiom within its own narrative is instead the failure mode of a cyclic definition, which an informed definition must avoid.\n\nA collection of dictionary synonyms is not how Asofin is rendered in this material."
  },
  {
    id: "cpe316_ch1_012",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "Why is defining 'Artificial Intelligence' as 'a machine with capacity to demonstrate intelligent behaviour' considered a cyclic definition?",
    options: [
      "Because the term being defined appears within the narrative of its own definition",
      "Because the definition avoids the term being defined by substituting a different but similar term",
      "Because the definition is not grounded in any tool of logic, polarity, or metaphor",
      "Because the definition uses a term more complex than the one it is defining"
    ],
    correctAnswer: 0,
    explanation: "A cyclic definition is one in which the term being defined is in the narrative of its definition, exactly as intelligent behaviour appears while defining intelligence.\n\nAvoiding the term by substituting a similar one describes a definition that begs the question, a distinct failure.\n\nLacking grounding in logic, polarity, or metaphor describes an absurd definition, a different failure.\n\nUsing a more complex term than the one being defined describes a compounding definition, also a different failure."
  },
  {
    id: "cpe316_ch1_013",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "Defining Evolution as a definition for Creation, using terms such as 'Can be' or 'Could be', illustrates which failure of an informed definition?",
    options: [
      "It begs the question by avoiding the term being defined through a similar or different term",
      "It is cyclic, since Creation appears in the narrative of its own definition all over again",
      "It is absurd, lacking grounding in logic, polarity, or metaphor",
      "It is imprecise, failing to ascribe identity to a unique or familiar range"
    ],
    correctAnswer: 0,
    explanation: "A definition begs the question when it avoids the term being defined by defining a similar or different term, exactly as Evolution is substituted for Creation using hedging terms like 'Can be'.\n\nA cyclic definition instead requires the term itself, Creation, to appear directly in its own narrative, which is not what this example shows.\n\nAn absurd definition is a separate failure concerning the lack of logic, polarity, or metaphor, not substitution of a similar term.\n\nAn imprecise definition is a separate failure about ascribing identity to unique instances, not term substitution."
  },
  {
    id: "cpe316_ch1_014",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "Using 'Big-bang' as a definition for Creation is given as an example of which failure?",
    options: [
      "An absurd definition, neither grounded in logic and polarity nor in metaphor",
      "A compounding definition, using a more complex term than the one defined in its own narrative",
      "An inconsistent definition, ascribing contradictory information to its expression",
      "A cyclic definition, containing the term being defined within its own narrative directly"
    ],
    correctAnswer: 0,
    explanation: "An absurd definition is neither grounded in language tools of logic and/or polarity nor metaphor, and Big-bang as a definition for Creation is given as exactly this example.\n\nA compounding definition instead concerns using a more complex term, illustrated elsewhere with Knowledge defined as an epistemological state.\n\nAn inconsistent definition concerns contradictory information, illustrated elsewhere with the aquatic organism example.\n\nA cyclic definition requires the defined term to reappear in its own narrative, which is not the issue with the Big-bang example."
  },
  {
    id: "cpe316_ch1_015",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "Defining Knowledge as 'Epistemological state of justified true belief' illustrates which failure of an informed definition?",
    options: [
      "A compounding definition, since a term more complex than Knowledge is used in the narrative",
      "A cyclic definition, since Knowledge itself appears in its own narrative once again in this case",
      "An absurd definition, lacking grounding in logic, polarity, or metaphor",
      "An imprecise definition, failing to ascribe identity to unique instances"
    ],
    correctAnswer: 0,
    explanation: "A definition is compounding when a term more complex than the term being defined appears in the narrative of its definition, exactly as 'Epistemological state of justified true belief' is more complex than Knowledge itself.\n\nA cyclic definition instead requires Knowledge itself to reappear in its own narrative, which is not the issue here.\n\nAn absurd definition concerns a lack of logic, polarity, or metaphor, illustrated elsewhere with Big-bang.\n\nAn imprecise definition concerns failing to ascribe identity to unique instances, illustrated elsewhere with the fishing example."
  },
  {
    id: "cpe316_ch1_016",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "The definition 'Fishing is when we fish for fish in the fish river' is given as an example of which failure?",
    options: [
      "It is imprecise, since terms in its expression fail to ascribe identity to unique or familiar instances",
      "It is inconsistent, ascribing two mutually exclusive and contradictory pieces of information",
      "It begs the question by substituting a similar term for the one being defined once again in practice",
      "It is compounding, using a term more complex than the one being defined"
    ],
    correctAnswer: 0,
    explanation: "A definition is precise when terms in its expression ascribe identity to unique instances or a familiar range, and the fishing example is given as imprecise for failing this.\n\nAn inconsistent definition instead concerns contradictory information, illustrated elsewhere with the aquatic organism example.\n\nBegging the question concerns substituting a similar term, illustrated elsewhere with Evolution standing in for Creation.\n\nA compounding definition concerns a more complex substituted term, illustrated elsewhere with Knowledge, not the fishing example."
  },
  {
    id: "cpe316_ch1_017",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "Defining an aquatic organism as 'A living thing that lives on water' is given as an example of which failure?",
    options: [
      "An inconsistent definition, since at least two correct but mutually exclusive pieces of information can be ascribed to it",
      "An absurd definition, lacking grounding in logic, polarity, or metaphor",
      "A cyclic definition, since the term aquatic organism reappears in its own narrative",
      "An imprecise definition, failing to ascribe identity to a unique instance"
    ],
    correctAnswer: 0,
    explanation: "A definition is inconsistent when at least two correct but mutually exclusive and contradictory pieces of information can be ascribed to its expression, and the aquatic organism example is self-contradictory in exactly this way.\n\nAn absurd definition instead concerns a lack of logic, polarity, or metaphor, illustrated elsewhere with Big-bang.\n\nA cyclic definition requires the defined term itself to reappear in its own narrative, which is not the case here.\n\nAn imprecise definition concerns failing to ascribe identity to a unique instance, illustrated elsewhere with the fishing example."
  },
  {
    id: "cpe316_ch1_018",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "Can a 'name' (Oruko.) or a 'number' (Onka) ever count as a definition?",
    options: [
      "No, a name is used to ascribe nominal identity and a number to ascribe numerical identity, but neither is a definition",
      "Yes, a name is always a definition because it ascribes a unique nominal identity",
      "Yes, a number is always a definition because it ascribes a unique numerical identity",
      "Only a number counts as a definition, since it removes ambiguity that a name cannot"
    ],
    correctAnswer: 0,
    explanation: "A name is used to ascribe nominal identity and a number to ascribe numerical identity to an Instance, Entity, Agency, or Experience, and it is explicitly stated that therefore neither a name nor a number is a definition.\n\nClaiming a name is always a definition directly contradicts the explicit statement that a name is NOT a definition.\n\nClaiming a number is always a definition likewise contradicts the explicit statement that a number is NOT a definition.\n\nClaiming only a number qualifies reverses the actual point, which excludes both equally."
  },
  {
    id: "cpe316_ch1_019",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "What is Tito., and to what kind of definition is it applied as the fundamental assessment criteria?",
    options: [
      "Tito. means Consistency, and it is the fundamental criteria for assessing the logical content of an informed, context-neutral definition",
      "Tito. means Coherence, and it is the fundamental criteria for assessing a meaningful, context-sensitive definition of any kind whatsoever",
      "Tito. means Metaphor, and it is the fundamental criteria for assessing an absurd definition",
      "Tito. means Ambiguity, and it is the fundamental criteria for assessing a cyclic definition"
    ],
    correctAnswer: 0,
    explanation: "Tito., Consistency, is the fundamental criteria for assessing the logical content of an informed definition, which is expressed using an instrument of context-neutral language.\n\nCoherence, Kikun, is instead paired with meaningful, context-sensitive definitions, a distinct criterion for a distinct kind of definition.\n\nMetaphor names the grounding of a context-sensitive definition, not a criterion, and it is not what Tito. means.\n\nAmbiguity names Iruju, the problem inherent in recursive definitions, not what Tito. means."
  },
  {
    id: "cpe316_ch1_020",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "In what kind of mental abstraction is a context-neutral definition grounded?",
    options: [
      "Theory, Model, Thesis, Hypothesis, Hierarchy, or Method",
      "Afijuwe, or Metaphor, grounded in collective sensory experience",
      "Idamo., or Identity, grounded in an instance's beingness",
      "Kikun, or Coherence, grounded in application or action"
    ],
    correctAnswer: 0,
    explanation: "A context-neutral definition is grounded in mental abstraction such as Theory, Model, These, Hypothesis, Hierarchy, or Method.\n\nAfijuwe, Metaphor, instead grounds a context-sensitive definition, a distinct kind of definition with its own criteria.\n\nIdamo., Identity, is a separate concept concerning the rendering of an expression, not the grounding of a context-neutral definition.\n\nKikun, Coherence, is the criteria for assessing a meaningful, context-sensitive definition's application, not the grounding of a context-neutral one."
  },
  {
    id: "cpe316_ch1_021",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "Which of the following correctly names one of the two schools of thought challenging conventional AI?",
    options: [
      "A school questioning whether developing a machine for something indescribable is ill-conceived",
      "A school holding that reducing intelligence to a mechanical process may be possible, but that modern tools and techniques are inappropriate for the task",
      "All of these",
      "None of these"
    ],
    correctAnswer: 2,
    explanation: "A school of thought questions the fundamental principles upon which AI rests, positing that developing a machine for something we cannot describe is ill-conceived.\n\nA separate, procedural school of thought holds that reducing intelligence to a mechanical process may be possible, but that modern tools and techniques are inappropriate for the task.\n\nSince both claims genuinely name one of the two challenging schools, the correct verdict is that all of these are correct.\n\nSince both claims are genuinely correct, it is not the case that neither of them is."
  },
  {
    id: "cpe316_ch1_022",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "What is required to respond to the narrative for the definition of an area of study, per the three important enquiries?",
    options: [
      "It should respond to the object of study, the kind of study, and the purpose of study",
      "It should respond only to the object of study, since the kind and purpose are already self-evident to most readers",
      "It should respond to the criteria for informed definition, listed separately in an earlier subsection",
      "It should respond to the literature definitions available for the field being studied"
    ],
    correctAnswer: 0,
    explanation: "The narrative for the definition of an area or field of study should respond to three important enquiries: the object of study, the kind of study, and the purpose of study.\n\nResponding only to the object of study while treating the others as self-evident is not what is stated; all three enquiries are presented as important.\n\nThe criteria for informed definition are a separate, earlier subsection concerned with the general features of definitions, not this specific three-part narrative.\n\nSurveying literature definitions is a separate activity, presented afterward as worked examples, not the three-enquiry narrative itself."
  },
  {
    id: "cpe316_ch1_023",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "What is identified as the object of study in Artificial Intelligence?",
    options: [
      "Observation of the performance of the activity of biological agency to which intelligence has been ascribed",
      "The computational rendering of human narrative into a Pseudo Language of symbols",
      "The creation of an autonomous mechanism that imitates ascribed intelligence to the extent that technology permits in practice",
      "The prescribed criteria to which an intelligent machine should conform"
    ],
    correctAnswer: 0,
    explanation: "The object of study in Artificial Intelligence, answering the What, Where, When, and Which of the enquiry, is the observation of the performance of the activity of biological agency to which intelligence has been ascribed.\n\nRendering human narrative into a Pseudo Language of symbols instead answers the How, making it the kind of study rather than the object of study.\n\nCreating an autonomous mechanism to the extent technology permits instead answers the Why, making it the purpose of study rather than the object.\n\nPrescribed criteria for an intelligent machine are discussed separately under conventional assessment, not as the object of study here."
  },
  {
    id: "cpe316_ch1_024",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "What kind of study is Artificial Intelligence identified as, answering the 'How?' of the enquiry?",
    options: [
      "Computational, involving the rendering of human narrative for intelligence into a Pseudo Language of symbols",
      "Purely observational, requiring no formal symbols or rendering at all",
      "Purely philosophical, concerned only with debating the nature of consciousness",
      "Purely biological, requiring dissection and study of the brain"
    ],
    correctAnswer: 0,
    explanation: "The kind of study in Artificial Intelligence is computational, involving the aspect of the human narrative for intelligence that has been rendered into the Pseudo Language of symbols.\n\nBeing purely observational and requiring no symbols contradicts the stated computational rendering into a Pseudo Language.\n\nBeing purely philosophical describes a different enterprise, not the kind of study identified here.\n\nBeing purely biological and requiring dissection is not the kind of study given; the Brain Theory's assumptions are discussed as a separate topic."
  },
  {
    id: "cpe316_ch1_025",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "What is identified as the purpose of study in Artificial Intelligence, answering the 'Why?' of the enquiry?",
    options: [
      "To create an autonomous mechanism that imitates the intelligence ascribed to an organism to the extent that technology permits",
      "To observe the performance of biological agency without any further aim",
      "To render human narrative into a Pseudo Language of symbols for its own sake",
      "To settle the philosophical debate between Monism and Dualism"
    ],
    correctAnswer: 0,
    explanation: "The purpose of study in Artificial Intelligence is to create an autonomous mechanism that imitates the intelligence ascribed to an organism to the extent that technology permits.\n\nObserving performance without further aim instead describes the object of study, not the purpose.\n\nRendering narrative into symbols for its own sake describes the kind of study, not the purpose.\n\nSettling the Monism versus Dualism debate is discussed separately under the Mind Theory of Intelligence, not as the purpose of AI study."
  },
  {
    id: "cpe316_ch1_026",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "Which definition of Artificial Intelligence, 'the science and engineering of making intelligent machines', is attributed to John McCarthy in 1955?",
    options: [
      "True",
      "False",
      "Maybe",
      "I don't know"
    ],
    correctAnswer: 0,
    explanation: "The definition 'Artificial Intelligence is the science and engineering of making intelligent machines' is directly attributed to John McCarthy (1955) in the listed examples of definitions."
  },
  {
    id: "cpe316_ch1_027",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "Which of the following definitions is attributed to John McCarthy in 1997, distinct from his 1955 definition?",
    options: [
      "Intelligence is the computational part of the ability to achieve goals in the world",
      "Artificial Intelligence is the science and engineering of making intelligent machines",
      "Artificial Intelligence is the science of making machines that can do the kinds of things that humans can do",
      "Artificial Intelligence is a discipline concerned with building programs that perform tasks requiring intelligence when done by humans"
    ],
    correctAnswer: 0,
    explanation: "McCarthy's 1997 definition states that Intelligence is the computational part of the ability to achieve goals in the world.\n\nThe science and engineering of making intelligent machines is instead McCarthy's earlier 1955 definition.\n\nThe science of making machines that can do the kinds of things humans can do is instead attributed to Blackburn's 2005 Oxford Dictionary of Philosophy.\n\nA discipline concerned with programs performing tasks requiring intelligence is instead attributed to the Oxford Dictionary of Computing, 2008."
  },
  {
    id: "cpe316_ch1_028",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "The definition 'Artificial Intelligence is an area of study concerned with making computers copy intelligent human behaviours' is attributed to which source?",
    options: [
      "Oxford Advanced Learner's Dictionary, International Students Edition",
      "Blackburn's Oxford Dictionary of Philosophy, 2005",
      "Oxford Dictionary of Computing, 2008",
      "Newell and Simon's Human Problem Solving, 1972, a Prentice-Hall publication"
    ],
    correctAnswer: 0,
    explanation: "The definition about making computers copy intelligent human behaviours is attributed to the Oxford Advanced Learner's Dictionary, International Students Edition.\n\nBlackburn's Oxford Dictionary of Philosophy is instead the source for the definition about machines doing the kinds of things humans can do.\n\nThe Oxford Dictionary of Computing, 2008, is instead the source for the definition about building programs that perform tasks requiring intelligence.\n\nNewell and Simon's Human Problem Solving is a citation used later for the Problem-Solving Theory of Intelligence, not for any of the listed AI definitions."
  },
  {
    id: "cpe316_ch1_029",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "The Brain Theory of Intelligence posits that the substance of intelligence is situated where?",
    options: [
      "In the human brain",
      "In the capacity for language",
      "In the ability to create and recognise patterns",
      "In the accounts of cause and effect observed during action"
    ],
    correctAnswer: 0,
    explanation: "The Brain Theory posits that the substance of intelligence is situated in the human brain, and that a mechanism replicating the brain has, or has the potential for, intelligence.\n\nThe capacity for language is instead the substance posited by the Language Theory, a distinct theory.\n\nThe ability to create and recognise patterns is instead the substance posited by the Pattern Theory.\n\nAccounts of cause and effect are instead the substance posited by the Cause-Effect Theory."
  },
  {
    id: "cpe316_ch1_030",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "Which pair of theorists' work on the universal problem-solving machine is cited as assuming the human brain is like a mechanism with parts and configuration?",
    options: [
      "Alan Turing and Alonzo Church",
      "Ludwig Wittgenstein and Noam Chomsky, in later publications",
      "Isaac Newton and Rene Descartes, in earlier writings",
      "Newell and Simon"
    ],
    correctAnswer: 0,
    explanation: "Alan Turing and Alonzo Church's theory of the universal problem-solving machine is cited as assuming the human brain is like a mechanism with parts and configuration, informing the Brain Theory of Intelligence.\n\nWittgenstein and Chomsky are instead cited as influencing the Language Theory of Intelligence, a different theory.\n\nNewton and Descartes are cited elsewhere among philosophers influencing the European Intellectual Tradition generally, not this specific brain-as-mechanism assumption.\n\nNewell and Simon are cited for the Problem-Solving Theory of Intelligence, not the Brain Theory."
  },
  {
    id: "cpe316_ch1_031",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "Within Arokun, why is the brain said to be insufficient, by itself, to account for the activity of an organism?",
    options: [
      "Because the brain is an organ, and an organ by itself, irrespective of sophistication, is not sufficient to account for the activity of its organism",
      "Because the brain lacks any sensory organs to receive input from the environment",
      "Because the brain requires a Pseudo language of symbols to operate at all",
      "Because the brain, unlike a mechanism, cannot store any information at all"
    ],
    correctAnswer: 0,
    explanation: "Within Arokun, the brain is Eya, an organ, in the material manifestation of biological beingness, and an organ by itself, irrespective of its sophistication, is not sufficient to account for the activity of its organism.\n\nLacking sensory organs is not the reasoning given; sensory organs are discussed as a separate distinguishing feature of organisms generally.\n\nRequiring a Pseudo language of symbols describes computational mechanisms, not the brain as a biological organ.\n\nClaiming the brain cannot store information contradicts the discussion of memory and information elsewhere, and is not the stated reasoning."
  },
  {
    id: "cpe316_ch1_032",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "Which of the following theories posits that the substance of intelligence is situated in the human brain?",
    options: [
      "The Brain Theory of Intelligence",
      "The Language Theory of Intelligence",
      "All of these",
      "None of these"
    ],
    correctAnswer: 0,
    explanation: "The Brain Theory posits that the substance of intelligence is situated in the human brain, and that a mechanism replicating the brain has the potential for intelligence.\n\nThe Language Theory instead posits that the substance of intelligence is situated in the capacity for language, a distinct claim about a different organ or faculty.\n\nSince only the Brain Theory makes this specific claim about the brain, both theories together cannot be correct.\n\nSince the Brain Theory genuinely makes this claim, it is not the case that neither theory does."
  },
  {
    id: "cpe316_ch1_033",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "What evidence is cited against the Brain Theory's claim that intelligence is situated in the brain?",
    options: [
      "Humans who have suffered damage or impairment to their brain organs are still able to perform activity considered intelligent",
      "No human being has ever been observed to use their brain for a creative task of any kind at all",
      "Mechanisms have already been shown to outperform the human brain in every creative task",
      "The brain has never been successfully studied using any scientific instrument"
    ],
    correctAnswer: 0,
    explanation: "There are cases of humans who have suffered damage or impairment to their organs of brain but are able to perform creative activity considered to be intelligent, which is the evidence cited against situating intelligence in the brain.\n\nClaiming no human has used their brain for a creative task is the opposite of what is being illustrated by the brain-damage cases.\n\nClaiming mechanisms outperform the brain in every creative task is not a claim made anywhere in this discussion.\n\nClaiming the brain has never been studied scientifically is not the evidence cited here."
  },
  {
    id: "cpe316_ch1_034",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "Ascribing intelligence to an agency on the grounds of its organs, within Arokun, is a symptom of which condition?",
    options: [
      "Idandan Afihun, the illusion of pseudo-completeness",
      "Idandan Atinunda, the abstraction illusion of completeness",
      "Idandan Ohun, the term illusion of completeness",
      "Aipe, incompleteness itself, without further qualification"
    ],
    correctAnswer: 0,
    explanation: "Ascribing intelligence to an agency on the grounds of its organs is a symptom of Idandan Afihun, the illusion of pseudo-completeness, per the discussion of the Brain Theory.\n\nIdandan Atinunda is instead the symptom named for ascribing intelligence on the grounds of the mind, a different theory's critique.\n\nIdandan Ohun is instead the symptom named for ascribing intelligence on the grounds of cause and effect, a different theory's critique.\n\nAipe alone names incompleteness generally, not the specific named symptom attached to the Brain Theory's organ-based ascription."
  },
  {
    id: "cpe316_ch1_035",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "What does the Mind Theory of Intelligence posit is essential and sufficient for developing an intelligent mechanism?",
    options: [
      "An understanding of the human mind",
      "A complete map of every neuron in the human brain",
      "A prescribed set of assessment criteria for intelligence",
      "A Pseudo language of symbols capable of representing any narrative"
    ],
    correctAnswer: 0,
    explanation: "The Mind Theory posits that an understanding of the human mind is essential and sufficient for the development of an intelligent mechanism.\n\nA complete neuron map describes the Brain Theory's underlying assumption, a different theory.\n\nA prescribed set of assessment criteria is discussed separately as an unresolved problem in conventional AI generally, not as the Mind Theory's own claim.\n\nA Pseudo language of symbols concerns computational rendering generally, not the specific claim of the Mind Theory."
  },
  {
    id: "cpe316_ch1_036",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "Which two positions on the body-mind problem are named as failing to culminate in a consistent explanation?",
    options: [
      "Monist and Dualist",
      "Hard-AI and Soft-AI schools of thought",
      "Stochastic and Theory-based approaches",
      "Context-neutral and context-sensitive"
    ],
    correctAnswer: 0,
    explanation: "Neither the Monist position, that the organism is wholly situated in Material or wholly in Mental, nor the Dualist position, that Mental and Material are binary opposite instances, has culminated in a consistent explanation of the body-mind problem.\n\nHard-AI and Soft-AI instead name the two schools of thought about the aim of AI, unrelated to the body-mind problem.\n\nStochastic and Theory-based instead name the two approaches propounded at the founding workshop.\n\nContext-neutral and context-sensitive instead name kinds of language instrument, not positions on the body-mind problem."
  },
  {
    id: "cpe316_ch1_037",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "Within Arokun, ascribing intelligence to an agency in the absence of evidence grounded in the location of its mind is a symptom of which condition?",
    options: [
      "Idandan Atinunda, the abstraction illusion of completeness",
      "Idandan Afihun, the illusion of pseudo-completeness",
      "Idandan Ohun, the term illusion of completeness, a different critique entirely",
      "Iruju, the ambiguity inherent in recursive definitions of any kind"
    ],
    correctAnswer: 0,
    explanation: "Ascribing intelligence to an agency in the absence of evidence grounded in the location and character of its activity, such as the mind, is a symptom of Idandan Atinunda, the abstraction illusion of completeness.\n\nIdandan Afihun is instead the symptom named for ascribing intelligence on the grounds of organs or a Pseudo language of symbols, different critiques.\n\nIdandan Ohun is instead the symptom named for the Cause-Effect Theory's critique.\n\nIruju names the ambiguity in recursive definitions, an unrelated concept from the earlier discussion of Asofin."
  },
  {
    id: "cpe316_ch1_038",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "The Language Theory of Intelligence posits that a mechanism with the capacity for language can eventually manifest intelligence if it is what?",
    options: [
      "Refined and/or optimised",
      "Given a physical body with sensory organs",
      "Connected permanently to a human brain",
      "Restricted to only regular, binary-opposite-neutral language"
    ],
    correctAnswer: 0,
    explanation: "The Language Theory posits that a mechanism with the capacity for language can be refined and/or optimised in such a way that it will eventually manifest intelligence.\n\nBeing given a physical body with sensory organs is not the condition given by this theory; that concern belongs to the Pattern Theory's discussion of sensory organs.\n\nBeing connected to a human brain is not a condition raised anywhere in the Language Theory's discussion.\n\nBeing restricted to regular language is a limitation the conventional perspective is criticised for, not a condition for manifesting intelligence."
  },
  {
    id: "cpe316_ch1_039",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "Which pair of theorists is credited with substantially influencing the theory of language used in conventional Artificial Intelligence?",
    options: [
      "Ludwig Wittgenstein and Noam Chomsky",
      "Alan Turing and Alonzo Church, in earlier decades",
      "John McCarthy and Marvin Minsky, among others",
      "Isaac Newton and Gottfried Leibniz"
    ],
    correctAnswer: 0,
    explanation: "Ludwig Wittgenstein and Noam Avram Chomsky have influenced, substantially, the theory of language used in conventional Artificial Intelligence and Computing.\n\nTuring and Church are instead credited with the universal problem-solving machine assumption underlying the Brain Theory.\n\nMcCarthy and Minsky are named among the attendees of the founding workshop, not as the theorists behind the Language Theory specifically.\n\nNewton and Leibniz are named among philosophers of the wider European Intellectual Tradition, not as the specific influences on the Language Theory."
  },
  {
    id: "cpe316_ch1_040",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "Alan Turing's ideas of the 'Universal Problem Solver' and 'Imitation Game' are grounded in which theory of intelligence?",
    options: [
      "Language Theory",
      "Brain Theory of Intelligence",
      "Pattern Theory of Intelligence",
      "Cause-Effect Theory"
    ],
    correctAnswer: 0,
    explanation: "The Alan Turing's idea of Universal Problem Solve and Imitation Game are grounded in Language theory, and the imitation game is the foundation of the conventional test of intelligence used to assess AI systems.\n\nBrain Theory instead concerns the assumption that the brain is a mechanism with parts and configuration, a separate grounding.\n\nPattern Theory instead concerns the creation and recognition of patterns, unrelated to the imitation game's grounding.\n\nCause-Effect Theory instead concerns action and reaction accounts, unrelated to the imitation game."
  },
  {
    id: "cpe316_ch1_041",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "What is Ede-ori, and what is said to be inextricable from it?",
    options: [
      "Ede-ori means Faculty of language, and it is inextricable from its biological agency or organism",
      "Ede-ori means Faculty of language, and it is inextricable from a Pseudo language of symbols used in computing",
      "Ede-ori means Sensory organs, and it is inextricable from a mechanism's actuators",
      "Ede-ori means Pattern recognition, and it is inextricable from digital computation"
    ],
    correctAnswer: 0,
    explanation: "Ede-ori, Faculty of language, is inherent in the beingness of biological agency or organism, and is therefore inextricable from its biological agency, since instruments of language are created through it.\n\nBeing inextricable from a Pseudo language of symbols reverses the relationship; a Pseudo language of symbols is instead described as a mirror image of an instrument of language, not the source of Ede-ori.\n\nSensory organs are a separate distinguishing feature of organisms, not what Ede-ori names.\n\nPattern recognition belongs to a different theory of intelligence entirely, not to the definition of Ede-ori."
  },
  {
    id: "cpe316_ch1_042",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "Why is the agency of a computation process described as a mechanism rather than an organism?",
    options: [
      "Because such agency is effected through a Pseudo language of symbols, and Faculty of language is outside the ambit of a mechanism",
      "Because computation processes are always slower than organisms at performing the same task",
      "Because computation processes require electricity while organisms require food",
      "Because computation processes cannot be observed by human sensory organs"
    ],
    correctAnswer: 0,
    explanation: "Pseudo agency is effected through a Pseudo language of symbols, so the agency of a computation process is a mechanism, not an organism, since Faculty of language is outside the ambit of a mechanism.\n\nRelative speed of computation versus organisms is not the reasoning given for this distinction anywhere in the material.\n\nThe electricity-versus-food contrast is not raised as the reasoning for the organism-mechanism distinction here.\n\nObservability by human sensory organs is not the criterion used to distinguish mechanism from organism in this discussion."
  },
  {
    id: "cpe316_ch1_043",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "Per Table 1.1, which of the following is true of a Mechanism's beingness, as opposed to an Organism's?",
    options: [
      "Atunrabi, Self-rebirth, effected through Growth and Decay, is inherent in a Mechanism's beingness",
      "Breath sustains the material manifestation of a Mechanism's beingness",
      "All of these",
      "None of these"
    ],
    correctAnswer: 3,
    explanation: "Table 1.1 states that Atunrabi, Self-rebirth, is instead inherent in an Organism's beingness, with a Mechanism's Self being outside the ambit of its beingness and instead subject to Wear and Tear, so this claim is contradicted.\n\nBreath is likewise explicitly stated to be neither required nor inherent in the sustenance of a Mechanism's material manifestation, so this claim is also contradicted.\n\nSince neither claim is supported by the table, both claims together cannot be correct.\n\nSince neither claim is genuinely supported, the correct verdict is that none of these are correct."
  },
  {
    id: "cpe316_ch1_044",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "Ascribing intelligence to an agency on the grounds of a Pseudo language of symbols, within Arokun, is a symptom of which condition, per the Language Theory's critique?",
    options: [
      "Idandan Afihun, the illusion of pseudo-completeness",
      "Idandan Atinunda, the abstraction illusion of completeness",
      "Idandan Ohun, the term illusion of completeness",
      "Tito., consistency, applied incorrectly to a context-sensitive claim"
    ],
    correctAnswer: 0,
    explanation: "Within Arokun, ascribing intelligence to an agency on the grounds of a Pseudo language of symbols is a symptom of Idandan Afihun, the illusion of pseudo-completeness, per the Language Theory's critique.\n\nIdandan Atinunda is instead the symptom attached to the Mind Theory's critique about the mind's location.\n\nIdandan Ohun is instead the symptom attached to the Cause-Effect Theory's critique.\n\nTito. names a criterion for consistency in context-neutral definitions, not a symptom of illusion, so it is not the answer here."
  },
  {
    id: "cpe316_ch1_045",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "The Pattern Theory of Intelligence posits that the substance of human intelligence is situated in the ability to do what with Patterns?",
    options: [
      "Create, recognise, manipulate, and express them",
      "Delete, encrypt, compress, and transmit them digitally",
      "Sell, license, patent, and archive them commercially",
      "Ignore, forget, distort, and misplace them"
    ],
    correctAnswer: 0,
    explanation: "The Pattern Theory posits that the substance of the human capacity for intelligence is situated in the ability to create, recognise, manipulate, and express Patterns.\n\nDeleting, encrypting, compressing, and transmitting are operations performed on data by mechanisms, not the capacity named by the Pattern Theory.\n\nSelling, licensing, patenting, and archiving are not activities raised anywhere in the Pattern Theory's discussion.\n\nIgnoring, forgetting, distorting, and misplacing are the opposite of the capacities the theory attributes to intelligence."
  },
  {
    id: "cpe316_ch1_046",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "Which capacity is said to be necessary before an agency can ascribe pattern to an expression at all?",
    options: [
      "Sensory organs",
      "A finite set of assessment criteria",
      "A recognised curriculum for learning",
      "A published, peer-reviewed definition of intelligence"
    ],
    correctAnswer: 0,
    explanation: "The capacity to ascribe pattern to an expression is grounded in sensory organs, implying that an agency lacking sensory organs can neither reckon nor apprehend nor ascribe pattern to an expression.\n\nA finite set of assessment criteria is discussed as a separate, unresolved issue in conventional AI generally, not as a precondition for ascribing pattern.\n\nA recognised curriculum for learning is not raised anywhere in the Pattern Theory's discussion.\n\nA published, peer-reviewed definition of intelligence is not the precondition given for ascribing pattern to an expression."
  },
  {
    id: "cpe316_ch1_047",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "Which named organisms are cited as capable of creating, manipulating, and expressing wonderful varieties of patterns?",
    options: [
      "Plants, Insects such as bees and ants, and Birds",
      "Only humans, since sensory organs are uniquely human",
      "Only mechanisms equipped with a camera and a display screen attached",
      "Fish, Reptiles, and single-celled organisms exclusively"
    ],
    correctAnswer: 0,
    explanation: "Organisms such as Plants, Insects, for example bees and ants, and Birds are cited as capable of creating, manipulating, and expressing wonderful varieties of patterns.\n\nRestricting this capacity to only humans contradicts the explicit examples of plants, insects, and birds given.\n\nMechanisms equipped with a camera and display are explicitly said to be unable to reckon or apprehend pattern at all, since they lack sensory organs.\n\nFish, reptiles, and single-celled organisms exclusively is not the set of examples given in this passage."
  },
  {
    id: "cpe316_ch1_048",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "Does the creation of precise and perfectly symmetrical patterns, by itself, confer intelligence on an agency?",
    options: [
      "No, the creation of precise and perfectly symmetrical patterns does NOT confer intelligence on an agency",
      "Yes, perfect symmetry is the single most reliable indicator of intelligence available",
      "Yes, but only when the pattern is generated using a Pseudo language of symbols each time",
      "No, because symmetrical patterns can never be described using regular language"
    ],
    correctAnswer: 0,
    explanation: "Indeed, the creation of precise and perfectly symmetrical patterns does NOT confer intelligence on an agency, since every pattern that can be precisely prescribed and described using a Pseudo language of Symbols can be automatically generated using a mechanism.\n\nClaiming perfect symmetry is the most reliable indicator of intelligence directly contradicts the stated denial.\n\nClaiming symmetry confers intelligence specifically when generated via a Pseudo language reverses the point, since that is exactly the condition under which a mechanism can automate the pattern.\n\nClaiming symmetrical patterns cannot be described using regular language is not a claim made in this passage."
  },
  {
    id: "cpe316_ch1_049",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "The Cause-Effect Theory of Intelligence situates the substance of intelligence in the accounts of what, observed during a performance?",
    options: [
      "Cause and Effect, observed during Ise (Action) and Asedi (Reaction)",
      "Memory and Forgetting, observed during recall and storage over time",
      "Pattern and Symmetry, observed during expression",
      "Speed and Efficiency, observed during computation"
    ],
    correctAnswer: 0,
    explanation: "The Cause-Effect theory posits that the substance of intelligence is situated in the accounts of the Cause and Effect observed during the performance of Ise, Action, and Asedi, Reaction.\n\nMemory and Forgetting belong to a different discussion, comparing human forgetfulness to a mechanism's inability to forget, not the Cause-Effect Theory.\n\nPattern and Symmetry belong to the Pattern Theory, a distinct theory of intelligence.\n\nSpeed and Efficiency are explicitly denied as a location for intelligence elsewhere, and are not the substance posited by the Cause-Effect Theory."
  },
  {
    id: "cpe316_ch1_050",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "Whose Laws of motion, used in the Physics of Mechanics, is cited as grounded in the Cause-Effect Theory of action and reaction?",
    options: [
      "Isaac Newton",
      "Alan Turing, the mathematician",
      "Rene Descartes, the philosopher",
      "Gottfried Leibniz"
    ],
    correctAnswer: 0,
    explanation: "Isaac Newton's Laws of motion, used in the Physics of Mechanics, is grounded in the Cause-effect theory of action and reaction, and the theory has been fruitfully used in the field of Robotics.\n\nAlan Turing is instead cited for the universal problem-solving machine and the imitation game, unrelated to the Laws of motion.\n\nRene Descartes is named among philosophers of the European Intellectual Tradition generally, not as the source of the Laws of motion here.\n\nGottfried Leibniz is cited later for his law of Indiscernible identity, related to the Turing Test, not the Laws of motion."
  },
  {
    id: "cpe316_ch1_051",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "Within Arokun, which instance is described as the only accessible instance in the beingness of a continuum?",
    options: [
      "Lo.wo., meaning Now",
      "Ojo., meaning Continuum itself",
      "Idamo., meaning Identification",
      "Abeji, meaning Binary opposite"
    ],
    correctAnswer: 0,
    explanation: "Every instance in Isele, a Happening, is in Ojo., Continuum, and Lo.wo., Now, is the only accessible instance in the beingness of continuum, with the beingness of Now being outside the ambit of Idamo., Identification.\n\nOjo. names the continuum itself, the container within which Now is the only accessible instance, not the accessible instance itself.\n\nIdamo. names Identification, which is described as necessary for rendering binary opposites but is explicitly outside the ambit of Now's beingness.\n\nAbeji names Binary opposite, a concept requiring Identification, not the accessible instance of a continuum."
  },
  {
    id: "cpe316_ch1_052",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "How does an instrument of context-sensitive language treat Ise (Action) and its Asedi (Reaction)?",
    options: [
      "As the mutually inclusive and complementary aspects of its agency's Aise, Inaction",
      "As mutually exclusive and contradictory instances",
      "As entirely unrelated instances, since it is binary-opposite neutral",
      "As identical instances that cannot be told apart at all, under any account"
    ],
    correctAnswer: 0,
    explanation: "An instrument of context-sensitive language is used to treat Ise, an Action, and its Asedi, Reaction, as the mutually inclusive and complementary aspects of its agency's Aise, Inaction.\n\nTreating them as mutually exclusive and contradictory instances is instead how an instrument of context-neutral language treats Action and Reaction, a distinct instrument.\n\nTreating them as entirely unrelated, binary-opposite neutral instances is instead how an instrument of regular language treats them.\n\nTreating them as identical and indistinguishable is not a treatment attributed to any of the three language instruments discussed here."
  },
  {
    id: "cpe316_ch1_053",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "Ascribing intelligence to an agency on the ground of Cause and Effect reckoned during its activities, within Arokun, is a symptom of which condition?",
    options: [
      "Idandan Ohun, the Term illusion of completeness",
      "Idandan Afihun, the illusion of pseudo-completeness, a separate critique",
      "Idandan Atinunda, the abstraction illusion of completeness itself",
      "Iruju, the ambiguity of recursive definitions"
    ],
    correctAnswer: 0,
    explanation: "Within Arokun, ascribing intelligence to an agency on the ground of the Cause and Effect reckoned during the activities of a biological agency is a symptom of Idandan Ohun, the Term illusion of completeness.\n\nIdandan Afihun is instead the symptom attached to the Brain Theory's and Language Theory's critiques, different theories.\n\nIdandan Atinunda is instead the symptom attached to the Mind Theory's critique.\n\nIruju names the ambiguity inherent in recursive definitions, an unrelated concept from the discussion of Asofin."
  },
  {
    id: "cpe316_ch1_054",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "Which of the following Judge decisions makes the Impostor PASS the Turing imitation game?",
    options: [
      "The Judge confuses the Impostor for the Subject",
      "The Judge correctly identifies and distinguishes the Subject from the Impostor",
      "All of these",
      "None of these"
    ],
    correctAnswer: 0,
    explanation: "If the Judge confuses the Impostor for the Subject, or is unable to distinguish them, the Impostor has PASSED the imitation game.\n\nCorrectly identifying and distinguishing the Subject from the Impostor is instead the decision under which the Impostor FAILS, the opposite outcome.\n\nSince only confusing the two agencies leads to a pass, both decisions together cannot both lead to a pass.\n\nSince confusing the two agencies genuinely leads to a pass, it is not the case that neither decision does."
  },
  {
    id: "cpe316_ch1_055",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "The Problem-Solving Theory of Intelligence is grounded in work by which pair of researchers, cited for their 1972 publication?",
    options: [
      "Newell and Simon",
      "Turing and Church, decades earlier",
      "Wittgenstein and Chomsky, decades later",
      "McCarthy and Minsky"
    ],
    correctAnswer: 0,
    explanation: "Several earlier computation mechanisms used to demonstrate Artificial Intelligence are grounded in the problem-solving theory of intelligence, citing Newell, A., and Simon, H. A. (1972), Human problem solving.\n\nTuring and Church are instead cited for the universal problem-solving machine assumption underlying the Brain Theory, a related but distinct citation.\n\nWittgenstein and Chomsky are instead cited as influencing the Language Theory.\n\nMcCarthy and Minsky are named among the attendees of the founding 1956 workshop, not as the source of the 1972 Problem-Solving citation."
  },
  {
    id: "cpe316_ch1_056",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "Why is a context-neutral process, such as the one underlying Problem-Solving, described as monotonic?",
    options: [
      "Because its binary opposite states are mutually exclusive and contradictory, and its transitions are finite",
      "Because it can run forever without ever reaching a stale or insipid state under any condition",
      "Because it is grounded in Afijuwe, Metaphor, drawn from collective sensory experience",
      "Because it requires sensory organs that a mechanism can never possess"
    ],
    correctAnswer: 0,
    explanation: "The transition in a context-neutral process is finite and its binary opposite states are mutually exclusive and contradictory, so the process is non-deterministic and monotonic, eventually becoming stale and insipid after repetition.\n\nClaiming it can run forever without becoming stale contradicts the stated eventual staleness of a monotonic process.\n\nBeing grounded in Afijuwe, Metaphor, instead describes a context-sensitive definition, not the context-neutral process discussed here.\n\nRequiring sensory organs is a claim from the Pattern Theory's discussion, not the reasoning for why a context-neutral process is monotonic."
  },
  {
    id: "cpe316_ch1_057",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "On what grounds is a context-neutral explanation for the state of Intelligence ascribed to an agency said to be falsifiable?",
    options: [
      "On the grounds of inconsistency, since one of the binary opposite aspects of a state is ignored or jettisoned",
      "On the grounds that it was never expressed through any instrument of language at all, under any account",
      "On the grounds that it always produces an identical result regardless of input",
      "On the grounds that intelligence cannot be ascribed to any agency whatsoever"
    ],
    correctAnswer: 0,
    explanation: "A context-neutral explanation for the state of Intelligence is falsifiable on the grounds of inconsistency, since the inconsistency is situated in the aspect of a binary opposite state that is ignored or jettisoned during formulation.\n\nClaiming it was never expressed through any language instrument contradicts the fact that it is expressed via context-neutral language, just an incomplete account of it.\n\nAlways producing an identical result is not the stated reasoning for its falsifiability here.\n\nClaiming intelligence cannot be ascribed to any agency at all overgeneralises well beyond the specific falsifiability claim about context-neutral explanations."
  },
  {
    id: "cpe316_ch1_058",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "What is the digital alphabet used to formulate, prescribe, and realise a digital computation mechanism, and does the mechanism process this alphabet as a binary string?",
    options: [
      "The alphabet is the binary set {0, 1}, but a digital computation mechanism does NOT process binary string",
      "The alphabet is the decimal set {0 through 9}, and the mechanism processes it directly as decimal digits during output",
      "The alphabet is a full Yoruba syllabary, processed directly as spoken sound",
      "The alphabet is undefined, since digital mechanisms manipulate terms of language directly"
    ],
    correctAnswer: 0,
    explanation: "A digital computation mechanism is formulated, prescribed, and realised through a Pseudo language of symbols based on the binary alphabet, {0, 1}; however, a digital computation mechanism does NOT process binary string.\n\nA decimal alphabet processed directly as digits is not the alphabet described for digital computation mechanisms here.\n\nA Yoruba syllabary processed as spoken sound is not raised anywhere in this discussion of computation mechanisms.\n\nClaiming digital mechanisms manipulate terms of language directly contradicts the explicit statement that a mechanism manipulates material renderings of symbols, not language terms."
  },
  {
    id: "cpe316_ch1_059",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "In the worked example of electrical signal ranges, which voltage range is assigned to the digit '1'?",
    options: [
      "5.0 V to 3.5 V",
      "2.5 V to 0.0 V, the lower range",
      "3.4 V to 2.6 V",
      "0.0 V to 5.0 V, the entire range"
    ],
    correctAnswer: 0,
    explanation: "In modern digital computation machines, the worked example assigns electrical signal in the range 5.0 V to 3.5 V to digit '1', while the range 2.5 V to 0.0 V is assigned to '0'.\n\n2.5 V to 0.0 V is instead the range assigned to '0', the opposite digit.\n\n3.4 V to 2.6 V is instead the demarcation range used to separate the two admissible ranges into mutually exclusive instances, not the range for '1' itself.\n\nThe entire range from 0.0 V to 5.0 V spans both digits and the demarcation zone together, not the specific range for '1' alone."
  },
  {
    id: "cpe316_ch1_060",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "Can the mental activities of Isiro (Computing) and Ironun (Thinking) be outsourced, seconded, or replicated in another human?",
    options: [
      "No, they can neither be outsourced nor seconded nor replicated in another human",
      "Yes, provided the receiving human has an equally sophisticated brain and matching body structure",
      "Yes, but only through an instrument of context-sensitive language",
      "Yes, as long as sufficient Ipe.ro., Technology, is available"
    ],
    correctAnswer: 0,
    explanation: "The mental activity, such as Isiro, Computing, and Ironun, Thinking, of an individual can neither be outsourced nor seconded nor replicated in another human, so the very idea of doing so in a mechanism is situated in Idandan, Illusion.\n\nRequiring an equally sophisticated brain in the receiving human is not a qualifying condition offered anywhere in this passage.\n\nRequiring context-sensitive language as a workaround is not offered as an exception to the stated impossibility.\n\nSufficient Ipe.ro., Technology, is likewise not offered as an exception; the impossibility is stated without technological qualification."
  },
  {
    id: "cpe316_ch1_061",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "Treating Symbols and/or Strings as though they are terms of an instrument of language is a symptom of which condition?",
    options: [
      "Idandan Afihun, the illusion of Pseudo completeness",
      "Idandan Atinunda, the abstraction illusion of completeness, a related idea",
      "Idandan Ohun, the term illusion of completeness itself",
      "Tito., consistency, applied to a Pseudo language"
    ],
    correctAnswer: 0,
    explanation: "Treating Symbols and/or Strings as though they are terms of an instrument of language is a symptom of Idandan Afihun, Illusion of Pseudo completeness, since Symbols and Strings are created and manipulated using a Pseudo language of symbols instead.\n\nIdandan Atinunda is instead the symptom attached to the Mind Theory's critique, a different context.\n\nIdandan Ohun is instead the symptom attached to the Cause-Effect Theory's critique.\n\nTito., consistency, is a criterion for informed definitions, not a symptom of illusion, so it does not fit here."
  },
  {
    id: "cpe316_ch1_062",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "Per Table 1.1's distinction, what is described as the basis of an Organism's process and agency, as opposed to a Mechanism's?",
    options: [
      "An Organism's process and agency are prescribed and formulated through instrument of language, while a Mechanism's agency is created and realised through Pseudo-language",
      "An Organism's process and agency are created through Pseudo-language, while a Mechanism's agency is prescribed through instrument of language in every case",
      "Both an Organism's and a Mechanism's agency are equally prescribed through the same instrument of language",
      "Neither an Organism nor a Mechanism has any agency that can be prescribed or formulated at all"
    ],
    correctAnswer: 0,
    explanation: "Table 1.1 states that an Organism's process and agency are prescribed and formulated through instrument of language, while a Mechanism's agency is instead created and realised through Pseudo-language.\n\nReversing which uses language versus Pseudo-language inverts the table's actual distinction.\n\nClaiming both are equally prescribed through the same instrument contradicts the table's explicit contrast between the two.\n\nClaiming neither has any agency at all contradicts the table's discussion of both Organism and Mechanism agency."
  },
  {
    id: "cpe316_ch1_063",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "Per Table 1.1, how are the sensors and actuators for a Mechanism's input and output realised, compared to an Organism's?",
    options: [
      "Material devices realise a Mechanism's sensors and actuators, while sensory and articulatory organs are inherent in an Organism's material manifestation",
      "Both a Mechanism and an Organism use identical material devices for sensors and actuators",
      "A Mechanism uses sensory organs, while an Organism uses material devices",
      "Neither a Mechanism nor an Organism requires any sensor or actuator to function"
    ],
    correctAnswer: 0,
    explanation: "Table 1.1 states that material devices are used to realise the sensors and actuators for a Mechanism's input and output, while sensory and articulatory organs are inherent in an Organism's material manifestation.\n\nClaiming both use identical material devices contradicts the table's distinction between material devices and inherent organs.\n\nReversing which uses sensory organs versus material devices inverts the table's actual pairing.\n\nClaiming neither requires a sensor or actuator contradicts the table's explicit discussion of both."
  },
  {
    id: "cpe316_ch1_064",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "Per Table 1.1, what is said about an Organism's offspring compared to a Mechanism's?",
    options: [
      "Abinibi, Offspring-rebirth, is inherent in an Organism's beingness through Ibi (Birth) and Iku (Death), while offspring is outside the ambit of a Mechanism's beingness and is instead effected by a biological agency",
      "Offspring is outside the ambit of an Organism's beingness, while Abinibi is inherent in a Mechanism's beingness",
      "Both an Organism and a Mechanism produce offspring through an identical process of Birth and Death",
      "Neither an Organism nor a Mechanism can be said to have any concept of offspring at all"
    ],
    correctAnswer: 0,
    explanation: "Table 1.1 states that Abinibi, Offspring-rebirth, is inherent in an Organism's beingness, manifesting through Ibi, Birth, and Iku, Death, while offspring is outside the ambit of a Mechanism's beingness, since its manifestation and cessation are instead effected by a biological agency.\n\nReversing which has Abinibi inherent inverts the table's actual pairing.\n\nClaiming both produce offspring through an identical process contradicts the table's contrast between inherent rebirth and externally effected manifestation.\n\nClaiming neither has any concept of offspring contradicts the table's explicit discussion of both rows."
  },
  {
    id: "cpe316_ch1_065",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "Which of the following is true about the two Yoruba terms Ago. and Agunla, ascribed via an instrument of regular language?",
    options: [
      "Ago., Stupidity, is ascribed on the grounds of NOT knowing what one is expected to know",
      "Agunla, Ignorant, is ascribed on the grounds of knowing and deciding to ignore what one is expected to act on",
      "All of these",
      "None of these"
    ],
    correctAnswer: 2,
    explanation: "Ago., Stupidity, ascribed to an individual is on the grounds of NOT knowing what he/she is expected to know, matching the first claim.\n\nAgunla, Ignorance, ascribed to an individual is on the grounds of knowing and deciding to ignore what he/she is expected to take action on, matching the second claim.\n\nSince both claims genuinely describe their respective terms correctly, the correct verdict is that all of these are correct.\n\nSince both claims are genuinely correct, it is not the case that neither of them is."
  },
  {
    id: "cpe316_ch1_066",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "Per Table 1.1, what culminates in a Mechanism's damage, depreciation, and dysfunction, as opposed to an Organism's Atunrabi (Self-rebirth)?",
    options: [
      "Wear and Tear culminates in a Mechanism's damage, while an Organism's Atunrabi is effected through Hu (Growth) and Ra (Decay)",
      "Atunrabi culminates in a Mechanism's damage, while Wear and Tear is inherent in an Organism's self-rebirth process overall",
      "Both a Mechanism and an Organism experience Atunrabi identically",
      "Neither Wear and Tear nor Atunrabi applies to either a Mechanism or an Organism"
    ],
    correctAnswer: 0,
    explanation: "Table 1.1 states that Wear and Tear culminates in a Mechanism's damage, depreciation, deterioration, and dysfunction, since its agency is crafted and refined by a biological agency, while an Organism's Atunrabi, Self-rebirth, is instead effected through Hu, Growth, and Ra, Decay.\n\nReversing which experiences Wear and Tear versus Atunrabi inverts the table's actual pairing.\n\nClaiming both experience Atunrabi identically contradicts the table's contrast between the two concepts.\n\nClaiming neither concept applies to either contradicts the table's explicit discussion of both rows."
  },
  {
    id: "cpe316_ch1_067",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "Per Table 1.1, is Breath required for the sustenance of a Mechanism's physical form?",
    options: [
      "No, Breath is neither required nor inherent in the sustenance of a Mechanism's material manifestation, unlike an Organism whose beingness is sustained by Inhale and Exhale",
      "Yes, every Mechanism requires Breath in the same way an Organism does",
      "Yes, but only Mechanisms built after the invention of Integrated circuit electronics require Breath",
      "No, and Breath is also not required for an Organism's material manifestation"
    ],
    correctAnswer: 0,
    explanation: "Table 1.1 states that Breath is neither required nor inherent in the sustenance of a Mechanism's material manifestation, while Breath, Inhale and Exhale, sustains the material manifestation of an Organism's biological beingness.\n\nClaiming every Mechanism requires Breath the same way an Organism does contradicts the table's explicit denial for Mechanisms.\n\nRestricting the requirement to Mechanisms built after a particular technology is not a qualification made anywhere in the table.\n\nClaiming Breath is not required for an Organism either contradicts the table's statement that Breath sustains biological beingness."
  },
  {
    id: "cpe316_ch1_068",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "Per Table 1.1, what capacity is inherent in an Organism's beingness but absent from a Mechanism's, concerning Idamo. and Abeji?",
    options: [
      "The capacity to ascribe Idamo. (Identity) and Abeji (Binary opposite) to an instance, from which the ability to ascribe Emi (I, Me, or Self) is grounded",
      "The capacity to store more data than any Mechanism could ever hold",
      "The capacity to run computations faster than any Mechanism",
      "The capacity to manufacture new Mechanisms without external assistance"
    ],
    correctAnswer: 0,
    explanation: "Table 1.1 states that the capacity to ascribe Idamo., Identity, and Abeji, Binary opposite, to an instance is inherent in an Organism's beingness, and that the ability to ascribe Emi, I or Me or Self, is grounded in this identity and binary opposite, while a Mechanism's beingness is identity and binary-opposite neutral and can ascribe neither.\n\nStoring more data than any Mechanism is not the capacity discussed in this row of the table.\n\nRunning computations faster than any Mechanism is not the capacity discussed in this row.\n\nManufacturing new Mechanisms is not the capacity discussed in this row; the row concerns identity and binary opposite specifically."
  },
  {
    id: "cpe316_ch1_069",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "Based on Table 1.1, which two features are said to distinguish Isemi (Organism) from Isero. (Mechanism)?",
    options: [
      "Faculty of language and Sensory organs",
      "Memory capacity and Processing speed",
      "Colour and Physical size",
      "Cost of manufacture and Country of origin"
    ],
    correctAnswer: 0,
    explanation: "Based on Items 1 and 2 in Table 1.1, Faculty of language and Sensory organs distinguish Isemi, Organism, from Isero., Mechanism, so an agency lacking both is not an organism.\n\nMemory capacity and Processing speed are not the two distinguishing features cited from Table 1.1's items.\n\nColour and Physical size are not raised anywhere as distinguishing features in this material.\n\nCost of manufacture and Country of origin are likewise not raised as distinguishing features here."
  },
  {
    id: "cpe316_ch1_070",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "On what grounds is Ago. (Stupidity) ascribed to an individual, using an instrument of regular language?",
    options: [
      "On the grounds of NOT knowing what he/she is expected to know",
      "On the grounds of knowing and deciding to ignore what he/she is expected to act on",
      "On the grounds of possessing too much accumulated memory",
      "On the grounds of performing a task more slowly than a rival agency"
    ],
    correctAnswer: 0,
    explanation: "Ago., Stupidity, ascribed to an individual is on the grounds of NOT knowing what he/she is expected to know.\n\nKnowing and deciding to ignore what one is expected to act on is instead the ground for ascribing Agunla, Ignorance, a distinct term.\n\nPossessing too much accumulated memory is not the ground given for Ago. anywhere in this material.\n\nPerforming a task more slowly than a rival is not the ground given for Ago.; that concern belongs to a different discussion of competitive intelligence elsewhere in the course."
  },
  {
    id: "cpe316_ch1_071",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "On what grounds is Agunla (Ignorant) ascribed to an individual?",
    options: [
      "On the grounds of knowing and deciding to ignore what he/she is expected to take action on",
      "On the grounds of NOT knowing what he/she is expected to know",
      "On the grounds of possessing a Pseudo language of symbols",
      "On the grounds of having suffered damage or impairment to the brain"
    ],
    correctAnswer: 0,
    explanation: "Agunla, Ignorance, ascribed to an individual is on the grounds of knowing and deciding to ignore what he/she is expected to take action on.\n\nNOT knowing what one is expected to know is instead the ground for ascribing Ago., Stupidity, a distinct term.\n\nPossessing a Pseudo language of symbols is unrelated to the grounds for Agunla; that concerns computational mechanisms.\n\nHaving suffered brain damage is raised in the Brain Theory's discussion, unrelated to the grounds for ascribing Agunla."
  },
  {
    id: "cpe316_ch1_072",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "If a context-neutral instrument of language is used to ascribe Ogbon (Intelligent) and Aigbon (Unintelligent) to a performance, how are the two treated?",
    options: [
      "As mutually exclusive and contradictory, so an agency is either Intelligent or Unintelligent, and never both",
      "As mutually inclusive and complementary, so an agency is Intelligent on the grounds of the content of its Unintelligent",
      "As entirely unrelated, binary-opposite neutral instances",
      "As identical states that cannot ever be told apart"
    ],
    correctAnswer: 0,
    explanation: "If context-neutral language is used, an agency is either Intelligent or Unintelligent, and never both, so the two are mutually exclusive and contradictory.\n\nTreating them as mutually inclusive and complementary is instead how context-sensitive language treats the pair, a distinct instrument.\n\nTreating them as entirely unrelated describes how regular language treats Action and Reaction elsewhere, not this specific context-neutral treatment of Intelligent/Unintelligent.\n\nTreating them as identical and indistinguishable is not the treatment described for either language instrument here."
  },
  {
    id: "cpe316_ch1_073",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "If a context-sensitive instrument of language is used to ascribe Ogbon (Intelligent) and Aigbon (Unintelligent) to a performance, how are the two treated?",
    options: [
      "As mutually inclusive and complementary, so an agency is Intelligent on the grounds of the content of its Unintelligent",
      "As mutually exclusive and contradictory, so an agency is either Intelligent or Unintelligent, and never both at the same time",
      "As unrelated instances that a regular language treats as binary-opposite neutral",
      "As instances that can only be ascribed to a Mechanism, never to an Organism"
    ],
    correctAnswer: 0,
    explanation: "If context-sensitive language is used, an agency is Intelligent on the grounds of the content of its Unintelligent, so the Intelligent and Unintelligent ascribed to a performance are mutually inclusive and complementary.\n\nTreating them as mutually exclusive and contradictory is instead how context-neutral language treats the pair, a distinct instrument.\n\nDescribing them as unrelated and binary-opposite neutral describes regular language's treatment of a different pair, Action and Reaction, elsewhere.\n\nRestricting ascription to Mechanisms contradicts the entire framework, which reserves Ogbon and Aigbon for biological agency alone."
  },
  {
    id: "cpe316_ch1_074",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "What did Alan Turing propose as a way of reducing the question 'Can machine think?'",
    options: [
      "An imitation game",
      "A formal mathematical proof of consciousness",
      "A brain-scanning procedure to detect thought directly",
      "A survey of philosophers on the nature of thinking"
    ],
    correctAnswer: 0,
    explanation: "Alan Turing addressed the question of whether a machine can think by considering it too meaningless to deserve discussion, and instead proceeded to reduce the question to an imitation game.\n\nA formal mathematical proof of consciousness is not what Turing proposed as the reduction.\n\nA brain-scanning procedure is not raised anywhere in the discussion of Turing's approach.\n\nA survey of philosophers is not the reduction Turing is credited with proposing here."
  },
  {
    id: "cpe316_ch1_075",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "Which three agencies are involved in the configuration of the Turing Test as presented in Table 1.2?",
    options: [
      "A Judge, a Subject, and an Impostor",
      "A Teacher, a Student, and an Examiner in a classroom setting",
      "A Human, a Machine, and a Referee overseeing it",
      "A Speaker, a Listener, and a Translator"
    ],
    correctAnswer: 0,
    explanation: "Table 1.2 presents three agencies: a Judge (AgJ), a Subject (AgS), and an Impostor (AgI), located in different rooms and communicating only through a teletype writer or teleprinter.\n\nTeacher, Student, and Examiner is not the terminology used for the three agencies in Table 1.2.\n\nHuman, Machine, and Referee is a looser paraphrase but does not match the specific labelled roles of Judge, Subject, and Impostor.\n\nSpeaker, Listener, and Translator is not the terminology used for the three agencies here."
  },
  {
    id: "cpe316_ch1_076",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "Which of the following AI definitions is correctly matched to its attributed source?",
    options: [
      "McCarthy (1955): 'the science and engineering of making intelligent machines'",
      "Blackburn (2005): 'the computational part of the ability to achieve goals in the world'",
      "All of these",
      "None of these"
    ],
    correctAnswer: 0,
    explanation: "McCarthy's 1955 definition is correctly stated as the science and engineering of making intelligent machines.\n\nThe computational part of the ability to achieve goals in the world is instead McCarthy's own 1997 definition, not a Blackburn definition, so this pairing misattributes the source.\n\nSince only the McCarthy 1955 pairing is correctly matched, both pairings together cannot be correct.\n\nSince the McCarthy 1955 pairing is genuinely correct, it is not the case that neither pairing is correct."
  },
  {
    id: "cpe316_ch1_077",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "How do the three agencies in the Turing Test configuration communicate with each other?",
    options: [
      "Only through a teletype writer or teleprinter",
      "Only through direct, unmediated face-to-face conversation",
      "Only through a live video call with sound",
      "Only through handwritten letters exchanged once per day"
    ],
    correctAnswer: 0,
    explanation: "The agencies are located in different rooms and can only communicate through teletype writer or teleprinter, which normalises the communication so that character features that might influence the Judge's decision are removed.\n\nDirect face-to-face conversation would reintroduce the character features the test is specifically designed to remove.\n\nA live video call with sound would likewise reintroduce features the teletype configuration is meant to strip away.\n\nHandwritten letters exchanged once per day is not the communication medium described for this configuration."
  },
  {
    id: "cpe316_ch1_078",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "Under which of the Judge's possible decisions does the Impostor PASS the imitation game?",
    options: [
      "When the Judge confuses the Impostor for the Subject, or is unable to distinguish them",
      "When the Judge correctly identifies and distinguishes the Subject from the Impostor without any hesitation at all",
      "When the Judge refuses to interrogate either the Subject or the Impostor",
      "When the game is terminated before any question-answering session begins"
    ],
    correctAnswer: 0,
    explanation: "If the Judge confuses the Impostor for the Subject or vice versa, or is unable to distinguish the Subject from the Impostor, then the Impostor has PASSED the imitation game.\n\nCorrectly identifying and distinguishing the Subject from the Impostor is instead the decision under which the Impostor FAILS.\n\nRefusing to interrogate either agency is not one of the three listed possible decisions of the Judge.\n\nTerminating the game before any question-answering session is not one of the listed decisions determining pass or fail."
  },
  {
    id: "cpe316_ch1_079",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "In extending the Turing imitation game to Artificial Intelligence, which agency is replaced with a computing machine?",
    options: [
      "The Impostor",
      "The Judge alone",
      "The Subject",
      "All three agencies simultaneously"
    ],
    correctAnswer: 0,
    explanation: "In extending the Turing imitation game to Artificial Intelligence, the Impostor AgI is replaced with a Computing machine.\n\nThe Judge remains the interrogating role and is not the agency replaced with a machine in this extension.\n\nThe Subject remains the human being compared against, and is not the agency replaced.\n\nReplacing all three agencies simultaneously would eliminate the human basis for comparison that the test depends on, and is not what is described."
  },
  {
    id: "cpe316_ch1_080",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "The Turing Test is described as a weaker version of which law, attributed to Leibniz?",
    options: [
      "The law of Indiscernible identity",
      "The law of Universal Gravitation, from classical physics",
      "The law of Excluded Middle, from classical logic",
      "The law of Non-Contradiction"
    ],
    correctAnswer: 0,
    explanation: "The Turing test is a weaker version of the Leibniz's law of Indiscernible identity, which states that if there is no indiscernible significant difference between the performances of two agencies, then they are interchangeable.\n\nThe law of Universal Gravitation belongs to Newton's physics, unrelated to Leibniz's law referenced here.\n\nThe law of Excluded Middle is a principle of classical logic not named in this passage.\n\nThe law of Non-Contradiction is likewise a logical principle not the one attributed to Leibniz here."
  },
  {
    id: "cpe316_ch1_081",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "What is the implication of the Turing test of Intelligence, given a set of input strings and comparable output strings?",
    options: [
      "If a Human and a Machine generate indistinguishable output strings from the same input, the machine is at least as intelligent as the human",
      "If a Human and a Machine generate different output strings from the same input, the machine is more intelligent than the human in every case",
      "A Machine is always considered less intelligent than a Human regardless of its output strings",
      "Output strings are irrelevant to assessing a Machine's intelligence under the Turing test"
    ],
    correctAnswer: 0,
    explanation: "The implication of the Turing test is that given a set of input strings, if a Human and a Machine generate output strings that are indistinguishable, then the machine is, at least, as intelligent as the human.\n\nGenerating different output strings from the same input would fail the indistinguishability requirement, not demonstrate greater machine intelligence.\n\nAlways considering a Machine less intelligent regardless of output contradicts the test's entire premise of comparing output strings.\n\nOutput strings being irrelevant contradicts the central role output strings play in the test's implication."
  },
  {
    id: "cpe316_ch1_082",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "Which chatbot program, available on the web, is cited as an example of a system developed to pass a dialogue-based version of the Turing test?",
    options: [
      "ELIZA",
      "Watson, the IBM system",
      "Deep Blue",
      "AlphaGo"
    ],
    correctAnswer: 0,
    explanation: "The program ELIZA, available on the web, is cited as an example of a system developed to achieve performances where a human cannot determine whether they have been communicating with another human over a communication channel such as the Internet.\n\nWatson is not the program cited in this passage for the dialogue-based Turing test example.\n\nDeep Blue is not cited here; it is associated with chess-playing rather than this dialogue example.\n\nAlphaGo is not cited here either; it is associated with the game of Go, not this passage's dialogue example."
  },
  {
    id: "cpe316_ch1_083",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "Within Arokun, on what grounds is the idea of using a mechanism to imitate an organism said to be falsified?",
    options: [
      "On the grounds of Aipe, incompleteness, since the capacity to imitate does not confer originality on the imitator",
      "On the grounds that mechanisms are always slower than organisms at every task",
      "On the grounds that no mechanism has ever passed the Turing test in any form whatsoever to this day",
      "On the grounds that imitation requires a license that has never been granted"
    ],
    correctAnswer: 0,
    explanation: "The idea of using a mechanism to imitate an organism is falsified on the grounds of Aipe, incompleteness, since the capacity to imitate does not confer originality on the imitator, and biological beingness can neither be outsourced nor seconded to another biological agency.\n\nRelative speed of mechanisms versus organisms is not the grounds for this falsification.\n\nWhether any mechanism has passed the Turing test is a separate empirical question, not the stated grounds for the falsification here.\n\nA licensing requirement is not raised anywhere in this discussion."
  },
  {
    id: "cpe316_ch1_084",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "Within Arokun, once something is falsified on the grounds of Aipe (incompleteness), how is that falsification described?",
    options: [
      "Completely and irrevocably (Abala) falsified",
      "Only partially falsified, pending further evidence",
      "Falsified only within a context-neutral instrument of language",
      "Reversible, once sufficient technology becomes available"
    ],
    correctAnswer: 0,
    explanation: "Within Arokun, anything falsified on the grounds of Aipe, incompleteness, is completely and Abala, irrevocable, falsified.\n\nDescribing the falsification as only partial and pending further evidence contradicts the stated completeness and irrevocability.\n\nRestricting the falsification to context-neutral language is not a qualification made in this statement.\n\nDescribing the falsification as reversible with future technology directly contradicts its stated irrevocability."
  },
  {
    id: "cpe316_ch1_085",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "Who proposed a counter-experiment to the Turing test, in response to challenges about the fundamental principles of AI?",
    options: [
      "John Searle",
      "Alan Turing himself",
      "John McCarthy, the founder",
      "Gottfried Leibniz"
    ],
    correctAnswer: 0,
    explanation: "The second school of thought questions the fundamental principles upon which AI rests, and John Searle proposed a counter-experiment to the Alan Turing test for Intelligence in response.\n\nAlan Turing himself is the proposer of the original test being countered, not the counter-experiment.\n\nJohn McCarthy is associated with founding the AI workshop and offering definitions, not this counter-experiment.\n\nGottfried Leibniz is cited for the law of Indiscernible identity, unrelated to this counter-experiment."
  },
  {
    id: "cpe316_ch1_086",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "What two things are given to the human subject AgIN locked in the room, in the Chinese Room Problem?",
    options: [
      "Books B1 and B2 for translating text between English and Chinese, plus a procedure and cross-reference rules",
      "A dictionary of English synonyms and a calculator",
      "A native Chinese-speaking companion and a translation device",
      "A single book containing every possible Chinese sentence pre-written"
    ],
    correctAnswer: 0,
    explanation: "In the Chinese Room Problem, the human subject AgIN, competent in English, is locked in a room with books B1 and B2 for translating text from English to Chinese and vice versa, plus access to a procedure and cross-reference rules for constructing Chinese text.\n\nAn English synonym dictionary and a calculator are not the tools given to AgIN in this scenario.\n\nA native Chinese-speaking companion and a translation device are not part of the described setup, which relies on books and rules rather than another person or device.\n\nA single book with every possible sentence pre-written is not the setup; the scenario instead involves translation books plus a procedure for construction."
  },
  {
    id: "cpe316_ch1_087",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "Which of the following is true of the relationship between the Turing Test and the Chinese Room Problem?",
    options: [
      "Both are grounded in the Pattern Theory of Intelligence",
      "The Chinese Room Problem was proposed as support for the validity of the Turing Test",
      "All of these",
      "None of these"
    ],
    correctAnswer: 3,
    explanation: "The Turing Test and its Chinese Room counter-argument are instead both grounded in the Language Theory of Intelligence, not the Pattern Theory, so this claim is contradicted.\n\nThe Chinese Room Problem was instead proposed as one of the portent arguments used AGAINST the validity of the Turing Test, not in support of it, so this claim is also contradicted.\n\nSince neither claim is supported, both claims together cannot be correct.\n\nSince neither claim is genuinely supported, the correct verdict is that none of these are correct."
  },
  {
    id: "cpe316_ch1_088",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "What question does the Chinese Room Problem ultimately pose about AgIN's responses?",
    options: [
      "If AgIN can respond correctly in Chinese text to English questions, can AgIN be said to be competent in the Chinese language?",
      "If AgIN can respond correctly in English, can AgIN be said to be competent in mathematics?",
      "If AgIN never leaves the room, can AgIN be said to have died inside it?",
      "If AgIN destroys the books B1 and B2, can the room still function as a translator?"
    ],
    correctAnswer: 0,
    explanation: "The Chinese Room Problem asks: if the human AgIN is interrogated in English and is able to respond with Chinese language text, can we then say that AgIN is competent in the Chinese language?\n\nCompetence in mathematics is not the question posed by this scenario, which concerns language competence specifically.\n\nWhether AgIN has died in the room is not a question this thought experiment raises.\n\nWhether the room can still function if the books are destroyed is not the question posed; the scenario assumes the books and rules remain available."
  },
  {
    id: "cpe316_ch1_089",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "In the Chinese Room Problem, what does genuine competence in a language include, beyond arranging letters or text by rule?",
    options: [
      "Familiarity with vocabulary, grammar, syntax, and semantics, and the ability to use them within the language's world-view",
      "Only the ability to translate any sentence within one second",
      "Only the memorisation of every dictionary entry in the language",
      "Only the physical ability to write the language's characters by hand"
    ],
    correctAnswer: 0,
    explanation: "The competence in a language includes familiarity with the vocabulary, grammar, syntax, and semantics, as well as the knowledge and ability to use them within the language's world-view, which makes creative and spontaneous articulation of infinite sentences possible.\n\nTranslating within one second is a speed criterion never raised in this discussion of competence.\n\nMemorising every dictionary entry is not equated with competence; the passage emphasises use within a world-view, not rote memorisation.\n\nThe physical ability to write characters by hand is not the competence discussed; the scenario concerns text-based response construction, not handwriting."
  },
  {
    id: "cpe316_ch1_090",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "In the discussion of the Chinese Room Problem, how is the subject's response described, compared to genuine language competence as a happening?",
    options: [
      "The subject's response is predetermined and pre-planned, whereas competence in language use is a happening with neither Previous nor Next",
      "The subject's response is a spontaneous happening, whereas genuine competence is predetermined and pre-planned",
      "Both the subject's response and genuine competence are equally predetermined and pre-planned",
      "Neither the subject's response nor genuine competence can ever be described in terms of Previous or Next under any account at all"
    ],
    correctAnswer: 0,
    explanation: "In the Chinese Room Problem, the subject's response is predetermined and pre-planned, since Previous and Next are inherent in a pre-planned process, whereas the competence in the use of language is a happening, and there is neither Previous nor Next in the emergence of a happening.\n\nReversing which is predetermined versus a happening inverts the actual contrast drawn in this passage.\n\nClaiming both are equally predetermined contradicts the explicit contrast between a pre-planned process and a happening.\n\nClaiming neither can be described via Previous or Next contradicts the statement that Previous and Next are inherent specifically in the pre-planned response."
  },
  {
    id: "cpe316_ch1_091",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "What does John Searle's argument, via the Chinese Room Problem, ultimately posit about non-biological agencies?",
    options: [
      "That neither Intelligence nor Consciousness can be ascribed to a material agency",
      "That both Intelligence and Consciousness can always be ascribed to a sufficiently advanced material agency",
      "That Intelligence can be ascribed to a material agency, but Consciousness never can",
      "That Consciousness can be ascribed to a material agency, but Intelligence never can"
    ],
    correctAnswer: 0,
    explanation: "The John Searle's argument posits that neither Intelligence nor Consciousness can be ascribed to a material agency.\n\nClaiming both can always be ascribed to a sufficiently advanced material agency directly contradicts Searle's stated conclusion.\n\nSplitting the conclusion so that only Intelligence is denied misrepresents the argument, which denies both together.\n\nSplitting the conclusion the other way, denying only Consciousness, likewise misrepresents the argument, which denies both."
  },
  {
    id: "cpe316_ch1_092",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "Both the Turing Test and the Chinese Room counter-argument are grounded in which theory of intelligence?",
    options: [
      "The Language Theory of Intelligence",
      "The Pattern Theory of Intelligence more generally",
      "The Cause-Effect Theory of Intelligence itself",
      "The Problem-Solving Theory of Intelligence"
    ],
    correctAnswer: 0,
    explanation: "The Turing Test of intelligence and its Chinese Room counter-argument are grounded in the Language Theory of Intelligence, which assumes intelligence is situated in human language expression.\n\nThe Pattern Theory instead concerns the creation and recognition of patterns, unrelated to the grounding of these two arguments.\n\nThe Cause-Effect Theory instead concerns accounts of action and reaction, unrelated to this grounding.\n\nThe Problem-Solving Theory instead concerns algorithmic and deductive processes, unrelated to this grounding."
  },
  {
    id: "cpe316_ch1_093",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "What limitation is raised against expressions communicated through 'Written text' or a 'Proxy medium' such as a teletype-writer?",
    options: [
      "Such expressions are NOT a total account of its human agency's language performance",
      "Such expressions are always more informative than direct spoken conversation in every setting",
      "Such expressions cannot be produced by a human agency at all",
      "Such expressions eliminate the possibility of any illusion of completeness"
    ],
    correctAnswer: 0,
    explanation: "Expression communicated through Written text and Proxy medium, such as a teletype-writer, is NOT a total account of its human agency's language performance, since authentic expression is that articulated directly by its human agency.\n\nClaiming such expressions are always more informative than direct spoken conversation contradicts the point that they are a partial, not total, account.\n\nClaiming such expressions cannot be produced by a human agency at all contradicts the fact that humans do produce them, just not as a total account.\n\nClaiming they eliminate illusion of completeness contradicts the broader discussion, which treats pseudo-language and proxy mediums as sources of such illusions."
  },
  {
    id: "cpe316_ch1_094",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "In discussions of the limitations of the Turing Test, what is described as 'a mark of Ogbon (Intelligence) in some context'?",
    options: [
      "Didake, being quiet",
      "Speaking as rapidly as possible",
      "Producing the longest possible written response",
      "Repeating a memorised answer verbatim"
    ],
    correctAnswer: 0,
    explanation: "The expression of Ogbon, Intelligence, does NOT conform to a prescribed or standard set of criteria, and indeed, Didake, being quite (quiet), is a mark of Ogbon, Intelligence, in some context.\n\nSpeaking as rapidly as possible is not the mark of intelligence cited in this passage.\n\nProducing the longest possible written response is not cited as a mark of intelligence here.\n\nRepeating a memorised answer verbatim is not cited as a mark of intelligence, and would run counter to the emphasis on creativity elsewhere in the course."
  },
  {
    id: "cpe316_ch1_095",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "Why is Ogbon (Intelligence) described as inexpressible through an instrument of language, per the discussion of Imoye?",
    options: [
      "Because Imoye, the Understanding on which Ogbon is grounded, is outside the ambit of instruments of language",
      "Because no instrument of language has ever been invented for any purpose",
      "Because Ogbon can only be expressed through a Pseudo language of symbols instead",
      "Because Imoye is a synonym for a Mechanism's memory registers"
    ],
    correctAnswer: 0,
    explanation: "Imoye, the Understanding, on which Ogbon, Intelligence, is grounded, is outside the ambit of instruments of language, so Ogbon is, therefore, inexpressible through an instrument of language.\n\nClaiming no instrument of language has ever been invented contradicts the extensive discussion of multiple language instruments throughout this material.\n\nClaiming Ogbon can be expressed through a Pseudo language of symbols instead contradicts the framework's treatment of Pseudo language as belonging to mechanisms, not to expressing Ogbon.\n\nEquating Imoye with a mechanism's memory registers contradicts its definition as Understanding, a concept reserved for biological agency."
  },
  {
    id: "cpe316_ch1_096",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "Treating Ogbon (Intelligence) as the mutually inclusive and complementary binary opposite of Ago (Stupidity) is the extent to which which kind of language can render it?",
    options: [
      "Context-sensitive language",
      "Context-neutral language alone",
      "Regular language",
      "Pseudo language of symbols"
    ],
    correctAnswer: 0,
    explanation: "Treating Ogbon as the mutually inclusive and complementary binary opposite aspect of Ago, Stupidity or Un-intelligence, is the extent that context-sensitive language can render, since an instrument of context-sensitive language is necessary for the expression of intelligence.\n\nContext-neutral language is instead described as too inadequate, along with regular language, to warrant use for expressing or assessing Ogbon.\n\nRegular language is likewise described as inadequate for this purpose.\n\nA Pseudo language of symbols is reserved for computational mechanisms, not for rendering Ogbon as a binary opposite of Ago."
  },
  {
    id: "cpe316_ch1_097",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "Grounding the assessment of a biological agency's activity on its ability to imitate another agency is a symptom of which condition?",
    options: [
      "Idandan Atinunda, the abstraction illusion of completeness",
      "Idandan Afihun, the illusion of pseudo-completeness",
      "Idandan Ohun, the term illusion of completeness, a distinct critique",
      "Tito., consistency, misapplied to a context-sensitive claim entirely"
    ],
    correctAnswer: 0,
    explanation: "Grounding the assessment of the activity of a biological agency on his/her/its ability to imitate another is a symptom of Idandan Atinunda, Abstraction illusion of completeness, since every biological agency is original, complete, and unique.\n\nIdandan Afihun is instead the symptom attached to treating an organism as though it were its Pseudo language of symbols imitation, a related but distinct critique.\n\nIdandan Ohun is instead attached to the Cause-Effect Theory's critique, a different context.\n\nTito. names a criterion for context-neutral definitions, not a symptom of illusion, so it does not fit here."
  },
  {
    id: "cpe316_ch1_098",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "Treating an organism as though it were its Pseudo language of symbols imitation is a symptom of which condition?",
    options: [
      "Idandan Afiran, the illusion of Pseudo completeness",
      "Idandan Atinunda, the abstraction illusion of completeness, again distinct",
      "Idandan Ohun, the term illusion of completeness itself",
      "Iruju, the ambiguity inherent in recursive definitions"
    ],
    correctAnswer: 0,
    explanation: "The computational mechanisms used to imitate Intelligence are created and realised through Pseudo language of symbols, and treating an organism as though it were its Pseudo language of symbols imitation is a symptom of Idandan Afiran, Illusion of Pseudo completeness.\n\nIdandan Atinunda is instead the symptom attached to grounding assessment on imitation ability generally, a related but distinct critique just discussed.\n\nIdandan Ohun is instead attached to the Cause-Effect Theory's critique, a different context.\n\nIruju names the ambiguity inherent in recursive definitions, an unrelated concept from the discussion of Asofin."
  },
  {
    id: "cpe316_ch1_099",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "Which school of thought challenges the AI system development procedure by questioning the adequacy of its methods and methodology?",
    options: [
      "The school holding that reducing human intelligence into a mechanical process may be possible, but that modern tools and techniques are inappropriate for the task",
      "The school holding that developing a machine for something we cannot describe is ill-conceived",
      "The school associated with Hard-AI, aiming to surpass human intelligence",
      "The school associated with Soft-AI, aiming to support human mental activity"
    ],
    correctAnswer: 0,
    explanation: "A school of thought posits a procedural challenge to AI, holding the view that it is perhaps possible to reduce human intelligence, totally or partially, into a mechanical process, but that modern tools and techniques are inappropriate for the task.\n\nQuestioning whether developing a machine for something indescribable is ill-conceived is instead the second school's challenge, concerning fundamental principles rather than procedure.\n\nHard-AI and Soft-AI are the two schools of thought about the aim of AI, not the two schools raising challenges discussed here.\n\nThe Soft-AI school is likewise one of the aim-oriented schools, not one of the two challenge-raising schools discussed in this subsection."
  },
  {
    id: "cpe316_ch1_100",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "Which subfield of Artificial Intelligence, listed under Task 3.1, concerns systems for correcting written grammar automatically?",
    options: [
      "Automatic grammar correction system",
      "Recommender system",
      "Decision support system",
      "Computer Assisted Learning Systems, abbreviated CALS"
    ],
    correctAnswer: 0,
    explanation: "Automatic grammar correction system is listed as one of the subfields of Conventional AI under Task 3.1.\n\nRecommender system is a separate subfield listed in the same task, concerned with suggesting items rather than correcting grammar.\n\nDecision support system is another separate subfield in the list, concerned with supporting decisions rather than grammar.\n\nComputer Assisted Learning Systems, CALS, is a separate subfield in the list, concerned with learning support rather than grammar correction."
  },
  {
    id: "cpe316_ch1_101",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "Which of the following is among the ten subfields of Conventional AI listed under Task 3.1?",
    options: [
      "Robotics",
      "Photography",
      "Accounting software",
      "Weather forecasting"
    ],
    correctAnswer: 0,
    explanation: "Robotics is listed among the subfields of Conventional AI in Task 3.1, alongside Games, Decision support system, and others.\n\nPhotography is not listed among the subfields named in Task 3.1.\n\nAccounting software is not listed among the subfields named in Task 3.1.\n\nWeather forecasting is not listed among the subfields named in Task 3.1."
  },
  {
    id: "cpe316_ch1_102",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "Which pair of subfields listed under Task 3.1 both concern spoken language processing?",
    options: [
      "Speech recognition systems and Speech synthesis system",
      "Games and Robotics",
      "Recommender system and Decision support system",
      "Automate story generator and Computer Assisted Learning Systems"
    ],
    correctAnswer: 0,
    explanation: "Speech recognition systems and Speech synthesis system are both listed subfields concerned with spoken language processing.\n\nGames and Robotics are both listed subfields, but neither concerns spoken language processing specifically.\n\nRecommender system and Decision support system are both listed subfields, but neither concerns spoken language processing.\n\nAutomate story generator and Computer Assisted Learning Systems are both listed subfields, but neither concerns spoken language processing specifically."
  },
  {
    id: "cpe316_ch1_103",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "Which of the following pairs are BOTH named as Yoruba terms used exclusively to reckon the activities of organism (biological agency)?",
    options: [
      "Ogbon (Intelligent) and Ago. (Stupidity)",
      "Isero. (Mechanism) and Pseudo language of symbols",
      "Vtable and Actuator",
      "RAM and ROM"
    ],
    correctAnswer: 0,
    explanation: "Ogbon, Intelligent, and Ago., Stupidity, are both named among the four Yoruba terms, alongside Aigbon and Agunla, used to reckon the activities of organism, biological agency, alone.\n\nIsero., Mechanism, and Pseudo language of symbols both concern mechanisms rather than organisms, the opposite of what is asked.\n\nVtable and Actuator are technical computing terms not raised as Yoruba organism-only terms in this material.\n\nRAM and ROM are memory hardware terms not raised as Yoruba organism-only terms here."
  },
  {
    id: "cpe316_ch1_104",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "Which of the following are both named as one of the six popular Theories influencing the idea of Intelligence?",
    options: [
      "The Brain Theory and the Pattern Theory",
      "The Hard-AI Theory and the Soft-AI Theory of intelligence",
      "The Stochastic Theory and the Symbolic Theory",
      "The Monist Theory and the Dualist Theory"
    ],
    correctAnswer: 0,
    explanation: "The Brain Theory and the Pattern Theory are both named among the six popular Theories of Intelligence discussed, alongside Mind, Language, Cause-Effect, and Problem-Solving.\n\nHard-AI and Soft-AI are named as the two schools of thought about the aim of AI, not among the six theories of intelligence.\n\nStochastic and Symbolic are named as the two approaches propounded at the founding workshop, not among the six theories of intelligence.\n\nMonist and Dualist are named as two positions on the body-mind problem discussed within the Mind Theory, not as separate theories of intelligence themselves."
  },
  {
    id: "cpe316_ch1_105",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "Neither the Monist nor the Dualist position has culminated in a consistent explanation of the body-mind problem, and the Mind Theory has yet to have a foothold in conventional Artificial Intelligence.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "Both claims are confirmed directly: neither the Monist nor Dualist theory of the body-mind problem has culminated in a consistent explanation, and several references to the theory of mind in conventional AI are yet to culminate in a practically demonstrated system, so the Mind theory is yet to have a foothold in conventional Artificial Intelligence."
  },
  {
    id: "cpe316_ch1_106",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "A digital computation mechanism processes binary strings directly, and there is a literal '1' or '0' present in the stream of electrical or electronic signals it manipulates.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "Both claims are false: a digital computation mechanism does NOT process binary string, and there is neither a literal '1' nor '0' in the stream of electrical and/or electronic signals; '1' and '0' are instead ascribed to electrical or electronic signal ranges through a prescription or standard."
  },
  {
    id: "cpe316_ch1_107",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "The Turing Test configuration locates the Judge, Subject, and Impostor in different rooms, and normalises their communication through a teletype writer or teleprinter.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "This is true: the three agencies are located in different rooms and communicate only through a teletype writer or teleprinter, which normalises the communication by removing character features, such as body language, that could influence the Judge's decision."
  },
  {
    id: "cpe316_ch1_108",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "John Searle's Chinese Room Problem was proposed as support for the validity of the Turing Test, reinforcing the Language Theory of Intelligence's assumptions.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "This is false: the Chinese-Room Problem has been one of the portent arguments used AGAINST the validity of the Turing test, not in support of it, since it argues that neither Intelligence nor Consciousness can be ascribed to a material agency."
  },
  {
    id: "cpe316_ch1_109",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "A name (Oruko.) and a number (Onka) are both explicitly stated to be valid forms of Asofin (Definition), since they each ascribe a distinct identity to an instance.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "This is false: a name ascribes nominal identity and a number ascribes numerical identity, but it is explicitly stated that therefore neither a name nor a number is a definition at all."
  },
  {
    id: "cpe316_ch1_110",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "Which pair of the six criteria for an informed definition in Arokun both concern the use of an inappropriate or mismatched TERM in the narrative of the definition?",
    options: [
      "It is NOT 'begging the question' and it is NOT 'compounding'",
      "It is 'Precise' and it is 'Consistent'",
      "It is NOT 'Cyclic' and it is NOT 'absurd' either way",
      "It is NOT 'Cyclic' and it is 'Consistent'"
    ],
    correctAnswer: 0,
    explanation: "Begging the question involves defining a similar or different term instead of the one being defined, and compounding involves using a more complex term than the one being defined; both concern the choice of a mismatched term in the narrative.\n\nPrecise and Consistent instead concern ascribing identity to unique instances and avoiding self-contradiction respectively, not the choice of a mismatched term.\n\nCyclic concerns the defined term reappearing in its own narrative, and absurd concerns a lack of logic, polarity, or metaphor grounding, neither of which is about a mismatched substitute term specifically.\n\nCyclic and Consistent pair a term-reappearance issue with a self-contradiction issue, not two term-substitution issues."
  },
  {
    id: "cpe316_ch1_111",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "Which of the following are BOTH named as one of the questions (i) through (iv) that conventional AI discussion often treats superficially or ignores?",
    options: [
      "The substance of Intelligence, and the criteria to which its expression conforms",
      "The cost of building an intelligent machine, and its expected commercial release date",
      "The programming language used, and the operating system it runs on",
      "The number of engineers on the project, and their combined salary"
    ],
    correctAnswer: 0,
    explanation: "Questions (i) through (iv) include the substance of, or competence for, Intelligence, and the criteria to which its expressed form conforms and how it can be assessed, both of which are said to be treated superficially or ignored in conventional discussion.\n\nCost and release date are not among the four listed questions about intelligence's substance, expression, criteria, and language.\n\nProgramming language and operating system are not among the four listed questions either.\n\nNumber of engineers and salary are not among the four listed questions; the four questions concern the nature of intelligence itself, not project management details."
  },
  {
    id: "cpe316_ch1_112",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "Which TWO of the following are named among the philosophers whose contributions are said to influence admissible explanations in modern Artificial Intelligence?",
    options: [
      "Aristotle and Bertrand Russell",
      "Confucius and Laozi",
      "Immanuel Kant and Nelson Mandela",
      "Plato and Charles Darwin"
    ],
    correctAnswer: 0,
    explanation: "Aristotle and Bertrand Russell are both named among the philosophical contributors listed, alongside Epicurus, Socrates, Plato, Newton, Descartes, Leibniz, Locke, Kant, Whitehead, McCarthy, Minsky, Boole, and Turing.\n\nConfucius and Laozi are not named among the contributors listed in this passage.\n\nNelson Mandela is not named among the contributors listed; only Immanuel Kant of this pair appears in the list.\n\nCharles Darwin is not named among the contributors listed; only Plato of this pair appears in the list."
  },
  {
    id: "cpe316_ch1_113",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "In a 'process perspective' on the phenomenon of nature, what is the foundation of enquiry?",
    options: [
      "To seek the theory by which the output for all possible combinations of inputs can be predicted and/or determined",
      "To seek a narrative that conforms to Kikun, Coherence, above all else",
      "To seek a name and a number sufficient to define every instance",
      "To seek an instrument of context-sensitive language exclusively"
    ],
    correctAnswer: 0,
    explanation: "In a process perspective, the phenomenon of nature is treated as though it were a process with exact inputs and outputs, and the foundation of enquiry is to seek the theory by which the output for all possible combinations of inputs can be predicted and/or determined.\n\nSeeking a narrative conforming to Kikun above all else describes the Arokun approach to meaningful enquiry, a contrasting perspective, not the process perspective.\n\nSeeking a sufficient name and number contradicts the explicit statement that neither a name nor a number counts as a definition.\n\nSeeking an instrument of context-sensitive language exclusively is not the foundation described for a process perspective."
  },
  {
    id: "cpe316_ch1_114",
    course: "CPE 316",
    chapter: "Chapter 1",
    text: "Within Arokun, treating Isero. (a mechanism) as though it were Isemi (an organism) is a symptom of which condition?",
    options: [
      "Idandan Afihun, Illusion of Pseudo-completeness",
      "Tito., Consistency, misapplied to a context-neutral claim",
      "Kikun, Coherence, achieved through metaphor",
      "Asofin, a valid and complete Definition"
    ],
    correctAnswer: 0,
    explanation: "Within the Yoruba Intellectual Tradition of Arokun, treating Isero., a mechanism, as though it were Isemi, an organism, is a symptom of Idandan Afihun, Illusion of Pseudo-completeness.\n\nTito., Consistency, is a criterion for assessing context-neutral definitions, not a symptom of illusion, so it does not describe this error.\n\nKikun, Coherence, is a criterion for meaningful, context-sensitive definitions, not a symptom of this error.\n\nCalling it a valid and complete Definition directly contradicts the passage, which frames it as an illusion, not a legitimate definition."
  }
];

export default cpe316Chapter1Questions;
