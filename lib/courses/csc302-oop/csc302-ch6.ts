import { QuestionV2 } from "@/lib/quiz-types";

const csc302Chapter6Questions: QuestionV2[] = [
  {
    id: "csc302_ch6_001",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "What characterized software construction during the monolithic programming era of early computing?",
    options: [
      "Data and the methods that acted on it were bundled together inside a single class",
      "Instructions were written as single, linear blocks of machine code or early assembly",
      "Programs were structured as networks of independent objects exchanging messages",
      "Behaviour was distributed across specialised objects instead of a single controller"
    ],
    correctAnswer: 1,
    explanation: "The Pre-OOP Era section describes early computing as relying on monolithic structural sequences, with instructions written as single, linear blocks of machine code or early assembly.\n\nBundling data and methods together describes the later OOP shift toward data and behaviour unification, not the monolithic era.\n\nNetworks of independent objects exchanging messages describes the object-oriented mental model introduced much later.\n\nDistributing behaviour across specialised objects is a property of the object-oriented paradigm defined afterward, not of monolithic programming."
  },
  {
    id: "csc302_ch6_002",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "In monolithic programs where every variable was accessible globally, what risk did this Global State property create?",
    options: [
      "Classes being unable to inherit attributes from a shared parent",
      "Method calls being resolved at compile time instead of at runtime",
      "Data being exposed to unintended modifications from anywhere in the program",
      "Interfaces containing implementation details alongside their contracts"
    ],
    correctAnswer: 2,
    explanation: "The Pre-OOP Era section describes Global State as every variable being accessible globally, which exposes data to unintended modifications.\n\nCompile time method resolution is the static binding concept covered in a later, unrelated section on method binding.\n\nInheritance of attributes across classes is a Pillar 3 concept that monolithic programming, predating classes, does not involve.\n\nInterfaces containing implementation details is a claim the Abstraction section actually denies, since classic interfaces contain no implementation."
  },
  {
    id: "csc302_ch6_003",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "Why did the Control Transfer property of monolithic programming make execution flow highly unpredictable?",
    options: [
      "It restricted variable access to the module in which the variable was declared",
      "It required every subroutine to be defined inside a single enclosing class",
      "It resolved every function call using a virtual method table at runtime",
      "It relied on direct jumps, such as GOTO statements, rather than structured constructs"
    ],
    correctAnswer: 3,
    explanation: "The Pre-OOP Era section attributes unpredictable control flow to Control Transfer, meaning reliance on direct jumps such as GOTO statements.\n\nEnclosing subroutines inside a single class is a feature of class-based organisation that had not yet emerged in this era.\n\nVirtual method tables are the run-time polymorphism mechanism described much later in the deck, unrelated to GOTO-based control flow.\n\nRestricting variable access to a module describes package-private access control, a modifier introduced under encapsulation, not the monolithic era."
  },
  {
    id: "csc302_ch6_004",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "Which figure pioneered Structured Programming, based on the structured program theorem, to manage the chaos of monolithic jumps?",
    options: [
      "Alan Kay",
      "Dijkstra",
      "Bjarne Stroustrup",
      "Robert C. Martin"
    ],
    correctAnswer: 1,
    explanation: "The Rise of Structured Programming section credits Dijkstra and others with pioneering Structured Programming based on the structured program theorem.\n\nAlan Kay is credited elsewhere with creating Smalltalk and emphasising message passing, not structured programming.\n\nBjarne Stroustrup is credited with creating C++ as an extension of C, a separate contribution described in Part V.\n\nRobert C. Martin, known as Uncle Bob, is credited with introducing the SOLID design principles, a separate contribution described in Part IV."
  },
  {
    id: "csc302_ch6_005",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "Which three control structures did structured programming introduce to replace arbitrary jumps?",
    options: [
      "Association, Aggregation, and Composition",
      "Encapsulation, Abstraction, and Inheritance",
      "Sequence, Selection, and Iteration",
      "Constructors, Destructors, and Static Variables"
    ],
    correctAnswer: 2,
    explanation: "The Rise of Structured Programming section states that Control Structures replaced arbitrary jumps with Sequence, Selection (if/else), and Iteration (loops).\n\nEncapsulation, Abstraction, and Inheritance are three of the four OOP pillars introduced much later, not structured-programming control constructs.\n\nAssociation, Aggregation, and Composition are the three object relationship types covered in Part III, unrelated to control flow.\n\nConstructors, Destructors, and Static Variables are object lifecycle and class-member concepts, also covered later and unrelated to control structures."
  },
  {
    id: "csc302_ch6_006",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "Structured programming's introduction of subroutines eliminated the need for functions to have any localised execution scope.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "The Rise of Structured Programming section describes subroutines as reusable blocks of code with localised execution scopes, so localised scope is the benefit subroutines introduced rather than something they eliminated. The stem's claim inverts this relationship, making it false."
  },
  {
    id: "csc302_ch6_007",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "What does Data-Function Separation mean in the context of procedural programming's limitations?",
    options: [
      "A subclass inherits attributes and behaviours from exactly one parent class",
      "Every object bundles its own state together with the methods that act on it",
      "Access to a class's fields is restricted through modifiers like private and protected",
      "Data structures and the functions that manipulate them are treated as separate entities"
    ],
    correctAnswer: 3,
    explanation: "The Limitations of Procedural Architectures section defines Data-Function Separation as data structures and the functions that manipulate them being treated as separate entities.\n\nBundling state together with methods describes the OOP unification shift, the opposite condition procedural programming lacked.\n\nRestricting field access through modifiers describes encapsulation's access control mechanism, a distinct later concept.\n\nA subclass inheriting from one parent class describes single inheritance, unrelated to the data-function separation limitation."
  },
  {
    id: "csc302_ch6_008",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "A team needs to modify a global data structure used throughout a large procedural codebase. Based on the Fragility limitation described for procedural architectures, what should they expect?",
    options: [
      "The compiler will reject the change unless an interface contract is updated first",
      "The change will be isolated automatically because each function owns a private copy of the state",
      "They will need to refactor every function that interacts with that data structure",
      "Only the subclasses that override the affected methods will require changes"
    ],
    correctAnswer: 2,
    explanation: "The Limitations of Procedural Architectures section states that Fragility means modifying a global data structure requires refactoring every function interacting with it.\n\nAutomatic isolation through private per-function copies contradicts the very global, shared nature of the data structure described in this limitation.\n\nCompiler-enforced interface contracts are an abstraction-era mechanism that procedural programming, as described here, does not have.\n\nSubclasses overriding methods is an inheritance and polymorphism concept that does not apply to procedural programs, which lack classes."
  },
  {
    id: "csc302_ch6_009",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "In the Spaghetti Code Phenomenon, what does High Coupling describe?",
    options: [
      "A single module performing several unrelated tasks",
      "Functions relying heavily on the internal states of distant routines",
      "A bug fix in one component introducing faults in unrelated parts",
      "A class being forced to implement methods it does not need"
    ],
    correctAnswer: 1,
    explanation: "The Spaghetti Code Phenomenon section defines High Coupling as functions relying heavily on the internal states of distant routines.\n\nA single module performing unrelated tasks is the section's definition of Low Cohesion, a distinct symptom.\n\nA bug fix introducing unrelated faults is the section's definition of Difficult Maintenance, a consequence rather than a cause.\n\nBeing forced to implement unneeded methods describes an Interface Segregation Principle violation from Part IV, not coupling."
  },
  {
    id: "csc302_ch6_010",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "A large procedural module handles unrelated tasks such as logging, validation, and report formatting all in one place, yet none of its internal functions reach into other modules' state. Which spaghetti-code symptom does this best illustrate on its own?",
    options: [
      "Environmental Bloat",
      "High Coupling",
      "The Diamond Problem",
      "Low Cohesion"
    ],
    correctAnswer: 3,
    explanation: "The Spaghetti Code Phenomenon section defines Low Cohesion as a single module performing unrelated tasks, which matches a module mixing logging, validation, and formatting.\n\nHigh Coupling is defined in the same section as functions depending on distant routines' internal states, which the scenario explicitly excludes.\n\nThe Diamond Problem is the multiple-inheritance ambiguity described in Part II, unrelated to a single module's task mix.\n\nEnvironmental Bloat is Joe Armstrong's critique of deep class hierarchies in Part VI, unrelated to procedural module design."
  },
  {
    id: "csc302_ch6_011",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "Which of the following is a documented effect of the Software Crisis of the 1960s-1980s?",
    options: [
      "Software projects consistently going over budget and missing schedules",
      "Deployed systems being prone to crashes and failing to meet user requirements",
      "All of these",
      "None of these"
    ],
    correctAnswer: 2,
    explanation: "The Software Crisis section lists Cost Overruns, meaning software projects consistently went over budget and missed schedules, as one documented effect of the crisis.\n\nThe same section lists Unreliability, meaning deployed systems were prone to crashes and failed to meet user requirements, as another documented effect, so both options are supported and All of these is correct."
  },
  {
    id: "csc302_ch6_012",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "What defines an object as an Autonomous Unit under the object-oriented mental model?",
    options: [
      "It shares a single copy of its variables with every other instance of its class",
      "It exists strictly as source code with no runtime data of its own",
      "It contains both its own state and its own behaviour",
      "It resolves every method call to the address it holds at compile time"
    ],
    correctAnswer: 2,
    explanation: "The Conceptualising the Object section describes Autonomous Units as objects that contain both their state, meaning data, and their behaviour, meaning actions.\n\nExisting strictly as source code with no runtime data describes a class, which the Classes vs Objects section contrasts directly with an object.\n\nSharing a single copy of variables across instances describes a static variable, a distinct class-member concept from Part III.\n\nResolving a method call at compile time describes static binding, an unrelated concept covered under method binding."
  },
  {
    id: "csc302_ch6_013",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "When a real-world Physical Asset is modelled in OOP as an Object Instance, what system role does it play?",
    options: [
      "Specifies template and constraints",
      "Holds state and executes actions",
      "Triggers behaviour via methods",
      "Restricts visibility to the declaring class only"
    ],
    correctAnswer: 1,
    explanation: "The Table Mapping Real-World Concepts to OOP Constructs assigns the Physical Asset row, represented as an Object Instance, the system role of holding state and executing actions.\n\nSpecifying a template and constraints is the role assigned in the same table to the Blueprint/Type row, represented as a Class Definition.\n\nTriggering behaviour via methods is the role assigned to the Communication row, represented as Message Passing.\n\nRestricting visibility to the declaring class describes the private access modifier, a separate concept from the mapping table."
  },
  {
    id: "csc302_ch6_014",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "In the real-world mapping table, which OOP construct corresponds to a Blueprint/Type and specifies a template and constraints?",
    options: [
      "Message Passing",
      "Object Instance",
      "Class Definition",
      "Abstract Class"
    ],
    correctAnswer: 2,
    explanation: "The Table Mapping Real-World Concepts to OOP Constructs maps Blueprint/Type to Class Definition, with the system role of specifying a template and constraints.\n\nObject Instance is the construct mapped to Physical Asset in the same table, with the role of holding state and executing actions.\n\nMessage Passing is the construct mapped to Communication, with the role of triggering behaviour via methods.\n\nAbstract Class does not appear as a row in this mapping table at all; it is discussed separately under the Abstraction pillar."
  },
  {
    id: "csc302_ch6_015",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "What does Decentralisation mean in the definition of the object-oriented paradigm?",
    options: [
      "Client code must not be forced to depend on interfaces it does not use",
      "Every instance shares one copy of its class's variables through global memory",
      "A subtype must be substitutable for its base type without breaking expected behaviour",
      "Logic is distributed across specialised objects instead of being concentrated in a single controller"
    ],
    correctAnswer: 3,
    explanation: "The Defining the Object-Oriented Paradigm section describes Decentralisation as logic being distributed across specialised objects instead of concentrated in a single controller.\n\nSharing one copy of class variables through global memory describes a static variable, a distinct class-member concept.\n\nSubtype substitutability without breaking expected behaviour is the Liskov Substitution Principle from Part IV, unrelated to this definition.\n\nNot forcing clients to depend on unused interfaces is the Interface Segregation Principle, also from Part IV."
  },
  {
    id: "csc302_ch6_016",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "A developer contrasts two designs: in one, a data structure is passive and external functions must manipulate it directly; in the other, data and its operations are encapsulated together with access controlled by the object itself. Which conceptual shift does this contrast represent?",
    options: [
      "The Multiple Inheritance Dilemma moving from single to hierarchical class structures",
      "The Key Shift of Data and Behaviour Unification from Procedural Separation to OOP Unification",
      "The transition from compile-time polymorphism to run-time polymorphism",
      "The move from Aggregation relationships to Composition relationships"
    ],
    correctAnswer: 1,
    explanation: "The Key Shift section names exactly this contrast: Procedural Separation, where data is passive and external functions manipulate it directly, versus OOP Unification, where data and behaviour are encapsulated together with controlled access.\n\nThe Multiple Inheritance Dilemma concerns method collisions from shared ancestors, not the passive-data-versus-unified-object contrast.\n\nCompile-time versus run-time polymorphism concerns when a method call is resolved, not how data and behaviour are packaged.\n\nAggregation versus Composition concerns the strength of a has-a relationship's lifecycle dependency, not data-behaviour unification."
  },
  {
    id: "csc302_ch6_017",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "In the direct comparison of paradigms table, how is Data Access handled under the Object-Oriented Paradigm compared with the Procedural Paradigm?",
    options: [
      "Both paradigms restrict data access through interfaces",
      "OOP allows open access or global pointer passing, while procedural restricts access via access modifiers",
      "OOP restricts data access via access modifiers, while procedural allows open access or global pointer passing",
      "Neither paradigm places any restriction on how data can be accessed"
    ],
    correctAnswer: 2,
    explanation: "The Table A Direct Comparison of Paradigms lists Data Access as restricted via access modifiers under the Object-Oriented Paradigm, versus open access or global pointer passing under the Procedural Paradigm.\n\nReversing the two paradigms' rows swaps which one restricts access and which one leaves it open, contradicting the table.\n\nRestricting access exclusively through interfaces for both paradigms is not what the table states for either column.\n\nClaiming neither paradigm restricts data access ignores the table's explicit Data Access row entirely."
  }
  ,
  {
    id: "csc302_ch6_018",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "What is the primary objective of Encapsulation among the four core pillars of OOP?",
    options: [
      "Supporting dynamic behaviours and unifying disparate types",
      "Concealing complex logic and simplifying user interfaces",
      "Modelling hierarchical relationships and facilitating reuse",
      "Securing internal state and controlling interface access"
    ],
    correctAnswer: 3,
    explanation: "The Four Core Pillars overview lists Encapsulation's objective as securing internal state and controlling interface access.\n\nConcealing complex logic and simplifying interfaces is the objective listed there for Abstraction, a separate pillar.\n\nModelling hierarchical relationships and facilitating reuse is listed for Inheritance, a separate pillar.\n\nSupporting dynamic behaviours and unifying disparate types is listed for Polymorphism, a separate pillar."
  },
  {
    id: "csc302_ch6_019",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "Which pillar is described as unifying disparate types and supporting dynamic behaviours?",
    options: [
      "Abstraction",
      "Encapsulation",
      "Polymorphism",
      "Inheritance"
    ],
    correctAnswer: 2,
    explanation: "The Four Core Pillars overview assigns Polymorphism the roles of supporting dynamic behaviours and unifying disparate types.\n\nEncapsulation is assigned the roles of securing internal state and controlling interface access instead.\n\nAbstraction is assigned the roles of concealing complex logic and simplifying user interfaces.\n\nInheritance is assigned the roles of modelling hierarchical relationships and facilitating reuse."
  },
  {
    id: "csc302_ch6_020",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "What does the Self-Containment aspect of encapsulation describe?",
    options: [
      "A subclass provides its own implementation of a method already defined in its parent",
      "Objects function as independent entities with their internal structures hidden from the outside world",
      "A single interface manages a variety of underlying actions across different classes",
      "Common properties and behaviours are defined once and inherited by derived classes"
    ],
    correctAnswer: 1,
    explanation: "The Encapsulation Concept section defines Self-Containment as objects functioning as independent entities with their internal structures hidden from the outside world.\n\nA subclass providing its own implementation of an inherited method describes method overriding under run-time polymorphism, a separate pillar.\n\nA single interface managing varied underlying actions describes polymorphism's Unified Interface property.\n\nDefining properties once and inheriting them describes Code Reuse under the Inheritance pillar."
  },
  {
    id: "csc302_ch6_021",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "Encapsulation's Public Interface property means that external interactions occur exclusively through a well-defined public interface.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "The Encapsulation Concept section states this exact claim: external interactions occur exclusively through a well-defined public interface, so the statement is true as written."
  },
  {
    id: "csc302_ch6_022",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "Which access modifier limits visibility to the defining class and its subclasses?",
    options: [
      "Internal / Package-Private",
      "Private",
      "Public",
      "Protected"
    ],
    correctAnswer: 3,
    explanation: "The Access Modifiers section defines protected as limiting access to the defining class and its subclasses.\n\nPrivate is defined there as restricting access to the defining class itself, with no exception for subclasses.\n\nPublic is defined as opening access to any code within the application, broader than protected.\n\nInternal or Package-Private is defined as restricting access to within the current compilation unit or module, a different scope than subclasses."
  },
  {
    id: "csc302_ch6_023",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "Which access modifier is described as the default choice for instance variables and restricts access to only the defining class itself?",
    options: [
      "Public",
      "Protected",
      "Private",
      "Internal / Package-Private"
    ],
    correctAnswer: 2,
    explanation: "The Access Modifiers section describes private as restricting access to the defining class itself and calls it the default choice for instance variables.\n\nProtected extends that visibility to subclasses as well, so it is broader than the default private choice described.\n\nPublic opens access to any code within the application, far broader than the described default.\n\nInternal or Package-Private scopes visibility to the current compilation unit or module, a different boundary than the declaring class alone."
  },
  {
    id: "csc302_ch6_024",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "A developer wants a class member accessible to any code anywhere in the application, with no restriction at all. Which access modifier fits this requirement?",
    options: [
      "Private",
      "Public",
      "Protected",
      "Internal / Package-Private"
    ],
    correctAnswer: 1,
    explanation: "The Access Modifiers section defines public as opening access to any code within the application, matching this requirement exactly.\n\nPrivate restricts access to only the defining class itself, far narrower than what is needed.\n\nProtected limits access to the defining class and its subclasses, still narrower than application-wide access.\n\nInternal or Package-Private restricts access to the current compilation unit or module, also narrower than application-wide access."
  },
  {
    id: "csc302_ch6_025",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "How does exposing only accessor methods (getters) on a class relate to the benefits of encapsulation?",
    options: [
      "It removes the class's need to define a constructor",
      "It bypasses the section's stated Validation benefit for incoming data",
      "It allows the creation of read-only properties",
      "It forces a subclass to override the accessor before use"
    ],
    correctAnswer: 2,
    explanation: "The Encapsulation Benefits section states that exposing only accessor methods, or getters, allows creating read-only properties.\n\nRemoving the class's need for a constructor is not a claim made anywhere in the Encapsulation Benefits section, which does not link getters to constructor requirements.\n\nBypassing the Validation benefit contradicts the same section, where mutator methods validate inputs before updating state, a separate benefit from exposing getters.\n\nForcing a subclass to override an accessor before use is not a stated consequence of exposing getters in this section."
  },
  {
    id: "csc302_ch6_026",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "Which benefit of encapsulation allows internal storage formats to change without affecting external code that relies on the class?",
    options: [
      "Self-Containment",
      "Validation",
      "Read-Only State",
      "Flexibility"
    ],
    correctAnswer: 3,
    explanation: "The Encapsulation Benefits section defines Flexibility as the ability to change internal storage formats without affecting external code relying on the class.\n\nValidation is defined in that section as mutator methods checking inputs before updating state, a different benefit.\n\nRead-Only State is defined as exposing only getters to create read-only properties, also distinct from changing storage formats.\n\nSelf-Containment is an Encapsulation Concept property about hidden internal structure, not a benefit tied to storage format changes."
  },
  {
    id: "csc302_ch6_027",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "What everyday analogy illustrates abstraction?",
    options: [
      "Placing a phone call requires understanding how the network routes the signal",
      "Operating a motor vehicle requires understanding the interface rather than internal combustion mechanics",
      "Assembling furniture requires reading every manufacturing specification first",
      "Withdrawing money from an account requires understanding the bank's database schema"
    ],
    correctAnswer: 1,
    explanation: "The Abstraction Concept section uses operating a motor vehicle as its everyday analogy, noting that this requires understanding the interface, pedals and steering wheel, rather than internal combustion mechanics.\n\nPlacing a phone call and its network routing is not an analogy used anywhere in the source.\n\nAssembling furniture from full manufacturing specifications is not mentioned in the source and is the opposite of hiding detail.\n\nUnderstanding a bank's database schema to withdraw money is not the analogy given and again is the opposite of abstraction's intent."
  },
  {
    id: "csc302_ch6_028",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "What does the Conceptual Separation aspect of abstraction emphasise?",
    options: [
      "Requiring subclasses to share identical method signatures",
      "Restricting mutator methods so that state stays fixed after creation",
      "Focusing on what an object does rather than how it does it",
      "Routing all interactions through message passing"
    ],
    correctAnswer: 2,
    explanation: "The Abstraction Concept section defines Conceptual Separation as focusing on what an object does rather than how it does it.\n\nRestricting mutators so state stays fixed describes an immutable design choice, not the conceptual separation idea described here.\n\nRequiring identical method signatures across subclasses is not a claim in the Abstraction Concept section.\n\nRouting interaction through message passing is Alan Kay's messaging vision from Part III, a distinct concept."
  },
  {
    id: "csc302_ch6_029",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "How do interfaces differ from abstract classes with respect to state?",
    options: [
      "Neither interfaces nor abstract classes are permitted to define any methods at all",
      "Interfaces can store instance state variables, while abstract classes contain no state in classic models",
      "Both interfaces and abstract classes are required to store identical instance state variables",
      "Interfaces contain no state in classic models, while abstract classes can store instance state variables"
    ],
    correctAnswer: 3,
    explanation: "The Interfaces vs Abstract Classes section states that interfaces contain no state or implementation details in classic models, while abstract classes can store instance state variables.\n\nReversing which construct stores state contradicts the section's description of each.\n\nRequiring identical instance state in both contradicts the section, which draws a contrast rather than an equivalence between them.\n\nBoth constructs are shown defining methods elsewhere in the section, so neither is described as forbidding methods entirely."
  },
  {
    id: "csc302_ch6_030",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "Which property of abstract classes lets them act as base classes within a strict inheritance hierarchy?",
    options: [
      "They define a pure behavioural contract containing no implementation details",
      "They allow multiple implementations across unrelated classes with no shared ancestor",
      "They can provide partial implementation and store instance state variables",
      "They restrict access to the defining class and its subclasses only"
    ],
    correctAnswer: 2,
    explanation: "The Interfaces vs Abstract Classes section credits abstract classes with providing partial implementation and storing instance state variables, which supports their role as base classes in a strict hierarchy.\n\nAllowing multiple implementations across unrelated classes with no shared ancestor is the property listed for interfaces instead.\n\nDefining a pure behavioural contract with no implementation is also the interface's described property, not the abstract class's.\n\nRestricting access to the defining class and its subclasses describes the protected access modifier, an unrelated concept."
  },
  {
    id: "csc302_ch6_031",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "Which benefit of abstraction allows different teams to implement separate parts of a system at the same time, as long as they agree on interface definitions?",
    options: [
      "Simplified Testing",
      "Parallel Development",
      "Decoupled Design",
      "Structural Independence"
    ],
    correctAnswer: 1,
    explanation: "The Abstraction: Reducing Cognitive Load section defines Parallel Development as teams implementing different parts of a system concurrently as long as they agree on interface definitions.\n\nSimplified Testing is described in the same section as clear interfaces making it easier to write mock objects and unit tests, a related but distinct benefit.\n\nDecoupled Design is described there as components relying on abstract contracts rather than specific concrete implementations.\n\nStructural Independence is a property of the Association object relationship from Part III, unrelated to abstraction's cognitive-load benefits."
  },
  {
    id: "csc302_ch6_032",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "How does abstraction's Decoupled Design benefit reduce cognitive load when managing a large system?",
    options: [
      "State is shared globally across every component in the system",
      "Every component is compiled into a single monolithic block for simplicity",
      "Method calls are resolved using a virtual method table at runtime",
      "Components rely on abstract contracts rather than specific concrete implementations"
    ],
    correctAnswer: 3,
    explanation: "The Abstraction: Reducing Cognitive Load section defines Decoupled Design as components relying on abstract contracts rather than specific concrete implementations.\n\nCompiling everything into a single monolithic block describes the pre-OOP monolithic era, the opposite of dividing a system into manageable layers.\n\nResolving calls through a virtual method table is the run-time polymorphism mechanism, unrelated to abstraction's layering benefit.\n\nSharing state globally across components describes the Global State risk from the monolithic era, not a benefit of abstraction."
  },
  {
    id: "csc302_ch6_033",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "What relationship does Inheritance's Generalisation to Specialisation property describe?",
    options: [
      "A subtype must remain substitutable for its base type without changing expected semantics",
      "Client interfaces are broken down into smaller, more specific ones",
      "Subclasses extend and specialise the properties defined in superclasses",
      "Objects are notified automatically of state changes in other components"
    ],
    correctAnswer: 2,
    explanation: "The Inheritance Concept section defines Generalisation to Specialisation as subclasses extending and specialising the properties defined in superclasses.\n\nBreaking client interfaces into smaller, specific ones is the Interface Segregation Principle from Part IV, a distinct concept.\n\nRequiring substitutability without changing expected semantics is the Liskov Substitution Principle, also from Part IV.\n\nAutomatic notification of state changes describes the Observer design pattern from Part V, unrelated to generalisation."
  },
  {
    id: "csc302_ch6_034",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "A SavingsAccount that inherits from Account is given as an example of which inheritance property?",
    options: [
      "The Diamond Problem",
      "The \"Is-A\" Relationship",
      "Multi-level Inheritance",
      "Static Binding"
    ],
    correctAnswer: 1,
    explanation: "The Inheritance Concept section illustrates the Is-A Relationship with a SavingsAccount that is a specialised version of Account.\n\nThe Diamond Problem concerns method collisions from two parents sharing a common ancestor, unrelated to this single-parent example.\n\nMulti-level Inheritance describes a chain such as Grandchild to Child to Parent, not a single subclass-superclass pair like this one.\n\nStatic Binding concerns compile-time method resolution, unrelated to the Is-A relationship illustrated by this example."
  },
  {
    id: "csc302_ch6_035",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "In the Inheritance Taxonomy section, what does a Superclass typically define?",
    options: [
      "A single global instance shared across the entire application",
      "Specialised properties that override the parent's methods",
      "Shared attributes, such as id and name, and common behaviours such as validate()",
      "A pure behavioural contract with no shared implementation"
    ],
    correctAnswer: 2,
    explanation: "The Inheritance Taxonomy and Hierarchies section states that a Superclass defines shared attributes such as id and name and implements common behaviours such as validate().\n\nIntroducing specialised properties and overriding parent methods is the role described for the Subclass in the same section, not the Superclass.\n\nA single global instance shared across the application describes the Singleton design pattern from Part V, unrelated to superclasses.\n\nA pure behavioural contract with no shared implementation describes an interface, a distinct construct from a superclass."
  },
  {
    id: "csc302_ch6_036",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "A class inherits from exactly one parent class, as in the Java and C# examples given. Which type of inheritance is this?",
    options: [
      "Aggregation",
      "Multi-level Inheritance",
      "Hierarchical Inheritance",
      "Single Inheritance"
    ],
    correctAnswer: 3,
    explanation: "The Types of Inheritance section defines Single Inheritance as a class inheriting from exactly one parent class, citing Java and C# as examples.\n\nMulti-level Inheritance instead describes a subclass inheriting from another subclass, forming a chain, which is not what a single direct parent describes.\n\nHierarchical Inheritance describes multiple subclasses inheriting from one shared parent, a different structural pattern.\n\nAggregation is an object relationship type from Part III describing a weak has-a link, unrelated to class inheritance structure."
  },
  {
    id: "csc302_ch6_037",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "A Grandchild class inherits from Child, which itself inherits from Parent, forming a chain of three classes. Which type of inheritance does this illustrate?",
    options: [
      "Single Inheritance",
      "Multi-level Inheritance",
      "Hierarchical Inheritance",
      "Composition"
    ],
    correctAnswer: 1,
    explanation: "The Types of Inheritance section describes Multi-level Inheritance exactly this way: a subclass inherits from another subclass, forming a chain such as Grandchild to Child to Parent.\n\nSingle Inheritance describes one class inheriting from exactly one direct parent, which does not capture a three-class chain on its own.\n\nHierarchical Inheritance describes multiple subclasses sharing a single parent, not a linear chain of three classes.\n\nComposition is an object relationship type describing a strong has-a link between objects, unrelated to class inheritance chains."
  },
  {
    id: "csc302_ch6_038",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "When multiple subclasses inherit from a single shared parent class, which type of inheritance is being described?",
    options: [
      "Single Inheritance",
      "Multi-level Inheritance",
      "Hierarchical Inheritance",
      "The Diamond Problem"
    ],
    correctAnswer: 2,
    explanation: "The Types of Inheritance section defines Hierarchical Inheritance as multiple subclasses inheriting from a single parent class.\n\nMulti-level Inheritance instead describes a chain where a subclass inherits from another subclass, not several subclasses sharing one parent.\n\nSingle Inheritance describes one class with exactly one direct parent, a narrower relationship than several subclasses sharing a parent.\n\nThe Diamond Problem describes ambiguity from a class inheriting from two parents sharing a common ancestor, a different scenario entirely."
  },
  {
    id: "csc302_ch6_039",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "In the Diamond Problem, class D inherits from both B and C, which share a common ancestor A. If both B and C override a method from A, what Collision results?",
    options: [
      "Classes B and C are merged into a single class at compile time",
      "Class D is prevented from compiling any method calls to A at all",
      "Class A automatically loses its own implementation of the shared method",
      "It becomes unclear which version of the overridden method D should inherit"
    ],
    correctAnswer: 3,
    explanation: "The Multiple Inheritance Dilemma section states that if both B and C override a method from A, it is unclear which version class D should inherit, which is the Collision described.\n\nPreventing D from compiling any calls to A is a stronger consequence than the ambiguity the section actually describes.\n\nClass A losing its own implementation is not stated anywhere in the section; A's method still exists independently of the override ambiguity.\n\nMerging B and C into a single class is not a described consequence of the diamond problem in this section."
  },
  {
    id: "csc302_ch6_040",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "Most modern languages support multiple inheritance of classes as a workaround to the diamond problem, while restricting interfaces to single inheritance.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "The Multiple Inheritance Dilemma section states the opposite workaround: most modern languages use single inheritance for classes and instead support multiple inheritance of interfaces to avoid the diamond problem's ambiguity, so the statement's swapped roles make it false."
  },
  {
    id: "csc302_ch6_041",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "What does the Unified Interface property of polymorphism allow?",
    options: [
      "An object's internal structure to remain hidden from the outside world",
      "A class to inherit attributes and behaviours from exactly one parent",
      "A single interface to manage various underlying actions",
      "A method call to be resolved at compile time using its parameter list"
    ],
    correctAnswer: 2,
    explanation: "The Polymorphism Concept section defines Unified Interface as allowing a single interface to manage various underlying actions.\n\nInheriting attributes and behaviours from exactly one parent describes single inheritance, a Pillar 3 concept rather than polymorphism.\n\nKeeping internal structure hidden from the outside world is encapsulation's Self-Containment property, a separate pillar.\n\nResolving a method call at compile time by parameter list describes method overloading, a specific form of compile-time polymorphism, not the Unified Interface property itself."
  },
  {
    id: "csc302_ch6_042",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "Why does polymorphism's Extensibility property allow new subclasses to be added without changing existing polymorphic operations?",
    options: [
      "A new subclass must first be registered inside the base class's source file",
      "Code written against a common ancestor already handles any subclass sharing that ancestor",
      "Extensibility works by converting existing subclasses into a single merged class",
      "Extensibility depends on removing access modifiers from the base class"
    ],
    correctAnswer: 1,
    explanation: "The Polymorphism Concept section frames Extensibility around Flexibility, which enables writing code that manipulates different types of objects as long as they share a common ancestor, so existing polymorphic code already accommodates new subclasses of that ancestor.\n\nRequiring a new subclass to be registered inside the base class's file is not a mechanism described anywhere in this section.\n\nConverting existing subclasses into a single merged class is not mentioned and would defeat the purpose of extending the hierarchy.\n\nRemoving access modifiers from the base class is not described as a requirement for extensibility in this section."
  },
  {
    id: "csc302_ch6_043",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "Which form of polymorphism resolves method calls during compilation using method signatures?",
    options: [
      "Dynamic Binding",
      "Run-time Polymorphism",
      "Late Binding",
      "Compile-time Polymorphism"
    ],
    correctAnswer: 3,
    explanation: "The Compile-time Polymorphism section states that this form resolves method calls during compilation using method signatures.\n\nRun-time Polymorphism instead resolves method calls during program execution using the actual object type, the opposite timing.\n\nLate Binding is the alternate name given for run-time resolution, again the opposite of compile-time resolution.\n\nDynamic Binding is likewise the run-time resolution mechanism, contrasted directly with compile-time resolution in the source."
  },
  {
    id: "csc302_ch6_044",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "Declaring multiple methods with the same name but different parameter lists within the same class is an example of which concept?",
    options: [
      "Operator Overloading",
      "Method Overriding",
      "Method Overloading",
      "Virtual Method Tables"
    ],
    correctAnswer: 2,
    explanation: "The Compile-time Polymorphism section defines Method Overloading as declaring multiple methods with the same name but different parameter lists within the same class.\n\nMethod Overriding instead describes a subclass supplying its own implementation of a method already defined in its parent, a run-time concept.\n\nOperator Overloading describes redefining operators such as + and * for custom types, a related but distinct compile-time mechanism.\n\nVirtual Method Tables are the run-time lookup structure used to dispatch overridden methods, unrelated to same-class method name reuse."
  },
  {
    id: "csc302_ch6_045",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "Operator overloading, such as redefining + and * for custom object types, is supported in C++ but not in Java.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "The Compile-time Polymorphism section states directly that operator overloading is supported in C++ but not in Java, so the claim matches the source and is true."
  },
  {
    id: "csc302_ch6_046",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "A subclass supplies its own implementation of a method already defined in its parent class, and the runtime chooses which version to run based on the object's actual type. Which mechanism is at work here?",
    options: [
      "Method Overloading under compile-time polymorphism",
      "Method Overriding under run-time polymorphism",
      "Operator Overloading for custom object types",
      "Static Binding resolved before execution begins"
    ],
    correctAnswer: 1,
    explanation: "The Run-time Polymorphism section defines Method Overriding as a subclass providing its own implementation of a method already defined in its parent, with the runtime deciding which version to invoke based on the actual object type.\n\nMethod Overloading instead involves several methods sharing a name but differing in parameter list within one class, resolved before runtime.\n\nOperator Overloading concerns redefining operators like + and *, an unrelated compile-time mechanism.\n\nStatic Binding resolves the target method before execution, the opposite of the runtime dispatch this scenario describes."
  },
  {
    id: "csc302_ch6_047",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "What role does a Virtual Method Table (vtable) play in run-time polymorphism?",
    options: [
      "It restricts a class's fields to being visible only within the declaring class",
      "It stores the compile-time parameter list used to resolve overloaded methods",
      "The runtime uses it as an internal lookup table to map method calls to the correct subclass implementation",
      "It defines the pure behavioural contract that concrete classes must implement"
    ],
    correctAnswer: 2,
    explanation: "The Run-time Polymorphism section describes the vtable as an internal lookup table the runtime environment uses to map method calls to the correct subclass implementation.\n\nStoring a compile-time parameter list for overload resolution is a compile-time polymorphism function, unrelated to the vtable's runtime role.\n\nRestricting field visibility to the declaring class describes the private access modifier, an unrelated concept.\n\nDefining a pure behavioural contract describes an interface, a separate construct from the runtime vtable mechanism."
  },
  {
    id: "csc302_ch6_048",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "Static Binding postpones a method-binding decision to execution time, enabling more dynamic system configurations.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "The Method Binding section attributes postponing the binding decision to execution time, which enables more dynamic system configurations, to Dynamic Binding (Late Binding), not Static Binding. Static Binding instead resolves method calls at compile time, so the statement is false."
  },
  {
    id: "csc302_ch6_049",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "Among the four core pillars of OOP, which key mechanism is paired with Inheritance?",
    options: [
      "Method overriding and late binding",
      "Access modifiers (private, etc.)",
      "Interfaces and abstract classes",
      "Class extension (extends)"
    ],
    correctAnswer: 3,
    explanation: "The Table Structural Roles of the Core Pillars pairs Inheritance's objective of modelling hierarchies and reusing code with the key mechanism of class extension (extends).\n\nAccess modifiers such as private are the key mechanism paired with Encapsulation in the same table.\n\nInterfaces and abstract classes are the key mechanism paired with Abstraction.\n\nMethod overriding and late binding are the key mechanism paired with Polymorphism."
  },
  {
    id: "csc302_ch6_050",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "Which pillar does the structural roles table pair with the key mechanism of access modifiers such as private?",
    options: [
      "Abstraction, whose objective is to reduce cognitive load",
      "Encapsulation, whose objective is to protect state integrity",
      "Inheritance, whose objective is to model hierarchies and reuse code",
      "Polymorphism, whose objective is dynamic behaviour resolution"
    ],
    correctAnswer: 1,
    explanation: "The Table Structural Roles of the Core Pillars pairs Encapsulation, whose listed objective is to protect state integrity, with the key mechanism of access modifiers such as private.\n\nAbstraction is paired instead with interfaces and abstract classes as its key mechanism, not access modifiers.\n\nInheritance is paired with class extension (extends) as its key mechanism.\n\nPolymorphism is paired with method overriding and late binding as its key mechanism."
  }
  ,
  {
    id: "csc302_ch6_051",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "What distinguishes a class from an object in terms of runtime data?",
    options: [
      "A class allocates physical memory to store active values, while an object exists strictly as source code with no runtime data",
      "A class defines attributes and methods but contains no actual runtime data, while an object allocates physical memory to store active values",
      "Both a class and an object allocate identical amounts of physical memory at compile time",
      "Neither a class nor an object holds any data; both exist only as compiled bytecode"
    ],
    correctAnswer: 1,
    explanation: "The Classes vs Objects section states that a class exists strictly as source code and compiled bytecode, defining attributes and methods but containing no actual runtime data, while an object allocates physical system memory to store active runtime values.\n\nReversing the two roles contradicts the section, which assigns memory allocation to the object, not the class.\n\nBoth allocating identical memory at compile time ignores the section's point that the class itself holds no runtime data to allocate.\n\nClaiming neither holds any data ignores the object's explicit role of storing active runtime values."
  },
  {
    id: "csc302_ch6_052",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "A single class definition is used to create Object A and Object B, each occupying its own region of memory. What does this scenario illustrate about a class?",
    options: [
      "A class shares one single memory address with the objects instantiated from it",
      "A class is destroyed once its first object instance is instantiated",
      "A class acts as a blueprint from which multiple independent object instances can be created",
      "A class produces a single object instance for the remainder of a program's run"
    ],
    correctAnswer: 2,
    explanation: "The Classes vs Objects section describes a class as an abstract blueprint from which concrete object instances, such as Object A and Object B, are instantiated, each with its own memory.\n\nA class being destroyed after its first instantiation contradicts the blueprint model, where the class definition persists to create further instances.\n\nSharing one memory address across all objects contradicts the section's description of each object allocating its own physical memory.\n\nLimiting a class to producing a single object for the rest of a run contradicts the diagram showing multiple objects, A and B, instantiated from the same class."
  },
  {
    id: "csc302_ch6_053",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "Two objects hold the exact same state values at a given moment. Which property still distinguishes them from each other in memory?",
    options: [
      "Encapsulation",
      "Behaviour",
      "State",
      "Identity"
    ],
    correctAnswer: 3,
    explanation: "The Object State, Behaviour, and Identity section defines Identity as a unique identifier that distinguishes an object from all other objects in memory, even if they share the exact same state values.\n\nBehaviour refers to the actions and method calls an object can perform, which does not by itself distinguish two objects with matching state.\n\nState refers to the current values of an object's instance variables, which the scenario states are identical between the two objects.\n\nEncapsulation is a separate pillar about bundling data and methods with restricted access, not one of the three properties listed for object identity."
  },
  {
    id: "csc302_ch6_054",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "Which of the three fundamental properties of an active object refers specifically to the current values of its instance variables at a given moment?",
    options: [
      "Behaviour",
      "Identity",
      "State",
      "Association"
    ],
    correctAnswer: 2,
    explanation: "The Object State, Behaviour, and Identity section defines State as the current values of the object's instance variables at any given moment.\n\nIdentity is defined there as the unique identifier distinguishing an object from all others, a separate property from its data values.\n\nBehaviour is defined as the actions and method calls the object can perform, describing what it does rather than what values it holds.\n\nAssociation is an object relationship type from a different section, describing a link between two independent classes rather than a property of one object."
  },
  {
    id: "csc302_ch6_055",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "What is the purpose of a constructor?",
    options: [
      "It is a routine called when an object is destroyed to release allocated system resources",
      "It is a special method called automatically during object instantiation to allocate memory and initialise starting state values",
      "It is a lookup table the runtime uses to map method calls to the correct subclass implementation",
      "It is a mutator method used to validate inputs after an object has already been created"
    ],
    correctAnswer: 1,
    explanation: "The Constructors and Destructors section defines a constructor as a special method called automatically during object instantiation to allocate memory and initialise starting state values.\n\nA routine called when an object is destroyed to release resources describes a destructor or finaliser, the opposite lifecycle event.\n\nA lookup table mapping method calls to subclass implementations describes a virtual method table, an unrelated run-time polymorphism mechanism.\n\nA mutator method used only after creation describes a setter under encapsulation's validation benefit, a distinct concept from object initialisation."
  },
  {
    id: "csc302_ch6_056",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "Destructors, or finalisers, are described as routines called when an object is destroyed to release allocated resources, close open files, or clean up database connections.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "The Constructors and Destructors section states this exact description of destructors and finalisers, so the claim matches the source and is true."
  },
  {
    id: "csc302_ch6_057",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "Which memory region stores local variables and active function execution context records using a fast, automatic Last-In-First-Out model?",
    options: [
      "Static Memory",
      "The Heap",
      "The Virtual Method Table",
      "The Stack"
    ],
    correctAnswer: 3,
    explanation: "The Memory Allocation section describes the Stack as storing local variables and active function execution context records, operating on a fast, automatic Last-In-First-Out (LIFO) model.\n\nThe Heap is described in the same section as a larger, dynamically managed pool for object instances, with a different lifecycle model than the stack's LIFO discipline.\n\nThe Virtual Method Table is a run-time polymorphism lookup structure, unrelated to storing local variables or execution frames.\n\nStatic Memory is where static variables reside according to the Class Members section, a different storage region from the stack."
  },
  {
    id: "csc302_ch6_058",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "Why can an object allocated on the heap continue to exist after the function that created it has returned?",
    options: [
      "Heap objects are converted into local variables once the creating function exits",
      "The stack automatically copies every heap object into permanent static storage",
      "The heap is a dynamically managed pool where objects persist beyond the scope of the function that created them",
      "The garbage collector deletes the function's stack frame before the object is created"
    ],
    correctAnswer: 2,
    explanation: "The Memory Allocation section states that the Heap is a larger, dynamically managed pool used to store object instances, which persist beyond the scope of the function that created them.\n\nAutomatically copying heap objects into permanent static storage is not a mechanism described anywhere in this section.\n\nConverting heap objects into local variables after the function exits contradicts the section's description of local variables belonging to the stack, not the heap.\n\nDeleting the function's stack frame before the object is even created reverses the actual sequence of events described in the section."
  },
  {
    id: "csc302_ch6_059",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "What do variables on the stack typically hold when referring to an object stored on the heap?",
    options: [
      "A static variable shared across every instance of the object's class",
      "A complete duplicate copy of the object's entire state",
      "A virtual method table describing every method the object's class defines",
      "Pointers referencing the physical location of the object on the heap"
    ],
    correctAnswer: 3,
    explanation: "The Memory Allocation section states that references on the stack typically hold pointers referencing the physical location of objects stored on the heap.\n\nHolding a complete duplicate of the object's state describes copying by value, not the reference behaviour this section describes for heap objects.\n\nHolding a virtual method table describes a separate run-time polymorphism structure, not what a stack reference stores.\n\nHolding a static variable shared across instances describes a distinct class-member concept, unrelated to how stack references point to heap objects."
  },
  {
    id: "csc302_ch6_060",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "In the Doctor-Treats-Patient example of Association, what does Structural Independence mean?",
    options: [
      "The Patient object is destroyed whenever the Doctor object is destroyed",
      "Both objects can exist independently of each other",
      "The Doctor object exclusively owns and manages the Patient's lifecycle",
      "Neither object can be instantiated without first instantiating the other"
    ],
    correctAnswer: 1,
    explanation: "The Object Relationships: Association section defines Structural Independence as both objects being able to exist independently of each other, illustrated by the Doctor-Treats-Patient example.\n\nThe Patient being destroyed with the Doctor describes a dependent lifecycle, the hallmark of Composition rather than Association.\n\nExclusive ownership of the Patient's lifecycle by the Doctor also describes Composition's Exclusive Ownership property, not Association.\n\nRequiring one object to instantiate before the other contradicts the independence Association is defined to have."
  },
  {
    id: "csc302_ch6_061",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "Which values can the Cardinality of an Association relationship take?",
    options: [
      "Many-to-many, the single value Association is limited to",
      "One-to-one, the single value Association is limited to",
      "One-to-one, one-to-many, or many-to-many",
      "Zero-to-zero, reflecting the absence of any relationship"
    ],
    correctAnswer: 2,
    explanation: "The Object Relationships: Association section states that Cardinality can be one-to-one, one-to-many, or many-to-many.\n\nLimiting cardinality to many-to-many alone ignores the other two values the section explicitly lists.\n\nLimiting cardinality to one-to-one alone also ignores the one-to-many and many-to-many values the section lists.\n\nA zero-to-zero cardinality contradicts the entire premise of Association describing an actual relationship between two classes."
  },
  {
    id: "csc302_ch6_062",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "In the Department-Professor Aggregation example, which of the following outcomes is supported when a Department is dissolved?",
    options: [
      "The individual Professor objects continue to exist in the database",
      "The individual Professor objects are destroyed along with the Department",
      "All of these",
      "None of these"
    ],
    correctAnswer: 0,
    explanation: "The Object Relationships: Aggregation section states that Independent Lifecycles means if the Department is dissolved, the individual Professor objects continue to exist in the database, so this option is supported.\n\nThe Professor objects being destroyed along with the Department describes Composition's dependent lifecycle behaviour from the Building-Room example, which the Aggregation section contradicts by describing independent lifecycles instead."
  },
  {
    id: "csc302_ch6_063",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "What does the Shared References property of Aggregation allow?",
    options: [
      "A patient is restricted to a single treating doctor",
      "A professor is restricted to belonging to a single department",
      "A room can be shared by two different buildings",
      "Multiple departments can share references to the same professor"
    ],
    correctAnswer: 3,
    explanation: "The Object Relationships: Aggregation section states that Shared References allow multiple departments to share references to the same professor.\n\nRestricting a professor to a single department contradicts the shared-reference property the section explicitly describes.\n\nA room shared by two buildings describes Composition's Building-Room example, and the section instead describes Rooms as exclusively owned by one Building.\n\nA patient restricted to a single doctor is not a claim from the Aggregation section; it misapplies a constraint to the unrelated Association example."
  },
  {
    id: "csc302_ch6_064",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "In the Building-Room Composition example, what happens to the Room objects if the Building is demolished?",
    options: [
      "The Room objects are automatically transferred to a different building",
      "All of the associated Room objects are destroyed along with the Building",
      "The Room objects continue to exist independently in the database",
      "The Room objects are converted into standalone Department objects"
    ],
    correctAnswer: 1,
    explanation: "The Object Relationships: Composition section states that Dependent Lifecycles means if the Building is demolished, all of its associated Room objects are destroyed along with it.\n\nAutomatic transfer to a different building is not described anywhere in the Composition section.\n\nRooms continuing to exist independently describes the Independent Lifecycles behaviour of Aggregation, the opposite relationship strength from Composition.\n\nConverting Rooms into standalone Department objects mixes in an unrelated example and is not described in the source."
  },
  {
    id: "csc302_ch6_065",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "What does Exclusive Ownership mean within a Composition relationship?",
    options: [
      "The parent object can be shared as a reference across multiple unrelated wholes",
      "The parent object is responsible for managing the lifecycle of its composed parts",
      "The parts of the whole can be reassigned to a different parent at runtime",
      "The parent object leaves memory allocation for its composed parts to the operating system"
    ],
    correctAnswer: 1,
    explanation: "The Object Relationships: Composition section defines Exclusive Ownership as the parent object being responsible for managing the lifecycle of its composed parts.\n\nA parent being shared across multiple unrelated wholes describes Aggregation's Shared References property, not Composition's exclusive ownership.\n\nReassigning parts to a different parent at runtime contradicts the dependent, exclusive relationship Composition is defined to have.\n\nLeaving memory allocation to the operating system contradicts the exclusive ownership and lifecycle management the section attributes to the parent object itself."
  },
  {
    id: "csc302_ch6_066",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "Which of the following object relationships is described as involving no ownership between the two connected classes?",
    options: [
      "Association",
      "Composition",
      "All of these",
      "None of these"
    ],
    correctAnswer: 0,
    explanation: "The Object Relationships: Association section describes Association as a general relationship between two independent classes with no ownership implied, so Association fits this description.\n\nComposition is described in its own section as a strict ownership relationship where child objects cannot exist independently of their parent, which directly contradicts the no-ownership criterion, so Composition does not qualify."
  },
  {
    id: "csc302_ch6_067",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "Each bank account object maintains its own independent balance value, separate from every other account. Which class-member concept does this illustrate?",
    options: [
      "Constructors",
      "Static Variables",
      "Instance Variables",
      "Encapsulation"
    ],
    correctAnswer: 2,
    explanation: "The Class Members section states that Instance Variables are maintained as an independent copy by each object, giving the example that each account has its own balance.\n\nStatic Variables instead describe a single copy shared across all instances of a class, the opposite of each account holding its own separate balance.\n\nConstructors are the routines that initialise an object's starting values, a related but distinct concept from where those values are stored per instance.\n\nEncapsulation concerns bundling data with methods and restricting access, not the specific instance-versus-shared storage distinction being tested here."
  },
  {
    id: "csc302_ch6_068",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "Why are Static Variables useful for shared constants or global counters?",
    options: [
      "They can only be accessed by the specific subclass that first declares them",
      "Each object receives its own independent copy stored only for the lifetime of that object",
      "They are automatically destroyed once the constructor that created the class finishes running",
      "A single copy resides in global memory and is shared across all instances of the class"
    ],
    correctAnswer: 3,
    explanation: "The Class Members section states that Static Variables have a single copy shared across all instances of the class, residing in global memory, which is why they suit shared constants or global counters.\n\nEach object receiving its own independent copy describes Instance Variables, the opposite storage model from static variables.\n\nBeing destroyed once a constructor finishes running is not a described property of static variables in this section.\n\nBeing accessible only to the declaring subclass describes a private-like restriction, not the global-memory sharing static variables actually have."
  },
  {
    id: "csc302_ch6_069",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "What did Alan Kay, the creator of Smalltalk, emphasise that OOP is primarily about?",
    options: [
      "Compile-time resolution of overloaded method signatures",
      "Internal state structures, rather than communication and messaging",
      "Communication and messaging, rather than internal state structures",
      "Restricting object fields to a single access modifier"
    ],
    correctAnswer: 2,
    explanation: "The Messaging section states that Alan Kay, the creator of Smalltalk, emphasised that OOP is primarily about communication and messaging rather than internal state structures.\n\nReversing the emphasis to internal state structures over messaging contradicts what the section attributes to Kay.\n\nCompile-time resolution of overloaded signatures is the Method Overloading concept from a different section, unrelated to Kay's messaging emphasis.\n\nRestricting fields to a single access modifier is an encapsulation detail, unrelated to the communication-centred vision described here."
  },
  {
    id: "csc302_ch6_070",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "What does Indirect Execution mean in the description of how objects communicate?",
    options: [
      "An object directly modifies another object's private fields without going through any method",
      "An object requests another object to perform an action instead of directly accessing its data",
      "An object is instantiated only after every other object in the system has been created",
      "An object's methods are resolved at compile time rather than at runtime"
    ],
    correctAnswer: 1,
    explanation: "The Messaging section defines Indirect Execution as an object requesting another object to perform an action instead of directly accessing its data.\n\nDirectly modifying another object's private fields without a method describes exactly the behaviour messaging is meant to avoid, the opposite of indirect execution.\n\nRequiring every other object to be created first is not a claim made anywhere in the Messaging section.\n\nResolving methods exclusively at compile time describes static binding, an unrelated concept from a different section on method binding."
  },
  {
    id: "csc302_ch6_071",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "A method is declared as private, meaning it cannot be overridden by any subclass. When is a call to this method resolved?",
    options: [
      "Only when the virtual method table is rebuilt at startup",
      "At runtime, through dynamic binding",
      "Only after the object's destructor has already run",
      "At compile-time, through static binding"
    ],
    correctAnswer: 3,
    explanation: "The Method Binding section states that Static Binding, or Early Binding, resolves method calls at compile-time, and is used for static, final, and private methods, where the target method cannot be overridden.\n\nDynamic Binding instead resolves method calls at runtime based on the actual object type, which the section reserves for methods that can be overridden, unlike a private method.\n\nResolution happening only after the destructor runs reverses the actual object lifecycle, since destructors run at the end of an object's life, not before a method call is resolved.\n\nRebuilding a virtual method table at startup is not how the section describes static binding; vtables are instead tied to dynamic, run-time dispatch."
  },
  {
    id: "csc302_ch6_072",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "What tradeoff does Dynamic Binding introduce in exchange for enabling polymorphic behaviour?",
    options: [
      "A requirement that methods in the program be declared static",
      "The removal of a subclass's ability to override inherited methods",
      "A slight lookup overhead when resolving the actual object type at runtime",
      "A reduction in the number of subclasses a hierarchy is permitted to define"
    ],
    correctAnswer: 2,
    explanation: "The Method Binding section states that Dynamic Binding, or Late Binding, resolves method calls at runtime based on the actual object type, allowing polymorphic behaviour but introducing a slight lookup overhead.\n\nRemoving a subclass's ability to override inherited methods contradicts dynamic binding's purpose of enabling polymorphic, overridden behaviour.\n\nRequiring methods to be declared static describes forcing static binding instead, the opposite of enabling dynamic, overridable methods.\n\nReducing the number of permitted subclasses is not a tradeoff described anywhere in the Method Binding section."
  }
  ,
  {
    id: "csc302_ch6_073",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "Who introduced the SOLID principles as a set of five design guidelines for building robust and extensible software?",
    options: [
      "Joe Armstrong",
      "Kristen Nygaard",
      "Bjarne Stroustrup",
      "Robert C. Martin (Uncle Bob)"
    ],
    correctAnswer: 3,
    explanation: "The Introduction to SOLID Principles section credits Robert C. Martin, known as Uncle Bob, with introducing the SOLID principles.\n\nKristen Nygaard is credited elsewhere with co-developing Simula, not the SOLID principles.\n\nBjarne Stroustrup is credited with creating C++, a separate contribution from Part V.\n\nJoe Armstrong is credited with the Banana-Monkey-Jungle critique of OOP, a separate contribution from Part VI."
  },
  {
    id: "csc302_ch6_074",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "Which principle does the letter I stand for within the SOLID acronym?",
    options: [
      "Inheritance Substitution Principle",
      "Interface Segregation Principle",
      "Immutable State Principle",
      "Information Hiding Principle"
    ],
    correctAnswer: 1,
    explanation: "The Introduction to SOLID Principles section lists the I as the Interface Segregation Principle.\n\nInheritance Substitution Principle is not one of the five listed guidelines; the L instead stands for the Liskov Substitution Principle.\n\nImmutable State Principle does not appear anywhere among the five SOLID guidelines listed in the section.\n\nInformation Hiding Principle is not one of the five SOLID letters; information hiding is instead a property described under Encapsulation."
  },
  {
    id: "csc302_ch6_075",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "What is the core guideline of the Single Responsibility Principle?",
    options: [
      "Subtypes must be substitutable for their base types",
      "Software entities should be open for extension but closed for modification",
      "A class should have one, and only one, reason to change",
      "High-level modules should not depend on low-level modules"
    ],
    correctAnswer: 2,
    explanation: "The Single Responsibility Principle section states its core guideline as a class should have one, and only one, reason to change.\n\nBeing open for extension but closed for modification is the Open/Closed Principle's core guideline, a separate SOLID letter.\n\nSubtypes being substitutable for base types is the Liskov Substitution Principle's core guideline.\n\nHigh-level modules not depending on low-level modules is the Dependency Inversion Principle's core guideline."
  },
  {
    id: "csc302_ch6_076",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "A single giant class manages database access, application logic, and user interface rendering all at once. Which SOLID anti-pattern does this describe?",
    options: [
      "The Square-Rectangle Problem, violating the Liskov Substitution Principle",
      "The Diamond Problem, violating the inheritance hierarchy",
      "Environmental Bloat, violating the Law of Demeter",
      "The Blob, violating the Single Responsibility Principle"
    ],
    correctAnswer: 3,
    explanation: "The Single Responsibility Principle section names this scenario the Blob, a giant god class that manages database access, application logic, and UI rendering all at once, violating the principle that a class should have one reason to change.\n\nThe Diamond Problem instead concerns method-name collisions from a class inheriting from two parents sharing a common ancestor, unrelated to a single god class.\n\nEnvironmental Bloat is Joe Armstrong's critique of deep class hierarchies pulling in dependencies, a different problem from one class doing too much.\n\nThe Square-Rectangle Problem concerns a subclass breaking expected behaviour by changing width and height together, unrelated to a class with too many responsibilities."
  },
  {
    id: "csc302_ch6_077",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "Classes become easier to read, test, and maintain once their responsibilities are clearly defined and limited to one well-defined task.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "The Single Responsibility Principle section lists exactly this benefit: classes are easier to read, test, and maintain when their responsibilities are clearly defined, so the statement is true."
  },
  {
    id: "csc302_ch6_078",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "What does it mean for software entities to be open for extension but closed for modification, per the Open/Closed Principle?",
    options: [
      "A class must implement every method defined in each interface it references",
      "New features should be added without modifying existing code",
      "A class's fields must be declared with the private access modifier",
      "A subclass must remain substitutable in place of its parent class"
    ],
    correctAnswer: 1,
    explanation: "The Open/Closed Principle section describes Extending System Behaviour as being able to add new features without modifying existing code, which is what open for extension but closed for modification means.\n\nRequiring a class to implement every referenced interface method describes the opposite of what the Interface Segregation Principle recommends, not the Open/Closed Principle.\n\nDeclaring fields private is an encapsulation access-modifier practice, unrelated to extending behaviour without modification.\n\nRequiring a subclass to remain substitutable for its parent is the Liskov Substitution Principle's guideline, a distinct SOLID letter."
  },
  {
    id: "csc302_ch6_079",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "What implementation strategy does the Open/Closed Principle rely on to add new features without touching existing code?",
    options: [
      "Hard-coding every new feature directly into the existing concrete classes",
      "Relying on abstractions and polymorphism instead of hard-coding specific concrete classes",
      "Merging all related classes into a single class to reduce the total file count",
      "Removing all interfaces so that concrete implementations can be edited directly"
    ],
    correctAnswer: 1,
    explanation: "The Open/Closed Principle section states its Implementation Strategy as relying on abstractions and polymorphism instead of hard-coding specific concrete classes.\n\nHard-coding new features directly into existing concrete classes is precisely the practice the principle is designed to avoid.\n\nMerging related classes into a single class contradicts the principle's reliance on extension through abstraction rather than consolidation.\n\nRemoving interfaces so concrete implementations can be edited directly is the opposite of relying on abstractions as the strategy describes."
  },
  {
    id: "csc302_ch6_080",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "What benefit does the Open/Closed Principle provide when new features are added to a system?",
    options: [
      "It removes the need for abstraction or interfaces in the codebase",
      "It removes the need to write a new class for a new feature",
      "It minimises the risk of introducing bugs into stable, tested code",
      "It requires existing classes to be rewritten when a feature is added"
    ],
    correctAnswer: 2,
    explanation: "The Open/Closed Principle section lists its benefit as minimising the risk of introducing bugs into stable, tested code when adding new features.\n\nRemoving the need to write a new class contradicts the principle, which relies on extension through new classes rather than avoiding them.\n\nRemoving the need for abstraction contradicts the principle's implementation strategy, which depends on abstractions and polymorphism.\n\nRequiring existing classes to be rewritten for each feature is the opposite of the stability benefit the principle is meant to provide."
  },
  {
    id: "csc302_ch6_081",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "What is the core guideline of the Liskov Substitution Principle?",
    options: [
      "Both high-level and low-level modules should depend on abstractions",
      "A class should have one, and only one, reason to change",
      "Clients should not be forced to depend on interfaces they do not use",
      "Subtypes must be substitutable for their base types"
    ],
    correctAnswer: 3,
    explanation: "The Liskov Substitution Principle section states its core guideline as subtypes must be substitutable for their base types.\n\nA class having one reason to change is the Single Responsibility Principle's guideline, a different SOLID letter.\n\nClients not being forced to depend on unused interfaces is the Interface Segregation Principle's guideline.\n\nBoth high-level and low-level modules depending on abstractions is the Dependency Inversion Principle's guideline."
  },
  {
    id: "csc302_ch6_082",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "In the classic Square-Rectangle Problem, why can a Square that inherits from Rectangle break system expectations?",
    options: [
      "The Rectangle class loses its own width and height fields once Square is defined",
      "A Square cannot be instantiated once it inherits from a Rectangle class",
      "Modifying its width also changes its height, changing behaviour a caller expects from a Rectangle",
      "Rectangle and Square must be declared inside the same source file"
    ],
    correctAnswer: 2,
    explanation: "The Liskov Substitution Principle section describes the Classic Square-Rectangle Problem as a Square inheriting from Rectangle breaking system expectations because modifying its width also changes its height.\n\nA Square being unable to be instantiated is not the problem described; the issue is behavioural inconsistency, not instantiation failure.\n\nThe Rectangle class losing its own fields once Square is defined is not a claim made in this section.\n\nRequiring both classes to be declared in the same source file is a file-organisation detail not mentioned anywhere in this section."
  },
  {
    id: "csc302_ch6_083",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "What does the Liskov Substitution Principle ensure for polymorphic code across all subclasses?",
    options: [
      "That it runs faster than non-polymorphic code",
      "That it remains predictable and reliable",
      "That it requires less testing before deployment",
      "That every subclass shares identical memory addresses"
    ],
    correctAnswer: 1,
    explanation: "The Liskov Substitution Principle section states its benefit as ensuring that polymorphic code remains predictable and reliable across all subclasses.\n\nFaster execution than non-polymorphic code is not a benefit claimed anywhere in this section.\n\nRequiring less testing before deployment is not a claim made about the principle; predictability is not the same as reduced testing.\n\nSharing identical memory addresses across subclasses is not a described consequence of the principle and is not how object memory works."
  },
  {
    id: "csc302_ch6_084",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "What is the core guideline of the Interface Segregation Principle?",
    options: [
      "Software entities should be open for extension but closed for modification",
      "High-level modules should not depend on low-level modules",
      "A class should have one, and only one, reason to change",
      "Clients should not be forced to depend on interfaces they do not use"
    ],
    correctAnswer: 3,
    explanation: "The Interface Segregation Principle section states its core guideline as clients should not be forced to depend on interfaces they do not use.\n\nHigh-level modules not depending on low-level modules is the Dependency Inversion Principle's guideline, a different SOLID letter.\n\nA class having one reason to change is the Single Responsibility Principle's guideline.\n\nBeing open for extension but closed for modification is the Open/Closed Principle's guideline."
  },
  {
    id: "csc302_ch6_085",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "How does breaking a large, general-purpose interface into smaller, more specific ones avoid bloat, per the Interface Segregation Principle?",
    options: [
      "It merges all specific interfaces back into one all-encompassing interface at compile time",
      "It forces every implementing class to implement every method in the original large interface",
      "It prevents classes from having to implement dummy methods for interfaces they don't actually need",
      "It removes the need for any class to ever implement an interface again"
    ],
    correctAnswer: 2,
    explanation: "The Interface Segregation Principle section describes Avoiding Bloat as preventing classes from having to implement dummy methods for interfaces they don't actually need.\n\nForcing every implementing class to implement every method in the original large interface is precisely the bloat the principle is designed to prevent.\n\nMerging specific interfaces back into one large interface at compile time contradicts the Focused Interfaces strategy of breaking interfaces apart.\n\nRemoving the need to implement interfaces entirely is not a described consequence; segregation changes interface size, not whether interfaces are used at all."
  },
  {
    id: "csc302_ch6_086",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "Which of the following is a stated benefit of applying the Interface Segregation Principle?",
    options: [
      "A more modular, decoupled codebase where changes to interfaces have minimal impact",
      "A reduction in the number of public methods a class may declare",
      "All of these",
      "None of these"
    ],
    correctAnswer: 0,
    explanation: "The Interface Segregation Principle section states its benefit as creating a more modular, decoupled codebase where changes to interfaces have minimal impact, so this option is supported.\n\nReducing the number of public methods a class may declare is not a claim made anywhere in the section and is not what interface segregation requires."
  },
  {
    id: "csc302_ch6_087",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "What is the core guideline of the Dependency Inversion Principle?",
    options: [
      "Clients should depend on the largest available interface",
      "Low-level modules should directly control the behaviour of high-level modules",
      "A subtype must be substitutable for its base type",
      "High-level modules should not depend on low-level modules; both should depend on abstractions"
    ],
    correctAnswer: 3,
    explanation: "The Dependency Inversion Principle section states its core guideline as high-level modules should not depend on low-level modules, and both should depend on abstractions.\n\nLow-level modules controlling high-level module behaviour reverses the dependency direction the principle actually recommends.\n\nSubtype substitutability is the Liskov Substitution Principle's guideline, a different SOLID letter.\n\nDepending on the largest available interface is the opposite of the Interface Segregation Principle's recommendation to use smaller, focused interfaces."
  },
  {
    id: "csc302_ch6_088",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "What implementation strategy does the Dependency Inversion Principle use to decouple high-level logic from low-level services?",
    options: [
      "Hard-coding the exact low-level database driver directly into the business logic",
      "Using interfaces to decouple high-level logic from low-level implementation details",
      "Removing all abstractions so that high-level code can call low-level code directly",
      "Combining high-level and low-level modules into a single undivided class"
    ],
    correctAnswer: 1,
    explanation: "The Dependency Inversion Principle section states its Implementation Strategy as using interfaces to decouple high-level logic from low-level services.\n\nHard-coding a specific low-level driver directly into business logic is precisely the tight coupling the principle is meant to prevent.\n\nRemoving all abstractions so high-level code calls low-level code directly contradicts the principle's reliance on interfaces as the decoupling mechanism.\n\nCombining high-level and low-level modules into one undivided class contradicts the separation the principle requires between the two layers."
  },
  {
    id: "csc302_ch6_089",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "What benefit does the Dependency Inversion Principle provide when swapping a database for an API?",
    options: [
      "It prevents any low-level implementation from ever being replaced again",
      "It requires every business logic class to be rewritten to match the new low-level detail",
      "It allows the low-level detail to change without affecting core business logic",
      "It merges the database and the API into a single combined low-level module"
    ],
    correctAnswer: 2,
    explanation: "The Dependency Inversion Principle section states its benefit as allowing you to change low-level details, such as swapping a database for an API, without affecting core business logic.\n\nRequiring every business logic class to be rewritten contradicts the very benefit of insulating business logic from low-level changes.\n\nPreventing any low-level implementation from ever being replaced is the opposite of the flexibility the principle is designed to provide.\n\nMerging the database and API into a single low-level module is not a described consequence and does not follow from the principle's stated strategy."
  },
  {
    id: "csc302_ch6_090",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "What does the DRY (Don't Repeat Yourself) Principle require of a piece of knowledge or logic within a system?",
    options: [
      "It must be implemented once in every subclass that inherits from the base class",
      "It must be duplicated across at least two separate modules for safety",
      "It must be declared using the public access modifier at all times",
      "It must have a single, unambiguous representation within the system"
    ],
    correctAnswer: 3,
    explanation: "The DRY Principle section states that every piece of knowledge or logic must have a single, unambiguous representation within a system.\n\nDeliberately duplicating logic across modules contradicts the entire purpose of the DRY principle, which exists to eliminate redundancy.\n\nRequiring the public access modifier is an encapsulation detail unrelated to how many places a piece of logic is represented.\n\nRequiring reimplementation in every subclass describes duplication across a hierarchy, exactly what DRY seeks to avoid."
  },
  {
    id: "csc302_ch6_091",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "What risk does duplicating code across a system create?",
    options: [
      "The compiler refuses to build the project until the duplication is removed",
      "Bugs must be fixed in multiple places, increasing maintenance effort",
      "The duplicated function automatically becomes a static method",
      "The duplicated code runs faster than a single shared version"
    ],
    correctAnswer: 1,
    explanation: "The DRY Principle section states the Duplication Risk as bugs needing to be fixed in multiple places, increasing maintenance effort.\n\nThe compiler refusing to build over duplication is not a claim made anywhere in this section; duplication is a maintenance concern, not a compile error.\n\nA duplicated function automatically becoming a static method is not a stated consequence of code duplication in this section.\n\nDuplicated code running faster than a shared version is not addressed by the DRY Principle section, which focuses on maintenance risk, not performance."
  },
  {
    id: "csc302_ch6_092",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "What caution does the DRY Principle section give about applying the principle too aggressively?",
    options: [
      "Applying DRY too aggressively reproduces the software crisis described for the 1960s-1980s",
      "Sharing code between components that only happen to look similar can create artificial dependencies",
      "Using DRY requires converting classes into abstract classes",
      "DRY can be applied correctly only if the Law of Demeter is disabled first"
    ],
    correctAnswer: 1,
    explanation: "The DRY Principle section cautions that avoiding over-abstracting matters because sharing code between components that only happen to look similar can create artificial dependencies.\n\nLinking DRY misuse to the historical software crisis is not a claim made anywhere in the DRY section; the crisis is a separate historical topic from Part I.\n\nConverting classes into abstract classes is not a requirement or caution mentioned in the DRY Principle section.\n\nDisabling the Law of Demeter is not mentioned as a prerequisite for applying DRY; the two principles are discussed independently."
  },
  {
    id: "csc302_ch6_093",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "Under the Law of Demeter, which of the following is an object permitted to invoke methods on?",
    options: [
      "Objects passed to it as parameters",
      "Any object reachable through a chain of getter calls, regardless of distance",
      "All of these",
      "None of these"
    ],
    correctAnswer: 0,
    explanation: "The Law of Demeter section lists objects passed to it as parameters as one of the categories an object may invoke methods on, alongside itself, objects it instantiates, and its direct component parts.\n\nInvoking methods on any object reachable through a chain of getter calls describes exactly the object.getA().getB().doSomething() pattern the section flags as a Violation, so it is not permitted."
  },
  {
    id: "csc302_ch6_094",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "What is the core rule of the Law of Demeter, also known as the principle of Least Knowledge?",
    options: [
      "An object should avoid invoking a method on itself",
      "An object should be able to reach any other object in the system through a chain of getters",
      "An object should only talk to its immediate neighbors and avoid reaching into nested structures",
      "An object should depend directly on low-level implementation details"
    ],
    correctAnswer: 2,
    explanation: "The Law of Demeter section states its core rule as an object should only talk to its immediate neighbors and avoid reaching into nested structures.\n\nReaching any other object through a chain of getters describes exactly the violation the section flags, not the rule itself.\n\nAvoiding invoking a method on itself contradicts the section's own list, which explicitly permits an object to invoke methods on itself.\n\nDepending directly on low-level implementation details contradicts the Dependency Inversion Principle's guidance and is not part of the Law of Demeter's rule."
  },
  {
    id: "csc302_ch6_095",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "Why is the call object.getA().getB().doSomething() flagged as a Violation of the Law of Demeter?",
    options: [
      "It invokes a private constructor from outside the defining class",
      "It declares a static variable shared across every instance of the calling class",
      "It relies on operator overloading, which is unsupported in the language being used",
      "It reaches into nested structures rather than talking only to an immediate neighbor"
    ],
    correctAnswer: 3,
    explanation: "The Law of Demeter section flags object.getA().getB().doSomething() as a Violation because it chains through nested objects rather than the object talking only to its immediate neighbors.\n\nDeclaring a shared static variable is a distinct class-member concept unrelated to method-chaining depth.\n\nOperator overloading support is a compile-time polymorphism topic from a different section, unrelated to this chained method call.\n\nInvoking a private constructor from outside the defining class is an access-modifier violation, a different kind of problem from Demeter's chaining rule."
  },
  {
    id: "csc302_ch6_096",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "What benefit does following the Law of Demeter provide when internal structures are later updated?",
    options: [
      "It converts nested objects into static variables",
      "It removes the need for the update to be recompiled",
      "It minimises cascading changes across the codebase",
      "It removes the need for an object to have a public interface"
    ],
    correctAnswer: 2,
    explanation: "The Law of Demeter section states its benefit as minimising cascading changes when internal structures are updated.\n\nRemoving the need for recompilation is not a claim made anywhere in this section.\n\nConverting nested objects into static variables is not a mechanism described by the Law of Demeter.\n\nRemoving the need for a public interface contradicts encapsulation's requirement that external interactions occur through a public interface."
  },
  {
    id: "csc302_ch6_097",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "Which SOLID letter corresponds to the guideline that a subtype must remain substitutable for its base type?",
    options: [
      "S, the Single Responsibility Principle",
      "L, the Liskov Substitution Principle",
      "O, the Open/Closed Principle",
      "D, the Dependency Inversion Principle"
    ],
    correctAnswer: 1,
    explanation: "The Liskov Substitution Principle section, corresponding to the L in SOLID, states its guideline as subtypes must be substitutable for their base types.\n\nThe S, or Single Responsibility Principle, instead concerns a class having one reason to change, not substitutability.\n\nThe O, or Open/Closed Principle, concerns being open for extension and closed for modification.\n\nThe D, or Dependency Inversion Principle, concerns high-level modules depending on abstractions rather than low-level modules."
  }
  ,
  {
    id: "csc302_ch6_098",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "Which language, developed by Kristen Nygaard and Ole-Johan Dahl to model physical processes, introduced the core concepts of classes, subclasses, and virtual methods?",
    options: [
      "Java, released in 1995",
      "Simula, released in 1967",
      "Smalltalk, released in 1972",
      "C++, released in 1979"
    ],
    correctAnswer: 1,
    explanation: "The Simula and Smalltalk section credits Simula, released in 1967 and developed by Kristen Nygaard and Ole-Johan Dahl to model physical processes, with introducing classes, subclasses, and virtual methods.\n\nJava is credited separately with being released in 1995 by Sun Microsystems for portability, not with originating classes and virtual methods.\n\nSmalltalk is credited with being a pure object-oriented language developed at Xerox PARC, a distinct milestone from Simula's origination of classes.\n\nC++ is credited with being created by Bjarne Stroustrup in 1979 as a hybrid language, a later development than Simula."
  },
  {
    id: "csc302_ch6_099",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "Smalltalk, developed at Xerox PARC by Alan Kay, Dan Ingalls, and Adele Goldberg, relied on manual memory management using new and delete for all of its execution.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "The Simula and Smalltalk section credits Smalltalk's execution to dynamic message passing, not to manual memory management using new and delete, which the C++ section instead attributes to C++. Swapping in the C++ mechanism makes the statement false."
  },
  {
    id: "csc302_ch6_100",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "What execution model did Smalltalk rely on, in keeping with Alan Kay's messaging-centred vision of OOP?",
    options: [
      "Dynamic message passing",
      "Static compile-time linking",
      "Manual memory management with new and delete",
      "Structure of Arrays memory layout"
    ],
    correctAnswer: 0,
    explanation: "The Simula and Smalltalk section states that Smalltalk's execution relied on dynamic message passing, consistent with Alan Kay's emphasis on communication over internal state elsewhere in the deck.\n\nStatic compile-time linking is not a property attributed to Smalltalk in this section; it more closely resembles a static-binding style the deck contrasts with dynamic dispatch.\n\nManual memory management with new and delete is attributed instead to C++ in the following section.\n\nStructure of Arrays memory layout is attributed to Data-Oriented Design in Part VI, an unrelated later topic."
  },
  {
    id: "csc302_ch6_101",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "C++ was created by Bjarne Stroustrup in 1979 under what original name, before it integrated object-oriented concepts into the high-performance C language?",
    options: [
      "\"C with Classes\"",
      "\"Simple C\"",
      "\"Structured C\"",
      "\"Managed C\""
    ],
    correctAnswer: 0,
    explanation: "The C++ section states that Bjarne Stroustrup created C++ in 1979 as \"C with Classes\" before it integrated object-oriented concepts into the high-performance C language.\n\n\"Simple C\" is not a name used anywhere in the source for the language's origin.\n\n\"Structured C\" is not the name given in the source; structured programming is a separate, earlier topic from Part I.\n\n\"Managed C\" is not the name given in the source; managed execution is instead a property the source attributes to Java's JVM."
  },
  {
    id: "csc302_ch6_102",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "What does the Zero-Overhead Principle mean for features in C++?",
    options: [
      "You don't pay a performance penalty for capabilities you don't use",
      "Every feature must be compiled with identical performance regardless of use",
      "Garbage collection runs automatically to reclaim all unused memory",
      "The compiler removes all manual memory management from the language"
    ],
    correctAnswer: 0,
    explanation: "The C++ section states that the Zero-Overhead Principle means features are designed so that you don't pay a performance penalty for capabilities you don't use.\n\nRequiring identical performance for every feature regardless of use is not what zero overhead means; it specifically concerns unused features carrying no cost, not uniform cost for all features.\n\nAutomatic garbage collection is attributed to Java in a later section, not to C++, which the source instead describes as using manual memory management.\n\nRemoving manual memory management from the language contradicts the C++ section, which explicitly credits it with manual memory management using new and delete."
  },
  {
    id: "csc302_ch6_103",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "A language supports both procedural functions and object-oriented classes within the same codebase, giving developers flexibility in how they structure their code. Which language is described with this Hybrid Paradigm property?",
    options: [
      "C++",
      "Java",
      "Smalltalk",
      "Python"
    ],
    correctAnswer: 0,
    explanation: "The C++ section describes its Hybrid Paradigm property as supporting both procedural and object-oriented programming, giving developers flexibility.\n\nJava is described instead with a Pure Class Model, where everything except primitive types must be defined inside a class, the opposite of a procedural-and-OOP hybrid.\n\nSmalltalk is described as a pure object-oriented language where everything is an object, not a procedural-and-OOP hybrid.\n\nPython is described through dynamic typing and duck typing rather than through combining procedural and object-oriented styles as its defining trait."
  },
  {
    id: "csc302_ch6_104",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "What does Managed Execution mean for a Java program running on the Java Virtual Machine (JVM)?",
    options: [
      "The JVM protects the system from direct memory manipulation",
      "The program bypasses the JVM and compiles straight to native machine code",
      "The developer manually allocates and frees objects using new and delete",
      "A class becomes optional, letting primitives exist outside a class"
    ],
    correctAnswer: 0,
    explanation: "The Java section states that Managed Execution means Java runs on a Virtual Machine (JVM), protecting the system from direct memory manipulation.\n\nBypassing the JVM to compile straight to native machine code contradicts the described managed, VM-based execution model.\n\nManually allocating and freeing objects with new and delete is the manual memory management approach attributed to C++, not Java's managed model.\n\nJava's Pure Class Model instead requires everything except primitive types to be defined inside a class, so classes are not optional as this option claims."
  },
  {
    id: "csc302_ch6_105",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "How does Java's Automatic Garbage Collection help prevent memory leaks?",
    options: [
      "It reclaims memory from unused objects automatically",
      "It requires the developer to call a destructor manually for each object created",
      "It disables the heap so that only stack memory can be used",
      "It converts an object into a static variable shared across the program"
    ],
    correctAnswer: 0,
    explanation: "The Java section states that Automatic Garbage Collection reclaims memory from unused objects automatically, preventing memory leaks.\n\nRequiring manual destructor calls for each object describes a manual memory management style, which the source attributes to C++ rather than Java's automatic collection.\n\nDisabling the heap contradicts the source, which describes the heap as where object instances, including in Java, are stored.\n\nConverting an object into a shared static variable is not a described mechanism of garbage collection and would contradict each object needing its own reclaimable memory."
  },
  {
    id: "csc302_ch6_106",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "Under Java's Pure Class Model, what must be true of anything in a program besides primitive types?",
    options: [
      "It must be defined inside a class",
      "It must be declared using the internal or package-private access modifier",
      "It must be kept off the heap and stored on the stack instead",
      "It must be resolved through method overloading"
    ],
    correctAnswer: 0,
    explanation: "The Java section states that under the Pure Class Model, everything except primitive types must be defined inside a class, ensuring a consistent design.\n\nRequiring the internal or package-private modifier specifically is an access-control detail not tied to the Pure Class Model's requirement about class membership.\n\nBeing kept off the heap and stored on the stack instead contradicts how object instances, which must live inside classes under this model, are actually stored according to the Memory Allocation section.\n\nResolving everything through method overloading confuses a compile-time polymorphism mechanism with the unrelated requirement that non-primitives live inside classes."
  },
  {
    id: "csc302_ch6_107",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "\"If it walks like a duck and quacks like a duck, it's a duck.\" Which OOP concept does this phrase illustrate?",
    options: [
      "Duck Typing",
      "The Diamond Problem",
      "The Banana-Monkey-Jungle Problem",
      "Data-Oriented Design"
    ],
    correctAnswer: 0,
    explanation: "The Python section uses this exact phrase to illustrate Duck Typing, where types are determined by behaviour rather than explicit inheritance.\n\nThe Diamond Problem concerns method-name collisions from shared ancestors in multiple inheritance, unrelated to determining type by behaviour.\n\nThe Banana-Monkey-Jungle Problem is Joe Armstrong's critique of deep class hierarchies, a different concept from behaviour-based typing.\n\nData-Oriented Design concerns organising memory layout around CPU caching patterns, unrelated to how an object's type is determined."
  },
  {
    id: "csc302_ch6_108",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "What does it mean that functions, classes, and modules are First-Class Objects in Python?",
    options: [
      "They are all objects that can be manipulated dynamically at runtime",
      "They must be declared before any variable in the program is created",
      "They can only be instantiated once per program execution",
      "They are restricted from being passed as arguments to any function"
    ],
    correctAnswer: 0,
    explanation: "The Python section defines First-Class Objects as functions, classes, and modules all being objects that can be manipulated dynamically at runtime.\n\nRequiring declaration before any variable is created is not a claim made in the Python section about first-class objects.\n\nRestricting instantiation to once per program execution describes the Singleton pattern from a later section, not first-class objects generally.\n\nRestricting them from being passed as arguments contradicts the point of being manipulable, first-class entities at runtime."
  },
  {
    id: "csc302_ch6_109",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "Which property of Python is described as offering clean syntax that simplifies class definitions and reduces boilerplate code?",
    options: [
      "Minimal Ceremony",
      "Duck Typing",
      "Prototype Chains",
      "The Zero-Overhead Principle"
    ],
    correctAnswer: 0,
    explanation: "The Python section defines Minimal Ceremony as clean syntax that simplifies class definitions and reduces boilerplate code.\n\nDuck Typing instead concerns determining types by behaviour rather than explicit inheritance, a separate Python property.\n\nPrototype Chains describe how JavaScript objects link to inherit properties, an unrelated language's mechanism.\n\nThe Zero-Overhead Principle is a C++ property about not paying for unused features, unrelated to Python's syntax simplicity."
  },
  {
    id: "csc302_ch6_110",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "Which modern language replaces class-based inheritance with traits and explicit lifetimes to ensure memory safety without a garbage collector?",
    options: [
      "Rust",
      "Go (Golang)",
      "Scala",
      "Kotlin"
    ],
    correctAnswer: 0,
    explanation: "The Modern Multi-Paradigm Languages section states that Rust replaces class-based inheritance with traits and explicit lifetimes, ensuring memory safety without a garbage collector.\n\nGo (Golang) is described instead as avoiding class inheritance entirely and using implicit interface implementation, without mentioning explicit lifetimes.\n\nScala is described, together with Kotlin, as blending object-oriented architectures with functional programming on the JVM, a different property from Rust's memory-safety mechanism.\n\nKotlin is grouped with Scala in the same JVM-blending description, not with Rust's traits-and-lifetimes approach."
  },
  {
    id: "csc302_ch6_111",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "Go (Golang) avoids class inheritance entirely, relying instead on which mechanism for flexible composition?",
    options: [
      "Implicit interface implementation",
      "Explicit lifetimes and ownership tracking",
      "Prototype chains linking objects together",
      "Virtual method tables resolved at runtime"
    ],
    correctAnswer: 0,
    explanation: "The Modern Multi-Paradigm Languages section states that Go avoids class inheritance entirely and uses implicit interface implementation, allowing for flexible composition.\n\nExplicit lifetimes and ownership tracking are attributed to Rust in the same section, not to Go.\n\nPrototype chains are attributed to JavaScript's inheritance model in a separate section, not to Go.\n\nVirtual method tables are the run-time polymorphism mechanism described under Pillar 4, unrelated to Go's interface-based composition."
  },
  {
    id: "csc302_ch6_112",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "Scala and Kotlin are described as seamlessly blending object-oriented architectures with functional programming capabilities on which platform?",
    options: [
      "The JVM",
      "The .NET runtime",
      "A dedicated Smalltalk virtual machine",
      "A browser's JavaScript engine"
    ],
    correctAnswer: 0,
    explanation: "The Modern Multi-Paradigm Languages section states that Scala and Kotlin seamlessly blend object-oriented architectures with functional programming capabilities on the JVM.\n\nThe .NET runtime is not mentioned anywhere in this section as the platform for Scala or Kotlin.\n\nA dedicated Smalltalk virtual machine is not mentioned in this section; Smalltalk's own execution environment is a separate historical topic from Part V.\n\nA browser's JavaScript engine is not the platform described for Scala or Kotlin; JavaScript's own execution model is covered in a separate section."
  },
  {
    id: "csc302_ch6_113",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "Unlike classical languages, JavaScript shares state and behaviour among objects through classical class-based inheritance rather than through prototypes.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "The OOP in JavaScript section states the opposite of this claim: unlike classical languages, JavaScript uses prototypes rather than classes to share state and behaviour, so this reversed statement is false."
  },
  {
    id: "csc302_ch6_114",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "What are Prototype Chains in JavaScript's object model?",
    options: [
      "Objects linking directly to other objects to inherit and look up properties",
      "A lookup table the runtime uses to dispatch overridden methods to subclasses",
      "A strict class hierarchy that cannot be modified once a program starts running",
      "A set of interfaces that a class must implement before it can be instantiated"
    ],
    correctAnswer: 0,
    explanation: "The OOP in JavaScript section defines Prototype Chains as objects linking directly to other objects, or prototypes, to inherit and look up properties.\n\nA lookup table dispatching overridden methods to subclasses describes a virtual method table, the run-time polymorphism mechanism from a different, class-based section.\n\nA strict, unmodifiable class hierarchy contradicts the section's description of JavaScript objects as Dynamic Objects that can be modified at runtime.\n\nA set of interfaces a class must implement before instantiation describes a classical, interface-based design, the opposite of JavaScript's prototype-based sharing."
  },
  {
    id: "csc302_ch6_115",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "What is true of the class keyword in modern JavaScript?",
    options: [
      "It works as syntactic sugar over prototype chains",
      "It replaces the prototype chain with a classical inheritance model",
      "It prevents an object from being modified once it has been created",
      "It requires each property to be declared with an explicit access modifier"
    ],
    correctAnswer: 0,
    explanation: "The OOP in JavaScript section states that modern JavaScript provides a class keyword, but it works as syntactic sugar over prototype chains.\n\nReplacing the prototype chain with classical inheritance contradicts the section's point that class syntax merely sits on top of the existing prototype mechanism.\n\nPreventing an object from being modified after creation contradicts the section's Dynamic Objects property, where properties can be added or removed at runtime.\n\nRequiring explicit access modifiers on each property is not a claim made in this section about JavaScript's class syntax."
  },
  {
    id: "csc302_ch6_116",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "Which creational design pattern restricts instantiation of a class to a single global instance?",
    options: [
      "Singleton",
      "Factory Method",
      "Builder",
      "Observer"
    ],
    correctAnswer: 0,
    explanation: "The Creational Patterns Overview section defines Singleton as restricting instantiation to a single global instance.\n\nFactory Method is defined in the same section as defining an interface for creating objects but letting subclasses decide which concrete class to instantiate, a different creational pattern.\n\nBuilder is defined as separating the construction of a complex object from its representation, also distinct from restricting instantiation to one instance.\n\nObserver is a behavioural pattern described in a later section, implementing a subscription-based notification model rather than controlling instantiation."
  },
  {
    id: "csc302_ch6_117",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "Which creational pattern defines an interface for creating objects but lets subclasses decide which concrete class to instantiate?",
    options: [
      "Factory Method",
      "Singleton",
      "Adapter",
      "Strategy"
    ],
    correctAnswer: 0,
    explanation: "The Creational Patterns Overview section defines Factory Method as defining an interface for creating objects but letting subclasses decide which concrete class to instantiate.\n\nSingleton instead restricts instantiation to a single global instance, a different creational goal from delegating class choice to subclasses.\n\nAdapter is a structural pattern from a later section that bridges incompatible interfaces, unrelated to object creation.\n\nStrategy is a behavioural pattern that encapsulates interchangeable algorithms, also unrelated to controlling which class gets instantiated."
  },
  {
    id: "csc302_ch6_118",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "Which creational pattern separates the construction of a complex object from its representation, allowing step-by-step configuration?",
    options: [
      "Builder",
      "Factory Method",
      "Observer",
      "Adapter"
    ],
    correctAnswer: 0,
    explanation: "The Creational Patterns Overview section defines Builder as separating the construction of a complex object from its representation, allowing step-by-step configuration.\n\nFactory Method is defined instead around letting subclasses decide which concrete class to instantiate, a different concern from step-by-step construction.\n\nObserver is a behavioural pattern for notifying subscribers of state changes, unrelated to constructing complex objects.\n\nAdapter is a structural pattern for bridging incompatible interfaces, also unrelated to step-by-step object construction."
  },
  {
    id: "csc302_ch6_119",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "Which of the following is described as a creational design pattern?",
    options: [
      "Builder",
      "Factory Method",
      "All of these",
      "None of these"
    ],
    correctAnswer: 2,
    explanation: "The Creational Patterns Overview section lists Builder, which separates construction from representation, as a creational design pattern.\n\nThe same section lists Factory Method, which lets subclasses decide which concrete class to instantiate, as another creational design pattern, so both options are supported and All of these is correct."
  },
  {
    id: "csc302_ch6_120",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "Which structural design pattern bridges incompatible interfaces so that classes with different APIs can work together?",
    options: [
      "Adapter",
      "Observer",
      "Strategy",
      "Builder"
    ],
    correctAnswer: 0,
    explanation: "The Structural and Behavioural Overview section defines Adapter, a structural pattern, as bridging incompatible interfaces so classes with different APIs can work together.\n\nObserver is defined in the same section as a behavioural pattern implementing a subscription model for state-change notifications, a different purpose from bridging APIs.\n\nStrategy is defined as a behavioural pattern encapsulating interchangeable algorithms, also unrelated to bridging incompatible interfaces.\n\nBuilder is a creational pattern for step-by-step object construction, covered in a separate section from structural patterns like Adapter."
  },
  {
    id: "csc302_ch6_121",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "Which behavioural pattern implements a subscription model where objects are notified automatically of state changes in other components?",
    options: [
      "Observer",
      "Adapter",
      "Singleton",
      "Factory Method"
    ],
    correctAnswer: 0,
    explanation: "The Structural and Behavioural Overview section defines Observer as a behavioural pattern implementing a subscription model where objects are notified automatically of state changes in other components.\n\nAdapter is defined instead as a structural pattern for bridging incompatible interfaces, a different purpose from subscription-based notification.\n\nSingleton is a creational pattern restricting instantiation to one instance, unrelated to notifying subscribers of state changes.\n\nFactory Method is a creational pattern for delegating instantiation decisions to subclasses, also unrelated to the subscription model described here."
  },
  {
    id: "csc302_ch6_122",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "A system needs to swap between several interchangeable sorting algorithms at runtime without changing the code that calls them. Which behavioural pattern is designed for exactly this purpose?",
    options: [
      "Strategy",
      "Observer",
      "Builder",
      "Adapter"
    ],
    correctAnswer: 0,
    explanation: "The Structural and Behavioural Overview section defines Strategy as a behavioural pattern that encapsulates a family of algorithms, making them interchangeable at runtime, matching this scenario exactly.\n\nObserver instead concerns notifying subscribers of state changes, not swapping interchangeable algorithms.\n\nBuilder is a creational pattern for step-by-step object construction, unrelated to runtime algorithm interchangeability.\n\nAdapter is a structural pattern for bridging incompatible interfaces, unrelated to swapping algorithms at runtime."
  },
  {
    id: "csc302_ch6_123",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "Which of the following is classified as a structural or behavioural design pattern rather than a creational one?",
    options: [
      "Strategy",
      "Builder",
      "All of these",
      "None of these"
    ],
    correctAnswer: 0,
    explanation: "The Structural and Behavioural Overview section classifies Strategy as a behavioural pattern, distinct from the creational category.\n\nBuilder is instead classified under the Creational Patterns Overview section, alongside Singleton and Factory Method, so it does not belong to the structural or behavioural group being asked about here."
  }
  ,
  {
    id: "csc302_ch6_124",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "Who coined the Banana-Monkey-Jungle Problem, the critique that highlights the challenges of reusing code from deep class hierarchies?",
    options: [
      "Robert C. Martin, in his SOLID design guidelines",
      "Bjarne Stroustrup, while designing C++",
      "Joe Armstrong, the creator of Erlang",
      "Alan Kay, the creator of Smalltalk"
    ],
    correctAnswer: 2,
    explanation: "The Critiques section credits Joe Armstrong, the creator of Erlang, with coining the Banana-Monkey-Jungle Problem to highlight the challenges of reusing code from deep class hierarchies.\n\nRobert C. Martin is credited elsewhere with introducing the SOLID principles, a separate contribution from Part IV.\n\nBjarne Stroustrup is credited with creating C++, unrelated to this critique of deep hierarchies.\n\nAlan Kay is credited with creating Smalltalk and emphasising messaging, a separate contribution from Part III."
  },
  {
    id: "csc302_ch6_125",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "Environmental Bloat, as described in the Banana-Monkey-Jungle critique, means reusing a class can pull in a large chain of parent classes and related dependencies.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "The Critiques section states this exact definition of Environmental Bloat, that reusing a class can pull in a large chain of parent classes and related dependencies, so the statement is true."
  },
  {
    id: "csc302_ch6_126",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "What does Pointer Chasing refer to as a source of OOP performance overhead on modern hardware?",
    options: [
      "Storing objects in arbitrary heap locations requiring multiple pointers to be resolved, causing cache misses",
      "Resolving overloaded methods at compile time using their parameter lists",
      "Following a chain of getter calls that violates the Law of Demeter",
      "Following a class hierarchy through multiple levels of inheritance to find a method"
    ],
    correctAnswer: 0,
    explanation: "The Performance Overhead and Cache Locality section defines Pointer Chasing as storing objects in arbitrary locations on the heap, which requires resolving multiple pointers and can cause CPU cache misses.\n\nResolving overloaded methods at compile time is the Method Overloading mechanism, an unrelated compile-time concept from a different section.\n\nFollowing a chain of getter calls that violates the Law of Demeter is a design-principle concept from Part IV, not a hardware-level cache concern.\n\nFollowing a class hierarchy through multiple inheritance levels to find a method is a structural concept, not the specific heap-pointer-resolution issue this section describes."
  },
  {
    id: "csc302_ch6_127",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "What causes the Memory Footprint overhead attributed to classic OOP layouts?",
    options: [
      "Bugs must be fixed in multiple duplicated places across the codebase",
      "A single copy of a static variable must be shared across every instance",
      "High coupling between distant routines increases dependency tracking costs",
      "Maintaining virtual method tables and object headers adds metadata overhead"
    ],
    correctAnswer: 3,
    explanation: "The Performance Overhead and Cache Locality section attributes Memory Footprint overhead to maintaining virtual method tables (vtables) and object headers, which adds metadata overhead and increases memory usage.\n\nBugs needing fixes in multiple duplicated places is the DRY Principle's duplication risk from Part IV, unrelated to hardware memory footprint.\n\nA single shared static variable copy is the Class Members concept from Part III, unrelated to vtable and header overhead.\n\nHigh coupling between distant routines is the Spaghetti Code symptom from Part I, unrelated to the memory-footprint overhead described here."
  },
  {
    id: "csc302_ch6_128",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "Why is iterating over arrays of pointers often much slower than processing contiguous blocks of memory, per the Lack of Data Locality critique?",
    options: [
      "Object-oriented layouts fail to keep related data physically close together in memory",
      "Interfaces prevent the compiler from ever inlining a method call",
      "Static binding requires the compiler to rebuild a lookup table on every call",
      "Encapsulation forces every field access to go through a network request"
    ],
    correctAnswer: 0,
    explanation: "The Performance Overhead and Cache Locality section frames Lack of Data Locality as OOP object layouts failing to place related data close together in memory, unlike contiguous blocks, which is why iterating over pointer arrays is often slower.\n\nInterfaces preventing method inlining is not a claim made in this section; the described issue is data placement, not inlining behaviour.\n\nStatic binding rebuilding a lookup table on every call is not accurate; static binding resolves once at compile time and is not the described locality issue.\n\nEncapsulation forcing field access through a network request is not mentioned anywhere in the source and is unrelated to memory layout."
  },
  {
    id: "csc302_ch6_129",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "In the OOP vs Functional Programming table, how is Concurrency handled under Functional Programming compared with Object-Oriented Programming?",
    options: [
      "OOP requires locks and synchronisation, while FP is thread-safe by design",
      "FP requires locks and synchronisation, while OOP is thread-safe by design",
      "Both paradigms require identical locking strategies for concurrency",
      "Neither paradigm addresses concurrency in the comparison"
    ],
    correctAnswer: 0,
    explanation: "The Table OOP vs Functional Programming lists Concurrency as requiring locks and synchronisation under OOP, versus being thread-safe by design under FP.\n\nReversing which paradigm needs locks and which is thread-safe by design contradicts the table's actual rows.\n\nClaiming both require identical locking strategies ignores the table's explicit contrast between the two paradigms on this dimension.\n\nClaiming neither addresses concurrency ignores the table's dedicated Concurrency row, which directly compares the two paradigms."
  },
  {
    id: "csc302_ch6_130",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "Which of the following describes the State dimension of Object-Oriented Programming in the OOP vs FP comparison table?",
    options: [
      "Completely immutable",
      "Thread-safe by design",
      "All of these",
      "None of these"
    ],
    correctAnswer: 3,
    explanation: "The Table OOP vs Functional Programming lists OOP's State dimension as Managed mutation, not Completely immutable, which the table instead assigns to FP's State row, so this option is contradicted for OOP.\n\nThread-safe by design is the table's description of FP's Concurrency dimension, not OOP's State dimension, so it is also contradicted, making None of these correct."
  },
  {
    id: "csc302_ch6_131",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "In the hybrid OOP-FP synthesis approach, what role do classes and interfaces play, per the OOP for Architecture guidance?",
    options: [
      "They define high-level modules, system boundaries, and architectural layers",
      "They process data reliably using map, filter, and reduce inside methods",
      "They remove the need for mutable state in the system",
      "They replace the need for functional features such as lambdas"
    ],
    correctAnswer: 0,
    explanation: "The Hybrid Approach section states that OOP for Architecture means using classes and interfaces to define high-level modules, system boundaries, and architectural layers.\n\nProcessing data with map, filter, and reduce inside methods is the FP for Execution guidance in the same section, a distinct role from architecture.\n\nRemoving the need for mutable state overstates the hybrid approach, which combines OOP structures with functional operations rather than banning mutation.\n\nReplacing functional features such as lambdas contradicts the hybrid approach, which explicitly retains functional features for execution rather than eliminating them."
  },
  {
    id: "csc302_ch6_132",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "What functional features does the hybrid approach recommend using inside methods to process data reliably?",
    options: [
      "Interfaces defining a pure behavioural contract with no implementation",
      "Access modifiers restricting visibility to the declaring class",
      "Static variables shared across every instance of a class",
      "Map, filter, reduce, lambdas, and immutability"
    ],
    correctAnswer: 3,
    explanation: "The Hybrid Approach section states that FP for Execution means using functional features like map, filter, reduce, lambdas, and immutability inside methods to process data reliably.\n\nInterfaces defining a pure behavioural contract are an abstraction-era construct, not one of the functional execution features listed here.\n\nAccess modifiers restricting visibility to the declaring class describe the private modifier, an encapsulation concept unrelated to functional data processing.\n\nStatic variables shared across instances are a class-member concept from Part III, unrelated to the functional features listed for execution."
  },
  {
    id: "csc302_ch6_133",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "What does Data-Oriented Design (DoD) prioritise over semantic taxonomies when organising a program?",
    options: [
      "Memory layout that matches CPU memory caching patterns",
      "A deep class hierarchy that mirrors real-world relationships",
      "A single global instance shared across the entire application",
      "A pure behavioural contract implemented by every concrete class"
    ],
    correctAnswer: 0,
    explanation: "The Data-Oriented Design section states that DoD focuses on memory layout rather than semantic taxonomies, organising data to match CPU memory caching patterns rather than modelling real-world semantics.\n\nA deep class hierarchy mirroring real-world relationships is closer to the classic OOP taxonomy DoD moves away from, not what DoD itself prioritises.\n\nA single global shared instance describes the Singleton pattern, an unrelated creational-pattern concept.\n\nA pure behavioural contract implemented by every concrete class describes an interface, unrelated to DoD's memory-layout focus."
  },
  {
    id: "csc302_ch6_134",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "Instead of storing an array of object instances, the Structure of Arrays (SoA) technique stores what to improve memory performance?",
    options: [
      "Separate, parallel arrays for each attribute",
      "A single linked list of every object's combined state",
      "A virtual method table shared by every object in the array",
      "One static variable representing the entire collection"
    ],
    correctAnswer: 0,
    explanation: "The Data-Oriented Design section defines Structure of Arrays (SoA) as storing separate, parallel arrays for each attribute instead of an array of object instances, to improve memory performance.\n\nA single linked list combining every object's state is not the technique described; SoA specifically separates data into parallel arrays per attribute, not into a linked structure.\n\nA shared virtual method table is a run-time polymorphism concept unrelated to how SoA organises attribute data.\n\nOne static variable representing an entire collection contradicts SoA's use of separate arrays, one per attribute, rather than a single shared variable."
  },
  {
    id: "csc302_ch6_135",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "Which of the following is a described direction for the future of object-oriented software engineering?",
    options: [
      "Moving toward deeper inheritance hierarchies to model every real-world relationship",
      "Returning to relying on global variables accessible from anywhere in the program",
      "All of these",
      "None of these"
    ],
    correctAnswer: 3,
    explanation: "The Future of Object-Oriented Software Engineering section contradicts moving toward deeper inheritance hierarchies, stating instead that the industry is moving away from deep inheritance hierarchies toward composition-based architectures.\n\nReturning to globally accessible variables is not a described future direction either; that Global State property belongs to the pre-OOP monolithic era the deck presents as a past problem, not a forward direction, so None of these is correct."
  },
  {
    id: "csc302_ch6_136",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "What does the Simpler Typologies trend describe about the industry's direction away from deep inheritance hierarchies?",
    options: [
      "A preference for composition-based architectures instead",
      "A requirement that every class inherit from at least three parents",
      "A return to monolithic, linear blocks of machine code",
      "A ban on using interfaces anywhere in a modern codebase"
    ],
    correctAnswer: 0,
    explanation: "The Future of Object-Oriented Software Engineering section describes Simpler Typologies as the industry moving away from deep inheritance hierarchies, preferring composition-based architectures instead.\n\nRequiring every class to inherit from at least three parents is the opposite of moving away from deep hierarchies and is not stated anywhere in the source.\n\nA return to monolithic, linear machine code describes the pre-OOP era from Part I, not a future direction for OOP.\n\nBanning interfaces contradicts composition-based architectures, which typically rely on interfaces to define composed behaviour."
  },
  {
    id: "csc302_ch6_137",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "Which core pillars help developers organise complex codebases under Structured Complexity?",
    options: [
      "Data-Oriented Design and the Law of Demeter",
      "The Software Crisis and the Diamond Problem",
      "Encapsulation, abstraction, inheritance, and polymorphism",
      "Simula and Smalltalk"
    ],
    correctAnswer: 2,
    explanation: "The Summary and Concluding Remarks section credits Structured Complexity to the core pillars of encapsulation, abstraction, inheritance, and polymorphism helping developers organise complex codebases.\n\nData-Oriented Design and the Law of Demeter are separate concepts discussed elsewhere, not the pillars named under Structured Complexity in the summary.\n\nThe Software Crisis and the Diamond Problem are historical and structural problems discussed earlier in the deck, not the pillars credited with organising complexity in the summary.\n\nSimula and Smalltalk are pioneering languages from Part V, not the four pillars the summary credits with structuring complexity."
  },
  {
    id: "csc302_ch6_138",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "What does Pragmatic Engineering, as described in the concluding remarks, say high-quality software design relies on?",
    options: [
      "Applying SOLID principles and choosing composition over inheritance where appropriate",
      "Applying the Single Responsibility Principle while setting aside the remaining SOLID letters",
      "Choosing deep inheritance hierarchies over composition as the general design preference",
      "Avoiding functional programming techniques in modern development"
    ],
    correctAnswer: 0,
    explanation: "The Summary and Concluding Remarks section states that Pragmatic Engineering means high-quality software design relies on applying SOLID principles and choosing composition over inheritance where appropriate.\n\nApplying only the Single Responsibility Principle while setting aside the rest misrepresents the summary, which credits the full set of SOLID principles, not just one letter.\n\nPreferring deep inheritance over composition directly contradicts the summary's guidance to choose composition over inheritance where appropriate.\n\nAvoiding functional programming contradicts the summary's Ongoing Evolution point, which describes combining OOP's strengths with functional techniques."
  },
  {
    id: "csc302_ch6_139",
    course: "CSC 302",
    chapter: "Chapter 6",
    text: "What does Ongoing Evolution mean in the concluding remarks about modern software development?",
    options: [
      "It is increasingly multi-paradigm, combining OOP's architectural strengths with functional techniques",
      "It is abandoning object-oriented programming in favour of purely functional systems",
      "It is returning to procedural, top-down decomposition for new systems",
      "It has settled on a single fixed paradigm with no further change expected"
    ],
    correctAnswer: 0,
    explanation: "The Summary and Concluding Remarks section states that Ongoing Evolution means modern software development is increasingly multi-paradigm, combining the architectural strengths of OOP with functional techniques.\n\nAbandoning OOP for purely functional systems overstates the summary, which describes combining OOP with FP rather than replacing it outright.\n\nReturning to procedural, top-down decomposition contradicts the summary's forward-looking, multi-paradigm framing and ignores OOP's continued architectural role.\n\nClaiming the field has settled on one fixed paradigm contradicts the very idea of ongoing evolution the section describes."
  }
];

export default csc302Chapter6Questions;
