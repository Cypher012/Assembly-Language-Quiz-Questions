import { QuestionV2 } from "@/lib/quiz-types";

const csc302Chapter3Questions: QuestionV2[] = [
  {
    id: "csc302_ch3_001",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "What is a programming paradigm?",
    options: [
      "A fundamental style, model, or approach to computer programming that dictates how execution is conceptualized and code is organized",
      "A compiler implementation is a tool, not a conceptual style of programming",
      "A licensing model that determines how a programming language may be commercially distributed",
      "A hardware specification describing how a processor executes instructions"
    ],
    correctAnswer: 0,
    explanation: "The Introduction section defines a programming paradigm as a fundamental style, model, or approach to computer programming that dictates how a programmer conceptualizes execution, structures logic, and organizes code.\n\nA compiler implementation is a tool, not a conceptual style of programming.\n\nA licensing model concerns distribution rights, which the deck never discusses.\n\nA hardware specification describes physical execution, which the deck distinguishes from a paradigm."
  },
  {
    id: "csc302_ch3_002",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "What is the relationship between a programming paradigm and a programming language?",
    options: [
      "A paradigm is a lens through which a language is designed and used, not the language itself",
      "Syntax rules are a property of a specific language, not a description of the paradigm concept",
      "A paradigm is a compiled binary produced from a language's source files",
      "A paradigm is a certification a language earns after passing industry benchmarks"
    ],
    correctAnswer: 0,
    explanation: "The Introduction section states explicitly that a paradigm is not a programming language, but a lens through which a language is designed and used.\n\nSyntax rules are a property of a specific language, not a description of the paradigm concept.\n\nA compiled binary is an execution artifact, unrelated to paradigm philosophy.\n\nA certification or benchmark process is never mentioned in the source."
  },
  {
    id: "csc302_ch3_003",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "In the Sapir-Whorf Hypothesis as applied to computer science, what effect does the language used to write a program have?",
    options: [
      "It deeply influences how the programmer conceptualizes problems and engineers solutions",
      "It has no measurable effect on how a developer approaches a problem",
      "It only affects the visual appearance of the code, not the underlying logic",
      "It determines the exact runtime speed of the compiled program regardless of algorithm"
    ],
    correctAnswer: 0,
    explanation: "The Introduction section states the Sapir-Whorf Hypothesis in CS holds that the language used to write programs deeply influences how problems are conceptualized and solutions engineered.\n\nClaiming no effect contradicts this hypothesis directly.\n\nReducing the effect to visual appearance ignores the conceptual influence the source describes.\n\nRuntime speed is a hardware and algorithm concern, not what the hypothesis addresses."
  },
  {
    id: "csc302_ch3_004",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "The 1990s era of paradigm evolution was defined by C++ and Java coming to dominate commercial software development.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "The Evolution of Paradigms timeline labels the 1990s as Mainstream OOP Consolidation, explicitly stating that C++ and Java dominate commercial development during this period."
  },
  {
    id: "csc302_ch3_005",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "What characterized the 1940s-1950s era in the evolution of programming paradigms?",
    options: [
      "Programmers wrote binary, assembly, or early Fortran based heavily on the underlying physical computer architecture",
      "Symbolic and functional computation via Lisp, alongside Simula's classes, is placed in the 1960s Academic Divergence era",
      "Logic programming and declarative databases emerged alongside the decline of GOTO",
      "Functional capabilities such as lambdas were integrated into mainstream imperative languages"
    ],
    correctAnswer: 0,
    explanation: "The Evolution of Paradigms timeline labels the 1940s-1950s as Hardware-Driven, noting programmers wrote binary, assembly, or early Fortran based heavily on the underlying physical architecture.\n\nSymbolic and functional computation via Lisp, alongside Simula's classes, is placed in the 1960s Academic Divergence era.\n\nThe decline of GOTO and the rise of Prolog and SQL are placed in the 1970s-1980s.\n\nIntegrating functional capabilities like lambdas into imperative languages is placed in the 2000s-Present era."
  },
  {
    id: "csc302_ch3_006",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Which of the following correctly pairs a meta-paradigm with its iconic examples in the Taxonomy of Programming Paradigms?",
    options: [
      "The Concurrent meta-paradigm's iconic examples are Prolog and SQL",
      "The Object-Oriented meta-paradigm's primary focus is the mathematical evaluation of functions",
      "All of these",
      "None of these"
    ],
    correctAnswer: 3,
    explanation: "The Taxonomy table lists Prolog and SQL as iconic examples of the Declarative meta-paradigm, not Concurrent, whose iconic examples are Erlang and Go, so the first statement is contradicted.\n\nThe table lists the Object-Oriented meta-paradigm's primary focus as encapsulated objects passing messages, not the mathematical evaluation of functions, which is instead Functional's focus, so the second statement is also contradicted."
  },
  {
    id: "csc302_ch3_007",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Which development is associated with the 1960s Academic Divergence era of paradigm evolution?",
    options: [
      "Lisp introducing symbolic and functional computation while Simula proposed classes",
      "The widespread commercial dominance of C++ and Java",
      "The decline of GOTO alongside the emergence of Prolog and SQL",
      "The canceled Fifth Generation Computer Systems Project"
    ],
    correctAnswer: 0,
    explanation: "The Evolution of Paradigms timeline places the emergence of high-level syntax in the 1960s, with Lisp introducing symbolic and functional computation and Simula proposing classes.\n\nC++ and Java's commercial dominance is placed in the 1990s.\n\nThe decline of GOTO and emergence of Prolog and SQL is placed in the 1970s-1980s.\n\nThe Fifth Generation Computer Systems Project is a Part V anecdote about Japan's 1982-1992 logic-programming initiative, not the 1960s timeline entry."
  },
  {
    id: "csc302_ch3_008",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "In the Taxonomy of Programming Paradigms, which statement correctly matches a meta-paradigm to its primary focus?",
    options: [
      "Structured is defined by control flow without arbitrary jumps",
      "Declarative is defined by describing what to achieve through rules and assertions",
      "All of these",
      "None of these"
    ],
    correctAnswer: 2,
    explanation: "The Taxonomy of Programming Paradigms table lists the Structured meta-paradigm's primary focus as control flow without arbitrary jumps, with ALGOL and Pascal as iconic examples.\n\nThe same table lists the Declarative meta-paradigm's primary focus as what to achieve through rules and assertions, with Prolog, SQL, and HTML as iconic examples, so both pairings are supported."
  },
  {
    id: "csc302_ch3_009",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "What defined the 1970s-1980s era of paradigm evolution?",
    options: [
      "The decline of GOTO alongside the emergence of logic programming and declarative databases",
      "Lisp's symbolic computation and Simula's classes belong to the 1960s",
      "The dominance of C++ and Java in commercial software",
      "The integration of lambdas into imperative and object-oriented languages"
    ],
    correctAnswer: 0,
    explanation: "The Evolution of Paradigms timeline describes the 1970s-1980s as Structured and Relational Models, marked by the decline of GOTO and the emergence of logic programming (Prolog) and declarative databases (SQL).\n\nLisp's symbolic computation and Simula's classes belong to the 1960s.\n\nC++ and Java's dominance belongs to the 1990s.\n\nLambda integration into imperative and OOP languages belongs to the 2000s-Present era."
  },
  {
    id: "csc302_ch3_010",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Lambdas being added to languages like Java and C++ is an example of which era in the evolution of programming paradigms?",
    options: [
      "The 2000s-Present Pragmatic Convergence, integrating functional capabilities into imperative and OOP languages",
      "The 1990s Mainstream OOP Consolidation, when C++ and Java first dominated commercial development",
      "The 1960s Academic Divergence, when high-level syntax first emerged",
      "The 1940s-1950s Hardware-Driven era, when code closely mirrored physical architecture"
    ],
    correctAnswer: 0,
    explanation: "The Evolution of Paradigms timeline places the integration of functional capabilities such as lambdas in Java and C++ under the 2000s-Present Pragmatic Convergence.\n\nThe 1990s era is about OOP consolidation itself, not later functional additions.\n\nThe 1960s era is about the initial emergence of high-level syntax like Lisp and Simula.\n\nThe 1940s-1950s era predates high-level languages entirely."
  },
  {
    id: "csc302_ch3_011",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "What is the lesson behind the idea that there is 'No Single Silver Bullet' among programming paradigms?",
    options: [
      "Believing one paradigm is universally superior to all others is a classic engineering pitfall, since paradigms are tools",
      "The source never claims functional rewrites are mandatory for competitiveness",
      "Only the imperative paradigm has proven durable enough to justify continued use in industry",
      "Paradigms compete directly with one another and only one can be adopted per project"
    ],
    correctAnswer: 0,
    explanation: "The Taxonomy section closes with the point that paradigms are tools, and believing one is universally superior to others is a classic engineering pitfall.\n\nThe source never claims functional rewrites are mandatory for competitiveness.\n\nIt does not single out imperative programming as uniquely durable; the whole taxonomy lists six meta-paradigms as valid tools.\n\nThe deck's overall theme, most modern languages are multi-paradigm, contradicts the idea that only one paradigm can be adopted per project."
  },
  {
    id: "csc302_ch3_012",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "What is the core premise of the imperative programming model?",
    options: [
      "Programs are sequences of commands that directly mutate a global or local state",
      "Describing the desired result while a runtime handles control is the Declarative philosophy, not the imperative one",
      "Programs are collections of isolated actors that communicate only by passing messages",
      "Programs are pure functions evaluated mathematically without state changes"
    ],
    correctAnswer: 0,
    explanation: "The Foundations of the Imperative Model section states the core premise: programs are sequences of commands that directly mutate a global or local state.\n\nDescribing the desired result while a runtime handles control is the Declarative philosophy, not the imperative one.\n\nIsolated actors communicating by messages describes the Erlang actor model in Part VI.\n\nPure mathematical function evaluation without state changes describes the Functional paradigm's core premise."
  },
  {
    id: "csc302_ch3_013",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "In the Von Neumann Connection described for imperative code, what do variables correspond to?",
    options: [
      "Memory cells",
      "Program counter increments",
      "Register-to-memory data transfers",
      "Recursive Horn clause resolutions"
    ],
    correctAnswer: 0,
    explanation: "The Von Neumann Connection maps variables to memory cells directly.\n\nProgram counter increments and jumps are mapped to control flow, not variables.\n\nRegister-to-memory data transfer is mapped to assignment, not variables.\n\nHorn clause resolution is a Prolog concept from Part V and has no place in the Von Neumann mapping."
  },
  {
    id: "csc302_ch3_014",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "In the Von Neumann Connection, what does assignment correspond to at the hardware level?",
    options: [
      "Data transfer from register to memory",
      "Program counter increments and jumps",
      "A memory cell holding a fixed value",
      "A mailbox receiving a message from another process"
    ],
    correctAnswer: 0,
    explanation: "The Von Neumann Connection maps assignment to data transfer from register to memory.\n\nProgram counter increments and jumps are the mapping given for control flow, a separate row.\n\nA memory cell is the mapping given for variables, not assignment.\n\nA mailbox receiving a message describes the Erlang actor model in Part VI, unrelated to the Von Neumann mapping."
  },
  {
    id: "csc302_ch3_015",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Early imperative languages that relied on arbitrary GOTO jumps often produced code nicknamed 'spaghetti code'.",
    options: [
      "True",
      "False",
      "Maybe",
      "I don't know"
    ],
    correctAnswer: 0,
    explanation: "The GOTO Controversy section states early imperative languages depended on arbitrary GOTO jumps, leading to hard-to-maintain code that it nicknames 'spaghetti code', confirming the claim."
  },
  {
    id: "csc302_ch3_016",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "The operation x = x + 1 is used as an example. What point does this example illustrate about imperative programming?",
    options: [
      "The operation makes no mathematical sense as an equation, but represents a foundational state-transition in the imperative model",
      "Referential transparency is a Functional Programming pillar describing replaceability with an evaluated result, which this mutating statement violates rather than illustrates",
      "The operation is an example of a pure function with no observable side effects",
      "The operation shows how lazy evaluation defers computation until a value is actually needed"
    ],
    correctAnswer: 0,
    explanation: "The Assignment Operator section states x = x + 1 makes no sense mathematically, but represents a foundational state-transition in the imperative model.\n\nReferential transparency is a Functional Programming pillar describing replaceability with an evaluated result, which this mutating statement violates rather than illustrates.\n\nPurity means no side effects, but this operation's entire point is mutating state, a side effect.\n\nLazy evaluation is a Haskell concept from Part IV, unrelated to this imperative example."
  },
  {
    id: "csc302_ch3_017",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Who developed Fortran, and where?",
    options: [
      "John Backus at IBM",
      "Dennis Ritchie at Bell Labs",
      "John McCarthy at MIT",
      "Alain Colmerauer at the University of Marseille"
    ],
    correctAnswer: 0,
    explanation: "The Fortran section credits John Backus at IBM with developing Fortran in 1957.\n\nDennis Ritchie developed C at Bell Labs, a different language covered later in Part II.\n\nJohn McCarthy created Lisp at MIT, covered in Part IV.\n\nAlain Colmerauer created Prolog in Marseille, covered in Part V."
  },
  {
    id: "csc302_ch3_018",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "In what year was Fortran developed?",
    options: [
      "1957",
      "1958 is the year given for ALGOL's breakthrough (also cited as 1958/1960) and separately for Lisp's creation",
      "1967",
      "1972"
    ],
    correctAnswer: 0,
    explanation: "The Fortran section states it was developed by John Backus at IBM in 1957.\n\n1958 is the year given for ALGOL's breakthrough (also cited as 1958/1960) and separately for Lisp's creation.\n\n1967 is the year Simula 67 was designed at the Norwegian Computing Center.\n\n1972 is the year both C and Prolog trace their origins to in the deck."
  },
  {
    id: "csc302_ch3_019",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Roughly how much of their time did programmers spend manually writing machine code before Fortran existed?",
    options: [
      "Up to 50%",
      "The deck never cites a 90% figure for this anecdote",
      "Roughly 10%",
      "Roughly 25%"
    ],
    correctAnswer: 0,
    explanation: "The Fortran anecdote states that prior to Fortran, programmers spent up to 50% of their time manually writing machine code.\n\nThe deck never cites a 90% figure for this anecdote.\n\nA 10% figure is not supported anywhere in the Fortran section.\n\nA 25% figure is likewise never stated in the source."
  },
  {
    id: "csc302_ch3_020",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "What did Fortran prove about high-level abstract code?",
    options: [
      "That it could compile into assembly almost as fast as hand-optimized machine code",
      "Fortran still relied on a compiler to perform this translation, so it did not eliminate compilers",
      "That it required no variable type declarations of any kind",
      "That it could run directly on quantum hardware without translation"
    ],
    correctAnswer: 0,
    explanation: "The Fortran section states that Fortran (Formula Translation) proved high-level abstract code could compile into assembly almost as fast as hand-optimized machine code.\n\nFortran still relied on a compiler to perform this translation, so it did not eliminate compilers.\n\nFortran's legacy syntax actually relied on implicit typing rules by starting letter, not the total absence of type rules.\n\nQuantum hardware is a Part IX topic unrelated to Fortran's 1957 achievement."
  },
  {
    id: "csc302_ch3_021",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "In Fortran's legacy syntax, what were columns 1-5 of a line reserved for?",
    options: [
      "Statement labels",
      "Continuation indicators",
      "Comment text only",
      "The implicit variable type declaration"
    ],
    correctAnswer: 0,
    explanation: "The Legacy Syntax Quirks note states columns 1-5 were reserved for statement labels.\n\nColumn 6, a separate column, indicated continuation of a statement onto the next line.\n\nThe deck never states columns 1-5 were reserved for comments.\n\nImplicit typing was based on a variable's starting letter, not on reserved leading columns."
  },
  {
    id: "csc302_ch3_022",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "In Fortran, how was a variable's type typically determined if it was not explicitly declared?",
    options: [
      "Implicitly, based on the starting letter of the variable name, with letters I through N indicating integers",
      "Column position governed statement labels and continuation, not variable typing",
      "Explicitly, since Fortran required every variable to be declared before use",
      "Implicitly, based on whether the variable appeared before or after the statement label"
    ],
    correctAnswer: 0,
    explanation: "The Legacy Syntax Quirks note states variable types were implicit based on the starting letter, with I through N indicating integers.\n\nColumn position governed statement labels and continuation, not variable typing.\n\nThe whole point of this quirk is that Fortran did not require explicit declaration for these implicitly typed variables.\n\nPosition relative to the statement label is never described as determining type."
  },
  {
    id: "csc302_ch3_023",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "ALGOL was designed by a single corporation to standardize its own internal software products.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "The ALGOL section states it was designed by an international committee to establish a universal language for academic papers, not by a single corporation for internal products."
  },
  {
    id: "csc302_ch3_024",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Which syntax standard did ALGOL introduce that is still taken for granted today?",
    options: [
      "Formal grammars defined via Backus-Naur Form",
      "Implicit variable typing based on starting letter",
      "Reserved statement-label columns at the start of a line",
      "The PLEASE keyword requirement for compilation"
    ],
    correctAnswer: 0,
    explanation: "The ALGOL section credits it with introducing formal grammars defined via Backus-Naur Form, along with nested block structures and lexical scoping.\n\nImplicit typing by starting letter is a Fortran legacy quirk, not an ALGOL contribution.\n\nReserved statement-label columns are also a Fortran quirk.\n\nThe PLEASE keyword requirement belongs to INTERCAL in Part VII, an entirely different language."
  },
  {
    id: "csc302_ch3_025",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "What was the 'Academic Trap' that limited ALGOL's commercial adoption despite its clean syntax?",
    options: [
      "It lacked built-in I/O capabilities, leaving them to machine-specific implementations",
      "It required specialized quantum hardware that was not yet available",
      "It could only be compiled by a single proprietary vendor's compiler",
      "It lacked any form of lexical scoping, making large programs unmanageable"
    ],
    correctAnswer: 0,
    explanation: "The ALGOL section names the Academic Trap as ALGOL lacking built-in I/O capabilities, leaving them to machine-specific implementations, which limited commercial adoption.\n\nQuantum hardware is unrelated to ALGOL, a 1958/1960 language.\n\nThe deck does not attribute ALGOL's limited adoption to a proprietary compiler monopoly.\n\nALGOL is credited with introducing lexical scoping, not lacking it."
  },
  {
    id: "csc302_ch3_026",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "What problem did Edsger Dijkstra's 1968 letter 'Go To Statement Considered Harmful' address?",
    options: [
      "The hard-to-maintain 'spaghetti code' produced by arbitrary GOTO jumps in early imperative languages",
      "Garbage collection overhead is never linked to Dijkstra's letter; it relates to Lisp and functional languages in Part IV",
      "The steep learning curve of logic programming for real-world system tasks",
      "The lack of built-in I/O capabilities in ALGOL"
    ],
    correctAnswer: 0,
    explanation: "The GOTO Controversy section states Dijkstra's 1968 letter sparked a structural revolution against the hard-to-maintain spaghetti code produced by arbitrary GOTO jumps.\n\nGarbage collection overhead is never linked to Dijkstra's letter; it relates to Lisp and functional languages in Part IV.\n\nThe steep learning curve of logic programming is cited in the Fifth Generation Project anecdote in Part V, not Dijkstra's letter.\n\nALGOL's I/O limitation is the Academic Trap, a separate issue from the GOTO controversy."
  },
  {
    id: "csc302_ch3_027",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "How does the clarity of a program's structure relate to the density of GOTO statements?",
    options: [
      "Clarity is inversely proportional to the density of GOTO statements",
      "Clarity is directly proportional to the density of GOTO statements",
      "Clarity is unrelated to GOTO statement density entirely",
      "Clarity only depends on the density of comments, not GOTO statements"
    ],
    correctAnswer: 0,
    explanation: "The GOTO Controversy section states Dijkstra argued that the clarity of a program's structure is inversely proportional to the density of GOTO statements, meaning more GOTOs mean less clarity.\n\nA direct proportionality would mean more GOTOs improve clarity, the opposite of Dijkstra's argument.\n\nClaiming no relationship contradicts the entire point of his letter.\n\nComment density is never part of Dijkstra's argument in this section."
  },
  {
    id: "csc302_ch3_028",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Which three constructs, identified by Böhm and Jacopini in 1966, can express any computable function?",
    options: [
      "Sequence, selection, and iteration",
      "Recursion, inheritance, and polymorphism",
      "Assignment, message passing, and backtracking",
      "Unification, resolution, and negation"
    ],
    correctAnswer: 0,
    explanation: "The GOTO Controversy section states Böhm and Jacopini's 1966 result shows any computable function can be expressed using only sequence (executing instructions one after another), selection (if-then-else), and iteration (while loops).\n\nInheritance and polymorphism are OOP pillars from Part III, not part of this 1966 result.\n\nMessage passing and backtracking belong to Smalltalk and Prolog respectively, unrelated concepts.\n\nUnification, resolution, and negation are Prolog mechanisms from Part V."
  },
  {
    id: "csc302_ch3_029",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Who developed C, and for what purpose?",
    options: [
      "Dennis Ritchie at Bell Labs, to rewrite the Unix operating system",
      "John Backus developed Fortran, not C, decades earlier for a different purpose",
      "Martin Odersky at EPFL, to bridge functional and object-oriented programming",
      "Robert Griesemer at Google, to simplify concurrent server programming"
    ],
    correctAnswer: 0,
    explanation: "The C section credits Dennis Ritchie at Bell Labs, circa 1972, with developing C to rewrite the Unix operating system.\n\nJohn Backus developed Fortran, not C, decades earlier for a different purpose.\n\nMartin Odersky created Scala, described later in Part VIII, not C.\n\nRobert Griesemer helped design Go, described in Part VI, not C."
  },
  {
    id: "csc302_ch3_030",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "What is the paradigm philosophy behind the C programming language?",
    options: [
      "Maximize efficiency and expressiveness while maintaining minimal abstraction over hardware",
      "Maximize safety guarantees by eliminating all direct memory manipulation",
      "Maximize declarative expressiveness by hiding all execution control from the developer",
      "Maximize concurrency safety by isolating every process into its own memory space"
    ],
    correctAnswer: 0,
    explanation: "The C section states its paradigm philosophy is to maximize efficiency and expressiveness while maintaining minimal abstraction over hardware.\n\nC is explicitly described as letting programmers manipulate memory addresses directly via pointers, the opposite of eliminating direct memory manipulation.\n\nHiding execution control from the developer describes the Declarative philosophy in Part V, not C.\n\nIsolating every process into its own memory space describes the Erlang actor model in Part VI, not C."
  },
  {
    id: "csc302_ch3_031",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "A developer writes: char *dest = malloc(7); while(*dest++ = *src++); to copy a string in C. Which trait of C does this snippet best illustrate?",
    options: [
      "Its double-edged nature of unmatched runtime speed paired with bugs like buffer overflows and memory leaks",
      "Purity and identical outputs for identical inputs describe Functional Programming in Part IV, not this mutable pointer-based snippet",
      "Its reliance on an actor model where each pointer represents an isolated process",
      "Its use of Horn clauses to resolve the copy operation through backtracking"
    ],
    correctAnswer: 0,
    explanation: "The C section presents this exact pointer snippet as the Typical C Pointer Paradigm, illustrating how C offers high-level constructs but lets programmers manipulate memory directly, described as a double-edged sword of unmatched speed alongside bugs like buffer overflows and memory leaks.\n\nPurity and identical outputs for identical inputs describe Functional Programming in Part IV, not this mutable pointer-based snippet.\n\nThe actor model with isolated processes describes Erlang in Part VI, unrelated to raw C pointers.\n\nHorn clauses and backtracking are Prolog mechanisms from Part V, not part of C's pointer semantics."
  },
  {
    id: "csc302_ch3_032",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Which of the following is a strength of imperative coding?",
    options: [
      "High runtime performance and predictability",
      "Complete absence of side-effects by default",
      "Automatic isolation of concurrent processes into mailboxes",
      "Guaranteed safety from buffer overflows through the type system"
    ],
    correctAnswer: 0,
    explanation: "The Pros and Cons of Imperative Coding table lists high runtime performance and predictability as a strength.\n\nAbsence of side-effects by default is a Functional Programming strength listed in Part IV's Pros and Cons table, not the imperative one.\n\nAutomatic isolation into mailboxes describes Erlang's actor model in Part VI, not imperative coding's strengths.\n\nGuaranteed safety from buffer overflows contradicts the deck's own description of C's pointer risks."
  },
  {
    id: "csc302_ch3_033",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Why does the Pros and Cons of Imperative Coding table list global and shared mutable state as a weakness?",
    options: [
      "Because it makes multithreading highly error-prone",
      "Because it prevents the code from being intuitive to humans used to step-by-step recipes",
      "Because it makes the language impossible to compile into assembly",
      "Because it eliminates the possibility of embedded systems programming"
    ],
    correctAnswer: 0,
    explanation: "The Pros and Cons of Imperative Coding table states global and shared mutable state makes multithreading highly error-prone, listing it as a weakness.\n\nThe table actually lists intuitive step-by-step reasoning as a strength of imperative coding, not something this weakness undermines.\n\nCompiling into assembly is what Fortran proved was efficient, unrelated to this weakness.\n\nThe table lists embedded systems as a natural strength-side fit for imperative coding, not something this weakness eliminates."
  },
  {
    id: "csc302_ch3_034",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "The Pros and Cons of Imperative Coding table lists side effects making debugging and mathematical verification easier as a strength of the imperative model.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "The Pros and Cons of Imperative Coding table actually lists side effects making debugging and mathematical verification difficult as a weakness of the imperative model, the opposite of an easing strength."
  },
  {
    id: "csc302_ch3_035",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Imperative code is described as prone to which kind of verbosity?",
    options: [
      "'How-to' verbosity rather than 'what-to' clarity",
      "'What-to' verbosity rather than 'how-to' clarity",
      "Verbosity caused by mandatory politeness keywords",
      "Verbosity caused by mandatory monad wrapping of every value"
    ],
    correctAnswer: 0,
    explanation: "The Pros and Cons of Imperative Coding table states code is prone to 'how-to' verbosity rather than 'what-to' clarity, since imperative code specifies steps rather than outcomes.\n\nReversing the phrase to 'what-to' verbosity misstates the table's actual wording and meaning.\n\nMandatory politeness keywords describe INTERCAL's PLEASE requirement in Part VII, unrelated to this table.\n\nMandatory monad wrapping is a Haskell concept from Part IV, unrelated to imperative verbosity."
  },
  {
    id: "csc302_ch3_036",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Which of the following applies to imperative coding?",
    options: [
      "Imperative code guarantees no side effects occur during execution",
      "Imperative code guarantees referential transparency across all function calls",
      "All of these",
      "None of these"
    ],
    correctAnswer: 3,
    explanation: "The Pros and Cons of Imperative Coding table lists side effects making debugging and mathematical verification difficult as a weakness, the opposite of guaranteeing no side effects occur.\n\nReferential transparency is a Functional Programming pillar from Part IV, contradicted by imperative coding's reliance on mutable state, so the imperative table never claims this guarantee either."
  },
  {
    id: "csc302_ch3_037",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Why is the imperative paradigm described as a natural fit for embedded systems and system-level operations?",
    options: [
      "Because it offers high runtime performance and predictability suited to close hardware control",
      "Purity and freedom from side effects are Functional Programming traits from Part IV, the opposite of the mutable-state imperative model",
      "Because it automatically restarts crashed processes in a known clean state",
      "Because it relies on lazy evaluation to defer hardware operations until needed"
    ],
    correctAnswer: 0,
    explanation: "The Pros and Cons of Imperative Coding table lists a natural fit for embedded systems and system-level operations alongside high runtime performance and predictability as the imperative model's strengths.\n\nPurity and freedom from side effects are Functional Programming traits from Part IV, the opposite of the mutable-state imperative model.\n\nAutomatically restarting crashed processes describes Erlang's supervision trees in Part VI, not the general imperative paradigm.\n\nLazy evaluation is a Haskell trait from Part IV, not an imperative one."
  },
  {
    id: "csc302_ch3_038",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "What is the core premise of object-oriented programming, as contrasted with functions operating on passive data?",
    options: [
      "Software is a network of collaborating objects containing both state and behavior, shifting focus from actions to entity abstractions",
      "Sequential commands mutating global state describes the Imperative paradigm's core premise in Part II, the very model OOP is contrasted against here",
      "Software is a set of pure mathematical functions with no internal state at all",
      "Software is a collection of facts, rules, and queries resolved by a logic engine"
    ],
    correctAnswer: 0,
    explanation: "The Philosophy of Objects section states OOP treats software as a network of collaborating objects containing both state and behavior, shifting the focus from actions to entity abstractions.\n\nSequential commands mutating global state describes the Imperative paradigm's core premise in Part II, the very model OOP is contrasted against here.\n\nPure mathematical functions with no state describes Functional Programming's core premise in Part IV.\n\nFacts, rules, and queries resolved by a logic engine describes Prolog and the Declarative paradigm in Part V."
  },
  {
    id: "csc302_ch3_039",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Which of the Four Pillars of OOP is described as bundling data and methods while hiding internal implementations?",
    options: [
      "Encapsulation",
      "Abstraction is defined there as presenting simplified interfaces to hide complex logic, a related but distinct pillar",
      "Inheritance",
      "Polymorphism"
    ],
    correctAnswer: 0,
    explanation: "The Four Pillars of OOP section defines Encapsulation as bundling data and methods, hiding internal implementations.\n\nAbstraction is defined there as presenting simplified interfaces to hide complex logic, a related but distinct pillar.\n\nInheritance is defined as establishing hierarchies to reuse behavior.\n\nPolymorphism is defined as allowing different objects to respond to the same message in unique ways."
  },
  {
    id: "csc302_ch3_040",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "A UI library exposes a single simplified method call that hides many internal rendering steps from the caller. Which pillar of OOP does this best demonstrate?",
    options: [
      "Abstraction",
      "Inheritance is about establishing hierarchies to reuse behavior, not about simplifying an interface",
      "Polymorphism",
      "Encapsulation"
    ],
    correctAnswer: 0,
    explanation: "The Four Pillars of OOP section defines Abstraction as presenting simplified interfaces to hide complex logic, which matches a single simplified call hiding internal rendering steps.\n\nInheritance is about establishing hierarchies to reuse behavior, not about simplifying an interface.\n\nPolymorphism is about different objects responding to the same message in unique ways, not about hiding complexity behind one interface.\n\nEncapsulation is about bundling data and methods while hiding internal implementation, a related but narrower idea focused on data protection rather than interface simplification."
  },
  {
    id: "csc302_ch3_041",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Two subclasses each override the same method inherited from a shared parent class, and each responds differently when the method is called. Which pillar of OOP does this illustrate?",
    options: [
      "Polymorphism",
      "Encapsulation concerns bundling and hiding data, not differing responses to a shared message",
      "Abstraction concerns simplifying interfaces, not differing behavior across subclasses",
      "Inheritance"
    ],
    correctAnswer: 0,
    explanation: "The Four Pillars of OOP section defines Polymorphism as allowing different objects to respond to the same message in unique ways, matching two subclasses responding differently to the same call.\n\nEncapsulation concerns bundling and hiding data, not differing responses to a shared message.\n\nAbstraction concerns simplifying interfaces, not differing behavior across subclasses.\n\nInheritance concerns establishing the hierarchy that makes shared methods possible, but the differing responses themselves are Polymorphism."
  },
  {
    id: "csc302_ch3_042",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Which of the following correctly describes one of the Four Pillars of OOP?",
    options: [
      "Encapsulation involves bundling data and methods while hiding internal implementation details",
      "Abstraction involves establishing hierarchies of classes to reuse behavior",
      "All of these",
      "None of these"
    ],
    correctAnswer: 0,
    explanation: "The Four Pillars of OOP section defines Encapsulation as bundling data and methods, hiding internal implementations, supporting the first statement.\n\nEstablishing hierarchies to reuse behavior is the definition given for Inheritance, not Abstraction, which is instead defined as presenting simplified interfaces to hide complex logic, so the second statement is contradicted."
  },
  {
    id: "csc302_ch3_043",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Which pillar of OOP is described as establishing hierarchies to reuse behavior?",
    options: [
      "Inheritance",
      "Encapsulation instead bundles data and methods while hiding internal implementation",
      "Abstraction instead presents simplified interfaces to hide complex logic",
      "Polymorphism"
    ],
    correctAnswer: 0,
    explanation: "The Four Pillars of OOP section defines Inheritance as establishing hierarchies to reuse behavior.\n\nEncapsulation instead bundles data and methods while hiding internal implementation.\n\nAbstraction instead presents simplified interfaces to hide complex logic.\n\nPolymorphism instead allows different objects to respond to the same message in unique ways."
  },
  {
    id: "csc302_ch3_044",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Who designed Simula 67, and where?",
    options: [
      "Ole-Johan Dahl and Kristen Nygaard at the Norwegian Computing Center in Oslo",
      "Alan Kay and Dan Ingalls, along with Adele Goldberg, created Smalltalk at Xerox PARC, a separate language",
      "Bjarne Stroustrup created C++, described later in Part III, not Simula",
      "James Gosling at Sun Microsystems"
    ],
    correctAnswer: 0,
    explanation: "The Simula 67 section credits Ole-Johan Dahl and Kristen Nygaard, designing it at the Norwegian Computing Center in Oslo in 1967.\n\nAlan Kay and Dan Ingalls, along with Adele Goldberg, created Smalltalk at Xerox PARC, a separate language.\n\nBjarne Stroustrup created C++, described later in Part III, not Simula.\n\nJames Gosling created Java at Sun Microsystems, also described later in Part III."
  },
  {
    id: "csc302_ch3_045",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "What problem originally led Dahl and Nygaard to develop the concepts behind Simula 67?",
    options: [
      "Standard imperative constructs proved clumsy for representing distinct interacting entities in physical simulations like ships moving through docks",
      "A language that can be cooked and eaten describes Chef in Part VII, an entirely different, satirical project",
      "A language with no syntactic similarities to existing ones describes INTERCAL's satirical premise in Part VII",
      "They needed a purely functional language with no side effects for academic papers"
    ],
    correctAnswer: 0,
    explanation: "The Simula 67 origin story states Dahl and Nygaard were developing physical simulations such as ships moving through docks, and standard imperative constructs proved clumsy for representing distinct interacting entities.\n\nA language that can be cooked and eaten describes Chef in Part VII, an entirely different, satirical project.\n\nA language with no syntactic similarities to existing ones describes INTERCAL's satirical premise in Part VII.\n\nA purely functional language for academic papers conflates ALGOL's academic-paper goal with Haskell's purity, neither of which describes Simula's origin."
  },
  {
    id: "csc302_ch3_046",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Which of the following did Simula introduce?",
    options: [
      "Classes and subclasses, object creation via new, virtual procedures, and coroutines",
      "Horn clauses and resolution theorem proving are Prolog concepts introduced in Part V, not Simula",
      "The Actor Model with mailboxes is Erlang's contribution in Part VI, not Simula's",
      "The Hindley-Milner type inference system"
    ],
    correctAnswer: 0,
    explanation: "The Simula 67 section lists its introductions as the concepts of classes and subclasses, object creation (new), virtual procedures, and coroutines.\n\nHorn clauses and resolution theorem proving are Prolog concepts introduced in Part V, not Simula.\n\nThe Actor Model with mailboxes is Erlang's contribution in Part VI, not Simula's.\n\nHindley-Milner type inference is described in Part IV as used by functional languages like Haskell and OCaml, not by Simula."
  },
  {
    id: "csc302_ch3_047",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Although Simula was designed for simulation, what did Dahl and Nygaard come to realize about it?",
    options: [
      "That they had discovered a powerful, general-purpose software design paradigm",
      "That it could never be used for anything beyond ship-docking simulations",
      "That it would need to be rewritten entirely in C to remain useful",
      "That its lack of built-in I/O would prevent commercial adoption"
    ],
    correctAnswer: 0,
    explanation: "The Simula 67 section states that while designed for simulation, Dahl and Nygaard realized they had discovered a powerful, general-purpose software design paradigm.\n\nThe deck presents this realization as the opposite of Simula being limited to ship-docking simulations only.\n\nRewriting in C is never mentioned in connection with Simula.\n\nLacking built-in I/O and limited commercial adoption is the Academic Trap attributed to ALGOL, not Simula."
  },
  {
    id: "csc302_ch3_048",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "In Smalltalk, objects communicate exclusively by sending messages to one another rather than invoking methods directly.",
    options: [
      "True",
      "False",
      "Maybe",
      "I don't know"
    ],
    correctAnswer: 0,
    explanation: "The Smalltalk section states objects do not invoke methods; they send messages to each other dynamically, confirming the claim, in line with Alan Kay's statement that 'the big idea is messaging'."
  },
  {
    id: "csc302_ch3_049",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Who created Smalltalk, and at which institution?",
    options: [
      "Alan Kay, Dan Ingalls, and Adele Goldberg at Xerox PARC",
      "Dahl and Nygaard created Simula, a different language, at the Norwegian Computing Center",
      "Bjarne Stroustrup created C++ at Bell Labs, described later in Part III",
      "Martin Odersky at EPFL"
    ],
    correctAnswer: 0,
    explanation: "The Smalltalk section credits Alan Kay, Dan Ingalls, and Adele Goldberg with creating Smalltalk at Xerox PARC in the 1970s.\n\nDahl and Nygaard created Simula, a different language, at the Norwegian Computing Center.\n\nBjarne Stroustrup created C++ at Bell Labs, described later in Part III.\n\nMartin Odersky created Scala at EPFL, described in Part VIII, decades after Smalltalk."
  },
  {
    id: "csc302_ch3_050",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "In Smalltalk, what is famously true about numbers and classes?",
    options: [
      "Absolutely everything, including numbers and classes, is an object",
      "Numbers are primitive values while only classes are treated as objects",
      "Classes are objects, but numbers are handled by direct hardware registers",
      "Neither numbers nor classes are objects, since Smalltalk avoids object semantics"
    ],
    correctAnswer: 0,
    explanation: "The Smalltalk section states Smalltalk is a pure OOP language where absolutely everything, including numbers and classes, is an object.\n\nTreating numbers as primitives contradicts the deck's description of Smalltalk as a pure OOP language.\n\nDirect hardware register handling of numbers is never mentioned for Smalltalk; that framing belongs to the imperative and C sections.\n\nSmalltalk is described as built entirely around object semantics, the opposite of avoiding them."
  },
  {
    id: "csc302_ch3_051",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "What did Alan Kay famously say was 'the big idea' behind Smalltalk?",
    options: [
      "Messaging",
      "Inheritance",
      "Garbage collection",
      "Backtracking"
    ],
    correctAnswer: 0,
    explanation: "The Smalltalk section quotes Alan Kay stating 'The big idea is messaging.'\n\nInheritance is a general OOP pillar, but it is not the phrase Kay is quoted using for Smalltalk's big idea.\n\nGarbage collection is credited to Lisp in Part IV, not to Kay's quote about Smalltalk.\n\nBacktracking is a Prolog mechanism from Part V, unrelated to Kay's quote."
  },
  {
    id: "csc302_ch3_052",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "In Smalltalk's syntax example, how is the expression 3 + 4 parsed?",
    options: [
      "As sending the message + 4 to the object 3",
      "As sending the message 3 to the object + 4",
      "As a direct hardware addition instruction with no message involved",
      "As a Horn clause resolving 3 and 4 into a single fact"
    ],
    correctAnswer: 0,
    explanation: "The Smalltalk Syntax Example states 3 + 4 is parsed as sending message + 4 to the object 3.\n\nReversing the direction, sending 3 to the object + 4, misstates the example given in the deck.\n\nSmalltalk's entire philosophy is that objects communicate via messages rather than direct hardware instructions, so treating this as a raw hardware operation contradicts the section.\n\nHorn clauses are a Prolog concept from Part V, unrelated to Smalltalk's message-passing syntax."
  },
  {
    id: "csc302_ch3_053",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Who created C++, and what was it originally described as?",
    options: [
      "Bjarne Stroustrup, described as 'C with Classes'",
      "James Gosling, described as 'Write Once, Run Anywhere'",
      "Dennis Ritchie, described as a rewrite of the Unix kernel",
      "Martin Odersky, described as a bridge between functional and object-oriented programming"
    ],
    correctAnswer: 0,
    explanation: "The C++ vs. Java section credits Bjarne Stroustrup with creating C++ in 1985, described as 'C with Classes.'\n\nJames Gosling created Java, described with the 'Write Once, Run Anywhere' slogan, a separate entry in the same comparison.\n\nDennis Ritchie created C itself in Part II to rewrite Unix, a different achievement from C++.\n\nMartin Odersky created Scala, described in Part VIII as bridging functional and object-oriented programming."
  },
  {
    id: "csc302_ch3_054",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Which feature applies to C++ but not to Java?",
    options: [
      "Support for multiple inheritance and manual memory management via destructors",
      "A single-inheritance class model supplemented by interfaces",
      "Removal of pointers in favor of automatic garbage collection",
      "The 'Write Once, Run Anywhere' slogan built around a virtual machine"
    ],
    correctAnswer: 0,
    explanation: "The C++ vs. Java table lists C++ as supporting multiple inheritance and using manual memory management via destructors.\n\nSingle-inheritance with interfaces is listed as Java's model, not C++'s.\n\nRemoving pointers and adding garbage collection describes Java's simplification of C++ syntax, not a C++ feature.\n\nThe 'Write Once, Run Anywhere' slogan and its JVM are attributed to Java, not C++."
  },
  {
    id: "csc302_ch3_055",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "James Gosling created Java in 1995 with the slogan 'Write Once, Run Anywhere', achieved via the JVM.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "The C++ vs. Java section states Java (James Gosling, 1995) carries the slogan 'Write Once, Run Anywhere' achieved via the JVM, confirming the claim exactly as written."
  },
  {
    id: "csc302_ch3_056",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Which requirement does the C++ vs. Java comparison state applies specifically to Java, regarding where code must exist?",
    options: [
      "Everything must exist inside a class",
      "Everything must exist inside a namespace with manual destructors",
      "Everything must exist inside a Horn clause",
      "Everything must exist inside a mailbox-managed actor"
    ],
    correctAnswer: 0,
    explanation: "The C++ vs. Java table states that in Java, everything must exist inside a class, alongside its single-inheritance model with interfaces.\n\nManual destructors and namespaces are associated with C++'s manual memory management, not Java's class requirement.\n\nHorn clauses belong to Prolog in Part V, unrelated to Java's structural requirement.\n\nMailbox-managed actors belong to Erlang in Part VI, unrelated to Java."
  },
  {
    id: "csc302_ch3_057",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "The 'Gang of Four' book, published in 1994, formalized how many classic software design patterns?",
    options: [
      "23",
      "The number 4 refers to the four authors of the book, not the pattern count",
      "The number 8 does not appear anywhere in the deck's discussion of the GoF book",
      "50"
    ],
    correctAnswer: 0,
    explanation: "The Design Patterns section states the Gang of Four (GoF) book formalized 23 classic software design patterns in 1994.\n\nThe number 4 refers to the four authors of the book, not the pattern count.\n\nThe number 8 does not appear anywhere in the deck's discussion of the GoF book.\n\nThe number 50 is not the figure given for the pattern count in the source."
  },
  {
    id: "csc302_ch3_058",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Which category of design pattern includes Singleton, Factory, and Builder?",
    options: [
      "Creational",
      "Structural is the category containing Adapter, Composite, and Decorator instead",
      "Behavioral is the category containing Observer, Strategy, and Command instead",
      "Declarative"
    ],
    correctAnswer: 0,
    explanation: "The Design Patterns section lists Creational as the category containing Singleton, Factory, and Builder.\n\nStructural is the category containing Adapter, Composite, and Decorator instead.\n\nBehavioral is the category containing Observer, Strategy, and Command instead.\n\nDeclarative is a meta-paradigm from the Part I taxonomy, not one of the three GoF pattern categories."
  },
  {
    id: "csc302_ch3_059",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Adapter, Composite, and Decorator belong to which category of design pattern in the Gang of Four classification?",
    options: [
      "Structural",
      "Creational is the category containing Singleton, Factory, and Builder instead",
      "Behavioral is the category containing Observer, Strategy, and Command instead",
      "Functional"
    ],
    correctAnswer: 0,
    explanation: "The Design Patterns section lists Structural as the category containing Adapter, Composite, and Decorator.\n\nCreational is the category containing Singleton, Factory, and Builder instead.\n\nBehavioral is the category containing Observer, Strategy, and Command instead.\n\nFunctional is a meta-paradigm from the Part I taxonomy, not one of the three GoF pattern categories."
  },
  {
    id: "csc302_ch3_060",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "What point does the Spring Framework class AbstractSingletonProxyFactoryBean illustrate?",
    options: [
      "The extremes of enterprise OOP abstraction that can result from over-engineering with design patterns",
      "Minimal, absurd constructs describe esoteric languages like Brainfuck in Part VII, not this Spring Framework example",
      "The steep learning curve of logic programming belongs to the Fifth Generation Project anecdote in Part V",
      "The performance cost of garbage collection in functional languages"
    ],
    correctAnswer: 0,
    explanation: "The Design Pattern Satire note states AbstractSingletonProxyFactoryBean is a real class name in the Spring Framework, showcasing the extremes of enterprise OOP abstraction that over-engineered patterns can produce.\n\nMinimal, absurd constructs describe esoteric languages like Brainfuck in Part VII, not this Spring Framework example.\n\nThe steep learning curve of logic programming belongs to the Fifth Generation Project anecdote in Part V.\n\nGarbage collection performance cost is a Functional Programming weakness in Part IV, unrelated to this class name."
  },
  {
    id: "csc302_ch3_061",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "What issue with deep inheritance-based object-oriented hierarchies does Joe Armstrong's 'Gorilla-Banana Problem' observation describe?",
    options: [
      "Wanting one small piece of behavior forces a developer to pull in a large implicit environment along with it, like getting a gorilla holding the banana and the entire jungle",
      "Compile-time type checking is never the subject of Armstrong's quote",
      "The quote is about excess baggage from inheritance, not about objects being unable to communicate at all",
      "They eliminate the possibility of code reuse entirely"
    ],
    correctAnswer: 0,
    explanation: "The Pitfall of Deep Hierarchies section quotes Joe Armstrong's observation that object-oriented languages carry an implicit environment, so wanting a banana gets you a gorilla holding the banana and the entire jungle.\n\nCompile-time type checking is never the subject of Armstrong's quote.\n\nThe quote is about excess baggage from inheritance, not about objects being unable to communicate at all.\n\nThe section frames deep hierarchies as originally intended for code reuse, just fragile and hard to refactor, not as eliminating reuse."
  },
  {
    id: "csc302_ch3_062",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "What is the Modern Engineering Consensus offered as a response to the Gorilla-Banana Problem?",
    options: [
      "Prefer Composition over Inheritance, using components to assemble behavior instead of extending base classes",
      "Deeper inheritance chains are the very problem Armstrong's Gorilla-Banana observation criticizes, not the recommended fix",
      "Rewriting in a purely functional language is never proposed as the consensus fix in this section",
      "Prefer replacing all classes with Horn clauses and resolution"
    ],
    correctAnswer: 0,
    explanation: "The Pitfall of Deep Hierarchies section states the Modern Engineering Consensus is to prefer Composition over Inheritance, assembling behavior from components instead of extending base classes.\n\nDeeper inheritance chains are the very problem Armstrong's Gorilla-Banana observation criticizes, not the recommended fix.\n\nRewriting in a purely functional language is never proposed as the consensus fix in this section.\n\nReplacing classes with Horn clauses and resolution is a Prolog concept from Part V, not mentioned here."
  },
  {
    id: "csc302_ch3_063",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Why does hiding state inside objects create a problem for concurrency in object-oriented programming?",
    options: [
      "Because mutating hidden state makes concurrency hard to coordinate safely",
      "Because hidden state automatically triggers deadlocks on every method call",
      "Because hidden state prevents any object from ever being instantiated",
      "Because hidden state requires a Horn clause to be resolved before mutation"
    ],
    correctAnswer: 0,
    explanation: "The Critiques section names State Mutation Overhead: OOP relies heavily on hiding states inside objects and mutating them, which makes concurrency hard to coordinate safely.\n\nThe deck does not claim hidden state automatically triggers deadlocks; deadlocks are described separately in Part VI as a general shared-memory threading risk.\n\nHidden state does not prevent instantiation; OOP relies on instantiating many stateful objects.\n\nHorn clause resolution is a Prolog mechanism from Part V, unrelated to OOP state mutation."
  },
  {
    id: "csc302_ch3_064",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "What did Alan Kay lament about modern OOP languages like Java and C++?",
    options: [
      "That they focused too much on class inheritance and local data storage, and not enough on pure dynamic messaging and scaling models",
      "The critique is about overemphasis on classes and inheritance, not about abandoning classes",
      "The deck never claims Java and C++ removed encapsulation and abstraction support",
      "That they were too slow compared to esoteric languages like Brainfuck"
    ],
    correctAnswer: 0,
    explanation: "The Critiques section describes Alan Kay's Modern Reflection: he lamented that modern OOP like Java and C++ focused too much on class inheritance and local data storage, and not enough on pure dynamic messaging and scaling models.\n\nThe critique is about overemphasis on classes and inheritance, not about abandoning classes.\n\nThe deck never claims Java and C++ removed encapsulation and abstraction support.\n\nComparing runtime speed to Brainfuck is never part of Kay's reflection; Brainfuck is an unrelated esoteric language in Part VII."
  },
  {
    id: "csc302_ch3_065",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "What does 'Execution Bloat' mean as a critique of object-oriented programming?",
    options: [
      "Creating instances of objects for simple operations introduces unnecessary runtime and memory overhead",
      "Unbounded backtracking is a Prolog concern from Part V, not the OOP critique of Execution Bloat",
      "Mandatory monad wrapping is a Haskell concept from Part IV, unrelated to Execution Bloat",
      "Every Go channel operation blocks the entire program until resolved"
    ],
    correctAnswer: 0,
    explanation: "The Critiques section defines Execution Bloat as creating instances of objects for simple operations introducing unnecessary runtime and memory overhead.\n\nUnbounded backtracking is a Prolog concern from Part V, not the OOP critique of Execution Bloat.\n\nMandatory monad wrapping is a Haskell concept from Part IV, unrelated to Execution Bloat.\n\nBlocking channel operations are a Go concurrency detail from Part VI, unrelated to this OOP critique."
  },
  {
    id: "csc302_ch3_066",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Which of the following is a critique of object-oriented programming?",
    options: [
      "Alan Kay's lament that modern OOP overemphasizes inheritance rather than dynamic messaging",
      "The claim that OOP languages cannot support any form of data hiding",
      "All of these",
      "None of these"
    ],
    correctAnswer: 0,
    explanation: "The Critiques of Object-Oriented Programming section explicitly includes Alan Kay's Modern Reflection about overemphasis on inheritance rather than dynamic messaging.\n\nOOP's Encapsulation pillar is specifically about bundling and hiding data, so a claim that OOP cannot support data hiding directly contradicts the Four Pillars section and is not one of the deck's critiques."
  },
  {
    id: "csc302_ch3_067",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "What is the core premise of functional programming's approach to computation?",
    options: [
      "To treat computation as the mathematical evaluation of pure functions, avoiding state changes and mutable data",
      "Commands mutating global or local state describes the Imperative core premise from Part II, the opposite approach",
      "Collaborating objects with hidden state and behavior describes the OOP core premise from Part III",
      "To treat computation as facts, rules, and queries resolved through backtracking"
    ],
    correctAnswer: 0,
    explanation: "The Foundations of Functional Design section states the core premise: treat computation as the mathematical evaluation of pure functions, avoiding state changes and mutable data.\n\nCommands mutating global or local state describes the Imperative core premise from Part II, the opposite approach.\n\nCollaborating objects with hidden state and behavior describes the OOP core premise from Part III.\n\nFacts, rules, and queries resolved through backtracking describes Prolog and the Declarative paradigm from Part V."
  },
  {
    id: "csc302_ch3_068",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Functional programming's foundations are based directly on which mathematical formalism, developed by Alonzo Church in the 1930s?",
    options: [
      "Lambda Calculus",
      "First-Order Predicate Calculus",
      "Category Theory's endofunctor axioms",
      "Backus-Naur Form"
    ],
    correctAnswer: 0,
    explanation: "The Foundations of Functional Design section states functional programming is based directly on Alonzo Church's Lambda Calculus from the 1930s.\n\nFirst-Order Predicate Calculus underlies Prolog and logic programming in Part V, not the general functional foundation.\n\nCategory Theory's endofunctor terminology is mentioned later regarding monads, a specific concept, not the original 1930s foundation.\n\nBackus-Naur Form is the formal grammar notation introduced by ALGOL in Part II, unrelated to Church's calculus."
  },
  {
    id: "csc302_ch3_069",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Which pillar of functional programming states that functions can be passed as arguments, returned from other functions, and stored in variables?",
    options: [
      "First-Class/Higher-Order Functions",
      "Purity instead refers to functions having no side effects and always returning the same output for the same input",
      "Immutability instead refers to values that cannot be modified once created",
      "Referential Transparency"
    ],
    correctAnswer: 0,
    explanation: "The Pillars of Functional Programming section defines First-Class/Higher-Order Functions as functions that can be passed as arguments, returned, and stored in variables.\n\nPurity instead refers to functions having no side effects and always returning the same output for the same input.\n\nImmutability instead refers to values that cannot be modified once created.\n\nReferential Transparency instead refers to a function call being replaceable by its evaluated result without changing program behavior."
  },
  {
    id: "csc302_ch3_070",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "A function always produces the exact same output given the exact same input, with no observable side effects. Which pillar of functional programming does this describe?",
    options: [
      "Purity",
      "Immutability",
      "First-Class/Higher-Order Functions",
      "Referential Transparency"
    ],
    correctAnswer: 0,
    explanation: "The Pillars of Functional Programming section defines Purity as functions having no side effects, always returning the exact same output for the exact same input.\n\nImmutability instead concerns values, stating that once created they cannot be modified.\n\nFirst-Class/Higher-Order Functions concerns passing, returning, and storing functions, not output consistency.\n\nReferential Transparency is closely related but specifically concerns replacing a call with its evaluated result without changing behavior, a consequence of purity rather than the definition of purity itself."
  },
  {
    id: "csc302_ch3_071",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Which pillar of functional programming states that once a value is created, it cannot be modified?",
    options: [
      "Immutability",
      "Purity",
      "Referential Transparency",
      "First-Class/Higher-Order Functions"
    ],
    correctAnswer: 0,
    explanation: "The Pillars of Functional Programming section defines Immutability as: once a value is created, it cannot be modified.\n\nPurity instead concerns the absence of side effects in functions, not the mutability of values.\n\nReferential Transparency instead concerns replacing a function call with its evaluated result.\n\nFirst-Class/Higher-Order Functions instead concerns treating functions as passable, returnable, storable values."
  },
  {
    id: "csc302_ch3_072",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Which pillar of functional programming means any function call can be replaced with its evaluated result without changing the program's behavior?",
    options: [
      "Referential Transparency",
      "Immutability instead concerns values not being modifiable once created",
      "Purity instead concerns functions lacking side effects and having consistent output",
      "First-Class/Higher-Order Functions"
    ],
    correctAnswer: 0,
    explanation: "The Pillars of Functional Programming section defines Referential Transparency as: any function call can be replaced with its evaluated result without changing the program's behavior.\n\nImmutability instead concerns values not being modifiable once created.\n\nPurity instead concerns functions lacking side effects and having consistent output.\n\nFirst-Class/Higher-Order Functions instead concerns functions being passed, returned, and stored like other values."
  },
  {
    id: "csc302_ch3_073",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Who created Lisp, and where?",
    options: [
      "John McCarthy at MIT",
      "Alonzo Church at Princeton",
      "Philip Wadler at the University of Edinburgh",
      "Robin Milner at the University of Edinburgh"
    ],
    correctAnswer: 0,
    explanation: "The Lisp section credits John McCarthy at MIT with creating Lisp in 1958.\n\nAlonzo Church developed Lambda Calculus in the 1930s, the mathematical foundation Lisp builds on, but he did not create Lisp itself.\n\nPhilip Wadler is quoted regarding monads in the Haskell section, not credited with creating Lisp.\n\nThe deck names Hindley-Milner as a type system, but does not credit a person named Milner with creating Lisp."
  },
  {
    id: "csc302_ch3_074",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "John McCarthy created Lisp at Bell Labs in 1958.",
    options: [
      "True",
      "False",
      "Maybe",
      "I don't know"
    ],
    correctAnswer: 1,
    explanation: "The Lisp section states John McCarthy created Lisp at MIT in 1958, not at Bell Labs. Bell Labs is instead where Dennis Ritchie developed C, a separate language."
  },
  {
    id: "csc302_ch3_075",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Which of the following describes Lisp's age among high-level languages?",
    options: [
      "The second-oldest active high-level programming language, after Fortran",
      "The very first high-level programming language ever created",
      "A language created after both Haskell and Prolog",
      "The newest of the languages discussed in the functional programming section"
    ],
    correctAnswer: 0,
    explanation: "The Lisp section states it is the second-oldest active high-level programming language, after Fortran.\n\nThe deck credits Fortran, not Lisp, as the oldest of the two, so Lisp is not the very first high-level language.\n\nHaskell (1990) and Prolog (1972) both postdate Lisp's 1958 creation, so Lisp was not created after them.\n\nLisp being second-oldest overall makes it older, not newer, than the other functional-adjacent languages discussed."
  },
  {
    id: "csc302_ch3_076",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "What does homoiconicity mean in the context of Lisp?",
    options: [
      "Code is represented using the language's own primary data structures, so in Lisp, code is simply nested lists",
      "Immutability once created is the Functional Programming pillar of Immutability, a separate concept from homoiconicity",
      "Same output for same input describes Purity, another separate pillar",
      "Every program must use a politeness keyword a specific number of times to compile"
    ],
    correctAnswer: 0,
    explanation: "The Lisp section defines homoiconicity as a language where code is represented using its own primary data structures, noting that in Lisp, code is simply nested lists, which makes writing powerful macros straightforward.\n\nImmutability once created is the Functional Programming pillar of Immutability, a separate concept from homoiconicity.\n\nSame output for same input describes Purity, another separate pillar.\n\nA politeness keyword requirement describes INTERCAL's PLEASE rule in Part VII, unrelated to homoiconicity."
  },
  {
    id: "csc302_ch3_077",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "What innovation did Lisp introduce to free developers from manually tracking dynamically allocated memory?",
    options: [
      "Automatic memory garbage collection",
      "The borrow checker",
      "Manual destructors invoked at scope exit",
      "Supervision trees that restart failed allocations"
    ],
    correctAnswer: 0,
    explanation: "The Lisp section credits it with introducing the concept of automatic memory garbage collection to free developers from manually tracking dynamically allocated memory.\n\nThe borrow checker is Rust's compile-time memory safety mechanism, described in Part VIII, not Lisp's.\n\nManual destructors are the C++ approach to memory management described in Part III, the opposite of Lisp's automatic garbage collection.\n\nSupervision trees are an Erlang fault-tolerance mechanism from Part VI, unrelated to memory management."
  },
  {
    id: "csc302_ch3_078",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Pure Haskell was created by John McCarthy in 1958 as an early extension of Lisp.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "The Pure Haskell section states it was designed by a committee in 1990 as an open standard for purely functional languages, not created by John McCarthy in 1958. McCarthy is instead credited with creating Lisp itself in 1958, a separate language."
  },
  {
    id: "csc302_ch3_079",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "What does 'Purity Enforced' mean for a standard Haskell function?",
    options: [
      "Under no circumstances can it modify a variable or perform unmonitored I/O",
      "It must always execute before any other function in the program",
      "It must be wrapped in a Horn clause before it can be called",
      "It must be compiled to fewer than 200 bytes of machine code"
    ],
    correctAnswer: 0,
    explanation: "The Pure Haskell section states Purity Enforced means under no circumstances can a standard Haskell function modify a variable or perform unmonitored I/O.\n\nExecution ordering relative to other functions is never the subject of this Purity Enforced rule.\n\nHorn clauses are a Prolog concept from Part V, unrelated to Haskell's purity enforcement.\n\nCompiling to fewer than 200 bytes is the goal cited for Brainfuck in Part VII, unrelated to Haskell."
  },
  {
    id: "csc302_ch3_080",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "What does Lazy Evaluation in Haskell allow developers to do?",
    options: [
      "Easily construct and work with infinite data structures, since expressions are evaluated only when their values are actually needed",
      "Type inference, not lazy evaluation, is what allows omitting explicit type declarations, and it does not mean types are ignored",
      "Constant-time execution guarantees are never claimed anywhere in the deck",
      "Automatically convert imperative loops into recursive Prolog rules"
    ],
    correctAnswer: 0,
    explanation: "The Pure Haskell section states Lazy Evaluation means expressions are not evaluated until their actual values are needed, which allows developers to easily construct and work with infinite data structures.\n\nType inference, not lazy evaluation, is what allows omitting explicit type declarations, and it does not mean types are ignored.\n\nConstant-time execution guarantees are never claimed anywhere in the deck.\n\nConverting loops into Prolog rules is never described; Prolog and Haskell are separate paradigms in the deck."
  },
  {
    id: "csc302_ch3_081",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "In the Infinite Fibonacci Sequence example, fibs = 0 : 1 : zipWith (+) fibs (tail fibs), what happens when a developer calls take 10 fibs?",
    options: [
      "Only the first 10 numbers of the infinite sequence are evaluated",
      "Evaluating the entire infinite sequence first would be impossible and contradicts the whole point of lazy evaluation illustrated here",
      "The example is presented specifically to show Haskell can represent infinite structures, not that it crashes attempting to",
      "The compiler rejects the program for being 'overly pleading'"
    ],
    correctAnswer: 0,
    explanation: "The Infinite Fibonacci Sequence example states calling take 10 fibs evaluates only the first 10 numbers, a direct consequence of lazy evaluation.\n\nEvaluating the entire infinite sequence first would be impossible and contradicts the whole point of lazy evaluation illustrated here.\n\nThe example is presented specifically to show Haskell can represent infinite structures, not that it crashes attempting to.\n\nBeing rejected as 'overly pleading' is INTERCAL's PLEASE-keyword rule from Part VII, unrelated to Haskell."
  },
  {
    id: "csc302_ch3_082",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "What problem do Monads solve for a purely functional language with no side effects?",
    options: [
      "How to handle real-world challenges like database writes, file I/O, or user inputs while keeping side effects cleanly isolated",
      "Compiling to under 200 bytes is Brainfuck's Part VII design goal, unrelated to monads",
      "Guaranteeing Prolog query termination is a Part V topic about backtracking and infinite loops, unrelated to monads",
      "How to allow a class to inherit from more than one superclass"
    ],
    correctAnswer: 0,
    explanation: "The Monad Mystique section poses the question of how a purely functional language handles database writes, file I/O, or user inputs, and answers that Monads wrap values and chain computations while keeping side effects cleanly isolated.\n\nCompiling to under 200 bytes is Brainfuck's Part VII design goal, unrelated to monads.\n\nGuaranteeing Prolog query termination is a Part V topic about backtracking and infinite loops, unrelated to monads.\n\nMultiple inheritance is a C++ feature from Part III, unrelated to the monad problem being solved."
  },
  {
    id: "csc302_ch3_083",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Who is credited with the quote, 'A monad is just a monoid in the category of endofunctors, what's the problem?'",
    options: [
      "Philip Wadler",
      "Robert Kowalski is credited with the separate quote 'Algorithm = Logic + Control' in Part V",
      "Alonzo Church is credited with developing Lambda Calculus in the 1930s, not this quote",
      "Robin Milner"
    ],
    correctAnswer: 0,
    explanation: "The Monad Mystique section attributes the quote 'A monad is just a monoid in the category of endofunctors, what's the problem?' to Philip Wadler, introducing Category Theory terminology to CS.\n\nRobert Kowalski is credited with the separate quote 'Algorithm = Logic + Control' in Part V.\n\nAlonzo Church is credited with developing Lambda Calculus in the 1930s, not this quote.\n\nRobin Milner is not credited with any quote in the deck; the deck only names the Hindley-Milner type system without attributing this quote to him."
  },
  {
    id: "csc302_ch3_084",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "How can the concept of a Monad be simplified for someone unfamiliar with Category Theory?",
    options: [
      "As a programmable wrapper that controls how operations are piped together, automatically managing state or failure behind the scenes",
      "A keyword required a specific number of times describes INTERCAL's PLEASE rule in Part VII, unrelated to monads",
      "A hierarchy of manager actors restarting workers describes Erlang's supervision trees in Part VI, unrelated to monads",
      "As a table matching primary concerns to recommended paradigms"
    ],
    correctAnswer: 0,
    explanation: "The Monad Mystique section simplifies the concept: think of a Monad as a programmable wrapper that controls how operations are piped together, automatically managing state or failure behind the scenes.\n\nA keyword required a specific number of times describes INTERCAL's PLEASE rule in Part VII, unrelated to monads.\n\nA hierarchy of manager actors restarting workers describes Erlang's supervision trees in Part VI, unrelated to monads.\n\nA table matching concerns to paradigms describes the Choosing the Right Paradigm table in Part IX, unrelated to monads."
  },
  {
    id: "csc302_ch3_085",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "In the Comparative Code example computing the sum of squares of even numbers, what does the imperative (Java-like) approach focus on?",
    options: [
      "Step-by-step instructions and mutating the sum variable",
      "Function composition through filtering, then mapping, then summing",
      "Wrapping the result in a Maybe type to represent possible failure",
      "Matching the outcome against Just and Nothing patterns"
    ],
    correctAnswer: 0,
    explanation: "The Comparative Code section states the imperative approach focuses on the step-by-step instructions and mutating the sum variable.\n\nFunction composition through filtering, mapping, and summing is what the deck attributes to the functional approach shown alongside it, the contrasting example.\n\nWrapping a result in a Maybe type is the Safe Division example from the Advanced Type Systems section, unrelated to this sum-of-squares comparison.\n\nMatching Just and Nothing patterns is the Rust Pattern Matching example from Part VIII, unrelated to this comparison."
  },
  {
    id: "csc302_ch3_086",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "In the Comparative Code example, the functional (Haskell/JS-like) approach sum (map (\\x -> x * x) (filter even list)) achieves the sum of squares of even numbers through which technique?",
    options: [
      "Function composition: filtering the list, mapping a squaring function, then summing the results",
      "Mutating a shared sum variable inside a for loop is exactly what the deck attributes to the imperative approach instead, the contrasting example",
      "Sending a message to an object describes Smalltalk's message-passing philosophy from Part III, not this functional code example",
      "Resolving a recursive Horn clause over the list's elements"
    ],
    correctAnswer: 0,
    explanation: "The Comparative Code section states the functional approach uses function composition: filtering the list, mapping a squaring function, and then summing the results.\n\nMutating a shared sum variable inside a for loop is exactly what the deck attributes to the imperative approach instead, the contrasting example.\n\nSending a message to an object describes Smalltalk's message-passing philosophy from Part III, not this functional code example.\n\nResolving a Horn clause describes Prolog from Part V, unrelated to this Haskell-like functional example."
  },
  {
    id: "csc302_ch3_087",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "What is the key feature of the Hindley-Milner Type System used by languages like Haskell, OCaml, and ML?",
    options: [
      "Type Inference, where the compiler can mathematically deduce the most general type for every expression without explicit declarations",
      "Type Erasure, where all type information is discarded before compilation begins",
      "Type Coercion, where the compiler silently converts between incompatible types",
      "Type Duplication, where every value must be declared with two redundant type annotations"
    ],
    correctAnswer: 0,
    explanation: "The Advanced Type Systems section states the key feature of Hindley-Milner is Type Inference: the compiler can mathematically deduce the most general type for every expression without requiring explicit type declarations.\n\nType erasure, silent coercion, and redundant duplicate annotations are not concepts the deck attributes to Hindley-Milner; the section instead emphasizes deduction without explicit declarations."
  },
  {
    id: "csc302_ch3_088",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "What does the Algebraic Data Type declaration data Maybe a = Nothing | Just a represent for safe division?",
    options: [
      "A way to return an ADT representing success or absence of a value, instead of throwing exceptions or returning null",
      "Constant-time execution guarantees are never claimed for this ADT; it is about representing presence or absence of a value, not runtime performance",
      "Horn clauses and recursive Prolog rules are a Part V concept unrelated to this Haskell-style ADT",
      "A way to represent an actor's mailbox contents as a queue of messages"
    ],
    correctAnswer: 0,
    explanation: "The Safe Division Type Representation example states that instead of throwing exceptions or returning null, you return an ADT such as data Maybe a = Nothing | Just a.\n\nConstant-time execution guarantees are never claimed for this ADT; it is about representing presence or absence of a value, not runtime performance.\n\nHorn clauses and recursive Prolog rules are a Part V concept unrelated to this Haskell-style ADT.\n\nAn actor's mailbox is an Erlang concept from Part VI, unrelated to the Maybe type."
  },
  {
    id: "csc302_ch3_089",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Algebraic Data Types create expressive composite types using which two kinds of types?",
    options: [
      "Sum types (OR) and product types (AND)",
      "XOR and NAND framing is never used in the deck's description of ADTs",
      "Recursive versus mutable is not the pairing given; functional programming instead emphasizes immutability throughout",
      "Static versus dynamic typing is a general language classification, not the specific OR/AND pairing the deck attributes to ADTs"
    ],
    correctAnswer: 0,
    explanation: "The Advanced Type Systems section states Algebraic Data Types create expressive composite types using sum types (OR) and product types (AND).\n\nXOR and NAND framing is never used in the deck's description of ADTs.\n\nRecursive versus mutable is not the pairing given; functional programming instead emphasizes immutability throughout.\n\nStatic versus dynamic typing is a general language classification, not the specific OR/AND pairing the deck attributes to ADTs."
  },
  {
    id: "csc302_ch3_090",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Why is concurrency safe by default in functional programming?",
    options: [
      "Because of the complete absence of side effects",
      "Because every function is automatically wrapped in a supervision tree",
      "Because every value is stored inside a shared mutable memory block",
      "Because the compiler inserts semaphores and locks automatically"
    ],
    correctAnswer: 0,
    explanation: "The Pros and Cons of Functional Coding table lists the complete absence of side-effects as making concurrency safe by default.\n\nSupervision trees are an Erlang concept from Part VI, not a general functional programming feature listed here.\n\nShared mutable memory is the imperative and threading risk described in Part II and Part VI, the opposite of what makes functional code concurrency-safe.\n\nAutomatic semaphore and lock insertion is never mentioned in the functional Pros and Cons table."
  },
  {
    id: "csc302_ch3_091",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "What weakness related to garbage collection applies to functional programming?",
    options: [
      "Garbage collection and creating new immutable objects can hurt performance",
      "The table never claims garbage collection prevents recursion; it separately lists deep recursion causing stack overflows as its own weakness",
      "Higher-order functions are listed as a strength-enabling pillar of functional programming, not something garbage collection prevents",
      "Lisp is specifically credited with introducing garbage collection, so it is not absent from functional languages"
    ],
    correctAnswer: 0,
    explanation: "The Pros and Cons of Functional Coding table lists as a weakness: garbage collection and creating new immutable objects can hurt performance.\n\nThe table never claims garbage collection prevents recursion; it separately lists deep recursion causing stack overflows as its own weakness.\n\nHigher-order functions are listed as a strength-enabling pillar of functional programming, not something garbage collection prevents.\n\nLisp is specifically credited with introducing garbage collection, so it is not absent from functional languages."
  },
  {
    id: "csc302_ch3_092",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Which of the following is a weakness of functional coding?",
    options: [
      "Deep recursion can lead to stack overflows without proper optimization",
      "Garbage collection and creating new immutable objects can hurt performance",
      "All of these",
      "None of these"
    ],
    correctAnswer: 2,
    explanation: "The Pros and Cons of Functional Coding table lists deep recursion leading to stack overflows without proper optimization as a weakness.\n\nThe same table also lists garbage collection and creating new immutable objects hurting performance as a separate weakness, so both are supported."
  },
  {
    id: "csc302_ch3_093",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Why does the Pros and Cons of Functional Coding table list math-like proofs and formal verification as a strength?",
    options: [
      "Because they are far simpler to perform in functional code",
      "Because functional code cannot be verified mathematically at all",
      "Because formal verification only applies to imperative pointer arithmetic",
      "Because functional code is verified exclusively through unit testing, never proofs"
    ],
    correctAnswer: 0,
    explanation: "The Pros and Cons of Functional Coding table states math-like proofs and formal verification are far simpler in functional code, listing it as a strength.\n\nThe table lists this as a strength precisely because verification is easier, not impossible.\n\nFormal verification difficulty from pointer arithmetic is instead a weakness the deck associates with C's imperative pointer manipulation in Part II.\n\nThe deck never restricts functional verification exclusively to unit testing; it explicitly praises formal, proof-like verification."
  },
  {
    id: "csc302_ch3_094",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "What is the core philosophy of the declarative programming paradigm?",
    options: [
      "To shift the focus from how to achieve a result to describing what the desired result actually looks like",
      "Emphasizing precisely how each step executes describes the imperative philosophy this paradigm is contrasted against, the opposite framing",
      "Actor-based message passing is Erlang's concurrency model from Part VI, unrelated to the general declarative philosophy",
      "Static versus dynamic typing is a separate axis of language design never framed as the declarative core philosophy"
    ],
    correctAnswer: 0,
    explanation: "The Declarative Philosophy section states the core philosophy is to shift focus from how to achieve a result to describing what the desired result actually looks like.\n\nEmphasizing precisely how each step executes describes the imperative philosophy this paradigm is contrasted against, the opposite framing.\n\nActor-based message passing is Erlang's concurrency model from Part VI, unrelated to the general declarative philosophy.\n\nStatic versus dynamic typing is a separate axis of language design never framed as the declarative core philosophy."
  },
  {
    id: "csc302_ch3_095",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Who is credited with the quote 'Algorithm = Logic + Control'?",
    options: [
      "Robert Kowalski",
      "Philip Wadler is credited with the separate monad quote in Part IV",
      "Alain Colmerauer is credited with co-creating Prolog, not this quote",
      "C.A.R. Hoare is credited with the mathematical formalism behind Go's CSP model in Part VI, not this quote"
    ],
    correctAnswer: 0,
    explanation: "The Declarative Philosophy section attributes the quote 'Algorithm = Logic + Control' to Robert Kowalski.\n\nPhilip Wadler is credited with the separate monad quote in Part IV.\n\nAlain Colmerauer is credited with co-creating Prolog, not this quote.\n\nC.A.R. Hoare is credited with the mathematical formalism behind Go's CSP model in Part VI, not this quote."
  },
  {
    id: "csc302_ch3_096",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "In the declarative philosophy 'Algorithm = Logic + Control', what does the developer provide, and what does the runtime framework handle?",
    options: [
      "The developer provides the logic (rules, facts, and relations), and the runtime handles the execution control (how to search, resolve, or calculate)",
      "Reversing the roles, developer providing control and runtime providing logic, misstates the division described",
      "The entire point of declarative programming is that the runtime, not the developer, handles execution control, so the developer providing both leaves nothing for the framework to do",
      "The developer must still supply the logic; the runtime alone cannot invent the rules, facts, and relations"
    ],
    correctAnswer: 0,
    explanation: "The Declarative Philosophy section states the developer provides the logic (the rules, facts, and relations), while the underlying runtime framework handles the execution control (how to search, resolve, or calculate).\n\nReversing the roles, developer providing control and runtime providing logic, misstates the division described.\n\nThe entire point of declarative programming is that the runtime, not the developer, handles execution control, so the developer providing both leaves nothing for the framework to do.\n\nThe developer must still supply the logic; the runtime alone cannot invent the rules, facts, and relations."
  },
  {
    id: "csc302_ch3_097",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Which of the following is listed as an everyday example of declarative programming?",
    options: [
      "SQL queries",
      "A Fortran subroutine using implicit typing",
      "A C pointer-based string copy loop",
      "A Java class implementing a design pattern"
    ],
    correctAnswer: 0,
    explanation: "The Declarative Philosophy section lists SQL queries, regular expressions, HTML, and CSS as everyday declarative examples.\n\nA Fortran subroutine with implicit typing is an imperative example discussed in Part II, not a declarative one.\n\nA C pointer-based copy loop is the imperative pointer example from Part II, not declarative.\n\nA Java class implementing a design pattern belongs to the OOP discussion in Part III, not the declarative examples list."
  },
  {
    id: "csc302_ch3_098",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Who created Prolog, and where?",
    options: [
      "Alain Colmerauer and Philippe Roussel in Marseille, France",
      "Robert Kowalski is quoted regarding declarative philosophy, and Philip Wadler regarding monads, but neither is credited with creating Prolog",
      "John McCarthy created Lisp at MIT; Alonzo Church developed Lambda Calculus, not Prolog",
      "Dahl and Nygaard created Simula in Oslo, an entirely different, object-oriented language"
    ],
    correctAnswer: 0,
    explanation: "The Prolog section credits Alain Colmerauer and Philippe Roussel with creating Prolog in Marseille, France, in 1972.\n\nRobert Kowalski is quoted regarding declarative philosophy, and Philip Wadler regarding monads, but neither is credited with creating Prolog.\n\nJohn McCarthy created Lisp at MIT; Alonzo Church developed Lambda Calculus, not Prolog.\n\nDahl and Nygaard created Simula in Oslo, an entirely different, object-oriented language."
  },
  {
    id: "csc302_ch3_099",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Prolog is built on which mathematical foundation?",
    options: [
      "First-Order Predicate Calculus and resolution theorem proving",
      "Lambda Calculus underlies functional programming, and Category Theory underlies monads, both Part IV concepts, not Prolog's foundation",
      "The Von Neumann architecture underlies imperative programming, described in Part II, not Prolog",
      "Hindley-Milner is the type system used by functional languages like Haskell, described in Part IV, not Prolog's foundation"
    ],
    correctAnswer: 0,
    explanation: "The Prolog section states it is built on First-Order Predicate Calculus and resolution theorem proving.\n\nLambda Calculus underlies functional programming, and Category Theory underlies monads, both Part IV concepts, not Prolog's foundation.\n\nThe Von Neumann architecture underlies imperative programming, described in Part II, not Prolog.\n\nHindley-Milner is the type system used by functional languages like Haskell, described in Part IV, not Prolog's foundation."
  },
  {
    id: "csc302_ch3_100",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "In Prolog, what is a Rule, as opposed to a Fact?",
    options: [
      "A conditional relation expressed using Horn clauses",
      "An unconditional relation stated outright",
      "A question posed to the resolution system",
      "A keyword required a specific number of times to compile"
    ],
    correctAnswer: 0,
    explanation: "The Prolog section describes Rules as conditional relations using Horn clauses, distinct from Facts.\n\nAn unconditional relation stated outright is how the section defines a Fact, not a Rule.\n\nA question posed to the system is how the section defines a Query, a third distinct Prolog element.\n\nA keyword required a set number of times to compile describes INTERCAL's PLEASE requirement in Part VII, unrelated to Prolog."
  },
  {
    id: "csc302_ch3_101",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "In the Simple Prolog Code example, ancestor(X, Y) :- parent(X, Z), ancestor(Z, Y). is labeled as which kind of rule?",
    options: [
      "A recursive rule",
      "An unconditional fact",
      "A query posed to the system",
      "A backtracking failure"
    ],
    correctAnswer: 0,
    explanation: "The Simple Prolog Code example labels ancestor(X, Y) :- parent(X, Z), ancestor(Z, Y). as a recursive rule, since it calls ancestor within its own definition.\n\nAn unconditional fact is exemplified instead by parent(john, mary)., a separate line in the same example.\n\nA query is a question posed to the system, not a rule definition like this one.\n\nA backtracking failure is a runtime event during resolution, not a label applied to this rule in the example."
  },
  {
    id: "csc302_ch3_102",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "What is Unification in Prolog?",
    options: [
      "A process of matching variables with values or other variables to make terms identical",
      "A process of rolling back to try alternate rules or facts after a failed path",
      "A process of restarting a crashed actor in a known clean state",
      "A process of converting an imperative loop into a recursive function"
    ],
    correctAnswer: 0,
    explanation: "The Unification and Backtracking section defines Unification as a process of matching variables with values or other variables to make terms identical.\n\nRolling back to try alternate rules after failure is the definition given for Backtracking, the paired but distinct concept.\n\nRestarting a crashed actor describes Erlang's supervision trees in Part VI, unrelated to Prolog.\n\nConverting imperative loops into recursive functions is never described in the deck as a Prolog mechanism."
  },
  {
    id: "csc302_ch3_103",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "What is Backtracking in Prolog?",
    options: [
      "If a chosen logical path fails to satisfy a query, the resolution engine systematically rolls back and tries alternate rules or facts",
      "Matching two terms to make them identical is the definition given for Unification, the paired but distinct concept",
      "Translating a rule into a Horn clause describes how Rules are structured, not the Backtracking process itself",
      "Declaring a variable's type before use is a Fortran-style imperative concern from Part II, unrelated to Prolog's resolution engine"
    ],
    correctAnswer: 0,
    explanation: "The Unification and Backtracking section defines Backtracking as the resolution engine systematically rolling back and trying alternate rules or facts when a chosen logical path fails.\n\nMatching two terms to make them identical is the definition given for Unification, the paired but distinct concept.\n\nTranslating a rule into a Horn clause describes how Rules are structured, not the Backtracking process itself.\n\nDeclaring a variable's type before use is a Fortran-style imperative concern from Part II, unrelated to Prolog's resolution engine."
  },
  {
    id: "csc302_ch3_104",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Why can putting recursive rules in the wrong order cause Prolog's resolution engine to loop infinitely?",
    options: [
      "Because Prolog's search engine uses depth-first search",
      "Because Prolog's search engine uses breadth-first search exclusively",
      "Because Prolog lacks any concept of recursion",
      "Because Prolog requires all rules to be written in a single line"
    ],
    correctAnswer: 0,
    explanation: "The Infinite Loops in Prolog note states that because Prolog's search engine uses depth-first search, putting recursive rules in the wrong order can cause the resolution engine to loop infinitely.\n\nBreadth-first search is not the search strategy the deck attributes to Prolog; depth-first is specifically named as the cause of the infinite-loop risk.\n\nThe Simple Prolog Code example itself includes a recursive rule, so Prolog clearly supports recursion.\n\nThe deck never states a single-line requirement for Prolog rules."
  },
  {
    id: "csc302_ch3_105",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Which of the following is true about how Prolog programs are structured?",
    options: [
      "Prolog programs consist of Facts and conditional Rules built from Horn clauses",
      "Prolog resolution automatically parallelizes every query across multiple CPU cores",
      "All of these",
      "None of these"
    ],
    correctAnswer: 0,
    explanation: "The Prolog section states programs consist of Facts (unconditional relations) and Rules (conditional relations using Horn clauses), supporting the first statement.\n\nAutomatic parallelization across CPU cores is never mentioned anywhere in the Prolog section; the deck instead describes a depth-first resolution engine that can loop infinitely if rules are ordered incorrectly, so the second statement is unsupported."
  },
  {
    id: "csc302_ch3_106",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "What was the massive ambition behind Japan's Fifth Generation Computer Systems Project (1982-1992)?",
    options: [
      "To build supercomputing hardware centered around logic programming, aiming to create 'artificial intelligence computers' capable of speech translation, reasoning, and learning",
      "Replacing imperative languages with a standardized C dialect is never mentioned as this project's goal",
      "Quantum computing and Qiskit belong to Part IX's Future and Synthesis discussion, decades after this 1980s project",
      "The Gang of Four's design patterns book is a separate 1994 OOP milestone from Part III, unrelated to this Japanese government project"
    ],
    correctAnswer: 0,
    explanation: "The Fifth Generation Computer Systems Project anecdote states Japan's Ministry of International Trade and Industry funded the project to build supercomputing hardware centered around logic programming, aiming to create artificial intelligence computers capable of speech translation, reasoning, and learning.\n\nReplacing imperative languages with a standardized C dialect is never mentioned as this project's goal.\n\nQuantum computing and Qiskit belong to Part IX's Future and Synthesis discussion, decades after this 1980s project.\n\nThe Gang of Four's design patterns book is a separate 1994 OOP milestone from Part III, unrelated to this Japanese government project."
  },
  {
    id: "csc302_ch3_107",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Why was the Fifth Generation Computer Systems Project ultimately canceled?",
    options: [
      "General-purpose microprocessors (x86) evolved much faster than specialized hardware, and logic programming had a steep learning curve for real-world tasks",
      "The deck never mentions the project running out of funding within its first year; it ran across the stated 1982-1992 span",
      "Mathematical inconsistency of logic programming is never claimed anywhere in the deck",
      "A fire destroying the hardware is never mentioned as a cause in the source"
    ],
    correctAnswer: 0,
    explanation: "The Fifth Generation Computer Systems Project anecdote states the project was ultimately canceled because general-purpose microprocessors (x86) evolved much faster than specialized hardware, and logic programming had a steep learning curve for many real-world system tasks.\n\nThe deck never mentions the project running out of funding within its first year; it ran across the stated 1982-1992 span.\n\nMathematical inconsistency of logic programming is never claimed anywhere in the deck.\n\nA fire destroying the hardware is never mentioned as a cause in the source."
  },
  {
    id: "csc302_ch3_108",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Which of the following is a strength of logic programming?",
    options: [
      "Guaranteed constant-time performance for any constraint problem",
      "Predictable performance regardless of search-space size",
      "All of these",
      "None of these"
    ],
    correctAnswer: 3,
    explanation: "The Pros and Cons of Logic Programming table lists unpredictable performance characteristics due to search-space size as a weakness, contradicting a claim of guaranteed constant-time performance.\n\nThe same weakness contradicts predictable performance regardless of search-space size as well, so neither claim is supported."
  },
  {
    id: "csc302_ch3_109",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Why does the Pros and Cons of Logic Programming table list difficulty designing general system tasks as a weakness?",
    options: [
      "Because logic programming is difficult to apply to tasks like socket handling, GUI, or I/O",
      "Facts and rules are the fundamental building blocks of logic programming described throughout Part V, not something it cannot represent",
      "Manual memory management via destructors is a C++ feature from Part III, unrelated to logic programming's weaknesses",
      "The same table lists database interactions as an area where logic programming is highly expressive, a strength rather than something it cannot do"
    ],
    correctAnswer: 0,
    explanation: "The Pros and Cons of Logic Programming table states it is difficult to design general system tasks like socket handling, GUI, or I/O, listing this as a weakness.\n\nFacts and rules are the fundamental building blocks of logic programming described throughout Part V, not something it cannot represent.\n\nManual memory management via destructors is a C++ feature from Part III, unrelated to logic programming's weaknesses.\n\nThe same table lists database interactions as an area where logic programming is highly expressive, a strength rather than something it cannot do."
  },
  {
    id: "csc302_ch3_110",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Since the early 2000s, what shift in Moore's Law made concurrency a core design priority for modern programming languages?",
    options: [
      "A shift from single-core processor speed improvements to scaling out multi-core and distributed cloud architectures",
      "The shift described moves toward multi-core, not back toward single-core designs",
      "The section describes a shift in the type of scaling, not a complete halt in improvement",
      "Quantum processors replacing classical multi-core chips is a Part IX speculation about the future, not this section's description of the early 2000s"
    ],
    correctAnswer: 0,
    explanation: "The Multi-Core / Cloud Reality section states that since the early 2000s, Moore's Law has shifted from single-core processor speed improvements to scaling out multi-core and distributed cloud architectures, making concurrency a core design priority.\n\nThe shift described moves toward multi-core, not back toward single-core designs.\n\nThe section describes a shift in the type of scaling, not a complete halt in improvement.\n\nQuantum processors replacing classical multi-core chips is a Part IX speculation about the future, not this section's description of the early 2000s."
  },
  {
    id: "csc302_ch3_111",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "How is concurrency distinguished from parallelism?",
    options: [
      "Concurrency is managing multiple tasks by overlapping their execution, while parallelism is running tasks at the exact same physical moment",
      "The deck's distinction does not tie concurrency to requiring multiple physical processors; that requirement is instead closer to how parallelism is described",
      "The section explicitly draws a distinction between the two terms rather than treating them as synonyms",
      "Neither term is restricted to database transactions or graphics rendering in the deck"
    ],
    correctAnswer: 0,
    explanation: "The Concurrency vs. Parallelism section defines Concurrency as managing multiple tasks by overlapping their execution (dealing with a lot of things at once), and Parallelism as running tasks at the exact same physical moment (doing a lot of things at once).\n\nThe deck's distinction does not tie concurrency to requiring multiple physical processors; that requirement is instead closer to how parallelism is described.\n\nThe section explicitly draws a distinction between the two terms rather than treating them as synonyms.\n\nNeither term is restricted to database transactions or graphics rendering in the deck."
  },
  {
    id: "csc302_ch3_112",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "What is a Race Condition in concurrent programming?",
    options: [
      "Two threads trying to update a memory address at the exact same time",
      "Threads waiting on each other's locked resources indefinitely",
      "A thread that never terminates due to a recursive rule in the wrong order",
      "A thread crashing and being automatically restarted by a supervisor"
    ],
    correctAnswer: 0,
    explanation: "The Shared-Memory Thread Nightmare section defines a Race Condition as two threads trying to update a memory address at the exact same time.\n\nThreads waiting on each other's locked resources indefinitely is the definition given for a Deadlock, a separate risk in the same section.\n\nA thread looping forever due to a misordered recursive rule describes the Prolog infinite-loop risk in Part V, not a race condition.\n\nA thread crashing and being restarted by a supervisor describes Erlang's Let it Crash philosophy, a different concept entirely."
  },
  {
    id: "csc302_ch3_113",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "What is a Deadlock in concurrent programming?",
    options: [
      "Threads waiting on each other's locked resources indefinitely",
      "Two threads updating the same memory address at the exact same time",
      "A monad failing to isolate a side effect properly",
      "A goroutine sending a value to a channel with no receiver"
    ],
    correctAnswer: 0,
    explanation: "The Shared-Memory Thread Nightmare section defines a Deadlock as threads waiting on each other's locked resources indefinitely.\n\nTwo threads updating the same memory address at the same time is the definition given for a Race Condition, the paired but separate risk.\n\nA monad failing to isolate a side effect is a Part IV Haskell concept, unrelated to the deadlock definition.\n\nA goroutine blocking on a channel with no receiver is a Go-specific concurrency detail from later in Part VI, not the general Deadlock definition given here."
  },
  {
    id: "csc302_ch3_114",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "The Concurrency Maxim, 'Do not communicate by sharing memory; instead, share memory by communicating,' is attributed to which source?",
    options: [
      "The Go Programming Philosophy",
      "Joe Armstrong's Erlang design principles",
      "The Gang of Four's design patterns book",
      "Alan Kay's reflections on Smalltalk"
    ],
    correctAnswer: 0,
    explanation: "The Shared-Memory Thread Nightmare section attributes the Concurrency Maxim, 'Do not communicate by sharing memory; instead, share memory by communicating,' to the Go Programming Philosophy.\n\nJoe Armstrong is instead credited with the separate Gorilla-Banana Problem quote about OOP in Part III.\n\nThe Gang of Four book is credited with formalizing 23 design patterns in Part III, not this concurrency maxim.\n\nAlan Kay is credited with the 'big idea is messaging' quote about Smalltalk, a different quote entirely."
  },
  {
    id: "csc302_ch3_115",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Who developed Erlang, at which company, and in what year?",
    options: [
      "Joe Armstrong at Ericsson in 1986",
      "Robert Griesemer at Google in 2009",
      "James Gosling at Sun Microsystems in 1995",
      "Dennis Ritchie at Bell Labs in 1972"
    ],
    correctAnswer: 0,
    explanation: "The Erlang section credits Joe Armstrong with developing Erlang at Ericsson in 1986 to power telecom hardware.\n\nRobert Griesemer helped design Go at Google in 2009, a separate language discussed later in the same part.\n\nJames Gosling created Java at Sun Microsystems in 1995, a Part III language.\n\nDennis Ritchie created C at Bell Labs in 1972, a Part II language."
  },
  {
    id: "csc302_ch3_116",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "In Erlang's Actor Model, how do actors interact with one another?",
    options: [
      "They are completely isolated from one another, share no state, and communicate only by passing messages",
      "Sharing a global memory block protected by semaphores and locks describes the shared-memory threading model the actor model is meant to avoid",
      "Typed channel pipelines describe Go's CSP-based Goroutines and Channels, a different concurrency model discussed later in the same part",
      "Unifying shared variables describes Prolog's Unification mechanism from Part V, unrelated to the actor model"
    ],
    correctAnswer: 0,
    explanation: "The Erlang section describes the Actor Model Philosophy: actors are completely isolated from one another, share no state, and communicate only by passing messages, with every actor having a mailbox.\n\nSharing a global memory block protected by semaphores and locks describes the shared-memory threading model the actor model is meant to avoid.\n\nTyped channel pipelines describe Go's CSP-based Goroutines and Channels, a different concurrency model discussed later in the same part.\n\nUnifying shared variables describes Prolog's Unification mechanism from Part V, unrelated to the actor model."
  },
  {
    id: "csc302_ch3_117",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "What does every actor have in the Erlang actor model to receive messages?",
    options: [
      "A mailbox",
      "A shared memory address",
      "A borrow-checked reference",
      "A Horn clause"
    ],
    correctAnswer: 0,
    explanation: "The Erlang section states every actor has a mailbox to receive messages.\n\nA shared memory address is the shared-memory model the actor model deliberately avoids.\n\nA borrow-checked reference is a Rust memory-safety concept from Part VIII, unrelated to Erlang's mailbox.\n\nA Horn clause is a Prolog concept from Part V, unrelated to Erlang's actor model."
  },
  {
    id: "csc302_ch3_118",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "What does it mean to describe Erlang processes as 'Ultra-Lightweight'?",
    options: [
      "Millions of Erlang processes can run concurrently on a single CPU, managed by the Erlang Virtual Machine (BEAM)",
      "Compiling to under 200 bytes is Brainfuck's Part VII design goal, unrelated to Erlang's lightweight processes",
      "Every actor is explicitly described as having a mailbox, the opposite of lacking one",
      "Supervision and restarting crashed processes is the entire point of Erlang's Let it Crash philosophy, the opposite of being unsupervisable"
    ],
    correctAnswer: 0,
    explanation: "The Erlang section states processes are Ultra-Lightweight because millions of them can run concurrently on a single CPU, managed by the Erlang Virtual Machine (BEAM).\n\nCompiling to under 200 bytes is Brainfuck's Part VII design goal, unrelated to Erlang's lightweight processes.\n\nEvery actor is explicitly described as having a mailbox, the opposite of lacking one.\n\nSupervision and restarting crashed processes is the entire point of Erlang's Let it Crash philosophy, the opposite of being unsupervisable."
  },
  {
    id: "csc302_ch3_119",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "What is the Erlang Way described under the 'Let it Crash' Philosophy?",
    options: [
      "Don't try to handle fatal failures defensively; let the actor crash and restart it",
      "Write defensive code that catches and handles every possible unexpected error",
      "Prevent any actor from ever crashing through exhaustive compile-time checks",
      "Log every error to a file and continue execution in an unknown state"
    ],
    correctAnswer: 0,
    explanation: "The 'Let it Crash' Philosophy section states the Erlang Way is to not try to handle fatal failures defensively; instead, let the actor crash and restart it.\n\nWriting massive amounts of defensive error-catching code is described as the standard approach Erlang deliberately rejects.\n\nExhaustive compile-time checks to prevent crashes entirely is never described as Erlang's approach; it accepts that crashes will happen.\n\nContinuing execution in an unknown state is the opposite of restarting the actor in a known clean state, which the section specifies."
  },
  {
    id: "csc302_ch3_120",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "What is a Supervision Tree in Erlang?",
    options: [
      "Actors arranged in hierarchies supervised by specialized manager actors that automatically restart crashed workers in a known clean state",
      "A binary search tree used to route messages between mailboxes",
      "A data structure representing the infinite Fibonacci sequence lazily",
      "A hierarchy of classes used to implement inheritance-based code reuse"
    ],
    correctAnswer: 0,
    explanation: "The 'Let it Crash' Philosophy section defines Supervision Trees as actors arranged in hierarchies supervised by specialized manager actors, automatically restarting a crashed worker actor in a known clean state.\n\nA binary search tree for routing messages is never described in the deck; mailboxes are simply attached to individual actors.\n\nThe infinite Fibonacci sequence is a Haskell lazy-evaluation example from Part IV, unrelated to supervision trees.\n\nA class hierarchy for inheritance-based reuse is an OOP concept from Part III, unrelated to Erlang's supervision trees."
  },
  {
    id: "csc302_ch3_121",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Ericsson's AXD301 switch, written in Erlang, became a legendary example of extremely high system uptime.",
    options: [
      "True",
      "False",
      "Maybe",
      "I don't know"
    ],
    correctAnswer: 0,
    explanation: "The Telecom Anecdote states Ericsson's AXD301 switch, written in Erlang, achieved a legendary uptime rating of 99.9999999% (nine 9s) over several years, confirming the claim."
  },
  {
    id: "csc302_ch3_122",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Ericsson's AXD301 switch, written in Erlang, achieved an uptime rating famously described as how many nines?",
    options: [
      "Nine 9s (99.9999999%)",
      "Five 9s (99.999%)",
      "Three 9s (99.9%)",
      "Twelve 9s (99.9999999999%)"
    ],
    correctAnswer: 0,
    explanation: "The Telecom Anecdote states Ericsson's AXD301 switch achieved a legendary uptime rating of 99.9999999%, described as nine 9s, over several years.\n\nFive 9s (99.999%) appears in the deck's slide title as a general reference to Erlang's reputation, but the specific AXD301 anecdote states nine 9s, not five.\n\nThree 9s is far below the figure the deck actually cites for the AXD301 switch.\n\nTwelve 9s is not the figure given anywhere in the deck; nine 9s is the exact stated figure."
  },
  {
    id: "csc302_ch3_123",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Who designed Go, and at which company?",
    options: [
      "Robert Griesemer, Rob Pike, and Ken Thompson at Google",
      "Joe Armstrong at Ericsson",
      "Martin Odersky at EPFL",
      "James Gosling at Sun Microsystems"
    ],
    correctAnswer: 0,
    explanation: "The Go section credits Robert Griesemer, Rob Pike, and Ken Thompson with designing Go at Google in 2009.\n\nJoe Armstrong designed Erlang at Ericsson, a different concurrent language discussed earlier in the same part.\n\nMartin Odersky created Scala at EPFL, discussed in Part VIII, not Go.\n\nJames Gosling created Java at Sun Microsystems, discussed in Part III, not Go."
  },
  {
    id: "csc302_ch3_124",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Go's concurrency model is based on which mathematical formalism, and whose work does it come from?",
    options: [
      "Communicating Sequential Processes (CSP), from C.A.R. Hoare",
      "Lambda Calculus, from Alonzo Church",
      "First-Order Predicate Calculus, from Alain Colmerauer",
      "Category Theory, from Philip Wadler"
    ],
    correctAnswer: 0,
    explanation: "The Go section states Go is based on C.A.R. Hoare's Communicating Sequential Processes (CSP) mathematical formalism.\n\nLambda Calculus from Alonzo Church underlies functional programming in Part IV, not Go's concurrency model.\n\nFirst-Order Predicate Calculus from Alain Colmerauer underlies Prolog in Part V, not Go.\n\nCategory Theory, referenced through Philip Wadler's quote, underlies Haskell's monads in Part IV, not Go's concurrency model."
  },
  {
    id: "csc302_ch3_125",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Which of the following is true about Goroutines in Go?",
    options: [
      "Goroutines pass data to one another through typed pipelines called Channels",
      "Goroutines are multiplexed onto a pool of operating system threads automatically by Go's runtime scheduler",
      "All of these",
      "None of these"
    ],
    correctAnswer: 2,
    explanation: "The Go section states Go passes data between Goroutines using typed pipelines called Channels, supporting the first statement.\n\nThe same section states Goroutines are multiplexed onto a pool of operating system threads automatically by Go's runtime scheduler, supporting the second statement as well, so both are true."
  },
  {
    id: "csc302_ch3_126",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "In Go, what are Channels used for?",
    options: [
      "Typed pipelines that pass data between concurrent workers called Goroutines",
      "Isolated mailboxes that each actor uses to receive messages one at a time",
      "Manager processes that automatically restart crashed workers",
      "Wrapping side effects so they remain isolated from pure computation"
    ],
    correctAnswer: 0,
    explanation: "The Go section states Go passes data between concurrent workers (Goroutines) using typed pipelines called Channels, instead of using objects to pass messages.\n\nMailboxes for receiving messages describe Erlang's actor model earlier in the same part, a different concurrency mechanism.\n\nManager processes restarting crashed workers describe Erlang's supervision trees, not Go's channels.\n\nWrapping side effects for isolation describes Haskell's monads in Part IV, unrelated to Go's channels."
  },
  {
    id: "csc302_ch3_127",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "In the Go Channel Syntax example, what does the expression value := <-ch represent?",
    options: [
      "Receiving a value from a channel",
      "Sending a value to a channel",
      "Declaring a new channel with a buffer size",
      "Closing a channel permanently"
    ],
    correctAnswer: 0,
    explanation: "The Go Channel Syntax example states value := <-ch represents receiving a value from a channel.\n\nSending a value to a channel is instead represented by ch <- value, the other line in the same example.\n\nDeclaring a channel with a buffer size is never shown in this example.\n\nClosing a channel permanently is never shown in this example either."
  },
  {
    id: "csc302_ch3_128",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "How are Goroutines mapped onto operating system resources?",
    options: [
      "They are multiplexed onto a pool of operating system threads automatically by Go's runtime scheduler",
      "Each Goroutine is given its own dedicated operating system process",
      "Goroutines bypass the operating system entirely and run directly on hardware interrupts",
      "Goroutines must be manually assigned to specific CPU cores by the developer"
    ],
    correctAnswer: 0,
    explanation: "The Go section states Goroutines are multiplexed onto a pool of operating system threads automatically by Go's runtime scheduler.\n\nGiving each Goroutine its own dedicated OS process would contradict the described lightweight multiplexing model.\n\nBypassing the operating system to run on hardware interrupts directly is never described anywhere in the deck.\n\nManual CPU core assignment by the developer contradicts the word 'automatically' used to describe the scheduler's behavior."
  },
  {
    id: "csc302_ch3_129",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Which concurrency model uses locks, semaphores, and mutexes as its core abstraction?",
    options: [
      "Shared State",
      "Actor Model",
      "CSP",
      "Async/Await"
    ],
    correctAnswer: 0,
    explanation: "The Summary of Concurrency Models table lists Shared State as using Locks, Semaphores, Mutexes as its core abstraction, with maximum raw performance as its primary advantage.\n\nActor Model instead uses isolated actors and mailboxes as its core abstraction.\n\nCSP instead uses channels and anonymous pipes as its core abstraction.\n\nAsync/Await instead uses non-blocking event loops as its core abstraction."
  },
  {
    id: "csc302_ch3_130",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "What is the primary advantage of the Actor Model as a concurrency model?",
    options: [
      "Exceptional fault-tolerance",
      "Maximum raw performance",
      "Intuitive, structured flow",
      "Great for high-I/O servers"
    ],
    correctAnswer: 0,
    explanation: "The Summary of Concurrency Models table lists exceptional fault-tolerance as the primary advantage of the Actor Model, whose core abstraction is isolated actors and mailboxes.\n\nMaximum raw performance is listed as the Shared State model's primary advantage instead.\n\nIntuitive, structured flow is listed as CSP's primary advantage instead.\n\nGreat for high-I/O servers is listed as Async/Await's primary advantage instead."
  },
  {
    id: "csc302_ch3_131",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Which concurrency model uses non-blocking event loops as its core abstraction and is best suited for high-I/O servers?",
    options: [
      "Async/Await",
      "Shared State",
      "Actor Model",
      "CSP"
    ],
    correctAnswer: 0,
    explanation: "The Summary of Concurrency Models table lists Async/Await as using non-blocking event loops as its core abstraction, with 'great for high-I/O servers' as its primary advantage.\n\nShared State instead uses locks, semaphores, and mutexes, with maximum raw performance as its advantage.\n\nActor Model instead uses isolated actors and mailboxes, with fault-tolerance as its advantage.\n\nCSP instead uses channels and anonymous pipes, with intuitive structured flow as its advantage."
  },
  {
    id: "csc302_ch3_132",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "What is the hard truth about designing distributed, split-brain-resilient systems?",
    options: [
      "There is no hardware magic; it requires managing network and logical state trade-offs",
      "Quantum hardware fully eliminates the need to reason about distributed state",
      "Choosing the Actor Model automatically guarantees a system is split-brain-resilient",
      "Only shared-memory threading can achieve true distributed resilience"
    ],
    correctAnswer: 0,
    explanation: "The Hard Truth section closes Part VI by stating there is no hardware magic; designing distributed, split-brain-resilient systems requires managing network and logical state trade-offs.\n\nQuantum hardware is a Part IX topic never linked to eliminating distributed-systems reasoning.\n\nNo single model, including the Actor Model, is claimed to automatically guarantee split-brain resilience; the section frames this as an inherent trade-off regardless of model.\n\nShared-memory threading is presented earlier in the same part as a source of reliability risk, not as the unique path to resilience."
  },
  {
    id: "csc302_ch3_133",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "What are Esoteric Programming Languages (Esolangs) designed for?",
    options: [
      "Not commercial utility, but to explore boundaries, challenge programming paradigms, or serve as artistic and satiric expression",
      "Primarily to maximize enterprise adoption in large-scale commercial software",
      "Primarily to replace mainstream languages like Java and Python in production systems",
      "Primarily to provide a stable, long-term standard for academic research papers"
    ],
    correctAnswer: 0,
    explanation: "The Art of Esoteric Computation section defines Esolangs as languages designed not for commercial utility, but to explore boundaries, challenge programming paradigms, or serve as forms of artistic and satiric expression.\n\nMaximizing enterprise adoption is explicitly ruled out, since the section states they are not designed for commercial utility.\n\nReplacing mainstream production languages is never claimed as their purpose.\n\nProviding a stable academic-paper standard describes ALGOL's original goal in Part II, not esolangs."
  },
  {
    id: "csc302_ch3_134",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "What do Esolangs prove about Turing completeness?",
    options: [
      "That it can be achieved with extremely minimal, absurd, or beautiful constraints",
      "That it can never be achieved outside of mainstream imperative languages",
      "That it requires at least 23 formal design patterns to be implemented",
      "That it can only be achieved using quantum superposition"
    ],
    correctAnswer: 0,
    explanation: "The Art of Esoteric Computation section states Esolangs prove that Turing completeness can be achieved with extremely minimal, absurd, or beautiful constraints.\n\nThe entire point of the section is that esolangs, which are not mainstream imperative languages, achieve Turing completeness, contradicting a claim that it requires mainstream languages.\n\nThe 23 design patterns are a Gang of Four OOP concept from Part III, unrelated to Turing completeness.\n\nQuantum superposition is a Part IX topic unrelated to the classical Turing completeness discussed here."
  },
  {
    id: "csc302_ch3_135",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Which of the following is given as a reason to study Esolangs?",
    options: [
      "They deepen understanding of compilation and formal grammar theory",
      "They guarantee higher salaries for developers who master them",
      "They are required knowledge for passing industry certification exams",
      "They eliminate the need to learn any mainstream programming language"
    ],
    correctAnswer: 0,
    explanation: "The Why Study Esolangs? section lists deepening understanding of compilation and formal grammar theory, exposing hidden design assumptions in standard languages, and simply being fun.\n\nSalary outcomes are never mentioned anywhere in the deck's discussion of esolangs.\n\nCertification exam requirements are never mentioned in the deck at all.\n\nThe deck never claims esolangs eliminate the need to learn mainstream languages; it treats them as an educational supplement."
  },
  {
    id: "csc302_ch3_136",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Which of the following is true of Brainfuck as an esoteric language?",
    options: [
      "Brainfuck must use the keyword PLEASE a specific number of times to compile",
      "Brainfuck programs are represented as abstract, colored images rather than text",
      "All of these",
      "None of these"
    ],
    correctAnswer: 3,
    explanation: "The PLEASE keyword requirement belongs to INTERCAL, not Brainfuck, which instead consists of only 8 characters manipulating an infinite tape.\n\nRepresenting programs as abstract, colored images describes Piet, not Brainfuck, so neither statement is supported."
  },
  {
    id: "csc302_ch3_137",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Who created Brainfuck, and in what year?",
    options: [
      "Urban Müller, in 1993",
      "Don Woods and James M. Lyon, in 1972",
      "David Morgan-Mar, in the 1990s",
      "Alain Colmerauer, in 1972"
    ],
    correctAnswer: 0,
    explanation: "The Brainfuck section credits Urban Müller with creating Brainfuck in 1993.\n\nDon Woods and James M. Lyon created INTERCAL in 1972, a different esolang discussed next in the same part.\n\nDavid Morgan-Mar created both Piet and Chef, separate esolangs discussed later in the same part, not Brainfuck.\n\nAlain Colmerauer co-created Prolog in 1972, an entirely different, non-esoteric declarative language from Part V."
  },
  {
    id: "csc302_ch3_138",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "What was Urban Müller's goal in creating Brainfuck?",
    options: [
      "To write a compiler that compiled to less than 200 bytes of Amiga machine code",
      "To create a language with absolutely no syntactic similarities to any existing language",
      "To create a language that could be cooked and eaten as a real dish",
      "To build supercomputing hardware centered around logic programming"
    ],
    correctAnswer: 0,
    explanation: "The Brainfuck section states Müller's goal was writing a compiler that compiled to less than 200 bytes of Amiga machine code.\n\nA language with no syntactic similarities to existing languages describes INTERCAL's satirical premise, a different esolang.\n\nA language that can be cooked and eaten describes Chef, by David Morgan-Mar, a different esolang.\n\nBuilding supercomputing hardware around logic programming describes Japan's Fifth Generation Computer Systems Project in Part V, unrelated to Brainfuck."
  },
  {
    id: "csc302_ch3_139",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "How many characters make up the entire Brainfuck language, representing an infinite tape, a data pointer, and byte manipulation commands?",
    options: [
      "8",
      "23",
      "4",
      "50"
    ],
    correctAnswer: 0,
    explanation: "The Brainfuck section states it consists of only 8 characters representing an infinite tape, a data pointer, and byte manipulation commands: > < + - . , [ ].\n\n23 is the number of classic design patterns formalized by the Gang of Four in Part III, unrelated to Brainfuck's character count.\n\n4 is not the figure given for Brainfuck's character set.\n\n50 is not the figure given for Brainfuck's character set."
  },
  {
    id: "csc302_ch3_140",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Why does the Brainfuck program +[] loop infinitely?",
    options: [
      "It increments the cell, then loops because the value is always non-zero",
      "It decrements the cell until it underflows into a negative loop",
      "It sends a message to an isolated actor that never replies",
      "It resolves a Horn clause that recursively calls itself without a base case"
    ],
    correctAnswer: 0,
    explanation: "The Infinite Brainfuck Loop example states +[] increments the cell, then loops infinitely because the value is always non-zero.\n\nDecrementing until underflow is not the mechanism described for this specific example.\n\nSending a message to an actor describes Erlang's model in Part VI, unrelated to this Brainfuck loop.\n\nResolving a self-recursive Horn clause describes a Prolog infinite loop in Part V, a different mechanism entirely."
  },
  {
    id: "csc302_ch3_141",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Who designed INTERCAL, and in what year?",
    options: [
      "Don Woods and James M. Lyon, in 1972",
      "Urban Müller, in 1993",
      "David Morgan-Mar, in the 1990s",
      "Robert Griesemer, Rob Pike, and Ken Thompson, in 2009"
    ],
    correctAnswer: 0,
    explanation: "The INTERCAL section credits Don Woods and James M. Lyon with designing it in 1972.\n\nUrban Müller created Brainfuck in 1993, a different esolang discussed just before INTERCAL in the same part.\n\nDavid Morgan-Mar created Piet and Chef, discussed later in the same part, not INTERCAL.\n\nGriesemer, Pike, and Thompson designed Go in 2009 at Google, an entirely different, mainstream concurrent language from Part VI."
  },
  {
    id: "csc302_ch3_142",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "What was the satirical premise behind INTERCAL's design?",
    options: [
      "To create a language with absolutely no syntactic similarities to any existing programming languages of its time",
      "To create a language that compiles to fewer than 200 bytes of machine code",
      "To create a language where code is represented as abstract, colored images",
      "To create a language whose programs can be cooked and eaten as real dishes"
    ],
    correctAnswer: 0,
    explanation: "The INTERCAL section states its satirical premise was to create a language with absolutely no syntactic similarities to any existing programming languages of its time.\n\nCompiling to fewer than 200 bytes was Brainfuck's design goal, a different esolang.\n\nCode as abstract, colored images describes Piet, by David Morgan-Mar, a different esolang.\n\nPrograms that can be cooked and eaten describes Chef, also by David Morgan-Mar, a different esolang."
  },
  {
    id: "csc302_ch3_143",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "What happens in INTERCAL if the keyword PLEASE is used too many times in a program?",
    options: [
      "The compiler rejects it as 'overly pleading' and fails to compile",
      "The compiler declares the program 'unpolite' and refuses to compile it",
      "The program automatically converts every loop into an infinite one",
      "The program is silently accepted with no consequence whatsoever"
    ],
    correctAnswer: 0,
    explanation: "The INTERCAL section states that if PLEASE is used too many times, the compiler rejects it as 'overly pleading' and fails to compile.\n\nDeclaring the program 'unpolite' is instead the consequence of using PLEASE too little, the opposite failure case.\n\nAutomatically converting loops into infinite ones is never described as a PLEASE-related consequence.\n\nThe entire point of the Politeness Requirement is that overuse has a consequence, so silent acceptance contradicts the rule."
  },
  {
    id: "csc302_ch3_144",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "The INTERCAL compiler refuses to compile a program if the keyword PLEASE is not used frequently enough.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "The INTERCAL section states the Politeness Requirement: if PLEASE is not used enough, the compiler will declare the program 'unpolite' and refuse to compile it, confirming the claim as written."
  },
  {
    id: "csc302_ch3_145",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "In Piet, created by David Morgan-Mar, how is a program's logic represented?",
    options: [
      "As abstract, colored images, with the pointer traveling through color blocks and operations triggered by transitions in hue and brightness",
      "As culinary recipes, with variables represented as ingredients and mixing bowls as processing stacks",
      "As nested prefix list notation using operators and arguments",
      "As facts, rules, and queries resolved through backtracking"
    ],
    correctAnswer: 0,
    explanation: "The Piet & Chef section describes Piet as representing code through abstract, colored images, with the pointer traveling through color blocks and operations triggered by transitions in hue and brightness.\n\nRecipes with ingredients and mixing bowls describe Chef, the companion esolang by the same creator, David Morgan-Mar, discussed alongside Piet.\n\nNested prefix list notation describes Lisp's syntax from Part IV, unrelated to Piet.\n\nFacts, rules, and queries resolved through backtracking describe Prolog from Part V, unrelated to Piet."
  },
  {
    id: "csc302_ch3_146",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "What distinguishes Chef, also created by David Morgan-Mar, from a typical programming language?",
    options: [
      "Code reads exactly like culinary recipes, and a valid program can be cooked and eaten as a real dish",
      "Code is represented entirely as colored pixels traveling through a grid",
      "Code must use the keyword PLEASE a specific number of times to compile",
      "Code consists of only 8 characters manipulating an infinite tape"
    ],
    correctAnswer: 0,
    explanation: "The Piet & Chef section states Chef reads exactly like culinary recipes, with variables as ingredients and mixing bowls as processing stacks, and a valid program can be cooked and eaten as a real dish.\n\nColored pixels traveling through a grid describes Piet, Chef's companion esolang by the same creator.\n\nThe PLEASE keyword requirement belongs to INTERCAL, a different esolang.\n\nThe 8-character infinite-tape design belongs to Brainfuck, a different esolang."
  },
  {
    id: "csc302_ch3_147",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "What is the overall lesson drawn from studying Esolangs like Brainfuck, INTERCAL, Piet, and Chef?",
    options: [
      "That the way we represent logic is highly arbitrary, and languages are interfaces designed first and foremost to help human minds organize thought",
      "That only languages with commercial backing can achieve Turing completeness",
      "That politeness keywords should be adopted by all mainstream compilers",
      "That colored pixels are objectively superior to text for representing logic"
    ],
    correctAnswer: 0,
    explanation: "The Lesson of Esolangs section states these languages prove the way we represent logic is highly arbitrary, and that languages are interfaces designed first and foremost to help human minds organize thought.\n\nThe entire point of the esolangs discussed is that Turing completeness can be reached without any commercial backing, contradicting a claim that commercial backing is required.\n\nAdopting politeness keywords universally is never proposed; INTERCAL's PLEASE rule is presented as satire specific to that language.\n\nThe section frames representation choices as arbitrary, not as ranking colored pixels above text."
  },
  {
    id: "csc302_ch3_148",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Over the last decade, what has happened to classic functional features like lambdas and pattern matching?",
    options: [
      "They have been adopted into mainstream imperative and OOP languages",
      "They have been entirely removed from all functional languages",
      "They have been replaced by esoteric language constructs",
      "They have only ever existed inside Prolog and SQL"
    ],
    correctAnswer: 0,
    explanation: "The Modern Paradigm Convergence section states that over the last decade, classic functional features (lambdas, list comprehensions, pattern matching) have been adopted into mainstream imperative and OOP languages.\n\nThe features remain part of functional languages themselves; the section describes their spread into other paradigms, not their removal.\n\nEsoteric language constructs are an entirely separate topic from Part VII, unrelated to this convergence.\n\nLambdas and pattern matching originate in functional languages like Lisp and Haskell, not in Prolog or SQL."
  },
  {
    id: "csc302_ch3_149",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "What does the Java 8+ example list.stream().filter(x -> x > 10).forEach(System.out::println); illustrate about modern Java?",
    options: [
      "It brings declarative functional pipeline syntax to Java's historically verbose class system",
      "It removes Java's requirement that all code exist inside a class",
      "It demonstrates Java's borrow checker managing memory safety at compile time",
      "It demonstrates Java's actor model isolating each stream element into its own mailbox"
    ],
    correctAnswer: 0,
    explanation: "The Java Lambdas example section states this snippet brings declarative functional pipeline syntax to Java's historically verbose class system.\n\nJava's requirement that everything exist inside a class is a separate, unrelated feature from the C++ vs. Java comparison in Part III, not something this lambda example removes.\n\nThe borrow checker is a Rust feature described in Part VIII, not a Java feature.\n\nAn actor model with mailboxes is Erlang's concurrency model from Part VI, unrelated to this Java stream example."
  },
  {
    id: "csc302_ch3_150",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Python enforces a single strict programming paradigm and disallows functional-style code such as map and filter.",
    options: [
      "True",
      "False",
      "Maybe",
      "I don't know"
    ],
    correctAnswer: 1,
    explanation: "The Python section states Python is a highly versatile, multi-paradigm language with built-in support for functional constructs like map(), filter(), and lambda expressions, contradicting a claim that it enforces a single strict paradigm."
  },
  {
    id: "csc302_ch3_151",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Which paradigms does Python support as a multi-paradigm 'pragmatic glue' language?",
    options: [
      "Object-Oriented, Imperative, and Functional Programming",
      "Only Object-Oriented and Declarative Programming",
      "Only Logic Programming and Concurrent Programming",
      "Only Esoteric and Quantum Programming"
    ],
    correctAnswer: 0,
    explanation: "The Python section states it is a highly versatile, multi-paradigm language supporting Object-Oriented Programming, Imperative Programming, and Functional Programming.\n\nDeclarative programming is not one of the three paradigms the deck explicitly lists Python as supporting.\n\nLogic and Concurrent Programming are not the paradigms the deck lists for Python; those are separately discussed in Parts V and VI.\n\nEsoteric and Quantum Programming are unrelated Part VII and Part IX topics, not paradigms attributed to Python."
  },
  {
    id: "csc302_ch3_152",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "What does Python's design philosophy prioritize?",
    options: [
      "Developer readability and rapid prototyping over strictly enforcing a single paradigm",
      "Strict enforcement of a single, pure paradigm above all other concerns",
      "Maximum raw runtime performance above readability",
      "Compile-time memory safety through a borrow checker"
    ],
    correctAnswer: 0,
    explanation: "The Python section states its design philosophy prioritizes developer readability and rapid prototyping over strictly enforcing a single paradigm.\n\nStrict single-paradigm enforcement is the opposite of what the deck attributes to Python's philosophy.\n\nMaximum raw runtime performance above readability is never claimed for Python; that emphasis instead describes C in Part II.\n\nA borrow checker for compile-time memory safety is a Rust feature discussed later in the same part, not a Python feature."
  },
  {
    id: "csc302_ch3_153",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "What is the Borrow Checker in Rust designed to do?",
    options: [
      "Manage memory safety at compile time using ownership lifetimes without requiring a garbage collector",
      "Manage memory safety at runtime by pausing execution to collect garbage periodically",
      "Manage message delivery between isolated actors using mailboxes",
      "Manage type inference using the Hindley-Milner algorithm"
    ],
    correctAnswer: 0,
    explanation: "The Rust section states the Borrow Checker manages memory safety at compile time using ownership lifetimes without requiring a garbage collector.\n\nPausing execution to collect garbage at runtime describes languages like Lisp or Java, the approach Rust's borrow checker is designed to avoid.\n\nManaging mailbox message delivery describes Erlang's actor model from Part VI, unrelated to Rust's borrow checker.\n\nHindley-Milner type inference is attributed to Haskell, OCaml, and ML in Part IV, not specifically credited as the Borrow Checker's mechanism."
  },
  {
    id: "csc302_ch3_154",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Rust relies primarily on class-based inheritance for code reuse across types.",
    options: [
      "True",
      "False",
      "Maybe",
      "I don't know"
    ],
    correctAnswer: 1,
    explanation: "The Rust section states Rust avoids class-based OOP inheritance, opting instead for interfaces called Traits, contradicting a claim that it relies primarily on class-based inheritance."
  },
  {
    id: "csc302_ch3_155",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Instead of class-based OOP inheritance, what interface mechanism does Rust use?",
    options: [
      "Traits",
      "Virtual procedures",
      "Horn clauses",
      "Supervision trees"
    ],
    correctAnswer: 0,
    explanation: "The Rust section states Rust avoids class-based OOP inheritance, opting instead for interfaces called Traits.\n\nVirtual procedures are a Simula 67 concept from Part III, unrelated to Rust's Trait mechanism.\n\nHorn clauses are a Prolog concept from Part V, unrelated to Rust.\n\nSupervision trees are an Erlang fault-tolerance concept from Part VI, unrelated to Rust's interface design."
  },
  {
    id: "csc302_ch3_156",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "In the Rust Pattern Matching Example, match outcome { Just(val) => print!(val), Nothing => panic!() }, what functional programming concept does this rely on?",
    options: [
      "Algebraic data types combined with pattern matching",
      "Lazy evaluation of an infinite data structure",
      "A monad wrapping a database write",
      "Homoiconicity, where code is represented as nested lists"
    ],
    correctAnswer: 0,
    explanation: "The Rust section credits Rust's highly functional architecture with leveraging pattern matching and algebraic data types, exactly what the Just/Nothing outcome pattern in this example draws on.\n\nLazy evaluation of an infinite structure is the Haskell Fibonacci example from Part IV, a different concept from this pattern match.\n\nA monad wrapping a database write is the general monad use case from Part IV, not what this specific example demonstrates.\n\nHomoiconicity describing code as nested lists is a Lisp concept from Part IV, unrelated to Rust's pattern matching syntax."
  },
  {
    id: "csc302_ch3_157",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Who created Scala, and with what goal?",
    options: [
      "Martin Odersky, to bridge functional programming with the enterprise Java VM",
      "James Gosling, to simplify C++ syntax for enterprise developers",
      "Robert Kowalski, to formalize the relationship between logic and control",
      "Alan Kay, to introduce pure message passing to enterprise software"
    ],
    correctAnswer: 0,
    explanation: "The Scala section credits Martin Odersky with creating Scala in 2004 to bridge functional programming with the enterprise Java VM.\n\nJames Gosling created Java itself in Part III, not Scala, which runs on the Java VM Gosling's language established.\n\nRobert Kowalski is credited with the 'Algorithm = Logic + Control' quote in Part V, not with creating Scala.\n\nAlan Kay is credited with Smalltalk's messaging philosophy in Part III, not with creating Scala."
  },
  {
    id: "csc302_ch3_158",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "What is the Synthesis that Scala achieves between objects and functions?",
    options: [
      "Every value in Scala is an object, and every function in Scala is a first-class value",
      "Every value in Scala is immutable, and no function may ever be reassigned",
      "Every object in Scala must inherit from at least two separate base classes",
      "Every function in Scala must be wrapped in a monad before execution"
    ],
    correctAnswer: 0,
    explanation: "The Scala section describes the Synthesis: every value in Scala is an object (pure OOP design), and every function in Scala is a first-class value (pure functional design).\n\nUniversal immutability with functions that can never be reassigned is not the Synthesis described; Scala's pillars here are objecthood and first-class functions, not a blanket immutability rule.\n\nMandatory inheritance from two base classes echoes C++'s multiple inheritance from Part III, not Scala's described synthesis.\n\nMandatory monad wrapping for every function is a Haskell-specific idea from Part IV, not what the deck attributes to Scala."
  },
  {
    id: "csc302_ch3_159",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "What is the difference between an Internal DSL and an External DSL?",
    options: [
      "An Internal DSL leverages the host language's syntax, while an External DSL is a standalone language with its own custom parser and interpreter",
      "An Internal DSL requires a dedicated hardware chip, while an External DSL runs entirely in software",
      "An Internal DSL is always faster at runtime than any External DSL",
      "An Internal DSL can only be written in Prolog, while an External DSL can only be written in Lisp"
    ],
    correctAnswer: 0,
    explanation: "The Domain-Specific Languages section states Internal DSLs leverage the host language's syntax (e.g., Gradle in Groovy, Rails routes in Ruby), while External DSLs are standalone languages with their own custom parsers and interpreters (e.g., SQL, CSS, regular expressions).\n\nDedicated hardware chips are never mentioned anywhere in the deck's discussion of DSLs.\n\nRelative runtime speed between Internal and External DSLs is never compared in the source.\n\nThe deck never restricts Internal DSLs to Prolog or External DSLs to Lisp; its own examples use Groovy, Ruby, SQL, CSS, and regular expressions."
  },
  {
    id: "csc302_ch3_160",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "What is the ultimate goal of a Domain-Specific Language?",
    options: [
      "To abstract away low-level programming mechanics, allowing domain experts to read and write business-focused rules directly",
      "To replace the need for any general-purpose programming language entirely",
      "To guarantee that a program compiles to fewer than 200 bytes of machine code",
      "To require every developer to be fluent in First-Order Predicate Calculus"
    ],
    correctAnswer: 0,
    explanation: "The Domain-Specific Languages section states the Ultimate Goal of a DSL is to abstract away low-level programming mechanics, allowing domain experts to read and write business-focused rules directly.\n\nDSLs are described as solving specific complex problems, not as a full replacement for general-purpose languages.\n\nCompiling to under 200 bytes is Brainfuck's unrelated design goal from Part VII.\n\nFirst-Order Predicate Calculus fluency is a Prolog foundation from Part V, not a DSL requirement."
  },
  {
    id: "csc302_ch3_161",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Rails routes written in Ruby are given as an example of which kind of Domain-Specific Language?",
    options: [
      "An Internal DSL, which leverages the host language's syntax",
      "An External DSL, which uses its own custom parser and interpreter",
      "An Esoteric DSL, designed purely for artistic expression",
      "A Quantum DSL, designed to express superposition safely"
    ],
    correctAnswer: 0,
    explanation: "The Domain-Specific Languages section gives Rails routes in Ruby as an example of an Internal DSL, which leverages the host language's syntax.\n\nExternal DSLs are instead exemplified by SQL, CSS, and regular expressions, standalone languages with their own parsers.\n\nEsoteric DSLs for artistic expression are not a category the deck defines; Esolangs are a separate Part VII topic.\n\nQuantum DSLs are not discussed anywhere in the deck; quantum languages like Q# and Qiskit appear in Part IX but are never called DSLs."
  },
  {
    id: "csc302_ch3_162",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Which of the following is true about quantum programming paradigms?",
    options: [
      "Qubits replace standard binary bits as the fundamental unit of quantum state",
      "Traditional if/else branching works safely by directly inspecting a qubit's value",
      "All of these",
      "None of these"
    ],
    correctAnswer: 0,
    explanation: "The Quantum Programming Paradigms section states Qubits replace standard binary bits, supporting the first statement.\n\nThe same section states you cannot inspect variable values to write simple if/else branching without collapsing the wave function, directly contradicting the second statement."
  },
  {
    id: "csc302_ch3_163",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "In quantum programming, what replaces standard binary bits as the fundamental unit of state?",
    options: [
      "Qubits",
      "Goroutines",
      "Monads",
      "Actors"
    ],
    correctAnswer: 0,
    explanation: "The Quantum Programming Paradigms section states Qubits replace standard binary bits as a core quantum computing concept.\n\nGoroutines are Go's lightweight concurrent workers from Part VI, unrelated to quantum computing.\n\nMonads are a Haskell abstraction from Part IV, unrelated to quantum computing.\n\nActors are Erlang's isolated concurrent processes from Part VI, unrelated to quantum computing."
  },
  {
    id: "csc302_ch3_164",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "What do quantum operations use instead of traditional logic gates?",
    options: [
      "Superposition and quantum entanglement",
      "Semaphores and locks",
      "Horn clauses and resolution",
      "Message passing and mailboxes"
    ],
    correctAnswer: 0,
    explanation: "The Quantum Programming Paradigms section states operations use superposition and quantum entanglement instead of logic gates.\n\nSemaphores and locks are a shared-memory threading concept from Part VI, unrelated to quantum operations.\n\nHorn clauses and resolution are Prolog concepts from Part V, unrelated to quantum computing.\n\nMessage passing and mailboxes are Erlang's actor model concepts from Part VI, unrelated to quantum computing."
  },
  {
    id: "csc302_ch3_165",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Which languages are building new, specialized paradigms to express quantum operations safely?",
    options: [
      "Microsoft's Q# and IBM's Qiskit",
      "Go and Erlang",
      "Prolog and SQL",
      "Rust and Scala"
    ],
    correctAnswer: 0,
    explanation: "The Quantum Programming Paradigms section names Microsoft's Q# and IBM's Qiskit as languages building new, specialized paradigms to express quantum operations safely.\n\nGo and Erlang are the classical concurrent languages discussed in Part VI, not quantum languages.\n\nProlog and SQL are declarative and logic-programming examples from Part V, unrelated to quantum computing.\n\nRust and Scala are multi-paradigm languages discussed in Part VIII, unrelated to quantum computing."
  },
  {
    id: "csc302_ch3_166",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Why can't a developer write simple if/else branching by inspecting a variable's value in a quantum state?",
    options: [
      "Because inspecting the value would collapse the wave function",
      "Because quantum languages have no concept of a variable at all",
      "Because quantum computers cannot execute any conditional logic under any circumstances",
      "Because Q# and Qiskit have not yet been publicly released"
    ],
    correctAnswer: 0,
    explanation: "The Quantum Programming Paradigms section states that in a quantum state, you cannot inspect variable values to write simple if/else branching without collapsing the wave function.\n\nQuantum computing concepts like qubits are described as a form of state, not as the total absence of variables.\n\nThe section frames this as a challenge for traditional branching specifically, not a blanket claim that no conditional logic is possible in quantum computing.\n\nThe deck names Q# and Qiskit as existing languages being built for this purpose, not as unreleased."
  },
  {
    id: "csc302_ch3_167",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "How is the rise of AI assistants (Large Language Models) generating software code directly from natural language best described?",
    options: [
      "As 'Declarative Programming via Natural Language,' shifting the developer's role from syntactic execution to architectural oversight and validation",
      "As a return to the 1940s-1950s Hardware-Driven era of programming",
      "As a form of Esoteric Programming designed purely for satire",
      "As proof that the imperative paradigm has become mathematically obsolete"
    ],
    correctAnswer: 0,
    explanation: "The Paradigm Shifts in the AI Era section describes this trend as 'Declarative Programming via Natural Language,' shifting the primary developer paradigm from syntactic execution to architectural oversight and validation.\n\nThe Hardware-Driven era is the earliest, most manual stage of the Part I timeline, the opposite of this natural-language-driven shift.\n\nEsoteric Programming is the satirical Part VII category, unrelated to AI code generation.\n\nThe deck never claims the imperative paradigm has become mathematically obsolete; it discusses a shift in developer role, not the death of a paradigm."
  },
  {
    id: "csc302_ch3_168",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "In the AI era, what does the programmer's role transition to?",
    options: [
      "Designing systems, specifying parameters, and evaluating generated code",
      "Writing every line of assembly by hand to maximize runtime performance",
      "Manually tracking dynamically allocated memory without garbage collection",
      "Resolving Horn clauses by hand for every logical query"
    ],
    correctAnswer: 0,
    explanation: "The Paradigm Shifts in the AI Era section states the programmer transitions from writing raw code to designing systems, specifying parameters, and evaluating generated code.\n\nWriting assembly by hand describes the 1940s-1950s Hardware-Driven era, the opposite direction of this shift.\n\nManually tracking memory without garbage collection describes the pre-Lisp state of affairs, unrelated to the AI era shift.\n\nManually resolving Horn clauses is a Prolog concept from Part V, unrelated to this AI-era role shift."
  },
  {
    id: "csc302_ch3_169",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Which paradigm is recommended if the primary concern is raw hardware performance?",
    options: [
      "Imperative / Systems Programming (C, C++, Rust)",
      "Functional / Message-Passing (Erlang, Elixir, Clojure)",
      "Declarative (SQL)",
      "Logic Programming (Prolog)"
    ],
    correctAnswer: 0,
    explanation: "The Choosing the Right Paradigm table recommends Imperative / Systems Programming (C, C++, Rust) when the primary concern is raw hardware performance.\n\nFunctional / Message-Passing languages are recommended instead for thread safety and concurrency.\n\nDeclarative (SQL) is recommended instead for expressing complex relational data.\n\nLogic Programming (Prolog) is recommended instead for solving intricate rules and constraints."
  },
  {
    id: "csc302_ch3_170",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Which paradigm is recommended if the primary concern is thread safety and concurrency?",
    options: [
      "Functional / Message-Passing languages such as Erlang, Elixir, and Clojure",
      "Object-Oriented / Domain Models such as Java and C#",
      "Dynamic Multi-Paradigm languages such as Python and JavaScript",
      "Imperative / Systems Programming languages such as C, C++, and Rust"
    ],
    correctAnswer: 0,
    explanation: "The Choosing the Right Paradigm table recommends Functional / Message-Passing (Erlang, Elixir, Clojure) for thread safety and concurrency.\n\nObject-Oriented / Domain Models (Java, C#) is instead the recommendation for managing abstract domain business logic.\n\nDynamic Multi-Paradigm (Python, JavaScript) is instead the recommendation for quick prototyping and automation.\n\nImperative / Systems Programming (C, C++, Rust) is instead the recommendation for raw hardware performance."
  },
  {
    id: "csc302_ch3_171",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "Which of the following pairings of a primary concern with a recommended paradigm is correct?",
    options: [
      "Solving intricate rules and constraints is paired with Logic Programming (Prolog)",
      "Quick prototyping and automation is paired with Object-Oriented / Domain Models (Java, C#)",
      "All of these",
      "None of these"
    ],
    correctAnswer: 0,
    explanation: "The Choosing the Right Paradigm table pairs solving intricate rules and constraints with Logic Programming (Prolog).\n\nThe table instead pairs quick prototyping and automation with Dynamic Multi-Paradigm languages like Python and JavaScript, not Object-Oriented / Domain Models, so that second pairing is contradicted."
  },
  {
    id: "csc302_ch3_172",
    course: "CSC 302",
    chapter: "Chapter 3",
    text: "What characterizes the best software engineers who embody 'The Multilingual Mind'?",
    options: [
      "They are not dogmatically tied to a single programming language or paradigm, and understand the strengths and trade-offs behind each design style",
      "They exclusively master one paradigm early in their career and never learn another",
      "They avoid learning esoteric or logic-based languages entirely as a waste of time",
      "They believe one paradigm is universally superior once they find the right one"
    ],
    correctAnswer: 0,
    explanation: "The Conclusion section states the best software engineers are not dogmatically tied to a single programming language or paradigm, and understand the strengths, trade-offs, and historical lessons behind each design style.\n\nExclusively mastering one paradigm forever contradicts this described open-mindedness.\n\nThe Conclusion explicitly credits exploring functional, logic, concurrent, and esoteric languages with expanding a developer's toolkit, not dismissing them as a waste of time.\n\nThis directly contradicts the earlier 'No Single Silver Bullet' point from Part I, which the Conclusion echoes rather than reverses."
  }
];

export default csc302Chapter3Questions;
