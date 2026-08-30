import { QuestionV2 } from "@/lib/quiz-types";

const csc302Chapter4Questions: QuestionV2[] = [
  {
    id: "csc302_ch4_001",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "What did academic and industry leaders officially coin at the 1968 NATO Conference to describe the inability to write reliable, massive software systems?",
    options: [
      "The term \"Software Crisis,\" naming the widespread failure of existing techniques to produce reliable systems at scale",
      "The Spaghetti Dilemma",
      "The Procedural Trap",
      "Functional Decomposition"
    ],
    correctAnswer: 0,
    explanation: "The Software Crisis of the 1960s section states that leaders at the 1968 NATO Conference coined the term \"Software Crisis\" for the inability to write reliable, massive systems.\n\nThe Spaghetti Dilemma is a different label, from the following section, for how a small change in one module could ripple into unrelated failures.\n\nThe Procedural Trap names the Functional Decomposition section's problem of refactoring every procedure when shared data changes.\n\nFunctional Decomposition is the pre-OOP design approach itself, not the name given to the crisis."
  },
  {
    id: "csc302_ch4_002",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "What was identified as the backdrop that exposed the Software Crisis in the 1960s?",
    options: [
      "Rapid hardware advances gave larger memory spaces and faster CPUs while software techniques stayed primitive",
      "Companies stopped hiring enough programmers to staff large projects",
      "Governments banned the use of GOTO statements in new software after several major national infrastructure projects were publicly blamed on unstructured jumps",
      "Universities stopped teaching procedural programming techniques"
    ],
    correctAnswer: 0,
    explanation: "The Software Crisis section describes the backdrop as rapid 1960s hardware advances enabling larger memory spaces and faster CPUs, while software development techniques remained primitive, causing projects to run over-budget and behind schedule.\n\nA staffing shortage is not mentioned as the backdrop.\n\nA ban on GOTO statements is not described anywhere in the source; GOTO usage is discussed as a cause of spaghetti code, not something banned by governments.\n\nUniversities dropping procedural teaching is not mentioned in the source."
  },
  {
    id: "csc302_ch4_003",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "What was the Core Issue underlying the Software Crisis?",
    options: [
      "Scaling procedural and imperative design led to unmanageable cognitive load for programmers",
      "Hardware manufacturers could not produce CPUs fast enough to keep pace with growing software demands",
      "Programming languages lacked any support for loops or conditionals",
      "No professional standards body had yet ratified a common set of engineering practices for organizing large software systems"
    ],
    correctAnswer: 0,
    explanation: "The Software Crisis section names the Core Issue as scaling procedural and imperative design leading to unmanageable cognitive load for programmers.\n\nHardware speed is described as advancing rapidly, not as a bottleneck.\n\nLoops and conditionals existed in the languages of the era; their absence is not mentioned.\n\nOOP had not yet emerged, so its lack of standardization is not framed as the core issue; the issue is about procedural design itself."
  },
  {
    id: "csc302_ch4_004",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "Dijkstra's observation about GOTO-based control flow is best summarized as a claim about the limits of CPU cache performance.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "The Spaghetti Code section states that, as Dijkstra noted, human cognitive bandwidth is fundamentally limited, so programmers cannot reason about programs whose execution state changes arbitrarily in non-linear ways. Dijkstra's observation is about the limits of human cognition, not about CPU cache performance, which is a separate concern raised later in the Cost of Indirection section, so the statement as written is false."
  },
  {
    id: "csc302_ch4_005",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "A team modifies one small function deep inside a legacy program built with unrestricted GOTO jumps, and unrelated modules elsewhere in the codebase begin failing unpredictably. What does the source call this phenomenon?",
    options: [
      "The ripple effect described by the Spaghetti Dilemma",
      "The Procedural Trap",
      "The Paradigm Shift",
      "Design by Contract"
    ],
    correctAnswer: 0,
    explanation: "The Spaghetti Code section describes the Spaghetti Dilemma as a minor structural modification in one part of a codebase triggering unpredictable failures in completely unrelated modules, earning the name \"ripple effect.\"\n\nThe Procedural Trap is a distinct problem from the Functional Decomposition section, about needing to refactor every procedure touching a changed data structure.\n\nThe Paradigm Shift is the later move from organizing code around verbs to organizing it around nouns.\n\nDesign by Contract is Eiffel's later, unrelated mechanism for checkable preconditions and postconditions."
  },
  {
    id: "csc302_ch4_006",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "In the Functional Decomposition approach that preceded OOP, what was identified as the central flaw?",
    options: [
      "Data and procedures were treated as separate entities, with many functions operating directly on shared global or semi-global variables",
      "Every function had to be compiled into its own separate object file before linking",
      "Functions defined in one part of the program were entirely forbidden from calling any function defined in another part of the same program",
      "Procedures were only ever permitted to accept a single input parameter, no matter how many values the operation logically required at all"
    ],
    correctAnswer: 0,
    explanation: "The Limitations of Functional Decomposition section states the flaw was that data and procedures were treated as separate entities, with multiple functions operating directly on shared global or semi-global variables.\n\nA one-function-per-file compilation rule is not described in the source.\n\nFunctions calling other functions is standard behavior and not presented as forbidden.\n\nA single-parameter restriction on procedures is not mentioned anywhere in the source."
  },
  {
    id: "csc302_ch4_007",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "Under the Procedural Trap described in the Functional Decomposition section, changing an underlying data structure from a 1D array to a 2D array required which outcome?",
    options: [
      "All of these",
      "Recompiling the operating system kernel",
      "Every single procedure interacting with that data had to be manually refactored",
      "None of these"
    ],
    correctAnswer: 2,
    explanation: "The Procedural Trap states that if the representation of an underlying data structure changed, such as from a 1D array to a 2D array, every single procedure interacting with that data had to be manually refactored, so that specific option is supported.\n\nKernel recompilation is never mentioned in this context, so that option is unsupported.\n\nBecause only one of the two specific options is actually supported by the source, \"All of these\" does not apply.\n\n\"None of these\" also does not apply, since the refactoring consequence is directly stated."
  },
  {
    id: "csc302_ch4_008",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "The Paradigm Shift that led to OOP is best described as a move away from organizing code around which concept?",
    options: [
      "Actions, or verbs, like \"how to process this billing records array\"",
      "Structural components, or nouns, like \"the Customer account,\" which the Paradigm Shift section says engineers moved toward instead of away from",
      "Preconditions and postconditions attached to each procedure",
      "Access modifiers such as private and protected"
    ],
    correctAnswer: 0,
    explanation: "The Paradigm Shift section states that engineers moved away from organizing code around actions, or verbs, such as \"how to process this billing records array,\" toward organizing around structural components, or nouns, such as \"the Customer account.\"\n\nOrganizing around nouns is what engineers moved toward, not what they moved away from.\n\nPreconditions and postconditions belong to Eiffel's later Design by Contract, not to this shift.\n\nAccess modifiers are part of Encapsulation in Part II, not the subject of the Paradigm Shift description."
  },
  {
    id: "csc302_ch4_009",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "What did the Paradigm Shift section describe as the Conceptual Leap that defined the birth of Object-Oriented Programming?",
    options: [
      "Unifying data and the operations that mutate it into unified, self-contained mathematical models",
      "Replacing all compiled languages with interpreted scripting languages",
      "Standardizing every programming language around a single shared syntax so that any compiler could process any program",
      "Removing loops entirely in favor of recursive-only control flow"
    ],
    correctAnswer: 0,
    explanation: "The Paradigm Shift section names the Conceptual Leap as unifying data and the operations that mutate it into unified, self-contained mathematical models, marking the transition from procedural execution to agent-based simulation.\n\nReplacing compiled languages with interpreted ones is not discussed in this section.\n\nStandardizing all languages around one syntax is never claimed anywhere in the source.\n\nRemoving loops for recursion-only control flow is not mentioned in the source."
  },
  {
    id: "csc302_ch4_010",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "A programmer today organizes a billing system around a Customer class holding both its data and the methods that operate on that data, rather than around a set of standalone billing procedures. Which historical transition does this reflect?",
    options: [
      "The Paradigm Shift from procedural, verb-centered design toward noun-centered, object-based design",
      "The Software Crisis identified at the 1968 NATO Conference, the earlier problem that this reorganization around nouns was ultimately a response to",
      "The Procedural Trap described under Functional Decomposition",
      "The Spaghetti Dilemma caused by unrestricted GOTO jumps"
    ],
    correctAnswer: 0,
    explanation: "The Paradigm Shift section describes exactly this move, from verb-centered procedures to noun-centered structural components like a Customer account, as the transition that gave rise to OOP.\n\nThe Software Crisis is the earlier problem this shift was a response to, not the shift itself.\n\nThe Procedural Trap describes the refactoring cost of Functional Decomposition, the approach being replaced.\n\nThe Spaghetti Dilemma concerns GOTO-driven control flow failures, not the reorganization around nouns."
  },
  {
    id: "csc302_ch4_011",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "Which of the four core pillars of OOP is defined as hiding internal state and wrapping variables inside an interface of safe methods?",
    options: [
      "Encapsulation",
      "Abstraction",
      "Inheritance",
      "Polymorphism"
    ],
    correctAnswer: 0,
    explanation: "The Introduction to the Pillars section defines Encapsulation as hiding internal state and wrapping variables in an interface of safe methods.\n\nAbstraction is defined there as simplifying complex realities by modeling only relevant traits.\n\nInheritance is defined as defining hierarchical relationships to share and specialize behaviors.\n\nPolymorphism is defined as allowing different entities to resolve the same message signature dynamically."
  },
  {
    id: "csc302_ch4_012",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "In the Bank Account analogy used to illustrate Encapsulation, why does the account object expose a deposit(amount) method instead of a directly writable balance variable?",
    options: [
      "So the method can run validation checks, such as positive value bounds, before the state is mutated",
      "So the account can be inherited by a Savings class without requiring any further changes to its behavior",
      "So the balance can be resolved at compile time through method overloading applied directly to the deposit method's signature",
      "So the account object can be cloned into a new prototype instance"
    ],
    correctAnswer: 0,
    explanation: "The Encapsulation section explains that a deposit(amount) method verifies validation checks, such as positive value bounds, before mutating the state, rather than exposing the balance for direct writes.\n\nEnabling inheritance by a Savings class is not the reason given for this design in the source.\n\nCompile-time overload resolution belongs to Ad-hoc Polymorphism, an unrelated pillar.\n\nCloning into a prototype belongs to the later Self language section, not to the Bank Account analogy."
  },
  {
    id: "csc302_ch4_013",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "Which access modifier restricts access exclusively to the declaring class, with no exception for subclasses?",
    options: [
      "Public",
      "Protected",
      "Private",
      "Package-private"
    ],
    correctAnswer: 2,
    explanation: "The Information Hiding and Access Modifiers section defines Private as access restricted exclusively to the declaring class.\n\nPublic is defined there as open access to all components in the system, the opposite of a narrow restriction.\n\nProtected is defined as access restricted to the class and its child derivations, which is broader than Private since it includes subclasses.\n\nPackage-private is not a term used in this section of the source."
  },
  {
    id: "csc302_ch4_014",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "A subclass in another package is able to access a member of its parent class, but unrelated classes in the same package as the parent cannot. Which access modifier governs the parent's member?",
    options: [
      "Public",
      "Protected",
      "Private",
      "Final"
    ],
    correctAnswer: 1,
    explanation: "The Information Hiding section defines Protected as access restricted to the class and its child derivations, matching a case where a subclass can reach the member regardless of package while unrelated classes cannot.\n\nPublic grants open access to all components in the system, which would also let unrelated same-package classes in, contradicting the scenario.\n\nPrivate restricts access exclusively to the declaring class, which would block the subclass entirely.\n\nFinal is not an access modifier discussed anywhere in this section."
  },
  {
    id: "csc302_ch4_015",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "David Parnas' Criterion, dated 1972 in the Information Hiding section, advises hiding which kind of design decisions?",
    options: [
      "Decisions likely to change, so that clients depend only on stable, abstract interfaces",
      "Decisions about which programming language to compile with",
      "Decisions already agreed upon by the entire development team, since those decisions carry the lowest risk of dispute",
      "Decisions concerning the naming convention used for private fields"
    ],
    correctAnswer: 0,
    explanation: "The Information Hiding and Access Modifiers section attributes to David Parnas' 1972 Criterion the advice to hide design decisions that are likely to change, so clients depend only on stable, abstract interfaces.\n\nCompiler or language choice is not the subject of Parnas' Criterion in this source.\n\nAlready-agreed decisions are not what the criterion targets; it targets decisions likely to change.\n\nNaming conventions for private fields are not discussed as the subject of this criterion."
  },
  {
    id: "csc302_ch4_016",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "Abstraction is defined in the source as the process of doing what to a complex entity?",
    options: [
      "Extracting its critical, high-level features while ignoring irrelevant implementation details",
      "Storing all of its state directly in globally accessible variables so every caller can reach it uniformly",
      "Duplicating its logic across every subclass that needs similar behavior so each one can be modified independently",
      "Converting its methods into standalone, unrelated procedures"
    ],
    correctAnswer: 0,
    explanation: "The Abstraction section defines it as extracting the critical, high-level features of an entity while ignoring irrelevant implementation details, preventing leaky abstractions.\n\nStoring state in global variables is the flaw described under Functional Decomposition, not Abstraction.\n\nDuplicating logic across subclasses is a coupling problem associated with Inheritance, not a description of Abstraction.\n\nConverting methods into standalone procedures describes reverting to procedural design, the opposite of Abstraction's intent."
  },
  {
    id: "csc302_ch4_017",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "In the Driving a Car analogy for Abstraction, what does the driver interact with instead of the engine's thermodynamic cycle or the drivetrain's electrical signals?",
    options: [
      "A simplified interface of a steering wheel, gas pedal, and brake",
      "A diagnostic console listing every sensor reading collected by the vehicle's onboard computer",
      "A set of preconditions and postconditions written by the manufacturer",
      "A private balance field exposed through a deposit method"
    ],
    correctAnswer: 0,
    explanation: "The Abstraction section's Driving a Car analogy states the driver interacts with a simplified interface, a steering wheel, gas pedal, and brake, without needing to understand the underlying thermodynamics or electrical signals.\n\nA sensor diagnostic console is not part of this analogy.\n\nPreconditions and postconditions belong to Eiffel's later Design by Contract, unrelated to the car analogy.\n\nThe deposit method and balance field belong to the earlier Bank Account analogy for Encapsulation, not this one."
  },
  {
    id: "csc302_ch4_018",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "Which statement correctly distinguishes Abstract Classes from Interfaces?",
    options: [
      "Abstract classes can maintain member states, while interfaces historically do not maintain instance states",
      "Interfaces can maintain member states, while abstract classes historically do not maintain instance states",
      "Both abstract classes and interfaces are forbidden from defining any method bodies",
      "Both abstract classes and interfaces require unrelated classes to share a single common CAN-DO capability across the hierarchy"
    ],
    correctAnswer: 0,
    explanation: "The comparison states Abstract Classes can maintain member states, or instance variables, while Interfaces historically do not maintain instance states.\n\nReversing which one holds state contradicts the table directly.\n\nAbstract classes are described as defining partial implementations, which implies method bodies are allowed, not forbidden for both.\n\nCAN-DO capabilities describe interfaces used by unrelated classes, while abstract classes are used for IS-A relationships among closely related classes, so this does not apply to both."
  },
  {
    id: "csc302_ch4_019",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "A designer needs several unrelated classes, such as Bird, Airplane, and Drone, to each share the ability to fly, without implying they share a common identity. Which structure fits the abstraction table's guidance?",
    options: [
      "An interface, since it suits CAN-DO capabilities shared across unrelated classes",
      "An abstract class, since it suits IS-A relationships among closely related classes",
      "A private field, since it hides the flying behavior from external callers",
      "A static method, since it removes the need for any instance state"
    ],
    correctAnswer: 0,
    explanation: "The Abstract Classes vs. Interfaces section states interfaces are used when unrelated classes share behaviors, described as CAN-DO capabilities, which fits Bird, Airplane, and Drone sharing flight without a common identity.\n\nAbstract classes are recommended when classes share closely related identities, an IS-A relationship, which does not match unrelated classes like these.\n\nA private field is an Encapsulation mechanism, not a structure for sharing behavior across unrelated classes.\n\nStatic methods and instance state are not the criterion discussed in this comparison."
  },
  {
    id: "csc302_ch4_020",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "In the Taxonomical Example illustrating Inheritance, what does the Truck class add beyond the common startEngine() routine defined by Vehicle?",
    options: [
      "A specialized method such as attachTrailer()",
      "A private balance field validated through a deposit method",
      "A generic interface implemented by unrelated classes",
      "A static factory method that clones existing instances"
    ],
    correctAnswer: 0,
    explanation: "The Inheritance section's Taxonomical Example states Vehicle defines a common startEngine() routine, and Truck inherits Vehicle while extending it with specialized methods like attachTrailer().\n\nThe balance field and deposit method belong to the earlier Bank Account analogy for Encapsulation.\n\nAn interface implemented by unrelated classes describes the CAN-DO abstraction pattern, not this taxonomy example.\n\nCloning existing instances describes the later Self prototype paradigm, not this inheritance example."
  },
  {
    id: "csc302_ch4_021",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "What challenge does the Inheritance section identify as arising from tight coupling between a parent class and its children?",
    options: [
      "If a parent class behaves unexpectedly, all child subclasses inherit the flawed behavior immediately",
      "Child subclasses can never override a method defined by the parent class",
      "The parent class loses access to its own private fields once a child is created",
      "Interfaces implemented by the parent automatically become abstract classes"
    ],
    correctAnswer: 0,
    explanation: "The Inheritance section names the Challenge as tight coupling: if a parent class behaves unexpectedly, all child subclasses inherit the flawed behavior immediately.\n\nOverriding is exactly what polymorphism and inheritance are meant to support, not something forbidden.\n\nA parent losing access to its own private fields when a child is created is not described anywhere in the source.\n\nInterfaces turning into abstract classes upon implementation is not a claim made in the source."
  },
  {
    id: "csc302_ch4_022",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "Which term describes a child class reusing the actual logic and fields written in its parent class?",
    options: [
      "Subclassing, also called Implementation Inheritance",
      "Subtyping, also called Interface Inheritance",
      "Dynamic Dispatch",
      "Ad-hoc Polymorphism"
    ],
    correctAnswer: 0,
    explanation: "The Subtyping vs. Subclassing section defines Subclassing, or Implementation Inheritance, as sharing code, where a child class reuses the actual logic and fields written in its parent class.\n\nSubtyping, or Interface Inheritance, is instead about establishing type compatibility so a child can substitute for its parent.\n\nDynamic Dispatch is the runtime mechanism for choosing which overridden method implementation runs, unrelated to code reuse.\n\nAd-hoc Polymorphism refers to method overloading resolved at compile time, a separate concept."
  },
  {
    id: "csc302_ch4_023",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "The Subtyping vs. Subclassing section's Warning states that subclassing a parent class guarantees semantic subtyping.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "The Warning explicitly states that subclassing does not guarantee semantic subtyping, and that it is possible to subclass a parent while violating its expected behavioral invariants, so the statement as written is false."
  },
  {
    id: "csc302_ch4_024",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "A child class guarantees it can be substituted anywhere its parent class is expected, preserving safety invariants. Which mechanic does this describe?",
    options: [
      "Subtyping, or Interface Inheritance",
      "Subclassing, or Implementation Inheritance",
      "Ad-hoc Polymorphism",
      "Parametric Polymorphism"
    ],
    correctAnswer: 0,
    explanation: "The Subtyping vs. Subclassing section defines Subtyping, or Interface Inheritance, as establishing type compatibility so a child guarantees it can be substituted anywhere the parent is expected, preserving safety invariants.\n\nSubclassing is instead about sharing code and logic, not about substitutability guarantees.\n\nAd-hoc Polymorphism refers to overloaded methods resolved at compile time, unrelated to substitutability.\n\nParametric Polymorphism refers to writing code independent of concrete types via generics, also unrelated to this substitutability guarantee."
  },
  {
    id: "csc302_ch4_025",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "Which form of polymorphism resolves multiple methods sharing the same name but differing parameter lists at compile time?",
    options: [
      "Ad-hoc Polymorphism, also called method overloading",
      "Parametric Polymorphism, also called generics",
      "Subtype Polymorphism",
      "Dynamic Dispatch"
    ],
    correctAnswer: 0,
    explanation: "The Polymorphism section defines Ad-hoc Polymorphism as method overloading, resolving multiple methods with the same name but different signatures at compile time.\n\nParametric Polymorphism, or generics, is code written independently of concrete types, which are specified during instantiation, a different mechanism entirely.\n\nSubtype Polymorphism concerns a superclass-typed variable referencing any subclass instance at runtime, not compile-time overload resolution.\n\nDynamic Dispatch is the runtime mechanism that selects which overridden implementation runs, also distinct from compile-time overload resolution."
  },
  {
    id: "csc302_ch4_026",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "Generics in Java, or Templates in C++, are described in the source as an example of which form of polymorphism?",
    options: [
      "Parametric Polymorphism",
      "Ad-hoc Polymorphism",
      "Subtype Polymorphism",
      "Static Dispatch"
    ],
    correctAnswer: 0,
    explanation: "The Polymorphism section describes Parametric Polymorphism as Generics in Java, or Templates in C++, where code is written independently of concrete types that are specified during instantiation.\n\nAd-hoc Polymorphism instead refers to method overloading resolved by signature at compile time.\n\nSubtype Polymorphism refers to a superclass reference resolving to any subclass instance at runtime, not to type-parameterized code.\n\nStatic Dispatch is not a term the source applies to Generics or Templates."
  },
  {
    id: "csc302_ch4_027",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "In the Dynamic Execution example \"Shape s = new Circle(); s.draw();\", what does the compiler verify at compile time?",
    options: [
      "Only that Shape declares a draw() method",
      "That s specifically points to a Circle instance",
      "That the Circle class overrides every method declared by Shape",
      "That no other subclass of Shape exists anywhere in the program"
    ],
    correctAnswer: 0,
    explanation: "The Subtype Polymorphism and Dynamic Dispatch section states that at compile time, the compiler only verifies that Shape has a draw() method; at runtime, the execution engine determines that s points to a Circle and runs the Circle drawing routine.\n\nConfirming that s specifically points to a Circle is a runtime determination, not a compile-time one.\n\nRequiring Circle to override every Shape method is not stated as a compile-time check in this example.\n\nChecking that no other subclass exists is not mentioned anywhere in this example."
  },
  {
    id: "csc302_ch4_028",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "Dynamic Dispatch is the mechanism that determines which actual implementation of an overridden method runs, and it operates at runtime rather than compile time.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "The Subtype Polymorphism and Dynamic Dispatch section defines Dynamic Dispatch exactly this way: the mechanism that determines which actual implementation of an overridden method is invoked at runtime, confirming the statement is true."
  },
  {
    id: "csc302_ch4_029",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "Which of the following is a stated benefit of Encapsulation's use of access modifiers?",
    options: [
      "All of these",
      "It restricts direct state modification from outside an object's boundary",
      "It lets clients depend only on stable, abstract interfaces per Parnas' Criterion",
      "None of these"
    ],
    correctAnswer: 0,
    explanation: "The Encapsulation section states direct state modification from outside the object boundary is strictly forbidden, supporting the first specific option.\n\nThe Information Hiding section separately attributes to Parnas' Criterion the guidance that clients should depend only on stable, abstract interfaces, supporting the second specific option.\n\nBecause both specific options are supported by the source, \"All of these\" is the correct verdict.\n\n\"None of these\" cannot apply since both claims are directly stated."
  },
  {
    id: "csc302_ch4_030",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "Which pillar of OOP is defined as allowing different entities to resolve the same message signature dynamically?",
    options: [
      "Polymorphism",
      "Encapsulation",
      "Abstraction",
      "Inheritance"
    ],
    correctAnswer: 0,
    explanation: "The Introduction to the Pillars section defines Polymorphism as allowing different entities to resolve the same message signature dynamically.\n\nEncapsulation is defined there as hiding internal state behind safe methods, not about resolving shared message signatures.\n\nAbstraction is defined as modeling only relevant traits of a complex entity.\n\nInheritance is defined as defining hierarchical relationships to share and specialize behaviors."
  },
  {
    id: "csc302_ch4_031",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "A public method validates its inputs before allowing an object's internal state to change, rather than letting external code write to that state directly. Which pillar is being applied?",
    options: [
      "Encapsulation",
      "Polymorphism",
      "Parametric Polymorphism",
      "Subtype Polymorphism"
    ],
    correctAnswer: 0,
    explanation: "This describes the Encapsulation mechanism, in which objects act as cellular structures with private states, and access is restricted through public methods that validate changes before mutating state.\n\nPolymorphism concerns resolving a shared message signature across different entities, not guarding state mutation.\n\nParametric Polymorphism concerns type-independent code specified at instantiation, unrelated to validating state changes.\n\nSubtype Polymorphism concerns a superclass reference resolving to a subclass instance at runtime, also unrelated to this scenario."
  },
  {
    id: "csc302_ch4_032",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "Which of the following describes a benefit of using Interfaces rather than Abstract Classes for unrelated classes that merely share a capability?",
    options: [
      "Interfaces let unrelated classes share behavior without forcing a common identity or shared state",
      "Interfaces require every implementing class to maintain identical instance variables",
      "None of these",
      "All of these"
    ],
    correctAnswer: 0,
    explanation: "The Abstract Classes vs. Interfaces comparison states interfaces are used when unrelated classes share behaviors, CAN-DO capabilities, and historically do not maintain instance states, so unrelated classes are not forced into a shared identity or shared state, supporting the claim that interfaces let unrelated classes share behavior without forcing a common identity or shared state.\n\nRequiring identical instance variables contradicts the table, since interfaces historically do not maintain instance states at all, so the claim about mandatory identical instance variables is unsupported.\n\nBecause only the claim about sharing behavior without a common identity is supported, \"None of these\" does not apply.\n\n\"All of these\" also does not apply since the claim about mandatory identical instance variables is contradicted by the source."
  },
  {
    id: "csc302_ch4_033",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "What distinguishes Interfaces from Abstract Classes regarding the kinds of classes each is meant to serve?",
    options: [
      "Interfaces suit unrelated classes sharing capabilities, while abstract classes suit closely related classes sharing an identity",
      "Interfaces suit closely related classes sharing an identity, while abstract classes suit unrelated classes sharing capabilities",
      "Both abstract classes and interfaces are meant exclusively for closely related classes that share a common identity",
      "Both are meant exclusively for unrelated classes sharing capabilities"
    ],
    correctAnswer: 0,
    explanation: "The comparison states abstract classes are used when classes share closely related identities, IS-A relationships, while interfaces are used when unrelated classes share behaviors, CAN-DO capabilities.\n\nSwapping the two roles reverses the table's actual pairing.\n\nBoth being for closely related classes ignores the CAN-DO use of interfaces.\n\nBoth being for unrelated classes ignores the IS-A use of abstract classes."
  },
  {
    id: "csc302_ch4_034",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "In Java, a variable declared with a superclass type is permitted to reference any subclass instance at runtime.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "The Subtype Polymorphism and Dynamic Dispatch section states that Subtype Polymorphism is exactly the ability of a variable typed as a superclass to reference any subclass instance at runtime, confirming the statement is true."
  },
  {
    id: "csc302_ch4_035",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "Who developed Simula 67, and where was it developed?",
    options: [
      "Ole-Johan Dahl and Kristen Nygaard, in Oslo, Norway",
      "Alan Kay and Adele Goldberg, at Xerox PARC",
      "Bjarne Stroustrup, at Bell Labs",
      "James Gosling, at Sun Microsystems"
    ],
    correctAnswer: 0,
    explanation: "The Simula 67 section states it was developed by Ole-Johan Dahl and Kristen Nygaard in Oslo, Norway, in 1967.\n\nAlan Kay and Adele Goldberg are credited with Smalltalk at Xerox PARC, a separate language.\n\nBjarne Stroustrup created C++ at Bell Labs, a later and different language.\n\nJames Gosling created Java, discussed in a separate section, not Simula."
  },
  {
    id: "csc302_ch4_036",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "What core innovation motivated the design of Simula 67?",
    options: [
      "Standard sequential loops were too inflexible for modeling real-world physics processes",
      "C compiled too slowly to support the Unix simulation work Dahl and Nygaard needed to complete",
      "Java's platform independence was needed for set-top boxes",
      "Existing scripting languages lacked a prototype-based object model"
    ],
    correctAnswer: 0,
    explanation: "The Simula 67 section states its Core Innovation was designed for modeling real-world physics processes, since standard sequential loops were too inflexible, leading to the introduction of classes, subclasses, and instantiation via new.\n\nSlow C compilation is the motivation described for C++, not Simula.\n\nPlatform independence for set-top boxes describes Java's origin as Oak, not Simula.\n\nA lacking prototype-based model motivated Self and JavaScript, not Simula, which introduced class-based objects."
  },
  {
    id: "csc302_ch4_037",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "In the Simulation Spark anecdote, what were Dahl and Nygaard simulating when they realized modeling each entity separately made the simulation code write itself?",
    options: [
      "Ships crossing docks and passing through locks, each with its own speed, cargo capacity, and docking schedule",
      "Bank accounts processing deposits and withdrawals across a large distributed network of regional branch offices nationwide over several decades",
      "Web browsers rendering pages written in an early prototype-based scripting language",
      "Enterprise Java beans wired together through dependency injection"
    ],
    correctAnswer: 0,
    explanation: "The Simulation Spark anecdote states Dahl and Nygaard were simulating ships crossing docks and passing through locks, and modeling each ship as a distinct entity with its own speed, cargo capacity, and docking schedule made the simulation code practically write itself.\n\nBank account processing is the analogy used for Encapsulation in Part II, unrelated to this anecdote.\n\nWeb browsers and prototype-based scripting describe the later JavaScript anecdote, not Simula.\n\nEnterprise Java beans and dependency injection appear in the Part V discussion of Singleton, unrelated to Simula."
  },
  {
    id: "csc302_ch4_038",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "Simula 67 proved that aligning software architecture directly with real-world domains increased implementation mistakes.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "The Simulation Spark section states that Simula proved the opposite: aligning software architecture directly with real-world domains reduced implementation mistakes, so the statement as written is false."
  },
  {
    id: "csc302_ch4_039",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "Smalltalk was created at Xerox PARC in the 1970s by which group of people?",
    options: [
      "Alan Kay, Adele Goldberg, and Dan Ingalls",
      "Ole-Johan Dahl and Kristen Nygaard",
      "David Ungar and Randall Smith",
      "Erich Gamma, Richard Helm, Ralph Johnson, and John Vlissides"
    ],
    correctAnswer: 0,
    explanation: "The Smalltalk section states it was created at Xerox PARC in the 1970s by Alan Kay, Adele Goldberg, and Dan Ingalls.\n\nDahl and Nygaard created Simula 67, an earlier and different language.\n\nDavid Ungar and Randall Smith created Self, also at Xerox PARC but in 1986, a separate language.\n\nGamma, Helm, Johnson, and Vlissides are the Gang of Four who authored the Design Patterns book, unrelated to Smalltalk's creation."
  },
  {
    id: "csc302_ch4_040",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "Alan Kay is quoted as saying: \"I thought of objects being like biological cells and/or individual computers on a network, only able to communicate with messages.\" What vision does this quote express?",
    options: [
      "Software conceptualized as biological cells communicating only through messages",
      "Software conceptualized as flat arrays of raw data processed in bulk",
      "Software conceptualized as prototypes cloned directly from other objects",
      "Software conceptualized as contracts enforced through preconditions and postconditions"
    ],
    correctAnswer: 0,
    explanation: "The Smalltalk section attributes this quote to Alan Kay, originally a biologist, expressing his vision of software as biological cells or networked computers communicating only through messages.\n\nFlat arrays of raw data describe the later Entity Component System under Data-Oriented Design, unrelated to Kay's quote.\n\nCloning prototypes describes the Self language's Prototype Paradigm, a different vision entirely.\n\nContracts with preconditions and postconditions describe Eiffel's Design by Contract, unrelated to this quote."
  },
  {
    id: "csc302_ch4_041",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "In Smalltalk, objects communicate through ordinary procedure calls rather than through asynchronous messages sent over virtual networks.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "The Smalltalk section states the opposite of this claim: objects are isolated computers with no procedure calls at all, communicating only through asynchronous messages sent over virtual networks, so the statement as written is false."
  },
  {
    id: "csc302_ch4_042",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "What does the Pure Objecthood section say about primitive data types in Smalltalk?",
    options: [
      "There are none; numbers, classes, compilation blocks, and threads are all objects",
      "Numbers are treated as primitives, while classes and threads remain full class-based objects",
      "Only booleans are treated as objects, while numbers remain primitives",
      "Primitives exist but cannot receive any messages"
    ],
    correctAnswer: 0,
    explanation: "The Pure Objecthood section states Smalltalk is a purely object-oriented language with no primitive data types; numbers, classes, compilation blocks, and threads are all objects.\n\nTreating numbers as primitives while classes and threads are objects contradicts the section's claim that there are no primitives at all.\n\nLimiting objecthood to booleans alone also contradicts the stated universality of objects in Smalltalk.\n\nPrimitives being unable to receive messages is not applicable, since the section states there are no primitives to begin with."
  },
  {
    id: "csc302_ch4_043",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "In the Smalltalk Control Flow example \"(x > 5) ifTrue: [ Transcript show: 'X is large' ]\", how is the if-statement actually evaluated?",
    options: [
      "By sending a block of code to a boolean object",
      "By invoking a compile-time overloaded comparison method on the integer x",
      "By dispatching a virtual function through a superclass reference",
      "By cloning a prototype object that already holds the comparison result"
    ],
    correctAnswer: 0,
    explanation: "The Pure Objecthood section explains that to evaluate an if-statement in Smalltalk, you send a block of code to a boolean object, since control structures are themselves objects reacting to message passes.\n\nCompile-time overload resolution describes Ad-hoc Polymorphism from Part II, not Smalltalk's control flow.\n\nDispatching through a superclass reference describes Java-style dynamic dispatch, not Smalltalk's message-based evaluation.\n\nCloning a prototype describes the Self language's object creation model, unrelated to this example."
  },
  {
    id: "csc302_ch4_044",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "Bjarne Stroustrup developed C++, originally called \"C with Classes,\" at Bell Labs in which year?",
    options: [
      "1979",
      "1967",
      "1985",
      "1991"
    ],
    correctAnswer: 0,
    explanation: "The C++ section states Stroustrup developed \"C with Classes\" at Bell Labs in 1979.\n\n1967 is when Dahl and Nygaard developed Simula 67 in Oslo, a different language and year.\n\n1985 is when Bertrand Meyer released Eiffel, a different language and year.\n\n1991 is when Java originated as the Oak project, a different language and year."
  },
  {
    id: "csc302_ch4_045",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "What motivated Stroustrup to merge Simula's class abstraction with C's speed and direct memory access?",
    options: [
      "Simula had the right conceptual model but compiled too slowly, while C was fast but lacked structural power for complexity",
      "Simula lacked any concept of classes, while C already had strong built-in support for structured object modeling techniques used throughout the industry",
      "C++ was needed to replace Java as the dominant enterprise language",
      "Bell Labs required a scripting language that could run directly inside a web browser"
    ],
    correctAnswer: 0,
    explanation: "The C++ section states the Motivation was that Simula had the perfect conceptual model but compiled too slowly, while C was fast but lacked the structural power to manage complexity, so Stroustrup merged the two.\n\nSimula is the language that introduced classes; claiming it lacked them contradicts the earlier Simula 67 section.\n\nC++ predates Java by over a decade in this source's timeline and is not described as replacing it.\n\nA browser scripting language describes JavaScript's later origin, not C++'s motivation at Bell Labs."
  },
  {
    id: "csc302_ch4_046",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "Stroustrup's Zero-Cost Abstraction principle is quoted as: \"What you don't use, you don't pay for.\" What does the quote add about features you do use?",
    options: [
      "\"What you do use, you couldn't hand code any better.\"",
      "\"What you do use will be garbage collected automatically.\"",
      "\"What you do use must be declared as a public interface.\"",
      "\"What you do use requires a virtual inheritance declaration.\""
    ],
    correctAnswer: 0,
    explanation: "The Zero-Cost Abstraction section completes the quote with \"And further: What you do use, you couldn't hand code any better,\" directly attributed to Stroustrup.\n\nAutomatic garbage collection is a feature the source attributes to Java, not to Stroustrup's Zero-Cost Abstraction quote.\n\nRequiring a public interface declaration is not part of this quote.\n\nRequiring virtual inheritance is the C++ solution to the later Diamond Problem, unrelated to this quote."
  },
  {
    id: "csc302_ch4_047",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "What does RAII, introduced by C++, stand for and tie together?",
    options: [
      "Resource Acquisition Is Initialization, tying resource management to object lifecycles via constructors and destructors",
      "Runtime Access Is Immutable, tying variable state to compile-time constants",
      "Rapid Allocation In Isolation, tying heap allocation directly to garbage collection cycles used by managed runtimes",
      "Reference Assignment Is Inherited, tying subclass fields to parent constructors"
    ],
    correctAnswer: 0,
    explanation: "The Zero-Cost Abstraction section states C++ introduced RAII, Resource Acquisition Is Initialization, tying resource management such as files, sockets, and memory directly to object lifecycles via constructors and destructors.\n\nImmutable compile-time constants are not what RAII refers to in this source.\n\nGarbage collection cycles are discussed separately in Part VI and are not part of the RAII acronym or definition.\n\nInherited subclass fields are unrelated to what RAII ties together."
  },
  {
    id: "csc302_ch4_048",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "Bertrand Meyer's Eiffel, released in 1985, introduced which paradigm?",
    options: [
      "Design by Contract",
      "Data-Oriented Design",
      "Composition over Inheritance",
      "The Prototype Paradigm"
    ],
    correctAnswer: 0,
    explanation: "The Eiffel section states that Eiffel, released in 1985, introduced the paradigm of Design by Contract, requiring software components to declare explicit, checkable agreements.\n\nData-Oriented Design is a later Part VII concept associated with performance-critical game engines, not Eiffel.\n\nComposition over Inheritance is a Part VI principle about assembling components rather than extending base classes, unrelated to Eiffel's origin.\n\nThe Prototype Paradigm belongs to the Self language, not Eiffel."
  },
  {
    id: "csc302_ch4_049",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "Under Eiffel's Design by Contract, which term names what the object guarantees to achieve after execution completes?",
    options: [
      "Postconditions",
      "Preconditions",
      "Invariants",
      "Access modifiers"
    ],
    correctAnswer: 0,
    explanation: "The Eiffel section defines Postconditions as what the object guarantees to achieve after execution completes.\n\nPreconditions are defined as what the client must guarantee before invoking a method, the opposite timing.\n\nInvariants are defined as what state guarantees must always remain true for the object's lifecycle, not tied to a single execution's completion.\n\nAccess modifiers are Encapsulation's private, protected, and public restrictions from Part II, unrelated to Design by Contract."
  },
  {
    id: "csc302_ch4_050",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "In Eiffel's Design by Contract, what happens if a contract is violated?",
    options: [
      "The program throws a structured exception, pinpointing the faulty component",
      "The compiler silently ignores the violation and continues execution",
      "The violated method is automatically replaced by its overloaded counterpart",
      "The offending object is garbage collected immediately at the next Stop-the-World pause"
    ],
    correctAnswer: 0,
    explanation: "The Eiffel section states that if a contract is violated, the program throws a structured exception, pinpointing the faulty component.\n\nSilently ignoring the violation contradicts the source's description of a thrown exception.\n\nAutomatic replacement by an overloaded counterpart is not mentioned anywhere in the Eiffel section.\n\nGarbage collection during a Stop-the-World pause is a Part VI memory management concept unrelated to contract violations."
  },
  {
    id: "csc302_ch4_051",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "Java was originally named \"Oak\" and created for which purpose before it was re-engineered for the web in 1995?",
    options: [
      "Interactive television set-top boxes",
      "Distributed Unix simulation software",
      "Browser scripting written to resemble Java syntax",
      "Enterprise dependency injection frameworks"
    ],
    correctAnswer: 0,
    explanation: "The Java section states its Origin, in 1991, was that Java was originally named \"Oak\" and created for interactive television set-top boxes, before the Mainstream Pivot re-engineered it for the web in 1995.\n\nDistributed Unix simulation software describes Stroustrup's motivation for C++, not Java's origin.\n\nBrowser scripting resembling Java syntax describes JavaScript's origin under Brendan Eich, a different language entirely.\n\nEnterprise dependency injection frameworks appear later in the Singleton controversy discussion, unrelated to Java's origin."
  },
  {
    id: "csc302_ch4_052",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "Which C++ feature did Java remove by allowing a class to implement multiple interfaces but inherit from only one parent class?",
    options: [
      "Multiple class inheritance",
      "Manual pointer manipulation",
      "Automatic garbage collection",
      "Platform independence via a virtual machine"
    ],
    correctAnswer: 0,
    explanation: "The Java section states Java removed complex, error-prone C++ features, including no multiple class inheritance, offering interfaces only, alongside separately removing manual pointers via automatic garbage collection.\n\nManual pointer manipulation was removed through automatic garbage collection, a distinct removed feature from multiple inheritance.\n\nAutomatic garbage collection is the replacement mechanism Java added, not the feature being removed.\n\nPlatform independence via the JVM is a feature Java introduced, not one it removed from C++."
  },
  {
    id: "csc302_ch4_053",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "Java achieves strict platform independence through which mechanism?",
    options: [
      "The Java Virtual Machine",
      "Manual pointer arithmetic",
      "Static monomorphization",
      "Reference counting garbage collection"
    ],
    correctAnswer: 0,
    explanation: "The Java section states Java has strict platform independence via the Java Virtual Machine, the JVM.\n\nManual pointer arithmetic is a C++ feature that Java specifically removed, not a source of platform independence.\n\nStatic monomorphization is described later as one of Rust's trait compilation strategies, unrelated to Java's platform independence.\n\nReference counting is one of the garbage collection strategies discussed in Part VI, not the mechanism behind platform independence."
  },
  {
    id: "csc302_ch4_054",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "David Ungar and Randall Smith created Self at Xerox PARC in 1986 by questioning which core assumption of OOP?",
    options: [
      "Why classes are needed at all, given that a class is just a factory that manufactures objects",
      "Why objects need to communicate through messages rather than through direct procedure calls shared within a single running process",
      "Why access modifiers should ever restrict a member's visibility across package boundaries within a large shared enterprise codebase",
      "Why garbage collection should ever pause program execution"
    ],
    correctAnswer: 0,
    explanation: "The Self section states Self questioned why classes are needed at all, since in class-based OOP a class is a factory that manufactures objects, leading to the Prototype Paradigm of cloning existing objects instead.\n\nQuestioning message-based communication over procedure calls describes Smalltalk's design choice, not Self's core question.\n\nAccess modifier visibility is an Encapsulation topic from Part II, unrelated to Self's founding question.\n\nGarbage collection pausing execution is a Part VI Mark-and-Sweep topic, unrelated to Self's founding question."
  },
  {
    id: "csc302_ch4_055",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "In Self's Prototype Paradigm, how is specialized state achieved for a newly created object?",
    options: [
      "By directly modifying properties on the cloned instance",
      "By declaring a new subclass that overrides the parent's constructor",
      "By assigning the object a private field validated through a setter method",
      "By writing a formal precondition that the object must satisfy before use"
    ],
    correctAnswer: 0,
    explanation: "The Self section states specialized state is achieved by directly modifying properties on the cloned instance, since new objects are created by copying, or cloning, existing prototype objects rather than instantiating classes.\n\nDeclaring a subclass that overrides a constructor is a class-based inheritance mechanism, the very concept Self eliminated.\n\nA validated private field with a setter describes Encapsulation from Part II, not the prototype cloning mechanism.\n\nA formal precondition describes Eiffel's Design by Contract, unrelated to Self's prototype model."
  },
  {
    id: "csc302_ch4_056",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "Brendan Eich was hired by Netscape in 1995 and told to make his new scripting language \"look like Java\" for marketing reasons.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "The JavaScript section states Brendan Eich was hired by Netscape in 1995 to write a scripting language for the browser and was told to make it \"look like Java\" for marketing reasons, even though he preferred the minimalist prototype model of Self and Scheme, confirming the statement is true."
  },
  {
    id: "csc302_ch4_057",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "How long did the JavaScript section say it took Brendan Eich to write the language, and what object model resulted?",
    options: [
      "Just 10 days, implementing a prototype-based object model under a C-style syntax wrapper",
      "Just 10 days, implementing a class-based object model under a Java-style syntax wrapper",
      "About one year, implementing a prototype-based object model with no syntax wrapper at all",
      "About one year, implementing the same class-based model used by Simula 67"
    ],
    correctAnswer: 0,
    explanation: "The JavaScript section states the Result was that JavaScript was written in just 10 days, implementing a prototype-based object model under a C-style syntax wrapper.\n\nA class-based model under a Java-style wrapper contradicts both the object model, prototype-based rather than class-based, and the syntax family, C-style rather than Java-style.\n\nA one-year timeline contradicts the stated 10-day writing period.\n\nReusing Simula 67's class-based model contradicts JavaScript's prototype-based design entirely."
  },
  {
    id: "csc302_ch4_058",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "Which of the following language origins is accurately paired with its stated motivation?",
    options: [
      "All of these",
      "Eiffel was released to introduce Design by Contract with checkable preconditions and postconditions",
      "Self was created to give objects asynchronous message passing over virtual networks instead of classes",
      "None of these"
    ],
    correctAnswer: 1,
    explanation: "The Eiffel section confirms Eiffel was released to introduce Design by Contract, with checkable preconditions, postconditions, and invariants, so this pairing is accurate.\n\nThe Self section instead describes Self as eliminating classes in favor of cloning existing prototype objects; asynchronous message passing over virtual networks is the Smalltalk section's design, not Self's, so this pairing misattributes Smalltalk's mechanism to Self and is inaccurate.\n\nBecause only the Eiffel pairing is supported, \"All of these\" does not apply.\n\n\"None of these\" also does not apply, since the Eiffel pairing is directly confirmed by the source."
  },
  {
    id: "csc302_ch4_059",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "Robert C. Martin, known as \"Uncle Bob,\" compiled the SOLID principles in which era?",
    options: [
      "The early 2000s",
      "The 1960s",
      "1979",
      "1994"
    ],
    correctAnswer: 0,
    explanation: "The SOLID Principles Overview states that in the early 2000s, Robert C. Martin, \"Uncle Bob,\" compiled five foundational principles under the acronym SOLID.\n\nThe 1960s is when the Software Crisis was identified, an earlier and unrelated period.\n\n1979 is when Stroustrup developed C++ at Bell Labs, unrelated to SOLID.\n\n1994 is when the Gang of Four published Design Patterns, a different milestone."
  },
  {
    id: "csc302_ch4_060",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "The Single Responsibility Principle states that a class should have how many reasons to change?",
    options: [
      "One, and only one",
      "As many as its number of public methods",
      "Zero, since classes should never change once deployed",
      "One for every developer who edits the class"
    ],
    correctAnswer: 0,
    explanation: "The SRP section states the Rule as: a class should have one, and only one, reason to change, maximizing cohesion and minimizing coupling.\n\nTying reasons to change to the number of public methods is not the rule stated in the source.\n\nRequiring zero reasons to change contradicts the premise that classes do change; SRP limits reasons to one, not none.\n\nTying the count to the number of developers is not a concept discussed in this section."
  },
  {
    id: "csc302_ch4_061",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "In the SRP Violation example, an Employee class contains both calculatePay() and saveToDatabase(). What risk does the source identify?",
    options: [
      "If Accounting updates payment formulas, the database serialization code risks being inadvertently corrupted",
      "The class becomes unable to compile because two unrelated methods are declared inside it",
      "The database administrator gains the ability to overwrite payment formulas directly",
      "The Employee class automatically becomes an interface"
    ],
    correctAnswer: 0,
    explanation: "The SRP Violation example states that if Accounting updates payment formulas, the database serialization code runs the risk of being inadvertently corrupted, because calculatePay() and saveToDatabase() are dictated by two different, unrelated reasons to change.\n\nCompilation failure from having two methods in one class is not a real constraint and is not mentioned in the source.\n\nThe database administrator gaining control over payment formulas is not the risk described; the risk runs the other direction, from accounting changes toward database code.\n\nA class automatically becoming an interface is not a concept discussed anywhere in this section."
  },
  {
    id: "csc302_ch4_062",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "The Open/Closed Principle states that software entities should be open for extension and closed for modification.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "The OCP section states the Rule exactly this way: software entities, classes and modules, should be open for extension but closed for modification, so new features can be introduced without editing existing, tested source code, confirming the statement is true."
  },
  {
    id: "csc302_ch4_063",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "How should a class support a new file format without editing existing, tested code?",
    options: [
      "Define a Document interface and write a new class implementing it for the new format",
      "Add a new branch to the class's existing switch statement to handle the format",
      "Duplicate the entire class and rename it for the new format",
      "Mark the entire class as private so no other code outside the package can reference it"
    ],
    correctAnswer: 0,
    explanation: "The Achieving OCP section states that instead of using switch statements to handle various document formats inside a class, you define a Printer or Document interface, and to support a new format you simply write a new class implementing Document.\n\nAdding a branch to a switch statement is precisely the approach OCP recommends avoiding, since it requires modifying existing code.\n\nDuplicating the entire class is not the polymorphic abstraction approach described in the source.\n\nMarking the class private does not address extensibility and is not discussed in this section."
  },
  {
    id: "csc302_ch4_064",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "Barbara Liskov's 1987 Formal Rule states that for a property phi(x) provable about objects of type T, phi(y) should also be true for objects y of type S under which condition?",
    options: [
      "S is a subtype of T",
      "S and T share no relationship at all",
      "T is a subtype of S",
      "S implements the same interface as an unrelated type U"
    ],
    correctAnswer: 0,
    explanation: "The LSP section states the Formal Rule: let phi(x) be a property provable about objects x of type T, then phi(y) should be true for objects y of type S, where S is a subtype of T.\n\nRequiring no relationship between S and T contradicts the rule, which specifically requires S to be a subtype of T.\n\nReversing the subtype direction, making T a subtype of S, inverts the rule as actually stated.\n\nBringing in an unrelated type U sharing an interface is not part of Liskov's Formal Rule as stated in the source."
  },
  {
    id: "csc302_ch4_065",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "In the Classic LSP Violation, a Square class extends Rectangle and overrides setWidth(w) to also change the height. Why does this break a function expecting a Rectangle?",
    options: [
      "The function alters the width but expects the height to remain constant, which Square's override does not preserve",
      "The function cannot call setWidth(w) on a Square instance at all",
      "The Square class fails to compile because Rectangle was declared as a final class that cannot be extended by any other type",
      "The function throws a structured exception defined by Eiffel's Design by Contract before the program can continue executing normally"
    ],
    correctAnswer: 0,
    explanation: "The Classic LSP Violation states that if a function expecting a Rectangle alters the width but expects the height to remain constant, the program breaks, because Square's overridden setWidth(w) changes both dimensions together.\n\nThe function can call setWidth(w) on a Square instance; the problem is the unexpected side effect on height, not an inability to call the method.\n\nRectangle being declared final and causing a compile failure is not part of this example.\n\nEiffel's structured exception mechanism belongs to a different section and is not part of this Square-Rectangle scenario."
  },
  {
    id: "csc302_ch4_066",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "The Interface Segregation Principle advises against forcing clients to depend on interfaces they do not use.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "The ISP section states the Rule directly: clients should not be forced to depend on interfaces they do not use, preferring many small, focused interfaces over a single bloated one, confirming the statement is true."
  },
  {
    id: "csc302_ch4_067",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "In the ISP Refactoring example, a single MultiFunctionDevice interface with print(), scan(), and fax() is broken into what?",
    options: [
      "Separate Printer, Scanner, and FaxDevice interfaces",
      "A single abstract class implementing all three methods",
      "Three overloaded versions of the same print() method",
      "A Composite pattern wrapping the original interface"
    ],
    correctAnswer: 0,
    explanation: "The ISP Refactoring example states the single interface is broken into separate Printer, Scanner, and FaxDevice interfaces, preventing simple printing clients from breaking when faxing logic changes.\n\nCollapsing everything into one abstract class does not achieve segregation and is not what the example describes.\n\nOverloading a single print() method does not address the interface segregation problem being illustrated.\n\nThe Composite pattern is a Part V structural pattern about tree structures, unrelated to this ISP example."
  },
  {
    id: "csc302_ch4_068",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "The Dependency Inversion Principle's first rule states that high-level modules should not depend on low-level modules. What should both depend on instead?",
    options: [
      "Abstractions",
      "A shared global variable",
      "The Singleton pattern",
      "A concrete SQL database implementation"
    ],
    correctAnswer: 0,
    explanation: "The DIP section states Rule 1: high-level modules should not depend on low-level modules; both should depend on abstractions.\n\nA shared global variable is the flaw described earlier under Functional Decomposition, not what DIP recommends.\n\nThe Singleton pattern is a separate Part V creational pattern, not what DIP's first rule prescribes.\n\nA concrete SQL database implementation is exactly the kind of low-level detail DIP says business logic should not depend on directly."
  },
  {
    id: "csc302_ch4_069",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "In the Visualizing DIP diagram, what changes about the database driver when moving from the Traditional arrangement to the Inverted one?",
    options: [
      "It becomes a pluggable detail depending on an IDatabase abstraction, rather than BusinessLogic depending on it directly",
      "It becomes the only module in the system permitted to hold any application state shared across every other component",
      "It is replaced entirely by a Singleton instance",
      "It is compiled separately from BusinessLogic using static monomorphization performed ahead of time by the compiler during every build"
    ],
    correctAnswer: 0,
    explanation: "The Visualizing DIP section shows Traditional as [BusinessLogic] -> [SQLDatabase], and Inverted as [BusinessLogic] -> [IDatabase] <- [SQLDatabase], meaning the database driver becomes a pluggable detail depending on the IDatabase abstraction, keeping BusinessLogic clean, testable, and stable.\n\nBecoming the only module allowed to hold state is not discussed in this diagram.\n\nBeing replaced by a Singleton instance is unrelated to DIP's abstraction-based inversion.\n\nStatic monomorphization is a Rust compilation strategy discussed in Part VII, unrelated to this DIP diagram."
  },
  {
    id: "csc302_ch4_070",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "Craig Larman's GRASP patterns provide guidelines for which decision?",
    options: [
      "Which objects should own specific computational responsibilities",
      "Which programming language a team should adopt for a new project",
      "Which access modifier should be applied to every field by default",
      "Which garbage collection strategy a managed runtime should use"
    ],
    correctAnswer: 0,
    explanation: "The GRASP section states Craig Larman created GRASP patterns to provide guidelines for deciding which objects should own specific computational responsibilities.\n\nLanguage adoption decisions are not the subject of GRASP in this source.\n\nDefault access modifiers are an Encapsulation topic from Part II, unrelated to GRASP's purpose.\n\nGarbage collection strategy selection is a Part VI memory management topic, unrelated to GRASP."
  },
  {
    id: "csc302_ch4_071",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "Which GRASP pattern assigns a responsibility to the class that maintains the information necessary to fulfill it?",
    options: [
      "Information Expert",
      "Creator",
      "Controller",
      "Low Coupling"
    ],
    correctAnswer: 0,
    explanation: "The GRASP section defines Information Expert as assigning a responsibility to the class that maintains the information necessary to fulfill it.\n\nCreator instead decides which class should be responsible for instantiating new instances of another class.\n\nController is the first object beyond the UI layer that coordinates system operations, not a rule about information ownership.\n\nLow Coupling is about minimizing how changes in one class impact others, a separate GRASP guideline covered on Coupling and Cohesion."
  },
  {
    id: "csc302_ch4_072",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "The GRASP pattern named Controller is described as which kind of object?",
    options: [
      "The first object beyond the UI layer that coordinates system operations",
      "The class that decides which other class should instantiate a new object",
      "The class that maintains the information necessary to fulfill a responsibility",
      "The object that assigns responsibilities to target types using polymorphic methods"
    ],
    correctAnswer: 0,
    explanation: "The GRASP section defines Controller as the first object beyond the UI layer that coordinates system operations.\n\nDeciding which class instantiates a new object is the definition of Creator, a different pattern.\n\nMaintaining the information necessary to fulfill a responsibility is the definition of Information Expert, a different pattern.\n\nAssigning responsibilities via polymorphic methods is the GRASP guideline named Polymorphism, a different item entirely."
  },
  {
    id: "csc302_ch4_073",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "GRASP's High Cohesion guideline aims to assign responsibilities so that changes in one class do not impact others.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "The Coupling and Cohesion section attaches that definition to Low Coupling, not High Cohesion; assigning responsibilities so that changes in one class do not impact others is exactly Low Coupling's rule. High Cohesion instead ensures a class's own responsibilities are highly focused and closely related, so the statement as written is false."
  },
  {
    id: "csc302_ch4_074",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "GRASP's High Cohesion guideline is best described as ensuring what about a class's responsibilities?",
    options: [
      "They are highly focused and closely related, keeping classes small and maintainable",
      "They are spread as widely as possible across unrelated concerns",
      "They are hidden entirely from any client code",
      "They are resolved dynamically at runtime rather than fixed at compile time, the mechanism Dynamic Dispatch relies on rather than the Cohesion guideline described here"
    ],
    correctAnswer: 0,
    explanation: "The Coupling and Cohesion section defines High Cohesion as ensuring an object's responsibilities are highly focused and closely related, keeping classes small and maintainable.\n\nSpreading responsibilities across unrelated concerns is the opposite of high cohesion, closer to what SRP violations look like.\n\nHiding responsibilities entirely from clients describes Encapsulation, a different concept from Part II.\n\nRuntime resolution of responsibilities describes Polymorphism and Dynamic Dispatch, not the Cohesion guideline."
  },
  {
    id: "csc302_ch4_075",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "When behaviors vary by type, GRASP's Polymorphism guideline recommends assigning the responsibility to which party?",
    options: [
      "The target types themselves, using polymorphic methods rather than checking type flags",
      "A single centralized controller that checks a type flag for every case",
      "The Creator pattern, regardless of which types are involved",
      "A Singleton instance shared across all target types"
    ],
    correctAnswer: 0,
    explanation: "The Coupling and Cohesion section states that when behaviors vary by type, the responsibility should be assigned to the target types using polymorphic methods rather than checking type flags.\n\nA centralized controller checking type flags is exactly the approach this guideline recommends avoiding.\n\nThe Creator pattern concerns instantiation responsibility, not behavior-by-type dispatch.\n\nA shared Singleton instance is unrelated to assigning polymorphic behavior to target types."
  },
  {
    id: "csc302_ch4_076",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "Which of the following SOLID principles is correctly paired with its defining rule?",
    options: [
      "All of these",
      "The Liskov Substitution Principle requires subtypes to be substitutable for their base types without altering program correctness",
      "The Interface Segregation Principle prefers many small, focused interfaces over one bloated interface",
      "None of these"
    ],
    correctAnswer: 0,
    explanation: "The LSP section confirms subtypes must be substitutable for their base types without altering program correctness, supporting the first specific option.\n\nThe ISP section confirms the preference for many small, focused interfaces over a single bloated one, supporting the second specific option.\n\nBecause both specific pairings are accurate, \"All of these\" is correct.\n\n\"None of these\" does not apply since both pairings are directly supported by the source."
  },
  {
    id: "csc302_ch4_077",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "A team splits a bloated OrderProcessor interface into smaller, focused interfaces so clients only depend on the methods they actually call. Which SOLID principle are they applying?",
    options: [
      "Interface Segregation Principle",
      "Single Responsibility Principle",
      "Open/Closed Principle",
      "Dependency Inversion Principle"
    ],
    correctAnswer: 0,
    explanation: "The ISP section describes exactly this move, splitting a fat interface into smaller, focused ones so clients only depend on what they use, matching the Interface Segregation Principle.\n\nSRP concerns a class having only one reason to change, not the shape of an interface's method set.\n\nOCP concerns extending behavior without modifying existing tested code, not interface size.\n\nDIP concerns high-level modules depending on abstractions rather than low-level details, a different axis from interface segregation."
  },
  {
    id: "csc302_ch4_078",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "A BusinessLogic class depends on an IDatabase abstraction rather than directly on a concrete SQLDatabase class, letting the database driver be swapped without changing BusinessLogic. Which SOLID principle does this illustrate?",
    options: [
      "Dependency Inversion Principle",
      "Liskov Substitution Principle",
      "Single Responsibility Principle",
      "Interface Segregation Principle"
    ],
    correctAnswer: 0,
    explanation: "This is exactly the Visualizing DIP example from the source: BusinessLogic depends on IDatabase rather than SQLDatabase directly, keeping the business logic clean, testable, and stable, matching the Dependency Inversion Principle.\n\nLSP concerns whether a subtype can safely substitute for its base type in existing code, not the direction of dependency between modules.\n\nSRP concerns a class having a single reason to change, not which abstraction a module depends on.\n\nISP concerns splitting interfaces so clients depend only on methods they use, a different concern from dependency direction."
  },
  {
    id: "csc302_ch4_079",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "Applying the SOLID principles is said to reduce which architectural qualities?",
    options: [
      "Rigidity, fragility, and code duplication",
      "Test coverage and documentation length",
      "The number of interfaces a project can define",
      "The number of classes a project is permitted to declare"
    ],
    correctAnswer: 0,
    explanation: "The SOLID Principles Overview states applying SOLID reduces architectural rigidity, fragility, and code duplication.\n\nReducing test coverage or documentation length is never claimed as a benefit of SOLID in the source.\n\nLimiting the number of interfaces a project can define is not a stated effect of SOLID; ISP in fact encourages more, smaller interfaces.\n\nLimiting the number of classes a project can declare is not discussed anywhere in this section."
  },
  {
    id: "csc302_ch4_080",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "Which of the following is one of GRASP's three named responsibility-assignment patterns discussed alongside Coupling and Cohesion?",
    options: [
      "All of these",
      "Creator, which decides which class should instantiate new instances of another class",
      "Information Expert, which decides which class should instantiate new instances of another class",
      "None of these"
    ],
    correctAnswer: 1,
    explanation: "The GRASP section explicitly lists Creator as the pattern that decides which class should be responsible for instantiating new instances of another class, so this pairing is accurate.\n\nInformation Expert is instead defined as assigning a responsibility to the class that maintains the information necessary to fulfill it, not as governing instantiation decisions, so pairing that instantiation rule with Information Expert is inaccurate.\n\nBecause only the Creator pairing is supported, \"All of these\" does not apply.\n\n\"None of these\" also does not apply, since the Creator pairing is directly confirmed by the source."
  },
  {
    id: "csc302_ch4_081",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "The Open/Closed Principle's core rule is that software entities should remain open for modification and closed for extension.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "The OCP section states the opposite of this claim: entities should be open for extension but closed for modification, so the statement as written reverses the actual rule and is false."
  },
  {
    id: "csc302_ch4_082",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "A base class defines a withdraw() method that always leaves the account balance non-negative, and a subclass overrides withdraw() in a way that can leave the balance negative when used through the base class's reference. Which principle does this subclass most directly violate?",
    options: [
      "Liskov Substitution Principle",
      "Interface Segregation Principle",
      "Single Responsibility Principle",
      "GRASP's Creator pattern"
    ],
    correctAnswer: 0,
    explanation: "This scenario mirrors the Classic LSP Violation's structure: a subtype changes behavior in a way that breaks a guarantee the base type's callers rely on, exactly what the Liskov Substitution Principle's Formal Rule is meant to prevent.\n\nISP concerns forcing clients to depend on unused interface methods, not a broken behavioral guarantee during substitution.\n\nSRP concerns a class having more than one reason to change, not a broken invariant across substitution.\n\nGRASP's Creator concerns which class should instantiate another, unrelated to a substitutability violation."
  },
  {
    id: "csc302_ch4_083",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "In 1994, Erich Gamma, Richard Helm, Ralph Johnson, and John Vlissides published which book?",
    options: [
      "Design Patterns: Elements of Reusable Object-Oriented Software",
      "Object-Oriented Software Construction",
      "The Mythical Man-Month",
      "Structure and Interpretation of Computer Programs"
    ],
    correctAnswer: 0,
    explanation: "The Gang of Four section states that in 1994, Erich Gamma, Richard Helm, Ralph Johnson, and John Vlissides published Design Patterns: Elements of Reusable Object-Oriented Software, documenting 23 repeatable solution templates.\n\nObject-Oriented Software Construction is not the title given in this source for the Gang of Four's book.\n\nThe Mythical Man-Month is not mentioned anywhere in the source.\n\nStructure and Interpretation of Computer Programs is not mentioned anywhere in the source."
  },
  {
    id: "csc302_ch4_084",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "The Gang of Four's 23 design patterns are categorized into which three key groups?",
    options: [
      "Creational, Structural, and Behavioral",
      "Encapsulated, Abstracted, and Inherited",
      "Recall, Application, and Analysis",
      "Nominal, Structural, and Prototype-based"
    ],
    correctAnswer: 0,
    explanation: "The Gang of Four section states the 23 patterns were categorized into three key groups: Creational, abstracting the instantiation process; Structural, composing classes and objects into larger structures; and Behavioral, defining communication patterns between objects.\n\nEncapsulated, Abstracted, and Inherited are pillar-related terms from Part II, not the GoF category names.\n\nRecall, Application, and Analysis are the cognitive-mix categories used to design this question bank, not GoF pattern categories.\n\nNominal and Structural typing, along with prototype-based languages, are Part VII type-system concepts, unrelated to the GoF categories."
  },
  {
    id: "csc302_ch4_085",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "Which design pattern restricts a class to a single, globally accessible instance?",
    options: [
      "Singleton",
      "Factory Method",
      "Builder",
      "Composite"
    ],
    correctAnswer: 0,
    explanation: "The Creational Patterns section defines Singleton as restricting a class to a single, globally accessible instance.\n\nFactory Method instead defines an interface for creating an object but lets subclasses decide which exact class to instantiate.\n\nBuilder separates the construction of complex, multi-parameter objects from their final representation, a different creational concern.\n\nComposite is a Structural pattern for tree structures, not a Creational pattern about single instances."
  },
  {
    id: "csc302_ch4_086",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "The Factory Method pattern defines an interface for creating an object, but lets which party decide the exact class to instantiate?",
    options: [
      "Subclasses",
      "The client code that calls the interface directly",
      "A globally shared Singleton instance",
      "The database driver plugged in through DIP"
    ],
    correctAnswer: 0,
    explanation: "The Creational Patterns section defines Factory Method as defining an interface for creating an object but letting subclasses decide which exact class to instantiate.\n\nClient code calling the interface directly is not described as the decision-maker; the decision belongs to subclasses.\n\nA Singleton instance is a separate, unrelated creational pattern about restricting instance count, not about delegating instantiation choice.\n\nA pluggable database driver is the Visualizing DIP example from Part IV, unrelated to Factory Method."
  },
  {
    id: "csc302_ch4_087",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "In the Builder Context example \"new User.Builder(\"John\").age(30).active(true).build();\", what problem is the Builder pattern said to be useful for replacing?",
    options: [
      "Overloaded constructors",
      "Overridden methods that share a signature with their parent",
      "Interfaces with too many unrelated methods",
      "Global state shared across multiple classes"
    ],
    correctAnswer: 0,
    explanation: "The Creational Patterns section states the Builder Context example is useful for replacing overloaded constructors, since Builder separates construction of complex, multi-parameter objects from their final representation.\n\nOverridden methods sharing a parent signature describe polymorphism and inheritance concerns, not the problem Builder addresses.\n\nInterfaces with too many unrelated methods describe the ISP problem addressed by interface segregation, not Builder.\n\nGlobal state shared across classes is the Singleton controversy's critique, unrelated to Builder's purpose."
  },
  {
    id: "csc302_ch4_088",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "Which structural pattern translates an incompatible interface into a target interface expected by a client?",
    options: [
      "Adapter",
      "Composite",
      "Decorator",
      "Observer"
    ],
    correctAnswer: 0,
    explanation: "The Structural Patterns section defines Adapter as translating an incompatible interface into a target interface expected by a client.\n\nComposite instead composes objects into tree structures to represent part-whole hierarchies.\n\nDecorator dynamically attaches additional responsibilities to an object without subclassing, a different structural concern.\n\nObserver is a Behavioral pattern about one-to-many subscriptions, not a Structural pattern about interface translation."
  },
  {
    id: "csc302_ch4_089",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "The Composite pattern composes objects into tree structures so that clients can treat individual objects and groupings uniformly.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "The Structural Patterns section defines Composite exactly this way: composing objects into tree structures to represent part-whole hierarchies, so clients can treat individual objects and groupings uniformly, confirming the statement is true."
  },
  {
    id: "csc302_ch4_090",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "In the Decorator Usage example \"new BufferedInputStream(new FileInputStream(file));\", what does this illustrate about the Decorator pattern?",
    options: [
      "It dynamically attaches additional responsibilities to an object without subclassing, as an alternative to inheritance",
      "It restricts the FileInputStream class to a single, globally accessible instance",
      "It defines an interface letting subclasses decide which concrete stream class to instantiate at runtime based on configuration",
      "It separates construction of a complex, multi-parameter stream object from its final representation"
    ],
    correctAnswer: 0,
    explanation: "The Structural Patterns section defines Decorator as dynamically attaching additional responsibilities to an object without subclassing, an alternative to inheritance, and gives wrapping a basic input stream with BufferedInputStream as the example.\n\nRestricting a class to a single instance describes Singleton, a different, Creational pattern.\n\nLetting subclasses decide which class to instantiate describes Factory Method, a different Creational pattern.\n\nSeparating multi-parameter construction from final representation describes Builder, also a different Creational pattern."
  },
  {
    id: "csc302_ch4_091",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "Which behavioral pattern establishes a one-to-many subscription model so that dependents are notified automatically when one object's state changes?",
    options: [
      "Observer",
      "Strategy",
      "State",
      "Adapter"
    ],
    correctAnswer: 0,
    explanation: "The Behavioral Patterns section defines Observer as establishing a one-to-many subscription model so that when one object changes state, all its dependents are notified automatically.\n\nStrategy instead defines a family of interchangeable algorithms, selecting the active one at runtime, a different behavioral concern.\n\nState allows an object to alter its behavior when its internal state changes, appearing as if its class changed, also distinct from Observer.\n\nAdapter is a Structural pattern about translating incompatible interfaces, not a Behavioral subscription mechanism."
  },
  {
    id: "csc302_ch4_092",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "The Strategy pattern defines a family of interchangeable algorithms and selects the active one at which point?",
    options: [
      "Runtime",
      "Compile time, before the program is packaged",
      "Only during unit testing",
      "During garbage collection's Mark-and-Sweep phase"
    ],
    correctAnswer: 0,
    explanation: "The Behavioral Patterns section defines Strategy as defining a family of interchangeable algorithms, encapsulating each one, and selecting the active algorithm at runtime.\n\nCompile-time selection describes Ad-hoc Polymorphism's overload resolution from Part II, not the Strategy pattern.\n\nLimiting selection to unit testing is not described anywhere in this section.\n\nGarbage collection's Mark-and-Sweep phase is a Part VI memory topic unrelated to Strategy's algorithm selection."
  },
  {
    id: "csc302_ch4_093",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "The State pattern allows an object to alter its behavior when its internal state changes, appearing as if the object changed which thing?",
    options: [
      "Its class",
      "Its memory address",
      "Its access modifier",
      "Its superclass reference type"
    ],
    correctAnswer: 0,
    explanation: "The Behavioral Patterns section defines State as allowing an object to alter its behavior when its internal state changes, appearing as if the object changed its class.\n\nChanging memory address is not part of this pattern's description and is a Part VI memory layout topic instead.\n\nChanging access modifier is an Encapsulation concept from Part II, unrelated to the State pattern.\n\nChanging the superclass reference type is a Subtype Polymorphism concept from Part II, unrelated to this pattern."
  },
  {
    id: "csc302_ch4_094",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "Why is the Singleton pattern widely regarded by modern developers as an anti-pattern?",
    options: [
      "It introduces global state, conceals dependencies, and makes unit testing nearly impossible",
      "It requires every class in the system to implement multiple unrelated interfaces",
      "It forces every subclass to override each method inherited from its parent",
      "It requires the class to be declared abstract so it can never be instantiated directly"
    ],
    correctAnswer: 0,
    explanation: "The Singleton Pattern Controversy states the Critiques are that Singleton introduces global state into application lifecycles, conceals dependencies within class methods, and makes unit testing nearly impossible, since instances are difficult to mock or reset between test cases.\n\nRequiring multiple unrelated interface implementations is an ISP-adjacent concern, not the Singleton critique described.\n\nForcing subclasses to override every inherited method is an Inheritance concern, not a Singleton critique.\n\nSingleton restricts a class to exactly one instance, not zero, so preventing any instantiation misstates the pattern."
  },
  {
    id: "csc302_ch4_095",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "What does the source recommend as the Modern Solution for managing lifecycle scope instead of relying on Singleton's static code blocks?",
    options: [
      "Dependency Injection frameworks",
      "The Observer pattern's subscription model",
      "Manual reference counting written by the developer",
      "Composition over Inheritance"
    ],
    correctAnswer: 0,
    explanation: "The Singleton Pattern Controversy states the Modern Solution is to manage lifecycle scope using Dependency Injection, DI, frameworks rather than static code blocks.\n\nThe Observer pattern's subscription model addresses a different problem, state-change notification, not lifecycle scope management.\n\nManual reference counting is a Part VI garbage collection strategy, unrelated to the recommended Singleton replacement.\n\nComposition over Inheritance is a Part VI design principle about assembling components, not the specific fix offered for Singleton's lifecycle problems."
  },
  {
    id: "csc302_ch4_096",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "AbstractSingletonProxyFactoryBean is used in the source as a satirical example of what phenomenon in Enterprise Java?",
    options: [
      "Pattern overuse leading to over-engineered architectures with complex abstractions",
      "The correct, minimal way to implement a Singleton pattern",
      "A necessary requirement imposed by the Dependency Inversion Principle",
      "A standard example of the Observer pattern's subscription mechanism"
    ],
    correctAnswer: 0,
    explanation: "The Pattern Overuse and Enterprise Bloat section names AbstractSingletonProxyFactoryBean as the Satirical Classic, illustrating dogmatic adherence to patterns leading to over-engineered architectures with complex abstractions.\n\nIt is presented as a cautionary satire, not as the correct or minimal way to build a Singleton.\n\nDIP is not described as requiring this kind of naming or structure anywhere in the source.\n\nIt is not connected to the Observer pattern anywhere in this section."
  },
  {
    id: "csc302_ch4_097",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "The Design Maxim closing the Pattern Overuse section states that patterns are goals to be forced into every component of a system.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "The Design Maxim states the opposite: patterns are descriptions of solutions, not goals to be forced into every component, and that code should be simplified first, with patterns applied only as refactoring targets when complexity demands it, so the statement as written is false."
  },
  {
    id: "csc302_ch4_098",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "Which of the following creational patterns is correctly matched to its purpose?",
    options: [
      "All of these",
      "Singleton restricts a class to a single, globally accessible instance",
      "Builder separates construction of complex, multi-parameter objects from their final representation",
      "None of these"
    ],
    correctAnswer: 0,
    explanation: "The Creational Patterns section confirms Singleton restricts a class to a single, globally accessible instance, supporting the first specific option.\n\nThe same section confirms Builder separates the construction of complex, multi-parameter objects from their final representation, supporting the second specific option.\n\nBecause both matches are accurate, \"All of these\" is correct.\n\n\"None of these\" cannot apply since both pairings are directly supported by the source."
  },
  {
    id: "csc302_ch4_099",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "A logging utility needs exactly one globally reachable instance shared by every part of an application. Setting aside the pattern's later critiques, which Creational pattern was originally designed for this need?",
    options: [
      "Singleton",
      "Adapter",
      "Observer",
      "State"
    ],
    correctAnswer: 0,
    explanation: "The Creational Patterns section defines Singleton as restricting a class to a single, globally accessible instance, matching a logging utility that needs exactly one shared instance.\n\nAdapter is a Structural pattern for translating incompatible interfaces, unrelated to enforcing a single instance.\n\nObserver is a Behavioral pattern for one-to-many state-change notification, not instance restriction.\n\nState is a Behavioral pattern for changing an object's behavior based on its internal state, not instance restriction."
  },
  {
    id: "csc302_ch4_100",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "Which of these is a specific outcome the source attaches to a named GoF pattern category?",
    options: [
      "None of these",
      "Behavioral patterns compose classes and objects into tree-shaped part-whole hierarchies",
      "Creational patterns define communication patterns between objects at runtime",
      "All of these"
    ],
    correctAnswer: 0,
    explanation: "The Gang of Four section assigns composing objects into part-whole hierarchies to Structural patterns, not Behavioral ones, so the first specific option is unsupported.\n\nThe same section assigns defining communication patterns between objects to Behavioral patterns, not Creational ones, so the second specific option is also unsupported.\n\nBecause neither specific option matches the source's actual category definitions, \"None of these\" is correct.\n\n\"All of these\" cannot apply since both specific claims swap the categories described in the source."
  },
  {
    id: "csc302_ch4_101",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "Structural design patterns are described in the source as being primarily concerned with which activity?",
    options: [
      "Composing classes and objects into larger structures",
      "Abstracting the instantiation process for new objects, the concern the Gang of Four section assigns to Creational patterns instead of Structural ones",
      "Defining communication patterns between objects",
      "Compiling code more quickly through static monomorphization"
    ],
    correctAnswer: 0,
    explanation: "The Gang of Four section defines Structural patterns as composing classes and objects into larger structures.\n\nAbstracting the instantiation process describes the Creational category, a different group.\n\nDefining communication patterns between objects describes the Behavioral category, a different group.\n\nStatic monomorphization is a Rust compilation detail discussed in Part VII, unrelated to the GoF Structural category."
  },
  {
    id: "csc302_ch4_102",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "A developer wraps a plain FileInputStream inside a BufferedInputStream to add buffering behavior without subclassing FileInputStream itself. Which GoF pattern is being used?",
    options: [
      "Decorator",
      "Builder",
      "Factory Method",
      "Singleton"
    ],
    correctAnswer: 0,
    explanation: "This is the exact Decorator Usage example from the source, wrapping a basic input stream to dynamically attach responsibilities without subclassing, matching the Decorator pattern.\n\nBuilder separates multi-parameter construction from a final representation, unrelated to wrapping an existing stream object.\n\nFactory Method lets subclasses decide which exact class to instantiate, a different creational concern from wrapping an instance.\n\nSingleton restricts a class to one globally accessible instance, unrelated to wrapping behavior around an object."
  },
  {
    id: "csc302_ch4_103",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "Stack allocation in the Stack vs. Heap Allocations section is described as super-fast, thread-local storage that is cleaned up automatically under which condition?",
    options: [
      "When execution leaves scope",
      "Only when the garbage collector runs a Mark-and-Sweep pass",
      "Only when the reference count on the value reaches zero",
      "Only when the program terminates entirely"
    ],
    correctAnswer: 0,
    explanation: "The Stack vs. Heap Allocations section states the Stack is super-fast, thread-local allocation, cleaned up automatically when execution leaves scope.\n\nMark-and-Sweep is a Heap garbage collection strategy for reference-type objects, not how the Stack is cleaned up.\n\nReference counting is likewise a Heap garbage collection strategy, unrelated to Stack cleanup.\n\nWaiting until program termination contradicts the description of scope-based, automatic Stack cleanup."
  },
  {
    id: "csc302_ch4_104",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "What cost is attached to allocating objects on the heap?",
    options: [
      "Runtime system calls to find free memory blocks, leading to performance costs and memory fragmentation",
      "A mandatory compile-time error if more than one object is allocated anywhere in the running program",
      "An automatic conversion of the object into a stack-allocated value type",
      "A requirement that the object implement the Observer pattern"
    ],
    correctAnswer: 0,
    explanation: "The Heap Cost note states that allocating on the heap requires runtime system calls to find free memory blocks, leading to performance costs and memory fragmentation.\n\nA mandatory compile-time error for multiple allocations is not described anywhere in this section.\n\nAutomatic conversion to a stack-allocated value type contradicts the section's framing of the Heap as where reference types live, separate from the Stack.\n\nA requirement to implement Observer is unrelated to heap allocation costs."
  },
  {
    id: "csc302_ch4_105",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "Mark-and-Sweep garbage collection destroys an object immediately once its active reference count hits zero, but cannot naturally handle cyclical references.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "The Garbage Collection Strategies section attaches destroying an object immediately when its reference count hits zero, and the resulting inability to naturally handle cyclical references, to Reference Counting, not Mark-and-Sweep. Mark-and-Sweep instead starts at root references, marks all reachable objects, and sweeps the rest, introducing periodic Stop-the-World pauses rather than tracking reference counts, so the statement as written is false."
  },
  {
    id: "csc302_ch4_106",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "Mark-and-Sweep garbage collection starts at root references and marks reachable objects. What tradeoff does the source attach to this strategy?",
    options: [
      "Periodic, latency-inducing \"Stop-the-World\" pauses",
      "An inability to ever reclaim any unreachable object",
      "A requirement that every object be allocated on the Stack instead of the Heap",
      "A dependency on the Dependency Inversion Principle"
    ],
    correctAnswer: 0,
    explanation: "The Garbage Collection Strategies section states Mark-and-Sweep introduces periodic, latency-inducing \"Stop-the-World\" pauses, after marking all reachable objects from root references and sweeping the rest.\n\nMark-and-Sweep is specifically designed to reclaim unreachable objects, not to be incapable of doing so.\n\nRequiring exclusively Stack allocation contradicts the Heap being where these reference-type objects live.\n\nDependency Inversion is a SOLID principle from Part IV, unrelated to garbage collection strategy tradeoffs."
  },
  {
    id: "csc302_ch4_107",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "The OOP Performance Problem describes an array of objects in Java or Python as actually being an array of what?",
    options: [
      "Pointers to distant heap locations",
      "Contiguous primitive values stored inline on the Stack",
      "Preconditions and postconditions checked at each access",
      "Cloned prototype instances generated at compile time"
    ],
    correctAnswer: 0,
    explanation: "The Cost of Indirection section states the OOP Performance Problem: an array of objects in Java or Python is actually an array of pointers to distant heap locations, and iterating through it triggers constant cache misses, called pointer chasing.\n\nContiguous inline primitives on the Stack describes the Data-Oriented Design goal discussed later in Part VII, the opposite of this pointer-chasing problem.\n\nPreconditions and postconditions belong to Eiffel's Design by Contract, unrelated to this memory layout issue.\n\nCloned prototype instances belong to the Self language's object model, unrelated to array memory layout."
  },
  {
    id: "csc302_ch4_108",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "Why do CPUs rely heavily on high-speed L1, L2, and L3 caches?",
    options: [
      "Because reading data from main memory is relatively slow, even though modern CPUs are fast",
      "Because reading data from main memory is faster than reading from any on-chip cache built into the processor",
      "Because every garbage collector's Mark-and-Sweep pass requires a dedicated hardware cache to run",
      "Because caches store every object's private fields for security purposes"
    ],
    correctAnswer: 0,
    explanation: "The Cost of Indirection section states modern CPUs are incredibly fast, but reading data from main memory is relatively slow, so CPUs rely on high-speed caches that load contiguous memory lines.\n\nClaiming main memory is faster than cache reverses the actual relationship described in the source.\n\nCaches being required for Mark-and-Sweep to run at all is not a claim made anywhere in this section.\n\nCaches storing private fields for security purposes is not mentioned anywhere in this section."
  },
  {
    id: "csc302_ch4_109",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "In the Diamond Problem, class D inherits from B and C, which both inherit from A and both override foo(). What is the resulting ambiguity?",
    options: [
      "D does not know which foo() to use",
      "D is prevented from ever calling foo() at all",
      "A's original foo() is automatically deleted from the hierarchy",
      "B and C are merged into a single class at compile time"
    ],
    correctAnswer: 0,
    explanation: "The Multiple Inheritance and Diamond Problem section states that when A defines foo(), B overrides it, and C overrides it, D does not know which foo() to use.\n\nD being prevented from calling foo() at all is not the ambiguity described; the issue is which version applies, not total inaccessibility.\n\nA's original foo() being deleted is not described anywhere in this section.\n\nB and C merging into a single class is not part of the Diamond Problem as described."
  },
  {
    id: "csc302_ch4_110",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "How does Java resolve the Diamond Problem compared to C++'s virtual inheritance and scope resolution operators?",
    options: [
      "Java forbids multiple class inheritance entirely, allowing multiple interface implementation instead",
      "Java uses the identical virtual inheritance mechanism that C++ uses",
      "Java requires every diamond hierarchy to be resolved manually using reference counting",
      "Java resolves it using the Composite design pattern automatically at compile time"
    ],
    correctAnswer: 0,
    explanation: "The Multiple Inheritance and Diamond Problem section states the Java/C# Solution is that multiple class inheritance is forbidden; classes can only inherit from one parent class but can implement multiple interfaces.\n\nUsing the identical virtual inheritance mechanism describes the C++ Solution, not Java's differing approach.\n\nManual resolution via reference counting is not described anywhere in this section; reference counting is a garbage collection strategy discussed elsewhere.\n\nAutomatic resolution via the Composite pattern is not mentioned anywhere in this section."
  },
  {
    id: "csc302_ch4_111",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "Composition over Inheritance recommends assembling complex behaviors from small, interchangeable components rather than extending base classes.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "The Composition over Inheritance section states this exactly: constructing complex behaviors by assembling small, interchangeable components, HAS-A relationships, rather than extending base classes, IS-A relationships, confirming the statement is true."
  },
  {
    id: "csc302_ch4_112",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "In the Composition in Practice example, instead of a FlyingCar extending both Car and Plane, what design does the source recommend?",
    options: [
      "Give the Car object a private FlightEngine property to keep components independent and easier to test",
      "Have FlyingCar extend only Plane, then implement a Car interface for the remaining behavior",
      "Make FlyingCar a Singleton so that only one flying car instance can ever exist in the program",
      "Wrap Car inside a BufferedInputStream-style decorator to add flight behavior"
    ],
    correctAnswer: 0,
    explanation: "The Composition in Practice example states that instead of a FlyingCar extending Car and Plane, giving the Car object a private FlightEngine property keeps the components independent and easier to test.\n\nHaving FlyingCar extend Plane and implement a Car interface is not the solution given; the source avoids inheritance from either Car or Plane altogether.\n\nMaking FlyingCar a Singleton is unrelated to the composition-based fix described here.\n\nWrapping Car in a stream-style decorator is not part of this example; the FlightEngine is added as a property, not a stream wrapper."
  },
  {
    id: "csc302_ch4_113",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "Which of the following is a consequence of relying on high-level inheritance models?",
    options: [
      "All of these",
      "Changes to a base class propagate throughout the subclass hierarchy",
      "High-level inheritance models are the preferred way to assemble complex, interchangeable behaviors",
      "None of these"
    ],
    correctAnswer: 1,
    explanation: "The Composition over Inheritance section states changes to a base class propagate throughout the subclass hierarchy, so this claim is accurate.\n\nThe same section explicitly recommends assembling complex, interchangeable behaviors through composition instead of high-level inheritance, precisely because such inheritance produces the rigidity just described, so claiming inheritance is the preferred way to assemble such behaviors contradicts the section.\n\nBecause only the propagation claim is supported, \"All of these\" does not apply.\n\n\"None of these\" also does not apply, since the propagation claim is directly confirmed by the source."
  },
  {
    id: "csc302_ch4_114",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "A game engine stores objects as an array of pointers to heap locations, and iterating over the array causes repeated cache misses. Which term does the source use for this specific slowdown?",
    options: [
      "Pointer chasing",
      "The Procedural Trap",
      "The Diamond Problem",
      "Stop-the-World pausing"
    ],
    correctAnswer: 0,
    explanation: "The Cost of Indirection section names this exact slowdown pointer chasing, caused by iterating through an array of pointers to distant heap locations and triggering constant cache misses.\n\nThe Procedural Trap is the earlier Part I problem of refactoring every procedure when a data structure's representation changes, unrelated to cache misses.\n\nThe Diamond Problem concerns ambiguous method resolution under multiple inheritance, not cache performance.\n\nStop-the-World pausing is Mark-and-Sweep's latency tradeoff, a different memory-related cost from pointer chasing."
  },
  {
    id: "csc302_ch4_115",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "Heap-allocated objects in a managed language have lifecycles that are dynamic and independent of individual function frames, unlike Stack-allocated values.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "The Stack vs. Heap Allocations section states Heap, Reference Types, objects have lifecycles that are dynamic and independent of individual function frames, in contrast to Stack values that are cleaned up automatically when execution leaves scope, confirming the statement is true."
  },
  {
    id: "csc302_ch4_116",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "A class D would inherit conflicting overridden versions of foo() from two parent classes B and C that both descend from a common class A. Which design issue does this scenario represent?",
    options: [
      "The Diamond Problem of multiple inheritance",
      "The OOP Performance Problem of pointer chasing",
      "The Heap Cost of runtime memory allocation",
      "The Procedural Trap of refactoring shared data structures"
    ],
    correctAnswer: 0,
    explanation: "This scenario is precisely the Diamond Problem described in the Multiple Inheritance section: D does not know which foo() to use when B and C both override a method inherited from a common ancestor A.\n\nThe OOP Performance Problem concerns cache misses from pointer chasing during array iteration, not ambiguous method inheritance.\n\nThe Heap Cost concerns runtime system calls needed to find free memory blocks, unrelated to inheritance ambiguity.\n\nThe Procedural Trap concerns refactoring every procedure when a data structure's representation changes, unrelated to this inheritance scenario."
  },
  {
    id: "csc302_ch4_117",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "Linus Torvalds criticized C++ and OOP for what specific effect on operating system development?",
    options: [
      "Hiding crucial hardware states, making operating system development difficult to debug",
      "Making it impossible to compile any operating system kernel at all",
      "Requiring every kernel module to use the Singleton pattern",
      "Forcing kernel developers to abandon the C programming language entirely"
    ],
    correctAnswer: 0,
    explanation: "The Classic Critiques of OOP section states Linus Torvalds criticized C++ and OOP for hiding crucial hardware states, making operating system development difficult to debug.\n\nMaking kernel compilation impossible entirely is not the critique described in the source.\n\nRequiring the Singleton pattern in kernel modules is not mentioned anywhere in this section.\n\nForcing developers to abandon C entirely is not part of Torvalds' critique as described here."
  },
  {
    id: "csc302_ch4_118",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "Rich Hickey, the creator of Clojure, argued that state updates should be treated as functional timelines of immutable values rather than what?",
    options: [
      "In-place mutations of mutable state inside logical objects",
      "Messages passed asynchronously between isolated objects running on separate virtual machines",
      "Contracts checked automatically through preconditions and postconditions at every method call",
      "Pointers chased repeatedly across many distant, cache-unfriendly heap locations"
    ],
    correctAnswer: 0,
    explanation: "The Classic Critiques of OOP section states Rich Hickey argued placing mutable states inside logical objects is fundamentally complex, and that state updates should be treated as functional timelines of immutable values rather than in-place mutations.\n\nAsynchronous message passing between isolated objects describes Smalltalk's design, not Hickey's critique of mutation.\n\nContracts with preconditions and postconditions describe Eiffel's Design by Contract, unrelated to Hickey's argument.\n\nPointer chasing across heap locations is a Part VI performance topic, unrelated to Hickey's critique of mutable state."
  },
  {
    id: "csc302_ch4_119",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "Data-Oriented Design organizes data contiguously in memory arrays to optimize which resource?",
    options: [
      "CPU cache usage",
      "Disk storage capacity",
      "Network bandwidth between distributed servers",
      "The number of interfaces a class can implement"
    ],
    correctAnswer: 0,
    explanation: "The Data-Oriented Design section states DOD organizes data contiguously in memory arrays, arrays of structures versus structures of arrays, to optimize CPU cache usage.\n\nDisk storage capacity is not the resource this section discusses optimizing.\n\nNetwork bandwidth between servers is not discussed in this section.\n\nThe number of interfaces a class can implement is an ISP-related concern from Part IV, unrelated to DOD's memory layout goal."
  },
  {
    id: "csc302_ch4_120",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "An Entity Component System represents game worlds as flat arrays of raw data component structures, with stateless systems processing them in bulk.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "The Data-Oriented Design section states ECS represents game worlds as flat arrays of raw data component structures, with stateless systems processing them in bulk, confirming the statement is true."
  },
  {
    id: "csc302_ch4_121",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "How does the source define Traits in modern languages such as Scala, PHP, and Rust?",
    options: [
      "Pluggable collections of methods that can be injected into classes without establishing parental hierarchies",
      "Parameterized class expressions that allow class definitions to be composed dynamically at load time by the runtime",
      "Flat arrays of raw data component structures processed in bulk by stateless systems every frame",
      "Formal, checkable agreements declared between software components"
    ],
    correctAnswer: 0,
    explanation: "The Traits and Mixins section defines Traits as pluggable collections of methods that can be injected into classes to share capabilities without establishing parental hierarchies.\n\nParameterized class expressions composed dynamically describe Mixins, a different mechanism from Traits within the same section.\n\nFlat arrays of raw data components describe ECS under Data-Oriented Design, unrelated to Traits.\n\nFormal, checkable agreements describe Eiffel's Design by Contract, unrelated to Traits."
  },
  {
    id: "csc302_ch4_122",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "Rust's Trait System compiles shared behavior using which two mechanisms, in the absence of traditional inheritance?",
    options: [
      "Static monomorphization or dynamic dispatch tables",
      "Reference counting or Mark-and-Sweep collection",
      "Method overloading or generic templates",
      "Preconditions or postconditions"
    ],
    correctAnswer: 0,
    explanation: "The Traits and Mixins section states Rust uses traits to define shared behavior, with no inheritance, compiled using static monomorphization or dynamic dispatch tables.\n\nReference counting and Mark-and-Sweep are garbage collection strategies from Part VI, unrelated to how Rust compiles trait behavior.\n\nMethod overloading and generic templates describe Ad-hoc and Parametric Polymorphism from Part II, not Rust's trait compilation.\n\nPreconditions and postconditions belong to Eiffel's Design by Contract, unrelated to Rust's trait system."
  },
  {
    id: "csc302_ch4_123",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "Under Nominal Typing, as used in Java and C++, how is type compatibility determined?",
    options: [
      "By explicit class names and inheritance declarations",
      "By the shape and structure of a type's public interface, regardless of its declared name",
      "By whether a struct defines a Read(p []byte) method",
      "By whether a type was created by cloning an existing prototype"
    ],
    correctAnswer: 0,
    explanation: "The Type Systems section defines Nominal Typing, used in Java and C++, as type compatibility determined by explicit class names and inheritance declarations.\n\nDetermining compatibility by the shape of the public interface regardless of declared name describes Structural Typing, the contrasting approach in the same section.\n\nThe Read(p []byte) example is specifically used to illustrate Go's Structural Typing, not Nominal Typing.\n\nCompatibility via prototype cloning describes the Self language's object model, unrelated to type systems in this section."
  },
  {
    id: "csc302_ch4_124",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "In Go, a struct that defines a Read(p []byte) method automatically implements the io.Reader interface without an explicit implements keyword. What does this illustrate?",
    options: [
      "Structural Typing, where compatibility depends on the shape of the public interface",
      "Nominal Typing, where compatibility depends on explicit class names",
      "The Diamond Problem of ambiguous multiple inheritance",
      "The Prototype Paradigm of cloning existing objects"
    ],
    correctAnswer: 0,
    explanation: "The Go's Implicit Interfaces example illustrates Structural Typing, where type compatibility is determined by the shape and structure of the public interface, regardless of its declared name.\n\nNominal Typing would require an explicit declaration tying the struct to io.Reader by name, which this example specifically shows Go does not require.\n\nThe Diamond Problem concerns ambiguous method resolution under multiple inheritance, unrelated to implicit interface satisfaction.\n\nThe Prototype Paradigm concerns cloning existing objects in Self, unrelated to Go's structural interface matching."
  },
  {
    id: "csc302_ch4_125",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "The Hybrid Synthesis section describes modern multi-paradigm languages as encouraging developers to encapsulate structural components using objects while processing internal data pipelines using what?",
    options: [
      "Pure, immutable functional pipelines",
      "Unrestricted GOTO-driven control flow",
      "Global variables shared across every module",
      "Static, compile-time-only method resolution"
    ],
    correctAnswer: 0,
    explanation: "The Hybrid Synthesis section states modern languages such as Kotlin, Swift, Scala, Python, and Rust encourage encapsulating structural components using objects while processing internal data pipelines using pure, immutable functional pipelines.\n\nGOTO-driven control flow is the Part I spaghetti code problem that OOP itself was a reaction against, not a feature of modern hybrid languages.\n\nGlobal shared variables are the Functional Decomposition flaw from Part I, not a hybrid-language recommendation.\n\nStatic, compile-time-only resolution describes Ad-hoc Polymorphism's overloading, not the functional pipeline processing described here."
  },
  {
    id: "csc302_ch4_126",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "The boundary between pure Functional Programming and pure Object-Oriented Programming has become more rigid in modern language design.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "The Hybrid Synthesis section states the opposite of this claim: the boundary between pure Functional Programming and pure OOP has largely dissolved, with modern languages such as Kotlin, Swift, Scala, Python, and Rust being multi-paradigm, so the statement as written is false."
  },
  {
    id: "csc302_ch4_127",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "In the Closing Thoughts, what does the source identify as the Ultimate Takeaway about Object-Oriented Programming?",
    options: [
      "It remains one of the most successful conceptual models for organizing human thought into maintainable software",
      "It has been entirely replaced by Data-Oriented Design across every domain of modern software engineering practiced today",
      "It guarantees correctness automatically for any codebase that consistently follows the SOLID principles",
      "It should always be avoided today in favor of purely functional, immutable programming"
    ],
    correctAnswer: 0,
    explanation: "The Conclusion states the Ultimate Takeaway: OOP remains one of the most successful conceptual models for organizing human thoughts into maintainable software, but its effectiveness depends on how pragmatically it is applied.\n\nClaiming OOP has been entirely replaced by DOD contradicts the Conclusion's framing of OOP as still one of the most successful models.\n\nSOLID is described as reducing rigidity and fragility, not as a guarantee of automatic correctness.\n\nAlways avoiding OOP in favor of pure functional programming contradicts the Conclusion's advice to choose whichever paradigm best fits the problem."
  },
  {
    id: "csc302_ch4_128",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "Which of the following is explicitly advised in the source's Conclusion for applying OOP pragmatically?",
    options: [
      "All of these",
      "Avoiding deep inheritance hierarchies and excessive design abstractions",
      "Focusing on clear interfaces, low coupling, and composition",
      "None of these"
    ],
    correctAnswer: 0,
    explanation: "The Conclusion states developers should avoid deep inheritance hierarchies and excessive design abstractions, supporting the first specific option.\n\nThe same Conclusion states the focus should be on clear interfaces, low coupling, and composition, supporting the second specific option.\n\nBecause both specific pieces of advice are stated directly in the Conclusion, \"All of these\" is correct.\n\n\"None of these\" cannot apply since both pieces of advice are explicitly given."
  },
  {
    id: "csc302_ch4_129",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "How should a developer choose between the OOP, Functional, and Data-Oriented paradigms for a given project?",
    options: [
      "By choosing whichever paradigm best fits the problem at hand",
      "By always defaulting to OOP regardless of the problem's characteristics",
      "By always defaulting to Data-Oriented Design for every performance-sensitive domain regardless of the project's actual requirements",
      "By letting the Singleton pattern determine the architecture automatically"
    ],
    correctAnswer: 0,
    explanation: "The Conclusion states developers should choose the paradigm, whether OOP, Functional, or Data-Oriented, that best fits the problem at hand.\n\nAlways defaulting to OOP regardless of fit contradicts the Conclusion's explicit call for choosing based on the problem.\n\nAlways defaulting to Data-Oriented Design for every performance-sensitive domain overstates the source, which frames DOD as one option among several fitted to specific domains like game engines.\n\nLetting the Singleton pattern determine architecture is unrelated to this paradigm-choice guidance and contradicts the earlier critique of Singleton as an anti-pattern."
  },
  {
    id: "csc302_ch4_130",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "A performance-critical game engine reorganizes its entity data into flat, contiguous arrays processed in bulk by stateless systems, moving away from traditional class-based objects. Which modern horizon does this reflect?",
    options: [
      "Data-Oriented Design, including the Entity Component System approach",
      "The Prototype Paradigm introduced by Self",
      "Design by Contract as introduced by Eiffel",
      "The Dependency Inversion Principle from SOLID"
    ],
    correctAnswer: 0,
    explanation: "The Data-Oriented Design section describes exactly this shift: organizing data contiguously in memory arrays to optimize CPU cache usage, with ECS representing game worlds as flat arrays of raw data components processed in bulk by stateless systems.\n\nThe Prototype Paradigm concerns cloning existing objects instead of using classes, not flat contiguous data arrays for performance.\n\nDesign by Contract concerns checkable preconditions, postconditions, and invariants, unrelated to memory layout for performance.\n\nThe Dependency Inversion Principle concerns high-level modules depending on abstractions, unrelated to contiguous memory layout for cache performance."
  }
];

export default csc302Chapter4Questions;
