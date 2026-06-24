import { QuestionV2 } from "@/lib/quiz-types";

const csc302Module6: QuestionV2[] = [
  {
    id: "csc302_ch6_001",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "In the pre-OOP monolithic programming era, what was a major factor that made control flow highly unpredictable?",
    options: [
      "The excessive use of multiple inheritance hierarchies.",
      "The widespread reliance on direct jumps via GOTO statements.",
      "The automatic reclamation of heap memory by the runtime environment.",
      "The strict enforcement of static typing and interface contracts.",
    ],
    correctAnswer: 1,
    explanation:
      "According to Part I of the slides, early monolithic programming proceeded linearly but suffered from unpredictable control flow due to a heavy reliance on direct jumps (GOTO statements).",
  },
  {
    id: "csc302_ch6_002",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "Structured programming introduced mathematical discipline to control flow by replacing arbitrary GOTO jumps with which constructs?",
    options: [
      "Pointer offsets and direct hardware register modifications.",
      "Abstract classes, public interfaces, and inheritance trees.",
      "Dynamic dispatch tables and polymorphic method signatures.",
      "Subroutines, conditional branches, and iterative loops.",
    ],
    correctAnswer: 3,
    explanation:
      "Dijkstra and others pioneered Structured Programming, which introduced mathematical discipline by replacing direct GOTO jumps with subroutines, conditional branches, and loops.",
  },
  {
    id: "csc302_ch6_003",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "Under the Functional Decomposition paradigm, what is the primary consequence of modifying a central database schema or data structure?",
    options: [
      "The runtime automatically performs a full garbage collection sweep.",
      "Multiple unrelated procedures operating on that data must be refactored.",
      "The compiler automatically generates a virtual dynamic dispatch table.",
      "Subclasses are immediately forced to override abstract parent methods.",
    ],
    correctAnswer: 1,
    explanation:
      "The slides state that a key flaw of Functional Decomposition is that data and procedures are separate. If a data structure changes, every procedure interacting with it must be manually updated.",
  },
  {
    id: "csc302_ch6_004",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "Structured programming successfully solved the challenge of global data exposure by unifying procedures and data structures into cohesive units.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1, // False
    explanation:
      "According to the slides, Structured Programming solved control flow chaos but did not solve data exposure; data and procedures remained separate. This vulnerability was resolved later by OOP.",
  },
  {
    id: "csc302_ch6_005",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "The fundamental paradigm shift of Object-Oriented Programming lies in organizing software around which conceptual entities?",
    options: [
      "Verbs and procedures that act globally on sequential memory records.",
      "Nouns and objects that bundle state data with associated behaviors.",
      "Mathematical functions that prevent side effects and mutable states.",
      "Low-level hardware registers and compile-time macro expansions.",
    ],
    correctAnswer: 1,
    explanation:
      "The slides state that OOP represents a paradigm shift from organizing software around actions (verbs) to organizing it around actors (nouns/objects) that bundle state with behavior.",
  },
  {
    id: "csc302_ch6_006",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "Which of the core pillars of OOP is defined as the bundling of data and the methods that operate on that data into a single unit?",
    options: ["Inheritance", "Polymorphism", "Encapsulation", "Abstraction"],
    correctAnswer: 2,
    explanation:
      "The slides define Encapsulation as the bundling of data (attributes) and the methods that operate on that data into a single unit (class).",
  },
  {
    id: "csc302_ch6_007",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "How does Encapsulation protect the integrity of an object's internal state?",
    options: [
      "By forcing the compiler to allocate the object strictly within stack memory.",
      "By defining public fields that can be modified directly by external client classes.",
      "By restricting direct external access and enforcing modifications through public methods.",
      "By preventing the object from implementing more than a single structural interface.",
    ],
    correctAnswer: 2,
    explanation:
      "Encapsulation establishes boundary protection by hiding an object's internal state and forcing external actors to interact exclusively through public methods (getters and setters).",
  },
  {
    id: "csc302_ch6_008",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "Which concept allows developers to focus on 'what' an object does rather than 'how' it does it, reducing cognitive load?",
    options: [
      "Abstraction",
      "Subclassing",
      "Reference allocation",
      "Ad-hoc overloading",
    ],
    correctAnswer: 0,
    explanation:
      "The slides state that Abstraction hides complex implementation details, allowing programmers to focus on 'what' an object does (the interface) rather than 'how' it does it.",
  },
  {
    id: "csc302_ch6_009",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "In modern Object-Oriented design, interfaces act as stateful contracts capable of managing member variables and concrete instance states.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1, // False
    explanation:
      "As outlined in the comparison of abstract classes vs. interfaces, interfaces represent pure behavioral contracts and are stateless, meaning they do not manage member variables.",
  },
  {
    id: "csc302_ch6_010",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "What is the primary architectural purpose of Inheritance in Object-Oriented design?",
    options: [
      "To enable objects to bypass compile-time static type checks entirely.",
      "To allow a new class to inherit attributes and behaviors from an existing class.",
      "To prevent external client components from accessing public interface contracts.",
      "To group contiguous data structures into highly optimized CPU cache lines.",
    ],
    correctAnswer: 1,
    explanation:
      "Inheritance is defined in Part II as the mechanism that allows a new class (subclass/child) to inherit attributes and behaviors from an existing class (superclass/parent), promoting code reuse.",
  },
  {
    id: "csc302_ch6_011",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "What is the key distinction between subclassing and subtyping?",
    options: [
      "Subclassing is for code reuse, whereas subtyping is for interface compatibility.",
      "Subclassing occurs dynamically at runtime, while subtyping is purely a compile-time concept.",
      "Subclassing is used for value types, whereas subtyping is used exclusively for reference types.",
      "Subclassing bypasses the compiler, whereas subtyping is strictly enforced by garbage collection.",
    ],
    correctAnswer: 0,
    explanation:
      "The slides state that subclassing is an implementation detail aimed at code reuse, while subtyping defines a behavioral relationship ensuring interface compatibility.",
  },
  {
    id: "csc302_ch6_012",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "Subtype polymorphism refers to the capability of different classes to respond to the exact same message or method call in their own unique ways.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0, // True
    explanation:
      "Part II defines Polymorphism (specifically subtype polymorphism) as the ability of different classes to respond to the same message (method call) in their own unique ways.",
  },
  {
    id: "csc302_ch6_013",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "Which type of polymorphism is resolved at compile time, typically through method overloading?",
    options: [
      "Subtype polymorphism",
      "Dynamic polymorphism",
      "Static polymorphism",
      "Parametric polymorphism",
    ],
    correctAnswer: 2,
    explanation:
      "The slides state that Static Polymorphism is resolved at compile time. Method overloading, where multiple methods have the same name but different signatures, is a key example.",
  },
  {
    id: "csc302_ch6_014",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "What mechanism is used at runtime to determine the actual concrete method implementation to execute when an overridden method is called?",
    options: [
      "Static binding",
      "Dynamic dispatch",
      "Pointer arithmetic",
      "Interface segregation",
    ],
    correctAnswer: 1,
    explanation:
      "The slides explain that Dynamic Dispatch (or dynamic binding) is the runtime mechanism that determines which concrete implementation of an overridden method to invoke based on the object's actual type.",
  },
  {
    id: "csc302_ch6_015",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "In Java, C#, or similar languages, what is a key restriction placed on Abstract Classes?",
    options: [
      "They cannot declare any concrete methods with implementation blocks.",
      "They cannot be instantiated directly using the 'new' keyword.",
      "They cannot define instance variables or manage member states.",
      "They cannot be extended by more than one subclass in a project.",
    ],
    correctAnswer: 1,
    explanation:
      "As detailed in Part III, abstract classes act as incomplete blueprints. They can contain both abstract and concrete methods, but they cannot be instantiated directly.",
  },
  {
    id: "csc302_ch6_016",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "Unlike abstract classes, what is the defining characteristic of Interfaces as structural contracts?",
    options: [
      "They support state management via private instance fields.",
      "They represent stateless, pure behavioral specifications.",
      "They are strictly allocated within thread-local stack frames.",
      "They must be instantiated before any subclasses can be created.",
    ],
    correctAnswer: 1,
    explanation:
      "According to the comparison in Part III, interfaces represent pure behavioral contracts. They are stateless, meaning they do not manage member fields or instance states.",
  },
  {
    id: "csc302_ch6_017",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "What classic issue arises in languages that allow multiple class inheritance, such as C++?",
    options: [
      "The Dangling Pointer Problem",
      "The Liskov Violation Dilemma",
      "The Diamond Problem",
      "The Static Overriding Clash",
    ],
    correctAnswer: 2,
    explanation:
      "The slides note that multiple inheritance introduces the 'Diamond Problem', where a subclass inherits conflicting implementations of a method from two parents that share a common grandparent.",
  },
  {
    id: "csc302_ch6_018",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "To avoid the Diamond Problem, languages like Java and C# enforce single inheritance for classes while allowing multiple inheritance through interfaces.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0, // True
    explanation:
      "The slides mention that Java and C# resolve multiple inheritance issues by enforcing single inheritance for classes (avoiding the Diamond Problem) while permitting multiple inheritance through interfaces.",
  },
  {
    id: "csc302_ch6_019",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "What architectural guideline advises developers to build complex behaviors by combining small, interchangeable objects rather than extending classes?",
    options: [
      "Single Responsibility Rule",
      "Composition over Inheritance",
      "Open/Closed Extensibility",
      "Dependency Inversion Strategy",
    ],
    correctAnswer: 1,
    explanation:
      "Part III introduces 'Composition over Inheritance' (CoI), which recommends assembling simpler, modular objects (HAS-A relationship) to build complex behaviors instead of creating rigid, deep class hierarchies (IS-A relationship).",
  },
  {
    id: "csc302_ch6_020",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "How does relying on Composition over Inheritance prevent code fragility?",
    options: [
      "By completely eliminating the need to allocate objects on the heap.",
      "By bypassing static type checking and resolving all calls dynamically.",
      "By avoiding tight coupling with parent class implementation details.",
      "By forcing all state mutations to run within isolated stack frames.",
    ],
    correctAnswer: 2,
    explanation:
      "The slides point out that composition keeps components decoupled. Unlike inheritance, where a subclass is tightly coupled to the internal details of its parent, composition allows changing inner details without breaking the outer class.",
  },
  {
    id: "csc302_ch6_021",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "According to the Single Responsibility Principle, what is the ideal metric of cohesion and coupling for a class?",
    options: [
      "Low internal cohesion and high external coupling.",
      "High internal cohesion and low external coupling.",
      "Equal balance between cohesion and external coupling.",
      "Zero internal cohesion and zero external coupling.",
    ],
    correctAnswer: 1,
    explanation:
      "The slides explain that the Single Responsibility Principle (SRP) aims for high cohesion (a class does one logical thing well) and low coupling (minimal dependencies on other classes).",
  },
  {
    id: "csc302_ch6_022",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "The Open/Closed Principle states that a class should be fully open for direct source code modification when new features are required, but closed to further extension.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1, // False
    explanation:
      "The Open/Closed Principle (OCP) states exactly the opposite: software entities should be open for *extension* (adding new features), but closed for *modification* (altering existing, tested code).",
  },
  {
    id: "csc302_ch6_023",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "What core requirement does the Liskov Substitution Principle (LSP) enforce on inheritance hierarchies?",
    options: [
      "Subclasses must define at least one unique instance state variable.",
      "Subclasses must be substitutable for their base classes without breaking correctness.",
      "Base classes must be declared abstract to prevent direct instantiation.",
      "Base classes must implement all interface methods using static binding.",
    ],
    correctAnswer: 1,
    explanation:
      "The slides define LSP as the rule that objects of a superclass should be replaceable with objects of its subclasses without affecting the correctness of the program.",
  },
  {
    id: "csc302_ch6_024",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "Why is the classic Square-extends-Rectangle class model considered a violation of the Liskov Substitution Principle?",
    options: [
      "Because a Square requires more memory storage on the heap than a Rectangle.",
      "Because a Square cannot access the private state variables of the parent Rectangle.",
      "Because modifying a Square's width forces its height to change, breaking Rectangle assumptions.",
      "Because a Square cannot polymorphically override the abstract methods of its parent.",
    ],
    correctAnswer: 2,
    explanation:
      "As explained in Part IV, extending Rectangle with Square violates LSP because a client expecting a Rectangle might change the width and assume the height remains constant. Setting the width of a Square changes its height, violating the expected behavior.",
  },
  {
    id: "csc302_ch6_025",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "Which SOLID principle is violated if a class is forced to implement interface methods that it does not use?",
    options: [
      "Single Responsibility Principle",
      "Interface Segregation Principle",
      "Dependency Inversion Principle",
      "Liskov Substitution Principle",
    ],
    correctAnswer: 1,
    explanation:
      "The Interface Segregation Principle (ISP) states that clients should not be forced to depend on interfaces they do not use. It promotes small, specific interfaces over large, bloated ones.",
  },
  {
    id: "csc302_ch6_026",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "According to the Dependency Inversion Principle, what should high-level modules and low-level modules depend upon?",
    options: [
      "Concrete hardware specifications.",
      "Polymorphic abstract interfaces.",
      "Statically bound subclasses.",
      "Local stack memory layouts.",
    ],
    correctAnswer: 1,
    explanation:
      "The Dependency Inversion Principle (DIP) states that high-level modules should not depend on low-level modules; both should depend on abstractions (interfaces or abstract classes).",
  },
  {
    id: "csc302_ch6_027",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "In standard application memory layout, where are Value Types (like primitive integers) typically allocated?",
    options: [
      "Directly on the stack frame of the current execution scope.",
      "On the global dynamic heap alongside complex object instances.",
      "Within the virtual dynamic dispatch table of the parent class.",
      "Inside the CPU's hardware instructions registry cache.",
    ],
    correctAnswer: 0,
    explanation:
      "Part V explains that Value Types (e.g., primitives like int, float) are allocated directly on the Stack. Their lifecycles are tied to the execution scope of their respective function frames.",
  },
  {
    id: "csc302_ch6_028",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "How are Reference Types (such as class instances) managed in memory in languages like Java or C#?",
    options: [
      "The variable on the stack holds the actual object data directly.",
      "The actual object data is on the heap, and the stack holds a pointer to it.",
      "The objects are allocated exclusively inside the CPU instruction cache.",
      "The objects are stored inside static binary files to bypass RAM limits.",
    ],
    correctAnswer: 1,
    explanation:
      "The slides state that for Reference Types, the actual object data is dynamically allocated on the Heap, while the Stack holds a reference (pointer) pointing to that heap location.",
  },
  {
    id: "csc302_ch6_029",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "Which garbage collection strategy tracks the number of pointers referencing an object and reclaims its memory when that count hits zero?",
    options: [
      "Mark-and-Sweep Garbage Collection",
      "Generational Garbage Collection",
      "Reference Counting Garbage Collection",
      "Copying Garbage Collection",
    ],
    correctAnswer: 2,
    explanation:
      "Reference Counting works by tracking active references to an object. When the count drops to zero, the object is immediately reclaimed. Its primary weakness is handling cyclic references.",
  },
  {
    id: "csc302_ch6_030",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "The Reference Counting garbage collection strategy is highly effective because it naturally resolves cyclic object references without causing memory leaks.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1, // False (Flipped from True to False to achieve a balanced 6/5 split)
    explanation:
      "The slides identify cyclic references as the main limitation of Reference Counting: if Object A references Object B and vice versa, their reference counts never reach zero, causing memory leaks.",
  },
  {
    id: "csc302_ch6_031",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "What are the two active phases involved in a standard Mark-and-Sweep garbage collection routine?",
    options: [
      "Allocation of memory addresses and dynamic binding of references.",
      "Tracing from root references and reclaiming unvisited memory blocks.",
      "Overloading virtual method signatures and resolving pointer offsets.",
      "Copying stack parameters and compacting contiguous object states.",
    ],
    correctAnswer: 1,
    explanation:
      "The slides outline Mark-and-Sweep as having two phases: (1) Mark: Tracing from roots (like global variables and stack references) to mark reachable objects, and (2) Sweep: Scanning the heap to reclaim unmarked objects.",
  },
  {
    id: "csc302_ch6_032",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "What major performance drawback is associated with the Mark-and-Sweep garbage collection strategy?",
    options: [
      "It completely disables polymorphism across class hierarchies.",
      "It requires infinite stack allocation for simple value types.",
      "It forces temporary 'Stop-the-World' pauses during execution.",
      "It prevents developers from declaring private instance variables.",
    ],
    correctAnswer: 2,
    explanation:
      "The slides state that Mark-and-Sweep can introduce latency because it requires scanning the entire heap, which often forces 'Stop-the-World' pauses where the application stops running during GC.",
  },
  {
    id: "csc302_ch6_033",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "Generational Garbage Collection is optimized based on the empirical observation that the vast majority of allocated objects die shortly after creation.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0, // True
    explanation:
      "As outlined in Part V, Generational GC is based on the Weak Generational Hypothesis, which states that most objects die shortly after allocation. It groups objects by age to optimize sweeping cycles.",
  },
  {
    id: "csc302_ch6_034",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "Why does traversing an array of objects in standard OOP languages often cause a high number of CPU cache misses?",
    options: [
      "Because the compiler allocates the array elements directly within the instruction registers.",
      "Because the array contains scattered pointer references to discontinuous heap locations.",
      "Because the dynamic dispatch table is forced to recompile during every loop iteration.",
      "Because the array elements are treated as value types and automatically freed on the stack.",
    ],
    correctAnswer: 1,
    explanation:
      "This is known as the 'Cost of Indirection' or 'Pointer Chasing'. In OOP, an array of objects is typically an array of references. The actual objects are scattered around the heap, disrupting cache locality and causing CPU cache misses.",
  },
  {
    id: "csc302_ch6_035",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "Which design paradigm is specifically optimized to avoid pointer-chasing and cache-miss overhead in high-performance software?",
    options: [
      "Monolithic Programming",
      "Functional Decomposition",
      "Object-Oriented Design",
      "Data-Oriented Design",
    ],
    correctAnswer: 3,
    explanation:
      "The slides state that Data-Oriented Design (DOD) prioritizes raw memory layouts and contiguous cache locality, making it highly effective for performance-critical systems like game engines.",
  },
  {
    id: "csc302_ch6_036",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "What major critique of Object-Oriented Programming points out that data and logic become fragmented across numerous small instances?",
    options: [
      "Dynamic Dispatch Latency",
      "Object Scattering",
      "The Diamond Conflict",
      "Leaky Abstractions",
    ],
    correctAnswer: 1,
    explanation:
      "Under 'Critiques' in Part VI, the slides discuss 'Object Scattering' (the banana-monkey-jungle problem), where data and logic are scattered across many small, fragmented objects, complicating system flow analysis.",
  },
  {
    id: "csc302_ch6_037",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "What specific risk is introduced when multiple concurrent threads access and modify mutable states within shared objects?",
    options: [
      "Static compile-time binding crashes.",
      "Memory fragmentation within stack frames.",
      "Race conditions and unpredictable side effects.",
      "Automatic dynamic dispatch table corruption.",
    ],
    correctAnswer: 2,
    explanation:
      "Part VI explains that managing concurrency is a major challenge for OOP because combining mutable shared state with multiple concurrent threads can easily result in race conditions and data corruption.",
  },
  {
    id: "csc302_ch6_038",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "In structural typing systems like TypeScript and Go, how is type compatibility determined?",
    options: [
      "By looking at the shape and public structure of the interface.",
      "By checking if the class explicitly inherits from a named parent class.",
      "By inspecting whether the variables are allocated on the stack or heap.",
      "By verifying that the class has at least one synchronized private method.",
    ],
    correctAnswer: 0,
    explanation:
      "The slides state that in Structural Typing (or duck typing), type compatibility is determined by the shape and structure of the interface, rather than by explicit declarations or class names.",
  },
  {
    id: "csc302_ch6_039",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "In the Go programming language, a struct implicitly satisfies an interface if it implements the required methods, without needing an explicit implements keyword.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0, // True
    explanation:
      "The slides highlight Go's implicit interfaces: if a struct implements the methods of an interface, it automatically implements it without requiring an explicit 'implements' keyword.",
  },
  {
    id: "csc302_ch6_040",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "How do modern multi-paradigm languages (e.g., Kotlin, Swift, Scala, Rust) leverage both OOP and Functional Programming?",
    options: [
      "They enforce strict monolithic structure sequences for performance while using OOP for GUI menus.",
      "They restrict all execution states to heap allocations while implementing functional dispatch tables.",
      "They encourage using objects to wrap components while processing data with pure, functional pipelines.",
      "They allow multiple inheritance of abstract classes while completely outlawing value types.",
    ],
    correctAnswer: 2,
    explanation:
      "The slides describe this hybrid synthesis: modern languages encourage developers to encapsulate structural components using objects, while processing internal data pipelines using pure, immutable functional techniques.",
  },
  {
    id: "csc302_ch6_041",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "What is the primary architectural drawback of creating extremely deep class inheritance hierarchies?",
    options: [
      "They completely bypass static compile-time syntax validation.",
      "They lead to highly rigid architectures that are difficult to modify.",
      "They prevent the garbage collector from reclaiming heap instances.",
      "They restrict subclasses from implementing separate interfaces.",
    ],
    correctAnswer: 1,
    explanation:
      "The slides explain that deep inheritance hierarchies create highly rigid and fragile architectures. Modern best practices advocate moving away from deep hierarchies toward composition-based designs.",
  },
  {
    id: "csc302_ch6_042",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "Employing an automatic Garbage Collector in a virtual runtime environment completely eliminates the possibility of software memory leaks.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1, // False
    explanation:
      "This is False. While garbage collection automates memory management and prevents simple allocation leaks, applications can still leak memory if they maintain unintended references to unused objects (preventing the GC from reclaiming them).",
  },
  {
    id: "csc302_ch6_043",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "Which of the following is a key advantage of choosing interfaces over abstract classes for defining system capabilities?",
    options: [
      "Interfaces allow classes to inherit and maintain concrete instance fields.",
      "Interfaces permit unrelated classes to implement shared behaviors under multiple inheritance.",
      "Interfaces are automatically allocated on the stack to guarantee high-speed execution.",
      "Interfaces ensure that the compiler can completely optimize away dynamic method dispatch.",
    ],
    correctAnswer: 1,
    explanation:
      "The slides show that interfaces represent pure behavioral contracts. They are highly flexible because unrelated classes across different parts of the system can implement the same interface without a shared inheritance ancestry.",
  },
  {
    id: "csc302_ch6_044",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "Under the Single Responsibility Principle, a class should have exactly how many reasons to change?",
    options: [
      "Zero, as all software components must remain completely immutable.",
      "Exactly one, meaning it is focused on a single responsibility.",
      "At least two, balancing state management and performance tuning.",
      "An unlimited number, depending on the number of subclasses.",
    ],
    correctAnswer: 1,
    explanation:
      "The Single Responsibility Principle (SRP) states that a class should have one, and only one, reason to change. This ensures the class remains cohesive and focused.",
  },
  {
    id: "csc302_ch6_045",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "To adhere to the Open/Closed Principle, how should software developers write their classes?",
    options: [
      "By sealing all classes so they cannot be inherited or extended.",
      "By exposing all internal fields publicly to allow clients to rewrite logic.",
      "By utilizing abstract layers and interfaces that allow behavior to be extended.",
      "By writing monolithic codeblocks that are easy to recompile on any hardware.",
    ],
    correctAnswer: 2,
    explanation:
      "To implement the Open/Closed Principle (OCP), developers use abstractions (like abstract classes or interfaces). New requirements can be met by extending these abstractions with new subclasses rather than modifying tested code.",
  },
  {
    id: "csc302_ch6_046",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "How does the Dependency Inversion Principle help in decoupling high-level policy code from low-level details?",
    options: [
      "By forcing high-level code to call concrete low-level subclasses directly.",
      "By making low-level modules depend on the concrete fields of high-level models.",
      "By introducing abstract interfaces that act as intermediaries between modules.",
      "By allocating all modules to a single, contiguous memory location on the heap.",
    ],
    correctAnswer: 2,
    explanation:
      "The Dependency Inversion Principle decouples modules by ensuring that high-level policies do not import details from low-level implementations directly; instead, both interact via shared abstract interfaces.",
  },
  {
    id: "csc302_ch6_047",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "Stack memory allocation is fast and efficient because the CPU automatically reclaims the memory by popping the stack frame as soon as execution exits the function scope.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0, // True
    explanation:
      "The slides confirm that Stack memory is managed automatically by the CPU. When execution exits a function scope, its associated stack frame is immediately popped and reclaimed, making it fast and efficient.",
  },
  {
    id: "csc302_ch6_048",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "What performance issue is associated with generational garbage collection when tracking objects across generations?",
    options: [
      "The virtual runtime environment must completely disable dynamic dispatch.",
      "Write barriers are required to track references from old generation to young generation.",
      "The program is forced to run entirely on stack memory, causing constant overflows.",
      "All value types are automatically promoted to heap reference types immediately.",
    ],
    correctAnswer: 1,
    explanation:
      "While generational GC optimizes sweeps by focusing on young generations, tracking references from old-to-young generations requires some overhead (often utilizing 'write barriers') to ensure young object collection is safe.",
  },
  {
    id: "csc302_ch6_049",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "In the context of OOP paradigms, what is the ultimate consequence of 'pointer chasing' on modern hardware architectures?",
    options: [
      "The compiler fails to resolve the correct method override at build time.",
      "The CPU stalls while waiting for data to be retrieved from main memory (RAM).",
      "The garbage collector crashes due to an infinite loop of recursive sweeps.",
      "The execution environment is forced to execute GOTO jumps sequentially.",
    ],
    correctAnswer: 1,
    explanation:
      "Because modern CPUs are significantly faster than system RAM, chasing pointers to scattered heap locations causes CPU cache misses. The CPU sits idle (stalls) waiting for data to be retrieved from slow RAM.",
  },
  {
    id: "csc302_ch6_050",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "With the rise of multi-core processors, the need to manage concurrent execution safely has driven the industry toward utilizing immutable object structures.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0, // True
    explanation:
      "The slides state that as multi-core processors have become standard, managing concurrency safely has driven the industry toward immutable object structures to prevent race conditions.",
  },
];

export default csc302Module6;
