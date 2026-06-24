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
];

export default csc302Module3;
