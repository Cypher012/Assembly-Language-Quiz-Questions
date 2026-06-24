import { QuestionV2 } from "@/lib/quiz-types";

const csc302Module5: QuestionV2[] = [
  {
    id: "csc302_ch5_001",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "According to the presentation, why is domain modelling particularly crucial for enterprise software architectures?",
    options: [
      "It completely eliminates the need for establishing concurrent multithreading environments.",
      "It automatically translates legacy procedural code into modern object-oriented structures.",
      "It simplifies software creation by mapping complex business logic into abstract components.",
      "It ensures relational database management systems remain perfectly synchronized globally.",
    ],
    correctAnswer: 2,
    explanation:
      "The slides state that in enterprise architectures, business logic is complex, and modeling abstract business domains simplifies software creation.",
  },
  {
    id: "csc302_ch5_002",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "In financial banking systems, what role does a base `BankAccount` class play in an inheritance hierarchy?",
    options: [
      "It continuously generates independent asynchronous threads for every transaction.",
      "It encapsulates common attributes like account numbers and balances universally.",
      "It executes dynamic database queries to validate customer identities securely.",
      "It forcefully restricts network requests coming from unauthenticated web clients.",
    ],
    correctAnswer: 1,
    explanation:
      "The slides note that inheritance models distinct financial accounts under a unified base representation, where the Base Class (BankAccount) encapsulates common attributes like accountNumber and balance.",
  },
  {
    id: "csc302_ch5_003",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Given the following code:\n\n```java\npublic abstract class BankAccount {\n    protected double balance;\n    public abstract void processMonthlyFee();\n    public void deposit(double amt) { balance += amt; }\n}\npublic class SavingsAccount extends BankAccount {\n    public void processMonthlyFee() { \n        balance -= 2.0; \n    }\n}\n```\n\nWhat architectural requirement does the abstract `BankAccount` class enforce on `SavingsAccount`?",
    options: [
      "It requires the subclass to completely override the default deposit execution logic.",
      "It prevents the subclass from accessing the protected double balance state variable.",
      "It mandates that the subclass must utilize a singleton instance for object creation.",
      "It forces the subclass to implement its own specific monthly fee processing behavior.",
    ],
    correctAnswer: 3,
    explanation:
      "Because `processMonthlyFee()` is declared as an abstract method in the `BankAccount` parent class, the `SavingsAccount` subclass is forced to provide its own concrete implementation.",
  },
  {
    id: "csc302_ch5_004",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Polymorphism allows enterprise systems to process lists of generic BankAccount objects, executing distinct withdrawal rules dynamically based on the underlying subclass.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0, // True
    explanation:
      "The slides highlight that polymorphism allows a system to process lists of generic BankAccount objects. A single method call to withdraw() executes distinct rules dynamically based on the underlying subclass.",
  },
  {
    id: "csc302_ch5_005",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "How do Enterprise Resource Planning (ERP) systems utilize Object-Oriented interfaces to manage separate modules like HR and Finance?",
    options: [
      "Interfaces define strict communication boundaries preventing subsystems from breaking easily.",
      "Interfaces mandate that all subsystems execute continuously on a singular centralized thread.",
      "Interfaces bypass traditional compilation steps to allow for real-time polymorphic mutations.",
      "Interfaces tightly couple the modules together to guarantee instantaneous memory sharing.",
    ],
    correctAnswer: 0,
    explanation:
      "ERP subsystems isolate functionality to prevent failures in one area from crashing the entire system. OOP interfaces define strict communication boundaries between these modules.",
  },
  {
    id: "csc302_ch5_006",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "In ERP architectures, which Object-Oriented concept safely injects dependent service classes into operational modules at runtime?",
    options: [
      "Automated Garbage Collection Pipelines.",
      "Recursive Polymorphic Instantiation.",
      "Dependency Injection Configurations.",
      "Static Functional Compilation Trees.",
    ],
    correctAnswer: 2,
    explanation:
      "The slides state that Dependency Injection is used in ERP software to dynamically pass service instances into modules at runtime, allowing implementations to be swapped without rewriting core business logic.",
  },
  {
    id: "csc302_ch5_007",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "How does an E-commerce shopping cart effectively leverage standard Object-Oriented principles during an active user session?",
    options: [
      "It strictly functions as a raw memory array directly accessible by external clients.",
      "It acts as a static functional pipeline rapidly discarding data after processing.",
      "It establishes a rigid structural interface preventing dynamic runtime state updates.",
      "It behaves as a stateful object maintaining session variables and calculated totals.",
    ],
    correctAnswer: 3,
    explanation:
      "According to the presentation, the shopping cart behaves as a Stateful Object maintaining essential session data, such as items, quantities, and calculated totals, throughout the session.",
  },
  {
    id: "csc302_ch5_008",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "How do Order processing systems in E-Commerce platforms commonly manage complex status transitions like moving from Pending to Shipped?",
    options: [
      "By rapidly implementing the Structural Composite Pattern to group the states into a rigid binary tree.",
      "By permanently locking the associated backend databases using the Creational Abstract Factory Pattern.",
      "By safely utilizing the Behavioral State Pattern to dynamically alter the operational behavior of the order.",
      "By strictly relying upon deep recursive functional pipelines that completely discard active user session data.",
    ],
    correctAnswer: 2,
    explanation:
      "Order objects use the State Pattern to handle complex transitions (e.g., Pending to Paid to Shipped) safely, allowing the object's behavior to change as its internal state changes.",
  },
  {
    id: "csc302_ch5_009",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Given the following code:\n\n```java\npublic interface PaymentGateway {\n    void processPayment(double amount);\n}\npublic class StripeGateway implements PaymentGateway {\n    public void processPayment(double amount) { /* Stripe logic */ }\n}\n```\n\nWhy is an interface used to represent the PaymentGateway in this design?",
    options: [
      "It forces the system to execute payments sequentially on a single thread.",
      "It abstracts payment processing so different vendors can be swapped easily.",
      "It dynamically optimizes the processing speed of the underlying hardware.",
      "It prevents internal memory leaks during highly concurrent transactions.",
    ],
    correctAnswer: 1,
    explanation:
      "E-commerce platforms use interfaces to abstract payment processing. This ensures that different implementations, like Stripe or PayPal, can be swapped seamlessly without altering core logic.",
  },
  {
    id: "csc302_ch5_010",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "In Customer Relationship Management (CRM) systems, what is the primary purpose of utilizing Data Transfer Objects (DTOs)?",
    options: [
      "They permanently store relational data queries within local hardware storage caches.",
      "They dynamically recompile procedural execution logic during active system sessions.",
      "They safely pass complex encapsulated client information across network boundaries.",
      "They forcibly override standard access modifiers to manipulate private user schemas.",
    ],
    correctAnswer: 2,
    explanation:
      "CRM platforms utilize Data Transfer Objects (DTOs) specifically to pass complex encapsulated client information securely and efficiently across network boundaries.",
  },
  {
    id: "csc302_ch5_011",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Which historical application domain is widely considered the canonical origin case for Object-Oriented Programming and Smalltalk?",
    options: [
      "High-frequency algorithmic trading platforms requiring instantaneous network socket processing.",
      "Graphical User Interfaces featuring overlapping windows, buttons, and interactive visual components.",
      "Deeply nested relational database management systems operating on distributed server clusters.",
      "Scientific telemetry parsing arrays broadcasting complex geospatial atmospheric weather data.",
    ],
    correctAnswer: 1,
    explanation:
      "The slides denote Graphical User Interfaces (GUIs) as the canonical OOP use case, noting that Smalltalk was heavily driven by the need to model overlapping windows and buttons.",
  },
  {
    id: "csc302_ch5_012",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: 'Given the following code:\n\n```java\npublic abstract class GUIComponent {\n    protected int x, y;\n    public abstract void draw();\n}\npublic class TextField extends GUIComponent {\n    public void draw() { System.out.println("Drawing TextField at " + x + "," + y); }\n}\n```\n\nWhat role does the `draw()` method play in this GUI hierarchy?',
    options: [
      "It establishes a polymorphic contract requiring visual components to render themselves.",
      "It establishes an inflexible static configuration preventing runtime interface rendering.",
      "It establishes a secure memory boundary stopping child classes from accessing coordinates.",
      "It establishes a concurrent processing loop handling external hardware mouse click events.",
    ],
    correctAnswer: 0,
    explanation:
      "The abstract `draw()` method defines a polymorphic contract. It ensures that any concrete child class extending `GUIComponent`, like `TextField`, implements its own specific rendering logic.",
  },
  {
    id: "csc302_ch5_013",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Modern Graphical User Interface (GUI) frameworks implement event listeners for user interactions primarily by relying on which design pattern?",
    options: [
      "The Creational Prototype Pattern rapidly duplicating active states.",
      "The Structural Composite Pattern organizing rigid visual boundaries.",
      "The Structural Decorator Pattern forcefully wrapping rendering trees.",
      "The Behavioral Observer Pattern awaiting specific triggered changes.",
    ],
    correctAnswer: 3,
    explanation:
      "Modern GUI frameworks rely heavily on the Observer Pattern. Event listeners allow specific logical functions to observe visual components and react when a triggered change (like a click) occurs.",
  },
  {
    id: "csc302_ch5_014",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "How do GUI layout managers utilize the Composite Design Pattern to handle visual screens?",
    options: [
      "By randomly delegating render instructions to independently executing background service workers.",
      "By safely intercepting and encrypting raw keyboard inputs before processing interactive elements.",
      "By treating individual widget controls and complex container panels identically during rendering loops.",
      "By dynamically generating customized factory methods for every individual operating system visual theme.",
    ],
    correctAnswer: 2,
    explanation:
      "Layout managers use the Composite Pattern to treat individual widgets (like buttons) and complex containers (like panels) uniformly, allowing them to be nested infinitely.",
  },
  {
    id: "csc302_ch5_015",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "In the Model-View-Controller (MVC) architecture, what is the specific responsibility of the Controller component?",
    options: [
      "It securely processes all backend relational database administration query statements.",
      "It directly handles user input events and safely translates them into logical operations.",
      "It permanently archives the visual pixel configurations onto the hard drive structure.",
      "It actively paints the standardized graphical shapes and boundaries directly onto the UI.",
    ],
    correctAnswer: 1,
    explanation:
      "The Controller in the MVC architecture is responsible for handling user input events and translating those actions into corresponding logical operations on the Model.",
  },
  {
    id: "csc302_ch5_016",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "In Game Engine development, how does Object-Oriented Programming model entities like characters, weapons, or vehicles?",
    options: [
      "As isolated static functions processing generic memory structures synchronously.",
      "As temporary procedural scripts executed exclusively during initial startup sequences.",
      "As discrete software objects maintaining independent states such as health and velocity.",
      "As deeply integrated hardware threads interacting directly with computer processing cores.",
    ],
    correctAnswer: 2,
    explanation:
      "In game architectures, discrete elements like characters, weapons, and vehicles are modeled as distinct objects, each maintaining independent internal states like health or velocity.",
  },
  {
    id: "csc302_ch5_017",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "How does a central game loop use polymorphism to manage active gameplay elements?",
    options: [
      "It sequentially iterates through lists of generic game objects to execute unique rendering and update behaviors.",
      "It securely forces network packets to synchronize identically across distributed gameplay server clients.",
      "It permanently stores procedural character movement rules inside unchangeable foundational class structures.",
      "It actively rewrites the underlying graphics hardware shader instructions during runtime compilation phases.",
    ],
    correctAnswer: 0,
    explanation:
      "A central game loop iterates over a collection of abstract game objects, calling methods like `update()` and `render()` polymorphically, allowing each entity to process its unique behavior.",
  },
  {
    id: "csc302_ch5_018",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Why do modern game architectures like Unity's Entity-Component-System (ECS) prefer Composition over Inheritance?",
    options: [
      "Because static component architectures completely eliminate the requirement for system memory limits.",
      "Because compositional rendering pipelines perfectly process complex multidimensional graphic shaders.",
      "Because deep inheritance hierarchies become extremely rigid when combining mixed entity behaviors.",
      "Because relational databases natively support component hierarchies better than traditional data structures.",
    ],
    correctAnswer: 2,
    explanation:
      "ECS moves away from deep inheritance because combining behaviors through rigid class hierarchies becomes unmanageable. Composition allows behaviors to be attached to entities dynamically.",
  },
  {
    id: "csc302_ch5_019",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "In physics engines, discrete objects encapsulate properties like mass and bounding boxes to resolve collisions independently.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0, // True
    explanation:
      "The slides confirm that physics engines model objects encapsulating physical properties—such as mass and bounding boxes—to resolve independent collision states accurately.",
  },
  {
    id: "csc302_ch5_020",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Which design pattern is frequently used in gaming to rapidly spawn identical enemies by copying a baseline template?",
    options: [
      "The Singleton Pattern managing global spawn variables continuously.",
      "The Composite Pattern combining structural object trees sequentially.",
      "The Adapter Pattern modifying structural behavior interfaces rapidly.",
      "The Prototype Pattern dynamically cloning existing object instances.",
    ],
    correctAnswer: 3,
    explanation:
      "The Prototype Pattern is utilized to rapidly spawn identical entities (like enemies or projectiles) by directly cloning a pre-configured baseline template object.",
  },
  {
    id: "csc302_ch5_021",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "How do operating systems utilize Object-Oriented principles to manage complex underlying hardware resources?",
    options: [
      "By strictly avoiding all polymorphic structures to guarantee absolute minimum latency processing.",
      "By directly exposing all raw memory registers globally to allow unrestricted user program access.",
      "By hiding intricate hardware allocation algorithms behind standardized abstract component interfaces.",
      "By heavily relying on pure functional paradigms to continuously transform physical machine states.",
    ],
    correctAnswer: 2,
    explanation:
      "Operating systems leverage OOP by hiding complex, intricate hardware operations (such as memory mapping) behind clean, standardized abstract interfaces.",
  },
  {
    id: "csc302_ch5_022",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Operating systems define standard I/O interfaces, allowing different hardware vendors to provide polymorphic device driver implementations.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0, // True
    explanation:
      "The presentation explicitly notes that operating systems define standard interfaces for hardware, permitting distinct vendors to provide polymorphic device driver implementations.",
  },
  {
    id: "csc302_ch5_023",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Given the following system architecture code:\n\n```java\npublic abstract class NetworkSocket {\n    public abstract void connect(String ip, int port);\n}\npublic class TCPSocket extends NetworkSocket {\n    public void connect(String ip, int port) { /* TCP handshake */ }\n}\npublic class UDPSocket extends NetworkSocket {\n    public void connect(String ip, int port) { /* UDP datagram */ }\n}\n```\n\nWhat is the primary benefit of defining `NetworkSocket` as an abstract parent class in this context?",
    options: [
      "It requires applications to directly manage raw hardware voltage transmissions securely.",
      "It allows networking software to establish connections without knowing the specific transport layer.",
      "It forces the network protocol subclasses to abandon object-oriented memory encapsulation.",
      "It strictly prevents developers from allocating dynamic heap memory during network communication.",
    ],
    correctAnswer: 1,
    explanation:
      "By defining `NetworkSocket` as abstract, applications can establish network connections using standard generic methods without needing to manage the precise transport layer details (TCP vs. UDP).",
  },
  {
    id: "csc302_ch5_024",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Which structural design pattern naturally represents the hierarchical nature of file systems involving nested directories and files?",
    options: [
      "The Observer Pattern coordinating internal events.",
      "The Decorator Pattern wrapping file encryptions.",
      "The Composite Pattern modeling part-whole trees.",
      "The Singleton Pattern maintaining static instances.",
    ],
    correctAnswer: 2,
    explanation:
      "Operating system file architectures heavily utilize the Composite pattern to intuitively represent the hierarchical nature of part-whole structures, combining individual files and nested directories.",
  },
  {
    id: "csc302_ch5_025",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "In asynchronous input/output programming, how are callback functions commonly encapsulated to prevent blocking operations?",
    options: [
      "They are securely encapsulated inside statically compiled operational database arrays.",
      "They are logically encapsulated as Future or Promise objects tracking request states.",
      "They are permanently written into deeply nested structural hardware configurations.",
      "They are actively executed sequentially via standardized linear procedural pipelines.",
    ],
    correctAnswer: 1,
    explanation:
      "Objects often encapsulate asynchronous callback functions as Promises or Futures, allowing systems to manage input/output request states without blocking main execution threads.",
  },
  {
    id: "csc302_ch5_026",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Because database connections are resource-intensive to construct, which OOP pattern is typically employed to share a restricted set of them?",
    options: [
      "The Builder Pattern managing complex step-by-step constructions.",
      "The Strategy Pattern dynamically swapping operational algorithms.",
      "The Object Pool or Singleton pattern managing shared instances.",
      "The Observer Pattern generating independent execution pipelines.",
    ],
    correctAnswer: 2,
    explanation:
      "Database connections utilize the Object Pool (often implemented alongside the Singleton pattern) to manage a shared pool of restricted, expensive instantiations safely.",
  },
  {
    id: "csc302_ch5_027",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Because spatial structures like buildings, floors, and rooms are highly dynamic, Computer-Aided Design (CAD) software strictly avoids using OOP hierarchical modeling.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1, // False
    explanation:
      "The slides illustrate that OOP is ideal for managing spatial hierarchies within CAD software, naturally representing relationships such as a building containing floors, which in turn contain rooms.",
  },
  {
    id: "csc302_ch5_028",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "How does a vector graphics editor effectively process diverse geometry collections containing circles, rectangles, and polygons?",
    options: [
      "By compiling every unique shape individually into separate standalone hardware execution binaries.",
      "By permanently converting all geometric configurations into highly compressed linear text descriptions.",
      "By utilizing structural interfaces to polymorphically execute generic operations like render and scale.",
      "By mandating that all shapes implement purely functional pipelines completely avoiding state variables.",
    ],
    correctAnswer: 2,
    explanation:
      "Vector graphics systems rely on polymorphism to process collections of shapes uniformly, calling standardized generic operations like `render()` or `scale()` across different geometric instances.",
  },
  {
    id: "csc302_ch5_029",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "How does Object-Oriented Programming simplify mathematical modeling for complex structures like Matrices or Vectors?",
    options: [
      "It permanently restricts complex calculations to execution within tightly controlled centralized singleton architectures.",
      "It securely encapsulates complex mathematical states while overloading standard operators to maintain code readability.",
      "It dynamically generates standalone procedural algorithms to randomly process unrelated dimensional array properties.",
      "It totally eliminates the requirement for variables by substituting them with functional mathematical lambda expressions.",
    ],
    correctAnswer: 1,
    explanation:
      "OOP encapsulates mathematical entities like matrices and vectors as distinct objects, and allows for operator overloading to maintain clear and intuitive code readability during calculations.",
  },
  {
    id: "csc302_ch5_030",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "In aerospace telemetry and IoT infrastructures, how is OOP utilized to model distinct physical hardware sensors?",
    options: [
      "As distinct independent software objects continuously maintaining states and emitting formatted data.",
      "As temporary structural scripts that entirely recompile their functionality upon every execution cycle.",
      "As singular centralized monolithic functions processing all raw environmental inputs simultaneously.",
      "As purely mathematical abstractions designed exclusively to calculate hypothetical atmospheric metrics.",
    ],
    correctAnswer: 0,
    explanation:
      "Telemetry and IoT systems use OOP to model individual physical sensors as distinct software objects that independently maintain their operational state and emit data streams.",
  },
  {
    id: "csc302_ch5_031",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Telemetry dashboard interfaces generally utilize the Strategy Pattern to push real-time sensor state changes to graphical UI elements.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1, // False
    explanation:
      "This statement is False. Telemetry dashboards rely on the Observer Pattern—not the Strategy Pattern—to push real-time sensor state changes to user interface components asynchronously.",
  },
  {
    id: "csc302_ch5_032",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "What defines the structure of Agent-Based Modeling in fields such as epidemiology or advanced traffic simulations?",
    options: [
      "Compiling complete environmental scenarios into singular unchangeable mathematical arrays executing procedurally.",
      "Utilizing highly normalized relational database architectures to mathematically predict global ecosystem permutations.",
      "Simulating populations by treating every single entity as an encapsulated object executing localized behavioral rules.",
      "Abandoning structured software object models entirely in favor of unconstrained continuous functional data pipelines.",
    ],
    correctAnswer: 2,
    explanation:
      "Agent-based modeling represents individuals (like vehicles in traffic or people in epidemiology) as encapsulated objects, each executing unique, localized behavioral rules.",
  },
  {
    id: "csc302_ch5_033",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "The Strategy Design Pattern is particularly useful in enterprise software because it accomplishes which architectural goal?",
    options: [
      "It ensures all internal algorithms are compiled securely into completely unchangeable binary core files.",
      "It establishes a static relational database table capable of logging every single application transaction.",
      "It permanently modifies the underlying graphical user interface whenever operational processes complete.",
      "It encapsulates a distinct family of algorithms making them fully interchangeable without altering clients.",
    ],
    correctAnswer: 3,
    explanation:
      "The Strategy Pattern defines a family of algorithms, encapsulates each one, and makes them dynamically interchangeable at runtime without requiring modifications to the client code.",
  },
  {
    id: "csc302_ch5_034",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "The Factory Method pattern requires client classes to explicitly hardcode and manage the exact concrete subclasses they wish to instantiate.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1, // False (Flipped to False to achieve 5 True / 4 False)
    explanation:
      "The slides confirm that the Factory Method successfully abstracts object creation, allowing systems to request and instantiate objects without knowing or hardcoding the exact concrete class.",
  },
  {
    id: "csc302_ch5_035",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Why is the Adapter Design Pattern frequently employed during the integration of legacy enterprise banking systems?",
    options: [
      "Because it effectively rewrites outdated procedural system architectures into heavily normalized database structures.",
      "Because it securely translates obsolete and incompatible software interfaces into modern expected target structures.",
      "Because it successfully manages the automated asynchronous garbage collection cycles required by banking software.",
      "Because it continuously prevents unauthorized database access by deploying dynamic encapsulated firewall objects.",
    ],
    correctAnswer: 1,
    explanation:
      "The Adapter Pattern is extensively used to translate legacy, incompatible interfaces into the modern target structures that new enterprise clients expect during integration.",
  },
  {
    id: "csc302_ch5_036",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Given the following factory code structure:\n\n```java\npublic abstract class VehicleFactory {\n    public abstract Vehicle createVehicle();\n}\npublic class CarFactory extends VehicleFactory {\n    public Vehicle createVehicle() { return new Car(); }\n}\n```\n\nWhat structural advantage does `VehicleFactory` provide to the broader system architecture?",
    options: [
      "It requires the application to aggressively track all garbage collection cycles occurring within memory.",
      "It forces the developers to completely bypass traditional constructor logic for performance optimization.",
      "It allows the system to securely request new vehicle objects without knowing the exact concrete classes.",
      "It seamlessly guarantees that vehicle processing happens asynchronously across separate hardware threads.",
    ],
    correctAnswer: 2,
    explanation:
      "The Factory Method provides the structural advantage of abstracting creation logic. The system can request `VehicleFactory` to build a vehicle without needing to know that `Car` is the exact class instantiated.",
  },
  {
    id: "csc302_ch5_037",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "If an engineer needs to dynamically add encryption capabilities to a network stream without subclassing, which pattern applies?",
    options: [
      "The Decorator Pattern wrapping objects with new behaviors.",
      "The Observer Pattern coordinating internal subscriber events.",
      "The Strategy Pattern algorithmically swapping state protocols.",
      "The Composite Pattern grouping hierarchical tree collections.",
    ],
    correctAnswer: 0,
    explanation:
      "The Decorator Pattern is applied specifically to dynamically add additional responsibilities—such as logging or data encryption—to an existing object (like a network stream) at runtime.",
  },
  {
    id: "csc302_ch5_038",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "According to the presentation, Data-Oriented Design (DOD) outperforms OOP in high-performance engines because DOD prioritizes what?",
    options: [
      "Unrestricted global access modifiers and complex hierarchical structures.",
      "Automatic memory reclamation pipelines and virtual runtime environments.",
      "Asynchronous network socket integrations utilizing dynamic thread pooling.",
      "Raw memory layouts and contiguous cache locality for rapid data processing.",
    ],
    correctAnswer: 3,
    explanation:
      "The slides state that Data-Oriented Design is necessary for high-performance engines because it prioritizes cache locality and raw memory layouts, which object scattering often disrupts.",
  },
  {
    id: "csc302_ch5_039",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "The presentation asserts that Functional Programming is often better suited than OOP for pure data transformations and highly concurrent pipelines.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0, // True
    explanation:
      "The slides explicitly state that Functional Programming is better suited for scenarios requiring pure data transformations, mathematical calculations, and highly concurrent execution pipelines.",
  },
  {
    id: "csc302_ch5_040",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "The presentation concludes that Object-Oriented Programming remains a highly effective architectural tool specifically when dealing with what?",
    options: [
      "Environments completely defined by unchangeable arrays requiring extremely rapid mathematical calculation.",
      "Complex architectures that significantly benefit from modeling distinct encapsulated structural components.",
      "Purely functional processing pipelines explicitly designed to completely ignore local operational states.",
      "Legacy systems operating on archaic hardware strictly lacking automated garbage collection capabilities.",
    ],
    correctAnswer: 1,
    explanation:
      "The conclusion states that OOP remains highly effective when applied pragmatically to applications that fundamentally benefit from modeling real-world structural components, like GUIs and business systems.",
  },
  {
    id: "csc302_ch5_041",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "How does the application of Domain Modelling assist enterprise development teams handling massive scale projects?",
    options: [
      "It restricts large teams from simultaneously committing redundant codebase alterations.",
      "It forces software architects to permanently rely upon procedural scripting paradigms.",
      "It isolates distinct workflows allowing separate teams to work on abstract boundaries.",
      "It strictly prohibits the integration of external network applications into local modules.",
    ],
    correctAnswer: 2,
    explanation:
      "Domain Modelling supports large-scale modularity by dividing complex business logic into distinct domains, allowing large teams to work safely on isolated development boundaries.",
  },
  {
    id: "csc302_ch5_042",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "When an E-Commerce Order object transitions from 'Pending' to 'Paid,' the State Pattern allows it to do what?",
    options: [
      "Immediately delete all associated structural memory to maximize system performance efficiency dynamically.",
      "Securely trigger an automatic hardware reboot across all interconnected distributed processing mainframes.",
      "Completely alter its internal behavior dynamically as if it had transitioned into an entirely different class.",
      "Permanently lock all underlying relational databases to prevent any asynchronous transactional modifications.",
    ],
    correctAnswer: 2,
    explanation:
      "The Behavioral State Pattern allows an object, like an Order, to completely alter its internal execution behavior dynamically based on its state transitions, effectively mimicking a class change.",
  },
  {
    id: "csc302_ch5_043",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "An E-commerce shopping cart is a classic example of a stateless system component that completely resets after every single page interaction.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1, // False
    explanation:
      "This is False. The presentation explains that a shopping cart is a classic example of a stateful object maintaining session variables throughout the user's ongoing interaction.",
  },
  {
    id: "csc302_ch5_044",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "In GUI architectures, how do Event Listeners practically implement the underlying Observer Design Pattern?",
    options: [
      "By statically polling the graphical interface continuously in an infinite blocking processing cycle.",
      "By actively subscribing logic functions to specific visual components waiting for user trigger actions.",
      "By permanently transforming interactive buttons into completely static background rendering elements.",
      "By immediately rewriting the operating system kernel handling logic whenever a mouse click happens.",
    ],
    correctAnswer: 1,
    explanation:
      "Event Listeners implement the Observer pattern by dynamically subscribing logic to interface components, executing only when specific visual trigger events (like a button click) occur.",
  },
  {
    id: "csc302_ch5_045",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "The MVC pattern enforces strict architectural separation to ensure that visual representation logic does not directly interfere with what?",
    options: [
      "The underlying logical business state and constraints.",
      "The hardware graphics processing unit configuration.",
      "The asynchronous network communications protocols.",
      "The operating system file administration architecture.",
    ],
    correctAnswer: 0,
    explanation:
      "MVC ensures separation of concerns by preventing the visual elements (View) and the user input handler (Controller) from inextricably tangling with the core logical business state (Model).",
  },
  {
    id: "csc302_ch5_046",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "What describes the fundamental role of an abstract `GameObject` class in a conventional interactive simulation engine?",
    options: [
      "It permanently restricts child objects from interacting with the environmental physical boundaries.",
      "It serves as a static mathematical parser completely ignoring local memory operational boundaries.",
      "It defines standard behavioral contracts like updating logic and rendering visuals for all child instances.",
      "It forcibly compiles individual graphical rendering algorithms into secure independent binary modules.",
    ],
    correctAnswer: 2,
    explanation:
      "An abstract GameObject establishes the fundamental contract for a game engine, ensuring that all entities implement essential capabilities like an update loop and a visual rendering method.",
  },
  {
    id: "csc302_ch5_047",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "How do Object-Oriented principles benefit applications needing to transmit data over diverse network protocols like TCP or UDP?",
    options: [
      "By strictly enforcing that every network packet includes an encapsulated graphical payload element.",
      "By totally eliminating network latency through specialized automated polymorphic compiling routines.",
      "By abstracting transport layers so applications simply call generic network communication methods.",
      "By bypassing traditional operating system network stacks to directly manipulate hardware switches.",
    ],
    correctAnswer: 2,
    explanation:
      "Networking architectures use OOP to abstract away the intricate transport layer details. Applications only need to call generic methods on abstract socket classes.",
  },
  {
    id: "csc302_ch5_048",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "When developing an epidemiological simulation, why is representing a person as an Object highly advantageous?",
    options: [
      "The object elegantly encapsulates its own specific infectious state and distinct movement behaviors.",
      "The object perfectly restricts the simulation from executing on unapproved hardware frameworks.",
      "The object seamlessly transforms procedural environmental variables into unchangeable pure constants.",
      "The object permanently modifies the global simulation rules whenever it encounters new parameters.",
    ],
    correctAnswer: 0,
    explanation:
      "Agent-based modeling excels when entities like people are treated as objects, because each instance can encapsulate unique internal states (like infection) and distinct behaviors simultaneously.",
  },
  {
    id: "csc302_ch5_049",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Operating systems leverage the Composite Pattern to manage file systems, allowing hierarchical, part-whole relationships involving files and nested folders to be handled uniformly.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0, // True
    explanation:
      "The slides confirm that the OS file system architecture leverages the Composite Pattern precisely to manage hierarchical, part-whole relationships involving files and nested folders uniformly.",
  },
  {
    id: "csc302_ch5_050",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "In an IoT sensor network, how does a dashboard safely update visual charts without repeatedly polling the hardware?",
    options: [
      "By running intense infinite procedural loops calculating all eventual data outcomes mathematically.",
      "By utilizing the Observer pattern where sensors proactively notify the dashboard of any value shifts.",
      "By generating a temporary local cache that permanently disconnects the interface from live updates.",
      "By forcing the dashboard to instantly recompile its internal memory structure upon sensor activations.",
    ],
    correctAnswer: 1,
    explanation:
      "Dashboards avoid hardware polling by employing the Observer Pattern. Connected sensors proactively notify the dashboard interface instances whenever their local state detects a change.",
  },
];

export default csc302Module5;
