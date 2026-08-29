import { QuestionV2 } from "@/lib/quiz-types";

const csc302Module1: QuestionV2[] = [
  // --- INTRODUCTION & KEY FEATURES ---
  {
    id: "csc302_ch1_001",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "Who originally developed the Java programming language in 1995?",
    options: [
      "Sun Microsystems",
      "Oracle Corporation",
      "Microsoft",
      "Apple Inc.",
    ],
    correctAnswer: 0,
    explanation:
      "According to the slides, Java was originally developed by Sun Microsystems in 1995 before being acquired by Oracle Corporation in 2010.",
  },
  {
    id: "csc302_ch1_002",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "Java programs are compiled into bytecode, which runs on any device equipped with a Java Virtual Machine (JVM).",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "Java's platform independence is achieved because its compiled bytecode can run on any device that has a JVM installed.",
  },
  {
    id: "csc302_ch1_003",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "Which core feature of Java describes its strong memory management and automatic garbage collection capabilities?",
    options: ["Robust", "Secure", "Multithreaded", "Platform Independent"],
    correctAnswer: 0,
    explanation:
      "Java is considered robust primarily due to its strong memory management, exception handling, and automatic garbage collection.",
  },
  {
    id: "csc302_ch1_004",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "Which feature allows a Java program to perform multiple tasks concurrently within the same application?",
    options: ["Multithreaded", "Object-Oriented", "Robust", "Secure"],
    correctAnswer: 0,
    explanation:
      "The multithreaded feature of Java allows concurrent execution of two or more parts of a program for maximum utilization of the CPU.",
  },

  // --- OOP CONCEPTS ---
  {
    id: "csc302_ch1_005",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "Which object-oriented concept involves bundling data and methods while restricting direct external access to the object's components?",
    options: ["Encapsulation", "Polymorphism", "Inheritance", "Abstraction"],
    correctAnswer: 0,
    explanation:
      "Encapsulation is the OOP principle of bundling data and methods while restricting direct external access to the object's internal state.",
  },
  {
    id: "csc302_ch1_006",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "What is the OOP mechanism where a new class acquires the properties and behaviors of an existing class?",
    options: ["Inheritance", "Encapsulation", "Polymorphism", "Abstraction"],
    correctAnswer: 0,
    explanation:
      "Inheritance promotes code reusability by allowing one class to inherit the fields and methods of another class.",
  },
  {
    id: "csc302_ch1_007",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "Polymorphism allows a Java object to take on many forms, enabling a single action to be performed in different ways.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "Polymorphism literally means 'many forms' and allows objects of different classes to be treated as objects of a common superclass.",
  },
  {
    id: "csc302_ch1_008",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "Which OOP concept focuses on hiding the complex implementation details of a system and only exposing the essential features to the user?",
    options: ["Abstraction", "Encapsulation", "Inheritance", "Polymorphism"],
    correctAnswer: 0,
    explanation:
      "Abstraction simplifies complex reality by modeling classes appropriate to the problem and hiding internal implementation details.",
  },
  {
    id: "csc302_ch1_009",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "Which keyword is utilized in Java to establish an inheritance relationship where a child class inherits from a parent class?",
    options: ["extends", "implements", "inherits", "super"],
    correctAnswer: 0,
    explanation:
      "The 'extends' keyword is strictly used in a class declaration to specify that the new class is a derived child of an existing parent class.",
  },

  // --- ENVIRONMENT SETUP & IDES ---
  {
    id: "csc302_ch1_010",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "Which Java environment component provides the tools required for application development, such as the compiler?",
    options: [
      "Java Development Kit (JDK)",
      "Java Runtime Environment (JRE)",
      "Java Virtual Machine (JVM)",
      "Java Application Programming Interface (API)",
    ],
    correctAnswer: 0,
    explanation:
      "The Java Development Kit (JDK) contains the necessary tools for development, including the compiler (javac), distinguishing it from the JRE.",
  },
  {
    id: "csc302_ch1_011",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "What is the primary role of the Java Virtual Machine (JVM) in the execution process?",
    options: [
      "It executes the compiled bytecode",
      "It writes the source code",
      "It compiles Java source code to bytecode",
      "It provides the development libraries",
    ],
    correctAnswer: 0,
    explanation:
      "The JVM is the engine that actually executes the compiled bytecode line by line on the host operating system.",
  },
  {
    id: "csc302_ch1_012",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "Which of the following software applications is recognized as a popular Integrated Development Environment (IDE) specifically designed for Java development?",
    options: [
      "IntelliJ IDEA",
      "Safari",
      "Windows File Explorer",
      "Adobe Photoshop",
    ],
    correctAnswer: 0,
    explanation:
      "IntelliJ IDEA, along with Eclipse and NetBeans, is a fully-featured Integrated Development Environment (IDE) explicitly built for writing Java.",
  },

  // --- BASICS, DATA TYPES & COMMENTS ---
  {
    id: "csc302_ch1_013",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "What is the correct signature for the main method that serves as the entry point for a Java application?",
    options: [
      "public static void main(String[] args)",
      "public void main(String[] args)",
      "static public main(String args)",
      "public static int main(String[] args)",
    ],
    correctAnswer: 0,
    explanation:
      "The execution of any Java program strictly begins from the `public static void main(String[] args)` method.",
  },
  {
    id: "csc302_ch1_014",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "Primitive data types in Java store a reference to an object's memory location rather than the actual raw value.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "Primitive data types (like int and boolean) store raw values directly. Non-primitive types (like String) store memory references.",
  },
  {
    id: "csc302_ch1_015",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "Which of the following is considered a non-primitive data type in Java?",
    options: ["String", "int", "boolean", "char"],
    correctAnswer: 0,
    explanation:
      "Strings are objects in Java, making them non-primitive data types, whereas int, boolean, and char are primitive types.",
  },
  {
    id: "csc302_ch1_016",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "Which syntax is utilized to correctly construct a documentation comment, also known as Javadoc, in a Java source file?",
    options: ["/** ... */", "/* ... */", "// ...", "<!-- ... -->"],
    correctAnswer: 0,
    explanation:
      "Javadoc comments begin with /** and end with */, allowing automated tools to extract documentation directly from the source code.",
  },
  {
    id: "csc302_ch1_017",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "The boolean primitive data type exclusively stores either true or false values.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "In Java, the boolean data type represents one bit of information and can only ever evaluate to the strict literals true or false.",
  },

  // --- OPERATORS ---
  {
    id: "csc302_ch1_018",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "What mathematical calculation is performed by the modulo operator (%) in Java?",
    options: [
      "It returns the remainder leftover after a division operation",
      "It computes statistical percentages of integer sets",
      "It performs division while dropping any remainders",
      "It calculates the absolute positive value of an integer",
    ],
    correctAnswer: 0,
    explanation:
      "The modulo operator accurately calculates the integer remainder that is left over after dividing the left-hand operand by the right-hand operand.",
  },
  {
    id: "csc302_ch1_019",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "Which relational operator is utilized to verify if two primitive values are not equal to each other in Java?",
    options: ["!=", "==", "<>", "!=="],
    correctAnswer: 0,
    explanation:
      "The `!=` operator evaluates to true if the operand on the left is not equal to the operand on the right.",
  },
  {
    id: "csc302_ch1_020",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: `Given the following code:

\`\`\`java
int a = 5;
int b = 10;
if (a > 3 && b < 20) {
  System.out.println("Valid");
} else {
  System.out.println("Invalid");
}
\`\`\`

What is the output of this program?`,
    options: ["Valid", "Invalid", "Compile error", "Runtime error"],
    correctAnswer: 0,
    explanation:
      "The logical AND operator (&&) returns true because both conditional checks (5 > 3) and (10 < 20) evaluate to true.",
  },
  {
    id: "csc302_ch1_021",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "The logical OR operator (||) evaluates to true if at least one of the provided operands evaluates to true.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "The logical OR operator strictly requires only one operand to be true for the entire expression to return true.",
  },
  {
    id: "csc302_ch1_022",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: `Given the following code:

\`\`\`java
boolean isValid = true;
boolean result = !isValid;
System.out.println(result);
\`\`\`

What does this program print?`,
    options: ["false", "true", "null", "A compiler error"],
    correctAnswer: 0,
    explanation:
      "The logical NOT operator (!) perfectly inverts the value of a boolean expression, turning true into false.",
  },
  {
    id: "csc302_ch1_023",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: `Given the following code:

\`\`\`java
int score = 10;
score += 5;
score -= 2;
System.out.println(score);
\`\`\`

What is the final printed output?`,
    options: ["13", "10", "15", "8"],
    correctAnswer: 0,
    explanation:
      "The compound assignment += adds 5 to the initial 10 (making 15). The -= operator then subtracts 2, leaving exactly 13.",
  },

  // --- CONTROL FLOW ---
  {
    id: "csc302_ch1_024",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: `Given the following code:

\`\`\`java
int x = 1;
switch (x) {
  case 1:
    System.out.print("One ");
  case 2:
    System.out.print("Two ");
  case 3:
    System.out.print("Three ");
}
\`\`\`

What is printed when this code snippet executes?`,
    options: ["One Two Three ", "One ", "Two Three ", "Three "],
    correctAnswer: 0,
    explanation:
      "Because there is no break statement after case 1, execution 'falls through' to case 2 and then case 3, printing all strings sequentially.",
  },
  {
    id: "csc302_ch1_025",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "Which keyword is utilized within a switch statement to specify a fallback block of code that executes if none of the defined cases match the evaluated variable?",
    options: ["default", "else", "finally", "catch"],
    correctAnswer: 0,
    explanation:
      "The 'default' keyword acts as the catch-all execution path in a switch block if no prior case statement evaluates to true.",
  },
  {
    id: "csc302_ch1_026",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "A do-while loop in Java executes its code block at least once, regardless of whether the initial condition evaluates to true or false.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "The do-while loop fundamentally evaluates its controlling condition after executing the code block, guaranteeing a minimum of one execution.",
  },
  {
    id: "csc302_ch1_027",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "What effect does the continue keyword have when triggered inside the body of a standard for loop?",
    options: [
      "It skips the remainder of the current iteration and jumps to the next loop evaluation",
      "It immediately terminates the entire loop permanently",
      "It restarts the loop entirely from the first element",
      "It forces the application to return entirely from the current method",
    ],
    correctAnswer: 0,
    explanation:
      "The continue keyword instantly bypasses all subsequent lines in the loop body for that iteration and proceeds to the next iteration step.",
  },
  {
    id: "csc302_ch1_028",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: `Given the following code:

\`\`\`java
for (int i = 0; i < 5; i++) {
  if (i == 3) break;
  System.out.print(i);
}
\`\`\`

What is printed to the console?`,
    options: ["012", "0123", "0124", "123"],
    correctAnswer: 0,
    explanation:
      "The loop successfully prints 0, 1, and 2. When i becomes 3, the break statement is triggered and immediately terminates the loop entirely.",
  },

  // --- ARRAYS ---
  {
    id: "csc302_ch1_029",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "How is a two-dimensional array of integers properly declared in Java?",
    options: [
      "int[][] matrix;",
      "int[2] matrix;",
      "int matrix[][];",
      "int[][] matrix = new int[];",
    ],
    correctAnswer: 0,
    explanation:
      "A two-dimensional array is declared using two consecutive sets of square brackets following the data type, such as int[][] or double[][].",
  },
  {
    id: "csc302_ch1_030",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: `Given the following code:

\`\`\`java
int[] numbers = {10, 20, 30};
System.out.println(numbers[3]);
\`\`\`

What happens when this code is executed?`,
    options: [
      "An ArrayIndexOutOfBoundsException is thrown",
      "The number 30 is printed",
      "The number 0 is printed",
      "A compile-time error prevents execution",
    ],
    correctAnswer: 0,
    explanation:
      "Arrays in Java are zero-indexed. An array of size 3 has valid indices 0, 1, and 2. Accessing index 3 directly causes an out-of-bounds runtime exception.",
  },
  {
    id: "csc302_ch1_031",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "Once a standard Java array is created and initialized, its physical size can be dynamically expanded to hold more elements.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "Standard Java arrays have a strictly fixed length. Once instantiated, their size cannot be changed; dynamic resizing requires collections like ArrayList.",
  },
  {
    id: "csc302_ch1_032",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "Which property directly provides the total number of elements allocated within a standard one-dimensional Java array?",
    options: ["length", "size()", "count", "capacity()"],
    correctAnswer: 0,
    explanation:
      "The `.length` property directly returns the fixed memory size allocated to an array immediately upon its creation.",
  },
  {
    id: "csc302_ch1_033",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: `Given the following code:

\`\`\`java
int[] data = new int[3];
System.out.println(data[1]);
\`\`\`

What is strictly printed to the console?`,
    options: ["0", "null", "An error occurs", "3"],
    correctAnswer: 0,
    explanation:
      "When an integer array is initialized using the 'new' keyword without explicit values, Java automatically populates all indices with the default value of 0.",
  },

  // --- METHODS ---
  {
    id: "csc302_ch1_034",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "Method overloading in Java requires multiple methods within the same class to share the same name while differing in what specific aspect?",
    options: [
      "Their parameter lists",
      "Their return data types",
      "Their visibility modifiers",
      "Their generic type bounds",
    ],
    correctAnswer: 0,
    explanation:
      "Method overloading occurs when methods share the exact same identifier but differ in the number, types, or order of their parameters.",
  },
  {
    id: "csc302_ch1_035",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "What comprises the signature of a method in Java, which the compiler uses to distinguish between overloaded method definitions?",
    options: [
      "The method name and its parameter list",
      "The method name and its return type",
      "The parameter list and the return type",
      "The access modifier and the method name",
    ],
    correctAnswer: 0,
    explanation:
      "A Java method signature uniquely consists of the method's name and the exact sequence of parameter types in their declared order.",
  },
  {
    id: "csc302_ch1_036",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: `Given the following code:

\`\`\`java
public int multiply(int a, int b) {
  return a * b;
}
\`\`\`

What role does the 'int' keyword play right before the method name?`,
    options: [
      "It specifies the data type of the value the method will return",
      "It declares a local variable for the method block",
      "It restricts the method from being overridden",
      "It casts the parameters to integers",
    ],
    correctAnswer: 0,
    explanation:
      "The type declaration before the method name indicates the specific return type of the value that the method is expected to pass back to its caller.",
  },
  {
    id: "csc302_ch1_037",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "What specific return type must be declared for a method that performs internal logic but does not return any data payload to its caller?",
    options: ["void", "null", "empty", "static"],
    correctAnswer: 0,
    explanation:
      "The 'void' keyword explicitly signifies that the method will finish its execution without returning any value whatsoever.",
  },
  {
    id: "csc302_ch1_038",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "The return type of a method alone determines whether the method can be successfully overloaded in a Java class.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "Overloaded methods must strictly differ in their parameter lists. Attempting to overload by changing only the return type creates a compile-time error.",
  },

  // --- EXCEPTION HANDLING ---
  {
    id: "csc302_ch1_039",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "What is the primary operational purpose of the finally block within Java exception handling?",
    options: [
      "To execute critical code regardless of whether an exception occurs",
      "To specify a fallback exception handler",
      "To explicitly throw a new exception to the calling method",
      "To restart the try block execution from the beginning",
    ],
    correctAnswer: 0,
    explanation:
      "The finally block executes crucial cleanup code, such as closing open file resources, and runs reliably whether an exception was thrown or caught.",
  },
  {
    id: "csc302_ch1_040",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "Which keyword is placed in a method signature to indicate that the method might propagate a specific type of exception to its caller?",
    options: ["throws", "throw", "catch", "try"],
    correctAnswer: 0,
    explanation:
      "The `throws` keyword is utilized in the method declaration to warn that the method might throw exceptions that the caller is obligated to handle.",
  },
  {
    id: "csc302_ch1_041",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: `Given the following code:

\`\`\`java
try {
  int result = 10 / 0;
  System.out.print("A");
} catch (ArithmeticException e) {
  System.out.print("B");
} finally {
  System.out.print("C");
}
\`\`\`

What is printed when this program runs?`,
    options: ["BC", "A", "AC", "ABC"],
    correctAnswer: 0,
    explanation:
      "The division by zero immediately triggers the catch block, printing 'B'. The finally block is guaranteed to execute afterwards, printing 'C'.",
  },
  {
    id: "csc302_ch1_042",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "How do developers explicitly trigger an exception from within the logic of a custom Java method?",
    options: [
      "By using the throw keyword followed by an exception object",
      "By appending the throws keyword to the method signature",
      "By catching an error inside a final block",
      "By invoking the Runtime.error() command",
    ],
    correctAnswer: 0,
    explanation:
      "The `throw` keyword is used to manually instantiate and launch an exception object at the exact moment a logical validation fails.",
  },
  {
    id: "csc302_ch1_043",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "Checked exceptions are verified by the Java compiler at compile-time to ensure that the developer has provided a proper handling mechanism.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "The compiler rigidly enforces checked exceptions; code will fail to compile unless these exceptions are wrapped in a try-catch block or declared in the method signature.",
  },
  {
    id: "csc302_ch1_044",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "Unchecked exceptions, such as NullPointerException, only occur during the execution phase and are not strictly verified by the compiler.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "Unchecked exceptions inherit from RuntimeException and logically occur during the runtime phase without triggering mandatory compiler checks beforehand.",
  },

  // --- USER INPUT & CONSOLE OUTPUT ---
  {
    id: "csc302_ch1_045",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "Which package must be imported to successfully utilize the standard Scanner class for reading console input?",
    options: [
      "java.util.Scanner",
      "java.io.Scanner",
      "java.net.Scanner",
      "java.lang.Scanner",
    ],
    correctAnswer: 0,
    explanation:
      "The Scanner class is officially located within the java.util utility package and must be explicitly imported to read input streams.",
  },
  {
    id: "csc302_ch1_046",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "Which format specifier is utilized within the System.out.printf method to correctly output a floating-point decimal number?",
    options: ["%f", "%d", "%s", "%c"],
    correctAnswer: 0,
    explanation:
      "In Java console output formatting, `%f` is explicitly used for floating-point values, while `%d` is strictly reserved for integer values.",
  },
  {
    id: "csc302_ch1_047",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "When reading console input with the Scanner class, what issue arises when chaining a call to nextLine() immediately after nextInt()?",
    options: [
      "The scanner consumes the leftover newline character instead of waiting for user input",
      "The compiler throws a strict type mismatch error",
      "The program erroneously requests integer input twice",
      "The internal buffer clears automatically leading to data truncation",
    ],
    correctAnswer: 0,
    explanation:
      "The `nextInt()` method reads the number but leaves the trailing newline character in the buffer, causing the subsequent `nextLine()` to instantly read an empty string.",
  },
  {
    id: "csc302_ch1_048",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: `Given the following code:

\`\`\`java
double price = 12.3456;
System.out.printf("Cost: %.2f", price);
\`\`\`

What is the expected output?`,
    options: ["Cost: 12.35", "Cost: 12.34", "Cost: 12.3456", "Cost: %.2f"],
    correctAnswer: 0,
    explanation:
      "The `%.2f` format specifier explicitly limits the floating-point output to two decimal places, which correctly rounds the trailing digits.",
  },
  {
    id: "csc302_ch1_049",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "Which format specifier is utilized within System.out.printf to output an entire string of characters?",
    options: ["%s", "%c", "%f", "%d"],
    correctAnswer: 0,
    explanation:
      "The `%s` specifier targets String variables, whereas `%c` handles a single primitive character.",
  },

  // --- COLLECTIONS FRAMEWORK ---
  {
    id: "csc302_ch1_050",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "Within the Java Collections Framework, which interface represents an ordered collection that naturally permits duplicate elements?",
    options: ["List", "Set", "Map", "Queue"],
    correctAnswer: 0,
    explanation:
      "The List interface represents a sequentially ordered collection that allows duplicate elements, unlike Sets which strictly require element uniqueness.",
  },
  {
    id: "csc302_ch1_051",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "Which Collection class ensures that all its entries remain sorted according to their natural ordering while strictly prohibiting duplicate values?",
    options: ["TreeSet", "HashSet", "TreeMap", "ArrayList"],
    correctAnswer: 0,
    explanation:
      "The TreeSet class implements the Set interface to prevent duplicates and internally structures the elements according to their natural sorting order.",
  },
  {
    id: "csc302_ch1_052",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "The Set interface in the Java Collections Framework allows multiple identical duplicate elements to be logically stored.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "By definition, a Set is a collection that cannot contain duplicate elements, logically modeling the mathematical set abstraction.",
  },
  {
    id: "csc302_ch1_053",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "Which Collection implementation guarantees fast lookups for key-value pairs without maintaining any predictable iteration order?",
    options: ["HashMap", "TreeMap", "ArrayList", "LinkedList"],
    correctAnswer: 0,
    explanation:
      "A HashMap stores objects in key-value pairs via hash codes, enabling rapid retrieval but resulting in a completely unpredictable traversal order.",
  },
  {
    id: "csc302_ch1_054",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "When a design requires frequent insertions and deletions at the midpoint of a collection, which structure generally offers optimal performance?",
    options: ["LinkedList", "ArrayList", "Vector", "Array"],
    correctAnswer: 0,
    explanation:
      "A LinkedList offers highly efficient insertions and deletions in the middle of a list because it only requires updating localized node pointers.",
  },
  {
    id: "csc302_ch1_055",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "The Map interface strictly stores elements as individual, mathematically unique scalar values.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "The Map interface specifically maps unique keys to values, forming key-value pairs, rather than storing single scalar values like a Set.",
  },
  {
    id: "csc302_ch1_056",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "Which Collection class represents a Set that relies on hash codes and completely lacks any internal sorting or predictable iteration order?",
    options: ["HashSet", "TreeSet", "ArrayList", "LinkedList"],
    correctAnswer: 0,
    explanation:
      "A HashSet prohibits duplicate values but provides no guarantee regarding the iteration order of the elements within.",
  },

  // --- LAMBDA EXPRESSIONS & POLYMORPHISM (CODE) ---
  {
    id: "csc302_ch1_057",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "What is the primary syntactical benefit of implementing lambda expressions in a Java application?",
    options: [
      "They provide a clear and concise way to represent single-method functional interfaces",
      "They automatically manage system memory usage",
      "They replace all forms of classical class inheritance",
      "They accelerate the compiler's parsing phase",
    ],
    correctAnswer: 0,
    explanation:
      "Lambda expressions streamline code by providing a very concise syntax directly for implementing single-method functional interfaces.",
  },
  {
    id: "csc302_ch1_058",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: `Given the following code using a functional interface:

\`\`\`java
interface MathOp {
  int operate(int a, int b);
}
public class Main {
  public static void main(String[] args) {
    MathOp add = (x, y) -> x + y;
    System.out.println(add.operate(5, 3));
  }
}
\`\`\`

What does this code output?`,
    options: ["8", "x + y", "53", "A compiler error"],
    correctAnswer: 0,
    explanation:
      "The lambda expression concisely implements the functional interface by defining the operate method to simply return the arithmetic sum of the parameters.",
  },
  {
    id: "csc302_ch1_059",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "Lambda expressions were officially introduced to the Java language in the release of Java 8.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "Java 8 marked a significant language evolution by introducing lambda expressions to natively support functional programming concepts.",
  },
  {
    id: "csc302_ch1_060",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: `Given the following code illustrating polymorphism:

\`\`\`java
class Animal {
  void sound() { System.out.print("Roar"); }
}
class Dog extends Animal {
  void sound() { System.out.print("Bark"); }
}
public class Main {
  public static void main(String[] args) {
    Animal a = new Dog();
    a.sound();
  }
}
\`\`\`

What is printed to the console?`,
    options: ["Bark", "Roar", "A compiler error", "RoarBark"],
    correctAnswer: 0,
    explanation:
      "Because the object is instantiated as a Dog, the overridden sound() method inside the Dog subclass executes despite the reference variable being of type Animal.",
  },

  // --- STRINGS ---
  {
    id: "csc302_ch1_061",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "In Java, instances of the standard String class are immutable, meaning their character content cannot be changed once created.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "Java Strings are strictly immutable. Any operation that appears to modify a String actually produces a completely new independent String object.",
  },
  {
    id: "csc302_ch1_062",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "When an algorithm requires continuous and frequent modifications to a sequence of characters, which class mitigates excessive object creation?",
    options: ["StringBuilder", "String", "Character", "CharSequence"],
    correctAnswer: 0,
    explanation:
      "StringBuilder provides a mutable sequence of characters, drastically reducing the memory overhead compared to constantly recreating standard Strings.",
  },
  {
    id: "csc302_ch1_063",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: `Given the following code:

\`\`\`java
String word = "Programming";
System.out.println(word.substring(0, 3));
\`\`\`

What is the expected output?`,
    options: ["Pro", "Prog", "ram", "ing"],
    correctAnswer: 0,
    explanation:
      "The `substring(int beginIndex, int endIndex)` method extracts characters starting from beginIndex inclusively up to endIndex exclusively.",
  },
  {
    id: "csc302_ch1_064",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "Which sequence of methods accurately removes trailing whitespace and then determines the length of a String object?",
    options: [
      "text.trim().length()",
      "text.stripSpaces().size()",
      "text.clean().count()",
      'text.replace(" ", "").length()',
    ],
    correctAnswer: 0,
    explanation:
      "The `trim()` method dynamically eliminates leading and trailing whitespace. The `length()` method subsequently counts the characters of the resulting String.",
  },
  {
    id: "csc302_ch1_065",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: `Given the following code:

\`\`\`java
String str = "Hello";
System.out.print(str.charAt(1));
\`\`\`

What single character is printed?`,
    options: ["e", "H", "l", "o"],
    correctAnswer: 0,
    explanation:
      "Strings act like zero-indexed character arrays in this context. The character located at index 1 is 'e'.",
  },
  {
    id: "csc302_ch1_066",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "Which method must be heavily utilized to accurately compare the actual character sequence content of two String objects?",
    options: ["equals()", "compareContent()", "matches()", "=="],
    correctAnswer: 0,
    explanation:
      "The equals() method reliably compares the internal character values of Strings, whereas the == operator dangerously compares memory references.",
  },
  {
    id: "csc302_ch1_067",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: `Given the following code:

\`\`\`java
String greeting = "hi";
greeting.toUpperCase();
System.out.print(greeting);
\`\`\`

What is correctly printed?`,
    options: ["hi", "HI", "Hi", "A compiler error occurs"],
    correctAnswer: 0,
    explanation:
      "Because Strings are absolutely immutable, calling toUpperCase() creates a new String but does not alter the original 'greeting' variable since the result is not reassigned.",
  },

  // --- FILE HANDLING ---
  {
    id: "csc302_ch1_068",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "Which modern Java package is explicitly recommended in the slides as the best practice for new file handling code today?",
    options: [
      "java.nio.file",
      "java.io.streams",
      "java.util.files",
      "java.net.sockets",
    ],
    correctAnswer: 0,
    explanation:
      "The slides state as a strict rule of thumb: If you are writing new code today, use `java.nio.file` unless you have a specific reason to use legacy streams.",
  },
  {
    id: "csc302_ch1_069",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "What modern Java control structure automatically manages the closing of file streams, eliminating the strict need for an explicit finally block?",
    options: [
      "try-with-resources",
      "auto-close blocks",
      "managed-try statements",
      "finally-implied structures",
    ],
    correctAnswer: 0,
    explanation:
      "The try-with-resources statement ensures that every resource declared within its initialization parenthesis is automatically and safely closed.",
  },
  {
    id: "csc302_ch1_070",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "Which input stream class is highly recommended to significantly boost performance when reading bulk text from large files?",
    options: ["BufferedReader", "FileReader", "FileInputStream", "Scanner"],
    correctAnswer: 0,
    explanation:
      "Using BufferedReader elegantly wraps standard file readers with an in-memory buffer, drastically reducing the total number of expensive disk read operations.",
  },
  {
    id: "csc302_ch1_071",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "Which method systematically checks whether a referenced file currently exists on the disk before an application attempts to interact with it?",
    options: [
      "file.exists()",
      "file.isPresent()",
      "file.check()",
      "file.hasData()",
    ],
    correctAnswer: 0,
    explanation:
      "The `exists()` method of the File class accurately queries the file system to verify if the file pointed to by the object is physically present.",
  },
  {
    id: "csc302_ch1_072",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "According to the best practices slide, it is optional to close resources like FileReaders if you are only safely reading data.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "The best practices slide explicitly dictates that developers must 'Always close resources or use try-with-resources' to strictly prevent memory and file lock leaks.",
  },
  {
    id: "csc302_ch1_073",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "Which specific method of the java.io.File class is systematically called to physically generate a new, empty file on the hard drive?",
    options: ["createNewFile()", "makeFile()", "generate()", "buildFile()"],
    correctAnswer: 0,
    explanation:
      "The createNewFile() method atomically creates a new, empty file if and only if a file with this name does not yet exist.",
  },
  {
    id: "csc302_ch1_074",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "The delete() method permanently removes the file or directory referenced by the associated File object from the file system.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "Calling delete() on a valid File object systematically removes it from the file system. If the object is a directory, it must be empty.",
  },
  {
    id: "csc302_ch1_075",
    course: "CSC 302",
    chapter: "Chapter 1",
    text: "Which type of stream is strictly utilized by standard Java classes to perform raw byte-level input operations?",
    options: ["FileInputStream", "FileReader", "StringReader", "ByteScanner"],
    correctAnswer: 0,
    explanation:
      "FileInputStream securely reads raw bytes from a file, whereas FileReader reads streams of human-readable characters.",
  },
];

export default csc302Module1;
