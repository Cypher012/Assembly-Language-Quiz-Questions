import { QuestionV2 } from "@/lib/quiz-types";

const csc302Chapter1Questions: QuestionV2[] = [
  {
    id: "csc302_ch_1_1_001",
    course: "CSC 302",
    chapter: "Chapter 1.1",
    text: "Which company originally developed Java, and in what year was it released?",
    options: [
      "Sun Microsystems, the original developer of Java in 1995",
      "Oracle Corporation, the original developer of Java in 1995",
      "Sun Microsystems, the original developer of Java in 1991",
      "Oracle Corporation, the company that acquired Java in 1995"
    ],
    correctAnswer: 0,
    explanation: "The Introduction section states that Java was developed by Sun Microsystems in 1995 and later acquired by Oracle Corporation in 2010.\n\nAttributing original development to Oracle Corporation reverses the roles, since Oracle was the later acquirer, not the original developer.\n\nThe claim that Sun released Java in 1991 misstates the year the source gives, which is 1995.\n\nThe claim that Oracle acquired Java in 1995 misstates the acquisition year, which the source places in 2010, well after Java's 1995 release."
  },
  {
    id: "csc302_ch_1_1_002",
    course: "CSC 302",
    chapter: "Chapter 1.1",
    text: "What does Java's platform independence mean?",
    options: [
      "Java programs are compiled into bytecode that can run on any device with a JVM",
      "Java source code can be compiled directly into native machine code for any operating system without a JVM",
      "Java programs automatically translate themselves into other programming languages at runtime",
      "Java requires a separate compiler to be written for every operating system it targets"
    ],
    correctAnswer: 0,
    explanation: "The Key Features of Java section describes Platform Independence as Java programs being compiled into bytecode that runs on any device with a JVM.\n\nCompiling directly to native machine code without a JVM contradicts this, since the JVM is exactly what makes the bytecode portable.\n\nJava does not translate programs into other programming languages; it compiles to bytecode, a single intermediate form.\n\nNeeding a separate compiler per operating system is the opposite of platform independence, which the source presents as avoiding that need."
  },
  {
    id: "csc302_ch_1_1_003",
    course: "CSC 302",
    chapter: "Chapter 1.1",
    text: "What is the basis of Java's object-oriented feature?",
    options: [
      "Everything in Java is based on objects and classes",
      "Java programs directly manipulate memory using raw pointers",
      "Java programs are organized entirely around standalone functions with no grouping structure",
      "Java enforces that only one class may exist per compiled program"
    ],
    correctAnswer: 0,
    explanation: "The Key Features of Java section states that the Object-Oriented feature means everything in Java is based on objects and classes.\n\nDirect manipulation of memory with pointers is explicitly excluded, since the Simple and Familiar Syntax feature notes Java avoids complex features like pointers.\n\nOrganizing entirely around standalone functions describes a procedural style, which contradicts the object and class basis the source describes.\n\nThe source does not limit a program to one class overall; the one-public-class rule applies to matching the filename, not to a total class count."
  },
  {
    id: "csc302_ch_1_1_004",
    course: "CSC 302",
    chapter: "Chapter 1.1",
    text: "Which statement best describes Java's syntax compared to C and C++?",
    options: [
      "Simple and familiar syntax, similar to C/C++ without pointers",
      "Completely unrelated to C/C++, using a syntax borrowed from scripting languages instead",
      "Identical to C/C++ in every respect, including full manual pointer arithmetic",
      "More complex than C/C++ because it adds mandatory low-level memory management syntax"
    ],
    correctAnswer: 0,
    explanation: "The Key Features of Java section describes the Simple and Familiar Syntax feature as similar to C/C++ but without complex features like pointers.\n\nCalling Java's syntax completely unrelated to C/C++ contradicts the source's own comparison, which draws the similarity directly.\n\nCalling the syntax identical, including full pointer arithmetic, contradicts the same feature, which specifically excludes pointers.\n\nDescribing Java as more complex due to mandatory low-level memory syntax contradicts the Robust feature, which credits Java with strong memory management handled for the programmer."
  },
  {
    id: "csc302_ch_1_1_005",
    course: "CSC 302",
    chapter: "Chapter 1.1",
    text: "Java's Secure feature includes bytecode verification as one of its safeguards.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "The Key Features of Java section lists Secure as built-in security features like bytecode verification and runtime checks, so bytecode verification being one of Java's safeguards is confirmed by the source."
  },
  {
    id: "csc302_ch_1_1_006",
    course: "CSC 302",
    chapter: "Chapter 1.1",
    text: "What does Java's robustness refer to?",
    options: [
      "The ability to compile once and run identical bytecode on any device",
      "Built-in bytecode verification along with several runtime checks for program security",
      "Strong memory management along with robust structured exception handling",
      "Support for concurrent execution of multiple threads"
    ],
    correctAnswer: 2,
    explanation: "The Key Features of Java section defines Robust as strong memory management and exception handling.\n\nRunning identical bytecode on any device describes the Platform Independence feature, not Robustness.\n\nBytecode verification and runtime checks describe the Secure feature, a separate item in the same list.\n\nSupport for concurrent thread execution describes the Multithreaded feature, again a distinct item from Robustness."
  },
  {
    id: "csc302_ch_1_1_007",
    course: "CSC 302",
    chapter: "Chapter 1.1",
    text: "What capability does Java's multithreaded feature provide?",
    options: [
      "It allows a program to run multiple threads at once",
      "It allows identical bytecode to run unchanged on any device that has a JVM installed",
      "It allows a program to verify its bytecode for safety before any of it executes",
      "It allows a program to manage its memory automatically through automatic garbage collection routines"
    ],
    correctAnswer: 0,
    explanation: "The Key Features of Java section defines Multithreaded as support for concurrent execution of multiple threads.\n\nRunning identical bytecode on any device describes Platform Independence, a different feature in the same list.\n\nVerifying bytecode before execution describes the Secure feature, not Multithreaded.\n\nAutomatic memory management through garbage collection is described under the Java Virtual Machine section, not the Multithreaded feature."
  },
  {
    id: "csc302_ch_1_1_008",
    course: "CSC 302",
    chapter: "Chapter 1.1",
    text: "What are the three main components that make up the Java platform?",
    options: [
      "The Java programming language, the Java Virtual Machine, and the complete Java Application Programming Interface",
      "The Java Virtual Machine, the Java Application Programming Interface, and the Java Class Loader",
      "The Java Standard Edition, the Java Enterprise Edition, and the Java Micro Edition",
      "The Class Loader, the Bytecode Verifier, and the Interpreter or JIT Compiler"
    ],
    correctAnswer: 0,
    explanation: "The Java Platform Components section lists the three main parts as the Java Programming Language, the Java Virtual Machine, and the Java Application Programming Interface.\n\nReplacing the programming language with the Class Loader mixes in a JVM Architecture stage rather than one of the three platform components.\n\nThe Java Editions are JSE, JEE, and JME, which are variants of the platform, not the three components that make it up.\n\nThe Class Loader, Bytecode Verifier, and Interpreter/JIT Compiler are stages inside the JVM Architecture, not the three main parts of the Java platform itself."
  },
  {
    id: "csc302_ch_1_1_009",
    course: "CSC 302",
    chapter: "Chapter 1.1",
    text: "What role does the Java Virtual Machine play in Java's platform independence?",
    options: [
      "It is the runtime engine that executes bytecode on any device, making write once run anywhere possible",
      "It is the compiler that translates Java source code directly into a specific operating system's native machine code",
      "It is the development tool used to write and edit Java source files before compilation",
      "It is the archive format used to package compiled Java classes for distribution"
    ],
    correctAnswer: 0,
    explanation: "The Java Virtual Machine section describes the JVM as the heart of Java's platform independence, executing bytecode and enabling Write Once, Run Anywhere.\n\nTranslating source code directly into a specific operating system's native code describes an ahead-of-time native compiler, not the JVM, which instead runs portable bytecode.\n\nA tool for writing and editing source files describes an IDE, a separate item covered under Popular IDEs.\n\nThe source never describes the JVM as a packaging or archive format; its listed roles are executing bytecode, providing a runtime, and managing memory."
  },
  {
    id: "csc302_ch_1_1_010",
    course: "CSC 302",
    chapter: "Chapter 1.1",
    text: "Which of the following are responsibilities of the Java Virtual Machine?",
    options: [
      "Executing Java bytecode",
      "Providing a runtime environment for running programs",
      "All of these",
      "None of these"
    ],
    correctAnswer: 2,
    explanation: "The Java Virtual Machine section lists executing Java bytecode as one of the JVM's stated roles, so that option is supported.\n\nThe same section also lists providing a runtime environment as another stated role, so that option is supported as well.\n\nSince both listed responsibilities are confirmed by the section, the correct verdict is that all of these are responsibilities of the JVM."
  },
  {
    id: "csc302_ch_1_1_011",
    course: "CSC 302",
    chapter: "Chapter 1.1",
    text: "How does the JVM handle memory management in a Java program?",
    options: [
      "Through garbage collection, which the JVM performs automatically",
      "Through manual allocation and deallocation calls that the programmer must write for every object",
      "Through the bytecode verifier, which frees memory as it checks each class file",
      "Through the class loader, which reclaims memory whenever a new class is loaded"
    ],
    correctAnswer: 0,
    explanation: "The Java Virtual Machine section states that the JVM handles memory management through garbage collection.\n\nManual allocation and deallocation calls describe a style used in languages without automatic memory management, which the source does not attribute to Java.\n\nThe bytecode verifier's role in the JVM Architecture is checking bytecode validity, not freeing memory.\n\nThe class loader's role is loading classes into the JVM, not reclaiming memory."
  },
  {
    id: "csc302_ch_1_1_012",
    course: "CSC 302",
    chapter: "Chapter 1.1",
    text: "What is the correct order of stages in the JVM architecture?",
    options: [
      "Bytecode Verifier, then Class Loader, then Runtime, then Interpreter/JIT Compiler",
      "Class Loader, then Bytecode Verifier, then Interpreter/JIT Compiler, then Runtime",
      "Runtime, then Class Loader, then Bytecode Verifier, then Interpreter/JIT Compiler",
      "Class Loader, then Interpreter/JIT Compiler, then Bytecode Verifier, then Runtime"
    ],
    correctAnswer: 1,
    explanation: "The JVM Architecture diagram in the Java Virtual Machine section orders the stages as Class Loader, then Bytecode Verifier, then Interpreter/JIT Compiler, then Runtime.\n\nPlacing the Bytecode Verifier before the Class Loader reverses the first two stages shown in the diagram.\n\nStarting with Runtime places the final stage first, which does not match the diagram's left-to-right order.\n\nSwapping the Interpreter/JIT Compiler and Bytecode Verifier reverses the middle two stages shown in the diagram."
  },
  {
    id: "csc302_ch_1_1_013",
    course: "CSC 302",
    chapter: "Chapter 1.1",
    text: "The Java Enterprise Edition (JEE) is designed for mobile and embedded devices.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "The Java Editions section states that JEE is for large-scale enterprise applications, while JME, the Java Micro Edition, is the one described as being for mobile and embedded devices, so the claim swaps the two editions and is false."
  },
  {
    id: "csc302_ch_1_1_014",
    course: "CSC 302",
    chapter: "Chapter 1.1",
    text: "What is the Java Standard Edition (JSE)?",
    options: [
      "The core language edition used for building desktop applications",
      "The edition designed for large-scale enterprise applications",
      "The edition designed for mobile and embedded devices",
      "The edition that packages only the JVM without any core language features"
    ],
    correctAnswer: 0,
    explanation: "The Java Editions section describes JSE as the core language for desktop applications.\n\nLarge-scale enterprise applications describe JEE, a separate edition in the same list.\n\nMobile and embedded devices describe JME, another separate edition in the same list.\n\nThe source never describes any edition as packaging only the JVM without core language features; JSE is described as the core language itself."
  },
  {
    id: "csc302_ch_1_1_015",
    course: "CSC 302",
    chapter: "Chapter 1.1",
    text: "Which Java edition is intended for mobile and embedded devices?",
    options: [
      "JSE, the Java Standard Edition",
      "JEE, the Java Enterprise Edition",
      "JME, the Java Micro Edition",
      "JVM, the Java Virtual Machine"
    ],
    correctAnswer: 2,
    explanation: "The Java Editions section states that JME, the Java Micro Edition, is for mobile and embedded devices.\n\nJSE is described in the same section as the core language for desktop applications, not mobile or embedded devices.\n\nJEE is described as being for large-scale enterprise applications, a different scope entirely.\n\nThe JVM is not one of the three editions; it is the runtime component described separately in the Java Virtual Machine section."
  },
  {
    id: "csc302_ch_1_1_016",
    course: "CSC 302",
    chapter: "Chapter 1.1",
    text: "In the recommended steps for setting up a Java development environment, what comes immediately after installing the JDK?",
    options: [
      "Setting the JAVA_HOME environment variable",
      "Downloading the JDK from Oracle or Adoptium",
      "Adding the JDK bin directory to PATH",
      "Verifying the installation with java -version and javac -version"
    ],
    correctAnswer: 0,
    explanation: "The Installing JDK section lists the steps in order as downloading, installing, setting JAVA_HOME, adding the bin directory to PATH, and verifying, so setting JAVA_HOME is the step listed right after installing the JDK.\n\nDownloading the JDK is listed as the first step, which comes before installing rather than after it.\n\nAdding the bin directory to PATH is listed as the step after setting JAVA_HOME, not immediately after installing.\n\nVerifying the installation is listed as the final step, after PATH has already been configured."
  },
  {
    id: "csc302_ch_1_1_017",
    course: "CSC 302",
    chapter: "Chapter 1.1",
    text: "Which Java IDE is described as being great for beginners?",
    options: [
      "BlueJ",
      "IntelliJ IDEA",
      "Eclipse",
      "NetBeans"
    ],
    correctAnswer: 0,
    explanation: "The Popular IDEs section describes BlueJ as great for beginners.\n\nIntelliJ IDEA is instead described in the same list as the most popular IDE, not specifically as a beginner tool.\n\nEclipse appears in the list without the beginner-focused description attached to BlueJ.\n\nNetBeans likewise appears in the list without any beginner-focused description."
  },
  {
    id: "csc302_ch_1_1_018",
    course: "CSC 302",
    chapter: "Chapter 1.1",
    text: "In the Csc302 example program, what is the purpose of the line System.out.println(...)?",
    options: [
      "To print output to the console",
      "To declare the program's public class",
      "To mark the entry point where program execution begins",
      "To import a required library before compilation"
    ],
    correctAnswer: 0,
    explanation: "The Understanding the CSC302 Welcome Code section states that System.out.println() is used to print to the console.\n\nDeclaring the program's public class is the role of the public class Csc302 line, a different part of the same code example.\n\nMarking the entry point is the role of public static void main(String[] args), listed separately in the same section.\n\nThe source shows no import statement in the Csc302 example; the program only declares a class, a main method, and print statements."
  },
  {
    id: "csc302_ch_1_1_019",
    course: "CSC 302",
    chapter: "Chapter 1.1",
    text: "After saving the Csc302 program as Csc302.java, what are the correct commands to compile and then run it?",
    options: [
      "java Csc302.java to compile, then javac Csc302 to run",
      "javac Csc302.java to compile, then java Csc302 to run",
      "javac Csc302 to compile, then java Csc302.java to run",
      "java -version to compile, then javac -version to run"
    ],
    correctAnswer: 1,
    explanation: "The Compiling and Running section shows javac Csc302.java used to compile the file, followed by java Csc302 used to run it.\n\nSwapping java and javac reverses which command compiles and which command runs the program.\n\nUsing javac without the .java extension and java with it reverses the file-extension convention shown in the source.\n\njava -version and javac -version are the verification commands from the Installing JDK section, not the compile and run commands for this program."
  },
  {
    id: "csc302_ch_1_1_020",
    course: "CSC 302",
    chapter: "Chapter 1.1",
    text: "Which Java data type is used in the declaration int age = 25;?",
    options: [
      "int, for storing an integer value",
      "double, for storing a floating point value",
      "char, for storing a single character",
      "boolean, for storing a true or false value"
    ],
    correctAnswer: 0,
    explanation: "The Data Types in Java section comments int age = 25; as an integer, so int is the type used here.\n\ndouble is the type used for salary, a floating point value, in the same example, not for age.\n\nchar is the type used for grade, a single character, not for age.\n\nboolean is the type used for isStudent, a true or false value, not for age."
  },
  {
    id: "csc302_ch_1_1_021",
    course: "CSC 302",
    chapter: "Chapter 1.1",
    text: "Which Java data type is used in the declaration double salary = 45000.50;?",
    options: [
      "double, for storing a floating point value",
      "int, for storing an integer value",
      "String, for storing a sequence of characters as an object",
      "char, for storing a single character"
    ],
    correctAnswer: 0,
    explanation: "The Data Types in Java section comments double salary = 45000.50; as a floating point value, so double is the type used here.\n\nint is the type used for age, an integer, not for salary.\n\nString is the type used for name, a sequence of characters treated as an object, not for salary.\n\nchar is the type used for grade, a single character, not for salary."
  },
  {
    id: "csc302_ch_1_1_022",
    course: "CSC 302",
    chapter: "Chapter 1.1",
    text: "Which Java data type is used in the declaration char grade = 'A';?",
    options: [
      "char, for storing a single character",
      "String, for storing a sequence of characters as an object",
      "boolean, for storing a true or false value",
      "int, for storing an integer value"
    ],
    correctAnswer: 0,
    explanation: "The Data Types in Java section comments char grade = 'A'; as a single character, so char is the type used here.\n\nString is the type used for name, a sequence of characters as an object, which is a different type from a single character.\n\nboolean is the type used for isStudent, a true or false value, not for grade.\n\nint is the type used for age, an integer, not for grade."
  },
  {
    id: "csc302_ch_1_1_023",
    course: "CSC 302",
    chapter: "Chapter 1.1",
    text: "In Java, the declaration boolean isStudent = true; stores a single character value.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "The Data Types in Java section comments boolean isStudent = true; as storing true or false, not a single character. Storing a single character is instead the role of the char type shown in the same example, so the claim is false."
  },
  {
    id: "csc302_ch_1_1_024",
    course: "CSC 302",
    chapter: "Chapter 1.1",
    text: "Which Java data type is used in the declaration String name = \"Isaac\";, and what kind of type is it?",
    options: [
      "String, which is an object type rather than a primitive",
      "char, which is a primitive type for a single character",
      "int, which is a primitive type for whole numbers",
      "boolean, which is a primitive type for true or false values"
    ],
    correctAnswer: 0,
    explanation: "The Data Types in Java section comments String name = \"Isaac\"; as a String, and labels it an object, so String is both the type and its category here.\n\nchar is a separate primitive type used for grade, a single character, not for name.\n\nint is a separate primitive type used for age, whole numbers, not for name.\n\nboolean is a separate primitive type used for isStudent, true or false values, not for name."
  },
  {
    id: "csc302_ch_1_1_025",
    course: "CSC 302",
    chapter: "Chapter 1.1",
    text: "Given the declaration int count = 10; followed later by the statement count = 20;, what happens in Java?",
    options: [
      "The reassignment is allowed because count is a regular variable, not a constant",
      "The reassignment fails to compile because count was already assigned a value",
      "The reassignment is allowed only if count is declared as final",
      "The reassignment silently creates a second variable also named count"
    ],
    correctAnswer: 0,
    explanation: "The Variables and Constants section shows count = 20; commented as allowed, since count is declared as a plain variable rather than a constant.\n\nThe reassignment does not fail to compile; the source's own comment marks it as allowed.\n\nThe source shows the opposite relationship: the final PI = 3.14; line is the one that would cause an error, not a non-final variable like count.\n\nJava does not allow two variables with the same name in the same scope, and the source shows a single count variable being updated, not a new one created."
  },
  {
    id: "csc302_ch_1_1_026",
    course: "CSC 302",
    chapter: "Chapter 1.1",
    text: "Given the declaration final double PI = 3.14159;, what happens if the program later attempts PI = 3.14;?",
    options: [
      "It fails to compile because a final variable cannot be reassigned",
      "It compiles and silently updates PI to the new value",
      "It compiles but prints a runtime warning before continuing",
      "It fails to compile because double variables can never be reassigned"
    ],
    correctAnswer: 0,
    explanation: "The Variables and Constants section comments the line PI = 3.14; as an error because you cannot assign to a final variable.\n\nThe assignment does not compile or update PI, since the source marks it as an error rather than a silent success.\n\nThe source describes a compile-time error, not a runtime warning that lets execution continue.\n\nThe restriction comes from the final keyword, not from the double type itself, since the source's own count variable shows an ordinary int being reassigned without issue."
  },
  {
    id: "csc302_ch_1_1_027",
    course: "CSC 302",
    chapter: "Chapter 1.1",
    text: "What does the expression \"Age: \" + age produce when age is an int variable holding 25?",
    options: [
      "The String \"Age: 25\", formed by concatenating the text with the integer's value",
      "A compile error, because a String cannot be combined with an int using +",
      "The integer 25 alone, with the text portion discarded",
      "The String \"Age: \" alone, with the numeric value discarded"
    ],
    correctAnswer: 0,
    explanation: "The Data Types in Java section prints \"Age: \" + age using the + operator to concatenate the text with the value of age, producing a combined String.\n\nThis does not cause a compile error; the same section uses this exact pattern for both name and age without issue.\n\nThe result is not the integer alone, since the + operator here performs String concatenation rather than arithmetic, keeping the text portion.\n\nThe result is not the text alone either, since concatenation keeps both the text and the value of age together."
  },
  {
    id: "csc302_ch_1_1_028",
    course: "CSC 302",
    chapter: "Chapter 1.1",
    text: "Which six categories of operators does Java support?",
    options: [
      "Arithmetic, assignment, comparison, logical, membership, and identity",
      "Arithmetic, assignment, comparison, logical, bitwise, and unary",
      "Arithmetic, comparison, logical, bitwise, unary, and inheritance",
      "Assignment, comparison, logical, bitwise, unary, and casting"
    ],
    correctAnswer: 1,
    explanation: "The Operators in Java overview lists arithmetic, assignment, comparison, logical, bitwise, and unary as the six operator categories.\n\nMembership and identity are described in the same overview as concepts Java does not have direct operators for, not as two of the six categories.\n\nInheritance is not an operator category at all; it belongs to object-oriented structure, not to this list.\n\nCasting is likewise not listed as one of the six operator categories in the overview."
  },
  {
    id: "csc302_ch_1_1_029",
    course: "CSC 302",
    chapter: "Chapter 1.1",
    text: "Given int a = 20; int b = 7;, what does System.out.println(a + b); print?",
    options: ["13", "140", "27", "2"],
    correctAnswer: 2,
    explanation: "The Arithmetic Operators section adds a and b, where 20 plus 7 equals 27.\n\n13 is the result of a minus b, a separate line in the same example.\n\n140 is the result of a times b, another separate line in the same example.\n\n2 is the result of integer division, a plus b using division rather than addition."
  },
  {
    id: "csc302_ch_1_1_030",
    course: "CSC 302",
    chapter: "Chapter 1.1",
    text: "Given int a = 20; int b = 7;, which of the following describes an arithmetic operation between a and b?",
    options: [
      "a / b evaluates to 3, using integer division",
      "a % b evaluates to 0, the remainder of the division",
      "All of these",
      "None of these"
    ],
    correctAnswer: 3,
    explanation: "The Arithmetic Operators section's a / b uses integer division, and 20 divided by 7 truncates to 2, not 3, so this option is contradicted.\n\nThe same section's a % b gives the remainder of that division, and 20 minus 14 (7 times 2) leaves 6, not 0, so this option is also contradicted.\n\nSince neither specific value is correct, the accurate verdict is that none of these describe the operation correctly."
  },
  {
    id: "csc302_ch_1_1_031",
    course: "CSC 302",
    chapter: "Chapter 1.1",
    text: "Given int a = 20; int b = 7;, what does (a * b) evaluate to?",
    options: ["27", "13", "140", "6"],
    correctAnswer: 2,
    explanation: "The Arithmetic Operators section multiplies a and b, where 20 times 7 equals 140.\n\n27 is the result of a plus b, a separate line in the same example.\n\n13 is the result of a minus b, another separate line in the same example.\n\n6 is the result of a modulo b, the remainder operation in the same example."
  },
  {
    id: "csc302_ch_1_1_032",
    course: "CSC 302",
    chapter: "Chapter 1.1",
    text: "Given int x = 10; followed by x += 5;, what is the value of x afterward, and which basic operator does += correspond to?",
    options: [
      "15, equivalent to x = x * 5",
      "50, equivalent to x = x * 5",
      "15, equivalent to x = x + 5",
      "5, equivalent to x = x - 5"
    ],
    correctAnswer: 2,
    explanation: "The Assignment Operators section comments x += 5; as the same as x = x + 5, and 10 plus 5 equals 15.\n\nThe value 15 is correct, but the same section identifies += with addition, not multiplication.\n\n50 would result from treating += as multiplication, which the source's own comment rules out.\n\n5 is not the resulting value of x, and += is defined in the source as addition, not subtraction."
  },
  {
    id: "csc302_ch_1_1_033",
    course: "CSC 302",
    chapter: "Chapter 1.1",
    text: "Continuing from x = 15 after x += 5;, what is the value of x after x -= 3; followed by x *= 2; are executed in sequence?",
    options: ["12", "22", "24", "26"],
    correctAnswer: 2,
    explanation: "The Assignment Operators section applies x -= 3; to bring x from 15 to 12, then x *= 2; to bring x from 12 to 24.\n\n12 is the intermediate value after x -= 3; alone, before x *= 2; is applied.\n\n22 does not match either the subtraction or the doubling step shown in the source's sequence.\n\n26 likewise does not match the source's sequence of subtracting 3 and then doubling the result."
  },
  {
    id: "csc302_ch_1_1_034",
    course: "CSC 302",
    chapter: "Chapter 1.1",
    text: "In Java, given int x = 24; the statement x /= 4; assigns the value 6 to x.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "The Assignment Operators section comments x /= 4; as the same as x = x / 4, and in the section's own running example x reaches 24 before this step, with 24 divided by 4 equaling 6, so the claim is true."
  },
  {
    id: "csc302_ch_1_1_035",
    course: "CSC 302",
    chapter: "Chapter 1.1",
    text: "Given int a = 10; int b = 20;, what does System.out.println(a == b); print?",
    options: ["true", "10", "false", "20"],
    correctAnswer: 2,
    explanation: "The Comparison (Relational) Operators section compares a and b with ==, and since 10 does not equal 20, this prints false.\n\ntrue is the result of a != b in the same example, not a == b.\n\n10 and 20 are the values of a and b themselves, not the boolean result of comparing them with ==.\n\n20 is likewise just the value of b, not the result of the equality comparison."
  },
  {
    id: "csc302_ch_1_1_036",
    course: "CSC 302",
    chapter: "Chapter 1.1",
    text: "Given int a = 10; int b = 20;, which comparison evaluates to true?",
    options: ["a > b", "a >= b", "a < b", "a == b"],
    correctAnswer: 2,
    explanation: "The Comparison (Relational) Operators section shows a < b evaluating to true, since 10 is less than 20.\n\na > b evaluates to false in the same section, since 10 is not greater than 20.\n\na >= b also evaluates to false, since 10 is not greater than or equal to 20.\n\na == b evaluates to false as well, since 10 does not equal 20."
  },
  {
    id: "csc302_ch_1_1_037",
    course: "CSC 302",
    chapter: "Chapter 1.1",
    text: "Given int a = 10; int b = 20;, which of the following describes a comparison between a and b?",
    options: [
      "a < b evaluates to true",
      "a > b evaluates to true",
      "All of these",
      "None of these"
    ],
    correctAnswer: 0,
    explanation: "The Comparison (Relational) Operators section shows a < b evaluating to true, since 10 is less than 20, so this option is supported.\n\nThe same section shows a > b evaluating to false, since 10 is not greater than 20, so this option is contradicted.\n\nSince only the first comparison is supported and the second is contradicted, the correct verdict is that a < b evaluating to true is the accurate description, not both and not neither."
  },
  {
    id: "csc302_ch_1_1_038",
    course: "CSC 302",
    chapter: "Chapter 1.1",
    text: "Given int a = 20; int b = 7;, what does (a / b) evaluate to in Java?",
    options: [
      "2, because integer division truncates the decimal portion",
      "2.857, because division always keeps the decimal portion",
      "3, because Java rounds integer division to the nearest whole number",
      "6, the remainder rather than the quotient"
    ],
    correctAnswer: 0,
    explanation: "The Arithmetic Operators section divides a and b using int operands, and Java's integer division truncates 20 divided by 7 to 2.\n\n2.857 would only occur with floating point division, but a and b are declared as int, so the decimal portion is truncated, not kept.\n\nJava's integer division truncates rather than rounds, so 3 is not the result.\n\n6 is the result of a % b, the remainder operation, not a / b."
  },
  {
    id: "csc302_ch_1_1_039",
    course: "CSC 302",
    chapter: "Chapter 1.1",
    text: "Given int a = 20; int b = 7;, what does (a % b) evaluate to?",
    options: [
      "6, the remainder left after dividing a by b",
      "2, the quotient of dividing a by b",
      "0, since 7 divides evenly into 20",
      "13, the difference between a and b"
    ],
    correctAnswer: 0,
    explanation: "The Arithmetic Operators section computes a % b as the remainder, and 20 divided by 7 leaves a remainder of 6.\n\n2 is the quotient produced by a / b, a separate operation in the same example.\n\n7 does not divide evenly into 20, since 7 times 2 is 14 with 6 left over, so the remainder is not 0.\n\n13 is the result of a - b, a different arithmetic line in the same example."
  },
  {
    id: "csc302_ch_1_1_040",
    course: "CSC 302",
    chapter: "Chapter 1.1",
    text: "Given int a = 10; int b = 20;, what does System.out.println(a >= b); print?",
    options: ["true", "10", "20", "false"],
    correctAnswer: 3,
    explanation: "The Comparison (Relational) Operators section compares a and b with >=, and since 10 is not greater than or equal to 20, this prints false.\n\ntrue is the result of a <= b in the same example, not a >= b.\n\n10 is just the value of a, not the boolean result of the comparison.\n\n20 is just the value of b, not the boolean result of the comparison."
  },
  {
    id: "csc302_ch_1_1_041",
    course: "CSC 302",
    chapter: "Chapter 1.1",
    text: "Given int age = 25; boolean isStudent = true;, which of the following describes the logical operators example?",
    options: [
      "age >= 18 && isStudent evaluates to false, so the eligibility message does not print",
      "age < 18 || isStudent evaluates to true, so the benefits message prints",
      "All of these",
      "None of these"
    ],
    correctAnswer: 1,
    explanation: "The Logical Operators section shows age >= 18 && isStudent evaluating to true, since both age >= 18 and isStudent hold, so the eligibility message does print, which contradicts the claim that it does not.\n\nThe same section shows age < 18 || isStudent evaluating to true, since isStudent is true even though age < 18 is false, so the benefits message does print, confirming that claim.\n\nSince the && claim is contradicted and the || claim is confirmed, the benefits-message claim about age < 18 || isStudent is the accurate verdict rather than all or none of the statements."
  },
  {
    id: "csc302_ch_1_1_042",
    course: "CSC 302",
    chapter: "Chapter 1.1",
    text: "Given int age = 25; boolean isStudent = true;, what does the condition (age >= 18 && isStudent) evaluate to?",
    options: [
      "true, because both conditions are true",
      "false, because both conditions must be false for && to succeed",
      "true, because only one of the two conditions needs to be true",
      "false, because age is not less than 18"
    ],
    correctAnswer: 0,
    explanation: "The Logical Operators section notes that && requires both conditions to be true, and since age >= 18 and isStudent are both true, the expression evaluates to true.\n\nThe section defines && as requiring both conditions true, not both false, so this reasoning is backward.\n\nRequiring only one condition true describes ||, a different operator covered in the same section.\n\nage being 25 does not make age < 18 relevant here, since the condition being evaluated is age >= 18, which age satisfies."
  },
  {
    id: "csc302_ch_1_1_043",
    course: "CSC 302",
    chapter: "Chapter 1.1",
    text: "Given int age = 25; boolean isStudent = true;, what does the condition (age < 18 || isStudent) evaluate to?",
    options: [
      "true, because isStudent is true even though age < 18 is false",
      "false, because age < 18 is false",
      "true, because both conditions are false",
      "false, because at least one condition must be false for || to succeed"
    ],
    correctAnswer: 0,
    explanation: "The Logical Operators section notes that || requires at least one condition to be true, and while age < 18 is false, isStudent is true, so the expression evaluates to true.\n\nThe expression does not evaluate to false, since || only needs one true condition and isStudent supplies it.\n\nBoth conditions are not false, since isStudent is true, only age < 18 is false.\n\nThe section defines || as needing at least one condition true, not requiring one to be false, so this reasoning misstates the rule."
  },
  {
    id: "csc302_ch_1_1_044",
    course: "CSC 302",
    chapter: "Chapter 1.1",
    text: "Given boolean isStudent = true;, what does !isStudent evaluate to?",
    options: ["true", "1", "0", "false"],
    correctAnswer: 3,
    explanation: "The Logical Operators section prints !isStudent as \"Is not student: false\", since the NOT operator inverts true to false.\n\ntrue would be the result of !isStudent only if isStudent were false, but the source declares it as true.\n\nJava's logical NOT produces a boolean, not the numeric value 1, so 1 is not the result.\n\nJava's logical NOT produces a boolean, not the numeric value 0, so 0 is not the result either."
  },
  {
    id: "csc302_ch_1_1_045",
    course: "CSC 302",
    chapter: "Chapter 1.1",
    text: "Given int a = 5; int b = 3; (binary 0101 and 0011), what does (a & b) evaluate to?",
    options: [
      "1, from the binary AND result 0001",
      "7, from the binary OR result 0111",
      "6, from the binary XOR result 0110",
      "10, from shifting a left by one bit"
    ],
    correctAnswer: 0,
    explanation: "The Bitwise Operators section computes a & b as 0001, which equals 1.\n\n7 is the result of a | b, a separate bitwise operation in the same example.\n\n6 is the result of a ^ b, another separate operation in the same example.\n\n10 is the result of a << 1, the left shift operation in the same example."
  },
  {
    id: "csc302_ch_1_1_046",
    course: "CSC 302",
    chapter: "Chapter 1.1",
    text: "Given int a = 5; int b = 3; (binary 0101 and 0011), what does (a | b) evaluate to?",
    options: [
      "7, from the binary OR result 0111",
      "1, from the binary AND result 0001",
      "6, from the binary XOR result 0110",
      "3, the value of b alone"
    ],
    correctAnswer: 0,
    explanation: "The Bitwise Operators section computes a | b as 0111, which equals 7.\n\n1 is the result of a & b, a separate bitwise operation in the same example.\n\n6 is the result of a ^ b, another separate operation in the same example.\n\n3 is just the value of b itself, not the result of combining it with a using OR."
  },
  {
    id: "csc302_ch_1_1_047",
    course: "CSC 302",
    chapter: "Chapter 1.1",
    text: "Given int a = 5; int b = 3; (binary 0101 and 0011), what does (a ^ b) evaluate to?",
    options: [
      "6, from the binary XOR result 0110",
      "1, from the binary AND result 0001",
      "7, from the binary OR result 0111",
      "5, the value of a alone"
    ],
    correctAnswer: 0,
    explanation: "The Bitwise Operators section computes a ^ b as 0110, which equals 6.\n\n1 is the result of a & b, a separate bitwise operation in the same example.\n\n7 is the result of a | b, another separate operation in the same example.\n\n5 is just the value of a itself, not the result of combining it with b using XOR."
  },
  {
    id: "csc302_ch_1_1_048",
    course: "CSC 302",
    chapter: "Chapter 1.1",
    text: "Given int a = 5; (binary 0101), what does (a << 1) evaluate to?",
    options: [
      "10, since a left shift by one bit multiplies the value by 2",
      "1, since a left shift by one bit divides the value by 5",
      "2, since a left shift by one bit divides the value by 2",
      "6, the result of a bitwise XOR with 3"
    ],
    correctAnswer: 0,
    explanation: "The Bitwise Operators section shows a << 1 producing 10, with the comment that a left shift by one bit multiplies the value by 2.\n\nA left shift does not divide the value, so describing it as dividing by 5 misstates the operation the source describes.\n\nA left shift does not divide the value either, so describing it as dividing by 2 also misstates the operation.\n\n6 is the result of a ^ b from a different line in the same section, not the left shift result."
  },
  {
    id: "csc302_ch_1_1_049",
    course: "CSC 302",
    chapter: "Chapter 1.1",
    text: "In Java, what is the difference between using == and .equals() to compare two objects?",
    options: [
      "== checks whether both references point to the same object, while .equals() checks whether the two objects have the same content",
      "== checks the objects' content, while .equals() checks whether they are the same reference",
      "Both == and .equals() always check reference equality for every type in Java",
      "Both == and .equals() always check content equality for every type in Java"
    ],
    correctAnswer: 0,
    explanation: "The Identity and Membership Operators section states that a == b checks reference equality, whether two variables refer to the same object, while a.equals(b) checks content equality, whether they hold the same value.\n\nThis reverses the roles described in the source, which assigns reference checking to == and content checking to .equals(), not the other way around.\n\nThe source specifically distinguishes .equals() from == for objects, so treating both as always checking reference equality contradicts that distinction.\n\nThe source likewise distinguishes == from .equals() for objects, so treating both as always checking content equality also contradicts it."
  },
  {
    id: "csc302_ch_1_1_050",
    course: "CSC 302",
    chapter: "Chapter 1.1",
    text: "Since Java has no in or not in membership operator like Python, which method is used to check whether a List contains a particular value?",
    options: [
      "The list's contains() method",
      "The list's containsKey() method",
      "The equals() method",
      "The == operator"
    ],
    correctAnswer: 0,
    explanation: "The Identity and Membership Operators section states that List.contains() is used in place of Python's in operator for checking list membership.\n\ncontainsKey() is the method the same section attaches to Map, for checking whether a key is present, not to List.\n\n.equals() is the method the section describes for content equality between two objects, not for checking membership in a list.\n\nThe == operator is described in the same section as checking reference equality, not membership within a collection."
  }
];

export default csc302Chapter1Questions;
