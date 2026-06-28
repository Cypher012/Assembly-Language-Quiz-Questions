import { QuestionV2 } from "@/lib/quiz-types";

const csc302Module3: QuestionV2[] = [
  {
    id: "csc302_ch3_001",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "What is a programming paradigm?",
    options: [
      "A fundamental style or approach to conceptualizing and structuring code",
      "A specific programming language tailored for enterprise development",
      "A hardware architecture design for processing parallel data streams",
      "A specific software development lifecycle used by engineering teams",
    ],
    correctAnswer: 0,
    explanation:
      "The presentation defines a programming paradigm as a fundamental style, model, or approach to computer programming that dictates how code is structured.",
  },
  {
    id: "csc302_ch3_002",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "A programming paradigm is not a language itself, but rather a conceptual lens through which a language is designed and used.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0, // True
    explanation:
      "The slides explicitly state that a paradigm is not a programming language, but rather a lens through which a language is designed and used.",
  },
  {
    id: "csc302_ch3_003",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "How does the Sapir-Whorf Hypothesis apply to Computer Science according to the slides?",
    options: [
      "It proves that all programming languages eventually compile down to identical machine code",
      "It suggests the language we use deeply influences how we conceptualize problems and solutions",
      "It mandates that object-oriented code must run faster than functional code on modern hardware",
      "It requires algorithms to be completely independent of the hardware they execute on",
    ],
    correctAnswer: 1,
    explanation:
      "The Sapir-Whorf Hypothesis in CS posits that the language used to write programs heavily influences how a programmer thinks about and engineers solutions.",
  },
  {
    id: "csc302_ch3_004",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Which foundational theoretical model conceptualizes computation using states, rules, and an infinite tape?",
    options: [
      "The Lambda Calculus",
      "The Actor Model",
      "The Turing Machine",
      "The von Neumann Architecture",
    ],
    correctAnswer: 2,
    explanation:
      "The Turing Machine is described in the evolution slides as a foundational model relying on states, rules, and an infinite tape.",
  },
  {
    id: "csc302_ch3_005",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Which architectural model physically separates the processing unit (CPU) from the memory?",
    options: [
      "The von Neumann Architecture",
      "The Lambda Calculus",
      "The Communicating Sequential Processes model",
      "The Object-Oriented Framework",
    ],
    correctAnswer: 0,
    explanation:
      "The von Neumann Architecture is highlighted as the physical manifestation of computation that distinctly separates the CPU from system memory.",
  },
  {
    id: "csc302_ch3_006",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "What forms the foundational basis of the Functional Programming paradigm?",
    options: [
      "The Turing Machine model",
      "The von Neumann Architecture",
      "The Actor Concurrency model",
      "The Lambda Calculus",
    ],
    correctAnswer: 3,
    explanation:
      "The slides explicitly identify Alonzo Church's Lambda Calculus as the mathematical foundation underlying the functional programming paradigm.",
  },
  {
    id: "csc302_ch3_007",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "What is the primary focus of the Imperative Programming paradigm?",
    options: [
      "Defining facts and rules within a logical knowledge base",
      "Providing explicit step-by-step instructions that modify program state",
      "Evaluating pure functions while strictly enforcing immutability",
      "Declaring the desired outcome without detailing the control flow",
    ],
    correctAnswer: 1,
    explanation:
      'Imperative programming focuses on answering "How" to achieve a goal by using explicit step-by-step instructions to modify the program\'s state.',
  },
  {
    id: "csc302_ch3_008",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Given the following code:\n\n```assembly\nLOAD R1, 10\nADD R1, 20\nSTORE R1, SUM\n```\n\nWhich programming paradigm does this snippet closely align with?",
    options: [
      "Imperative Programming",
      "Declarative Programming",
      "Logic Programming",
      "Functional Programming",
    ],
    correctAnswer: 0,
    explanation:
      "Assembly language represents the purest form of imperative programming, providing exact step-by-step instructions to modify machine state.",
  },
  {
    id: "csc302_ch3_009",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Which computer science pioneer famously advocated against the GOTO statement to promote structured programming?",
    options: [
      "Alonzo Church",
      "Alan Kay",
      "Edsger W. Dijkstra",
      "John McCarthy",
    ],
    correctAnswer: 2,
    explanation:
      'Edsger W. Dijkstra wrote the influential paper "Go To Statement Considered Harmful," which became a cornerstone of the structured programming movement.',
  },
  {
    id: "csc302_ch3_010",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Given the following code:\n\n```c\nint sum = 0;\nfor(int i=1; i<=10; i++) {\n    sum += i;\n}\n```\n\nThis C code snippet is an example of which programming paradigm?",
    options: [
      "Declarative Programming",
      "Object-Oriented Programming",
      "Logic Programming",
      "Structured / Imperative Programming",
    ],
    correctAnswer: 3,
    explanation:
      "This snippet uses control structures like the `for` loop to sequentially modify the state of the `sum` variable, a hallmark of structured imperative programming.",
  },
  {
    id: "csc302_ch3_011",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Structured programming heavily advocates for the unrestricted use of the GOTO statement.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      'Structured programming was specifically developed as a reaction against "spaghetti code" and actively pushed to eliminate the GOTO statement in favor of loops and conditionals.',
  },
  {
    id: "csc302_ch3_012",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: 'Who is credited with coining the term "Object-Oriented Programming"?',
    options: [
      "Dennis Ritchie",
      "Alan Kay",
      "Alonzo Church",
      "Edsger W. Dijkstra",
    ],
    correctAnswer: 1,
    explanation:
      'The slides state that Alan Kay coined the term "Object-Oriented Programming" while working on the development of Smalltalk.',
  },
  {
    id: "csc302_ch3_013",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Which programming language is widely recognized as the very first object-oriented language?",
    options: ["Java", "Smalltalk", "C++", "Simula"],
    correctAnswer: 3,
    explanation:
      "Simula, developed in the 1960s, introduced foundational OOP concepts like classes and objects and is credited as the first object-oriented language.",
  },
  {
    id: "csc302_ch3_014",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "What does the concept of Encapsulation achieve in Object-Oriented Programming?",
    options: [
      "It bundles data and methods together while restricting direct access to internal states",
      "It allows different classes to share the exact same method names across modules",
      "It creates entirely pure functions that do not alter any program state",
      "It passes messages between concurrent threads to prevent data races",
    ],
    correctAnswer: 0,
    explanation:
      "Encapsulation is defined in the OOP section as the bundling of data and methods into objects, which hides and restricts direct access to the internal state.",
  },
  {
    id: "csc302_ch3_015",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "How is Polymorphism described in the context of Object-Oriented Programming?",
    options: [
      "Ensuring memory safety through strict ownership rules",
      "Treating different classes as instances of the same class through a common interface",
      "Defining application logic exclusively through facts and rules",
      "Restricting a variable from changing its type at runtime",
    ],
    correctAnswer: 1,
    explanation:
      "Polymorphism allows different specific classes to be treated generically as instances of the same parent class through a shared interface.",
  },
  {
    id: "csc302_ch3_016",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "The core philosophy of Object-Oriented Programming (OOP) is to strictly separate state (data) and behavior (methods) into completely independent runtime layers.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1, // False
    explanation:
      "The core philosophy of OOP is to bundle state (data) and behavior (methods) together into a single conceptual unit known as an object.",
  },
  {
    id: "csc302_ch3_017",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: 'Given the following code:\n\n```java\nclass Animal { \n    void speak() { System.out.println("Sound"); } \n}\nclass Dog extends Animal { \n    void speak() { System.out.println("Bark"); } \n}\n```\n\nWhich Object-Oriented principles are directly demonstrated in this snippet?',
    options: [
      "Functional purity and Immutability",
      "Message passing and Concurrency",
      "Inheritance and Polymorphism",
      "Logic facts and Declarative rules",
    ],
    correctAnswer: 2,
    explanation:
      "The `Dog` class uses inheritance by extending `Animal`, and overriding the `speak` method demonstrates polymorphism.",
  },
  {
    id: "csc302_ch3_018",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "What is the primary benefit of Inheritance in software design?",
    options: [
      "It guarantees concurrent thread safety across all executing processes",
      "It allows a new class to adopt properties and methods of an existing parent class",
      "It enforces immutability on all variables declared within the class structure",
      "It eliminates the need for allocating memory dynamically at runtime",
    ],
    correctAnswer: 1,
    explanation:
      "Inheritance promotes code reuse by allowing newly created classes to inherit the predefined attributes and methods of an existing parent class.",
  },
  {
    id: "csc302_ch3_019",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Who is the mathematician credited with developing the Lambda Calculus in the 1930s?",
    options: [
      "Alan Kay",
      "Alonzo Church",
      "John von Neumann",
      "Edsger W. Dijkstra",
    ],
    correctAnswer: 1,
    explanation:
      "Alonzo Church developed the Lambda Calculus in the 1930s, which later became the mathematical basis for functional programming languages.",
  },
  {
    id: "csc302_ch3_020",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: 'What defines a "pure function" in the Functional Programming paradigm?',
    options: [
      "It relies heavily on message passing to communicate with other functions",
      "It inherits default behavior from a designated parent class",
      "It alters global variables during execution to maintain performance",
      "It always produces the same output for the same input and has no side effects",
    ],
    correctAnswer: 3,
    explanation:
      "A pure function's output depends solely on its input arguments, and executing it causes absolutely no observable side effects in the system.",
  },
  {
    id: "csc302_ch3_021",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Given the following code:\n\n```haskell\nfactorial 0 = 1\nfactorial n = n * factorial (n - 1)\n```\n\nThis recursive snippet is characteristic of which programming paradigm?",
    options: [
      "Functional Programming",
      "Imperative Programming",
      "Object-Oriented Programming",
      "Esoteric Programming",
    ],
    correctAnswer: 0,
    explanation:
      "This Haskell snippet demonstrates recursion and pattern matching, which are fundamental control flow mechanisms within the functional programming paradigm.",
  },
  {
    id: "csc302_ch3_022",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Functional programming heavily emphasizes immutability, meaning state variables cannot be altered once they have been initialized.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0, // True
    explanation:
      "Functional programming heavily emphasizes immutability, meaning state cannot be altered once it has been initialized.",
  },
  {
    id: "csc302_ch3_023",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: 'What does it mean for a language to support "first-class functions"?',
    options: [
      "Functions can be passed as arguments, returned, and assigned to variables",
      "Functions must always execute sequentially without any concurrency",
      "Functions are strictly bound to a single object instance at compilation",
      "Functions automatically manage system memory and garbage collection",
    ],
    correctAnswer: 0,
    explanation:
      "First-class functions are treated as standard values, meaning they can be passed around as arguments, returned from other functions, or stored in variables.",
  },
  {
    id: "csc302_ch3_024",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "What is the core philosophy driving the Declarative Programming paradigm?",
    options: [
      "Detailing exact step-by-step control flow instructions",
      "Expressing what needs to be done rather than explaining how to do it",
      "Bundling related data and behavioral methods into discrete objects",
      "Passing messages between concurrent actors to handle shared state",
    ],
    correctAnswer: 1,
    explanation:
      'Declarative programming abstracts away control flow, allowing developers to state "What" the desired outcome is rather than "How" the computer should compute it.',
  },
  {
    id: "csc302_ch3_025",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Given the following code:\n\n```sql\nSELECT name \nFROM employees \nWHERE department = 'IT';\n```\n\nWhich programming paradigm does this database query represent?",
    options: [
      "Functional Programming",
      "Imperative Programming",
      "Object-Oriented Programming",
      "Declarative Programming",
    ],
    correctAnswer: 3,
    explanation:
      "SQL is a prime example of declarative programming. The developer specifies what data is needed without writing loops or conditions dictating how to retrieve it.",
  },
  {
    id: "csc302_ch3_026",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Logic programming relies on formally defining what foundational elements?",
    options: [
      "Objects and methods",
      "Pure functions and higher-order types",
      "Facts and rules",
      "Channels and concurrent routines",
    ],
    correctAnswer: 2,
    explanation:
      "Logic programming, as seen in languages like Prolog, models domains entirely through declaring known facts and establishing logical rules.",
  },
  {
    id: "csc302_ch3_027",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Given the following code:\n\n```prolog\nparent(john, mary).\n```\n\nWhat does this specific statement represent in a Prolog program?",
    options: [
      "A known logical fact",
      "A conditional inference rule",
      "A procedural repetition loop",
      "An encapsulated object instance",
    ],
    correctAnswer: 0,
    explanation:
      "In Prolog, a statement like `parent(john, mary).` simply declares a known relationship, establishing it as a foundational fact in the knowledge base.",
  },
  {
    id: "csc302_ch3_028",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "What is the primary motivation behind the adoption of Concurrent Programming models?",
    options: [
      "Executing multiple processes simultaneously to fully utilize multi-core processors",
      "Reducing the overall codebase size by removing repetitive boilerplate code",
      "Eliminating all potential runtime errors before the application compiles",
      "Enforcing strict immutability across all variables to prevent data loss",
    ],
    correctAnswer: 0,
    explanation:
      "Concurrency allows systems to execute multiple tasks simultaneously, which is essential for maximizing the performance of modern multi-core processors.",
  },
  {
    id: "csc302_ch3_029",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Which concurrency model relies on independent entities that communicate exclusively by passing messages?",
    options: [
      "Shared Memory Locks",
      "The Actor Model",
      "Object Inheritance Hierarchies",
      "Relational Data Querying",
    ],
    correctAnswer: 1,
    explanation:
      'The Actor model manages concurrency by treating "actors" as independent entities that do not share state but rather communicate strictly by sending messages to one another.',
  },
  {
    id: "csc302_ch3_030",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Given the following code:\n\n```go\ngo computeTask()\n```\n\nWhat concurrent behavior does this Go code snippet demonstrate?",
    options: [
      "Defining a new abstract object class",
      "Declaring a pure mathematical function",
      "Initiating a concurrent Goroutine",
      "Querying a relational database schema",
    ],
    correctAnswer: 2,
    explanation:
      "The `go` keyword in Go is used to spawn a Goroutine, allowing the `computeTask` function to execute concurrently alongside the rest of the program.",
  },
  {
    id: "csc302_ch3_031",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "How do processes primarily communicate in Go's Communicating Sequential Processes (CSP) model?",
    options: [
      "Through inherited parent methods",
      "Through globally shared memory variables",
      "Through synchronized channels",
      "Through unrestricted GOTO statements",
    ],
    correctAnswer: 2,
    explanation:
      "The CSP model in Go relies on explicit, synchronized channels to safely pass data between independently executing Goroutines.",
  },
  {
    id: "csc302_ch3_032",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "A key feature of the Actor model is its heavy reliance on shared mutable memory structures to optimize message-passing speed.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1, // False
    explanation:
      "A key feature of the Actor model is that it deliberately avoids shared memory to prevent race conditions, using message passing instead.",
  },
  {
    id: "csc302_ch3_033",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "What is the primary purpose of developing Esoteric programming languages?",
    options: [
      "To optimize high-performance computing calculations",
      "To experiment with weird ideas and push boundaries",
      "To securely manage large-scale enterprise databases",
      "To build robust and scalable web server architectures",
    ],
    correctAnswer: 1,
    explanation:
      "Esoteric languages are created as jokes, artistic expressions, or to test the extreme boundaries of language design, rather than for practical application.",
  },
  {
    id: "csc302_ch3_034",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Given the following code:\n\n```text\n+++++[- >+++++<]>\n```\n\nWhich esoteric programming language utilizes this specific array and pointer syntax?",
    options: ["Whitespace", "Malbolge", "Prolog", "Brainfuck"],
    correctAnswer: 3,
    explanation:
      "Brainfuck is an esoteric language known for its extreme minimalism, utilizing a simple array of memory cells manipulated via symbols like `+`, `-`, `<`, and `>`.",
  },
  {
    id: "csc302_ch3_035",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "What is the defining characteristic of the Whitespace programming language?",
    options: [
      "It uses only spaces, tabs, and line breaks for its syntax",
      "It compiles directly into highly optimized SQL queries",
      "It enforces pure functional immutability at compile time",
      "It requires all mathematical expressions to use prefix notation",
    ],
    correctAnswer: 0,
    explanation:
      "As its name suggests, Whitespace is an esoteric language that ignores all visible characters, executing instructions written entirely using spaces, tabs, and line breaks.",
  },
  {
    id: "csc302_ch3_036",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Esoteric languages are typically designed for experimentation, challenge, or humor, making them highly unsuited for commercial software engineering.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0, // True
    explanation:
      "The presentation clarifies that esoteric languages are designed for experimentation and frustration, making them entirely unsuited for real-world software engineering.",
  },
  {
    id: "csc302_ch3_037",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "What major feature does the Rust programming language introduce to guarantee memory safety without garbage collection?",
    options: [
      "Automatic garbage collection intervals",
      "Object inheritance hierarchies",
      "Ownership and borrowing rules",
      "Asynchronous actor messages",
    ],
    correctAnswer: 2,
    explanation:
      "Rust introduces a strict system of ownership and borrowing enforced by the compiler to guarantee memory safety while avoiding the overhead of a garbage collector.",
  },
  {
    id: "csc302_ch3_038",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "What is a primary advantage of modern multi-paradigm programming languages?",
    options: [
      "They force developers to adopt a single rigid coding style",
      "They offer developers the flexibility to choose the best style for a specific problem",
      "They completely eliminate the need for a compilation step",
      "They restrict developers to writing imperative code exclusively",
    ],
    correctAnswer: 1,
    explanation:
      "Modern languages like Kotlin, Swift, and Python are multi-paradigm because combining styles allows developers to use the most effective tool for different parts of an application.",
  },
  {
    id: "csc302_ch3_039",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Most modern programming languages, such as Rust, Kotlin, and Python, are strictly single-paradigm, forcing developers to use only one coding style.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1, // False
    explanation:
      "The slides point out that most modern languages (like Python, Rust, and Kotlin) are distinctly multi-paradigm, blending object-oriented, functional, and imperative features.",
  },
  {
    id: "csc302_ch3_040",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "According to the synthesis section, which paradigm is highly effective for managing abstract domain business logic?",
    options: [
      "Functional Programming",
      "Logic Programming",
      "Object-Oriented Programming",
      "Esoteric Programming",
    ],
    correctAnswer: 2,
    explanation:
      "The synthesis slide specifically aligns the Object-Oriented paradigm (with its domain models) as the best fit for managing complex, abstract business logic.",
  },
  {
    id: "csc302_ch3_041",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Which programming approach is best suited for solving intricate rules and constraints?",
    options: [
      "Logic Programming",
      "Imperative Programming",
      "Object-Oriented Programming",
      "Concurrent Programming",
    ],
    correctAnswer: 0,
    explanation:
      "The final section pairs Logic Programming (like Prolog) directly with the task of solving complex rules and logical constraints.",
  },
  {
    id: "csc302_ch3_042",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Which paradigm is explicitly recommended for expressing and managing complex relational data?",
    options: [
      "Functional Programming",
      "Declarative Programming",
      "Imperative Programming",
      "Esoteric Programming",
    ],
    correctAnswer: 1,
    explanation:
      "Declarative programming, specifically using languages like SQL, is highlighted as the optimal paradigm for handling complex relational data operations.",
  },
  {
    id: "csc302_ch3_043",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "The best software engineers avoid being dogmatically tied to a single programming language or paradigm, choosing instead the tool that best fits the problem.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0, // True
    explanation:
      "The conclusion specifically states that the best engineers are NOT dogmatically tied to a single language or paradigm, but rather understand the strengths of each.",
  },
  {
    id: "csc302_ch3_044",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Which functional programming language is famous for its heavy use of parentheses and prefix notation?",
    options: ["Haskell", "LISP", "Erlang", "Prolog"],
    correctAnswer: 1,
    explanation:
      "LISP is introduced in the functional programming slides as a language built on list processing, characterized by its extensive use of parentheses.",
  },
  {
    id: "csc302_ch3_045",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "What makes the language Simula significant in programming history?",
    options: [
      "It was the very first purely functional language created",
      "It was the first language to popularize the Actor model",
      "It is recognized as the very first object-oriented language",
      "It is the only esoteric language used in enterprise computing",
    ],
    correctAnswer: 2,
    explanation:
      "Simula holds historical significance because it introduced the foundational concepts of classes and objects, making it the first object-oriented language.",
  },
  {
    id: "csc302_ch3_046",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "How does Smalltalk distinguish itself historically from Simula?",
    options: [
      "Smalltalk operates purely as a functional programming language",
      "Smalltalk is considered the first purely object-oriented language",
      "Smalltalk requires the programmer to manage memory allocation manually",
      "Smalltalk utilizes only whitespace characters for its internal syntax",
    ],
    correctAnswer: 1,
    explanation:
      'While Simula introduced OOP concepts, the presentation explicitly notes that Smalltalk was the first "pure" object-oriented language.',
  },
  {
    id: "csc302_ch3_047",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "The Erlang programming language was originally developed at Ericsson for what primary purpose?",
    options: [
      "Writing low-level desktop operating systems",
      "Building highly reliable and concurrent telecom systems",
      "Querying massive relational database structures",
      "Training artificial intelligence and neural networks",
    ],
    correctAnswer: 1,
    explanation:
      "Erlang was purposefully designed by Ericsson using the Actor model to build highly concurrent, fault-tolerant telecommunications systems.",
  },
  {
    id: "csc302_ch3_048",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "What is the defining characteristic of the Malbolge esoteric language?",
    options: [
      "It was intentionally designed to be almost impossible to write useful programs in",
      "It was heavily optimized to execute on multi-core processors simultaneously",
      "It strictly enforces immutability and mathematically pure functions",
      "It uses SQL statements internally to handle basic variable assignments",
    ],
    correctAnswer: 0,
    explanation:
      "Malbolge is cited as a language deliberately engineered to be as difficult and unintuitive as humanly possible, representing an extreme esoteric experiment.",
  },
  {
    id: "csc302_ch3_049",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "The Map/Reduce framework commonly used in big data processing is rooted in which paradigm?",
    options: [
      "Object-Oriented Programming",
      "Logic Programming",
      "Functional Programming",
      "Imperative Programming",
    ],
    correctAnswer: 2,
    explanation:
      "The functional programming section specifically mentions that big data processing techniques like Map/Reduce are built directly on functional principles.",
  },
  {
    id: "csc302_ch3_050",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: 'According to the presentation\'s conclusion, what is the core benefit of a "multilingual mind"?',
    options: [
      "It expands a developer's problem-solving toolkit and improves code elegance",
      "It allows developers to completely abandon their primary development language",
      "It forces engineering teams to write enterprise applications in esoteric languages",
      "It ensures developers rely exclusively on structured GOTO statements",
    ],
    correctAnswer: 0,
    explanation:
      "The final slide stresses that learning alternate paradigms expands a developer's toolkit, allowing them to write cleaner and safer software in any language.",
  },
  {
    id: "csc302_ch3_051",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Prolog is a procedural programming language that relies on sequential, step-by-step state modifications to execute calculations.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1, // False
    explanation:
      "Prolog is a logic programming language. It does not use sequential step-by-step state modifications, but instead evaluates logical facts and rules.",
  },
  {
    id: "csc302_ch3_052",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Kotlin is known for combining functional and object-oriented paradigms while maintaining high interoperability with which language?",
    options: ["C++", "Haskell", "Java", "Prolog"],
    correctAnswer: 2,
    explanation:
      "The slides mention Kotlin as a modern multi-paradigm language that runs on the JVM and is highly interoperable with Java.",
  },
  // ─── FORTRAN ───────────────────────────────────────────────────────────────
  {
    id: "csc302_ch3_053",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Who developed the Fortran programming language, and at which organization?",
    options: [
      "Dennis Ritchie at Bell Labs",
      "John Backus at IBM",
      "John McCarthy at MIT",
      "Bjarne Stroustrup at AT&T",
    ],
    correctAnswer: 1,
    explanation:
      "Fortran was developed by John Backus at IBM in 1957. It stood for Formula Translation and was the first major high-level programming language.",
  },
  {
    id: "csc302_ch3_054",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Before Fortran was introduced, approximately how much of a programmer's time was spent manually writing machine code?",
    options: ["10%", "25%", "50%", "75%"],
    correctAnswer: 2,
    explanation:
      "According to the lecture, prior to Fortran, programmers spent up to 50% of their time manually writing machine code. Fortran proved high-level code could compile to near-equivalent assembly speeds.",
  },
  {
    id: "csc302_ch3_055",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "In Fortran's original column-based syntax, what was the purpose of Column 6?",
    options: [
      "Reserved for statement labels",
      "Indicated a continuation of the previous line",
      "Marked the start of a comment",
      "Reserved for variable declarations",
    ],
    correctAnswer: 1,
    explanation:
      "In Fortran's legacy syntax, columns 1–5 were reserved for statement labels, and column 6 indicated that the line was a continuation of the previous statement.",
  },
  {
    id: "csc302_ch3_056",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "In early Fortran, variables starting with the letters I through N were implicitly treated as which data type?",
    options: ["Float", "Boolean", "Integer", "String"],
    correctAnswer: 2,
    explanation:
      "Fortran used implicit typing based on the starting letter of a variable name. Variables beginning with letters I through N were automatically treated as integers.",
  },
  {
    id: "csc302_ch3_057",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "What does the name 'Fortran' stand for?",
    options: [
      "Formal Translation",
      "Formula Translation",
      "Functional Transformation",
      "Forward Transfer",
    ],
    correctAnswer: 1,
    explanation:
      "Fortran stands for Formula Translation. It was designed to translate mathematical formulas into machine-executable code, making it ideal for scientific computing.",
  },

  // ─── ALGOL ─────────────────────────────────────────────────────────────────
  {
    id: "csc302_ch3_058",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "What does the acronym ALGOL stand for?",
    options: [
      "Algorithmic Logic",
      "Algorithmic Language",
      "Abstract General Object Language",
      "Automated General Operations Language",
    ],
    correctAnswer: 1,
    explanation:
      "ALGOL stands for Algorithmic Language. It was designed by an international committee in 1958/1960 as a universal language for academic papers.",
  },
  {
    id: "csc302_ch3_059",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Which formal notation for describing programming language grammar was introduced alongside ALGOL?",
    options: [
      "UML (Unified Modeling Language)",
      "EBNF (Extended Backus-Naur Form only)",
      "BNF (Backus-Naur Form)",
      "regex (Regular Expressions)",
    ],
    correctAnswer: 2,
    explanation:
      "ALGOL introduced Backus-Naur Form (BNF) to formally define its grammar. This became the standard notation for describing the syntax of programming languages.",
  },
  {
    id: "csc302_ch3_060",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Despite ALGOL's brilliant and clean syntax, what critical limitation prevented it from achieving widespread commercial adoption?",
    options: [
      "It did not support recursion",
      "It lacked built-in I/O capabilities",
      "It could only run on IBM mainframes",
      "It had no support for loops or conditionals",
    ],
    correctAnswer: 1,
    explanation:
      "ALGOL lacked built-in I/O capabilities, leaving them to machine-specific implementations. This made it impractical for real-world commercial use despite its elegant syntax.",
  },
  {
    id: "csc302_ch3_061",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Which of the following syntax concepts did ALGOL introduce that we take for granted in modern programming?",
    options: [
      "Garbage collection and pointer arithmetic",
      "Nested block structures and lexical scoping",
      "Message passing and actor isolation",
      "Lazy evaluation and infinite data structures",
    ],
    correctAnswer: 1,
    explanation:
      "ALGOL introduced nested block structures (begin...end) and lexical scoping of variables — foundational syntax concepts that nearly all modern languages inherit.",
  },

  // ─── C LANGUAGE ────────────────────────────────────────────────────────────
  {
    id: "csc302_ch3_062",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Who developed the C programming language and at which research laboratory?",
    options: [
      "John Backus at IBM",
      "Bjarne Stroustrup at AT&T",
      "Dennis Ritchie at Bell Labs",
      "Ken Thompson at Google",
    ],
    correctAnswer: 2,
    explanation:
      "C was developed by Dennis Ritchie at Bell Labs around 1972. It was created primarily to rewrite the Unix operating system in a higher-level language.",
  },
  {
    id: "csc302_ch3_063",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "What was the primary motivation for creating the C programming language?",
    options: [
      "To build the first web browser",
      "To provide a language for AI research",
      "To rewrite the Unix operating system",
      "To replace Fortran in scientific computing",
    ],
    correctAnswer: 2,
    explanation:
      "C was developed circa 1972 by Dennis Ritchie at Bell Labs primarily to rewrite the Unix operating system, maximizing efficiency while maintaining minimal abstraction over hardware.",
  },
  {
    id: "csc302_ch3_064",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "The C language is described as a 'double-edged sword'. What does this refer to?",
    options: [
      "It supports both OOP and functional styles simultaneously",
      "It offers unmatched speed but invites bugs like buffer overflows and memory leaks",
      "It compiles fast but executes slowly",
      "It is easy to learn but hard to master",
    ],
    correctAnswer: 1,
    explanation:
      "C is a double-edged sword because it offers unmatched runtime speed and direct memory manipulation via pointers, but this also invites dangerous bugs such as buffer overflows and memory leaks.",
  },

  // ─── BÖHM & JACOPINI ───────────────────────────────────────────────────────
  {
    id: "csc302_ch3_065",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "In what year did Böhm and Jacopini publish their foundational theorem on structured programming control structures?",
    options: ["1954", "1962", "1966", "1972"],
    correctAnswer: 2,
    explanation:
      "Böhm and Jacopini published their theorem in 1966, proving that any computable function can be expressed using only three control structures: sequence, selection, and iteration.",
  },
  {
    id: "csc302_ch3_066",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "According to the Böhm-Jacopini theorem, which three control structures are sufficient to express any computable function?",
    options: [
      "Recursion, Iteration, and Abstraction",
      "Sequence, Selection, and Iteration",
      "Assignment, Branching, and Looping",
      "Functions, Classes, and Modules",
    ],
    correctAnswer: 1,
    explanation:
      "The Böhm-Jacopini theorem (1966) proved that any computable function can be expressed using only: Sequence (instructions one after another), Selection (if-then-else), and Iteration (while loops).",
  },

  // ─── GANG OF FOUR ──────────────────────────────────────────────────────────
  {
    id: "csc302_ch3_067",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "In what year was the famous 'Gang of Four' (GoF) design patterns book published?",
    options: ["1987", "1991", "1994", "1999"],
    correctAnswer: 2,
    explanation:
      "The Gang of Four book was published in 1994. It formalized 23 classic software design patterns divided into three categories: Creational, Structural, and Behavioural.",
  },
  {
    id: "csc302_ch3_068",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "How many classic design patterns did the Gang of Four (GoF) book formalize?",
    options: ["12", "18", "23", "31"],
    correctAnswer: 2,
    explanation:
      "The Gang of Four book formalized exactly 23 classic software design patterns, divided into three categories: Creational, Structural, and Behavioural.",
  },
  {
    id: "csc302_ch3_069",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Which of the following correctly lists the three categories of GoF design patterns?",
    options: [
      "Functional, Imperative, Declarative",
      "Creational, Structural, Behavioural",
      "Abstract, Concrete, Interface",
      "Singleton, Factory, Observer",
    ],
    correctAnswer: 1,
    explanation:
      "The 23 GoF design patterns are divided into: Creational (e.g., Singleton, Factory, Builder), Structural (e.g., Adapter, Composite, Decorator), and Behavioural (e.g., Observer, Strategy, Command).",
  },
  {
    id: "csc302_ch3_070",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Which of the following patterns belongs to the Creational category of GoF design patterns?",
    options: ["Observer", "Decorator", "Singleton", "Adapter"],
    correctAnswer: 2,
    explanation:
      "Singleton is a Creational pattern. Observer is Behavioural, while Decorator and Adapter are Structural patterns.",
  },
  {
    id: "csc302_ch3_071",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "The class name 'AbstractSingletonProxyFactoryBean' from the Spring Framework is cited in the lecture as an example of what?",
    options: [
      "Elegant use of functional composition",
      "The power of Rust's trait system",
      "The extremes of enterprise OOP abstraction verbosity",
      "A well-designed DSL for Java",
    ],
    correctAnswer: 2,
    explanation:
      "The lecture cites AbstractSingletonProxyFactoryBean as a satirical example showcasing the extremes of enterprise OOP abstraction, demonstrating how over-engineering leads to highly verbose boilerplate code.",
  },

  // ─── COMPOSITION OVER INHERITANCE / OOP CRITIQUES ──────────────────────────
  {
    id: "csc302_ch3_072",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "What is the 'Gorilla-Banana Problem' as described by Joe Armstrong, the creator of Erlang?",
    options: [
      "The difficulty of running Erlang on non-Unix systems",
      "Inheriting unnecessary context — you wanted a banana but got the gorilla holding it and the entire jungle",
      "A concurrency bug where two actors both try to consume the same message",
      "A memory leak caused by deeply nested object hierarchies",
    ],
    correctAnswer: 1,
    explanation:
      "Joe Armstrong famously described the Gorilla-Banana Problem to critique deep OOP inheritance: 'You wanted a banana but what you got was a gorilla holding the banana and the entire jungle.' It illustrates how inheritance pulls in excessive implicit context.",
  },
  {
    id: "csc302_ch3_073",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "What does the modern engineering consensus recommend instead of deep class inheritance for code reuse?",
    options: [
      "Multiple inheritance with abstract base classes",
      "Composition over Inheritance",
      "Using global variables to share state",
      "Replacing all classes with pure functions",
    ],
    correctAnswer: 1,
    explanation:
      "The modern engineering consensus, as stated in the lecture, is to prefer Composition over Inheritance — assembling behaviour from components rather than extending base classes, avoiding fragile deep hierarchies.",
  },

  // ─── LISP ──────────────────────────────────────────────────────────────────
  {
    id: "csc302_ch3_074",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "What is 'Homoiconicity' as introduced by Lisp?",
    options: [
      "The ability to run the same code on multiple hardware platforms",
      "A language where code is represented using its own primary data structures",
      "Automatic type inference without explicit declarations",
      "The property of functions always returning the same output for the same input",
    ],
    correctAnswer: 1,
    explanation:
      "Homoiconicity means a language where code is represented using its own primary data structures. In Lisp, code is simply nested lists, making it straightforward to write macros that rewrite the language's own structure dynamically.",
  },
  {
    id: "csc302_ch3_075",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Which important memory management concept did Lisp introduce to programming languages?",
    options: [
      "Manual pointer arithmetic",
      "Stack-based memory allocation only",
      "Automatic garbage collection",
      "The borrow checker",
    ],
    correctAnswer: 2,
    explanation:
      "Lisp introduced the concept of automatic garbage collection, freeing developers from manually tracking dynamically allocated memory. This was a foundational innovation that nearly all modern high-level languages now use.",
  },
  {
    id: "csc302_ch3_076",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Lisp is described as the second-oldest active high-level programming language. Which language is older?",
    options: ["ALGOL", "Fortran", "COBOL", "Assembly"],
    correctAnswer: 1,
    explanation:
      "According to the lecture, Lisp (created by John McCarthy at MIT in 1958) is the second-oldest active high-level programming language, after Fortran (1957).",
  },
  {
    id: "csc302_ch3_077",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "What is the syntax style used by Lisp for expressing operations?",
    options: [
      "Infix notation: (arg1 operator arg2)",
      "Postfix notation: (arg1 arg2 operator)",
      "Nested prefix list notation: (operator arg1 arg2)",
      "Indentation-based block notation",
    ],
    correctAnswer: 2,
    explanation:
      "Lisp uses nested prefix list notation: (operator arg1 arg2 ...). For example, addition is written as (+ 3 4) rather than 3 + 4.",
  },

  // ─── HASKELL ───────────────────────────────────────────────────────────────
  {
    id: "csc302_ch3_078",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "What is 'Lazy Evaluation' as implemented in Haskell?",
    options: [
      "Code that is only compiled when the program is first deployed",
      "Expressions that are not evaluated when bound to variables, but only when their values are actually needed",
      "A garbage collection strategy that runs only when memory is critically low",
      "Functions that skip type checking until runtime",
    ],
    correctAnswer: 1,
    explanation:
      "Lazy Evaluation in Haskell means expressions are not evaluated when bound to variables, but only when their actual values are needed. This allows Haskell to construct and work with infinite data structures.",
  },
  {
    id: "csc302_ch3_079",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Haskell's lazy evaluation enables which otherwise impossible capability?",
    options: [
      "Running on hardware without an operating system",
      "Compiling to both native code and JavaScript simultaneously",
      "Constructing and working with infinite data structures",
      "Automatic parallelization of all function calls",
    ],
    correctAnswer: 2,
    explanation:
      "Because Haskell only evaluates expressions when needed, it can represent infinite data structures (like an infinite list of Fibonacci numbers) and compute only the portion actually requested.",
  },
  {
    id: "csc302_ch3_080",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "In what year was Haskell designed, and by whom?",
    options: [
      "1972, by Dennis Ritchie",
      "1984, by John McCarthy",
      "1990, by a committee as an open standard",
      "1995, by James Gosling",
    ],
    correctAnswer: 2,
    explanation:
      "Haskell was designed in 1990 by a committee as an open standard for purely functional languages. Unlike most languages, it had no single inventor.",
  },

  // ─── MONADS ────────────────────────────────────────────────────────────────
  {
    id: "csc302_ch3_081",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "What problem do Monads solve in purely functional languages like Haskell?",
    options: [
      "How to implement multiple inheritance without conflicts",
      "How to handle real-world side effects (I/O, database writes) while keeping functions pure",
      "How to automatically parallelize recursive functions",
      "How to manage deep class hierarchies without the gorilla-banana problem",
    ],
    correctAnswer: 1,
    explanation:
      "Monads solve the challenge of how a purely functional language with no side effects handles real-world operations like database writes, file I/O, and user input — by wrapping values and chaining computations while keeping side effects cleanly isolated.",
  },
  {
    id: "csc302_ch3_082",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Which researcher is associated with the quote: 'A monad is just a monoid in the category of endofunctors, what's the problem?'",
    options: ["Alan Kay", "Philip Wadler", "Alonzo Church", "John McCarthy"],
    correctAnswer: 1,
    explanation:
      "This famous quote introducing Category Theory terminology to computer science is attributed to Philip Wadler, as cited in the lecture slides.",
  },
  {
    id: "csc302_ch3_083",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "In simple terms, how can a Monad be best described?",
    options: [
      "A design pattern for creating singleton objects",
      "A programmable wrapper that controls how operations are piped together, managing state or failure behind the scenes",
      "A type of infinite loop used in lazy evaluation",
      "A compiler optimization technique for recursive functions",
    ],
    correctAnswer: 1,
    explanation:
      "Simply put, a Monad is a programmable wrapper. It controls how operations are piped together, automatically managing state or failure behind the scenes while keeping the rest of the code pure.",
  },

  // ─── HINDLEY-MILNER / ADTs ─────────────────────────────────────────────────
  {
    id: "csc302_ch3_084",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "What is the key feature of the Hindley-Milner type system used in languages like Haskell and OCaml?",
    options: [
      "Dynamic typing with runtime type checks",
      "Type Inference — the compiler deduces types without explicit declarations",
      "Mandatory type annotations on every variable",
      "A single universal type for all values",
    ],
    correctAnswer: 1,
    explanation:
      "The key feature of the Hindley-Milner type system is Type Inference — the compiler can mathematically deduce the most general type for every expression without requiring the programmer to write explicit type annotations.",
  },
  {
    id: "csc302_ch3_085",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "In functional programming, what does the type definition `data Maybe a = Nothing | Just a` represent?",
    options: [
      "A class hierarchy with two subclasses",
      "An Algebraic Data Type (ADT) used instead of null or exceptions for safe division",
      "A Monad wrapper for asynchronous operations",
      "A lazy evaluation strategy for infinite lists",
    ],
    correctAnswer: 1,
    explanation:
      "This is an Algebraic Data Type (ADT). Instead of throwing exceptions or returning null for operations like safe division, the Maybe type returns either Nothing (no value) or Just a (a value exists), making failure explicit and safe.",
  },

  // ─── JAPAN 5TH GENERATION ──────────────────────────────────────────────────
  {
    id: "csc302_ch3_086",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "What was the goal of Japan's Fifth Generation Computer Systems Project (1982–1992)?",
    options: [
      "To develop the first commercial internet infrastructure",
      "To build supercomputing hardware centred around logic programming for AI capabilities",
      "To create a purely functional operating system",
      "To design a new OOP language to replace C++",
    ],
    correctAnswer: 1,
    explanation:
      "Japan's Ministry of International Trade funded the Fifth Generation project (1982–1992) to build supercomputing hardware centred around logic programming (Prolog), aiming to create AI computers capable of speech translation, reasoning, and learning.",
  },
  {
    id: "csc302_ch3_087",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Why was Japan's Fifth Generation Computer Systems Project ultimately cancelled?",
    options: [
      "The Japanese government ran out of funding after two years",
      "General-purpose x86 microprocessors evolved much faster and logic programming had a steep learning curve",
      "The project successfully completed its goals ahead of schedule",
      "A competing American project achieved the same goals first",
    ],
    correctAnswer: 1,
    explanation:
      "The project was cancelled because general-purpose microprocessors (x86) evolved much faster than the specialized logic-programming hardware, and Prolog had a steep learning curve for many real-world system tasks.",
  },

  // ─── PROLOG BACKTRACKING ───────────────────────────────────────────────────
  {
    id: "csc302_ch3_088",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "What is 'Backtracking' in Prolog's execution model?",
    options: [
      "Reverting to a previous version of the source code",
      "When a logical path fails, the resolution engine rolls back and tries alternate rules/facts",
      "Printing the execution trace of a program for debugging",
      "Recursively calling a function until the base case is reached",
    ],
    correctAnswer: 1,
    explanation:
      "Backtracking in Prolog means that if a chosen logical path fails to satisfy a query, the resolution engine systematically rolls back and tries alternate rules/facts until a solution is found or all options are exhausted.",
  },
  {
    id: "csc302_ch3_089",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Why can incorrect ordering of recursive rules in Prolog cause an infinite loop?",
    options: [
      "Prolog does not support recursion natively",
      "Prolog's search engine uses depth-first search, so wrong rule ordering can cause it to loop indefinitely",
      "Prolog runs all rules in parallel, causing race conditions",
      "Recursive rules always require a garbage collector to terminate",
    ],
    correctAnswer: 1,
    explanation:
      "Because Prolog's resolution engine uses depth-first search, placing recursive rules in the wrong order can cause it to keep descending into one branch without ever backtracking, resulting in an infinite loop.",
  },

  // ─── ERLANG / SUPERVISION TREES ────────────────────────────────────────────
  {
    id: "csc302_ch3_090",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "What uptime record did Ericsson's AXD301 switch, written in Erlang, famously achieve?",
    options: [
      "99.9% (three 9s)",
      "99.999% (five 9s)",
      "99.9999999% (nine 9s)",
      "100% with zero downtime",
    ],
    correctAnswer: 2,
    explanation:
      "Ericsson's AXD301 switch, written in Erlang, achieved a legendary uptime rating of 99.9999999% — nine 9s — over several years, demonstrating the extraordinary fault-tolerance of the Actor Model and 'Let it Crash' philosophy.",
  },
  {
    id: "csc302_ch3_091",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "What are 'Supervision Trees' in Erlang's fault-tolerance model?",
    options: [
      "Decision trees used by AI agents to choose actions",
      "Hierarchies where supervisor actors automatically restart crashed worker actors in a clean state",
      "Class inheritance hierarchies used for code reuse",
      "Binary search trees used for efficient message routing",
    ],
    correctAnswer: 1,
    explanation:
      "In Erlang, actors are arranged in Supervision Trees — hierarchies where specialized supervisor actors monitor worker actors. If a worker crashes, the supervisor automatically restarts it in a known clean state.",
  },
  {
    id: "csc302_ch3_092",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "What is the core idea behind Erlang's 'Let it Crash' philosophy?",
    options: [
      "Write programs with no error handling to maximize execution speed",
      "Don't try to handle fatal failures defensively — let the actor crash and have a supervisor restart it cleanly",
      "Allow memory leaks to accumulate and crash the system periodically for cleanup",
      "Use exceptions to propagate errors up the entire call stack",
    ],
    correctAnswer: 1,
    explanation:
      "Erlang's 'Let it Crash' philosophy says: instead of spending massive amounts of code defensively catching and handling unexpected errors, let the failing actor crash and have its supervisor restart it in a known clean state.",
  },

  // ─── GO ────────────────────────────────────────────────────────────────────
  {
    id: "csc302_ch3_093",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Who designed the Go programming language, and at which company?",
    options: [
      "Bjarne Stroustrup, Linus Torvalds, and Dennis Ritchie at Microsoft",
      "Robert Griesemer, Rob Pike, and Ken Thompson at Google",
      "Martin Odersky and James Gosling at Sun Microsystems",
      "Joe Armstrong, Mike Williams, and Robert Virding at Ericsson",
    ],
    correctAnswer: 1,
    explanation:
      "Go was designed at Google in 2009 by Robert Griesemer, Rob Pike, and Ken Thompson. It is based on C.A.R. Hoare's Communicating Sequential Processes (CSP) mathematical formalism.",
  },
  {
    id: "csc302_ch3_094",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "What is the name of Go's concurrency unit, equivalent to a lightweight thread?",
    options: ["Actor", "Goroutine", "Coroutine", "Fiber"],
    correctAnswer: 1,
    explanation:
      "Go's concurrent workers are called Goroutines. They are multiplexed onto a pool of OS threads automatically by Go's runtime scheduler, making them extremely lightweight compared to traditional OS threads.",
  },
  {
    id: "csc302_ch3_095",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "In Go's CSP model, how do Goroutines communicate with each other?",
    options: [
      "By writing to and reading from shared global variables",
      "By calling methods directly on each other's objects",
      "Through typed pipelines called Channels",
      "By posting messages to a central event bus",
    ],
    correctAnswer: 2,
    explanation:
      "In Go, Goroutines communicate through typed pipelines called Channels. The syntax is: `ch <- value` to send and `value := <-ch` to receive. This embodies the Go philosophy: 'share memory by communicating.'",
  },

  // ─── BRAINFUCK ─────────────────────────────────────────────────────────────
  {
    id: "csc302_ch3_096",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "How many characters make up the entire instruction set of the Brainfuck esoteric language?",
    options: ["4", "6", "8", "16"],
    correctAnswer: 2,
    explanation:
      "Brainfuck consists of only 8 characters: > < + - . , [ ]. Each represents an operation on an infinite tape with a data pointer, and the original compiler was designed to fit in less than 200 bytes of Amiga machine code.",
  },
  {
    id: "csc302_ch3_097",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Who created the Brainfuck esoteric programming language and in what year?",
    options: [
      "Don Woods in 1972",
      "David Morgan-Mar in 1990",
      "Urban Müller in 1993",
      "Alan Kay in 1980",
    ],
    correctAnswer: 2,
    explanation:
      "Brainfuck was created by Urban Müller in 1993 with the specific goal of writing a compiler that compiled to less than 200 bytes of Amiga machine code.",
  },
  {
    id: "csc302_ch3_098",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "What was the original design goal behind creating the Brainfuck compiler?",
    options: [
      "To create a language suitable for teaching beginners",
      "To write a compiler that compiled to less than 200 bytes of Amiga machine code",
      "To prove that OOP is unnecessary for systems programming",
      "To create a language with purely symbolic rather than alphabetic syntax",
    ],
    correctAnswer: 1,
    explanation:
      "Urban Müller created Brainfuck in 1993 with the goal of writing the smallest possible compiler — one that compiled to less than 200 bytes of Amiga machine code — using only 8 instruction characters.",
  },

  // ─── INTERCAL ──────────────────────────────────────────────────────────────
  {
    id: "csc302_ch3_099",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "What unique 'politeness' requirement does the INTERCAL programming language impose on programmers?",
    options: [
      "All variable names must be respectful words",
      "The keyword PLEASE must be used frequently — too little is 'unpolite', too much is 'overly pleading'",
      "Comments must be written as formal letters",
      "Every function must include a thank-you statement at the end",
    ],
    correctAnswer: 1,
    explanation:
      "INTERCAL requires programmers to use the keyword PLEASE frequently enough. If used too little, the compiler declares the program 'unpolite' and refuses to compile. If used too many times, it rejects it as 'overly pleading'.",
  },
  {
    id: "csc302_ch3_100",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "What was the satirical design premise behind the INTERCAL language (1972)?",
    options: [
      "To create the fastest possible compiled language",
      "To create a language with absolutely no syntactic similarities to any existing language of its time",
      "To prove that any algorithm can be written in under 10 lines",
      "To design a language readable by non-programmers",
    ],
    correctAnswer: 1,
    explanation:
      "INTERCAL was designed by Don Woods and James M. Lyon in 1972 with the satirical premise of creating a language that had absolutely no syntactic similarities to any existing programming languages of its time.",
  },

  // ─── PIET & CHEF ───────────────────────────────────────────────────────────
  {
    id: "csc302_ch3_101",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "How is code represented in the Piet esoteric programming language?",
    options: [
      "As a sequence of musical notes",
      "As abstract colored images where operations are triggered by transitions in hue and brightness",
      "As culinary recipe instructions with ingredients and mixing bowls",
      "As whitespace characters (spaces, tabs, and newlines) only",
    ],
    correctAnswer: 1,
    explanation:
      "In Piet (created by David Morgan-Mar), code is represented as abstract colored images. A pointer travels through color blocks and operations are triggered by transitions in hue and brightness.",
  },
  {
    id: "csc302_ch3_102",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "What makes the Chef esoteric programming language uniquely interesting?",
    options: [
      "It can only be run on mobile devices",
      "Programs read exactly like culinary recipes, and a valid program can be cooked and eaten as a real dish",
      "It represents code as colored pixels on a canvas",
      "It requires every statement to end with a politeness keyword",
    ],
    correctAnswer: 1,
    explanation:
      "Chef (by David Morgan-Mar) is unique because programs read exactly like culinary recipes — variables are ingredients, mixing bowls serve as processing stacks — and a valid Chef program can actually be cooked and eaten as a real dish!",
  },

  // ─── SCALA ─────────────────────────────────────────────────────────────────
  {
    id: "csc302_ch3_103",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Who created Scala and in what year?",
    options: [
      "James Gosling in 1995",
      "Bjarne Stroustrup in 1985",
      "Martin Odersky in 2004",
      "Guido van Rossum in 1991",
    ],
    correctAnswer: 2,
    explanation:
      "Scala was created by Martin Odersky in 2004 to bridge functional programming with the enterprise Java Virtual Machine (JVM), combining pure OOP (every value is an object) with pure functional design (every function is a first-class value).",
  },
  {
    id: "csc302_ch3_104",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "What powerful synthesis does Scala achieve that distinguishes it from both pure Java and pure Haskell?",
    options: [
      "It combines logic programming with concurrent actor systems",
      "Every value is an object AND every function is a first-class value — merging pure OOP with pure functional design",
      "It eliminates the need for a virtual machine by compiling to native code",
      "It uses lazy evaluation alongside mandatory garbage collection",
    ],
    correctAnswer: 1,
    explanation:
      "Scala's powerful synthesis: every value is an object (pure OOP) and every function is a first-class value (pure functional). This allows clean functional pipelines inside structured object-oriented class hierarchies.",
  },

  // ─── DSLs ──────────────────────────────────────────────────────────────────
  {
    id: "csc302_ch3_105",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "What is the difference between an Internal DSL and an External DSL?",
    options: [
      "Internal DSLs run faster; External DSLs are more expressive",
      "Internal DSLs leverage the host language's syntax; External DSLs are standalone languages with their own parsers",
      "Internal DSLs are for backend logic; External DSLs are for frontend styling",
      "Internal DSLs use OOP; External DSLs use functional programming",
    ],
    correctAnswer: 1,
    explanation:
      "Internal DSLs leverage the host language's syntax to write domain-specific expressions (e.g., Gradle in Groovy, Rails routes in Ruby). External DSLs are standalone languages with their own custom parsers and interpreters (e.g., SQL, CSS, regex).",
  },
  {
    id: "csc302_ch3_106",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Which of the following is an example of an External DSL as described in the lecture?",
    options: [
      "Gradle build scripts written in Groovy",
      "Rails routes written in Ruby",
      "SQL queries",
      "Java lambdas in a stream pipeline",
    ],
    correctAnswer: 2,
    explanation:
      "SQL is an External DSL — a standalone language with its own custom parser and interpreter, not embedded within another language's syntax. Gradle in Groovy and Rails routes in Ruby are examples of Internal DSLs.",
  },

  // ─── QUANTUM COMPUTING ─────────────────────────────────────────────────────
  {
    id: "csc302_ch3_107",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Why can't traditional if/else branching be used in quantum programming?",
    options: [
      "Quantum computers do not have enough memory to evaluate conditions",
      "Inspecting a variable's value in a quantum state collapses the wave function",
      "Quantum programs must be written in pure functional style with no conditionals",
      "If/else requires shared mutable state which quantum computers don't support",
    ],
    correctAnswer: 1,
    explanation:
      "In a quantum state, you cannot inspect variable values to write simple if/else branching without collapsing the wave function. This is a fundamental constraint that forces entirely new programming paradigms for quantum computation.",
  },
  {
    id: "csc302_ch3_108",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Which two languages are cited in the lecture as examples built for quantum programming paradigms?",
    options: [
      "Q# (Microsoft) and Qiskit (IBM)",
      "Quake (Google) and QuantumPy (MIT)",
      "Haskell and Erlang",
      "Prolog and LISP",
    ],
    correctAnswer: 0,
    explanation:
      "The lecture cites Microsoft's Q# and IBM's Qiskit as languages building new specialized paradigms to express quantum operations safely, replacing classical bits with qubits and logic gates with superposition and entanglement.",
  },
  {
    id: "csc302_ch3_109",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "In quantum computing, what replaces standard binary bits?",
    options: ["Nibbles", "Qubits", "Trits", "Quantum Gates"],
    correctAnswer: 1,
    explanation:
      "In quantum computing, Qubits replace standard binary bits. Unlike classical bits (0 or 1), qubits can exist in superposition — representing both 0 and 1 simultaneously until measured.",
  },

  // ─── AI ERA PARADIGM SHIFT ─────────────────────────────────────────────────
  {
    id: "csc302_ch3_110",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "According to the lecture, how does the rise of AI/LLMs shift the primary developer paradigm?",
    options: [
      "Developers no longer need to understand programming paradigms",
      "From syntactic execution to architectural oversight and validation",
      "From object-oriented thinking to purely functional thinking",
      "From high-level languages back to assembly for AI optimization",
    ],
    correctAnswer: 1,
    explanation:
      "The lecture states that in the AI era, the primary developer paradigm shifts from syntactic execution to architectural oversight and validation — programmers transition from writing raw code to designing systems, specifying parameters, and evaluating generated code.",
  },
];

export default csc302Module3;
