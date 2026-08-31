import { QuestionV2 } from "@/lib/quiz-types";

const csc302Chapter5Questions: QuestionV2[] = [
  {
    id: "csc302_ch5_001",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Large enterprise development teams need to work on separate parts of a system without constantly blocking each other. Which challenge of scale does this describe?",
    options: [
      "Longevity, which demands maintainable hierarchies over decades",
      "Modularity, which requires isolated development domains for large teams",
      "Domain Modelling, which simplifies complex business logic",
      "Portability, which standardizes interfaces across operating systems"
    ],
    correctAnswer: 1,
    explanation: "Enterprise Software Foundations lists modularity as the challenge addressed by giving large teams isolated development domains so they can work independently.\n\nLongevity is described there as the need for maintainable hierarchies because enterprise systems persist for decades, a different concern.\n\nDomain modelling refers to simplifying complex business logic through abstraction, not team isolation.\n\nPortability is a concern raised later under systems programming, not enterprise scale challenges."
  },
  {
    id: "csc302_ch5_002",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "A company's business logic is extremely complex, so architects create classes that mirror abstract business concepts to make the software easier to build. Which challenge of scale is being addressed?",
    options: [
      "Domain Modelling",
      "Modularity",
      "Rollback Capability, which is a banking transaction feature",
      "Interchangeability"
    ],
    correctAnswer: 0,
    explanation: "Enterprise Software Foundations describes domain modelling as simplifying software creation by modelling abstract business domains directly, which matches mirroring complex business logic as classes.\n\nModularity instead concerns isolating development work across large teams, not modelling business concepts.\n\nRollback capability is a banking transaction feature, unrelated to domain modelling.\n\nInterchangeability describes swapping payment gateway implementations, a different domain entirely."
  },
  {
    id: "csc302_ch5_003",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Enterprise systems must remain maintainable for decades of continued use. Which challenge of scale specifically names this requirement?",
    options: [
      "Longevity",
      "Modularity",
      "Automated Buffering",
      "Hot Swapping"
    ],
    correctAnswer: 0,
    explanation: "Enterprise Software Foundations names longevity as the demand for maintainable hierarchies since systems persist for decades.\n\nModularity is about isolating development domains for large teams, a separate concern from long-term maintainability.\n\nAutomated buffering is a networking concept from sockets, not enterprise longevity.\n\nHot swapping refers to replacing hardware drivers seamlessly, unrelated to this challenge."
  },
  {
    id: "csc302_ch5_004",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "In a banking system's class hierarchy, which attributes does the base BankAccount class encapsulate?",
    options: [
      "Account number and balance",
      "Interest rate and overdraft limit",
      "Source, destination, and timestamp",
      "SKU data and batch codes"
    ],
    correctAnswer: 0,
    explanation: "Banking Systems: Account Modelling states that the base BankAccount class encapsulates common attributes such as accountNumber and balance.\n\nInterest rate belongs to the SavingsAccount subclass and overdraft limit belongs to the CurrentAccount subclass, not the base class.\n\nSource, destination, and timestamp are fields of the Transaction class, a different slide's concept.\n\nSKU data and batch codes belong to the InventoryItem class in supply chain tracking."
  },
  {
    id: "csc302_ch5_005",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Which pair correctly matches each BankAccount subclass with the feature it adds beyond the base class?",
    options: [
      "SavingsAccount adds an interest rate, CurrentAccount adds an overdraft limit",
      "SavingsAccount adds an overdraft limit, CurrentAccount adds an interest rate",
      "SavingsAccount adds a taxCode, CurrentAccount adds a paySlipGen method",
      "SavingsAccount adds a discount property, CurrentAccount adds a quantity field"
    ],
    correctAnswer: 0,
    explanation: "Banking Systems: Account Modelling states SavingsAccount adds an interest rate while CurrentAccount adds overdraft limits, on top of the shared BankAccount attributes.\n\nReversing the two features swaps the actual pairing given in the source.\n\ntaxCode and paySlipGen belong to the Employee base type in HRMS, not bank accounts.\n\nDiscount and quantity fields belong to CartItem in the e-commerce cart slide."
  },
  {
    id: "csc302_ch5_006",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "In the banking account model, calling withdraw() on a CurrentAccount and on a SavingsAccount always runs the exact same overdraft-checking logic on both.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "Banking Systems: Account Modelling states that polymorphic withdraw() executes overdraft checking on CurrentAccount objects but enforces withdrawal limit rules on SavingsAccount objects, meaning the two subclasses run different logic for the same call."
  },
  {
    id: "csc302_ch5_007",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Which fields does the base Transaction class manage in a banking system?",
    options: [
      "Source, destination, timestamp, and amount",
      "Account number and balance",
      "Payload data, trace headers, and origin metadata",
      "Mass, velocity, acceleration, and force"
    ],
    correctAnswer: 0,
    explanation: "Banking Systems: Transactions & Auditing states the base Transaction class manages source, destination, timestamp, and amount.\n\nAccount number and balance belong to the BankAccount class, a different banking slide.\n\nPayload data, trace headers, and origin metadata describe the Message object in the Enterprise Service Bus slide.\n\nMass, velocity, acceleration, and force belong to the RigidBody class in the physics engine slide."
  },
  {
    id: "csc302_ch5_008",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "A bank wants to preserve a clear historical record of every transfer that has ever occurred. Which mechanism from the transaction model achieves this?",
    options: [
      "Audit Trails, which append transaction objects to a ledger collection",
      "Rollback Capabilities, which implement an undo operation",
      "Interchangeability, which allows swapping payment processors",
      "Automated Persistence, which marks entities as dirty"
    ],
    correctAnswer: 0,
    explanation: "Banking Systems: Transactions & Auditing describes audit trails as appending transaction objects to a ledger collection, preserving a clear history, which matches the historical record requirement.\n\nRollback capabilities instead reverse failed transfers rather than preserve history.\n\nInterchangeability concerns swapping payment gateway implementations in e-commerce, not auditing.\n\nAutomated persistence is an ORM concept about generating SQL updates, unrelated to ledgers."
  },
  {
    id: "csc302_ch5_009",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "When a bank transfer fails partway through, which transaction feature allows it to be simply reversed?",
    options: [
      "An undo operation implemented inside the transaction classes",
      "A ledger collection that stores completed transactions",
      "A base class that stores accountNumber and balance",
      "A pipeline that filters sensor noise from telemetry data"
    ],
    correctAnswer: 0,
    explanation: "Banking Systems: Transactions & Auditing describes rollback capabilities as an undo operation implemented inside transaction classes, allowing simple reversal of failed transfers.\n\nThe ledger collection instead describes audit trails, which preserve history rather than reverse it.\n\nStoring accountNumber and balance describes the BankAccount base class, not rollback.\n\nFiltering sensor noise describes the DataFilter Pipeline in telemetry parsing, an unrelated domain."
  },
  {
    id: "csc302_ch5_010",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "In the e-commerce domain model, what does a CartItem object unify?",
    options: [
      "A Product reference, a quantity, and a discount property",
      "A cart's full list of items and clearing operations",
      "Inventory verification and an immutable Invoice",
      "Authorisation and refund contracts for payment providers"
    ],
    correctAnswer: 0,
    explanation: "E-commerce: Shopping Cart & Order Processing states that CartItem unifies a Product object reference, quantity, and applied discount properties.\n\nManaging the full list of items and clearing operations describes ShoppingCart's responsibilities, a related but distinct class.\n\nVerifying inventory and producing an immutable Invoice describes OrderProcessor, the domain service above the cart.\n\nAuthorisation and refund contracts belong to the PaymentGateway interface on a separate slide."
  },
  {
    id: "csc302_ch5_011",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "A customer adds, updates, and later clears items before checking out. Which class is responsible for these state modifications?",
    options: [
      "ShoppingCart",
      "OrderProcessor, which is the higher-level service that verifies inventory and produces an invoice once checkout begins",
      "CartItem, which is the unit stored inside the cart",
      "PaymentGateway, which is an interface for processing payments"
    ],
    correctAnswer: 0,
    explanation: "E-commerce: Shopping Cart & Order Processing states that ShoppingCart manages state modifications such as adding, updating, or clearing items.\n\nOrderProcessor is the higher-level service that verifies inventory and produces an invoice once checkout begins, not the cart itself.\n\nCartItem is the unit stored inside the cart, not the manager of cart-wide state changes.\n\nPaymentGateway is an interface for processing payments, unrelated to cart contents."
  },
  {
    id: "csc302_ch5_012",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Which of the following are responsibilities that OrderProcessor performs when converting a cart into a completed order?",
    options: [
      "Verifying inventory availability before finalising the order",
      "Producing an immutable Invoice object once processing completes",
      "All of these",
      "None of these"
    ],
    correctAnswer: 2,
    explanation: "E-commerce: Shopping Cart & Order Processing states OrderProcessor takes a cart, verifies inventory, and produces an immutable Invoice object, so both verifying inventory and producing an invoice are genuine responsibilities, making all of these the correct answer.\n\nVerifying inventory alone is supported but incomplete since invoice production is also stated.\n\nProducing the invoice alone is supported but incomplete since inventory verification is also stated.\n\nSince both specific claims are supported, none of these cannot be correct."
  },
  {
    id: "csc302_ch5_013",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Which generic contracts does the PaymentGateway interface declare?",
    options: [
      "authorisePayment() and refundTransaction()",
      "transmitPacket() and receiveFrame(), which are declared by the NetworkDriver interface in systems programming",
      "setTargetPosition() and getFeedbackCurrent(), which belong to the robotics Actuator interface",
      "arrangeComponents() and getPrimaryColor()"
    ],
    correctAnswer: 0,
    explanation: "E-commerce: Payment Gateway Abstractions states the PaymentGateway interface declares generic contracts such as authorisePayment() and refundTransaction().\n\ntransmitPacket() and receiveFrame() are declared by the NetworkDriver interface in systems programming, a different domain.\n\nsetTargetPosition() and getFeedbackCurrent() belong to the robotics Actuator interface.\n\narrangeComponents() belongs to LayoutManager and getPrimaryColor() belongs to ThemeFactory, both GUI interfaces."
  },
  {
    id: "csc302_ch5_014",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Which three classes are given as concrete implementations of the PaymentGateway interface?",
    options: [
      "StripeGateway, PayPalGateway, and AdyenGateway",
      "DHLAdapter, FedExAdapter, and UPSAdapter",
      "DarkThemeFactory, LightThemeFactory, and ThemeFactory",
      "BoxCollider, SphereCollider, and Collider"
    ],
    correctAnswer: 0,
    explanation: "E-commerce: Payment Gateway Abstractions names StripeGateway, PayPalGateway, and AdyenGateway as concrete implementations of the PaymentGateway interface.\n\nDHLAdapter and similar shipping adapters implement the ShippingService interface in the design patterns section, a different use case.\n\nDarkThemeFactory and LightThemeFactory implement the ThemeFactory interface in the GUI theming slide.\n\nBoxCollider and SphereCollider are subtypes of the Collider hierarchy in the physics engine slide."
  },
  {
    id: "csc302_ch5_015",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Why does defining PaymentGateway as an interface make it easy to switch from Stripe to a different payment processor?",
    options: [
      "Swapping processors requires zero changes to the core retail ordering logic",
      "It removes the need for any payment processor to authorise transactions",
      "It merges the shopping cart and the invoice into a single class",
      "It guarantees that every processor charges an identical transaction fee"
    ],
    correctAnswer: 0,
    explanation: "E-commerce: Payment Gateway Abstractions states that interchangeability means swapping processors is simple and requires zero changes to the core retail ordering logic, since ordering code depends only on the interface.\n\nAuthorisation is still required of every gateway implementation, not removed.\n\nMerging the cart and invoice into one class is not described anywhere in the payment gateway slide.\n\nTransaction fees are a business detail never mentioned in this slide, so nothing about the interface guarantees them being identical."
  },
  {
    id: "csc302_ch5_016",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Which common profile values does the Employee base type define in an HRMS?",
    options: [
      "Salary, taxCode, and a paySlipGen() method",
      "History logs and value metrics",
      "SKU data, batch codes, and shelf locations",
      "Mana levels and spellcasting ability"
    ],
    correctAnswer: 0,
    explanation: "HRMS: Employee Hierarchy & Payroll states the Employee base type defines common profile values such as salary, taxCode, and paySlipGen().\n\nHistory logs and value metrics belong to the Lead object in the CRM slide, a different domain entirely.\n\nSKU data, batch codes, and shelf locations describe InventoryItem in supply chain tracking.\n\nMana levels and spellcasting belong to the Mage specialization in the RPG character hierarchy slide."
  },
  {
    id: "csc302_ch5_017",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "In the HRMS employee hierarchy, CurrentAccount is listed as a subtype of the base Employee type alongside SalariedEmployee and HourlyContractor.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "HRMS: Employee Hierarchy & Payroll lists SalariedEmployee, HourlyContractor, and CommissionedSalesperson as the subtypes of the Employee base type. CurrentAccount is actually a BankAccount subclass from the banking domain, not part of the Employee hierarchy, so the statement is false."
  },
  {
    id: "csc302_ch5_018",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "At month-end, payroll software iterates through an array of different Employee subtypes and calls calculatePay() on each one, getting a different calculation each time. Which mechanism explains this behavior?",
    options: [
      "Dynamic Payroll Calc, relying on polymorphic dispatch of calculatePay()",
      "Automated Persistence, marking entities as dirty for SQL updates",
      "Rollback Capabilities, undoing a failed calculation",
      "Constraint Solving, resolving geometric relationships between parts"
    ],
    correctAnswer: 0,
    explanation: "HRMS: Employee Hierarchy & Payroll describes Dynamic Payroll Calc as iterating through an array of Employee objects and calling calculatePay() to trigger specific payment calculations dynamically depending on the actual subtype.\n\nAutomated Persistence is an ORM concept about dirty entities generating SQL, unrelated to payroll.\n\nRollback Capabilities undo failed banking transfers, not payroll runs.\n\nConstraint Solving Engines resolve CAD geometric relationships, an unrelated engineering domain."
  },
  {
    id: "csc302_ch5_019",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "What does a Lead object encapsulate in a CRM system?",
    options: [
      "History logs, contact coordinates, and value metrics",
      "Salary, taxCode, and payslip generation logic",
      "Coordinate tracking, event bindings, and painting routines, which describe the abstract GUI Component or QWidget class",
      "Mass, velocity, and force variables, which belong to the RigidBody class in the physics engine slide"
    ],
    correctAnswer: 0,
    explanation: "CRM: Lead Pipelines & Customer Journeys states a Lead object encapsulates history logs, contact coordinates, and value metrics.\n\nSalary, taxCode, and payslip generation belong to the HRMS Employee base type, a different slide.\n\nCoordinate tracking, event bindings, and painting routines describe the abstract GUI Component or QWidget class.\n\nMass, velocity, and force variables belong to the RigidBody class in the physics engine slide."
  },
  {
    id: "csc302_ch5_020",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Which funnel phases does the SalesPipeline class manage as a lead transitions through the sales process?",
    options: [
      "Contacted, Qualified, Proposal, and Won",
      "Idle, Sprint, and Fall, which are animation states from the game character animation state machine slide",
      "Success, Failure, and Running, which are behaviour tree Status codes returned by BTNode evaluations",
      "Extract, Transform, and Load, which are the stages of an ETL data pipeline in scientific computing"
    ],
    correctAnswer: 0,
    explanation: "CRM: Lead Pipelines & Customer Journeys states the SalesPipeline class manages transitions of lead objects between funnel phases: Contacted, Qualified, Proposal, and Won.\n\nIdle, Sprint, and Fall are animation states from the game character animation state machine slide.\n\nSuccess, Failure, and Running are behaviour tree Status codes returned by BTNode evaluations.\n\nExtract, Transform, and Load are the stages of an ETL data pipeline in scientific computing."
  },
  {
    id: "csc302_ch5_021",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Consider these two CRM claims: (1) the SalesPipeline class alone manually polls for lead status changes every hour instead of using event listeners, and (2) the SalesPipeline class alone is responsible for sending those emails. Which claims are actually supported by the CRM model?",
    options: [
      "Only the claim about SalesPipeline manually polling every hour",
      "Only the claim that SalesPipeline alone sends the emails",
      "All of these",
      "None of these"
    ],
    correctAnswer: 3,
    explanation: "CRM: Lead Pipelines & Customer Journeys states that Automated Event Observers registered on lead status updates fire email-generation triggers automatically; there is no hourly polling mechanism described, so the first claim is unsupported.\n\nThe slide attributes email triggering to registered event observers, not to the SalesPipeline class acting alone, so the second claim is also unsupported.\n\nSince neither specific claim holds, all of these cannot be correct.\n\nSince neither claim is genuinely supported, none of these is the correct answer."
  },
  {
    id: "csc302_ch5_022",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "What does an InventoryItem class track in a supply chain system?",
    options: [
      "SKU data, bulk values, batch codes, and shelf locations",
      "Capacity constraints and physical bin partitions, which are modelled by the Warehouse object",
      "Path optimisation algorithms across regional nodes, which are encapsulated by RouteFinder objects",
      "Payload data and trace headers, which belong to the Message object in the ESB slide"
    ],
    correctAnswer: 0,
    explanation: "Supply Chain: Asset & Inventory Tracking states the InventoryItem class tracks SKU data, bulk values, batch codes, and shelf locations.\n\nCapacity constraints and physical bin partitions are modelled by the Warehouse object, a separate class on the same slide.\n\nPath optimisation algorithms across regional nodes are encapsulated by RouteFinder objects, not InventoryItem.\n\nPayload data and trace headers belong to the Message object in the ESB slide."
  },
  {
    id: "csc302_ch5_023",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "A logistics company needs an object that encapsulates path optimisation algorithms to dispatch items efficiently across regional distribution nodes. Which class from the supply chain model fits this need, and how does it differ from the Warehouse object?",
    options: [
      "RouteFinder handles path optimisation, while Warehouse models capacity and bin partitions",
      "Warehouse handles path optimisation, while RouteFinder models capacity and bin partitions",
      "InventoryItem handles path optimisation, while RouteFinder tracks SKU data",
      "RouteFinder tracks batch codes, while Warehouse dispatches items across nodes"
    ],
    correctAnswer: 0,
    explanation: "Supply Chain: Asset & Inventory Tracking states RouteFinder objects encapsulate path optimisation algorithms to dispatch items across regional nodes, while Warehouse instead models capacity constraints and maps bin partitions to object collections.\n\nSwapping the two roles reverses the actual pairing given in the source.\n\nInventoryItem is responsible for tracking SKU data, batch codes, and locations, not path optimisation.\n\nBatch codes belong to InventoryItem and dispatching belongs to RouteFinder, so this pairing mismatches both classes."
  },
  {
    id: "csc302_ch5_024",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "In an Enterprise Service Bus, what does a Message object wrap into a standard transport structure?",
    options: [
      "Payload data, trace headers, and origin metadata",
      "SKU data, bulk values, and batch codes, which describe InventoryItem in the supply chain slide",
      "Level, raw attributes, and current inventory, which describe the Hero Base Class in the RPG character hierarchy slide",
      "Local coordinates, scale values, and child nodes, which describe the SceneNode class in the game scene graph slide"
    ],
    correctAnswer: 0,
    explanation: "Enterprise Service Bus (ESB) & Messaging states a Message object wraps payload data, trace headers, and origin metadata into a standard transport structure.\n\nSKU data, bulk values, and batch codes describe InventoryItem in the supply chain slide.\n\nLevel, raw attributes, and current inventory describe the Hero Base Class in the RPG character hierarchy slide.\n\nLocal coordinates, scale values, and child nodes describe the SceneNode class in the game scene graph slide."
  },
  {
    id: "csc302_ch5_025",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Within an ESB architecture, which class manages transient thread-safe lists of message objects, and which examines message envelopes to route them to target handler classes?",
    options: [
      "MessageQueue manages the lists; Router Engines perform the routing",
      "Router Engines manage the lists; MessageQueue performs the routing",
      "MessageQueue manages the lists; ThreadPoolManager performs the routing",
      "WorkerThread manages the lists; Router Engines perform the routing"
    ],
    correctAnswer: 0,
    explanation: "Enterprise Service Bus (ESB) & Messaging states MessageQueue manages transient thread-safe lists of message objects, while Router Engines examine incoming envelopes and route them to target handler classes.\n\nSwapping the two responsibilities reverses the pairing actually given in the source.\n\nThreadPoolManager belongs to the unrelated thread pool task queue slide, not ESB routing.\n\nWorkerThread also belongs to the thread pool slide, not to message queue management."
  },
  {
    id: "csc302_ch5_026",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "A retail client needed to migrate a legacy procedural COBOL accounting system to a cloud-native platform without pausing operations. Which design pattern did the solution wrap around the old file systems?",
    options: [
      "The Adapter Pattern",
      "The Abstract Factory Pattern",
      "The Observer Pattern",
      "The Strategy Pattern"
    ],
    correctAnswer: 0,
    explanation: "Case Study: Legacy Enterprise Migration states the solution developed a domain-driven OOP wrapper around the old file systems using the Adapter Pattern.\n\nThe Abstract Factory Pattern was instead used in the cross-platform GUI case study to bridge operating system APIs, a different case study.\n\nThe Observer Pattern underlies reactive UI updates in the design patterns section, not this migration.\n\nThe Strategy Pattern underlies the pricing engine case in the design patterns section, unrelated to this migration."
  },
  {
    id: "csc302_ch5_027",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "What outcome did re-engineering the legacy COBOL system into modular, service-oriented classes achieve?",
    options: [
      "Deployment cycles were reduced from months to days",
      "The system's deployment cycles increased from days to months",
      "The company stopped using cloud infrastructure entirely",
      "The accounting logic was rewritten in COBOL for better portability"
    ],
    correctAnswer: 0,
    explanation: "Case Study: Legacy Enterprise Migration states the outcome reduced deployment cycles from months to days after re-engineering the system into modular, service-oriented classes.\n\nThe reverse direction, cycles increasing from days to months, is the opposite of the stated outcome.\n\nThe case study describes migrating toward a cloud-native platform, not abandoning cloud infrastructure.\n\nThe migration moved away from procedural COBOL toward an OOP wrapper, not toward rewriting more COBOL."
  },
  {
    id: "csc302_ch5_028",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Historically, which GUI platform was closely linked to the early development of object-oriented programming?",
    options: [
      "Smalltalk, developed at Xerox PARC",
      "Java Swing",
      "Qt",
      "The Windows Win32 API"
    ],
    correctAnswer: 0,
    explanation: "Graphical User Interfaces states that historically, OOP development was closely linked to GUI platforms such as Smalltalk at Xerox PARC.\n\nJava Swing and Qt are introduced later as widget hierarchy toolkits, not as the historical origin point mentioned.\n\nThe Win32 API is never mentioned in the source as linked to OOP's historical development."
  },
  {
    id: "csc302_ch5_029",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "A window contains several panels, and each panel contains buttons and text fields placed inside it. Which GUI principle does this nested arrangement of widget objects inside window objects demonstrate?",
    options: [
      "Composition",
      "Encapsulation of Layout",
      "Visual Representation",
      "Cascading Transforms"
    ],
    correctAnswer: 0,
    explanation: "Graphical User Interfaces describes composition as nested interfaces being built by placing widget objects inside window objects, matching panels containing buttons and fields.\n\nEncapsulation of layout instead refers to hiding margins, borders, and layout configuration inside a component class, not nesting widgets.\n\nVisual representation refers to every visual component mapping to an object in memory, a more general claim than nesting.\n\nCascading transforms is a game scene graph concept about propagating coordinate changes to child nodes, unrelated to GUIs."
  },
  {
    id: "csc302_ch5_030",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Why are a component's margins, borders, and layout configuration hidden inside its own class rather than exposed to the rest of the application?",
    options: [
      "This is what Encapsulation of Layout achieves in GUI design",
      "This is what Cascading Transforms achieves in scene graphs",
      "This is what Automated Buffering achieves in network sockets",
      "This is what Constraint Solving achieves in CAD assemblies"
    ],
    correctAnswer: 0,
    explanation: "Graphical User Interfaces states that encapsulation of layout keeps visual styles such as margins, borders, and layout configurations hidden inside component classes.\n\nCascading transforms concerns propagating coordinate changes down a scene graph, not hiding layout details.\n\nAutomated buffering concerns managing network packet fragmentation, an unrelated systems concept.\n\nConstraint solving concerns resolving geometric relationships in CAD assemblies, an unrelated engineering concept."
  },
  {
    id: "csc302_ch5_031",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "In GUI widget hierarchies such as Java Swing or Qt, which class role defines coordinate tracking, event bindings, and painting routines for every visual element?",
    options: [
      "The abstract base class, such as Component or QWidget",
      "Intermediate containers, such as Container or Frame",
      "Leaf elements, such as Button or Label",
      "The LayoutManager interface, which is a separate concept declaring formatting contracts like arrangeComponents()"
    ],
    correctAnswer: 0,
    explanation: "Widget Hierarchies (Java Swing / Qt) states the abstract base class, Component or QWidget, defines coordinate tracking, event bindings, and painting routines shared by everything beneath it.\n\nIntermediate containers hold nested lists of other components, building on the base class rather than defining these core behaviors.\n\nLeaf elements implement specialized drawing and interaction logic for specific widgets, not the shared base behaviors.\n\nThe LayoutManager interface is a separate concept declaring formatting contracts like arrangeComponents(), not painting routines."
  },
  {
    id: "csc302_ch5_032",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Which widget hierarchy role is filled by classes like Container or Frame, which hold nested lists of other components?",
    options: [
      "Intermediate containers",
      "Leaf elements",
      "Layer composites",
      "Concrete theme classes"
    ],
    correctAnswer: 0,
    explanation: "Widget Hierarchies (Java Swing / Qt) states intermediate containers, such as Container or Frame, hold nested lists of other components.\n\nLeaf elements are Button, Label, and TextField, which implement specialized drawing and interaction logic instead of holding nested components.\n\nLayer composites are a canvas rendering concept that groups shapes for combined operations, not GUI widget containment.\n\nConcrete theme classes are DarkThemeFactory and LightThemeFactory from the theming slide, unrelated to widget containment."
  },
  {
    id: "csc302_ch5_033",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Which classes are given as examples of leaf elements that implement specialized drawing and user-interaction logic in a widget hierarchy?",
    options: [
      "Button, Label, and TextField",
      "Component and QWidget, which are the abstract base classes at the top of the hierarchy",
      "Container and Frame, which are intermediate containers holding nested components",
      "Circle, Rectangle, and Polygon, which are concrete shapes from the canvas rendering slide"
    ],
    correctAnswer: 0,
    explanation: "Widget Hierarchies (Java Swing / Qt) names Button, Label, and TextField as leaf elements implementing specialized drawing and user-interaction logic.\n\nComponent and QWidget are the abstract base classes at the top of the hierarchy, not leaves.\n\nContainer and Frame are intermediate containers holding nested components, not leaf elements.\n\nCircle, Rectangle, and Polygon are concrete shapes from the canvas rendering slide, a different part of the GUI section."
  },
  {
    id: "csc302_ch5_034",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Low-level hardware interrupts such as a mouse click are wrapped with high-level context like coordinates and key states before reaching application code. Which GUI concept describes this wrapping?",
    options: [
      "Event Classes",
      "ActionListener Interfaces",
      "Object Callbacks, which describes buttons holding lists of listener objects and notifying them",
      "Layer Composites, which is a canvas rendering concept grouping shapes"
    ],
    correctAnswer: 0,
    explanation: "Event Handling & Callback Objects states Event Classes wrap low-level system hardware interrupts with useful high-level context such as coordinates and key states.\n\nActionListener interfaces instead specify the callback contracts for handling those already-wrapped events, not the wrapping itself.\n\nObject Callbacks describes buttons holding lists of listener objects and notifying them, a related but separate mechanism.\n\nLayer Composites is a canvas rendering concept grouping shapes, unrelated to input event wrapping."
  },
  {
    id: "csc302_ch5_035",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "At runtime, a button holds a list of registered listener objects and notifies each one when it is clicked. Which mechanism does this describe?",
    options: [
      "Object Callbacks",
      "Event Classes, which describe the wrapping of hardware interrupts into structured context, a step before the callback notification occurs",
      "Dynamic Swapping",
      "Recursive Traversal, which refers to drawing routines walking a scene graph recursively"
    ],
    correctAnswer: 0,
    explanation: "Event Handling & Callback Objects describes object callbacks as buttons holding lists of listener objects and notifying them of click events at runtime, matching this scenario exactly.\n\nEvent classes describe the wrapping of hardware interrupts into structured context, a step before the callback notification occurs.\n\nDynamic swapping refers to containers swapping layout manager objects at runtime, an unrelated layout concept.\n\nRecursive traversal refers to drawing routines walking a scene graph recursively, an unrelated game engine concept."
  },
  {
    id: "csc302_ch5_036",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "In an MVC architecture, which object represents state data such as UserProfileData, completely independent of the visual interface?",
    options: [
      "The Model Object",
      "The View Object",
      "The Controller Object, which responds to user actions and keeps the view synced with the model",
      "The Document Object, which is a Document-View architecture concept managing raw text and structural elements"
    ],
    correctAnswer: 0,
    explanation: "MVC (Model-View-Controller) Architecture states the Model Object represents state data such as UserProfileData, completely independent of the visual UI.\n\nThe View Object instead handles layout and rendering based on model properties, such as ProfileForm.\n\nThe Controller Object responds to user actions and keeps the view synced with the model, a different role from holding state.\n\nThe Document Object is a Document-View architecture concept managing raw text and structural elements, a separate slide."
  },
  {
    id: "csc302_ch5_037",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "A user clicks a save button on a profile form. Which MVC component responds to that action, updates the model, and keeps the view synchronized?",
    options: [
      "The Controller Object",
      "The Model Object, which holds the underlying state data",
      "The View Object, which renders the form based on model properties like ProfileForm",
      "The Document Object, which belongs to the separate Document-View architecture slide"
    ],
    correctAnswer: 0,
    explanation: "MVC (Model-View-Controller) Architecture states the Controller Object responds to user actions, updates the model, and keeps the view in sync.\n\nThe Model Object holds the underlying state data but does not itself respond to user interface actions.\n\nThe View Object renders the form based on model properties like ProfileForm, but does not process the click itself.\n\nThe Document Object belongs to the separate Document-View architecture slide, not MVC."
  },
  {
    id: "csc302_ch5_038",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Which interface enforces drawing contracts such as render(Graphics g) for vector graphics objects?",
    options: [
      "The Shape Base Interface",
      "The LayoutManager Interface",
      "The Serializable Interface, which enforces data preservation and load contracts for game save systems",
      "The Actuator Interface, which enforces movement contracts for robotics"
    ],
    correctAnswer: 0,
    explanation: "Custom Canvas Rendering & Vector Graphics states the Shape Base Interface enforces drawing contracts such as render(Graphics g).\n\nThe LayoutManager Interface instead declares formatting contracts like arrangeComponents(), a GUI layout concept.\n\nThe Serializable Interface enforces data preservation and load contracts for game save systems, an unrelated domain.\n\nThe Actuator Interface enforces movement contracts for robotics, also unrelated to canvas rendering."
  },
  {
    id: "csc302_ch5_039",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "A designer wants to move, scale, and group several shapes together as a single unit on a canvas. Which concept enables treating the whole collection as one operable unit?",
    options: [
      "Layer Composites",
      "Concrete Shapes",
      "The Shape Base Interface",
      "Cascading Transforms"
    ],
    correctAnswer: 0,
    explanation: "Custom Canvas Rendering & Vector Graphics states Layer Composites group shapes inside a composite class, allowing operations like moving, scaling, or grouping to apply to the entire collection at once.\n\nConcrete Shapes such as Circle, Rectangle, and Polygon hold their own geometric coordinate points but do not by themselves provide grouped operations.\n\nThe Shape Base Interface only enforces the drawing contract render(Graphics g), not grouped transformations.\n\nCascading Transforms is a game scene graph concept about parent-to-child coordinate propagation, a different domain."
  },
  {
    id: "csc302_ch5_040",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Which classes are given as concrete shapes that hold their own geometric coordinate points in custom canvas rendering?",
    options: [
      "Circle, Rectangle, and Polygon",
      "Point, LineString, and Polygon, which are GIS geometry components managing coordinate reference transformations",
      "BoxCollider and SphereCollider, which are physics engine collider subtypes",
      "IdleState, SprintState, and FallState, which are animation states from the character animation slide"
    ],
    correctAnswer: 0,
    explanation: "Custom Canvas Rendering & Vector Graphics names Circle, Rectangle, and Polygon as concrete shapes holding their own geometric coordinate points.\n\nPoint, LineString, and Polygon are GIS geometry components managing coordinate reference transformations, a different domain despite sharing the word Polygon.\n\nBoxCollider and SphereCollider are physics engine collider subtypes, unrelated to canvas shapes.\n\nIdleState, SprintState, and FallState are animation states from the character animation slide, unrelated to shapes."
  },
  {
    id: "csc302_ch5_041",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Resizing a window can break a hard-coded visual layout. Which GUI concept solves this by treating layout algorithms as swappable strategy objects?",
    options: [
      "Layout Managers",
      "Widget Hierarchies, which describe the class structure of components themselves",
      "Document-View Architecture, which concerns separating document state from rendering in editors",
      "Window Managers, which handle desktop-level window objects and icons"
    ],
    correctAnswer: 0,
    explanation: "Layout Managers as Strategy Objects states that layout managers solve the problem of hard-coded visual positions breaking on resize by dynamically adapting components through swappable strategy objects.\n\nWidget Hierarchies describe the class structure of components themselves, not the algorithm used to arrange them.\n\nDocument-View Architecture concerns separating document state from rendering in editors, an unrelated concept.\n\nWindow Managers handle desktop-level window objects and icons, not in-window component arrangement."
  },
  {
    id: "csc302_ch5_042",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Which classes are given as concrete strategies defining different component alignment algorithms under the LayoutManager interface?",
    options: [
      "BorderLayout, GridLayout, and FlowLayout",
      "DarkThemeFactory and LightThemeFactory, which are concrete theme classes from the theming slide",
      "Selector and Sequence, which are composite behaviour tree nodes from the game AI slide",
      "StripeGateway, PayPalGateway, and AdyenGateway, which are payment gateway implementations"
    ],
    correctAnswer: 0,
    explanation: "Layout Managers as Strategy Objects names BorderLayout, GridLayout, and FlowLayout as concrete strategies defining different alignment algorithms.\n\nDarkThemeFactory and LightThemeFactory are concrete theme classes from the theming slide, an unrelated strategy family.\n\nSelector and Sequence are composite behaviour tree nodes from the game AI slide, unrelated to layout.\n\nStripeGateway, PayPalGateway, and AdyenGateway are payment gateway implementations, unrelated to layout strategies."
  },
  {
    id: "csc302_ch5_043",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "A container can swap its active layout manager object at runtime and instantly change how its widgets are arranged. Which concept describes this capability?",
    options: [
      "Dynamic Swapping",
      "Cascading Transforms",
      "Hot Swapping",
      "Automated Persistence, which refers to ORM entities automatically generating SQL updates"
    ],
    correctAnswer: 0,
    explanation: "Layout Managers as Strategy Objects states dynamic swapping lets containers swap layout manager objects at runtime to instantly change how UI elements are arranged.\n\nCascading transforms instead propagates coordinate changes down a game scene graph, an unrelated mechanism.\n\nHot swapping refers to replacing network hardware seamlessly in systems programming, a different domain despite the similar name.\n\nAutomated persistence refers to ORM entities automatically generating SQL updates, unrelated to layout managers."
  },
  {
    id: "csc302_ch5_044",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "In a Model-View-style word processor design that separates content from presentation, which object manages the underlying raw text, style runs, and structural elements of the file being edited?",
    options: [
      "The Document Object",
      "The View Object",
      "The Model Object, a role from the separate MVC architecture pattern",
      "The Controller Object"
    ],
    correctAnswer: 0,
    explanation: "Document-View Architecture (MS Word Style) states the Document Object manages the underlying raw text, style runs, and structural elements.\n\nThe View Object instead focuses on layout, page boundaries, line wrapping, and scroll bar positions, not the raw content itself.\n\nThe Model Object and Controller Object belong to the separate MVC architecture slide, a related but distinct pattern.\n\n"
  },
  {
    id: "csc302_ch5_045",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "A print preview window and a main editing window both display the same word processor file, and both update instantly whenever the text changes. Which content-view design concept explains this behavior?",
    options: [
      "Coordinated Updates, where multiple View objects observe the same Document instance",
      "Cascading Transforms, where a parent node propagates changes to children",
      "Dynamic Swapping, where the layout manager changes at runtime",
      "Recursive Traversal, where a graph is walked node by node"
    ],
    correctAnswer: 0,
    explanation: "Document-View Architecture (MS Word Style) states coordinated updates occur because multiple View objects, such as a print preview window and a main edit window, can view the same Document instance simultaneously and update instantly as changes occur.\n\nCascading transforms is a scene graph mechanism about propagating coordinates to children, not synchronizing document views.\n\nDynamic swapping concerns replacing layout manager objects at runtime, unrelated to document synchronization.\n\nRecursive traversal concerns recursively walking a scene graph to render nodes, not synchronizing views of a document."
  },
  {
    id: "csc302_ch5_046",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Which class encapsulates a desktop icon's coordinates, drag behaviors, and custom icon image in a window manager?",
    options: [
      "DesktopIcon",
      "Window Objects",
      "Drag and Drop Controllers",
      "FSNode"
    ],
    correctAnswer: 0,
    explanation: "Window Managers & Desktop Environments states the DesktopIcon Class encapsulates coordinates, drag behaviors, and custom icons.\n\nWindow Objects instead hold active system handles and track focus state and frame rendering, a distinct desktop concept.\n\nDrag and Drop Controllers standardize pointer events across windows rather than representing a single icon.\n\nFSNode is the file system composite base class, an unrelated systems programming concept."
  },
  {
    id: "csc302_ch5_047",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Which desktop environment mechanism standardizes pointer events across windows so that dragging a file from one application into another works uniformly?",
    options: [
      "Drag and Drop Controllers",
      "Window Objects",
      "DesktopIcon, which encapsulates a single icon's coordinates and drag behavior",
      "ActionListener Interfaces, which specify callback contracts for GUI events generally"
    ],
    correctAnswer: 0,
    explanation: "Window Managers & Desktop Environments states Drag and Drop Controllers standardize pointer events across windows, making data sharing between applications uniform.\n\nWindow Objects instead hold active system handles and track focus state, not cross-application pointer standardization.\n\nDesktopIcon encapsulates a single icon's coordinates and drag behavior, not the cross-window standardization itself.\n\nActionListener Interfaces specify callback contracts for GUI events generally, not specifically drag-and-drop between applications."
  },
  {
    id: "csc302_ch5_048",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "An application must let users switch instantly between a dark theme and a light theme. Which interface declares methods such as getPrimaryColor() to support this?",
    options: [
      "The ThemeFactory Interface",
      "The LayoutManager Interface",
      "The Shape Base Interface",
      "The PaymentGateway Interface"
    ],
    correctAnswer: 0,
    explanation: "UI Themes & Styling via Factory Patterns states the ThemeFactory Interface declares methods to return styling objects, such as getPrimaryColor().\n\nThe LayoutManager Interface instead declares formatting contracts like arrangeComponents(), a layout concern rather than theming.\n\nThe Shape Base Interface enforces drawing contracts for canvas shapes, unrelated to theme colors.\n\nThe PaymentGateway Interface declares payment contracts such as authorisePayment(), an unrelated business domain."
  },
  {
    id: "csc302_ch5_049",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "When a widget initializes, it pulls its colors from whichever theme factory object is currently active. What benefit does this Global Styling Refactor provide?",
    options: [
      "It keeps styling consistent across the entire application",
      "It removes the need for any concrete theme classes to exist",
      "It merges DarkThemeFactory and LightThemeFactory into one class",
      "It prevents widgets from ever being repainted after creation"
    ],
    correctAnswer: 0,
    explanation: "UI Themes & Styling via Factory Patterns states that widgets pulling colors from the active theme factory object keeps styling consistent across the entire application.\n\nConcrete theme classes such as DarkThemeFactory and LightThemeFactory still need to exist to supply the actual colors, so this benefit does not remove them.\n\nThe two theme classes remain separate implementations of the same interface rather than being merged.\n\nRepainting still occurs normally; the slide never claims widgets stop being repainted."
  },
  {
    id: "csc302_ch5_050",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "An investment firm needed one desktop dashboard codebase to run natively on Windows, macOS, and Linux. Which design pattern bridged the differing operating system APIs?",
    options: [
      "The Abstract Factory pattern",
      "The Adapter pattern",
      "The Observer pattern, which underlies reactive UI updates in the design patterns section",
      "The Decorator pattern, which underlies middleware wrapping in the design patterns section"
    ],
    correctAnswer: 0,
    explanation: "Case Study: Cross-Platform GUI Development states the solution developed an OOP wrapper using the Abstract Factory pattern to bridge the operating system APIs.\n\nThe Adapter pattern was instead used in the legacy enterprise migration case study to wrap old COBOL file systems, a different case.\n\nThe Observer pattern underlies reactive UI updates described later in the design patterns section, not this case study.\n\nThe Decorator pattern underlies middleware wrapping described later in the design patterns section, also not this case study."
  },
  {
    id: "csc302_ch5_051",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "The cross-platform dashboard case study reused what percentage of its codebase across Windows, macOS, and Linux?",
    options: [
      "Over 90 percent",
      "Over 50 percent",
      "Exactly 100 percent",
      "Under 25 percent"
    ],
    correctAnswer: 0,
    explanation: "Case Study: Cross-Platform GUI Development states the outcome reused over 90% of the codebase across platforms, drastically reducing development costs.\n\nOver 50 percent understates the figure actually reported in the case study.\n\nThe case study never claims a full 100 percent reuse, only over 90 percent.\n\nUnder 25 percent is far below the reuse figure the case study actually reports."
  },
  {
    id: "csc302_ch5_052",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Game engine loops must update and render hundreds of moving objects at 60 or more frames per second. Which model represents characters, obstacles, cameras, and projectiles as independent active objects to achieve this?",
    options: [
      "Actor Models",
      "Modular Components",
      "Game Loop Integration",
      "Scene Graphs"
    ],
    correctAnswer: 0,
    explanation: "Modeling Dynamic, Interactive Worlds states Actor Models represent characters, obstacles, cameras, and projectiles as independent, active objects.\n\nModular Components instead separate reusable traits like collision or health tracking from specific entities, a related but distinct idea.\n\nGame Loop Integration describes the engine looping through active objects every frame, the mechanism that drives actors rather than the representation itself.\n\nScene Graphs organize spatial hierarchy using tree structures, a separate slide's concept."
  },
  {
    id: "csc302_ch5_053",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Which concept separates reusable traits such as collision rendering or health tracking from specific game entities through composition?",
    options: [
      "Modular Components",
      "Actor Models",
      "Cascading Transforms, which propagates coordinate updates through a scene graph hierarchy",
      "Recursive Traversal, which describes recursively walking a scene graph to render nodes"
    ],
    correctAnswer: 0,
    explanation: "Modeling Dynamic, Interactive Worlds states Modular Components use composition to separate reusable traits, like collision rendering or health tracking, from specific game entities.\n\nActor Models instead represent characters and objects as independent active entities, not the separation of reusable traits.\n\nCascading Transforms propagates coordinate updates through a scene graph hierarchy, unrelated to trait separation.\n\nRecursive Traversal describes recursively walking a scene graph to render nodes, also unrelated to trait separation."
  },
  {
    id: "csc302_ch5_054",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "In a traditional OOP inheritance hierarchy contrasted against ECS, an Orc inherits from Monster, which in turn inherits from which class?",
    options: [
      "Actor",
      "Entity",
      "RenderComponent, which is one of the modular components attached to an Entity in the composition-based model",
      "HealthComponent, which is likewise a modular component attached to an Entity"
    ],
    correctAnswer: 0,
    explanation: "Entity-Component-System (ECS) vs OOP states that in traditional OOP inheritance, an Orc inherits from Monster, which inherits from Actor, creating a rigid structure.\n\nEntity is instead the composition-based model's simple ID, deliberately contrasted with this deep inheritance chain, not part of it.\n\nRenderComponent is one of the modular components attached to an Entity in the composition-based model, not part of the inheritance chain.\n\nHealthComponent is likewise a modular component attached to an Entity, not part of the Orc inheritance chain."
  },
  {
    id: "csc302_ch5_055",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "As games grew larger, deep inheritance hierarchies like Orc-Monster-Actor became brittle. Which approach configures a simple Entity ID dynamically by attaching modular components instead?",
    options: [
      "Composition-Based Models",
      "Traditional OOP Inheritance",
      "Modern Hybrid Approaches",
      "Cascading Transforms"
    ],
    correctAnswer: 0,
    explanation: "Entity-Component-System (ECS) vs OOP states composition-based models treat an Entity as a simple ID, configured dynamically by adding modular components such as RenderComponent and HealthComponent.\n\nTraditional OOP Inheritance is precisely the rigid deep-hierarchy approach this shift moves away from, not the composition approach itself.\n\nModern Hybrid Approaches instead combine composition flexibility with OOP interface simplicity by managing component instances as objects, a step beyond pure composition.\n\nCascading Transforms is an unrelated scene graph concept about propagating coordinates to child nodes."
  },
  {
    id: "csc302_ch5_056",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Modern hybrid game architectures manage component instances as objects, combining the flexibility of composition with the simplicity of OOP interfaces.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "Entity-Component-System (ECS) vs OOP explicitly states that modern hybrid approaches manage component instances as objects, combining the flexibility of composition with the simplicity of OOP interfaces, matching the statement exactly."
  },
  {
    id: "csc302_ch5_057",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Which class encapsulates mass, velocity, acceleration, and force variables in a physics engine?",
    options: [
      "RigidBody",
      "Collider",
      "BoxCollider",
      "SphereCollider"
    ],
    correctAnswer: 0,
    explanation: "Physics Engine Collision Objects states the RigidBody Class encapsulates mass, velocity, acceleration, and force variables.\n\nCollider is instead the base class for collision volumes, not the physical motion variables.\n\nBoxCollider and SphereCollider are specialized subtypes of the Collider hierarchy handling shapes, not motion variables like mass or force."
  },
  {
    id: "csc302_ch5_058",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Which two specialized subtypes of the Collider hierarchy allow a physics engine to resolve collisions between different shapes polymorphically?",
    options: [
      "BoxCollider and SphereCollider",
      "RigidBody and Collider",
      "IdleState and SprintState, which are animation states from a different game slide",
      "Selector and Sequence, which are behaviour tree composite nodes from the AI slide"
    ],
    correctAnswer: 0,
    explanation: "Physics Engine Collision Objects names BoxCollider and SphereCollider as the specialized subtypes of the Collider hierarchy, resolved seamlessly by polymorphic collision detection pipelines.\n\nRigidBody is the class holding mass, velocity, and force, and Collider is their shared base class, not the two named subtypes.\n\nIdleState and SprintState are animation states from a different game slide, unrelated to collision shapes.\n\nSelector and Sequence are behaviour tree composite nodes from the AI slide, also unrelated to collision shapes."
  },
  {
    id: "csc302_ch5_059",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "In an RPG character hierarchy, which class tracks level, raw attributes, and current inventory as the shared base for all playable characters?",
    options: [
      "Hero Base Class",
      "Mage",
      "Warrior",
      "AnimationState Base Class"
    ],
    correctAnswer: 0,
    explanation: "Character Class Hierarchies in RPGs states the Hero Base Class tracks level, raw attributes, and current inventory.\n\nMage and Warrior are specializations that add mana levels and spellcasting, or rage states and heavy weapon attacks, respectively, building on the Hero base rather than defining it.\n\nThe AnimationState Base Class belongs to a separate slide about controlling character animation transitions, not RPG attributes."
  },
  {
    id: "csc302_ch5_060",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "A combat system calls executeAttack() on a reference to a Hero object, and depending on whether the underlying object is a Mage or a Warrior, a spellcast or a melee strike resolves. Which concept explains this?",
    options: [
      "Polymorphic Attacks",
      "Cascading Transforms",
      "Dynamic Payroll Calc",
      "Automated Persistence"
    ],
    correctAnswer: 0,
    explanation: "Character Class Hierarchies in RPGs states Polymorphic Attacks occur when the combat loop calls executeAttack() on hero references, resolving spellcasts or physical melee strikes dynamically depending on the actual subtype.\n\nCascading Transforms is an unrelated scene graph concept about propagating coordinate changes to children.\n\nDynamic Payroll Calc is the analogous polymorphic pattern from HRMS payroll, a different domain despite the similar mechanism.\n\nAutomated Persistence concerns ORM entities generating SQL updates, unrelated to combat resolution."
  },
  {
    id: "csc302_ch5_061",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Which class defines the execution entry, update, and exit hooks shared by every character animation state?",
    options: [
      "AnimationState Base Class",
      "IdleState, which is one of the concrete states built on top of that base class, alongside SprintState and FallState",
      "State Machine Controller",
      "SceneNode"
    ],
    correctAnswer: 0,
    explanation: "State Machines for Character Animation states the AnimationState Base Class defines execution entry, update, and exit hooks.\n\nIdleState is one of the concrete states built on top of that base class, alongside SprintState and FallState, not the base class itself.\n\nThe State Machine Controller instead manages active states and controls transitions, a coordinating role rather than defining the hooks.\n\nSceneNode is an unrelated scene graph class holding coordinates and child node lists."
  },
  {
    id: "csc302_ch5_062",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Which component manages which animation state is currently active and controls transitions between states to keep animation fluid?",
    options: [
      "The State Machine Controller",
      "The AnimationState Base Class",
      "IdleState",
      "FallState"
    ],
    correctAnswer: 0,
    explanation: "State Machines for Character Animation states the State Machine Controller manages active states and controls transitions, ensuring animations remain fluid and responsive.\n\nThe AnimationState Base Class defines the shared entry, update, and exit hooks used by every state but does not itself manage transitions between them.\n\nIdleState and FallState are individual concrete states managed by the controller, not the manager itself."
  },
  {
    id: "csc302_ch5_063",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Moving a car's chassis node in a scene graph automatically moves its child wheel nodes along with it. Which concept explains this automatic propagation?",
    options: [
      "Cascading Transforms",
      "Recursive Traversal",
      "SceneNode, which is the class holding local coordinates and child node lists",
      "Modular Components"
    ],
    correctAnswer: 0,
    explanation: "Scene Graphs and Node Hierarchies states cascading transforms occur when moving a parent node, like a car chassis, propagates coordinate updates down to all child nodes, such as the wheels, automatically.\n\nRecursive Traversal instead describes drawing routines walking the graph recursively to render nodes in spatial order, a rendering concern rather than coordinate propagation.\n\nSceneNode is the class holding local coordinates and child node lists, not the propagation behavior itself.\n\nModular Components is an unrelated game concept about attaching reusable traits to entities."
  },
  {
    id: "csc302_ch5_064",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Which class holds local coordinates, scale values, and lists of nested child nodes in a game scene graph?",
    options: [
      "SceneNode",
      "AnimationState, which defines execution entry, update, and exit hooks for character animation",
      "BTNode, which is the abstract base class for behaviour tree AI decisions, evaluating Status codes",
      "FSNode, which is the file system composite base class from systems programming"
    ],
    correctAnswer: 0,
    explanation: "Scene Graphs and Node Hierarchies states the SceneNode Class holds local coordinates, scale values, and lists of nested child nodes.\n\nAnimationState defines execution entry, update, and exit hooks for character animation, an unrelated hierarchy.\n\nBTNode is the abstract base class for behaviour tree AI decisions, evaluating Status codes rather than holding spatial coordinates.\n\nFSNode is the file system composite base class from systems programming, unrelated to game scene graphs."
  },
  {
    id: "csc302_ch5_065",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "In a game's AI behaviour tree, which abstract base class declares evaluation methods that return Status codes such as Success, Failure, or Running?",
    options: [
      "BTNode",
      "Selector",
      "Sequence",
      "SceneNode"
    ],
    correctAnswer: 0,
    explanation: "AI Agent Decision Objects (Behaviour Trees) states the BTNode Abstract Base Class declares evaluation methods that return Status codes: Success, Failure, and Running.\n\nSelector and Sequence are composite nodes that control decision pathways within the tree, built on top of BTNode rather than being the base class itself.\n\nSceneNode is an unrelated class from the scene graph slide holding spatial coordinates rather than AI status codes."
  },
  {
    id: "csc302_ch5_066",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Which behaviour tree action nodes execute specific agent actions like patrolling, fleeing, or attacking?",
    options: [
      "Patrol, Flee, and Attack",
      "Selector and Sequence, which are composite nodes that control decision pathways",
      "Success, Failure, and Running, which are the Status codes returned by BTNode evaluation",
      "Idle, Sprint, and Fall, which are animation states from a different slide about character animation"
    ],
    correctAnswer: 0,
    explanation: "AI Agent Decision Objects (Behaviour Trees) names Patrol, Flee, and Attack as action nodes that execute specific agent actions.\n\nSelector and Sequence are composite nodes that control decision pathways, not the action nodes that perform actual behavior.\n\nSuccess, Failure, and Running are the Status codes returned by BTNode evaluation, not action node names.\n\nIdle, Sprint, and Fall are animation states from a different slide about character animation, not behaviour tree actions."
  },
  {
    id: "csc302_ch5_067",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Which class represents a point in 3D space that emits audio files in a game audio engine?",
    options: [
      "SoundEmitter",
      "VoicePool Manager",
      "DataFilter Pipeline",
      "TelemetryPacket"
    ],
    correctAnswer: 0,
    explanation: "Audio Engine Channel & Voice Objects states the SoundEmitter Class represents a point in 3D space that emits audio files.\n\nThe VoicePool Manager instead manages voices dynamically to prevent audio clipping across speaker layouts, a coordination role rather than a sound source.\n\nDataFilter Pipeline is a telemetry concept for filtering sensor noise, unrelated to audio emission.\n\nTelemetryPacket parses raw binary telemetry data streams, also unrelated to audio."
  },
  {
    id: "csc302_ch5_068",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Which audio engine mechanism dynamically manages voices to prevent clipping across a multi-channel speaker layout?",
    options: [
      "VoicePool Manager",
      "SoundEmitter",
      "Real-Time Environmental Reverb",
      "Entity Hydration"
    ],
    correctAnswer: 0,
    explanation: "Audio Engine Channel & Voice Objects states the VoicePool Manager manages voices dynamically to prevent audio clipping on multi-channel speaker layouts.\n\nSoundEmitter represents the individual audio-emitting point in space, not the voice-management mechanism.\n\nReal-Time Environmental Reverb instead modifies emitter qualities based on nearby occlusion geometry, a different audio effect.\n\nEntity Hydration is an unrelated game save system concept about restoring objects from a file."
  },
  {
    id: "csc302_ch5_069",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Which interface enforces standard data preservation and load contracts so a game's state can be saved and restored?",
    options: [
      "The Serializable Interface",
      "The Shape Base Interface",
      "The Task Interface",
      "The TradingStrategy Interface"
    ],
    correctAnswer: 0,
    explanation: "Game Save/Load Serialization Systems states the Serializable Interface enforces standard data preservation and load contracts.\n\nThe Shape Base Interface enforces drawing contracts for canvas rendering, an unrelated GUI concept.\n\nThe Task Interface encapsulates units of work as run-capable objects for thread pools, unrelated to save systems.\n\nThe TradingStrategy Interface evaluates price movements in a financial simulation, also unrelated to save systems."
  },
  {
    id: "csc302_ch5_070",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "When a saved game file is loaded back, objects are instantiated dynamically to restore the state of the active session. Which concept describes this restoration step?",
    options: [
      "Entity Hydration",
      "System Serializer Objects",
      "Automated Persistence",
      "Recursive Traversal"
    ],
    correctAnswer: 0,
    explanation: "Game Save/Load Serialization Systems states Entity Hydration reads files back, instantiating objects dynamically to restore the state of the active game session.\n\nSystem Serializer Objects instead perform the opposite direction, converting active entities into compact binary or JSON formats for saving.\n\nAutomated Persistence is an ORM concept about generating SQL updates for dirty entities, unrelated to game save restoration.\n\nRecursive Traversal describes walking a scene graph to render nodes, unrelated to loading saved state."
  },
  {
    id: "csc302_ch5_071",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Epic Games needed a system to manage millions of interactive, networked entities in Unreal Engine with high stability and performance. Which class model did the solution design?",
    options: [
      "The AActor class model",
      "The FSNode class model",
      "The DatabaseFactory model",
      "The BTNode model"
    ],
    correctAnswer: 0,
    explanation: "Case Study: Unreal Engine Actor Framework states the solution designed the AActor class model, combining classic OOP inheritance with modular components.\n\nFSNode is the unrelated file system composite base class from systems programming.\n\nDatabaseFactory is a design pattern example for selecting database drivers, unrelated to Unreal Engine actors.\n\nBTNode is the behaviour tree base class from AI decision objects, a different game engine slide."
  },
  {
    id: "csc302_ch5_072",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "The Unreal Engine Actor Framework case study combined classic OOP inheritance with modular components to build the ThreadPoolManager class model.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "Case Study: Unreal Engine Actor Framework states the solution designed the AActor class model, combining classic OOP inheritance with modular components. ThreadPoolManager is instead the thread-scheduling class from the systems programming domain, unrelated to this case study, so the statement is false."
  },
  {
    id: "csc302_ch5_073",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Consider these two claims about the Unreal Engine case study: (1) the AActor model proves structured OOP hierarchies can scale to real-time applications, and (2) the case study reports powering many of the world's most successful games. Which claims are supported?",
    options: [
      "Only the claim about OOP hierarchies scaling to real-time applications",
      "Only the claim about powering many of the world's most successful games",
      "All of these",
      "None of these"
    ],
    correctAnswer: 2,
    explanation: "Case Study: Unreal Engine Actor Framework states the outcome demonstrates that structured OOP hierarchies can scale to handle highly intensive, real-time applications, supporting the first claim.\n\nThe same case study reports the AActor model powering many of the world's most successful games, supporting the second claim as well.\n\nSince both specific claims are genuinely supported, all of these is the correct answer.\n\nSince both claims are genuinely supported, none of these cannot be correct."
  },
  {
    id: "csc302_ch5_074",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Which quality does wrapping dangerous, direct pointer manipulations inside safe class boundaries provide in systems programming?",
    options: [
      "Safety",
      "Portability",
      "Resource Management",
      "Modularity"
    ],
    correctAnswer: 0,
    explanation: "Systems & Network Programming states Safety wraps dangerous, direct pointer manipulations inside safe class boundaries.\n\nPortability instead standardizes different operating system interfaces behind clean, cross-platform abstractions, a separate concern.\n\nResource Management (RAII) binds system resource lifecycles to object lifecycles, also distinct from pointer safety.\n\nModularity is an enterprise scale concern about isolating development domains, not a systems programming concern listed here."
  },
  {
    id: "csc302_ch5_075",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Which systems programming principle automatically binds a system resource's lifecycle, such as a file handle, to the lifecycle of the object that owns it?",
    options: [
      "Resource Management (RAII)",
      "Safety",
      "Portability, which standardizes operating system interfaces behind cross-platform abstractions",
      "Hot Swapping"
    ],
    correctAnswer: 0,
    explanation: "Systems & Network Programming states Resource Management (RAII) automatically binds system resource lifecycles to object lifecycles.\n\nSafety instead wraps dangerous pointer manipulations inside safe class boundaries, a related but distinct guarantee.\n\nPortability standardizes operating system interfaces behind cross-platform abstractions, a different concern from resource binding.\n\nHot Swapping refers to replacing network hardware seamlessly, an unrelated device driver concept."
  },
  {
    id: "csc302_ch5_076",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Which interface declares core hardware operations such as transmitPacket() and receiveFrame() in a Hardware Abstraction Layer?",
    options: [
      "The NetworkDriver Interface",
      "The Socket Class, which wraps complex connection handles into clean interfaces for network streams",
      "The Task Interface, which encapsulates units of work as run-capable objects for thread pools",
      "The Actuator Interface, which enforces movement contracts for robotics"
    ],
    correctAnswer: 0,
    explanation: "Device Drivers & Interface Contracts states the NetworkDriver Interface declares core operations like transmitPacket() and receiveFrame().\n\nThe Socket Class wraps complex connection handles into clean interfaces for network streams, a related but distinct abstraction.\n\nThe Task Interface encapsulates units of work as run-capable objects for thread pools, unrelated to hardware drivers.\n\nThe Actuator Interface enforces movement contracts for robotics, also unrelated to network hardware."
  },
  {
    id: "csc302_ch5_077",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "A kernel can switch from an Intel to a Realtek network chipset without any changes to kernel code, because the kernel only interacts with the generic driver interface. Which concept describes this?",
    options: [
      "Hot Swapping",
      "Automated Buffering, which describes network sockets managing packet fragmentation and retries internally",
      "Dynamic Swapping",
      "Interchangeability"
    ],
    correctAnswer: 0,
    explanation: "Device Drivers & Interface Contracts states hot swapping means changing network hardware works seamlessly since the kernel interacts exclusively with the generic driver interface.\n\nAutomated Buffering describes network sockets managing packet fragmentation and retries internally, a different mechanism.\n\nDynamic Swapping refers to GUI containers swapping layout manager objects at runtime, an unrelated domain.\n\nInterchangeability describes swapping payment gateway processors in e-commerce, a different domain despite the similar idea."
  },
  {
    id: "csc302_ch5_078",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Which class wraps complex systems connection handles inside a simple, clean interface for network programming?",
    options: [
      "The Socket Class",
      "The NetworkDriver Interface",
      "The Connection Class",
      "The FSNode Base Class"
    ],
    correctAnswer: 0,
    explanation: "Network Sockets & Stream Abstractions states the Socket Class wraps complex systems connection handles inside simple, clean interfaces.\n\nThe NetworkDriver Interface instead declares hardware-level operations like transmitPacket(), a lower layer than the socket abstraction.\n\nThe Connection Class models a persistent database socket in the database connections slide, a different kind of connection entirely.\n\nThe FSNode Base Class defines general file system properties, unrelated to network sockets."
  },
  {
    id: "csc302_ch5_079",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Which network socket mechanism automatically manages packet fragmentation, buffer management, and retries internally?",
    options: [
      "Automated Buffering",
      "InputStream / OutputStream Objects",
      "Hot Swapping",
      "The Socket Class"
    ],
    correctAnswer: 0,
    explanation: "Network Sockets & Stream Abstractions states automated buffering means class internals manage network packet fragmentation, buffer management, and retries automatically.\n\nInputStream / OutputStream Objects instead allow reading and writing network data using standard file read and write methods, a separate abstraction from internal buffering.\n\nHot Swapping refers to replacing network hardware chipsets, an unrelated device driver concept.\n\nThe Socket Class itself is the connection wrapper, while automated buffering is the internal behavior it provides, so the class name alone does not describe the buffering mechanism."
  },
  {
    id: "csc302_ch5_080",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "In a file system's composite pattern, which class acts as the composite container holding list references to nested FSNode instances?",
    options: [
      "Directory",
      "File",
      "FSNode, which is the shared base class defining general properties like name, size, and permissions",
      "Socket"
    ],
    correctAnswer: 0,
    explanation: "File System Nodes (Directory/File Composition) states the Directory Class acts as a composite container, holding list references to nested FSNode instances.\n\nThe File Class instead represents end-point data on disk, the leaf of the composite structure rather than the container.\n\nFSNode is the shared base class defining general properties like name, size, and permissions, not the composite container itself.\n\nSocket is an unrelated networking class for wrapping connection handles."
  },
  {
    id: "csc302_ch5_081",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Which base class defines general properties like name, size, and permissions shared by both files and directories?",
    options: [
      "FSNode",
      "Directory",
      "File",
      "Component"
    ],
    correctAnswer: 0,
    explanation: "File System Nodes (Directory/File Composition) states the FSNode Base Class defines general properties like name, size, and permissions.\n\nDirectory and File are both subclasses built on top of FSNode, representing the composite container and the leaf node respectively, not the shared base itself.\n\nComponent is the unrelated abstract base class for GUI widgets, not file system nodes."
  },
  {
    id: "csc302_ch5_082",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Which object parses headers, cookies, query strings, and payload data into structured class properties when a web server receives an HTTP request?",
    options: [
      "The Request Object",
      "The Response Class",
      "Controller Objects, which contain application logic, receiving Request inputs and producing Response outputs",
      "The Connection Class, which models a persistent database socket"
    ],
    correctAnswer: 0,
    explanation: "Web Server Routing & Controller Handlers states the Request Object parses headers, cookies, query strings, and payload data into structured class properties.\n\nThe Response Class instead provides simple API methods like sendJSON() or redirect() to build the outgoing HTTP response, the opposite direction.\n\nController Objects contain application logic, receiving Request inputs and producing Response outputs, but they do not themselves parse the raw request.\n\nThe Connection Class models a persistent database socket, an unrelated database concept."
  },
  {
    id: "csc302_ch5_083",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Which class provides simple API methods such as sendJSON() or redirect() to build outgoing HTTP responses?",
    options: [
      "The Response Class",
      "The Request Object, which parses incoming data into structured properties, the input side",
      "Controller Objects, which use both Request and Response to execute application logic",
      "The PreparedStatement Object, which pre-compiles SQL templates in the database connections slide"
    ],
    correctAnswer: 0,
    explanation: "Web Server Routing & Controller Handlers states the Response Class provides simple API methods, such as sendJSON() or redirect(), to build HTTP responses.\n\nThe Request Object parses incoming data into structured properties, the input side rather than the output-building side.\n\nController Objects use both Request and Response to execute application logic, but the methods for building the response itself belong to the Response Class.\n\nThe PreparedStatement Object pre-compiles SQL templates in the database connections slide, an unrelated concept."
  },
  {
    id: "csc302_ch5_084",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Which class pre-compiles SQL templates, keeping query structures separate from variable inputs to prevent injection attacks?",
    options: [
      "PreparedStatement",
      "Connection",
      "ResultSet",
      "ORM, which refers to the broader mapping pattern between tables and classes"
    ],
    correctAnswer: 0,
    explanation: "Database Connections & Statement Objects states the PreparedStatement Object pre-compiles SQL templates, keeping query structures separate from variable inputs to prevent injection attacks.\n\nThe Connection Class instead models the persistent database socket and manages authorization and transaction sessions, a different responsibility.\n\nThe ResultSet Class wraps cursor query results for scrolling through rows, a step that happens after the statement executes.\n\nORM refers to the broader mapping pattern between tables and classes, not the specific injection-prevention mechanism."
  },
  {
    id: "csc302_ch5_085",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Which class models a persistent database socket, managing authorization and active transaction sessions?",
    options: [
      "The Connection Class",
      "The PreparedStatement Object, which pre-compiles SQL templates separately from the connection itself, a distinct responsibility",
      "The ResultSet Class, which wraps cursor query results after a statement executes",
      "The WorkerThread Class"
    ],
    correctAnswer: 0,
    explanation: "Database Connections & Statement Objects states the Connection Class models a persistent database socket, managing authorization and active transaction sessions.\n\nThe PreparedStatement Object pre-compiles SQL templates separately from the connection itself, a distinct responsibility.\n\nThe ResultSet Class wraps cursor query results after a statement executes, not the connection socket.\n\nThe WorkerThread Class is an unrelated thread pool concept for pulling and executing queued tasks."
  },
  {
    id: "csc302_ch5_086",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "An ORM like Hibernate lets a developer call user.getOrders() to retrieve related rows as nested objects. Which ORM concept does this represent?",
    options: [
      "Relationship Integrity, modeling foreign keys as nested object collections",
      "Mapping Entities, where database columns map to class properties",
      "Automated Persistence, where dirty entities generate SQL updates",
      "Automated Buffering, where packet fragmentation is managed internally"
    ],
    correctAnswer: 0,
    explanation: "Object-Relational Mapping (ORM) Patterns states relationship integrity means foreign key constraints are modeled as nested object collections, such as user.getOrders().\n\nMapping Entities instead describes columns mapping to class properties and rows representing object instances, a related but distinct ORM concept.\n\nAutomated Persistence describes updating a property marking an entity dirty so SQL updates run automatically, a separate ORM behavior.\n\nAutomated Buffering is an unrelated network socket concept about managing packet fragmentation."
  },
  {
    id: "csc302_ch5_087",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "In an ORM, updating a class property's value marks the entity as dirty, which then automatically generates and executes the corresponding SQL update in the background. Which ORM concept is this?",
    options: [
      "Automated Persistence",
      "Mapping Entities",
      "Relationship Integrity, which concerns modeling foreign keys as nested object collections",
      "Rollback Capabilities, which is a banking transaction concept about undoing failed transfers"
    ],
    correctAnswer: 0,
    explanation: "Object-Relational Mapping (ORM) Patterns states automated persistence means updating class property values marks entities as dirty, automatically generating and executing SQL updates in the background.\n\nMapping Entities instead describes the basic column-to-property and row-to-instance correspondence, not the dirty-tracking update behavior.\n\nRelationship Integrity concerns modeling foreign keys as nested object collections, a different ORM concern.\n\nRollback Capabilities is a banking transaction concept about undoing failed transfers, unrelated to ORM persistence."
  },
  {
    id: "csc302_ch5_088",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Which interface encapsulates a unit of work as a run-capable object, such as by implementing Runnable, so it can be placed on a shared work queue?",
    options: [
      "The Task Interface",
      "The WorkerThread Class",
      "The ThreadPoolManager, which monitors queue depths and spins threads up or down, a coordination role",
      "The Serializable Interface, which enforces save and load contracts for games"
    ],
    correctAnswer: 0,
    explanation: "Thread Pool Task Queues & Workers states the Task Interface encapsulates units of work as run-capable objects, for example implementing Runnable.\n\nThe WorkerThread Class is instead the specialized thread object that pulls and executes tasks from the queue, not the unit of work itself.\n\nThe ThreadPoolManager monitors queue depths and spins threads up or down, a coordination role rather than representing a single task.\n\nThe Serializable Interface enforces save and load contracts for games, an unrelated concept."
  },
  {
    id: "csc302_ch5_089",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Which component monitors queue depths and dynamically spins up or shuts down worker threads to match server workloads?",
    options: [
      "ThreadPoolManager",
      "WorkerThread",
      "Task Interface",
      "Router Engines"
    ],
    correctAnswer: 0,
    explanation: "Thread Pool Task Queues & Workers states the ThreadPoolManager monitors queue depths, dynamically spinning up or shutting down threads to match server workloads.\n\nWorkerThread is the specialized thread object that pulls and executes queued tasks, not the component that manages overall thread count.\n\nThe Task Interface represents a single unit of work, not the queue-monitoring mechanism.\n\nRouter Engines is an unrelated ESB messaging concept about routing messages to handler classes."
  },
  {
    id: "csc302_ch5_090",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "If a file manager service crashes inside a microkernel operating system, what happens under the microkernel's stability model?",
    options: [
      "The microkernel restarts the service object without interrupting the rest of the OS",
      "The entire operating system must be rebooted immediately",
      "All other isolated services also crash simultaneously",
      "The kernel permanently disables that class of service"
    ],
    correctAnswer: 0,
    explanation: "Operating System Microkernel Services states that if a system service crashes, the microkernel restarts the service object without interrupting the rest of the OS.\n\nRebooting the entire OS is the opposite of the stability benefit the microkernel design is meant to provide.\n\nOther isolated services are described as running independently in user space, so one crash does not cascade to the others.\n\nPermanently disabling the service is not described anywhere in the source; the stated behavior is a restart, not a shutdown."
  },
  {
    id: "csc302_ch5_091",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "In a microkernel architecture, how is Inter-Process Communication (IPC) between isolated services managed?",
    options: [
      "By sending structured message objects across system services",
      "By sharing raw memory pointers directly between services",
      "By routing all communication through a single database connection",
      "By recompiling the kernel each time a service needs to talk to another"
    ],
    correctAnswer: 0,
    explanation: "Operating System Microkernel Services states that Service Objects manage IPC by sending structured message objects across system services.\n\nSharing raw memory pointers directly would violate the isolation the microkernel design is meant to preserve, and is not described in the source.\n\nRouting communication through a database connection is never mentioned; database connections belong to an unrelated slide.\n\nRecompiling the kernel for each communication event is not described and would defeat the purpose of runtime IPC."
  },
  {
    id: "csc302_ch5_092",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "The Linux kernel must support dozens of file systems like ext4, FAT, NTFS, and NFS through one unified system-call interface. Which layer was built to achieve this?",
    options: [
      "The Virtual File System (VFS) layer",
      "The Hardware Abstraction Layer (HAL)",
      "The Enterprise Service Bus (ESB)",
      "The Object-Relational Mapping (ORM) layer"
    ],
    correctAnswer: 0,
    explanation: "Case Study: Linux Virtual File System (VFS) states the solution built the Virtual File System (VFS) layer using C, structuring it as an object-oriented interface.\n\nThe Hardware Abstraction Layer is instead described earlier for device drivers handling network hardware, a related but distinct systems abstraction.\n\nThe Enterprise Service Bus routes messages between enterprise applications, an unrelated business domain.\n\nThe Object-Relational Mapping layer maps database tables to classes, unrelated to file system unification."
  },
  {
    id: "csc302_ch5_093",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "How does the Linux VFS layer map common file operations to specific file system drivers, given that it is written in C rather than an object-oriented language?",
    options: [
      "It uses function pointer tables, called vptrs, structured as an object-oriented interface",
      "It requires every file system driver to be rewritten entirely in C++",
      "It relies exclusively on a relational database to store file metadata",
      "It compiles a separate kernel binary for each supported file system"
    ],
    correctAnswer: 0,
    explanation: "Case Study: Linux Virtual File System (VFS) states the VFS was structured as an object-oriented interface using function pointer tables, vptrs, to map common operations to specific file system drivers, despite C lacking native OOP syntax.\n\nRewriting every driver in C++ is not what the case study describes; the object-oriented structure is achieved in C itself through vptrs.\n\nStoring file metadata in a relational database is never mentioned in this case study.\n\nCompiling a separate kernel binary per file system is not the mechanism described; a single unified interface is the entire point of the VFS."
  },
  {
    id: "csc302_ch5_094",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "The outcome of the Linux VFS case study is that applications can read and write files without needing to understand the underlying storage format.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "Case Study: Linux Virtual File System (VFS) states the outcome allows applications to perform read/write actions on files without needing to understand the underlying storage formats, matching the statement exactly."
  },
  {
    id: "csc302_ch5_095",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Consider these claims about systems programming abstractions: (1) the Socket Class wraps connection handles into a clean interface, and (2) the FSNode Base Class manages thread pool queue depths. Which claims does the source support?",
    options: [
      "Only the claim about the Socket Class wrapping connection handles",
      "Only the claim about FSNode managing thread pool queue depths",
      "All of these",
      "None of these"
    ],
    correctAnswer: 0,
    explanation: "Network Sockets & Stream Abstractions states the Socket Class wraps complex systems connection handles inside simple, clean interfaces, supporting the first claim.\n\nFSNode is defined in File System Nodes as holding name, size, and permissions, while queue depth monitoring is instead performed by ThreadPoolManager, so the second claim is unsupported.\n\nSince only one of the two specific claims is genuinely supported, all of these cannot be correct.\n\nSince one claim is genuinely supported, none of these is also incorrect."
  },
  {
    id: "csc302_ch5_096",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "In a CAD engine, which representation lets a part's geometric parameters, like length or hole radius, update instantly across the model as variables change?",
    options: [
      "Parametric Representation",
      "Constraint Solving Engines",
      "Material Properties",
      "Spatial Indexing Queries"
    ],
    correctAnswer: 0,
    explanation: "CAD & Engineering Systems states parametric representation means parts hold geometric parameters, such as length, hole radius, and thread counts, that update instantly as variables change.\n\nConstraint Solving Engines instead define geometric relationships like tangents and concentricity as mathematical constraint objects, a related but distinct mechanism.\n\nMaterial Properties are classes enabling real-time mass and stress calculations, a separate CAD concern.\n\nSpatial Indexing Queries belong to the unrelated GIS slide about proximity calculations."
  },
  {
    id: "csc302_ch5_097",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Which CAD mechanism defines geometric relationships such as tangents, concentricity, and offsets as mathematical constraint objects between assembly parts?",
    options: [
      "Constraint Solving Engines",
      "Parametric Representation",
      "Material Properties, which enable real-time mass and stress calculations",
      "Component Class"
    ],
    correctAnswer: 0,
    explanation: "CAD & Engineering Systems states constraint solving engines define geometric relationships like tangents, concentricity, and offsets as mathematical constraint objects.\n\nParametric Representation instead concerns individual part parameters updating instantly as variables change, not the relationships between parts.\n\nMaterial Properties enable real-time mass and stress calculations, a separate physical concern.\n\nThe Component Class is the abstract base for geometric objects in the parametric modelling assemblies slide, not the constraint mechanism itself."
  },
  {
    id: "csc302_ch5_098",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "In parametric modelling assemblies, which class is the composite container that manages relationships between nested sub-assemblies and individual parts, keeping the Bill of Materials accurate?",
    options: [
      "The Assembly Subclass",
      "The Part Subclass",
      "The Component Class, which is the abstract base class for all geometric objects, sitting above both Part and Assembly",
      "The Directory Class"
    ],
    correctAnswer: 0,
    explanation: "Parametric Modelling Assemblies states the Assembly Subclass is a composite container that manages relationships between nested sub-assemblies and individual parts, keeping BOM data accurate.\n\nThe Part Subclass instead represents individual physical elements like bolts, plates, or housings, the leaves rather than the composite container.\n\nThe Component Class is the abstract base class for all geometric objects, sitting above both Part and Assembly rather than being the composite container itself.\n\nThe Directory Class is the unrelated file system composite container from systems programming."
  },
  {
    id: "csc302_ch5_099",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Which class is the abstract base class for all geometric objects in a parametric modelling assembly, sitting above both Part and Assembly?",
    options: [
      "Component",
      "Part, which is a subclass representing individual physical elements such as bolts and plates, one level below Component",
      "Assembly, which is the composite subclass managing nested sub-assemblies and parts, also one level below Component",
      "FSNode"
    ],
    correctAnswer: 0,
    explanation: "Parametric Modelling Assemblies states the Component Class is the abstract base class for all geometric objects.\n\nPart is a subclass representing individual physical elements such as bolts and plates, one level below Component.\n\nAssembly is the composite subclass managing nested sub-assemblies and parts, also one level below Component.\n\nFSNode is the unrelated file system base class from systems programming, not a CAD concept."
  },
  {
    id: "csc302_ch5_100",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Which base class combines spatial geometries with descriptive metadata attributes, such as population or land use, in a Geographic Information System?",
    options: [
      "Feature Base Class",
      "Geometry Components",
      "Spatial Indexing Queries, which integrate features into spatial indexes like R-Tree objects",
      "Component Class"
    ],
    correctAnswer: 0,
    explanation: "GIS Spatial Feature Objects states the Feature Base Class combines spatial geometries with descriptive metadata attributes, such as population or land use.\n\nGeometry Components instead refer to Point, LineString, and Polygon classes managing coordinate reference transformations, a related but distinct concept.\n\nSpatial Indexing Queries integrate features into spatial indexes like R-Tree objects, a separate GIS mechanism rather than the base class.\n\nThe Component Class is the unrelated CAD abstract base class for geometric objects."
  },
  {
    id: "csc302_ch5_101",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Which GIS classes manage coordinate reference transformations as geometry components?",
    options: [
      "Point, LineString, and Polygon",
      "Circle, Rectangle, and Polygon, which are concrete shapes from the canvas rendering slide",
      "BoxCollider and SphereCollider, which are physics engine collider subtypes",
      "Component, Part, and Assembly, which are CAD classes for parametric modelling"
    ],
    correctAnswer: 0,
    explanation: "GIS Spatial Feature Objects names Point, LineString, and Polygon as the geometry components that manage coordinate reference transformations.\n\nCircle, Rectangle, and Polygon are concrete shapes from the canvas rendering slide, a different domain despite sharing Polygon.\n\nBoxCollider and SphereCollider are physics engine collider subtypes, unrelated to GIS.\n\nComponent, Part, and Assembly are CAD classes for parametric modelling, unrelated to geography."
  },
  {
    id: "csc302_ch5_102",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Which GIS mechanism integrates spatial features into structures like R-Tree objects to perform efficient intersection and proximity calculations?",
    options: [
      "Spatial Indexing Queries",
      "Feature Base Class",
      "Geometry Components, which manage coordinate reference transformations for Point, LineString, and Polygon classes",
      "Constraint Solving Engines"
    ],
    correctAnswer: 0,
    explanation: "GIS Spatial Feature Objects states spatial indexing queries integrate features into spatial indexes, such as R-Tree objects, for efficient intersection and proximity calculations.\n\nThe Feature Base Class instead combines geometry with descriptive metadata, a foundational structure rather than the indexing mechanism.\n\nGeometry Components manage coordinate reference transformations for Point, LineString, and Polygon classes, a separate concern from indexing.\n\nConstraint Solving Engines are an unrelated CAD concept defining geometric relationships between assembly parts."
  },
  {
    id: "csc302_ch5_103",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Which interface enforces standard movement contracts, such as setTargetPosition() and getFeedbackCurrent(), in robotics control loops?",
    options: [
      "The Actuator Interface",
      "The PID Controller Class",
      "Safety Monitors",
      "The NetworkDriver Interface"
    ],
    correctAnswer: 0,
    explanation: "Robotics Control Loops (Actuator Classes) states the Actuator Interface enforces standard movement contracts, such as setTargetPosition() and getFeedbackCurrent().\n\nThe PID Controller Class instead implements feedback calculations to adjust motor currents, using the actuator interface rather than defining it.\n\nSafety Monitors are Observer classes that halt the robot if safety values are breached, a separate monitoring role.\n\nThe NetworkDriver Interface is an unrelated systems programming interface for hardware chipsets."
  },
  {
    id: "csc302_ch5_104",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "A background thread continuously watches robot safety values and halts the robot instantly if a threshold is breached. Which robotics class role does this describe?",
    options: [
      "Safety Monitors, implemented as Observer classes",
      "PID Controller Class, implementing feedback calculations",
      "Actuator Interface, enforcing movement contracts",
      "TelemetryPacket Objects, parsing raw binary streams"
    ],
    correctAnswer: 0,
    explanation: "Robotics Control Loops (Actuator Classes) states Safety Monitors are Observer classes that run on background threads, halting the robot instantly if safety values are breached.\n\nThe PID Controller Class instead adjusts motor currents to maintain stable alignments, a control function rather than a safety watchdog.\n\nThe Actuator Interface defines movement contracts like setTargetPosition(), not the background safety-watching behavior.\n\nTelemetryPacket Objects parse incoming binary telemetry data, an unrelated sensor fusion concept."
  },
  {
    id: "csc302_ch5_105",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Which telemetry class parses raw binary data streams from sensors like lidar, radar, or GPS into structured, accessible formats?",
    options: [
      "TelemetryPacket Objects",
      "DataFilter Pipelines",
      "Dynamic Event Dispatchers",
      "PID Controller Class"
    ],
    correctAnswer: 0,
    explanation: "Sensor Fusion Telemetry Parsers states TelemetryPacket Objects parse raw binary data streams into structured, accessible formats.\n\nDataFilter Pipelines instead apply algorithmic filters, like Kalman filter objects, to remove sensor noise after parsing.\n\nDynamic Event Dispatchers detect potential obstacles and route danger events, a downstream reaction rather than the initial parsing step.\n\nThe PID Controller Class is an unrelated robotics feedback control concept."
  },
  {
    id: "csc302_ch5_106",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Which telemetry mechanism applies algorithmic filters, such as Kalman filter objects, to remove noise from sensor readings?",
    options: [
      "DataFilter Pipelines",
      "TelemetryPacket Objects",
      "Dynamic Event Dispatchers",
      "Measurement Automation pipelines"
    ],
    correctAnswer: 0,
    explanation: "Sensor Fusion Telemetry Parsers states DataFilter Pipelines apply algorithmic filters, like Kalman filter objects, to remove sensor noise.\n\nTelemetryPacket Objects instead parse the raw binary stream into structured data before any filtering occurs.\n\nDynamic Event Dispatchers route detected danger events to control systems, a step that happens after filtering.\n\nMeasurement Automation pipelines are an unrelated lab equipment concept for coordinating instrument logging."
  },
  {
    id: "csc302_ch5_107",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Which class manages connection protocols like USB, GPIB, or Ethernet for scientific lab instruments in SCPI-based control?",
    options: [
      "Instrument Base Class",
      "Device Classes",
      "Measurement Automation pipelines, which coordinate multiple instrument objects for logging",
      "Connection Class"
    ],
    correctAnswer: 0,
    explanation: "Lab Equipment Instrument Control (SCPI) states the Instrument Base Class manages connection protocols like USB, GPIB, or Ethernet.\n\nDevice Classes instead are specialized subclasses for specific models, abstracting low-level commands as intuitive methods like readVoltage(), built on top of the base class.\n\nMeasurement Automation pipelines coordinate multiple instrument objects for logging, a separate higher-level concern.\n\nThe Connection Class is the unrelated database socket abstraction from the database connections slide."
  },
  {
    id: "csc302_ch5_108",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Which lab equipment classes abstract low-level oscilloscope or spectrometer commands as intuitive methods such as readVoltage()?",
    options: [
      "Device Classes",
      "Instrument Base Class",
      "Measurement Automation pipelines",
      "Extractor Objects"
    ],
    correctAnswer: 0,
    explanation: "Lab Equipment Instrument Control (SCPI) states Device Classes are specialized subclasses for specific models, abstracting low-level commands as intuitive methods, such as readVoltage().\n\nThe Instrument Base Class instead manages the shared connection protocols like USB or GPIB, not the model-specific command abstraction.\n\nMeasurement Automation pipelines coordinate multiple instrument objects for automatic logging, a separate concern from individual command abstraction.\n\nExtractor Objects are an unrelated ETL concept for retrieving data from APIs, logs, or databases."
  },
  {
    id: "csc302_ch5_109",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "In an ETL pipeline, which objects retrieve data from diverse sources like APIs, logs, and databases?",
    options: [
      "Extractor Objects",
      "Transformer Pipelines",
      "Loader Classes, which write the transformed data into warehouses or storage systems, the final stage",
      "TelemetryPacket Objects"
    ],
    correctAnswer: 0,
    explanation: "ETL Pipelines (Data Processing Objects) states Extractor Objects retrieve data from diverse sources, such as APIs, logs, and databases.\n\nTransformer Pipelines instead clean, filter, and restructure the already-extracted data into target structures.\n\nLoader Classes write the transformed data into warehouses or storage systems, the final stage rather than the first.\n\nTelemetryPacket Objects are an unrelated concept for parsing binary sensor data streams."
  },
  {
    id: "csc302_ch5_110",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Which ETL classes write parsed data to data warehouses or storage systems, keeping the processing stages decoupled from each other?",
    options: [
      "Loader Classes",
      "Extractor Objects",
      "Transformer Pipelines, which clean and restructure the data between extraction and loading, the middle stage",
      "PACSClient Service"
    ],
    correctAnswer: 0,
    explanation: "ETL Pipelines (Data Processing Objects) states Loader Classes write parsed data to data warehouses or storage systems, keeping processing stages decoupled.\n\nExtractor Objects instead retrieve the original raw data from sources, the first stage rather than the last.\n\nTransformer Pipelines clean and restructure the data between extraction and loading, the middle stage.\n\nPACSClient Service is an unrelated medical imaging concept for coordinating diagnostic transfers."
  },
  {
    id: "csc302_ch5_111",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Which medical imaging class combines raw pixel data with complex patient and machine metadata for a CT or MRI scan?",
    options: [
      "DICOMImage",
      "Anonymizer Objects",
      "PACSClient",
      "Feature Base Class"
    ],
    correctAnswer: 0,
    explanation: "Medical Imaging Systems (DICOM Metadata) states the DICOMImage Class combines raw pixel data with complex patient and machine metadata.\n\nAnonymizer Objects instead strip sensitive medical and identity values to comply with privacy regulations, a step performed on the image data rather than the image class itself.\n\nPACSClient Service coordinates connections to medical database systems for diagnostic transfers, a communication role rather than the image representation.\n\nFeature Base Class is an unrelated GIS concept combining spatial geometry with metadata."
  },
  {
    id: "csc302_ch5_112",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "To comply with healthcare privacy regulations, which medical imaging objects strip sensitive medical and identity values from DICOM data?",
    options: [
      "Anonymizer Objects",
      "DICOMImage Class",
      "PACSClient Service",
      "Extractor Objects"
    ],
    correctAnswer: 0,
    explanation: "Medical Imaging Systems (DICOM Metadata) states Anonymizer Objects strip sensitive medical and identity values to comply with healthcare privacy regulations.\n\nThe DICOMImage Class instead combines pixel data with patient and machine metadata, the data being anonymized rather than the anonymizing mechanism.\n\nThe PACSClient Service coordinates secure connections to medical database systems, a transfer role rather than an anonymization role.\n\nExtractor Objects are an unrelated ETL concept for retrieving data from generic sources."
  },
  {
    id: "csc302_ch5_113",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Which financial trading class replays historical price updates to simulate active market conditions?",
    options: [
      "MarketSimulator",
      "TradingStrategy",
      "OrderBook",
      "PID Controller Class"
    ],
    correctAnswer: 0,
    explanation: "Financial Trading Simulation Models states the MarketSimulator Object replays historical price updates to simulate active market conditions.\n\nThe TradingStrategy Interface instead evaluates price movements and generates buy or sell orders, a decision-making role rather than replaying history.\n\nThe OrderBook Class matches simulated orders against historical liquidity limits, a downstream matching role.\n\nThe PID Controller Class is an unrelated robotics feedback control concept."
  },
  {
    id: "csc302_ch5_114",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Which financial simulation class matches simulated orders against historical liquidity limits while tracking performance metrics?",
    options: [
      "OrderBook",
      "MarketSimulator",
      "TradingStrategy",
      "DataFilter Pipeline"
    ],
    correctAnswer: 0,
    explanation: "Financial Trading Simulation Models states the OrderBook Class matches simulated orders against historical liquidity limits, tracking performance metrics.\n\nThe MarketSimulator Object instead replays historical price updates to create the simulated market conditions the OrderBook operates within.\n\nThe TradingStrategy Interface generates the buy or sell orders themselves, a step before order matching occurs.\n\nThe DataFilter Pipeline is an unrelated telemetry concept for removing sensor noise."
  },
  {
    id: "csc302_ch5_115",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Robotic platforms need to coordinate hardware drivers, localization routines, and pathfinding modules with high reliability. Which architecture did the ROS case study develop to solve this?",
    options: [
      "A modular ROS node architecture in C++, sharing data via pub/sub messaging",
      "A single monolithic C++ class handling every robotic subsystem",
      "A relational database storing all sensor readings centrally",
      "A microkernel operating system rewritten specifically for robotics"
    ],
    correctAnswer: 0,
    explanation: "Case Study: ROS (Robot Operating System) C++ Nodes states the solution developed a modular ROS node architecture using C++, where every module runs as an isolated node object sharing data via a standard pub/sub messaging system.\n\nA single monolithic class is the opposite of the modular, isolated node design the case study actually describes.\n\nA relational database centralizing all readings is never mentioned in the case study.\n\nRewriting a microkernel OS specifically for robotics is not what the case study describes; it instead uses isolated node objects over a messaging system."
  },
  {
    id: "csc302_ch5_116",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Which outcome does the ROS case study attribute to its modular node architecture?",
    options: [
      "It powers many of the world's most advanced autonomous vehicles",
      "It eliminated the need for pathfinding modules entirely",
      "It restricted ROS to research-only, non-production use",
      "It required every node to run on the same physical machine"
    ],
    correctAnswer: 0,
    explanation: "Case Study: ROS (Robot Operating System) C++ Nodes states the outcome is that it powers many of the world's most advanced autonomous vehicles, proving structured OOP designs can coordinate complex real-time operations.\n\nPathfinding modules are still described as one of the coordinated subsystems, not eliminated by the architecture.\n\nThe case study describes production-grade autonomous vehicles, not a research-only restriction.\n\nIsolated nodes communicating via pub/sub messaging are designed to support distributed operation, not requiring a single machine."
  },
  {
    id: "csc302_ch5_117",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "In the ROS C++ node architecture, every module runs as an isolated node object that shares data with other nodes over a standard messaging system.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "Case Study: ROS (Robot Operating System) C++ Nodes states every module runs as an isolated node object, sharing data via a standard pub/sub messaging system, matching the statement exactly."
  },
  {
    id: "csc302_ch5_118",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Consider these two claims about scientific and engineering domains: (1) the Assembly Subclass keeps Bill of Materials data accurate across nested parts, and (2) the DICOMImage Class replays historical stock price movements. Which claims are supported by the source?",
    options: [
      "Only the claim about the Assembly Subclass and Bill of Materials data",
      "Only the claim about DICOMImage replaying stock prices",
      "All of these",
      "None of these"
    ],
    correctAnswer: 0,
    explanation: "Parametric Modelling Assemblies states the Assembly Subclass manages relationships between nested sub-assemblies and parts, keeping BOM data accurate, supporting the first claim.\n\nDICOMImage instead combines pixel data with patient and machine metadata; replaying historical price movements is the role of MarketSimulator in an unrelated financial slide, so the second claim is unsupported.\n\nSince only one of the two specific claims is genuinely supported, all of these cannot be correct.\n\nSince one claim is genuinely supported, none of these is also incorrect."
  },
  {
    id: "csc302_ch5_119",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "A web framework needs to select SQLite for testing and PostgreSQL for production without hard-coding either choice. Which design pattern's use case does this describe?",
    options: [
      "Factories, where a DatabaseFactory returns a connection",
      "Adapters, where a clean interface maps to vendor-specific APIs",
      "Decorators, where objects are wrapped in layers of behavior",
      "Strategies, where an algorithm is chosen dynamically"
    ],
    correctAnswer: 0,
    explanation: "Design Patterns: Factories in Web Frameworks states the use case is selecting database drivers dynamically based on config options, such as SQLite for testing and PostgreSQL for production, handled by requesting a DatabaseFactory.\n\nAdapters instead solve the problem of integrating third-party shipping APIs with distinct method names, a different use case.\n\nDecorators solve the problem of adding cross-cutting middleware behavior without cluttering endpoint code, unrelated to driver selection.\n\nStrategies solve the problem of swapping discount calculation algorithms, a pricing concern rather than driver selection."
  },
  {
    id: "csc302_ch5_120",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "In the Factory pattern example for web frameworks, what does the application request in order to obtain a properly configured database connection?",
    options: [
      "The DatabaseFactory",
      "The DiscountStrategy interface",
      "The ShippingService interface",
      "The RequestHandler object"
    ],
    correctAnswer: 0,
    explanation: "Design Patterns: Factories in Web Frameworks states the application requests the DatabaseFactory to return a connection, while the factory handles driver instantiation and configuration details.\n\nThe DiscountStrategy interface belongs to the pricing engine strategy pattern, an unrelated example.\n\nThe ShippingService interface belongs to the adapter pattern example for shipping providers, also unrelated.\n\nThe RequestHandler object belongs to the decorator pattern example for middleware, a different pattern entirely."
  },
  {
    id: "csc302_ch5_121",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "A company needs to integrate DHL, FedEx, and UPS shipping APIs, each with different method naming structures, without tying application code to any one vendor. Which pattern's implementation defines a clean internal ShippingService interface with adapters like DHLAdapter?",
    options: [
      "The Adapter pattern",
      "The Factory pattern",
      "The Observer pattern, which solves notifying multiple UI widgets of state changes",
      "The Decorator pattern, which solves layering middleware behavior around a handler"
    ],
    correctAnswer: 0,
    explanation: "Design Patterns: Adapters for Third-Party APIs states the implementation defines a clean, internal ShippingService interface and implements adapters, such as DHLAdapter, to map internal calls to specific vendor APIs.\n\nThe Factory pattern instead solves dynamic driver selection for databases, a different integration problem.\n\nThe Observer pattern solves notifying multiple UI widgets of state changes, unrelated to shipping vendor integration.\n\nThe Decorator pattern solves layering middleware behavior around a handler, also unrelated to shipping vendor integration."
  },
  {
    id: "csc302_ch5_122",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "What benefit does using adapters like DHLAdapter for third-party shipping APIs provide to the application?",
    options: [
      "It keeps application code independent of external APIs, simplifying vendor changes",
      "It merges all shipping vendors into a single combined API automatically",
      "It removes the need for a ShippingService interface entirely",
      "It guarantees identical shipping rates across every vendor"
    ],
    correctAnswer: 0,
    explanation: "Design Patterns: Adapters for Third-Party APIs states the benefit is keeping application code independent of external APIs, making it simple to change shipping vendors.\n\nThe pattern does not merge vendors into one API; it keeps them separate behind individual adapter classes.\n\nThe ShippingService interface is still required as the internal contract the adapters implement, not removed by this benefit.\n\nShipping rates are a business detail never addressed by the adapter pattern's structural benefit."
  },
  {
    id: "csc302_ch5_123",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "An admin route needs audit logging and authentication checks added without cluttering the core endpoint code. Which implementation wraps a RequestHandler object inside classes like AuthDecorator(LoggingDecorator(Handler))?",
    options: [
      "The Decorator pattern",
      "The Factory pattern",
      "The Strategy pattern",
      "The Adapter pattern, which handles bridging incompatible third-party APIs"
    ],
    correctAnswer: 0,
    explanation: "Design Patterns: Decorators for Middleware states the implementation wraps the core RequestHandler object inside decorator classes, such as AuthDecorator(LoggingDecorator(Handler)).\n\nThe Factory pattern instead handles dynamic driver instantiation for databases, a different problem than layering middleware.\n\nThe Strategy pattern handles swapping discount calculation algorithms, unrelated to wrapping a request handler.\n\nThe Adapter pattern handles bridging incompatible third-party APIs, also unrelated to middleware layering."
  },
  {
    id: "csc302_ch5_124",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "What benefit does wrapping a RequestHandler in decorator classes provide in this Decorator pattern example?",
    options: [
      "It promotes modular design, letting developers combine middleware actions dynamically",
      "It eliminates the need for authentication checks entirely",
      "It requires every route to use the same fixed set of decorators",
      "It replaces the RequestHandler object with a database connection"
    ],
    correctAnswer: 0,
    explanation: "Design Patterns: Decorators for Middleware states the benefit is promoting modular design, allowing developers to combine and apply middleware actions dynamically.\n\nAuthentication checks are still applied through AuthDecorator, not eliminated by this benefit.\n\nThe pattern's benefit is flexibility in combining decorators per route, not forcing every route to use an identical fixed set.\n\nThe RequestHandler remains the wrapped object; nothing about the pattern replaces it with a database connection."
  },
  {
    id: "csc302_ch5_125",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "An e-commerce checkout needs to swap discount calculation algorithms dynamically for events like Black Friday or Christmas coupons. Which interface does the PricingEngine delegate calculations to?",
    options: [
      "The DiscountStrategy interface",
      "The ShippingService interface, which belongs to the adapter pattern example for shipping vendors",
      "The DatabaseFactory, which belongs to the factory pattern example for database drivers",
      "The ShoppingCartModel, which belongs to the observer pattern example for reactive UI updates"
    ],
    correctAnswer: 0,
    explanation: "Design Patterns: Strategies in Pricing Engines states the PricingEngine delegates calculations to a DiscountStrategy interface.\n\nThe ShippingService interface belongs to the adapter pattern example for shipping vendors, a different use case.\n\nThe DatabaseFactory belongs to the factory pattern example for database drivers, also unrelated.\n\nThe ShoppingCartModel belongs to the observer pattern example for reactive UI updates, a different pattern."
  },
  {
    id: "csc302_ch5_126",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "What benefit does delegating discount calculations to a DiscountStrategy interface provide over hard-coded conditional logic?",
    options: [
      "Adding new pricing structures becomes simple, eliminating complex nested conditionals",
      "It guarantees every sales event applies the exact same discount percentage",
      "It removes the need for a PricingEngine class altogether",
      "It prevents the checkout process from ever calculating taxes"
    ],
    correctAnswer: 0,
    explanation: "Design Patterns: Strategies in Pricing Engines states the benefit makes adding new pricing structures simple, eliminating complex, nested conditional statements in the checkout code.\n\nDifferent DiscountStrategy implementations are expected to apply different percentages for different events, not a guaranteed identical rate.\n\nThe PricingEngine still exists as the class that delegates to the chosen strategy, not eliminated by this pattern.\n\nTax calculation is a separate checkout concern never claimed to be prevented by this pattern."
  },
  {
    id: "csc302_ch5_127",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Adding an item to a shopping cart should instantly update a cart icon badge, a summary panel, and a checkout button. Which object do these visual widgets register with to receive that update?",
    options: [
      "The ShoppingCartModel object",
      "The RequestHandler object, which belongs to the decorator pattern example for middleware",
      "The DatabaseFactory, which belongs to the factory pattern example for database drivers",
      "The DiscountStrategy interface, which belongs to the pricing engine strategy pattern"
    ],
    correctAnswer: 0,
    explanation: "Design Patterns: Observers in Reactive Apps states visual UI widgets register as observers to the main ShoppingCartModel object, updating instantly as state changes.\n\nThe RequestHandler object belongs to the decorator pattern example for middleware, a different pattern.\n\nThe DatabaseFactory belongs to the factory pattern example for database drivers, unrelated to reactive UI updates.\n\nThe DiscountStrategy interface belongs to the pricing engine strategy pattern, also unrelated."
  },
  {
    id: "csc302_ch5_128",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Why does having UI widgets observe the ShoppingCartModel promote loose coupling?",
    options: [
      "The shopping cart model remains independent of specific visual components",
      "It forces every widget to directly modify the cart model's internal fields",
      "It requires the cart model to know the exact number of widgets watching it",
      "It merges the cart icon, summary panel, and checkout button into one class"
    ],
    correctAnswer: 0,
    explanation: "Design Patterns: Observers in Reactive Apps states the benefit is loose coupling, since the shopping cart model remains independent of specific visual components.\n\nObservers react to notifications rather than directly modifying the model's internal fields themselves.\n\nThe observer pattern lets the subject notify observers without needing to know their exact count or identity in advance.\n\nThe three widgets remain separate observer objects rather than being merged into a single class."
  },
  {
    id: "csc302_ch5_129",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "A single class in a codebase implements far too many responsibilities, breaking the Single Responsibility Principle. Which enterprise anti-pattern does this describe?",
    options: [
      "The God Class (The Blob)",
      "The Yo-Yo Problem",
      "The Fragile Base Class, which describes bugs introduced across subclasses when a top-level parent changes",
      "The Observer Pattern, which is a legitimate design pattern for reactive updates"
    ],
    correctAnswer: 0,
    explanation: "Enterprise Anti-Patterns (God Classes, Deep Trees) states the God Class, or The Blob, is a single class that implements too many responsibilities, breaking the Single Responsibility Principle.\n\nThe Yo-Yo Problem instead describes deep class hierarchies requiring scrolling up and down many parent classes to trace execution, a different anti-pattern.\n\nThe Fragile Base Class describes bugs introduced across subclasses when a top-level parent changes, also a different anti-pattern.\n\nThe Observer Pattern is a legitimate design pattern for reactive updates, not an anti-pattern at all."
  },
  {
    id: "csc302_ch5_130",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "A developer must scroll up and down through many parent classes just to trace how a single method executes. Which anti-pattern is this?",
    options: [
      "The Yo-Yo Problem",
      "The God Class",
      "The Fragile Base Class",
      "The Strategy Pattern"
    ],
    correctAnswer: 0,
    explanation: "Enterprise Anti-Patterns (God Classes, Deep Trees) states the Yo-Yo Problem occurs in deep class hierarchies where tracing method executions requires scrolling up and down many parent classes.\n\nThe God Class instead describes one class doing too much, not the difficulty of tracing execution across many classes.\n\nThe Fragile Base Class describes bugs introduced across subclasses when a parent changes, a related but distinct hierarchy problem.\n\nThe Strategy Pattern is a legitimate design pattern for interchangeable algorithms, not an anti-pattern."
  },
  {
    id: "csc302_ch5_131",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Modifying a single top-level parent class unexpectedly introduces bugs across dozens of derived subclasses. Which anti-pattern does this describe?",
    options: [
      "The Fragile Base Class",
      "The God Class, which describes one overloaded class",
      "The Yo-Yo Problem, which describes the difficulty of tracing execution across a deep hierarchy",
      "The Decorator Pattern, which is a legitimate design pattern for layering behavior"
    ],
    correctAnswer: 0,
    explanation: "Enterprise Anti-Patterns (God Classes, Deep Trees) states the Fragile Base Class problem occurs when modifying a top-level parent class introduces bugs across dozens of derived subclasses.\n\nThe God Class describes one overloaded class, not bugs spreading from a parent to many subclasses.\n\nThe Yo-Yo Problem describes the difficulty of tracing execution across a deep hierarchy, a related but distinct symptom.\n\nThe Decorator Pattern is a legitimate design pattern for layering behavior, not an anti-pattern."
  },
  {
    id: "csc302_ch5_132",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "A task involves pure data transformations, mathematical calculations, and highly concurrent pipelines. Which paradigm is described as better suited for this than OOP?",
    options: [
      "Functional Programming",
      "Data-Oriented Design",
      "Simple Scripting, which is described as ideal for short automation tasks or deployment scripts",
      "Object-Oriented Programming, which is the paradigm being contrasted against in this slide"
    ],
    correctAnswer: 0,
    explanation: "When to Avoid OOP Use Cases states functional programming is better suited for pure data transformations, mathematical calculations, and highly concurrent pipelines.\n\nData-Oriented Design is instead described as necessary for high-performance systems like game physics or graphics where cache locality matters, a different scenario.\n\nSimple Scripting is described as ideal for short automation tasks or deployment scripts, also a different scenario.\n\nObject-Oriented Programming is the paradigm being contrasted against in this slide, not the one recommended for this scenario."
  },
  {
    id: "csc302_ch5_133",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "A high-performance game physics system depends heavily on cache locality and raw memory layout. Which approach is described as necessary in this scenario rather than OOP?",
    options: [
      "Data-Oriented Design",
      "Functional Programming",
      "Simple Scripting, which is recommended for short automation tasks or deployment scripts",
      "Entity-Component-System inheritance"
    ],
    correctAnswer: 0,
    explanation: "When to Avoid OOP Use Cases states Data-Oriented Design is necessary for high-performance systems, like game physics or graphics, where cache locality and raw memory layouts are critical.\n\nFunctional Programming is instead recommended for pure data transformations and concurrent pipelines, a different scenario.\n\nSimple Scripting is recommended for short automation tasks or deployment scripts, also a different scenario.\n\nEntity-Component-System inheritance is not a term used in this slide; ECS is discussed separately as an alternative to deep OOP inheritance in game engines, not as the answer to this cache-locality scenario."
  },
  {
    id: "csc302_ch5_134",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Which style of code is described as often ideal for short automation tasks or deployment scripts rather than full OOP design?",
    options: [
      "Simple Scripting",
      "Data-Oriented Design",
      "Functional Programming, which is recommended for pure data transformations and concurrent pipelines",
      "Enterprise architecture, which is the domain that benefits most from OOP's modularity and longevity"
    ],
    correctAnswer: 0,
    explanation: "When to Avoid OOP Use Cases states Simple Scripting, meaning light, procedural code, is often ideal for short automation tasks or deployment scripts.\n\nData-Oriented Design is instead recommended for high-performance systems needing cache locality, a different scenario.\n\nFunctional Programming is recommended for pure data transformations and concurrent pipelines, also a different scenario.\n\nEnterprise architecture is the domain that benefits most from OOP's modularity and longevity, the opposite case from short scripts."
  },
  {
    id: "csc302_ch5_135",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "In pragmatic OOP practice, OOP is highly effective for applications that benefit from modeling which kinds of components?",
    options: [
      "GUIs, physical engines, and business systems",
      "Pure mathematical transformations only",
      "Short deployment automation scripts only",
      "High-performance cache-critical memory layouts only"
    ],
    correctAnswer: 0,
    explanation: "Summary: The Pragmatic OOP Practitioner states Real-World Mapping means OOP is highly effective for applications that benefit from modeling components such as GUIs, physical engines, and business systems.\n\nPure mathematical transformations are instead the domain where functional programming is recommended, not OOP's strength according to this summary.\n\nShort deployment scripts are the domain recommended for simple scripting, not OOP's strength.\n\nCache-critical memory layouts are the domain recommended for data-oriented design, not OOP's strength."
  },
  {
    id: "csc302_ch5_136",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Modern engineering practice keeps OOP and functional execution techniques strictly separated, never blending them within the same system.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "Summary: The Pragmatic OOP Practitioner states that pragmatic choices in modern engineering often blend OOP architectural structures with functional execution techniques to build robust systems, which directly contradicts the claim that they are kept strictly separated."
  },
  {
    id: "csc302_ch5_137",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Which practice does the closing summary credit with helping prevent fragile dependencies and keeping systems modular?",
    options: [
      "Applying design patterns and SOLID guidelines",
      "Avoiding all use of interfaces entirely",
      "Writing every class as a single God Class for simplicity",
      "Replacing all inheritance with deep hierarchies"
    ],
    correctAnswer: 0,
    explanation: "Summary: The Pragmatic OOP Practitioner states that applying design patterns and SOLID guidelines helps prevent fragile dependencies and keeps systems modular.\n\nAvoiding interfaces entirely contradicts patterns like Factories, Adapters, and Strategies covered earlier, all of which rely on interfaces.\n\nWriting a single God Class for simplicity is explicitly identified as an anti-pattern, the opposite of what the summary recommends.\n\nDeep hierarchies are associated with the Yo-Yo Problem and Fragile Base Class anti-patterns, not a recommended practice."
  },
  {
    id: "csc302_ch5_138",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Consider these two claims from the design patterns section: (1) the Observer pattern example involves a ShoppingCartModel notifying UI widgets, and (2) the God Class anti-pattern is recommended as a way to simplify small codebases. Which claims are supported by the source?",
    options: [
      "Only the claim about ShoppingCartModel notifying UI widgets",
      "Only the claim about the God Class being a recommended simplification",
      "All of these",
      "None of these"
    ],
    correctAnswer: 0,
    explanation: "Design Patterns: Observers in Reactive Apps states visual UI widgets register as observers to the main ShoppingCartModel object, updating instantly as state changes, supporting the first claim.\n\nThe God Class is explicitly listed under Enterprise Anti-Patterns as breaking the Single Responsibility Principle, the opposite of a recommended simplification, so the second claim is unsupported.\n\nSince only one of the two specific claims is genuinely supported, all of these cannot be correct.\n\nSince one claim is genuinely supported, none of these is also incorrect."
  },
  {
    id: "csc302_ch5_139",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Comparing the GUI section's UI Themes example to the design patterns section's Factory example, both use a factory-style interface. What does each factory return in its respective domain?",
    options: [
      "ThemeFactory returns styling objects, while DatabaseFactory returns a database connection",
      "ThemeFactory returns a database connection, while DatabaseFactory returns styling objects",
      "Both factories return only Boolean success flags",
      "Both factories return a fully rendered user interface"
    ],
    correctAnswer: 0,
    explanation: "UI Themes & Styling via Factory Patterns states the ThemeFactory Interface declares methods to return styling objects, such as getPrimaryColor(), while Design Patterns: Factories in Web Frameworks states the application requests the DatabaseFactory to return a connection.\n\nSwapping the two return values reverses what each factory actually produces according to the source.\n\nNeither factory is described as returning a simple Boolean success flag.\n\nNeither factory is described as returning a fully rendered user interface; ThemeFactory returns styling objects and DatabaseFactory returns a connection."
  },
  {
    id: "csc302_ch5_140",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Both the CRM's Automated Event Observers and the reactive app's Observer pattern rely on the same underlying idea. What is that shared idea?",
    options: [
      "Registered listeners are notified automatically when a watched state changes",
      "A factory object is responsible for creating new listener instances",
      "Data is compiled ahead of time into a fixed binary format",
      "A hierarchy of classes inherits behavior from a single root class"
    ],
    correctAnswer: 0,
    explanation: "CRM: Lead Pipelines & Customer Journeys describes automated event observers firing triggers when lead status updates occur, and Design Patterns: Observers in Reactive Apps describes UI widgets registering as observers to be notified when the ShoppingCartModel changes, both relying on registered listeners being notified automatically on a state change.\n\nFactory-style object creation describes the Factory pattern, not the observer mechanism shared by these two examples.\n\nCompiling data into a fixed binary format describes game save serialization, unrelated to observer notification.\n\nInheritance from a single root class describes hierarchy-based designs like BankAccount subclasses, not the observer mechanism."
  },
  {
    id: "csc302_ch5_141",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "The Composite Pattern appears in both the file system model and the parametric modelling domain. Which pairing correctly matches each domain's composite container class?",
    options: [
      "Directory is the file system's composite container; Assembly is the CAD composite container",
      "File is the file system's composite container; Part is the CAD composite container",
      "FSNode is the file system's composite container; Component is the CAD composite container",
      "Directory is the CAD composite container; Assembly is the file system's composite container"
    ],
    correctAnswer: 0,
    explanation: "File System Nodes (Directory/File Composition) states Directory acts as the composite container holding nested FSNode instances, and Parametric Modelling Assemblies states Assembly is the composite container managing nested sub-assemblies and parts.\n\nFile and Part are both leaf-level classes in their respective hierarchies, not the composite containers.\n\nFSNode and Component are the shared abstract base classes in each hierarchy, not the composite containers themselves.\n\nSwapping Directory and Assembly between the two domains reverses the actual domain each container belongs to."
  },
  {
    id: "csc302_ch5_142",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Which pairing correctly matches a banking concept with its closest scientific computing analogue in how each preserves a historical record?",
    options: [
      "Banking's Audit Trails and ETL's Loader Classes both preserve processed records, though for different purposes",
      "Banking's Rollback Capabilities and GIS's Spatial Indexing Queries serve the identical purpose",
      "Banking's BankAccount and CAD's Constraint Solving Engine serve the identical purpose",
      "Banking's Transaction class and Robotics' Safety Monitors serve the identical purpose"
    ],
    correctAnswer: 0,
    explanation: "Banking Systems: Transactions & Auditing describes Audit Trails appending transaction objects to a ledger to preserve history, while ETL Pipelines describes Loader Classes writing processed data to storage systems, both preserving a form of record after processing, though for different domain purposes.\n\nRollback Capabilities undo failed transfers, an action unrelated to Spatial Indexing Queries, which perform proximity calculations, so they do not serve an identical purpose.\n\nBankAccount stores account attributes, unrelated to Constraint Solving Engines, which resolve geometric relationships between CAD parts.\n\nThe Transaction class records financial actions, unrelated to Safety Monitors, which halt robots when safety values are breached."
  },
  {
    id: "csc302_ch5_143",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Which of the following is NOT one of the three challenges of scale listed under Enterprise Software Foundations?",
    options: [
      "Interchangeability",
      "Modularity",
      "Domain Modelling",
      "Longevity"
    ],
    correctAnswer: 0,
    explanation: "Enterprise Software Foundations lists exactly three challenges of scale: Modularity, Domain Modelling, and Longevity.\n\nModularity is explicitly listed as requiring isolated development domains for large teams.\n\nDomain Modelling is explicitly listed as simplifying complex business logic.\n\nLongevity is explicitly listed as demanding maintainable hierarchies over decades, so Interchangeability, a payment gateway concept from a different slide, is the one not listed here."
  },
  {
    id: "csc302_ch5_144",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Which of these classes is NOT one of the three named specializations or subtypes belonging to the HRMS Employee hierarchy?",
    options: [
      "CurrentAccount",
      "SalariedEmployee, which is explicitly one of the three named subtypes",
      "HourlyContractor, which is explicitly one of the three named subtypes",
      "CommissionedSalesperson, which is explicitly one of the three named subtypes"
    ],
    correctAnswer: 0,
    explanation: "HRMS: Employee Hierarchy & Payroll names SalariedEmployee, HourlyContractor, and CommissionedSalesperson as the three subtypes of the Employee base type.\n\nSalariedEmployee is explicitly one of the three named subtypes.\n\nHourlyContractor is explicitly one of the three named subtypes.\n\nCommissionedSalesperson is explicitly one of the three named subtypes, so CurrentAccount, a BankAccount subclass from the banking slide, is the one that does not belong here."
  },
  {
    id: "csc302_ch5_145",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Which system, GUI widget hierarchies or scene graphs, uses recursive traversal specifically to render nodes in the correct spatial order?",
    options: [
      "Scene graphs, through Recursive Traversal of SceneNode hierarchies",
      "GUI widget hierarchies, through Recursive Traversal of Container objects",
      "Both systems rely equally on Recursive Traversal as defined in the source",
      "Neither system mentions recursive traversal in the source"
    ],
    correctAnswer: 0,
    explanation: "Scene Graphs and Node Hierarchies states drawing routines traverse the graph recursively, rendering nodes in the correct spatial hierarchy, explicitly naming Recursive Traversal.\n\nWidget Hierarchies (Java Swing / Qt) describes Container and Frame holding nested lists of components but never uses the term Recursive Traversal for GUI rendering.\n\nSince only the scene graph slide names this mechanism, both systems relying on it equally is not supported.\n\nSince the scene graph slide does mention recursive traversal explicitly, saying neither system mentions it is incorrect."
  },
  {
    id: "csc302_ch5_146",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Which two enterprise domains both rely on an object explicitly described as producing or managing an immutable or standardized structure once processing completes: OrderProcessor's Invoice and which other class's output?",
    options: [
      "Message, which wraps payload data into a standard transport structure",
      "InventoryItem, which tracks SKU data and batch codes",
      "Lead, which encapsulates history logs and value metrics",
      "Employee, which defines salary and taxCode"
    ],
    correctAnswer: 0,
    explanation: "E-commerce: Shopping Cart & Order Processing states OrderProcessor produces an immutable Invoice object, and Enterprise Service Bus (ESB) & Messaging states a Message object wraps payload data into a standard transport structure, both describing a finalized, standardized output object.\n\nInventoryItem tracks ongoing physical stock attributes rather than producing a finalized output structure.\n\nLead encapsulates ongoing customer relationship data rather than a finalized output structure.\n\nEmployee defines ongoing profile values rather than a finalized output structure."
  },
  {
    id: "csc302_ch5_147",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "A developer is choosing between deep OOP inheritance and a composition-based Entity model for a new game character system. Comparing ECS versus OOP design, which factor should most influence this decision?",
    options: [
      "Whether the game's scale will make deep inheritance hierarchies brittle and hard to change",
      "Whether the game uses 2D or 3D graphics rendering",
      "Whether the game targets consoles rather than personal computers",
      "Whether the game includes a save and load serialization system"
    ],
    correctAnswer: 0,
    explanation: "Entity-Component-System (ECS) vs OOP states that as games grew larger, deep inheritance hierarchies became brittle, motivating the shift toward composition-based Entity models with modular components.\n\n2D versus 3D rendering is never discussed as a factor in choosing between inheritance and composition in this slide.\n\nConsole versus personal computer targeting is never mentioned as a factor in this architectural decision.\n\nSave and load serialization is a separate slide's concern and is not presented as a factor driving the ECS versus OOP decision."
  },
  {
    id: "csc302_ch5_148",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "A hospital wants to share diagnostic images between systems while stripping patient-identifying data and coordinating secure transfers. Which two classes together support this workflow?",
    options: [
      "Anonymizer Objects and the PACSClient Service",
      "DICOMImage Class and the Instrument Base Class",
      "Extractor Objects and the Loader Classes",
      "TelemetryPacket Objects and the DataFilter Pipeline"
    ],
    correctAnswer: 0,
    explanation: "Medical Imaging Systems (DICOM Metadata) states Anonymizer Objects strip sensitive medical and identity values for privacy compliance, while the PACSClient Service coordinates connections to medical database systems, managing diagnostic transfers securely, matching both required steps.\n\nThe DICOMImage Class holds the image and metadata, and the Instrument Base Class belongs to the unrelated lab equipment slide, not secure transfer coordination.\n\nExtractor Objects and Loader Classes belong to the unrelated ETL pipeline slide.\n\nTelemetryPacket Objects and the DataFilter Pipeline belong to the unrelated sensor fusion telemetry slide."
  },
  {
    id: "csc302_ch5_149",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "A pricing engine defines a DiscountStrategy interface so that different discount algorithms can be swapped at runtime without changing the code that applies them. Which of the following plays a role most analogous to that interface?",
    options: [
      "A LayoutManager interface, whose concrete layout strategies a container can swap at runtime",
      "A file-system node base class, which defines fixed name, size, and permission fields",
      "A database Connection class, which manages authorization and transaction sessions",
      "A sales Lead object, which encapsulates history logs and contact coordinates"
    ],
    correctAnswer: 0,
    explanation: "Design Patterns: Strategies in Pricing Engines describes DiscountStrategy as a swappable algorithm interface, and Layout Managers as Strategy Objects describes the LayoutManager interface as declaring formatting contracts with concrete strategies like BorderLayout and GridLayout that containers can swap at runtime, both following the Strategy pattern's swappable-algorithm structure.\n\nThe FSNode base class defines static structural properties, not a swappable algorithm.\n\nThe Connection class manages a database session, not an interchangeable algorithm.\n\nThe Lead object stores customer data, not a swappable algorithm."
  },
  {
    id: "csc302_ch5_150",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Consider these two claims comparing case studies: (1) both the Legacy Enterprise Migration and Cross-Platform GUI case studies used a Factory-family design pattern in their solution, and (2) both case studies report a specific quantified improvement in their outcome. Which claims are supported?",
    options: [
      "Only the claim about a specific quantified improvement in each outcome",
      "Only the claim about both using a Factory-family pattern",
      "All of these",
      "None of these"
    ],
    correctAnswer: 0,
    explanation: "Case Study: Legacy Enterprise Migration reports deployment cycles reduced from months to days, and Case Study: Cross-Platform GUI Development reports over 90% codebase reuse, so both case studies do report a specific quantified improvement, supporting the second listed claim.\n\nThe Legacy Enterprise Migration used the Adapter Pattern while the Cross-Platform GUI case used the Abstract Factory pattern, so they did not both use a Factory-family pattern, since Adapter is a distinct pattern family from Factory.\n\nSince only the quantified-improvement claim holds and the pattern claim does not, all of these cannot be correct.\n\nSince the quantified-improvement claim is genuinely supported, none of these is also incorrect."
  },
  {
    id: "csc302_ch5_151",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "A robotics engineer is deciding how to structure feedback control for a motor. In this robotics control design, which class implements the actual feedback calculations that adjust motor currents to maintain stable alignment?",
    options: [
      "The PID Controller Class",
      "The Actuator Interface, which only enforces the movement contract methods like setTargetPosition()",
      "Safety Monitors",
      "TelemetryPacket Objects, which parse incoming binary sensor data"
    ],
    correctAnswer: 0,
    explanation: "Robotics Control Loops (Actuator Classes) states the PID Controller Class implements feedback calculations, adjusting motor currents to maintain stable alignments.\n\nThe Actuator Interface only enforces the movement contract methods like setTargetPosition(), not the feedback calculation itself.\n\nSafety Monitors instead halt the robot when safety values are breached, a supervisory role rather than feedback calculation.\n\nTelemetryPacket Objects parse incoming binary sensor data, an unrelated parsing role."
  },
  {
    id: "csc302_ch5_152",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Which comparison correctly distinguishes the Widget Hierarchies model's Abstract Base Class role from its Intermediate Containers role?",
    options: [
      "The abstract base class defines shared coordinate and painting behavior, while intermediate containers hold nested lists of components",
      "The abstract base class holds nested lists of components, while intermediate containers define shared coordinate and painting behavior",
      "Both roles are filled by the exact same class, Component or QWidget",
      "Intermediate containers replace the need for any abstract base class"
    ],
    correctAnswer: 0,
    explanation: "Widget Hierarchies (Java Swing / Qt) states the abstract base class, Component or QWidget, defines coordinate tracking, event bindings, and painting routines, while intermediate containers, such as Container or Frame, hold nested lists of other components.\n\nSwapping these two roles reverses what the source actually assigns to each class type.\n\nThe two roles are filled by distinct classes at different levels of the hierarchy, not the same class.\n\nIntermediate containers are built on top of the abstract base class rather than replacing the need for it."
  },
  {
    id: "csc302_ch5_153",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Which of these outcomes is NOT one described among the five case studies covered in this course?",
    options: [
      "A complete rewrite of all business logic in a purely functional language",
      "Deployment cycles reduced from months to days, which is the stated outcome of the Legacy Enterprise Migration case study",
      "Over 90 percent of a codebase reused across platforms",
      "Powering many of the world's most successful games, which is the stated outcome of the Unreal Engine Actor Framework case study"
    ],
    correctAnswer: 0,
    explanation: "None of the five case studies, Legacy Enterprise Migration, Cross-Platform GUI Development, Unreal Engine Actor Framework, Linux VFS, and ROS C++ Nodes, mentions rewriting business logic in a purely functional language; all five solutions are OOP-based.\n\nDeployment cycles reduced from months to days is the stated outcome of the Legacy Enterprise Migration case study.\n\nOver 90 percent codebase reuse is the stated outcome of the Cross-Platform GUI Development case study.\n\nPowering many of the world's most successful games is the stated outcome of the Unreal Engine Actor Framework case study."
  },
  {
    id: "csc302_ch5_154",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Which mechanism is most similar to the Warehouse object's job of modeling capacity constraints and mapping bin partitions to object collections?",
    options: [
      "The Directory Class, which acts as a composite container holding nested FSNode instances",
      "The RouteFinder Objects, which encapsulate path optimisation algorithms",
      "The Lead Object, which encapsulates history logs and contact coordinates",
      "The MarketSimulator, which replays historical price updates"
    ],
    correctAnswer: 0,
    explanation: "Supply Chain: Asset & Inventory Tracking describes Warehouse as modeling capacity constraints and mapping partitions to object collections, a containment role, and File System Nodes describes Directory as a composite container holding nested FSNode instances, both organizing collections of contained items even though the domains differ.\n\nRouteFinder instead handles path optimisation across nodes, a routing role rather than a containment role.\n\nThe Lead Object stores customer relationship data, not a containment structure.\n\nThe MarketSimulator replays market data, not a containment structure."
  },
  {
    id: "csc302_ch5_155",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "A developer wants a class that automatically restores previously saved heap structures from disk into live objects when a program restarts. Which named mechanism performs this specific restoration step?",
    options: [
      "Entity Hydration",
      "System Serializer Objects",
      "The Serializable Interface",
      "Automated Persistence"
    ],
    correctAnswer: 0,
    explanation: "Game Save/Load Serialization Systems states Entity Hydration reads files back, instantiating objects dynamically to restore the state of the active game session, matching the restoration step described.\n\nSystem Serializer Objects perform the reverse conversion, turning live heap structures into compact binary or JSON formats for saving, not restoring them.\n\nThe Serializable Interface only enforces the contract for preservation and loading, not the restoration mechanism itself.\n\nAutomated Persistence is an unrelated ORM concept about generating SQL updates for dirty entities."
  },
  {
    id: "csc302_ch5_156",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Which pairing correctly identifies the concrete Concrete States listed for the AnimationState Base Class?",
    options: [
      "IdleState, SprintState, and FallState",
      "Success, Failure, and Running, which are Status codes returned by BTNode evaluations in the AI behaviour tree slide",
      "Patrol, Flee, and Attack, which are action nodes in the AI behaviour tree slide",
      "DarkThemeFactory and LightThemeFactory, which are concrete theme classes in the GUI theming slide"
    ],
    correctAnswer: 0,
    explanation: "State Machines for Character Animation names IdleState, SprintState, and FallState as the concrete states built on the AnimationState Base Class.\n\nSuccess, Failure, and Running are Status codes returned by BTNode evaluations in the AI behaviour tree slide, unrelated to animation states.\n\nPatrol, Flee, and Attack are action nodes in the AI behaviour tree slide, also unrelated to animation states.\n\nDarkThemeFactory and LightThemeFactory are concrete theme classes in the GUI theming slide, unrelated to animation."
  },
  {
    id: "csc302_ch5_157",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "A game studio's engine keeps hundreds of active game objects updated every frame while also drawing them to the screen 60 or more times per second. Which mechanism specifically drives this per-frame update cycle?",
    options: [
      "Game Loop Integration",
      "Actor Models",
      "Modular Components, which describes separating reusable traits through composition, a structural concern",
      "Recursive Traversal, which describes how a scene graph is walked to render nodes, a rendering detail"
    ],
    correctAnswer: 0,
    explanation: "Modeling Dynamic, Interactive Worlds states Game Loop Integration means every frame, the engine loops through active game objects and updates their state.\n\nActor Models instead describe how characters and objects are represented as independent active objects, not the per-frame update mechanism itself.\n\nModular Components describes separating reusable traits through composition, a structural concern rather than the update cycle.\n\nRecursive Traversal describes how a scene graph is walked to render nodes, a rendering detail rather than the overall per-frame loop."
  },
  {
    id: "csc302_ch5_158",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Which comparison correctly matches each domain's mechanism for automatically wiring up notifications when state changes: CRM lead status updates versus reactive shopping cart updates?",
    options: [
      "CRM uses Automated Event Observers on lead status; reactive apps use widgets observing the ShoppingCartModel",
      "CRM uses the ShoppingCartModel directly; reactive apps use Automated Event Observers on lead status",
      "Both domains use the identical SalesPipeline class to manage notifications",
      "Neither domain in the source describes any observer-style notification mechanism"
    ],
    correctAnswer: 0,
    explanation: "CRM: Lead Pipelines & Customer Journeys states Automated Event Observers registered on lead status updates fire email triggers, while Design Patterns: Observers in Reactive Apps states UI widgets register as observers to the ShoppingCartModel object, correctly matching each mechanism to its domain.\n\nSwapping the two mechanisms between domains reverses what the source actually assigns to each.\n\nThe SalesPipeline class manages funnel phase transitions in CRM specifically, not a shared mechanism used identically in reactive UI apps.\n\nBoth domains do describe an observer-style mechanism, so claiming neither does is incorrect."
  },
  {
    id: "csc302_ch5_159",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Which class's primary role is to coordinate multiple lab instrument objects and automatically log their measurements to database services?",
    options: [
      "Measurement Automation pipelines",
      "Instrument Base Class",
      "Device Classes, which abstract low-level commands for specific models",
      "PACSClient Service"
    ],
    correctAnswer: 0,
    explanation: "Lab Equipment Instrument Control (SCPI) states Measurement Automation pipelines coordinate multiple instrument objects, logging measurements to database services automatically.\n\nThe Instrument Base Class instead manages shared connection protocols like USB or GPIB, not the automated logging coordination.\n\nDevice Classes abstract low-level commands for specific models, a different responsibility than cross-instrument coordination.\n\nThe PACSClient Service coordinates medical database transfers in an unrelated medical imaging slide."
  },
  {
    id: "csc302_ch5_160",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Comparing the ORM's Relationship Integrity concept to the file system's composite pattern, which statement correctly distinguishes how each represents a one-to-many relationship?",
    options: [
      "ORM models foreign keys as nested object collections like user.getOrders(), while Directory holds a list of nested FSNode instances",
      "ORM holds a list of nested FSNode instances, while Directory models foreign keys as nested object collections",
      "Both concepts are described using the exact same class name in the source",
      "Neither concept in the source involves any form of nested collection"
    ],
    correctAnswer: 0,
    explanation: "Object-Relational Mapping (ORM) Patterns states relationship integrity models foreign key constraints as nested object collections, such as user.getOrders(), while File System Nodes states Directory holds list references to nested FSNode instances, both representing one-to-many relationships through nested collections in their own domains.\n\nSwapping the two descriptions reverses which domain actually uses which mechanism.\n\nThe two domains use distinctly named classes, ORM entities versus Directory and FSNode, not the same class name.\n\nBoth concepts explicitly involve nested collections, so claiming neither does is incorrect."
  },
  {
    id: "csc302_ch5_161",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "A trading firm wants to test a new algorithm against historical tick data before risking real capital. Which class evaluates price movements to generate buy and sell orders during this simulation?",
    options: [
      "The TradingStrategy interface",
      "The MarketSimulator object",
      "The OrderBook class, which matches the generated orders against historical liquidity, a step after order generation",
      "The DataFilter Pipeline"
    ],
    correctAnswer: 0,
    explanation: "Financial Trading Simulation Models states the TradingStrategy Interface evaluates price movements, generating buy/sell orders dynamically.\n\nThe MarketSimulator Object instead replays historical price updates to create the simulated conditions the strategy reacts to, not the order-generation step itself.\n\nThe OrderBook Class matches the generated orders against historical liquidity, a step after order generation.\n\nThe DataFilter Pipeline is an unrelated telemetry concept for removing sensor noise."
  },
  {
    id: "csc302_ch5_162",
    course: "CSC 302",
    chapter: "Chapter 5",
    text: "Which pairing correctly matches each named case study with the specific pattern or architecture central to its solution?",
    options: [
      "Linux VFS used function pointer tables (vptrs) to structure an object-oriented interface in C",
      "Linux VFS used the Abstract Factory pattern to bridge operating system APIs",
      "Linux VFS used the Observer pattern to notify file system drivers of changes",
      "Linux VFS used the Decorator pattern to wrap file read and write calls"
    ],
    correctAnswer: 0,
    explanation: "Case Study: Linux Virtual File System (VFS) states the solution structured the VFS as an object-oriented interface using function pointer tables, vptrs, to map common operations to specific file system drivers.\n\nThe Abstract Factory pattern was instead used in the Cross-Platform GUI Development case study to bridge operating system APIs, a different case study entirely.\n\nThe Observer pattern is not mentioned anywhere in the Linux VFS case study.\n\nThe Decorator pattern is not mentioned anywhere in the Linux VFS case study; it belongs to the design patterns section's middleware example."
  }
];

export default csc302Chapter5Questions;
