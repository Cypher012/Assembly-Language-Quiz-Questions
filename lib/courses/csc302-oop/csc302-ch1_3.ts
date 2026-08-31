import { QuestionV2 } from "@/lib/quiz-types";

const csc302Chapter3Questions: QuestionV2[] = [
  {
    id: "csc302_ch_1_3_001",
    course: "CSC 302",
    chapter: "Chapter 1.3",
    text: "What is the purpose of a try block in Java exception handling?",
    options: [
      "To enclose code that will run after the try and catch blocks finish, whether or not an exception was thrown",
      "To enclose code that might throw an exception so it can be caught and handled",
      "To catch and handle a specific exception type",
      "To read input from the console"
    ],
    correctAnswer: 1,
    explanation: "The Exception Handling example wraps the risky division inside a try block, whose role is to enclose code that might throw an exception so it can be caught and handled rather than crashing the program.\n\nRunning code after the try and catch blocks finish regardless of whether an exception was thrown describes the finally block in the same example, not the try block.\n\nCatching and handling a specific exception type is the role of the catch block that follows the try block.\n\nReading input from the console describes the Scanner usage in the Reading Input from User example and has nothing to do with the try block."
  },
  {
    id: "csc302_ch_1_3_002",
    course: "CSC 302",
    chapter: "Chapter 1.3",
    text: "In the exception handling program, what happens immediately when the statement int result = 10 / 0; executes inside the try block?",
    options: [
      "The finally block runs first, before the catch block has a chance to execute",
      "An ArithmeticException is thrown, and control passes to the matching catch block",
      "The program prints \"Cannot divide by zero!\" without running any catch block",
      "The program terminates immediately without running the finally block"
    ],
    correctAnswer: 1,
    explanation: "The Exception Handling example marks the line int result = 10 / 0; with the comment ArithmeticException, showing that dividing by zero throws that exception immediately, which sends control to the catch (ArithmeticException e) block.\n\nThe finally block does not run before the catch block; it runs after both the try and catch blocks finish, so it cannot skip the catch block.\n\nThe \"Cannot divide by zero!\" message is printed from inside the catch block, so it cannot appear without that block running.\n\nThe program does not terminate without the finally block, since the same example shows the finally block printing \"This block always executes.\" after the catch block."
  },
  {
    id: "csc302_ch_1_3_003",
    course: "CSC 302",
    chapter: "Chapter 1.3",
    text: "What does the statement catch (ArithmeticException e) do in a try/catch structure?",
    options: [
      "It defines a block that always executes after both the try and catch blocks finish running, whether or not an exception occurred at all",
      "It defines a block that runs only when an ArithmeticException occurs, printing an error message instead of crashing the program",
      "It defines the block containing the risky code that might throw an exception",
      "It declares the integer variable that stores the result of the division"
    ],
    correctAnswer: 1,
    explanation: "The Exception Handling example uses catch (ArithmeticException e) to define a block that runs specifically when an ArithmeticException occurs, printing \"Error: Cannot divide by zero!\" instead of letting the program crash.\n\nA block that always executes after the try and catch blocks regardless of the outcome describes the finally block in the same example, not the catch block.\n\nThe block containing the risky code that might throw an exception is the try block, which precedes the catch block.\n\nDeclaring the integer variable that stores the division result refers to the line int result = 10 / 0; inside the try block, not to the catch block."
  },
  {
    id: "csc302_ch_1_3_004",
    course: "CSC 302",
    chapter: "Chapter 1.3",
    text: "What is the defining characteristic of a finally block in Java exception handling?",
    options: [
      "It only executes in cases where the enclosing try block finishes without any exception being thrown during execution",
      "It only executes when the catch block has finished handling the thrown exception without encountering any further errors",
      "It executes after the try and catch blocks regardless of whether an exception was thrown or caught",
      "It replaces the need for a catch block entirely"
    ],
    correctAnswer: 2,
    explanation: "The Exception Handling example shows the finally block printing \"This block always executes.\" after the catch block runs, illustrating that a finally block executes after the try and catch blocks regardless of whether an exception was thrown or caught.\n\nA finally block is not limited to cases where no exception is thrown; the example's finally block runs precisely because an exception was thrown and caught.\n\nIts execution does not depend on the catch block succeeding, since the same wording covers both a caught exception and no exception at all.\n\nA finally block does not replace a catch block; the example uses both a catch block and a finally block together, each with a distinct role."
  },
  {
    id: "csc302_ch_1_3_005",
    course: "CSC 302",
    chapter: "Chapter 1.3",
    text: "A try block executes int result = 10 / 0;, a catch block for ArithmeticException prints \"Error: Cannot divide by zero!\", and a finally block prints \"This block always executes.\". When the program runs, what does it print, in order?",
    options: [
      "\"This block always executes.\" followed by \"Error: Cannot divide by zero!\"",
      "\"Error: Cannot divide by zero!\" followed by \"This block always executes.\"",
      "\"Error: Cannot divide by zero!\" only, since the finally block is skipped after an exception",
      "\"This block always executes.\" only, since the catch block is skipped after an exception"
    ],
    correctAnswer: 1,
    explanation: "The Exception Handling example runs the catch block first, printing \"Error: Cannot divide by zero!\", and then runs the finally block, printing \"This block always executes.\", giving that exact order.\n\nThe reversed order is wrong because the finally block is written after the catch block and only runs once the catch block has finished.\n\nThe finally block is not skipped after an exception is caught; the example shows it running immediately afterward.\n\nThe catch block is not skipped either, since it is the block that actually catches the ArithmeticException and prints the error message."
  },
  {
    id: "csc302_ch_1_3_006",
    course: "CSC 302",
    chapter: "Chapter 1.3",
    text: "In the exception handling example, the finally block executes even if no exception is thrown in the try block.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "The Exception Handling example describes the finally block as always executing, independent of whether the try block throws an exception. Its execution is not conditional on an exception occurring, so the statement is true."
  },
  {
    id: "csc302_ch_1_3_007",
    course: "CSC 302",
    chapter: "Chapter 1.3",
    text: "Why does a Java program that reads user input include the line import java.util.Scanner;?",
    options: [
      "To make the Scanner class available for reading input from sources such as the keyboard",
      "To make the ArrayList class available for storing an ordered collection of input values entered by the user",
      "To make the HashMap class available for storing key-value pairs that the user enters during the program",
      "To enable formatted output using format specifiers such as %s and %d"
    ],
    correctAnswer: 0,
    explanation: "The Reading Input from User example begins with import java.util.Scanner; specifically so the Scanner class is available for reading input, which the program then uses via Scanner scanner = new Scanner(System.in).\n\nMaking the ArrayList class available is unrelated, since ArrayList belongs to the Introduction to Collections examples, not the input example.\n\nMaking the HashMap class available is likewise unrelated, since HashMap is introduced separately in the Collections examples.\n\nEnabling formatted output with specifiers such as %s and %d describes System.out.printf(), a different feature from the Console Output examples, not the Scanner import."
  },
  {
    id: "csc302_ch_1_3_008",
    course: "CSC 302",
    chapter: "Chapter 1.3",
    text: "What does the statement Scanner scanner = new Scanner(System.in); accomplish?",
    options: [
      "It prints a prompt on the console asking the user to type in their name",
      "It creates a Scanner object that reads input from the standard input stream",
      "It reads the next full line of text that the user has just entered",
      "It closes the input stream so no more data can be read"
    ],
    correctAnswer: 1,
    explanation: "The Reading Input from User example uses Scanner scanner = new Scanner(System.in); to create a Scanner object tied to System.in, the standard input stream, before any reading happens.\n\nPrinting a prompt asking for the user's name is done afterward by System.out.print(\"Enter your name: \"), a separate statement.\n\nReading the next line of text entered by the user describes scanner.nextLine(), which is called later in the same example.\n\nClosing the input stream describes scanner.close(), which the example calls only at the very end, after all input has been read."
  },
  {
    id: "csc302_ch_1_3_009",
    course: "CSC 302",
    chapter: "Chapter 1.3",
    text: "In the input example, which method call reads the user's typed name as a line of text?",
    options: [
      "scanner.nextInt()",
      "scanner.nextLine()",
      "scanner.close()",
      "System.out.print()"
    ],
    correctAnswer: 1,
    explanation: "The Reading Input from User example assigns String name = scanner.nextLine(); to capture the name the user types, so nextLine() is the call that reads it.\n\nscanner.nextInt() is used later in the same example to read the user's age as a number, not the name as text.\n\nscanner.close() only releases the Scanner's resources at the end of the program and does not read any input itself.\n\nSystem.out.print() only displays the prompt \"Enter your name: \" on the console and does not read anything the user types."
  },
  {
    id: "csc302_ch_1_3_010",
    course: "CSC 302",
    chapter: "Chapter 1.3",
    text: "Which of the following correctly describes a method used to read user input in the input example program?",
    options: [
      "scanner.nextLine() reads a line of text entered by the user",
      "scanner.nextInt() reads an integer value entered by the user",
      "All of these",
      "None of these"
    ],
    correctAnswer: 2,
    explanation: "The Reading Input from User example uses scanner.nextLine() to read the typed name as a line of text, which matches that description exactly.\n\nThe same example uses scanner.nextInt() to read the typed age as an integer value, which matches that description exactly as well.\n\nSince both descriptions are supported by the example, the correct choice covers all of the listed methods rather than either one alone or neither."
  },
  {
    id: "csc302_ch_1_3_011",
    course: "CSC 302",
    chapter: "Chapter 1.3",
    text: "A program runs: Scanner scanner = new Scanner(System.in); System.out.print(\"Enter your name: \"); String name = scanner.nextLine(); System.out.print(\"Enter your age: \"); int age = scanner.nextInt(); System.out.println(\"Hello \" + name + \"! You are \" + age + \" years old.\"); scanner.close(); Why does it call scanner.close(); at the end?",
    options: [
      "To print the final greeting message to the console",
      "To release the resources held by the Scanner object once input reading is finished",
      "To read one additional line of leftover input just before the program finishes running and exits",
      "To reset the Scanner so it can then read from a completely different input source"
    ],
    correctAnswer: 1,
    explanation: "The Reading Input from User example places scanner.close(); after all reading is done, matching its role of releasing the resources held by the Scanner object once input reading is finished.\n\nPrinting the final greeting message is done by the System.out.println() call that combines the name and age, which happens before scanner.close() is called.\n\nReading one more line of input is not what close() does; it ends the Scanner's ability to read, rather than performing another read.\n\nResetting the Scanner to read from a new source is not shown anywhere in the example, which uses one Scanner for one input stream from start to finish."
  },
  {
    id: "csc302_ch_1_3_012",
    course: "CSC 302",
    chapter: "Chapter 1.3",
    text: "A program runs: Scanner scanner = new Scanner(System.in); System.out.print(\"Enter your name: \"); String name = scanner.nextLine(); System.out.print(\"Enter your age: \"); int age = scanner.nextInt(); System.out.println(\"Hello \" + name + \"! You are \" + age + \" years old.\"); scanner.close(); After the user enters a name and an age, what does the program print?",
    options: [
      "Only the entered name, without the age",
      "A greeting combining the entered name and age into one sentence",
      "Only the entered age, without the name",
      "The name and age printed on two separate lines using two println() calls"
    ],
    correctAnswer: 1,
    explanation: "The Reading Input from User example finishes with System.out.println(\"Hello \" + name + \"! You are \" + age + \" years old.\"), a single call that combines both the entered name and age into one greeting sentence.\n\nPrinting only the entered name is incomplete, since the same statement also includes the age through string concatenation.\n\nPrinting only the entered age is likewise incomplete, since the name is concatenated into the same sentence.\n\nThe example uses one println() call for the combined greeting, not two separate println() calls on two lines."
  },
  {
    id: "csc302_ch_1_3_013",
    course: "CSC 302",
    chapter: "Chapter 1.3",
    text: "What does the System.out.print() method do when displaying output to the console?",
    options: [
      "It prints text without moving the cursor to a new line, keeping subsequent output on the same line",
      "It prints text and automatically moves the cursor to a new line afterward",
      "It prints text formatted according to format specifiers such as %s and %d",
      "It prints a blank line with no text"
    ],
    correctAnswer: 0,
    explanation: "The Different Ways to Print section describes System.out.print() as printing text and keeping the cursor on the same line, which the PrintDemo example confirms by chaining several print() calls onto one line of output.\n\nAutomatically moving to a new line afterward describes System.out.println(), the second of the three printing styles.\n\nFormatting output according to specifiers such as %s and %d describes System.out.printf(), the third style, not print().\n\nPrinting a blank line with no text describes calling println() with no arguments, not print()."
  },
  {
    id: "csc302_ch_1_3_014",
    course: "CSC 302",
    chapter: "Chapter 1.3",
    text: "What makes System.out.println() different from System.out.print()?",
    options: [
      "println() requires format specifiers while print() does not",
      "println() automatically adds a newline after the printed text, while print() keeps the cursor on the same line",
      "println() can only print numbers while print() can only print strings",
      "println() belongs to a different class than print()"
    ],
    correctAnswer: 1,
    explanation: "The System.out.println() section describes it as printing text and automatically adding a newline, in contrast to print(), which the Different Ways to Print section describes as keeping the cursor on the same line.\n\nRequiring format specifiers describes printf(), not println(), which is shown printing plain strings with no specifiers in the PrintlnDemo example.\n\nNeither method is restricted to only numbers or only strings; the PrintlnDemo example prints plain text with println() with no such restriction shown.\n\nBoth methods belong to the same class, since the Different Ways to Print section states that print(), println(), and printf() all belong to the PrintStream class."
  },
  {
    id: "csc302_ch_1_3_015",
    course: "CSC 302",
    chapter: "Chapter 1.3",
    text: "What is the purpose of the System.out.printf() method in Java?",
    options: [
      "To print text and automatically move to a new line, the most commonly used printing style",
      "To print text while keeping the cursor on the same line",
      "To allow formatted printing with precise control over output, similar to printf in C",
      "To combine strings using the plus operator instead of format specifiers"
    ],
    correctAnswer: 2,
    explanation: "The Different Ways to Print section describes System.out.printf() as formatted printing, like C's printf, giving precise control over how values appear in the output.\n\nPrinting text and automatically moving to a new line describes println(), described in the same section as the most commonly used style.\n\nKeeping the cursor on the same line describes print(), not printf().\n\nCombining strings with the plus operator describes string concatenation, which the printf() section contrasts with printf() rather than describes as printf()'s purpose."
  },
  {
    id: "csc302_ch_1_3_016",
    course: "CSC 302",
    chapter: "Chapter 1.3",
    text: "The print(), println(), and printf() methods used for console output in Java all belong to which class?",
    options: ["Scanner", "ArrayList", "HashMap", "PrintStream"],
    correctAnswer: 3,
    explanation: "The Different Ways to Print section states directly that all three main output styles, print(), println(), and printf(), belong to the PrintStream class.\n\nScanner is the class used for reading user input in the Reading Input from User example, not for printing output.\n\nArrayList is a Collections Framework class used to store ordered, duplicate-allowing lists, unrelated to console output methods.\n\nHashMap is a Collections Framework class used to store key-value pairs, also unrelated to console output methods."
  },
  {
    id: "csc302_ch_1_3_017",
    course: "CSC 302",
    chapter: "Chapter 1.3",
    text: "Calling System.out.println() with no arguments prints a blank line to the console.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "The System.out.println() section shows the PrintlnDemo example calling println() with no arguments specifically to print a blank line between other printed lines, confirming the statement is true."
  },
  {
    id: "csc302_ch_1_3_018",
    course: "CSC 302",
    chapter: "Chapter 1.3",
    text: "In a printf() format string, what does the %s specifier represent?",
    options: [
      "An integer value in decimal form",
      "A floating point value with two decimal places",
      "A string value",
      "A boolean value such as true or false"
    ],
    correctAnswer: 2,
    explanation: "The Common Format Specifiers table lists %s as representing a string value, which the PrintfDemo example confirms by using %s to print the string variable name.\n\nAn integer value in decimal form is represented by %d, a different row of the same table.\n\nA floating point value with two decimal places is represented by %.2f, also a different row of the table.\n\nA boolean value such as true or false is represented by %b, listed separately in the same table."
  },
  {
    id: "csc302_ch_1_3_019",
    course: "CSC 302",
    chapter: "Chapter 1.3",
    text: "In a printf() format string, what does the %d specifier represent?",
    options: [
      "A string value",
      "An integer value in decimal form",
      "A floating point value with two decimal places",
      "A single character value"
    ],
    correctAnswer: 1,
    explanation: "The Common Format Specifiers table lists %d as representing an integer value in decimal form, which the PrintfDemo example confirms by using %d to print the int variable age.\n\nA string value is represented by %s, a different row of the same table.\n\nA floating point value with two decimal places is represented by %.2f, also listed separately.\n\nA single character value is represented by %c, another distinct row in the same table."
  },
  {
    id: "csc302_ch_1_3_020",
    course: "CSC 302",
    chapter: "Chapter 1.3",
    text: "What is the difference between the %f and %.2f format specifiers in printf()?",
    options: [
      "%f prints an integer while %.2f prints a string",
      "%f and %.2f both print the same output with no difference",
      "%f prints a floating point number with default precision, while %.2f rounds it to exactly two decimal places",
      "%.2f prints a boolean value while %f prints a character"
    ],
    correctAnswer: 2,
    explanation: "The Common Format Specifiers table lists %f as a floating point number and %.2f specifically as a float with two decimal places, so %.2f controls the precision that plain %f does not fix.\n\n%f does not print an integer and %.2f does not print a string; both specifiers are for floating point numbers, only differing in decimal precision.\n\nThe two specifiers are not identical, since %.2f fixes the output to two decimal places while %f uses its own default precision.\n\nNeither specifier prints a boolean or a character; those are represented by %b and %c respectively in the same table."
  },
  {
    id: "csc302_ch_1_3_021",
    course: "CSC 302",
    chapter: "Chapter 1.3",
    text: "In a printf() format string, what does the %c specifier represent?",
    options: [
      "A string of multiple characters",
      "A single character",
      "A platform-independent newline",
      "An integer in decimal form"
    ],
    correctAnswer: 1,
    explanation: "The Common Format Specifiers table lists %c as representing a single character, distinct from strings of multiple characters.\n\nA string of multiple characters is represented by %s, a separate row in the same table.\n\nA platform-independent newline is represented by %n, also listed separately.\n\nAn integer in decimal form is represented by %d, another distinct row of the table."
  },
  {
    id: "csc302_ch_1_3_022",
    course: "CSC 302",
    chapter: "Chapter 1.3",
    text: "Which of the following correctly describes a format specifier used in printf()?",
    options: [
      "%n produces a platform-independent newline",
      "%b formats a boolean value such as true or false",
      "All of these",
      "None of these"
    ],
    correctAnswer: 2,
    explanation: "The Common Format Specifiers table lists %n as producing a platform-independent newline, matching that description exactly.\n\nThe same table lists %b as formatting a boolean value such as true or false, matching that description exactly as well.\n\nSince both descriptions are supported by the table, the correct choice covers all of the listed specifiers rather than either one alone or neither."
  },
  {
    id: "csc302_ch_1_3_023",
    course: "CSC 302",
    chapter: "Chapter 1.3",
    text: "Given the statements System.out.print(\"Hello\"); System.out.print(\" World\"); System.out.print(\" from Java!\");, what is printed to the console?",
    options: [
      "Hello, World, and from Java! printed on three separate lines",
      "Hello World from Java! printed entirely on one line",
      "Only the last call's text, \" from Java!\", is printed",
      "HelloWorldfromJava! printed with no spaces between the words"
    ],
    correctAnswer: 1,
    explanation: "The PrintDemo example chains three print() calls and comments the result as Hello World from Java!, all on one line, because print() never moves the cursor to a new line between calls.\n\nThe three separate lines outcome is wrong precisely because print() keeps the cursor on the same line instead of starting a new one after each call.\n\nAll three calls execute and each contributes its text, so only the last call's text being printed is incorrect.\n\nThe strings already contain leading spaces such as \" World\" and \" from Java!\", so the words are not run together with no spaces."
  },
  {
    id: "csc302_ch_1_3_024",
    course: "CSC 302",
    chapter: "Chapter 1.3",
    text: "Given double gpa = 4.85; and the call System.out.printf(\"GPA: %.2f\\n\", gpa);, what is printed?",
    options: [
      "GPA: 4.850000",
      "GPA: 4.85",
      "GPA: 4",
      "GPA: %.2f"
    ],
    correctAnswer: 1,
    explanation: "The PrintfDemo example uses %.2f specifically to round gpa to two decimal places, and comments the line as 2 decimal places, so printf(\"GPA: %.2f\\n\", gpa) with gpa = 4.85 prints GPA: 4.85.\n\nGPA: 4.850000 would result from a specifier with six decimal places, not the two decimal places that %.2f fixes.\n\nGPA: 4 would drop the decimal portion entirely, which contradicts the Common Format Specifiers table's description of %.2f as keeping two decimal places.\n\nGPA: %.2f would only appear if the format specifier were printed literally instead of being substituted with the value of gpa, which is not how printf() behaves."
  },
  {
    id: "csc302_ch_1_3_025",
    course: "CSC 302",
    chapter: "Chapter 1.3",
    text: "Three ways of printing a student's name and score are compared: print combined with println, println with string concatenation, and printf with format specifiers. Which approach is identified as the cleanest for formatting output?",
    options: [
      "print combined with println, since it prints values in separate pieces on one line",
      "println with string concatenation, since it joins text and values using the plus operator",
      "printf, since it formats values directly into the string using format specifiers",
      "None of the three approaches, since all are equally clean"
    ],
    correctAnswer: 2,
    explanation: "The OutputComparison example labels its third approach, printf(\"Student: %s scored %d marks.\\n\", name, score), with the comment printf (cleanest for formatting), identifying printf as the cleanest of the three.\n\nThe print combined with println approach is shown first in the example as a way to split output into separate pieces, not as the cleanest for formatting.\n\nThe println with concatenation approach is shown second, joining text and the score with the plus operator, and is not the one labeled cleanest.\n\nThe example does not treat the three approaches as equally clean; it specifically singles out printf as the cleanest for formatting."
  },
  {
    id: "csc302_ch_1_3_026",
    course: "CSC 302",
    chapter: "Chapter 1.3",
    text: "Why is %n generally preferred over \\n inside a printf() call?",
    options: [
      "Because it allows building output on the same line, as when displaying a progress bar",
      "Because it allows more advanced formatting through the separate String.format() method",
      "Because it is the best choice for simple line-by-line output",
      "Because %n is platform-independent, producing the correct newline character for the operating system running the program"
    ],
    correctAnswer: 3,
    explanation: "The Best Practices for Console Output section states that %n is preferred over \\n in printf() for better portability, since it is platform-independent and produces the correct newline for whichever operating system runs the program.\n\nBuilding output on the same line, such as for a progress bar, is listed in the same section as a reason to use print(), not a reason to prefer %n.\n\nAdvanced formatting through String.format() is listed as a separate best practice for very advanced formatting needs, not the reason %n is preferred.\n\nBeing the best choice for simple line-by-line output is listed as a reason to use println(), not a reason %n is preferred over \\n."
  },
  {
    id: "csc302_ch_1_3_027",
    course: "CSC 302",
    chapter: "Chapter 1.3",
    text: "What defines the List interface in the Java Collections Framework, as implemented by classes such as ArrayList and LinkedList?",
    options: [
      "A collection that does not allow duplicate elements",
      "An ordered collection that allows duplicate elements",
      "A collection of key-value pairs",
      "An unordered collection that removes duplicate elements automatically"
    ],
    correctAnswer: 1,
    explanation: "The Introduction to Collections section defines List as ordered and allowing duplicates, giving ArrayList and LinkedList as its implementations.\n\nNot allowing duplicate elements describes Set, implemented by HashSet, a different interface in the same section.\n\nA collection of key-value pairs describes Map, implemented by HashMap, also a different interface in the same section.\n\nRemoving duplicates automatically describes neither List nor any interface in the section; List is defined as allowing duplicates, not removing them."
  },
  {
    id: "csc302_ch_1_3_028",
    course: "CSC 302",
    chapter: "Chapter 1.3",
    text: "What defines the Set interface in the Java Collections Framework, as implemented by HashSet?",
    options: [
      "An ordered collection that allows duplicate elements",
      "A collection of key-value pairs",
      "A collection that does not allow duplicate elements",
      "An ordered collection that preserves the order elements were added"
    ],
    correctAnswer: 2,
    explanation: "The Introduction to Collections section defines Set as a collection with no duplicates, giving HashSet as its implementation.\n\nAn ordered collection that allows duplicate elements describes List, implemented by ArrayList and LinkedList, a different interface in the same section.\n\nA collection of key-value pairs describes Map, implemented by HashMap, also a different interface in the same section.\n\nPreserving the order elements were added describes the ordering behavior the section attributes to List, not the no-duplicates behavior that defines Set."
  },
  {
    id: "csc302_ch_1_3_029",
    course: "CSC 302",
    chapter: "Chapter 1.3",
    text: "What does the Map interface represent in the Java Collections Framework, as implemented by HashMap?",
    options: [
      "An ordered collection that allows duplicate elements",
      "A collection of key-value pairs",
      "A collection that does not allow duplicate elements",
      "A collection that must be declared using the ArrayList class"
    ],
    correctAnswer: 1,
    explanation: "The Introduction to Collections section defines Map as storing key-value pairs, giving HashMap as its implementation.\n\nAn ordered collection that allows duplicate elements describes List, implemented by ArrayList and LinkedList, a different interface in the same section.\n\nA collection that does not allow duplicate elements describes Set, implemented by HashSet, also a different interface.\n\nMap is declared using the HashMap class in the examples, not the ArrayList class, which is used for the separate List interface."
  },
  {
    id: "csc302_ch_1_3_030",
    course: "CSC 302",
    chapter: "Chapter 1.3",
    text: "In the Java Collections Framework, the Set interface allows duplicate elements.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "The Introduction to Collections section defines Set, implemented by HashSet, as a collection with no duplicates. Allowing duplicate elements is the defining trait of List instead, so the statement is false."
  },
  {
    id: "csc302_ch_1_3_031",
    course: "CSC 302",
    chapter: "Chapter 1.3",
    text: "In the ArrayList example, what does the statement cars.add(\"Toyota\"); do?",
    options: [
      "It replaces the first element of the cars ArrayList with \"Toyota\"",
      "It appends the string \"Toyota\" to the end of the cars ArrayList",
      "It removes \"Toyota\" from the cars ArrayList if present",
      "It checks whether \"Toyota\" already exists in the cars ArrayList"
    ],
    correctAnswer: 1,
    explanation: "The ArrayList Basic Operations example calls cars.add(\"Toyota\"); as the first of three add() calls, appending \"Toyota\" to the end of the cars ArrayList.\n\nReplacing the first element describes a different kind of operation than add(), which the example never performs on an existing element.\n\nRemoving \"Toyota\" describes cars.remove(1), a later statement in the same example that removes by index, not add().\n\nChecking whether \"Toyota\" already exists is not shown in the example at all; the example only adds, sizes, gets, and removes elements."
  },
  {
    id: "csc302_ch_1_3_032",
    course: "CSC 302",
    chapter: "Chapter 1.3",
    text: "After the statements cars.add(\"Toyota\"); cars.add(\"Honda\"); cars.add(\"Tesla\");, what does cars.size() return?",
    options: ["0", "1", "3", "2"],
    correctAnswer: 2,
    explanation: "The ArrayList Basic Operations example adds three elements, \"Toyota\", \"Honda\", and \"Tesla\", before calling cars.size(), which the example's output labels Size: 3.\n\n0 would be the size before any elements were added, not after three add() calls.\n\n1 would be the size after only a single add() call, not after all three shown in the example.\n\n2 would be the size after two add() calls, or after one element was later removed, not the size at the point size() is called in the example."
  },
  {
    id: "csc302_ch_1_3_033",
    course: "CSC 302",
    chapter: "Chapter 1.3",
    text: "After adding \"Toyota\", \"Honda\", and \"Tesla\" to the cars ArrayList in that order, what does cars.get(0) return?",
    options: [
      "\"Honda\"",
      "\"Toyota\"",
      "\"Tesla\"",
      "null, since ArrayList indices start at 1"
    ],
    correctAnswer: 1,
    explanation: "The ArrayList Basic Operations example adds \"Toyota\" first, and its output labels cars.get(0) as First car: Toyota, confirming index 0 holds the first-added element.\n\n\"Honda\" was added second, so it sits at index 1, not index 0.\n\n\"Tesla\" was added third, so it sits at index 2, not index 0.\n\nArrayList indices start at 0, not 1, so get(0) returns the first element rather than null."
  },
  {
    id: "csc302_ch_1_3_034",
    course: "CSC 302",
    chapter: "Chapter 1.3",
    text: "Which of the following correctly describes the statement cars.remove(1); in the ArrayList example?",
    options: [
      "It removes the element at index 1 from the cars ArrayList, which is \"Honda\"",
      "It removes every element equal to the integer value 1 from the cars ArrayList",
      "All of these",
      "None of these"
    ],
    correctAnswer: 0,
    explanation: "The ArrayList Basic Operations example comments cars.remove(1); as remove by index, and since \"Toyota\", \"Honda\", and \"Tesla\" were added in that order, index 1 holds \"Honda\", matching the after-remove output shown in the example.\n\nRemoving every element equal to the integer value 1 does not apply, since cars is an ArrayList of strings and remove(int) on it removes by position rather than by matching a stored value.\n\nSince only the index-based description is supported by the example, the correct choice is that specific description rather than covering every option or none of them."
  },
  {
    id: "csc302_ch_1_3_035",
    course: "CSC 302",
    chapter: "Chapter 1.3",
    text: "What does the statement for (String fruit : fruits) { System.out.println(fruit); } do in the ArrayList loop example?",
    options: [
      "It prints only the first element of the fruits ArrayList",
      "It iterates over each element in the fruits ArrayList, printing every fruit on its own line",
      "It prints the size of the fruits ArrayList instead of its elements",
      "It removes each fruit from the ArrayList as it is printed"
    ],
    correctAnswer: 1,
    explanation: "The ArrayList Loop Through Elements example labels this statement as an enhanced for loop, which iterates over every element in the fruits ArrayList and prints each one, Apple, Banana, and Mango, on its own line.\n\nPrinting only the first element would stop after one iteration, but the enhanced for loop continues through every element in the ArrayList.\n\nPrinting the size instead of the elements is not what the loop does; it prints each fruit variable, not fruits.size().\n\nThe loop only calls System.out.println(fruit), with no call to remove elements, so nothing is removed from the ArrayList."
  },
  {
    id: "csc302_ch_1_3_036",
    course: "CSC 302",
    chapter: "Chapter 1.3",
    text: "In the HashMap example, what does the statement students.put(\"Isaac\", 85); do?",
    options: [
      "It retrieves the value associated with the key \"Isaac\" from the students HashMap",
      "It associates the key \"Isaac\" with the value 85 in the students HashMap",
      "It checks whether the key \"Isaac\" exists in the students HashMap",
      "It removes the key \"Isaac\" from the students HashMap"
    ],
    correctAnswer: 1,
    explanation: "The HashMap Key Value Pairs example calls students.put(\"Isaac\", 85); as the first of three put() calls, associating the key \"Isaac\" with the value 85 in the students HashMap.\n\nRetrieving a value describes students.get(\"Isaac\"), a later statement in the same example that reads a value rather than storing one.\n\nChecking whether a key exists describes students.containsKey(\"Ade\"), also a later statement in the same example, not put().\n\nRemoving a key is not shown anywhere in the HashMap example, which only adds, retrieves, and checks for keys."
  },
  {
    id: "csc302_ch_1_3_037",
    course: "CSC 302",
    chapter: "Chapter 1.3",
    text: "In the HashMap example, what does the expression students.get(\"Isaac\") return?",
    options: [
      "\"Isaac\", the key itself",
      "85, the value associated with the key \"Isaac\"",
      "78, the value associated with the key \"Chinedu\"",
      "92, the value associated with the key \"Ade\""
    ],
    correctAnswer: 1,
    explanation: "The HashMap Key Value Pairs example puts \"Isaac\" with the value 85 and then prints Isaac's score: 85 using students.get(\"Isaac\"), confirming that get() returns the value tied to the given key.\n\nget() returns the value stored under a key, not the key string itself, so \"Isaac\" is not what the call returns.\n\n78 is the value stored under the key \"Chinedu\" in the same example, not under \"Isaac\".\n\n92 is the value stored under the key \"Ade\" in the same example, not under \"Isaac\"."
  },
  {
    id: "csc302_ch_1_3_038",
    course: "CSC 302",
    chapter: "Chapter 1.3",
    text: "Which of the following correctly describes what students.containsKey(\"Ade\") checks in the HashMap example?",
    options: [
      "It checks whether the value 92 exists anywhere in the students HashMap",
      "It removes the key \"Ade\" from the students HashMap if present",
      "All of these",
      "None of these"
    ],
    correctAnswer: 3,
    explanation: "The HashMap Key Value Pairs example uses students.containsKey(\"Ade\") to check whether the key \"Ade\" exists, not whether the value 92 exists anywhere in the map, so checking for the value 92 misdescribes containsKey().\n\ncontainsKey() only checks for the presence of a key and does not remove anything from the map, so describing it as removing the key \"Ade\" also misdescribes the method.\n\nSince neither specific description matches what containsKey() actually does in the example, the correct choice covers neither of the listed descriptions."
  },
  {
    id: "csc302_ch_1_3_039",
    course: "CSC 302",
    chapter: "Chapter 1.3",
    text: "In the HashMap iteration example, what does the loop for (Map.Entry<String, String> entry : capitals.entrySet()) do?",
    options: [
      "It iterates over only the keys in the capitals HashMap, printing each key without ever accessing its associated value",
      "It iterates over only the values in the capitals HashMap, ignoring the keys",
      "It iterates over each key-value pair in the capitals HashMap using entries returned by entrySet()",
      "It creates a new HashMap from the capitals HashMap's entries"
    ],
    correctAnswer: 2,
    explanation: "The HashMap Iterating Over Entries example uses capitals.entrySet() to obtain each Map.Entry, iterating over every key-value pair in the capitals HashMap rather than keys or values alone.\n\nIterating over only the keys would ignore the values, but the loop body prints both entry.getKey() and entry.getValue() together.\n\nIterating over only the values would ignore the keys, but the same loop body prints the key as well as the value.\n\nThe loop reads entries from capitals; it does not construct any new HashMap in the example."
  },
  {
    id: "csc302_ch_1_3_040",
    course: "CSC 302",
    chapter: "Chapter 1.3",
    text: "In the HashMap iteration example, what does entry.getKey() + \" -> \" + entry.getValue() print for each entry?",
    options: [
      "Only the capital city, such as \"Abuja\"",
      "Only the country name, such as \"Nigeria\"",
      "The capital city printed first, followed by an arrow and then the full country name, such as \"Abuja -> Nigeria\"",
      "The country name, an arrow, and its capital city, such as \"Nigeria -> Abuja\""
    ],
    correctAnswer: 3,
    explanation: "The HashMap Iterating Over Entries example stores country names as keys and capitals as values, such as capitals.put(\"Nigeria\", \"Abuja\"), so entry.getKey() + \" -> \" + entry.getValue() prints the country name, an arrow, and its capital, such as Nigeria -> Abuja.\n\nPrinting only the capital city would drop the entry.getKey() portion of the concatenation, which the loop always includes.\n\nPrinting only the country name would drop the entry.getValue() portion, which the loop also always includes.\n\nThe capital followed by the country reverses the order, but getKey() is written before getValue() in the concatenation, so the country name comes first."
  },
  {
    id: "csc302_ch_1_3_041",
    course: "CSC 302",
    chapter: "Chapter 1.3",
    text: "Lambda expressions, introduced in Java 8, are best described as which of the following?",
    options: [
      "Named functional interfaces that each define multiple abstract methods",
      "Short, anonymous functions that make code more concise",
      "A type of collection that stores elements as key-value pairs",
      "A loop construct used to iterate over the elements of an ArrayList"
    ],
    correctAnswer: 1,
    explanation: "The What are Lambda Expressions section describes lambda expressions as short, anonymous functions introduced in Java 8 that make code more concise.\n\nNamed functional interfaces with multiple abstract methods describes neither a lambda nor a functional interface, since the section's Greeting and Calculator interfaces each declare only one abstract method.\n\nA collection that stores elements as key-value pairs describes Map, covered separately in the Introduction to Collections section.\n\nA loop construct used to iterate over an ArrayList describes the enhanced for loop shown in the ArrayList Loop Through Elements example, not a lambda expression."
  },
  {
    id: "csc302_ch_1_3_042",
    course: "CSC 302",
    chapter: "Chapter 1.3",
    text: "What is the correct general syntax for a lambda expression in Java?",
    options: [
      "function(parameters) => expression",
      "(parameters) -> expression",
      "expression -> (parameters)",
      "class(parameters) { return expression; }"
    ],
    correctAnswer: 1,
    explanation: "The What are Lambda Expressions section states the syntax as (parameters) -> expression, with the parameters listed first, followed by the arrow, followed by the expression.\n\nfunction(parameters) => expression uses a function keyword and a double-arrow form that the section does not use for Java lambdas.\n\nexpression -> (parameters) reverses the stated order, placing the expression before the parameters instead of after the arrow.\n\nclass(parameters) { return expression; } describes a class-like block structure, not the concise arrow syntax the section defines for lambdas."
  },
  {
    id: "csc302_ch_1_3_043",
    course: "CSC 302",
    chapter: "Chapter 1.3",
    text: "An interface is declared as: @FunctionalInterface interface Greeting { void sayHello(String name); }, and it is then implemented by the lambda (name) -> System.out.println(\"Hello \" + name + \"!\"). What characterizes this Greeting interface?",
    options: [
      "It declares two abstract methods that the lambda must implement together",
      "It declares exactly one abstract method, sayHello(String name), which the lambda implements",
      "It is a class, not an interface, that stores greeting messages",
      "It extends the ArrayList class to store multiple greetings"
    ],
    correctAnswer: 1,
    explanation: "The Lambda with Functional Interface example marks Greeting with @FunctionalInterface and declares exactly one abstract method, void sayHello(String name), which the lambda (name) -> System.out.println(\"Hello \" + name + \"!\") implements.\n\nDeclaring two abstract methods would not qualify as a functional interface, since a functional interface is defined by having exactly one abstract method.\n\nGreeting is declared with the interface keyword, not the class keyword, so it is not a class.\n\nGreeting does not extend ArrayList; it is a plain interface with a single method, unrelated to the Collections Framework."
  },
  {
    id: "csc302_ch_1_3_044",
    course: "CSC 302",
    chapter: "Chapter 1.3",
    text: "What does the statement names.forEach(name -> System.out.println(\"Student: \" + name)); do in the lambda forEach example?",
    options: [
      "It applies the lambda only to the first element in the names ArrayList",
      "It applies the lambda to every element in the names ArrayList, printing \"Student: \" followed by each name",
      "It sorts the names ArrayList before printing any elements",
      "It removes each name from the ArrayList after printing it"
    ],
    correctAnswer: 1,
    explanation: "The Lambda with forEach on ArrayList example calls names.forEach(name -> System.out.println(\"Student: \" + name)); to apply the lambda to every element in the names ArrayList, printing \"Student: \" followed by each name.\n\nApplying the lambda only to the first element misdescribes forEach(), which the example uses precisely because it runs the lambda once per element, not once total.\n\nSorting the names ArrayList is not shown anywhere in the example; the names are printed in the order they were added.\n\nThe lambda only calls System.out.println(), with no removal logic, so no names are removed from the ArrayList."
  },
  {
    id: "csc302_ch_1_3_045",
    course: "CSC 302",
    chapter: "Chapter 1.3",
    text: "In the lambda with functional interface example, calling greet.sayHello(\"Ade\"); prints \"Hello Chinedu!\" to the console.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "The Lambda with Functional Interface example assigns Greeting greet = (name) -> System.out.println(\"Hello \" + name + \"!\"); so calling greet.sayHello(\"Ade\") runs that lambda with name set to \"Ade\", printing \"Hello Ade!\", not \"Hello Chinedu!\". The name \"Chinedu\" belongs to the separate forEach names list, not to this call, so the statement is false."
  },
  {
    id: "csc302_ch_1_3_046",
    course: "CSC 302",
    chapter: "Chapter 1.3",
    text: "Given the names ArrayList containing \"Isaac\", \"Chinedu\", and \"Oluwafemi\" added in that order, what does names.forEach(name -> System.out.println(\"Student: \" + name)); print?",
    options: [
      "\"Student: Oluwafemi\", \"Student: Chinedu\", and \"Student: Isaac\", printed on three separate lines in reverse order",
      "\"Student: Isaac\", \"Student: Chinedu\", and \"Student: Oluwafemi\", each on its own line",
      "\"Isaac\", \"Chinedu\", and \"Oluwafemi\", without the \"Student: \" prefix",
      "A single line reading \"Student: Isaac, Chinedu, Oluwafemi\""
    ],
    correctAnswer: 1,
    explanation: "The Lambda with forEach on ArrayList example adds \"Isaac\", \"Chinedu\", and \"Oluwafemi\" in that order, and forEach() applies the lambda to each element in that same order, printing \"Student: Isaac\", \"Student: Chinedu\", and \"Student: Oluwafemi\" on separate lines.\n\nReverse order is incorrect, since forEach() processes the ArrayList in the order the elements were added, starting with \"Isaac\", not \"Oluwafemi\".\n\nDropping the \"Student: \" prefix is incorrect, since the lambda explicitly concatenates \"Student: \" with each name before printing.\n\nA single combined line is incorrect, since the lambda calls System.out.println() once per element, producing one line per name rather than one line total."
  },
  {
    id: "csc302_ch_1_3_047",
    course: "CSC 302",
    chapter: "Chapter 1.3",
    text: "In the lambda with multiple parameters example, what does the lambda (a, b) -> a + b assigned to the Calculator variable add represent?",
    options: [
      "A function that takes two parameters and returns their product",
      "A function that takes two parameters and returns their sum",
      "A function that takes one parameter and returns its square",
      "A function that takes two parameters and returns the larger of the two"
    ],
    correctAnswer: 1,
    explanation: "The Lambda with Multiple Parameters example assigns Calculator add = (a, b) -> a + b;, a lambda that takes two parameters, a and b, and returns their sum.\n\nReturning their product describes the separate lambda assigned to multiply in the same example, Calculator multiply = (a, b) -> a * b;, not add.\n\nTaking one parameter and returning its square does not match the two-parameter Calculator interface, int calculate(int a, int b), used by add.\n\nReturning the larger of the two values is not shown anywhere in the example; only addition and multiplication are demonstrated."
  },
  {
    id: "csc302_ch_1_3_048",
    course: "CSC 302",
    chapter: "Chapter 1.3",
    text: "Given Calculator add = (a, b) -> a + b;, what does add.calculate(10, 5) return?",
    options: ["50", "15", "5", "10"],
    correctAnswer: 1,
    explanation: "The Lambda with Multiple Parameters example calls add.calculate(10, 5), and since add is (a, b) -> a + b, this computes 10 + 5, which the example's output labels Sum: 15.\n\n50 is the result of multiply.calculate(10, 5) in the same example, which uses multiplication rather than addition.\n\n5 would be the result of subtracting 5 from 10, an operation the example does not define for either Calculator lambda.\n\n10 is simply the first argument passed to calculate(), not the sum the add lambda computes."
  },
  {
    id: "csc302_ch_1_3_049",
    course: "CSC 302",
    chapter: "Chapter 1.3",
    text: "Given Calculator multiply = (a, b) -> a * b;, what does multiply.calculate(10, 5) return?",
    options: ["15", "2", "5", "50"],
    correctAnswer: 3,
    explanation: "The Lambda with Multiple Parameters example calls multiply.calculate(10, 5), and since multiply is (a, b) -> a * b, this computes 10 * 5, which the example's output labels Product: 50.\n\n15 is the result of add.calculate(10, 5) in the same example, which uses addition rather than multiplication.\n\n2 would be the result of dividing 10 by 5, an operation the example does not define for either Calculator lambda.\n\n5 is simply the second argument passed to calculate(), not the product the multiply lambda computes."
  },
  {
    id: "csc302_ch_1_3_050",
    course: "CSC 302",
    chapter: "Chapter 1.3",
    text: "In the lambda with streams example, what does the pipeline numbers.stream().filter(n -> n % 2 == 0).forEach(n -> System.out.println(n)); print for the list 1, 2, 3, 4, 5, 6?",
    options: [
      "1, 3, and 5, each printed on its own line",
      "1, 2, 3, 4, 5, and 6, each printed on its own line",
      "2, 4, and 6, each printed on its own line",
      "The single number 6, the largest even number in the list"
    ],
    correctAnswer: 2,
    explanation: "The Lambda with Streams example comments filter(n -> n % 2 == 0) as a lambda filter that keeps only even numbers, so from the list 1, 2, 3, 4, 5, 6 the forEach() lambda prints 2, 4, and 6, each on its own line.\n\n1, 3, and 5 are the odd numbers in the list, exactly the ones the filter condition n % 2 == 0 excludes rather than keeps.\n\nPrinting all six numbers would only happen without the filter step, but the pipeline applies filter() before forEach(), removing the odd numbers first.\n\nThe pipeline prints every even number individually rather than reducing them to a single largest value, so only 6 alone does not match its behavior."
  }
];

export default csc302Chapter3Questions;
