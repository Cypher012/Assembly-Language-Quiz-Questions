import { QuestionV2 } from "@/lib/quiz-types";

const csc302Module2: QuestionV2[] = [
  {
    id: "csc302_h_001",
    course: "CSC 302",
    chapter: "Chapter 2",
    text: "What is the core definition of Object-Oriented Programming as described in the handout?",
    options: [
      "A paradigm that revolves around functions and procedures",
      "A paradigm that revolves around objects and classes",
      "A paradigm focused on declaring what the program should accomplish",
      "A paradigm that evaluates mathematical expressions and functions",
    ],
    correctAnswer: 1,
    explanation:
      "The handout explicitly defines OOP as a programming paradigm that revolves around objects and classes, organizing code using objects that interact with each other.",
  },
  {
    id: "csc302_h_002",
    course: "CSC 302",
    chapter: "Chapter 2",
    text: "The primary design goals of Object-Oriented Programming (OOP) are to promote code reusability, modularity, and software maintainability.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0, // True
    explanation:
      "The handout states that OOP aims to promote code reusability, modularity, and maintainability as its primary goals.",
  },
  {
    id: "csc302_h_003",
    course: "CSC 302",
    chapter: "Chapter 2",
    text: "Which of the following is listed as a benefit of OOP in the handout?",
    options: [
      "Faster execution speed than procedural code",
      "Elimination of all runtime errors",
      "Easier maintenance and modification",
      "Automatic code documentation generation",
    ],
    correctAnswer: 2,
    explanation:
      "The handout lists easier maintenance and modification, alongside code reusability, modularity, and improved readability, as key benefits of OOP.",
  },
  {
    id: "csc302_h_004",
    course: "CSC 302",
    chapter: "Chapter 2",
    text: "Which of the following is given as an example of a Procedural Programming Language in the handout?",
    options: ["Python", "Haskell", "Prolog", "COBOL"],
    correctAnswer: 3,
    explanation:
      "The handout lists Pascal, COBOL, BASIC, and FORTRAN as examples of Procedural Programming Languages.",
  },
  {
    id: "csc302_h_005",
    course: "CSC 302",
    chapter: "Chapter 2",
    text: "According to the handout, which programming paradigm focuses on evaluating expressions and avoids changing state or mutable data?",
    options: [
      "Imperative Programming",
      "Declarative Programming",
      "Functional Programming",
      "Event-Driven Programming",
    ],
    correctAnswer: 2,
    explanation:
      "The handout defines Functional Programming as focusing on evaluating expressions and declaring functions while avoiding changing state and mutable data. Examples given are Haskell, Lisp, and Scala.",
  },
  {
    id: "csc302_h_006",
    course: "CSC 302",
    chapter: "Chapter 2",
    text: "Event-Driven Programming strictly avoids user interactions and graphical elements, focusing instead on background batch processing models.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1, // False
    explanation:
      "The handout explicitly states that Event-Driven Programming focuses on handling events and user interactions, with GUI programming and JavaScript listed as examples.",
  },
  {
    id: "csc302_h_007",
    course: "CSC 302",
    chapter: "Chapter 2",
    text: "According to the comparison table in the handout, what is listed as a weakness of OOP?",
    options: [
      "Error-prone and hard to maintain",
      "Steep learning curve",
      "Complex with overhead",
      "Limited control",
    ],
    correctAnswer: 2,
    explanation:
      "The paradigm comparison table in the handout lists 'Complex, overhead' as the weakness of OOP, while its strength is being modular and reusable.",
  },
  {
    id: "csc302_h_008",
    course: "CSC 302",
    chapter: "Chapter 2",
    text: "What is a class, according to the handout?",
    options: [
      "An instance of an object with its own set of values",
      "A function that performs a specific operation on data",
      "A blueprint or template for creating objects",
      "A variable that stores the state of a program",
    ],
    correctAnswer: 2,
    explanation:
      "The handout defines a class as a blueprint or template for creating objects that defines the properties and behaviour of an object.",
  },
  {
    id: "csc302_h_009",
    course: "CSC 302",
    chapter: "Chapter 2",
    text: "A class typically consists of which two components, according to the handout?",
    options: [
      "Constructors and destructors",
      "Attributes and methods",
      "Superclasses and subclasses",
      "Public and private modifiers",
    ],
    correctAnswer: 1,
    explanation:
      "The handout states that a class typically consists of attributes (data members) that define characteristics and methods (functions) that define actions an object can perform.",
  },
  {
    id: "csc302_h_010",
    course: "CSC 302",
    chapter: "Chapter 2",
    text: 'Given the following code:\n\n```java\nclass Car {\n    String color;\n    int speed;\n\n    Car(String color, int speed) {\n        this.color = color;\n        this.speed = speed;\n    }\n\n    void accelerate() {\n        this.speed += 1;\n    }\n\n    String getColor() {\n        return this.color;\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Car myCar = new Car("Red", 60);\n        myCar.accelerate();\n        System.out.println("Car speed: " + myCar.speed);\n    }\n}\n```\n\nWhat is printed when this program runs?',
    options: [
      "Car speed: 60",
      "Car speed: 61",
      "Car speed: 1",
      "The program throws a NullPointerException",
    ],
    correctAnswer: 1,
    explanation:
      "The Car object is initialized with speed 60. Calling accelerate() increments speed by 1, making it 61. The print statement then outputs 'Car speed: 61'.",
  },
  {
    id: "csc302_h_011",
    course: "CSC 302",
    chapter: "Chapter 2",
    text: "What is an object in OOP, according to the handout?",
    options: [
      "The blueprint used to define the structure of a program",
      "A reusable block of code that performs a specific task",
      "An instance of a class with its own set of attributes",
      "A special method called when a class is first defined",
    ],
    correctAnswer: 2,
    explanation:
      "The handout defines an object as an instance of a class that has its own set of attributes and methods and can interact with other objects.",
  },
  {
    id: "csc302_h_012",
    course: "CSC 302",
    chapter: "Chapter 2",
    text: "In Object-Oriented Programming, multiple distinct objects can be created from a single class, with each instance holding its own unique attribute values.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0, // True
    explanation:
      "The handout uses this exact example to illustrate that multiple distinct objects can be created from a single class, each with its own attribute values while sharing the same structure.",
  },
  {
    id: "csc302_h_013",
    course: "CSC 302",
    chapter: "Chapter 2",
    text: "Which of the following describes the concept of 'instantiation' as defined in the handout?",
    options: [
      "Defining the structure and behaviour of a class",
      "Calling a method that belongs to a parent class",
      "Creating an object from a class",
      "Hiding the internal details of an object",
    ],
    correctAnswer: 2,
    explanation:
      "The handout explicitly defines instantiation as the process of creating an object from a class, listed under Key Concepts alongside attribute access and method invocation.",
  },
  {
    id: "csc302_h_014",
    course: "CSC 302",
    chapter: "Chapter 2",
    text: 'Given the following code:\n\n```java\nclass Car {\n    String color;\n    String model;\n\n    Car(String color, String model) {\n        this.color = color;\n        this.model = model;\n    }\n\n    void startEngine() {\n        System.out.println("Engine started");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Car myCar = new Car("Red", "Toyota");\n        myCar.startEngine();\n    }\n}\n```\n\nWhat is printed when this program runs?',
    options: [
      "Car color: Red",
      "Red Toyota",
      "Engine started",
      "The program throws a TypeError",
    ],
    correctAnswer: 2,
    explanation:
      "Calling startEngine() on the created Car object executes the print statement inside the method, outputting 'Engine started'.",
  },
  {
    id: "csc302_h_015",
    course: "CSC 302",
    chapter: "Chapter 2",
    text: "What is the role of attributes in a class, according to the handout?",
    options: [
      "They define the actions an object can perform",
      "They are used to inherit behaviour from a parent class",
      "They are data members that store the state of an object",
      "They control access to the internal methods of a class",
    ],
    correctAnswer: 2,
    explanation:
      "The handout defines attributes as data members of a class that can be private, public, or protected and are used to store the state of an object.",
  },
  {
    id: "csc302_h_016",
    course: "CSC 302",
    chapter: "Chapter 2",
    text: "What is a constructor, as described in the handout?",
    options: [
      "A method used to release resources when an object is deleted",
      "A special method used to initialize objects when they are created",
      "A function inherited from a parent class to set up attributes",
      "A method that overrides the behaviour of a parent class",
    ],
    correctAnswer: 1,
    explanation:
      "The handout defines constructors as special methods used to initialize objects that are called when an object is created and can take parameters to set initial state.",
  },
  {
    id: "csc302_h_017",
    course: "CSC 302",
    chapter: "Chapter 2",
    text: "Destructors are special methods utilized primarily to initialize newly instantiated objects and assign their default memory spaces.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1, // False
    explanation:
      "The handout explicitly states that destructors are special methods used to clean up objects, called when an object is destroyed, and used to release resources and prevent memory leaks.",
  },
  {
    id: "csc302_h_018",
    course: "CSC 302",
    chapter: "Chapter 2",
    text: "Methods defined inside an Object-Oriented class are capable of operating on instance attributes, performing actions, and being overloaded or overridden.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0, // True
    explanation:
      "The handout states under the Methods section that methods can operate on attributes, perform actions, and can be overloaded or overridden.",
  },
  {
    id: "csc302_h_019",
    course: "CSC 302",
    chapter: "Chapter 2",
    text: "What is inheritance in OOP, according to the handout?",
    options: [
      "The ability of an object to take on multiple forms in different contexts",
      "A mechanism where a new class inherits properties and behaviour from an existing class",
      "The process of hiding internal details of a class from the outside world",
      "The bundling of data and methods within a single unit",
    ],
    correctAnswer: 1,
    explanation:
      "The handout defines inheritance as a mechanism in OOP where a new class inherits properties and behaviour from an existing class, promoting code reusability.",
  },
  {
    id: "csc302_h_020",
    course: "CSC 302",
    chapter: "Chapter 2",
    text: "In the handout's terminology, what is the new class that inherits from an existing class called?",
    options: [
      "Superclass or base class",
      "Abstract class or interface",
      "Subclass or derived class",
      "Concrete class or template",
    ],
    correctAnswer: 2,
    explanation:
      "The handout clearly states that the new class that inherits is called the subclass or derived class, while the existing class being inherited from is the superclass or base class.",
  },
  {
    id: "csc302_h_021",
    course: "CSC 302",
    chapter: "Chapter 2",
    text: "Which type of inheritance does the handout describe as a subclass inheriting from more than one superclass?",
    options: [
      "Single inheritance",
      "Multilevel inheritance",
      "Hierarchical inheritance",
      "Multiple inheritance",
    ],
    correctAnswer: 3,
    explanation:
      "The handout defines multiple inheritance as a subclass inheriting from more than one superclass, using FlyingCar inheriting from both Car and Plane as the example.",
  },
  {
    id: "csc302_h_022",
    course: "CSC 302",
    chapter: "Chapter 2",
    text: 'Given the following code:\n\n```java\nclass Animal {\n    void sound() {\n        System.out.println("The animal makes a sound");\n    }\n}\n\nclass Dog extends Animal {\n    @Override\n    void sound() {\n        System.out.println("The dog barks");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Dog d = new Dog();\n        d.sound();\n    }\n}\n```\n\nWhat is printed when this program runs?',
    options: [
      "The animal makes a sound",
      "The dog barks\nThe animal makes a sound",
      "The dog barks",
      "The program throws a RuntimeException",
    ],
    correctAnswer: 2,
    explanation:
      "The Dog class overrides the sound() method from Animal. When sound() is called on a Dog instance, Java executes Dog's version of the method, printing 'The dog barks'.",
  },
  {
    id: "csc302_h_023",
    course: "CSC 302",
    chapter: "Chapter 2",
    text: "The standard inheritance relationship chain represented by Animal -> Mammal -> Dog is an example of multiple inheritance.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1, // False
    explanation:
      "The handout explicitly uses the example Animal -> Mammal -> Dog to illustrate multilevel inheritance, where a subclass inherits from a superclass that itself inherits from another superclass.",
  },
  {
    id: "csc302_h_024",
    course: "CSC 302",
    chapter: "Chapter 2",
    text: "According to the handout's Vehicle Class Hierarchy example, which class inherits from Car?",
    options: ["Vehicle", "Truck", "ElectricCar", "FlyingCar"],
    correctAnswer: 2,
    explanation:
      "The handout's Vehicle Class Hierarchy shows Vehicle as the superclass, Car and Truck as subclasses of Vehicle, and ElectricCar as a subclass that inherits from Car.",
  },
  {
    id: "csc302_h_025",
    course: "CSC 302",
    chapter: "Chapter 2",
    text: "Which of the following is listed as a benefit of inheritance in the handout?",
    options: [
      "Eliminates the need for constructors",
      "Prevents subclasses from overriding parent methods",
      "Allows hiding of all class attributes from external access",
      "Promotes code reusability and hierarchical relationships",
    ],
    correctAnswer: 3,
    explanation:
      "The handout lists code reusability, hierarchical relationships between classes, and easier maintenance and modification as the benefits of inheritance.",
  },
  {
    id: "csc302_h_026",
    course: "CSC 302",
    chapter: "Chapter 2",
    text: 'Given the following code:\n\n```java\nclass Animal {\n    void sound() {\n        System.out.println("The animal makes a sound");\n    }\n}\n\nclass Dog extends Animal {\n    @Override\n    void sound() {\n        System.out.println("The dog barks");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Animal a = new Dog();\n        a.sound();\n    }\n}\n```\n\nWhat is printed when this program runs?',
    options: [
      "The animal makes a sound",
      "The program throws a ClassCastException",
      "The dog barks",
      "The animal makes a sound\nThe dog barks",
    ],
    correctAnswer: 2,
    explanation:
      "Even though the reference type is Animal, the actual object is a Dog instance. Java uses dynamic dispatch (runtime polymorphism), so the Dog's overridden sound() method is called, printing 'The dog barks'.",
  },
  {
    id: "csc302_h_027",
    course: "CSC 302",
    chapter: "Chapter 2",
    text: "What does overriding a method mean, according to the handout?",
    options: [
      "A subclass provides a different implementation of a method already defined in its superclass",
      "A class defines multiple methods with the same name but different parameter counts",
      "A parent class calls a method from its child class at runtime",
      "A method is made private so it cannot be accessed from outside the class",
    ],
    correctAnswer: 0,
    explanation:
      "The handout defines method overriding as a subclass providing a different implementation of a method that is already defined in its superclass, demonstrated with the Dog/Animal sound() example.",
  },
  {
    id: "csc302_h_028",
    course: "CSC 302",
    chapter: "Chapter 2",
    text: "What does the term 'polymorphism' literally originate from, according to the handout?",
    options: [
      "Latin words meaning 'in' and 'little box'",
      "Greek words meaning 'many' and 'form'",
      "Greek words meaning 'beyond' and 'structure'",
      "Latin words meaning 'inherit' and 'shape'",
    ],
    correctAnswer: 1,
    explanation:
      "The handout states that the term polymorphism originates from the Greek words 'poly' (many) and 'morphe' (form).",
  },
  {
    id: "csc302_h_029",
    course: "CSC 302",
    chapter: "Chapter 2",
    text: "Polymorphism in Object-Oriented systems can be achieved through both method overloading and method overriding.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0, // True
    explanation:
      "The handout explicitly states that polymorphism can be achieved through method overloading or method overriding.",
  },
  {
    id: "csc302_h_030",
    course: "CSC 302",
    chapter: "Chapter 2",
    text: 'Given the following code:\n\n```java\nclass Shape {\n    void draw() {\n        System.out.println("Drawing a shape.");\n    }\n}\n\nclass Circle extends Shape {\n    @Override\n    void draw() {\n        System.out.println("Drawing a circle.");\n    }\n}\n\nclass Rectangle extends Shape {\n    @Override\n    void draw() {\n        System.out.println("Drawing a rectangle.");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Shape s = new Circle();\n        s.draw();\n    }\n}\n```\n\nWhat is printed when this program runs?',
    options: [
      "Drawing a shape.",
      "Drawing a circle.\nDrawing a shape.",
      "Drawing a rectangle.",
      "Drawing a circle.",
    ],
    correctAnswer: 3,
    explanation:
      "The reference type is Shape but the actual object is Circle. Java's dynamic dispatch executes Circle's overridden draw() method, printing 'Drawing a circle.' This demonstrates runtime polymorphism using the Shape/Circle/Rectangle hierarchy from the handout.",
  },
  {
    id: "csc302_h_031",
    course: "CSC 302",
    chapter: "Chapter 2",
    text: "Which key aspect of polymorphism does the handout describe as 'the form or behaviour of a polymorphic object depends on the context'?",
    options: [
      "Multiple Forms",
      "Code Reusability",
      "Context-Dependent",
      "Increased Flexibility",
    ],
    correctAnswer: 2,
    explanation:
      "The handout lists Context-Dependent as a key aspect of polymorphism, stating that the form or behaviour of a polymorphic object or function depends on the context.",
  },
  {
    id: "csc302_h_032",
    course: "CSC 302",
    chapter: "Chapter 2",
    text: "Given the following code:\n\n```java\nclass Calculator {\n    int calculate(int a) {\n        return a * a;\n    }\n\n    int calculate(int a, int b) {\n        return a + b;\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Calculator c = new Calculator();\n        System.out.println(c.calculate(3));\n    }\n}\n```\n\nWhat is the output of this code?",
    options: ["6", "3", "9", "The program throws a MethodNotFoundException"],
    correctAnswer: 2,
    explanation:
      "Java supports method overloading natively. When calculate() is called with one argument (3), the single-parameter version is invoked, returning 3 * 3 = 9. This demonstrates the Calculator overloading concept from the handout adapted to Java.",
  },
  {
    id: "csc302_h_033",
    course: "CSC 302",
    chapter: "Chapter 2",
    text: "What does 'encapsulation' literally originate from, according to the handout?",
    options: [
      "Greek words meaning 'many' and 'form'",
      "Latin words meaning 'in' and 'little box'",
      "Latin words meaning 'hidden' and 'structure'",
      "Greek words meaning 'wrap' and 'protect'",
    ],
    correctAnswer: 1,
    explanation:
      "The handout states that the term encapsulation originates from the Latin words 'in' (in) and 'capsula' (little box).",
  },
  {
    id: "csc302_h_034",
    course: "CSC 302",
    chapter: "Chapter 2",
    text: "What is encapsulation in OOP, according to the handout?",
    options: [
      "The ability of a class to inherit behaviour from multiple parent classes",
      "Showing only the necessary features of an object while hiding non-essential details",
      "Bundling data and methods within a single unit while hiding internal details from the outside world",
      "Creating new classes based on existing ones to promote code reuse",
    ],
    correctAnswer: 2,
    explanation:
      "The handout defines encapsulation as bundling data and methods within a single unit, hiding internal details from the outside world, and protecting data and behaviour from external interference.",
  },
  {
    id: "csc302_h_035",
    course: "CSC 302",
    chapter: "Chapter 2",
    text: "Which of the following is listed as a key aspect of encapsulation in the handout?",
    options: [
      "Context-Dependent behaviour",
      "Data Hiding",
      "Code reusability",
      "Multiple forms",
    ],
    correctAnswer: 1,
    explanation:
      "The handout lists Data Hiding (hiding internal representation from the outside world) and Bundling Data and Methods as the two key aspects of encapsulation.",
  },
  {
    id: "csc302_h_036",
    course: "CSC 302",
    chapter: "Chapter 2",
    text: "Given the following code:\n\n```java\nclass BankAccount {\n    private double balance;\n\n    public BankAccount() {\n        this.balance = 0.0;\n    }\n\n    public void deposit(double amount) {\n        this.balance += amount;\n    }\n\n    public double getBalance() {\n        return this.balance;\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        BankAccount acc = new BankAccount();\n        acc.deposit(500);\n        System.out.println(acc.getBalance());\n    }\n}\n```\n\nWhat OOP principle does the `private` keyword on `balance` demonstrate?",
    options: [
      "Inheritance, by preventing subclasses from accessing the attribute",
      "Polymorphism, by allowing the attribute to take multiple forms",
      "Encapsulation, by making the attribute private and hiding it from external access",
      "Abstraction, by showing only the essential features of the bank account",
    ],
    correctAnswer: 2,
    explanation:
      "The private keyword restricts direct external access to the balance field, forcing interaction through deposit() and getBalance(). This is the core of data hiding and encapsulation as defined in the handout.",
  },
  {
    id: "csc302_h_037",
    course: "CSC 302",
    chapter: "Chapter 2",
    text: "A significant drawback of encapsulation is that it exposes internal state data to unpredictable external interference and modifications.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1, // False
    explanation:
      "The handout lists Better Data Protection — that encapsulation protects data from external interference and misuse — as one of the key benefits of encapsulation.",
  },
  {
    id: "csc302_h_038",
    course: "CSC 302",
    chapter: "Chapter 2",
    text: "What is abstraction in OOP, according to the handout?",
    options: [
      "The mechanism by which a class inherits properties from a parent class",
      "The concept of showing only the necessary information while hiding internal details",
      "The bundling of data and methods within a single unit",
      "The ability of an object to take on multiple forms depending on context",
    ],
    correctAnswer: 1,
    explanation:
      "The handout defines abstraction as the concept of showing only the necessary information to the outside world while hiding the internal details, helping to reduce complexity and improve modularity.",
  },
  {
    id: "csc302_h_039",
    course: "CSC 302",
    chapter: "Chapter 2",
    text: "Abstraction enables software developers to focus on what an object can do rather than how it executes those actions, helping reduce system complexity.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0, // True
    explanation:
      "The handout states that abstraction enables developers to focus on what an object can do rather than how it does it, helping to reduce complexity and improve modularity.",
  },
  {
    id: "csc302_h_040",
    course: "CSC 302",
    chapter: "Chapter 2",
    text: "Which of the following is listed as a benefit of abstraction in the handout?",
    options: [
      "Enhanced data security and protection",
      "Prevents runtime errors from occurring",
      "Reduced complexity and coupling",
      "Enables multiple inheritance across classes",
    ],
    correctAnswer: 2,
    explanation:
      "The handout lists improved code simplicity and readability, enhanced flexibility and maintainability, and reduced complexity and coupling as the benefits of abstraction.",
  },
  {
    id: "csc302_h_041",
    course: "CSC 302",
    chapter: "Chapter 2",
    text: "Which access modifier makes a class member accessible from anywhere, according to the handout?",
    options: ["Private", "Protected", "Public", "Internal"],
    correctAnswer: 2,
    explanation:
      "The handout defines Public as accessible from anywhere, Private as accessible only within the same class, and Protected as accessible within the same class and its subclasses.",
  },
  {
    id: "csc302_h_042",
    course: "CSC 302",
    chapter: "Chapter 2",
    text: "The private access modifier allows class members to be accessed directly from any inheriting subclasses.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1, // False
    explanation:
      "The handout defines protected as accessible within the same class AND its subclasses, distinguishing it from private which is strictly limited to the same class only.",
  },
  {
    id: "csc302_h_043",
    course: "CSC 302",
    chapter: "Chapter 2",
    text: "Given the following code:\n\n```java\nclass BankAccount {\n    private double balance;\n\n    public void deposit(double amount) {\n        this.balance += amount;\n    }\n\n    public double getBalance() {\n        return this.balance;\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        BankAccount acc = new BankAccount();\n        System.out.println(acc.balance);\n    }\n}\n```\n\nWhat happens when this program is compiled?",
    options: [
      "It compiles and prints 0.0",
      "It compiles but throws a NullPointerException at runtime",
      "It fails to compile because balance is private and cannot be accessed directly",
      "It compiles and prints null",
    ],
    correctAnswer: 2,
    explanation:
      "The balance field is declared private, so accessing it directly from outside the class causes a compile-time error. This demonstrates the access modifier principle described in the handout where private members are accessible only within the same class.",
  },
  {
    id: "csc302_h_044",
    course: "CSC 302",
    chapter: "Chapter 2",
    text: "What is exception handling in OOP, according to the handout?",
    options: [
      "A technique for inheriting error-checking behaviour from a parent class",
      "A mechanism to handle runtime errors and exceptions to write robust and reliable code",
      "A process of hiding error details from the user through encapsulation",
      "A method of preventing all possible errors during compilation",
    ],
    correctAnswer: 1,
    explanation:
      "The handout defines exception handling as a mechanism to handle runtime errors and exceptions that allows developers to write robust and reliable code and prevents program crashes.",
  },
  {
    id: "csc302_h_045",
    course: "CSC 302",
    chapter: "Chapter 2",
    text: "What is the purpose of a try block in exception handling, according to the handout?",
    options: [
      "It signals an error or unexpected condition to the caller",
      "It contains code that might throw an exception",
      "It releases resources and prevents memory leaks after execution",
      "It handles exceptions thrown during program execution",
    ],
    correctAnswer: 1,
    explanation:
      "The handout defines the try block as containing code that might throw an exception, while the catch block handles the exceptions thrown by the try block.",
  },
  {
    id: "csc302_h_046",
    course: "CSC 302",
    chapter: "Chapter 2",
    text: 'Given the following code:\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        try {\n            int x = 5 / 0;\n        } catch (ArithmeticException e) {\n            System.out.println("Cannot divide by zero!");\n        }\n    }\n}\n```\n\nWhat is the output of this code?',
    options: [
      "x = 0",
      "The program crashes silently",
      "Cannot divide by zero!",
      "ArithmeticException",
    ],
    correctAnswer: 2,
    explanation:
      "Dividing 5 by 0 triggers an ArithmeticException. The catch block intercepts it and executes the print statement, outputting 'Cannot divide by zero!'. This reflects the try-catch concept demonstrated in the handout.",
  },
  {
    id: "csc302_h_047",
    course: "CSC 302",
    chapter: "Chapter 2",
    text: "According to the handout, what mechanism is used to explicitly throw an exception?",
    options: [
      "The catch statement",
      "The throws declaration",
      "The raise statement",
      "The throw statement",
    ],
    correctAnswer: 3,
    explanation:
      "In Java, the throw statement is used to explicitly throw an exception, equivalent to Python's raise statement shown in the handout. The handout describes this as being used to signal errors or unexpected conditions.",
  },
  {
    id: "csc302_h_048",
    course: "CSC 302",
    chapter: "Chapter 2",
    text: 'Given the following code:\n\n```java\npublic class Main {\n    static double divide(double a, double b) {\n        if (b == 0) {\n            throw new IllegalArgumentException("Cannot divide by zero!");\n        }\n        return a / b;\n    }\n\n    public static void main(String[] args) {\n        System.out.println(divide(10, 0));\n    }\n}\n```\n\nWhat happens when this program runs?',
    options: [
      "The program prints 0.0",
      "The program prints Infinity",
      "An IllegalArgumentException is thrown with the message 'Cannot divide by zero!'",
      "The program compiles but prints nothing",
    ],
    correctAnswer: 2,
    explanation:
      "When divide(10, 0) is called, b equals 0 so the condition is true and throw explicitly raises an IllegalArgumentException. This reflects the handout's concept of using throw/raise to signal errors when unexpected conditions are encountered.",
  },
  {
    id: "csc302_h_049",
    course: "CSC 302",
    chapter: "Chapter 2",
    text: "Which of the following is listed as a best practice for exception handling in the handout?",
    options: [
      "Always use a general catch block to handle all exceptions at once",
      "Keep try-catch blocks as large as possible to cover all code",
      "Handle specific exceptions whenever possible",
      "Suppress all exceptions to prevent the program from crashing",
    ],
    correctAnswer: 2,
    explanation:
      "The handout's best practices for exception handling include: handle specific exceptions whenever possible, provide meaningful error messages, keep try-catch blocks as small as possible, and avoid bare except clauses.",
  },
  {
    id: "csc302_h_050",
    course: "CSC 302",
    chapter: "Chapter 2",
    text: "To ensure exception handling remains modular and maintainable, a recommended best practice is to design try-catch blocks to be as large as possible.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1, // False
    explanation:
      "The handout explicitly lists 'Keep try-catch blocks as small as possible' as one of the best practices for exception handling, alongside handling specific exceptions and providing meaningful error messages.",
  },
  {
    id: "csc302_h_051",
    course: "CSC 302",
    chapter: "Chapter 2",
    text: "According to the summary in the handout, which OOP principle enables objects of different classes to be treated as objects of a common superclass?",
    options: ["Encapsulation", "Abstraction", "Inheritance", "Polymorphism"],
    correctAnswer: 3,
    explanation:
      "The handout's OOP summary states that polymorphism enables objects of different classes to be treated as objects of a common superclass.",
  },
  {
    id: "csc302_h_052",
    course: "CSC 302",
    chapter: "Chapter 2",
    text: "Access modifiers, including public, private, and protected, play a key role in controlling access to class members and reinforcing encapsulation.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0, // True
    explanation:
      "The handout summary explicitly states that access modifiers (public, private, protected) control access to class members, reinforcing the encapsulation principle.",
  },
  {
    id: "csc302_h_053",
    course: "CSC 302",
    chapter: "Chapter 2",
    text: "According to the handout, which OOP principle bundles data and methods that operate on that data within a single unit?",
    options: ["Inheritance", "Polymorphism", "Encapsulation", "Abstraction"],
    correctAnswer: 2,
    explanation:
      "The handout's OOP summary explicitly states that encapsulation bundles data and methods that operate on that data within a single unit.",
  },
];

export default csc302Module2;
