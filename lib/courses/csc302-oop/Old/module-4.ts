import { QuestionV2 } from "@/lib/quiz-types";

const csc302Module4: QuestionV2[] = [
  {
    id: "csc302_ch4_001",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "What was the primary cause of the software development bottleneck during the 1960s as hardware rapidly advanced?",
    options: [
      "Scaling imperative design led to unmanageable cognitive load for programmers.",
      "Development environments lacked sufficient random access memory for large software.",
      "Academic institutions failed to produce enough engineers to meet industry demands.",
      "Hardware limitations artificially restricted the scope of most commercial applications.",
    ],
    correctAnswer: 0,
    explanation:
      "According to the slides, the core issue of the 1960s software crisis was that scaling procedural and imperative design led to an unmanageable cognitive load for programmers. Software development techniques remained primitive despite hardware advancements.",
  },
  {
    id: "csc302_ch4_002",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "Academic and industry leaders officially coined the term 'Software Crisis' at the 1968 NATO Conference to describe the inability to write reliable, massive systems.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0, // True
    explanation:
      "The slides explicitly confirm that academic and industry leaders officially coined the term 'Software Crisis' at the 1968 NATO Conference. This described the inability to write reliable and massive systems at the time.",
  },
  {
    id: "csc302_ch4_003",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "Why does spaghetti code make mental tracking of execution states nearly impossible for software engineers?",
    options: [
      "It relies heavily on strict type systems that obscure the original program logic.",
      "It uses unrestricted jumps causing execution states to change in non-linear ways.",
      "It organizes data and procedures into disjointed functional decomposition blocks.",
      "It heavily utilizes subtype polymorphism making dynamic dispatch unpredictable.",
    ],
    correctAnswer: 1,
    explanation:
      "The slides note that early programs relied on unrestricted jumps using GOTO statements. This tangled logic caused execution state to change arbitrarily in non-linear ways, exceeding human cognitive bandwidth as noted by Dijkstra.",
  },
  {
    id: "csc302_ch4_004",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "What critical flaw was identified in standard Functional Decomposition prior to the advent of Object-Oriented Programming?",
    options: [
      "Developers were strictly forced to use asynchronous messaging paradigms over local calls.",
      "Memory was strictly allocated to the heap space causing aggressive hardware fragmentation.",
      "Data structures and the procedures that operated on them were treated as separate entities.",
      "Deep hierarchical inheritance models inherently resulted in tightly coupled architectures.",
    ],
    correctAnswer: 2,
    explanation:
      "Prior to OOP, Functional Decomposition divided problems into step-by-step procedures, but crucially treated data and procedures as separate entities. If the underlying data structure changed, every procedure interacting with it had to be manually refactored.",
  },
  {
    id: "csc302_ch4_005",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "The transition from procedural execution to Object-Oriented Programming involved organizing code around which linguistic concept?",
    options: [
      "Verbs, representing step-by-step sequential procedures to process global data structures.",
      "Adjectives, describing the dynamic behavior of complex memory layouts during execution.",
      "Adverbs, denoting the speed of asynchronous message passing between internal processes.",
      "Nouns, representing structural components and unifying data into self-contained models.",
    ],
    correctAnswer: 3,
    explanation:
      "Software engineers realized they needed to organize code around structural components (nouns, like 'The Customer account') rather than actions (verbs). This conceptual leap unified data and operations into mathematical models.",
  },
  {
    id: "csc302_ch4_006",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "Which Object-Oriented Programming pillar acts as a cellular structure containing private states accessible only through public methods?",
    options: [
      "Inheritance hierarchies sharing specialized methods.",
      "Polymorphism resolving dynamic method signatures.",
      "Encapsulation hiding internal states within objects.",
      "Abstraction extracting high-level system features.",
    ],
    correctAnswer: 2,
    explanation:
      "Encapsulation mechanism treats objects as cellular structures containing private states. Direct modification from the outside is forbidden, forcing access through public methods like getters or setters.",
  },
  {
    id: "csc302_ch4_007",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "According to David Parnas' Criterion established in 1972, what specific elements should a software architecture strive to hide?",
    options: [
      "The hierarchical taxonomy of the underlying domain object models.",
      "Internal design decisions that are highly likely to change over time.",
      "Public interfaces that connect completely unrelated application systems.",
      "Technical information regarding automated garbage collection processes.",
    ],
    correctAnswer: 1,
    explanation:
      "David Parnas established that systems should hide design decisions that are likely to change. Clients should only depend on stable, abstract interfaces.",
  },
  {
    id: "csc302_ch4_008",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "In Object-Oriented design, properly utilizing Abstraction prevents 'leaky abstractions' where internal, irrelevant implementation details surface and disrupt calling modules.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0, // True
    explanation:
      "The slides state that properly using Abstraction prevents 'leaky abstractions.' This phenomenon happens when internal, irrelevant implementation details surface and disrupt the caller's logic.",
  },
  {
    id: "csc302_ch4_009",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "In languages like Java and C#, when is it most appropriate to use an Abstract Class instead of an Interface?",
    options: [
      "When unrelated classes share common stateless CAN-DO capabilities.",
      "When developers need to define pure behavioral interface contracts.",
      "When the system requires automated garbage collection management.",
      "When classes share closely related identities and maintain instance states.",
    ],
    correctAnswer: 3,
    explanation:
      "Abstract classes are used when classes share closely related identities (IS-A relationships) and can maintain member states (instance variables). Interfaces are used for pure behavior contracts across unrelated classes.",
  },
  {
    id: "csc302_ch4_010",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "Which phrase best distinguishes subtyping from subclassing in Object-Oriented inheritance?",
    options: [
      "Subtyping establishes type compatibility, while subclassing shares internal implementation logic.",
      "Subtyping defines specific data layouts, while subclassing enforces asynchronous message passing.",
      "Subtyping restricts external property access, while subclassing opens all variables globally.",
      "Subtyping completely eliminates garbage collection, while subclassing explicitly manages the heap.",
    ],
    correctAnswer: 0,
    explanation:
      "Subclassing is about sharing implementation code, reusing logic written in a parent. Subtyping establishes interface compatibility, guaranteeing a child class can be safely substituted where the parent is expected.",
  },
  {
    id: "csc302_ch4_011",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "Which polymorphism mechanism involves resolving multiple methods with the same name but different signatures at compile time?",
    options: [
      "Parametric polymorphism using compile-time templates.",
      "Subtype polymorphism assigning subclass instances dynamically.",
      "Ad-hoc polymorphism involving method overloading at compile time.",
      "Dynamic type execution determining runtime behavior signatures.",
    ],
    correctAnswer: 2,
    explanation:
      "Ad-hoc polymorphism refers to method overloading. It resolves multiple methods possessing the same name but different signatures during compile time.",
  },
  {
    id: "csc302_ch4_012",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "What describes the mechanism that determines which actual implementation of an overridden method is invoked at runtime?",
    options: [
      "The compile-time process of resolving overloaded methods with different signatures.",
      "The memory management strategy identifying unreachable hierarchical objects.",
      "The runtime mechanism determining which overridden method implementation to invoke.",
      "The instantiation process where objects copy states from existing memory prototypes.",
    ],
    correctAnswer: 2,
    explanation:
      "Dynamic Dispatch is defined as the mechanism that determines which actual implementation of an overridden method is invoked at runtime. It functions alongside subtype polymorphism.",
  },
  {
    id: "csc302_ch4_013",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "The creators of Simula 67 developed the language primarily to model which type of scenario?",
    options: [
      "Database transaction systems processing massive arrays of financial accounting records.",
      "Real-world physical simulations like analyzing ships crossing actively managed docks.",
      "Interactive television set-top boxes displaying localized cable network programming.",
      "Web browser scripting handling asynchronous interactive client-side rendering events.",
    ],
    correctAnswer: 1,
    explanation:
      "Dahl and Nygaard created Simula 67 to design models of real-world physics processes. Specifically, they were attempting to simulate ships crossing docks and passing through locks.",
  },
  {
    id: "csc302_ch4_014",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "Alan Kay conceptually designed Smalltalk architecture to reflect the structural behavior of which biological entity?",
    options: [
      "Complex neural pathways processing unpredictable environmental stimuli concurrently.",
      "Rigid skeletal frameworks providing reliable architectural support for internal organs.",
      "Microscopic viral organisms aggressively replicating inside centralized host environments.",
      "Biological cellular structures isolating state and communicating via asynchronous messages.",
    ],
    correctAnswer: 3,
    explanation:
      "Alan Kay, originally a biologist, conceptualized software objects in Smalltalk as biological cells communicating through messages. He envisioned them as isolated computers on a network.",
  },
  {
    id: "csc302_ch4_015",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "Smalltalk includes a wide array of primitive data types to handle basic arithmetic operations and control structures.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1, // False
    explanation:
      "The slides state that Smalltalk is a purely object-oriented language. There are no primitive data types; numbers, classes, and control structures are all treated strictly as objects reacting to messages.",
  },
  {
    id: "csc302_ch4_016",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "Bjarne Stroustrup's philosophy of 'Zero-Cost Abstraction' in C++ implies what about language features?",
    options: [
      "Programmers only incur performance costs for the exact language abstractions they utilize.",
      "Memory allocations are completely freed from all garbage collection runtime overhead.",
      "Class abstractions automatically resolve the diamond multiple inheritance problem perfectly.",
      "The underlying compiler immediately removes all object-oriented syntax from the binary file.",
    ],
    correctAnswer: 0,
    explanation:
      "Zero-Cost Abstraction in C++ means 'What you don't use, you don't pay for.' It merged Simula's class abstractions with C's speed without forcing unnecessary performance overhead.",
  },
  {
    id: "csc302_ch4_017",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "In Eiffel's Design by Contract, what defines the state guarantees that must remain true for an object's entire lifecycle?",
    options: [
      "Execution postconditions guaranteeing safe operational completion.",
      "Required preconditions strictly validated before method invocation.",
      "Structural invariants representing rules true across the object lifecycle.",
      "Defensive assertions capturing unexpected asynchronous runtime faults.",
    ],
    correctAnswer: 2,
    explanation:
      "Under Design by Contract (DbC), Invariants denote the state guarantees that must always remain true for the object lifecycle. Preconditions occur before invocation, and postconditions after.",
  },
  {
    id: "csc302_ch4_018",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "The Java programming language, originally named 'Oak,' was initially engineered for which specific application domain?",
    options: [
      "Low-level operating system kernel development and process scheduling.",
      "Lightweight browser-side prototype scripting for interactive elements.",
      "High-frequency financial database query processing and management.",
      "Interactive television set-top boxes operating in consumer living rooms.",
    ],
    correctAnswer: 3,
    explanation:
      "Java, created by James Gosling in 1991 under the project name 'Oak', was originally created for interactive television set-top boxes before pivoting to the web in 1995.",
  },
  {
    id: "csc302_ch4_019",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "How does the Self programming language approach the creation of new objects?",
    options: [
      "It uses static factory methods centrally defined inside abstract parent superclasses.",
      "It leverages a global instantiation pattern to rapidly generate identical components.",
      "It eliminates pure classes entirely by directly copying and modifying existing prototypes.",
      "It relies exclusively on compile-time templated macros to map type-safe data structures.",
    ],
    correctAnswer: 2,
    explanation:
      "Self eliminates class factories. It employs a Prototype Paradigm, meaning new objects are created by copying (cloning) existing prototype objects and directly modifying properties on the instance.",
  },
  {
    id: "csc302_ch4_020",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "Brendan Eich wrote JavaScript in just 10 days in 1995, utilizing the minimalist prototype model from Self and Scheme beneath a C-style syntax.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0, // True
    explanation:
      "Brendan Eich wrote JavaScript in 10 days in 1995. He utilized the minimalist prototype model from Self and Scheme, concealing it under a C-style syntax wrapper to 'look like Java'.",
  },
  {
    id: "csc302_ch4_021",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "According to the Single Responsibility Principle, how should cohesion and coupling be managed within a class?",
    options: [
      "System cohesion should be drastically minimized, while component coupling is entirely eliminated.",
      "Internal class cohesion should be actively maximized, while external coupling is strictly minimized.",
      "Execution cohesion and modular coupling must remain mathematically balanced at all given times.",
      "Class cohesion is considered irrelevant as long as structural coupling is rigorously monitored.",
    ],
    correctAnswer: 1,
    explanation:
      "The Single Responsibility Principle (SRP) dictates that a class should have exactly one reason to change. To achieve this, cohesion should be maximized within the class, and coupling minimized.",
  },
  {
    id: "csc302_ch4_022",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "The Open/Closed Principle dictates that software entities should be open for extension but closed for which action?",
    options: [
      "Internal source code modification after deployment.",
      "Extraneous behavioral abstraction across modules.",
      "Runtime dynamic compilation of external scripts.",
      "Arbitrary data distribution across network nodes.",
    ],
    correctAnswer: 0,
    explanation:
      "The Open/Closed Principle (OCP) rule states that software modules should be open for extension, but closed for modification. New features should be introduced without editing existing tested code.",
  },
  {
    id: "csc302_ch4_023",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "Which geometric relationship is cited as the classic violation of the Liskov Substitution Principle?",
    options: [
      "A customized Circle object forcefully inheriting from a rigid generic Sphere baseline structure.",
      "A specialized Triangle model unpredictably overriding the dimension methods of a Polygon class.",
      "A Square subclass dynamically altering both width and height behaviors of a parent Rectangle class.",
      "A mathematical Cylinder routine artificially restricting the total area calculation of a flat Ellipse.",
    ],
    correctAnswer: 2,
    explanation:
      "The classic LSP violation is the Square-Rectangle problem. If a Square extends a Rectangle and overrides width settings to also alter height, functions expecting a consistent Rectangle behavior will break.",
  },
  {
    id: "csc302_ch4_024",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "The Interface Segregation Principle states that clients should not be forced to depend on interfaces they do not use, preferring small and focused interfaces over bloated ones.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0, // True (Flipped from False to achieve 5/5 balance)
    explanation:
      "The Interface Segregation Principle explicitly states that clients should NOT be forced to depend on interfaces they do not use. Developers should prefer many small, highly focused interfaces over a single bloated one.",
  },
  {
    id: "csc302_ch4_025",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "The Dependency Inversion Principle breaks traditional sequential coupling by requiring both high-level and low-level modules to depend on what?",
    options: [
      "Platform-specific hardware implementations determining system performance.",
      "Centralized global singleton instances maintaining unified application states.",
      "Deeply recursive base class hierarchies ensuring consistent memory allocation.",
      "Standardized polymorphic abstractions separating execution and implementation.",
    ],
    correctAnswer: 3,
    explanation:
      "The Dependency Inversion Principle breaks sequential coupling by ensuring high-level and low-level modules both depend on abstractions (interfaces), rather than concrete details depending on each other.",
  },
  {
    id: "csc302_ch4_026",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "Which GRASP pattern suggests assigning a responsibility to the class that already maintains the data necessary to fulfill it?",
    options: [
      "The Controller pattern managing external systems.",
      "The Information Expert pattern holding required data.",
      "The High Cohesion pattern isolating state variables.",
      "The Creator pattern executing object instantiations.",
    ],
    correctAnswer: 1,
    explanation:
      "The Information Expert pattern in GRASP advises developers to assign a responsibility to the class that already maintains the information necessary to fulfill that responsibility.",
  },
  {
    id: "csc302_ch4_027",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "In the GRASP pattern framework, what is the primary role of a Controller object?",
    options: [
      "To establish direct network connections to underlying relational database systems.",
      "To instantiate entirely new child instances whenever an interface class is requested.",
      "To replace complex conditional branching logic with polymorphic runtime method calls.",
      "To serve as the first object beyond the UI layer coordinating major system operations.",
    ],
    correctAnswer: 3,
    explanation:
      "Under GRASP guidelines, the Controller is defined as the first object beyond the User Interface layer that handles and coordinates overarching system operations.",
  },
  {
    id: "csc302_ch4_028",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "When behaviors vary by type, the GRASP Polymorphism pattern recommends assigning responsibility to the target types using polymorphic methods rather than checking type flags.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0, // True
    explanation:
      "The slides state that when behaviors vary by type, GRASP recommends assigning the responsibility to the target types using polymorphic methods rather than explicitly checking type flags.",
  },
  {
    id: "csc302_ch4_029",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "The Gang of Four categorized their 23 design patterns into which three primary groups?",
    options: [
      "Sequential Procedural, Immutable Functional, and High-Performance Data-Oriented.",
      "Flexible Creational, Hierarchical Structural, and Communicative Behavioral.",
      "Rigorous Analytical, Dynamic Synthetic, and Modularized Compositional.",
      "Decoupled Abstract, Extensible Concrete, and Resolvable Polymorphic.",
    ],
    correctAnswer: 1,
    explanation:
      "The 1994 GoF book categorized the 23 repeatable solution templates into three key groups: Creational, Structural, and Behavioral.",
  },
  {
    id: "csc302_ch4_030",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "Which creational pattern defines an interface for creating an object but delegates the exact instantiation decision to its subclasses?",
    options: [
      "The Builder Pattern orchestrating complex steps.",
      "The Singleton Pattern limiting global instances.",
      "The Factory Method Pattern delegating instantiation.",
      "The Adapter Pattern modifying target interfaces.",
    ],
    correctAnswer: 2,
    explanation:
      "The Factory Method defines an interface for creating an object but lets subclasses decide which exact class to instantiate.",
  },
  {
    id: "csc302_ch4_031",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "What specific problem does the Builder pattern primarily solve in object creation?",
    options: [
      "It primarily prevents the unexpected memory fragmentation common in garbage collection cycles.",
      "It cleanly replaces cumbersome overloaded constructors when constructing multi-parameter objects.",
      "It seamlessly translates functionally incompatible external interfaces into expected target structures.",
      "It reliably coordinates asynchronous messaging calls between heavily decentralized application nodes.",
    ],
    correctAnswer: 1,
    explanation:
      "The Builder pattern separates the construction of complex objects from their final representation. It is specifically useful for replacing heavily overloaded constructors when making multi-parameter objects.",
  },
  {
    id: "csc302_ch4_032",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "Which structural pattern serves to translate an incompatible interface into a target interface expected by a client?",
    options: [
      "The Decorator Pattern extending dynamic objects.",
      "The Composite Pattern combining tree hierarchies.",
      "The Strategy Pattern exchanging algorithm families.",
      "The Adapter Pattern wrapping incompatible targets.",
    ],
    correctAnswer: 3,
    explanation:
      "The Adapter pattern operates by translating an incompatible interface into a target interface that the client expects, resolving structural conflicts.",
  },
  {
    id: "csc302_ch4_033",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "The Composite design pattern dynamically attaches additional responsibilities to an individual object at runtime without using subclassing.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1, // False
    explanation:
      "This statement is false. It is the Decorator pattern that dynamically attaches additional responsibilities to an object without subclassing. The Composite pattern deals with tree structures and part-whole hierarchies.",
  },
  {
    id: "csc302_ch4_034",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "How does the Observer pattern manage communication between a changing object and its dependents?",
    options: [
      "It heavily relies on a centralized system controller to manually update each independent dependent sequentially.",
      "It permanently establishes a reliable one-to-many subscription model designed for automatic state notifications.",
      "It strategically wraps every dependent module in an isolated proxy to safely intercept modification method calls.",
      "It quickly creates a global application registry that dependent modules actively query during every software tick.",
    ],
    correctAnswer: 1,
    explanation:
      "The Observer pattern works by establishing a one-to-many subscription model. When one object changes its state, all of its subscribed dependents are notified automatically.",
  },
  {
    id: "csc302_ch4_035",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "Which behavioral pattern allows an object to alter its behavior when its internal state changes, making it appear as if it changed its class?",
    options: [
      "The State Pattern transitioning dynamic lifecycles.",
      "The Observer Pattern notifying multiple dependents.",
      "The Strategy Pattern swapping runtime algorithms.",
      "The Adapter Pattern restructuring existing interfaces.",
    ],
    correctAnswer: 0,
    explanation:
      "The State pattern allows an object to alter its behavior when its internal state changes, appearing as if the object itself completely changed its class.",
  },
  {
    id: "csc302_ch4_036",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "Why is the Singleton pattern widely regarded by modern developers as an anti-pattern?",
    options: [
      "It inherently forces high-level software modules to become dangerously coupled.",
      "It heavily relies on complex prototype delegation causing unexpected system faults.",
      "It notoriously introduces concealed global states complicating isolated unit testing.",
      "It immediately requires exceedingly frequent latency-inducing garbage collection cycles.",
    ],
    correctAnswer: 2,
    explanation:
      "Modern developers critique the Singleton pattern because it introduces global states into application lifecycles and conceals dependencies, which makes isolated unit testing nearly impossible.",
  },
  {
    id: "csc302_ch4_037",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "What phenomenon occurs when developers force complex pattern abstractions into components where simple, flat code would suffice?",
    options: [
      "Extensive Subtype Polymorphism.",
      "Unmanageable Enterprise Bloat.",
      "Perfected Zero-Cost Abstraction.",
      "Overly Restrictive Information Hiding.",
    ],
    correctAnswer: 1,
    explanation:
      "Pattern overuse leads to Enterprise Bloat. Dogmatic adherence to patterns creates over-engineered architectures where developers apply complex abstractions instead of writing simple, flat code.",
  },
  {
    id: "csc302_ch4_038",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "In OOP memory layout, how do heap allocations differ from stack allocations?",
    options: [
      "Heap allocations manage dynamic reference lifecycles independent of specific functional frames.",
      "Heap memory structures are safely and automatically cleaned up immediately when scope is exited.",
      "Heap boundaries represent highly optimized thread-local assignments of core primitive variables.",
      "Heap processing pipelines strictly bypass all operating system runtime calls to avoid fragmentation.",
    ],
    correctAnswer: 0,
    explanation:
      "Heap allocations are for Reference Types, where lifecycles are dynamic and independent of individual function frames. Conversely, Stack allocations are automatically cleaned up when execution leaves the local scope.",
  },
  {
    id: "csc302_ch4_039",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "The Reference Counting garbage collection strategy is highly effective because it naturally handles cyclical object references without any additional logic.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1, // False
    explanation:
      "The slide explicitly outlines that a failure of Reference Counting is that it cannot naturally handle cyclical references (e.g., Object A referencing B, and B referencing A).",
  },
  {
    id: "csc302_ch4_040",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "What performance drawback is typically introduced by the Mark-and-Sweep garbage collection strategy?",
    options: [
      "Infinite recursive compilation loops completely preventing the compiled software from safely executing.",
      "Periodic and latency-inducing 'Stop-the-World' system pauses required to sweep unreachable objects.",
      "Immediate hardware memory leaks caused exclusively by poorly formatted and cyclical object references.",
      "Severe runtime cache misses aggressively triggered by parsing scattered arrays of primitive data structures.",
    ],
    correctAnswer: 1,
    explanation:
      "Mark-and-Sweep garbage collection introduces periodic, latency-inducing 'Stop-the-World' pauses while it scans from root references and sweeps unreachable objects.",
  },
  {
    id: "csc302_ch4_041",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "Why does iterating through an array of objects in languages like Java or Python cause execution slowdowns on modern CPUs?",
    options: [
      "The virtual runtime execution engine forces sequential dynamic dispatch validation on every single iteration.",
      "The automated garbage collector aggressively runs an exhaustive system sweep strictly after every index call.",
      "The contiguous array actually contains distributed pointers to distant heap locations causing severe cache misses.",
      "The hardware processor cannot structurally handle resolving polymorphic method overrides inside execution loops.",
    ],
    correctAnswer: 2,
    explanation:
      "The cost of indirection means that an array of objects in Java or Python is actually an array of pointers pointing to distant heap locations. Iterating this array triggers constant cache misses (pointer chasing).",
  },
  {
    id: "csc302_ch4_042",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "The 'Diamond Problem' in Object-Oriented Programming arises specifically due to which architectural feature?",
    options: [
      "Pure abstract interface implementation requirements.",
      "Deep prototype delegation chain resolutions.",
      "Strict data-oriented memory encapsulation limits.",
      "Complex multiple class inheritance dependencies.",
    ],
    correctAnswer: 3,
    explanation:
      "The Diamond Problem occurs in multiple inheritance architectures when a class inherits from two parent classes that both inherited and overrode a method from a mutual grandparent class.",
  },
  {
    id: "csc302_ch4_043",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "What is the primary advantage of utilizing Composition over Inheritance (CoI) in software design?",
    options: [
      "It structurally guarantees that dynamic subtype polymorphism strictly resolves perfectly during compilation.",
      "It immediately eliminates any overarching technical requirement for dynamic heap memory allocations at runtime.",
      "It efficiently constructs complex domain behaviors by cleanly assembling highly interchangeable modular components.",
      "It securely transforms complex imperative processing logic into pure functional pipelines containing immutable data.",
    ],
    correctAnswer: 2,
    explanation:
      "Composition over Inheritance avoids rigid hierarchies (IS-A) by constructing complex behaviors through assembling small, interchangeable independent components (HAS-A relationships).",
  },
  {
    id: "csc302_ch4_044",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "Why did Linus Torvalds famously criticize C++ and OOP in the context of operating system development?",
    options: [
      "Object-Oriented Programming completely obscures crucial physical hardware states making OS debugging difficult.",
      "Object-Oriented Programming permanently introduces excessive memory management overhead via reference counts.",
      "Object-Oriented Programming arbitrarily enforces strict solid structural principles that impede fast kernel compiling.",
      "Object-Oriented Programming notoriously fails to provide functional abstractions for high-speed network messaging.",
    ],
    correctAnswer: 0,
    explanation:
      "Linus Torvalds critiqued OOP and C++ because they obscure and hide crucial hardware states. This makes low-level operating system development exceedingly difficult to debug.",
  },
  {
    id: "csc302_ch4_045",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "Rich Hickey, the creator of Clojure, praised traditional Object-Oriented Programming for placing mutable states inside logical objects.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1, // False
    explanation:
      "The slides denote this as a critique by Rich Hickey. He argued that placing mutable states inside logical objects is fundamentally complex, suggesting functional timelines of immutable values instead.",
  },
  {
    id: "csc302_ch4_046",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "How does Data-Oriented Design (DOD) optimize CPU cache usage compared to standard OOP?",
    options: [
      "By isolating data variables tightly within private class encapsulations to enforce thread safety.",
      "By organizing raw game data contiguously in flat arrays as highly accessible component structures.",
      "By automatically shifting dynamic object locations during predictable periodic garbage sweeps.",
      "By establishing deep object-oriented class taxonomies specifically to reduce overall memory usage.",
    ],
    correctAnswer: 1,
    explanation:
      "Data-Oriented Design moves away from scattered OOP objects by organizing data contiguously in memory arrays (structures of arrays instead of arrays of structures). This optimizes CPU cache usage.",
  },
  {
    id: "csc302_ch4_047",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "In modern languages like Scala and Rust, what are 'Traits'?",
    options: [
      "Foundational primitive data representations designed exclusively for optimizing complex algorithmic operations.",
      "Purely functional execution blocks purposefully maintaining strict structural isolation from overarching states.",
      "Centralized singleton components comprehensively managing continuous high-speed interactions inside kernels.",
      "Pluggable collections of specialized methods dynamically injected into classes avoiding rigid class hierarchies.",
    ],
    correctAnswer: 3,
    explanation:
      "Traits are defined in the slides as pluggable collections of methods that can be injected into classes to share capabilities without establishing strict parental hierarchies.",
  },
  {
    id: "csc302_ch4_048",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "How is type compatibility determined in a Structural Typing system like TypeScript or Go?",
    options: [
      "It relies exclusively on the physical structural shape of the available public interface.",
      "It is determined strictly by explicit class naming and rigid inheritance declarations.",
      "It is resolved dynamically via the exact physical alignment of components in the heap.",
      "It is mathematically validated through checking behavioral postconditions in a contract.",
    ],
    correctAnswer: 0,
    explanation:
      "In a Structural Typing system, type compatibility is determined entirely by the shape and structure of the public interface, regardless of explicitly declared names or inheritance hierarchies.",
  },
  {
    id: "csc302_ch4_049",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "In Go, a struct must utilize an explicit 'implements' keyword to satisfy an interface contract.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1, // False
    explanation:
      "Go uses Implicit Interfaces. As shown in the slides, if a struct defines a required method like Read(), it automatically implements the interface without needing an explicit 'implements' keyword.",
  },
  {
    id: "csc302_ch4_050",
    course: "CSC 302",
    chapter: "Chapter 4",
    text: "Which statement best describes the 'Hybrid Synthesis' seen in multi-paradigm languages like Kotlin, Swift, and Rust?",
    options: [
      "Modern languages strictly enforce data-oriented processing pipelines to manipulate all application interface arrays.",
      "Modern languages actively attempt to eliminate functional design patterns to prioritize robust object methodologies.",
      "Modern languages encourage utilizing objects for component encapsulation while processing data via pure functions.",
      "Modern languages exclusively restrict system class formulation to manual prototype cloning forbidding data mutation.",
    ],
    correctAnswer: 2,
    explanation:
      "The Hybrid Synthesis describes how multi-paradigm languages encourage encapsulating structural components using OOP objects, while processing internal data using pure, immutable functional pipelines.",
  },
];

export default csc302Module4;
