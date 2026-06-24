import { QuestionV2 } from "@/lib/quiz-types";

const csc302Module1: QuestionV2[] = [
  {
    id: "csc302_ch1_001",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "Who developed the Java programming language originally in 1995?",
    options: [
      "Sun Microsystems",
      "Microsoft Corporation",
      "Oracle Corporation",
      "IBM Systems",
    ],
    correctAnswer: 0,
    explanation:
      "The slides state that Java was developed by Sun Microsystems in 1995 and was later acquired by Oracle Corporation in 2010.",
  },
  {
    id: "csc302_ch1_002",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "Java is designed to be a platform-independent language, allowing developers to write code once and run it anywhere on any system with a compatible JVM.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "The slides explicitly describe Java as platform-independent, meaning a developer can write code once and run it anywhere.",
  },
  {
    id: "csc302_ch1_003",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "Why is Java considered a secure language according to its key features?",
    options: [
      "It requires biometric authentication for code execution",
      "It uses encrypted network connections by default",
      "It removes explicit pointers and has automatic garbage collection",
      "It compiles directly to native operating system machine code",
    ],
    correctAnswer: 2,
    explanation:
      'The source material lists "Simple & Secure" as a key feature, specifically noting that Java has no pointers and uses automatic garbage collection to enhance security.',
  },
  {
    id: "csc302_ch1_004",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "Which component is responsible for executing Java bytecode line by line?",
    options: [
      "Java Development Kit",
      "Java Virtual Machine",
      "Java Runtime Environment",
      "Java Application Programming Interface",
    ],
    correctAnswer: 1,
    explanation:
      "The slides define the JVM as the Java Virtual Machine, which is responsible for executing compiled bytecode line by line on any device.",
  },
  {
    id: "csc302_ch1_005",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: 'The concept of "Write Once, Run Anywhere" (WORA) refers to which fundamental Java feature?',
    options: [
      "Platform Independence",
      "Object-Oriented Design",
      "Robust Memory Management",
      "Automatic Garbage Collection",
    ],
    correctAnswer: 0,
    explanation:
      "The concept of writing code once and running it anywhere defines Java's platform independence, enabling execution on any device with a JVM.",
  },
  {
    id: "csc302_ch2_006",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "Which environment component contains the compiler and the development tools needed to write Java programs?",
    options: [
      "Java Runtime Environment",
      "Java Virtual Machine",
      "Java Development Kit",
      "Java Standard Library",
    ],
    correctAnswer: 2,
    explanation:
      "According to the environment setup slides, the Java Development Kit (JDK) is the suite that contains the compiler and necessary development tools.",
  },
  {
    id: "csc302_ch2_007",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "What is the primary purpose of the Java Runtime Environment (JRE)?",
    options: [
      "It provides the compiler needed to convert source code to bytecode",
      "It acts as an integrated development environment for writing code",
      "It generates the HTML documentation for Java code",
      "It provides the libraries and JVM needed to run Java applications",
    ],
    correctAnswer: 3,
    explanation:
      "The slides clearly state that the JRE provides the libraries and the Java Virtual Machine required to execute Java applications.",
  },
  {
    id: "csc302_ch2_008",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "The Java Runtime Environment (JRE) is sufficient to run compiled Java applications, whereas the Java Development Kit (JDK) is required to compile and develop code.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "The slides indicate that the JRE is sufficient to run applications. The JDK is only required if the user intends to compile and develop code.",
  },
  {
    id: "csc302_ch2_009",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: 'Given the following code:\n\n```java\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println("Hello World");\n  }\n}\n```\n\nWhich component is responsible for converting this source code into bytecode?',
    options: [
      "The interpreter inside the JRE",
      "The compiler inside the JDK",
      "The garbage collector inside the JVM",
      "The standard class library",
    ],
    correctAnswer: 1,
    explanation:
      "The slides explain that the JDK contains the compiler tools responsible for converting written Java source code into executable bytecode.",
  },
  {
    id: "csc302_ch1_025",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "Which of the following represents a primitive data type in Java?",
    options: ["Scanner", "boolean", "String", "Object"],
    correctAnswer: 1,
    explanation:
      "The document explicitly lists boolean, int, double, and char as examples of primitive data types in Java.",
  },
  {
    id: "csc302_ch1_026",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "In Java, complex structures such as Strings, Arrays, and Classes are classified as primitive data types.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "The slides classify Strings, Arrays, and Classes as reference data types, which are entirely distinct from primitive data types.",
  },
  {
    id: "csc302_ch1_027",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: 'Java is described as a "strongly typed" language. What does this mean for developers declaring variables?',
    options: [
      "Variables must have a defined data type before use",
      "Variables can change their underlying type during execution",
      "Variables are assigned types dynamically at runtime",
      "Variables must always be initialized with string values",
    ],
    correctAnswer: 0,
    explanation:
      "Being strongly typed means variables require a specific and explicit data type declaration before they can be utilized in the program.",
  },
  {
    id: "csc302_ch1_006",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "Given the following code:\n\n```java\nint a = 10;\nint b = 3;\nSystem.out.println(a % b);\n```\n\nWhat is the output of this code snippet?",
    options: ["0", "3", "1", "3.33"],
    correctAnswer: 2,
    explanation:
      "The modulo operator (%) returns the remainder of a division. Ten divided by three leaves a remainder of one, as demonstrated in the arithmetic operators section.",
  },
  {
    id: "csc302_ch1_007",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "Which relational operator is used to evaluate if two values are unequal?",
    options: ["<>", "=!", "==", "!="],
    correctAnswer: 3,
    explanation:
      "The slides explicitly list `!=` as the standard relational operator utilized in Java to check if two values are unequal.",
  },
  {
    id: "csc302_ch1_008",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "Which logical operator requires both provided conditions to be true in order to evaluate to true?",
    options: ["||", "&&", "!", "=="],
    correctAnswer: 1,
    explanation:
      "The `&&` operator is the logical AND operator. The operators overview specifies that it requires both conditions to be true.",
  },
  {
    id: "csc302_ch1_009",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "The do-while loop is structurally distinguished by guaranteeing that the loop body will be executed at least once before evaluating its loop condition.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "The control flow slides distinguish the do-while loop by its fundamental behavior of executing the loop body at least once before evaluating the loop condition.",
  },
  {
    id: "csc302_ch1_010",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: 'Given the following code:\n\n```java\nint x = 5;\nif (x > 10) {\n  System.out.println("A");\n} else if (x == 5) {\n  System.out.println("B");\n} else {\n  System.out.println("C");\n}\n```\n\nWhat is printed when this program runs?',
    options: ["A", "C", "Nothing is printed", "B"],
    correctAnswer: 3,
    explanation:
      "The execution evaluates `x > 10` as false, skips to the `else if` condition `x == 5` which evaluates as true, executing the print statement for B.",
  },
  {
    id: "csc302_ch1_011",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "Which control flow statement is specifically designed to execute a block of code repeatedly as long as a condition remains true?",
    options: [
      "while loop",
      "switch statement",
      "if-else block",
      "try-catch block",
    ],
    correctAnswer: 0,
    explanation:
      "The while loop is explicitly categorized in the control flow section as the construct used to repeatedly execute code blocks while a condition is valid.",
  },
  {
    id: "csc302_ch1_012",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "When is a switch statement typically preferred over utilizing multiple if-else statements?",
    options: [
      "When evaluating a single variable against multiple exact values",
      "When checking complex boolean expressions and logical operators",
      "When iterating sequentially over elements in an array",
      "When handling unforeseen runtime exceptions",
    ],
    correctAnswer: 0,
    explanation:
      "The switch statement is presented in the control flow material as an optimal alternative to multiple if-else statements for evaluating specific variable values.",
  },
  {
    id: "csc302_ch1_013",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: 'Given the following code:\n\n```java\nfor (int i = 0; i < 3; i++) {\n  System.out.print(i + " ");\n}\n```\n\nWhat is the output of this loop?',
    options: ["1 2 3 ", "0 1 2 ", "0 1 2 3 ", "1 2 "],
    correctAnswer: 1,
    explanation:
      'The loop initializes at 0 and increments until it reaches 2. It prints each value followed by a space, successfully outputting "0 1 2 ".',
  },
  {
    id: "csc302_ch1_014",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "Once an array has been instantiated in Java, its capacity can be dynamically expanded or altered to hold more elements.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "The slides define an array as a fixed-size collection of elements, meaning its capacity cannot be altered once instantiated.",
  },
  {
    id: "csc302_ch1_015",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "What is the numeric index assigned to the very first element in a Java array?",
    options: ["1", "-1", "It depends on the array length", "0"],
    correctAnswer: 3,
    explanation:
      "Java arrays are explicitly described as being zero-indexed in the arrays section, meaning the first element is always accessed at index 0.",
  },
  {
    id: "csc302_ch1_016",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "Given the following code:\n\n```java\npublic static int multiply(int a, int b) {\n  return a * b;\n}\npublic static void main(String[] args) {\n  System.out.println(multiply(4, 5));\n}\n```\n\nWhat happens when this program runs?",
    options: [
      "It results in a compilation error",
      "It prints an undefined value",
      "It prints 20",
      "It prints multiply(4, 5)",
    ],
    correctAnswer: 2,
    explanation:
      "The main method calls the `multiply` method passing the arguments 4 and 5. The method calculates 20, returns it, and the print statement outputs it.",
  },
  {
    id: "csc302_ch1_017",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "What is the specific purpose of the return type declared in a method signature?",
    options: [
      "It specifies the type of value the method sends back to the caller",
      "It defines the names of the parameters the method accepts",
      "It indicates the visibility level of the method",
      "It dictates the memory location where the method is stored",
    ],
    correctAnswer: 0,
    explanation:
      "The method section outlines that every method requires a return type to formally define the kind of data it will return upon successful execution.",
  },
  {
    id: "csc302_ch1_018",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "Given the following code:\n\n```java\nint[] scores = new int[5];\nscores[0] = 85;\nSystem.out.println(scores.length);\n```\n\nWhat is printed by this code?",
    options: ["1", "85", "0", "5"],
    correctAnswer: 3,
    explanation:
      "The `length` property of an array returns its total allocated size upon creation, which here is 5, regardless of how many items are manually populated.",
  },
  {
    id: "csc302_ch1_019",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "Which category of exceptions is verified by the compiler at compile-time?",
    options: [
      "Unchecked exceptions",
      "Checked exceptions",
      "Runtime exceptions",
      "Logic errors",
    ],
    correctAnswer: 1,
    explanation:
      "The exception handling slides firmly define checked exceptions as those that are enforced and actively verified by the compiler at compile-time.",
  },
  {
    id: "csc302_ch1_020",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "In Java's exception handling hierarchy, a NullPointerException is classified as a checked exception that must be declared or caught at compile-time.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "The text explicitly lists NullPointerException as a classic example of an unchecked (runtime) exception, not a checked one.",
  },
  {
    id: "csc302_ch1_021",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "What is the primary operational purpose of the `finally` block in exception handling?",
    options: [
      "To execute guaranteed cleanup code after a try block completes",
      "To catch multiple exception types simultaneously",
      "To throw a custom exception back to the caller",
      "To terminate the program safely without throwing errors",
    ],
    correctAnswer: 0,
    explanation:
      "The `finally` keyword introduces a block that executes guaranteed cleanup code, independent of whether exceptions were thrown or caught during execution.",
  },
  {
    id: "csc302_ch1_022",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: 'Given the following code:\n\n```java\ntry {\n  int result = 10 / 0;\n} catch (ArithmeticException e) {\n  System.out.println("Error caught");\n} finally {\n  System.out.println("Done");\n}\n```\n\nWhat is the output of this code snippet?',
    options: [
      "Only Error caught",
      "Only Done",
      "Error caught followed by Done",
      "The program crashes without output",
    ],
    correctAnswer: 2,
    explanation:
      'Dividing by zero instantly triggers the `ArithmeticException` catch block printing "Error caught". This is immediately followed by the `finally` block executing and printing "Done".',
  },
  {
    id: "csc302_ch1_023",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "Which keyword must be appended to a method signature to indicate that executing it might result in an exception being thrown to the caller?",
    options: ["throws", "throw", "catch", "finally"],
    correctAnswer: 0,
    explanation:
      "The `throws` keyword is used in a method's signature to declare that the method might result in a specific exception being passed up to the caller.",
  },
  {
    id: "csc302_ch1_024",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "The Java compiler strictly enforces that all unchecked (runtime) exceptions must be explicitly caught or declared using a throws clause.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "The slides differentiate unchecked (runtime) exceptions by noting they are not checked at compile-time. Explicit handling is therefore not strictly enforced by the compiler.",
  },
  {
    id: "csc302_ch7_032",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "Which class is the primary standard tool used for retrieving user input directly from the console?",
    options: [
      "java.io.Console",
      "java.lang.System",
      "java.util.Scanner",
      "java.util.Input",
    ],
    correctAnswer: 2,
    explanation:
      "The user input chapter formally identifies the `java.util.Scanner` class as the designated and primary tool used for retrieving input from the user via the console.",
  },
  {
    id: "csc302_ch7_033",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "Which method belonging to the Scanner class is appropriate for reading an entire line of text input?",
    options: ["nextLine()", "next()", "nextString()", "readLine()"],
    correctAnswer: 0,
    explanation:
      "The `Scanner` class utilizes the `nextLine()` method specifically to read and capture an entire line of text input from the console buffer.",
  },
  {
    id: "csc302_ch7_034",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: 'Given the following code:\n\n```java\nSystem.out.print("Hello");\nSystem.out.println("World");\n```\n\nHow will the output appear on the console?',
    options: [
      "Hello on the first line and World on the second line",
      "HelloWorld on the same line",
      "WorldHello on the same line",
      "Hello and World separated by a tab space",
    ],
    correctAnswer: 1,
    explanation:
      '`print()` outputs without adding a new line, so "Hello" is immediately followed by "World" on the same line before `println()` moves the cursor downwards.',
  },
  {
    id: "csc302_ch7_035",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "Which standard output method should a developer use for generating formatted string output in Java?",
    options: [
      "System.out.println()",
      "System.out.print()",
      "System.out.formatOut()",
      "System.out.printf()",
    ],
    correctAnswer: 3,
    explanation:
      "The console output section distinctly lists `System.out.printf()` as the correct method to utilize for producing formatted string output.",
  },
  {
    id: "csc302_ch8_036",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "Which collection interface strictly stores elements in an ordered sequence and explicitly allows duplicate values?",
    options: ["List", "Set", "Map", "Tree"],
    correctAnswer: 0,
    explanation:
      "The Java Collections Framework section defines the `List` interface as a collection that maintains elements in an ordered sequence and permits duplicate entries.",
  },
  {
    id: "csc302_ch8_037",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "Unlike key-value pair layouts, the Map interface in Java is designed to store elements as an unordered, single-value list.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "The slides clarify that the Map interface distinctly stores data in key-value pairs (like HashMap), differentiating it from single-element collections.",
  },
  {
    id: "csc302_ch8_038",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "If a developer needs a collection that automatically guarantees absolute uniqueness among its stored elements, which collection type should they implement?",
    options: ["List", "Set", "Array", "ArrayList"],
    correctAnswer: 1,
    explanation:
      "A `Set` is defined fundamentally in the collections section as an unordered collection that enforces uniqueness by automatically preventing duplicate elements.",
  },
  {
    id: "csc302_ch8_039",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "Which of the following classes is a standard concrete implementation of the Map interface?",
    options: ["HashMap", "HashSet", "LinkedList", "ArrayList"],
    correctAnswer: 0,
    explanation:
      "The source material identifies `HashMap` and `TreeMap` as the concrete class implementations provided for utilizing the Map interface.",
  },
  {
    id: "csc302_ch8_040",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "Under the Java Collections Framework, a HashSet is an implementation of the Set interface that maintains an unordered collection of unique elements.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "Under the Set interface details, HashSet is prominently highlighted as a collection implementation that maintains an unordered list of unique elements.",
  },
  {
    id: "csc302_ch9_041",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "In which version of Java were Lambda expressions officially introduced?",
    options: ["Java 5", "Java 8", "Java 11", "Java 17"],
    correctAnswer: 1,
    explanation:
      "The Lambda Expressions slide specifically notes that this powerful feature, introducing anonymous methods, was introduced in Java 8.",
  },
  {
    id: "csc302_ch9_042",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "What is the primary syntax structure used to define a Lambda expression in Java?",
    options: [
      "(parameters) -> expression",
      "parameters => expression",
      "{parameters} -> expression",
      "function(parameters) { expression }",
    ],
    correctAnswer: 0,
    explanation:
      "The explicit syntax structure provided in the material for formulating a lambda expression is `(parameters) -> expression`.",
  },
  {
    id: "csc302_ch9_043",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "Lambda expressions are most commonly used in conjunction with which type of interface?",
    options: [
      "Functional interfaces",
      "Marker interfaces",
      "Serializable interfaces",
      "Collection interfaces",
    ],
    correctAnswer: 0,
    explanation:
      "The lambda expressions slide notes that they represent anonymous methods that are often utilized alongside functional interfaces like Runnable or Callable.",
  },
  {
    id: "csc302_ch10_044",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "In Java, instantiated objects of the String class possess which critical characteristic?",
    options: [
      "They are primitive data types",
      "They can dynamically resize without creating new objects",
      "They are immutable",
      "They are strongly typed numeric variables",
    ],
    correctAnswer: 2,
    explanation:
      "The Java Strings section emphasizes that string objects are immutable, meaning their internal sequence of characters cannot be changed once initialized.",
  },
  {
    id: "csc302_ch10_045",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "If an algorithm requires performing frequent modifications to a character sequence, which class is more efficient to use than String?",
    options: ["StringBuilder", "StringBuffer", "CharArray", "StringModifier"],
    correctAnswer: 0,
    explanation:
      "For scenarios requiring mutable sequences of characters and frequent modifications, the slides recommend using the `StringBuilder` class.",
  },
  {
    id: "csc302_ch10_046",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: 'Given the following code:\n\n```java\nString s = "Java";\nSystem.out.println(s.charAt(1));\n```\n\nWhat is the output of this code snippet?',
    options: ["J", "a", "v", "The code causes a runtime error"],
    correctAnswer: 1,
    explanation:
      "Because strings and arrays are zero-indexed, calling `charAt(1)` on the word \"Java\" returns the second character in the sequence, which is 'a'.",
  },
  {
    id: "csc302_ch10_047",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "Which String method is used specifically to compare the content of two strings while ignoring any differences in casing?",
    options: [
      "equals()",
      "equalsIgnoreCase()",
      "compareToIgnoreCase()",
      "isEqualTo()",
    ],
    correctAnswer: 1,
    explanation:
      "The slides list `equalsIgnoreCase()` alongside `equals()` as the method deployed specifically to evaluate string equivalence regardless of upper or lower casing.",
  },
  {
    id: "csc302_ch11_048",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "According to the modern best practices mentioned in the slides, which package should be favored for file handling?",
    options: ["java.io", "java.file.system", "java.lang.io", "java.nio.file"],
    correctAnswer: 3,
    explanation:
      "The modern best practice outlined in the file handling slides advises favoring the `java.nio.file` package for all modern file handling code development.",
  },
  {
    id: "csc302_ch11_049",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "What is a significant advantage of using the try-with-resources statement when handling files?",
    options: [
      "It ensures unchecked exceptions are caught and logged automatically",
      "It automatically encrypts the file contents upon saving",
      "It bypasses the need for the java.io package entirely",
      "It automatically closes resources to prevent memory leaks",
    ],
    correctAnswer: 3,
    explanation:
      "The best practices section highlights the try-with-resources statement because it provides automatic closure for file resources, enforcing safe memory management.",
  },
  {
    id: "csc302_ch11_050",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "In Java file operations, the standard method utilized to verify whether a target file actually exists on the disk is file.exists().",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "The file handling operations table explicitly includes `file.exists()` as the standard method utilized to verify if a file exists.",
  },
  {
    id: "csc302_ch11_051",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: 'Given the following code:\n\n```java\nPath path = Paths.get("data.txt");\nif (Files.exists(path)) {\n  System.out.println("Found");\n}\n```\n\nWhich modern Java package provides the functional classes used in this snippet?',
    options: [
      "java.io",
      "java.nio.file",
      "java.util.stream",
      "java.lang.system",
    ],
    correctAnswer: 1,
    explanation:
      "The `Files` and `Paths` classes are part of the `java.nio.file` package, highlighted as the modern standard for locating and interacting with files.",
  },
  {
    id: "csc302_ch11_052",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "When performing operations on large files, which classes provide better performance according to the slides?",
    options: [
      "FileWriter and FileReader",
      "FileInputStream and FileOutputStream",
      "BufferedWriter and BufferedReader",
      "Scanner and Printer",
    ],
    correctAnswer: 2,
    explanation:
      "The file handling best practices explicitly state that using `BufferedWriter` and `BufferedReader` yields better runtime performance when working with large files.",
  },
];

export default csc302Module1;
