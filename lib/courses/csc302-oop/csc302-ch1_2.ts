import { QuestionV2 } from "@/lib/quiz-types";

const csc302Chapter2Questions: QuestionV2[] = [
  {
    id: "csc302_ch_1_2_001",
    course: "CSC 302",
    chapter: "Chapter 1.2",
    text: "A program runs this chain: if (age >= 18) prints \"You are an adult.\"; else if (age >= 13) prints \"You are a teenager.\"; else prints \"You are a child.\". Which condition must be true for \"You are an adult.\" to be printed?",
    options: [
      "age is greater than or equal to 18",
      "age is greater than or equal to 13 but less than 18",
      "age is less than 13",
      "age is exactly equal to 18"
    ],
    correctAnswer: 0,
    explanation: "The If-Else Statement example checks age against two thresholds using if, else if, and else. When age is greater than or equal to 18, the first branch runs and prints \"You are an adult.\"\n\nAge greater than or equal to 13 but less than 18 satisfies the else if branch instead, which prints \"You are a teenager.\"\n\nAge less than 13 falls through to the else branch, which prints \"You are a child.\"\n\nAge exactly equal to 18 still satisfies the first condition, age >= 18, so restricting the answer to exactly one value misstates the threshold the program actually tests."
  },
  {
    id: "csc302_ch_1_2_002",
    course: "CSC 302",
    chapter: "Chapter 1.2",
    text: "A program sets int age = 20; and then runs this chain: if (age >= 18) prints \"You are an adult.\"; else if (age >= 13) prints \"You are a teenager.\"; else prints \"You are a child.\". What does the program print?",
    options: [
      "You are a teenager.",
      "You are an adult.",
      "You are a child.",
      "You are 20 years old."
    ],
    correctAnswer: 1,
    explanation: "The If-Else Statement example prints \"You are an adult.\" whenever age is 20, because 20 satisfies the age >= 18 condition and only the first branch executes.\n\n\"You are a teenager.\" prints only when age is between 13 and 17 inclusive, which does not match age 20.\n\n\"You are a child.\" prints only when age is below 13, again not the case here.\n\nThe program never prints \"You are 20 years old.\"; it prints a category label rather than echoing the numeric age back."
  },
  {
    id: "csc302_ch_1_2_003",
    course: "CSC 302",
    chapter: "Chapter 1.2",
    text: "In a switch statement where each case block ends with a break statement, the break stops execution from continuing into the next case.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "The Switch Statement example places a break after each case's println call, including case 1, case 2, and case 3, so once a matching case runs, the break exits the switch rather than letting execution fall through to the case that follows it."
  },
  {
    id: "csc302_ch_1_2_004",
    course: "CSC 302",
    chapter: "Chapter 1.2",
    text: "A switch statement tests the variable day against case 1, case 2, and case 3, and also includes a default clause. What is the purpose of that default clause?",
    options: [
      "It runs first, before any of the numbered cases are checked",
      "It runs after every case regardless of whether one already matched",
      "It runs when the value of day does not match any of the listed case values",
      "It stops the switch statement from executing any case at all"
    ],
    correctAnswer: 2,
    explanation: "The Switch Statement example places default last and gives it the job of printing \"Other day\" only when day does not match case 1, case 2, or case 3.\n\nRunning first, before the numbered cases are checked, is not how the example behaves; the switch evaluates day against each case in order and only falls to default when nothing matches.\n\nRunning after every case regardless of a match is also wrong, since the break statements exit the switch once a case matches, so default is skipped entirely in that situation.\n\nDefault does not stop the switch from executing any case; it is itself a case that runs when no other one applies."
  },
  {
    id: "csc302_ch_1_2_005",
    course: "CSC 302",
    chapter: "Chapter 1.2",
    text: "A program sets int day = 3; and then runs a switch on day where case 1 prints Monday, case 2 prints Tuesday, case 3 prints Wednesday, and default prints Other day. What does the program print?",
    options: ["Tuesday", "Monday", "Other day", "Wednesday"],
    correctAnswer: 3,
    explanation: "The Switch Statement example maps day 3 to case 3, which prints \"Wednesday\" and then breaks out of the switch.\n\n\"Tuesday\" prints only when day is 2, not 3.\n\n\"Monday\" prints only when day is 1, not 3.\n\n\"Other day\" prints only when day matches none of the listed cases, but 3 does match case 3, so default never runs here."
  },
  {
    id: "csc302_ch_1_2_006",
    course: "CSC 302",
    chapter: "Chapter 1.2",
    text: "A loop is written as for (int i = 1; i <= 5; i++) { System.out.println(\"Count: \" + i); }. What determines how many times the loop body executes?",
    options: [
      "The loop condition, i <= 5, which is evaluated before each pass through the loop body",
      "The total number of println statements written inside the loop body, regardless of what the loop's condition or increment specify",
      "The value stored in the args array passed to main",
      "The order in which println statements appear inside the class"
    ],
    correctAnswer: 0,
    explanation: "The For Loop example starts i at 1 and repeats the body as long as i <= 5 holds, incrementing i by one after each pass, so the condition together with the starting value and increment governs the repeat count.\n\nThe number of println statements inside the body only affects what is printed on each pass, not how many passes occur.\n\nThe args array is not read anywhere in this loop and has no bearing on how many times it runs.\n\nThe order of println statements inside the class as a whole does not influence the loop's own repeat count either."
  },
  {
    id: "csc302_ch_1_2_007",
    course: "CSC 302",
    chapter: "Chapter 1.2",
    text: "Which of the following is an accurate statement about the for-each loop?",
    options: [
      "It gives the program direct access to the index of the element currently being visited",
      "It lets a program step through every element of an array or collection without managing an index variable",
      "All of these",
      "None of these"
    ],
    correctAnswer: 1,
    explanation: "The For-Each vs Traditional For Loop comparison lists needing the index position as a reason to choose the traditional for loop instead, which means the for-each loop does not expose the index of the current element, so the first statement does not hold.\n\nThe What is For-Each Loop section describes the for-each loop as a simplified way to iterate through arrays and collections, best used when a program only needs to read each element without tracking an index, which matches the second statement directly."
  },
  {
    id: "csc302_ch_1_2_008",
    course: "CSC 302",
    chapter: "Chapter 1.2",
    text: "A loop is written as for (int i = 1; i <= 5; i++) { System.out.println(\"Count: \" + i); }. How many times does the loop body run, and what is the last line it prints?",
    options: [
      "Four times, ending with Count: 4",
      "Five times, ending with Count: 5",
      "Six times, ending with Count: 6",
      "Five times, ending with Count: 4"
    ],
    correctAnswer: 1,
    explanation: "The For Loop example runs with i starting at 1 and continuing while i <= 5, so it executes for i equal to 1, 2, 3, 4, and 5, five passes total, with the final pass printing \"Count: 5\".\n\nFour passes ending at Count: 4 would require the condition to stop before i reaches 5, which is not how i <= 5 behaves.\n\nSix passes ending at Count: 6 would require the loop to continue past i equal to 5, but the condition fails once i becomes 6.\n\nFive passes are correct, but the last value printed matches the last value of i, which is 5, not 4."
  },
  {
    id: "csc302_ch_1_2_009",
    course: "CSC 302",
    chapter: "Chapter 1.2",
    text: "In what version of Java was the for-each loop introduced?",
    options: ["Java 8", "Java 2", "Java 5", "Java 11"],
    correctAnswer: 2,
    explanation: "The What is For-Each Loop section states that the enhanced for loop was introduced in Java 5, alongside describing it as cleaner and more readable than the traditional for loop.\n\nJava 8 is associated with later additions such as lambda expressions, not the introduction of for-each.\n\nJava 2 predates the for-each loop entirely.\n\nJava 11 is a much later release than the version the section credits with introducing for-each."
  },
  {
    id: "csc302_ch_1_2_010",
    course: "CSC 302",
    chapter: "Chapter 1.2",
    text: "Which line correctly opens a for-each loop over an array named numbers whose elements are int values?",
    options: [
      "for (int num = 0; num < numbers; num++)",
      "for (int num in numbers)",
      "foreach (int num : numbers)",
      "for (int num : numbers)"
    ],
    correctAnswer: 3,
    explanation: "The What is For-Each Loop section gives the syntax for (DataType variable : arrayOrCollection), which for an int array named numbers reads for (int num : numbers).\n\nfor (int num = 0; num < numbers; num++) is a traditional counting for loop, and it is also invalid here since numbers is an array, not a number to compare against.\n\nfor (int num in numbers) uses the word in, which is not the separator the syntax defines; the colon is what separates the variable from the collection.\n\nforeach (int num : numbers) uses a keyword, foreach, that does not appear in the syntax shown; Java's enhanced loop reuses the for keyword."
  },
  {
    id: "csc302_ch_1_2_011",
    course: "CSC 302",
    chapter: "Chapter 1.2",
    text: "A do-while loop checks its condition before running the loop body for the first time.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "The While and Do-While Loop example structures the do-while as do { ... } while (condition);, so the body written between do and while runs once before the condition is ever tested. The claim describes a while loop's behavior, not a do-while loop's."
  },
  {
    id: "csc302_ch_1_2_012",
    course: "CSC 302",
    chapter: "Chapter 1.2",
    text: "A program declares int[] numbers = {10, 20, 30, 40, 50};, prints \"Numbers in array:\", then runs for (int num : numbers) { System.out.println(num); }. What is printed after the \"Numbers in array:\" line?",
    options: [
      "10, then 20, then 30, then 40, then 50, each on its own line",
      "50, then 40, then 30, then 20, then 10, each on its own line",
      "The single value 150",
      "10 20 30 40 50 all on one line separated by spaces"
    ],
    correctAnswer: 0,
    explanation: "The For-Each Loop with Array example declares numbers as {10, 20, 30, 40, 50} and then loops with for (int num : numbers) { System.out.println(num); }, which prints each value on its own line in the array's stored order: 10, 20, 30, 40, 50.\n\nPrinting them in reverse order, 50 down to 10, would require iterating backward, which for-each does not do.\n\nThe single value 150 would be the sum of the elements, not what println(num) produces on each pass.\n\nPrinting all five values on one line separated by spaces would require System.out.print rather than println, but the example uses println, which adds a line break after each value."
  },
  {
    id: "csc302_ch_1_2_013",
    course: "CSC 302",
    chapter: "Chapter 1.2",
    text: "An ArrayList<String> named students holds Isaac, Ade, Chinedu, and Oluwa. The program runs for (String student : students) { System.out.println(\"- \" + student); }. What is printed for each student?",
    options: [
      "Only the student's name, with no other characters",
      "A hyphen followed by a space and the student's name",
      "The student's position in the list followed by their name",
      "The word Student followed by a colon and the name"
    ],
    correctAnswer: 1,
    explanation: "The For-Each Loop with ArrayList example loops with for (String student : students) and prints System.out.println(\"- \" + student), so each entry appears as a hyphen, a space, and the student's name.\n\nPrinting only the name with no other characters skips the leading hyphen and space that the concatenation adds.\n\nPrinting the student's position followed by their name would require tracking an index, which this for-each loop does not do.\n\nPrinting the word Student followed by a colon is not the prefix used; the example concatenates \"- \", not \"Student: \"."
  },
  {
    id: "csc302_ch_1_2_014",
    course: "CSC 302",
    chapter: "Chapter 1.2",
    text: "A program declares String[] fruits = {\"Apple\", \"Banana\", \"Mango\", \"Orange\"}; and runs for (String fruit : fruits) { System.out.println(\"- \" + fruit); }. What is printed for the fruit stored at the first position of the array?",
    options: [
      "- Mango",
      "Apple",
      "- Apple",
      "1. Apple"
    ],
    correctAnswer: 2,
    explanation: "The For-Each Loop with String Array example declares fruits as {\"Apple\", \"Banana\", \"Mango\", \"Orange\"} and prints each one with System.out.println(\"- \" + fruit), so the first element, Apple, appears as \"- Apple\".\n\n\"- Mango\" is what prints for the third element, not the first.\n\n\"Apple\" alone omits the leading hyphen and space that the print statement concatenates onto every fruit.\n\n\"1. Apple\" implies a numbered list format that the example's print statement does not produce; it always prepends a hyphen, not a number."
  },
  {
    id: "csc302_ch_1_2_015",
    course: "CSC 302",
    chapter: "Chapter 1.2",
    text: "A program declares int[] numbers = {5, 10, 15, 20, 25}; and then runs for (int num : numbers) { num = num * 2; }. Why does the array still hold its original values after this loop runs?",
    options: [
      "The array was declared as final, which prevents any of its values from changing",
      "The multiplication num * 2 throws an exception that is silently caught",
      "The for-each loop never actually executes its body in this program",
      "The for-each loop's variable num holds a copy of each element, so reassigning num does not change the array itself"
    ],
    correctAnswer: 3,
    explanation: "The For-Each Loop limitations example reassigns num = num * 2 inside the loop and comments that this does NOT change the original array, because num is a copy of each element rather than a reference back into the array, which the second loop confirms by printing the unchanged values 5 10 15 20 25.\n\nThe array is not declared final in this example; final has nothing to do with why the values stay the same here.\n\nNo exception is thrown or caught by the multiplication; it executes normally on the local copy.\n\nThe loop body does execute on every pass, which is exactly why the assignment happens, it just has no effect on the original array."
  },
  {
    id: "csc302_ch_1_2_016",
    course: "CSC 302",
    chapter: "Chapter 1.2",
    text: "Which situation calls for a traditional for loop instead of a for-each loop?",
    options: [
      "The program needs to modify elements in place or iterate in reverse order",
      "The program only needs to read each element once, in order, without tracking a position",
      "The program is iterating over an ArrayList of strings",
      "The program does not need to know each element's index"
    ],
    correctAnswer: 0,
    explanation: "The For-Each vs Traditional For Loop comparison lists wanting to modify elements in the array, needing to iterate in reverse, and needing to skip elements using an index as reasons to use the traditional for loop.\n\nOnly needing to read each element once, in order, is listed as a reason to prefer for-each instead.\n\nIterating over an ArrayList of strings is explicitly listed as a case where for-each works, since it applies to both arrays and collections.\n\nNot needing to know each element's index is also listed as a reason to prefer for-each, the opposite of what calls for a traditional loop."
  },
  {
    id: "csc302_ch_1_2_017",
    course: "CSC 302",
    chapter: "Chapter 1.2",
    text: "A program runs int i = 1; while (i <= 3) { System.out.println(\"While: \" + i); i++; }, and a do-while loop follows it. What is the last line printed by this while loop?",
    options: [
      "While: 4",
      "While: 3",
      "While: 2",
      "While: 1"
    ],
    correctAnswer: 1,
    explanation: "The While and Do-While Loop example starts i at 1 and repeats while i <= 3, printing \"While: \" + i and incrementing i each pass, so it prints While: 1, While: 2, and finally While: 3 before the condition fails and the loop ends.\n\nWhile: 4 never prints, since the loop stops once i exceeds 3.\n\nWhile: 2 is printed, but it is the middle line, not the last one.\n\nWhile: 1 is printed first, not last."
  },
  {
    id: "csc302_ch_1_2_018",
    course: "CSC 302",
    chapter: "Chapter 1.2",
    text: "A program runs int j = 1; do { System.out.println(\"Do-While: \" + j); j++; } while (j <= 3);. How many lines does this do-while loop print, and what is the first one?",
    options: [
      "Two lines, starting with Do-While: 1",
      "Three lines, starting with Do-While: 1",
      "Three lines, starting with Do-While: 0",
      "Four lines, starting with Do-While: 1"
    ],
    correctAnswer: 1,
    explanation: "The While and Do-While Loop example starts j at 1 and runs do { println(\"Do-While: \" + j); j++; } while (j <= 3);, printing Do-While: 1, Do-While: 2, and Do-While: 3, three lines total, with the first being Do-While: 1.\n\nTwo lines would undercount the passes; the loop body runs once for j equal to 1, 2, and 3 before the condition fails.\n\nThree lines is the right count, but j starts at 1, not 0, so the first line printed is Do-While: 1, not Do-While: 0.\n\nFour lines would require the loop to run once more after j exceeds 3, which the while (j <= 3) condition prevents."
  },
  {
    id: "csc302_ch_1_2_019",
    course: "CSC 302",
    chapter: "Chapter 1.2",
    text: "Which keyword, placed at the end of a case block, prevents execution from continuing into the next case after a match is found?",
    options: ["default", "return", "continue", "break"],
    correctAnswer: 3,
    explanation: "The Switch Statement example places break at the end of case 1, case 2, and case 3, which exits the switch statement immediately after a matching case finishes, stopping execution from continuing into the next case.\n\ndefault is the fallback branch that runs when no case matches; it does not control fall-through between cases.\n\nreturn does not appear anywhere in this switch statement.\n\ncontinue also does not appear in this example, and in Java it controls loop iteration rather than switch fall-through."
  },
  {
    id: "csc302_ch_1_2_020",
    course: "CSC 302",
    chapter: "Chapter 1.2",
    text: "What does the line int[] numbers = {10, 20, 30, 40, 50}; declare?",
    options: [
      "An array of five integers containing 10, 20, 30, 40, and 50, in that order",
      "Five separate integer variables named numbers",
      "A single integer variable initialized to the sum of five numbers",
      "An ArrayList of five integers"
    ],
    correctAnswer: 0,
    explanation: "The Arrays in Java example declares numbers as an int array holding five values, 10, 20, 30, 40, and 50, stored in that order at indexes 0 through 4.\n\nThe declaration creates a single array variable, not five separate integer variables sharing the same name.\n\nThe values are stored individually as elements, not combined into a single summed integer.\n\nThe square-bracket syntax int[] declares a plain array, not an ArrayList, which would instead use the ArrayList<Integer> type."
  },
  {
    id: "csc302_ch_1_2_021",
    course: "CSC 302",
    chapter: "Chapter 1.2",
    text: "Given the declaration int[] numbers = {10, 20, 30, 40, 50};, what value does numbers[0] refer to?",
    options: ["50", "10", "20", "0"],
    correctAnswer: 1,
    explanation: "The Arrays in Java example declares numbers as {10, 20, 30, 40, 50}, and array indexing starts at 0, so numbers[0] refers to the first stored value, 10, which is exactly what the program prints as \"First element: 10\".\n\n50 is stored at the last index, 4, not index 0.\n\n20 is stored at index 1, one position after the first element.\n\n0 is the index value itself, not the element stored at that index."
  },
  {
    id: "csc302_ch_1_2_022",
    course: "CSC 302",
    chapter: "Chapter 1.2",
    text: "Which of the following is an accurate statement about an array declared as int[] numbers = {10, 20, 30, 40, 50};?",
    options: [
      "Accessing numbers[0] retrieves the first value stored in the array, which is 10",
      "Reassigning a value inside a for-each loop over numbers permanently changes the stored elements",
      "All of these",
      "None of these"
    ],
    correctAnswer: 0,
    explanation: "The Arrays in Java example prints \"First element: \" + numbers[0], and since numbers is {10, 20, 30, 40, 50}, index 0 holds 10, confirming that numbers[0] retrieves the first stored value.\n\nThe For-Each Loop limitations example shows that reassigning the loop variable inside a for-each loop, such as num = num * 2, does not change the original array, since the loop variable holds only a copy of each element, so the second statement is contradicted rather than supported."
  },
  {
    id: "csc302_ch_1_2_023",
    course: "CSC 302",
    chapter: "Chapter 1.2",
    text: "An array declared as int[] numbers = {10, 20, 30, 40, 50}; stores five elements. Which index refers to its last element, the value 50?",
    options: ["5", "0", "4", "50"],
    correctAnswer: 2,
    explanation: "The Arrays in Java example stores five elements at indexes 0, 1, 2, 3, and 4, so the last element, 50, is stored at index 4, since array indexing runs from 0 up to the element count minus one.\n\nIndex 5 would be out of bounds for an array with only five elements, since valid indexes stop at 4.\n\nIndex 0 refers to the first element, 10, not the last one.\n\n50 is the value stored at the last index, not the index number itself."
  },
  {
    id: "csc302_ch_1_2_024",
    course: "CSC 302",
    chapter: "Chapter 1.2",
    text: "Given the declaration int[] numbers = {10, 20, 30, 40, 50};, what line does System.out.println(\"First element: \" + numbers[0]); print?",
    options: [
      "First element: 50",
      "First element: 0",
      "numbers[0]: 10",
      "First element: 10"
    ],
    correctAnswer: 3,
    explanation: "The Arrays in Java example concatenates the string \"First element: \" with numbers[0], and since numbers[0] is 10, the printed line reads \"First element: 10\".\n\n\"First element: 50\" would require index 0 to hold 50, but 50 is stored at the last index instead.\n\n\"First element: 0\" would require numbers[0] to equal 0, but the array's first stored value is 10.\n\n\"numbers[0]: 10\" changes the literal text of the label, but the program's string literal is \"First element: \", not \"numbers[0]: \"."
  },
  {
    id: "csc302_ch_1_2_025",
    course: "CSC 302",
    chapter: "Chapter 1.2",
    text: "What data type are the values stored in an array declared as int[] numbers = {10, 20, 30, 40, 50};?",
    options: ["double", "String", "int", "long"],
    correctAnswer: 2,
    explanation: "The Arrays in Java example declares the array as int[] numbers, so every element it stores, including 10, 20, 30, 40, and 50, is an int.\n\ndouble would require the declaration double[] numbers, which is not what the example uses.\n\nString would require quoted text values and a String[] declaration, but the array holds whole numbers without quotes.\n\nlong would require an explicit long[] declaration and typically an L suffix on the literals, neither of which appears here."
  },
  {
    id: "csc302_ch_1_2_026",
    course: "CSC 302",
    chapter: "Chapter 1.2",
    text: "A program declares int[] numbers = {10, 20, 30, 40, 50};, prints the first element directly with numbers[0], and then runs for (int num : numbers) { System.out.println(num); }. What does this second step do?",
    options: [
      "It sorts the array before printing it again",
      "It uses a for-each loop to print every element of the array in order",
      "It removes the first element and prints the remaining four",
      "It converts the array into an ArrayList before printing it"
    ],
    correctAnswer: 1,
    explanation: "The Arrays in Java example follows the numbers[0] print statement with a for-each loop, for (int num : numbers) { System.out.println(num); }, which prints every element of the array in its stored order.\n\nNo sorting method is called anywhere in the example; the elements print in their original declared order.\n\nNo element is removed; the loop iterates over all five elements, including the first one again.\n\nThe array is never converted to an ArrayList in this example; it remains a plain int array throughout."
  },
  {
    id: "csc302_ch_1_2_027",
    course: "CSC 302",
    chapter: "Chapter 1.2",
    text: "A class defines static void greet() { System.out.println(\"Hello!\"); }. What does calling greet() print?",
    options: ["Hello, World!", "Greetings!", "Hello!", "Hi!"],
    correctAnswer: 2,
    explanation: "The Methods and Method Overloading example defines greet() as static void greet() { System.out.println(\"Hello!\"); }, so calling it prints exactly \"Hello!\".\n\n\"Hello, World!\" is not the string literal used in this method's body.\n\n\"Greetings!\" also does not match the literal text passed to println inside greet().\n\n\"Hi!\" is a shorter, different greeting than the one actually written in the source code."
  },
  {
    id: "csc302_ch_1_2_028",
    course: "CSC 302",
    chapter: "Chapter 1.2",
    text: "A class defines both static int add(int a, int b) { return a + b; } and static double add(double a, double b) { return a + b; }. What allows these two different methods to share the name add?",
    options: [
      "Method overriding, since a subclass replaces the parent class's version",
      "Constructor chaining, since one method calls the other internally",
      "Static binding, since the compiler picks the version used everywhere",
      "Method overloading, since the two methods differ in the data types of their parameters"
    ],
    correctAnswer: 3,
    explanation: "The Methods and Method Overloading example defines add(int a, int b) and add(double a, double b) as an example of method overloading, where methods share a name but are distinguished by their parameter types, letting the compiler choose the matching version based on the arguments supplied.\n\nMethod overriding involves a subclass replacing an inherited method, but this example has no subclass or inheritance involved.\n\nConstructor chaining refers to one constructor invoking another, and neither add method calls the other.\n\nStatic binding is not what makes two same-named methods coexist here; overloading, resolved by parameter type, is what makes it possible."
  },
  {
    id: "csc302_ch_1_2_029",
    course: "CSC 302",
    chapter: "Chapter 1.2",
    text: "A class defines static int add(int a, int b) { return a + b; }. What does System.out.println(\"Sum (int): \" + add(5, 3)); print?",
    options: [
      "Sum (int): 15",
      "Sum (int): 53",
      "Sum (int): 8",
      "Sum (double): 8"
    ],
    correctAnswer: 2,
    explanation: "The Methods and Method Overloading example calls add(5, 3), which matches the int version, return a + b, giving 5 + 3 = 8, printed as \"Sum (int): 8\".\n\n\"Sum (int): 15\" would result from multiplying rather than adding the two arguments, which is not what the method does.\n\n\"Sum (int): 53\" would result from concatenating the digits rather than adding the numeric values.\n\n\"Sum (double): 8\" mislabels the result; since both arguments are int literals, this call resolves to the int overload, whose label is \"Sum (int): \"."
  },
  {
    id: "csc302_ch_1_2_030",
    course: "CSC 302",
    chapter: "Chapter 1.2",
    text: "A recursive method is written as: public static long factorial(int n) { if (n == 0 || n == 1) { return 1; } return n * factorial(n - 1); }. This method returns 1 immediately, without a further recursive call, when n equals 0 or n equals 1.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "The Simple Recursion Example: Factorial code shows the base case as if (n == 0 || n == 1) { return 1; }, which returns immediately for either value without calling factorial again. Only when n is greater than 1 does the method reach the recursive case, return n * factorial(n - 1)."
  },
  {
    id: "csc302_ch_1_2_031",
    course: "CSC 302",
    chapter: "Chapter 1.2",
    text: "A class defines static double add(double a, double b) { return a + b; }. What does System.out.println(\"Sum (double): \" + add(5.5, 3.2)); print?",
    options: [
      "Sum (double): 8.5",
      "Sum (double): 8.7",
      "Sum (int): 8.7",
      "Sum (double): 87"
    ],
    correctAnswer: 1,
    explanation: "The Methods and Method Overloading example calls add(5.5, 3.2), which matches the double version, return a + b, giving 5.5 + 3.2 = 8.7, printed as \"Sum (double): 8.7\".\n\n\"Sum (double): 8.5\" does not match the sum of 5.5 and 3.2.\n\n\"Sum (int): 8.7\" mislabels the result; passing two double literals resolves to the double overload, whose label is \"Sum (double): \", not \"Sum (int): \".\n\n\"Sum (double): 87\" drops the decimal point, but the method returns a double, so the fractional value 8.7 is printed as written."
  },
  {
    id: "csc302_ch_1_2_032",
    course: "CSC 302",
    chapter: "Chapter 1.2",
    text: "A main method calls greet();, which prints Hello!, then runs System.out.println(\"Sum (int): \" + add(5, 3)); and System.out.println(\"Sum (double): \" + add(5.5, 3.2));, in that source order. In what order does it print its three lines of output?",
    options: [
      "Sum (int): 8, then Sum (double): 8.7, then Hello!",
      "Hello!, then Sum (double): 8.7, then Sum (int): 8",
      "Hello!, then Sum (int): 8, then Sum (double): 8.7",
      "Sum (double): 8.7, then Hello!, then Sum (int): 8"
    ],
    correctAnswer: 2,
    explanation: "The Methods and Method Overloading example's main method calls greet() first, printing \"Hello!\", then prints \"Sum (int): \" + add(5, 3), giving \"Sum (int): 8\", and finally prints \"Sum (double): \" + add(5.5, 3.2), giving \"Sum (double): 8.7\", in that order.\n\nStarting with Sum (int): 8 reverses the actual first call, which is greet(), not add(5, 3).\n\nPrinting Sum (double) before Sum (int) reverses the order the two add calls appear in main.\n\nEnding with Sum (int): 8 after Sum (double): 8.7 also reverses the sequence in which the two add calls are written."
  },
  {
    id: "csc302_ch_1_2_033",
    course: "CSC 302",
    chapter: "Chapter 1.2",
    text: "What is recursion, as a programming technique?",
    options: [
      "A technique where a loop repeats a fixed number of times using a counter variable",
      "A technique where one class inherits fields and methods from another class",
      "A technique where a method's parameter list is changed to accept different types",
      "A technique where a method calls itself to solve a smaller version of the same problem"
    ],
    correctAnswer: 3,
    explanation: "The What is Recursion section defines recursion as a programming technique where a method calls itself to solve a smaller version of the same problem, breaking a complex problem into smaller, similar sub-problems until a base case is reached.\n\nRepeating a fixed number of times with a counter variable describes a traditional for loop, which is a form of iteration rather than recursion.\n\nInheriting fields and methods from another class describes class inheritance, a different Java concept not discussed in this section.\n\nChanging a method's parameter list to accept different types describes method overloading, not recursion."
  },
  {
    id: "csc302_ch_1_2_034",
    course: "CSC 302",
    chapter: "Chapter 1.2",
    text: "Why must a recursive method include a base case?",
    options: [
      "Without a base case, the method keeps calling itself indefinitely instead of stopping",
      "Without a base case, the method cannot accept any parameters",
      "Without a base case, the method runs faster than an iterative loop solving the same problem",
      "Without a base case, the compiler refuses to compile the class"
    ],
    correctAnswer: 0,
    explanation: "The What is Recursion section states that a recursive method must have a base case to stop recursion, and the Important Rules for Safe Recursion list warns that without one, the result is infinite recursion, since nothing tells the method to stop calling itself.\n\nAccepting parameters has nothing to do with the base case; recursive methods such as factorial, sum, and findMax all take parameters regardless of whether a base case is present.\n\nA missing base case does not make recursion faster; the same rules describe recursion without a base case as a source of risk, specifically a StackOverflowError, not improved performance.\n\nA missing base case is a logical flaw, not a syntax error, so it does not by itself prevent the class from compiling."
  },
  {
    id: "csc302_ch_1_2_035",
    course: "CSC 302",
    chapter: "Chapter 1.2",
    text: "Which of the following is true about recursive methods in general?",
    options: [
      "A recursive method needs a base case that stops it from calling itself indefinitely",
      "A recursive method typically uses more memory than an equivalent loop because of the call stack",
      "All of these",
      "None of these"
    ],
    correctAnswer: 2,
    explanation: "The What is Recursion section and the Important Rules for Safe Recursion list both state that a recursive method must have a base case to stop recursion, confirming the first statement.\n\nThe Recursion vs Iteration comparison lists recursion's memory usage as high because of the call stack, against iteration's low memory usage, confirming the second statement as well, so both specific statements are supported and \"All of these\" is correct."
  },
  {
    id: "csc302_ch_1_2_036",
    course: "CSC 302",
    chapter: "Chapter 1.2",
    text: "Which set of problems is listed as commonly solved using recursion?",
    options: [
      "Sorting an array using a single for loop",
      "Factorial, Fibonacci, Binary Search, Factor combinations, and Tree traversals",
      "Reading a file line by line with a while loop",
      "Printing the elements of an ArrayList with a for-each loop"
    ],
    correctAnswer: 1,
    explanation: "The Important Rules for Safe Recursion section closes by naming Factorial, Fibonacci, Binary Search, Factor combinations, and Tree traversals as common recursive problems.\n\nSorting with a single for loop describes an iterative technique, not one of the problems the section lists as commonly recursive.\n\nReading a file line by line with a while loop is an iteration example as well and is not among the listed recursive problems.\n\nPrinting an ArrayList with a for-each loop is the for-each iteration technique covered earlier, not part of this list of recursive problems."
  },
  {
    id: "csc302_ch_1_2_037",
    course: "CSC 302",
    chapter: "Chapter 1.2",
    text: "A recursive method is written as: public static long factorial(int n) { if (n == 0 || n == 1) { return 1; } return n * factorial(n - 1); }. What condition triggers its base case?",
    options: [
      "n is equal to 0 only",
      "n is less than or equal to 5",
      "n is equal to 0 or n is equal to 1",
      "n is greater than 1"
    ],
    correctAnswer: 2,
    explanation: "The Simple Recursion Example: Factorial code checks if (n == 0 || n == 1) as its base case, so the base case triggers when n equals 0 or when n equals 1.\n\nn equal to 0 only leaves out n equal to 1, which the code also treats as a base case.\n\nn less than or equal to 5 is not the condition written in the code; the specific comparison is against 0 and 1, not a range up to 5.\n\nn greater than 1 is the condition under which the recursive case runs instead, the opposite of the base case."
  },
  {
    id: "csc302_ch_1_2_038",
    course: "CSC 302",
    chapter: "Chapter 1.2",
    text: "A recursive method is written as: public static long factorial(int n) { if (n == 0 || n == 1) { return 1; } return n * factorial(n - 1); }. What does its recursive case return when the base case does not apply?",
    options: [
      "n added to the result of factorial(n - 1)",
      "n multiplied by the result of factorial(n + 1)",
      "The result of factorial(n - 1) alone, without multiplying by n",
      "n multiplied by the result of factorial(n - 1)"
    ],
    correctAnswer: 3,
    explanation: "The Simple Recursion Example: Factorial code writes the recursive case as return n * factorial(n - 1);, so it returns n multiplied by the result of calling factorial on n - 1.\n\nAdding n to factorial(n - 1) uses the wrong operator; the code multiplies rather than adds.\n\nMultiplying by factorial(n + 1) moves in the wrong direction; the recursive call must decrease n toward the base case, so it calls factorial(n - 1), not factorial(n + 1).\n\nReturning factorial(n - 1) alone drops the multiplication by n entirely, which would not compute a factorial correctly."
  },
  {
    id: "csc302_ch_1_2_039",
    course: "CSC 302",
    chapter: "Chapter 1.2",
    text: "A recursive method is written as: public static long factorial(int n) { if (n == 0 || n == 1) { return 1; } return n * factorial(n - 1); }. What value does factorial(5) produce?",
    options: ["100", "24", "15", "120"],
    correctAnswer: 3,
    explanation: "The Simple Recursion Example: Factorial code computes factorial(5) as 5 * 4 * 3 * 2 * 1, which equals 120, matching the program's own printed output, \"Factorial of 5 is: 120\".\n\n100 is not the product of 5 multiplied down to 1.\n\n24 is the value of factorial(4), one step short of the full unwind to factorial(5).\n\n15 is the sum of 5 + 4 + 3 + 2 + 1, not the product that factorial computes."
  },
  {
    id: "csc302_ch_1_2_040",
    course: "CSC 302",
    chapter: "Chapter 1.2",
    text: "Recursion is generally more memory-efficient than iteration because it avoids using the call stack.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "The Recursion vs Iteration comparison lists recursion's memory usage as high because each call adds a frame to the call stack, while iteration's memory usage is low. Recursion relies on the call stack rather than avoiding it, so the claim reverses the actual comparison."
  },
  {
    id: "csc302_ch_1_2_041",
    course: "CSC 302",
    chapter: "Chapter 1.2",
    text: "In the visual breakdown of factorial(5), how is factorial(4) expressed?",
    options: [
      "4 multiplied by factorial(5)",
      "4 multiplied by factorial(3)",
      "5 multiplied by factorial(3)",
      "4 multiplied by factorial(4)"
    ],
    correctAnswer: 1,
    explanation: "The How Recursion Works visual breakdown lists factorial(4) = 4 x factorial(3) as one of its steps, showing each call expressed as its own value multiplied by the factorial of one less.\n\n4 multiplied by factorial(5) moves in the wrong direction, since factorial(5) is the original call that produced factorial(4), not the other way around.\n\n5 multiplied by factorial(3) mismatches the multiplier with the wrong call; the breakdown pairs 5 with factorial(4), not with factorial(3).\n\n4 multiplied by factorial(4) would have the call reference itself, which is not how the breakdown's chain of decreasing calls is written."
  },
  {
    id: "csc302_ch_1_2_042",
    course: "CSC 302",
    chapter: "Chapter 1.2",
    text: "A recursive method is written as: public static int sum(int n) { if (n == 1) { return 1; } return n + sum(n - 1); }. What is its base case?",
    options: [
      "When n equals 0, the method returns 0",
      "When n equals 10, the method returns 55",
      "When n equals 1, the method returns 1",
      "When n is negative, the method returns -1"
    ],
    correctAnswer: 2,
    explanation: "The Recursion Example: Sum of Natural Numbers code checks if (n == 1) { return 1; } as its base case, so it returns 1 once n reaches 1.\n\nn equal to 0 returning 0 is not the condition written in the code; the base case is tied to n equal to 1, not 0.\n\nn equal to 10 returning 55 describes the final result of the whole computation, not the base case that stops the recursive calls.\n\nn being negative returning -1 is never checked in the code at all."
  },
  {
    id: "csc302_ch_1_2_043",
    course: "CSC 302",
    chapter: "Chapter 1.2",
    text: "A recursive method is written as: public static int sum(int n) { if (n == 1) { return 1; } return n + sum(n - 1); }. What does its recursive case return?",
    options: [
      "n multiplied by the result of sum(n - 1)",
      "n plus the result of sum(n + 1)",
      "The result of sum(n - 1) alone, without adding n",
      "n plus the result of sum(n - 1)"
    ],
    correctAnswer: 3,
    explanation: "The Recursion Example: Sum of Natural Numbers code writes the recursive case as return n + sum(n - 1);, so it adds n to the result of calling sum on n - 1.\n\nMultiplying n by sum(n - 1) uses the wrong operator; the code adds rather than multiplies.\n\nAdding n to sum(n + 1) moves in the wrong direction; the recursive call must decrease n toward the base case, so it calls sum(n - 1), not sum(n + 1).\n\nReturning sum(n - 1) alone drops the addition of n entirely, which would not compute the correct running total."
  },
  {
    id: "csc302_ch_1_2_044",
    course: "CSC 302",
    chapter: "Chapter 1.2",
    text: "A recursive method is written as: public static int sum(int n) { if (n == 1) { return 1; } return n + sum(n - 1); }. What value does sum(10) produce as the sum of the first 10 numbers?",
    options: ["45", "100", "50", "55"],
    correctAnswer: 3,
    explanation: "The Recursion Example: Sum of Natural Numbers code computes sum(10) as 10 + 9 + 8 + ... + 1, which equals 55, matching the program's own printed output, \"Sum of first 10 numbers = 55\".\n\n45 is the sum of the first 9 numbers, one short of the full sequence down to 1.\n\n100 does not match the sum of the integers from 1 through 10.\n\n50 is also not the correct total of the first 10 natural numbers."
  },
  {
    id: "csc302_ch_1_2_045",
    course: "CSC 302",
    chapter: "Chapter 1.2",
    text: "Which of the following is true about recursive methods in general?",
    options: [
      "Recursive solutions run faster than an equivalent loop because they skip repeated condition checks",
      "A method can only call itself recursively if it takes no parameters",
      "All of these",
      "None of these"
    ],
    correctAnswer: 3,
    explanation: "The Recursion vs Iteration comparison lists recursion's performance as slower than iteration because of function call overhead, which directly contradicts the claim that recursive solutions run faster.\n\nFactorialRecursion's factorial(int n), SumRecursion's sum(int n), and MaxInArray's findMax(int[] arr, int index) each take one or more parameters and still call themselves recursively, contradicting the claim that a method needs no parameters to call itself. Since both specific statements are contradicted by the source, \"None of these\" is correct."
  },
  {
    id: "csc302_ch_1_2_046",
    course: "CSC 302",
    chapter: "Chapter 1.2",
    text: "A recursive method is written as: public static int findMax(int[] arr, int index) { if (index == arr.length - 1) { return arr[index]; } int maxOfRest = findMax(arr, index + 1); return Math.max(arr[index], maxOfRest); }. What is its base case?",
    options: [
      "When index equals 0, the method returns arr[0] without making a recursive call",
      "When index equals arr.length - 1, the method returns arr[index]",
      "When arr is empty, the method returns 0",
      "When index equals arr.length, the method returns arr[index]"
    ],
    correctAnswer: 1,
    explanation: "The Recursion with Array - Find Maximum code checks if (index == arr.length - 1) { return arr[index]; }, so the base case triggers once index reaches the last valid position in the array, returning that final element.\n\nIndex equal to 0 returning arr[0] describes the starting call, not the condition that stops the recursion.\n\nAn empty array returning 0 is never checked in this code; the base case is defined in terms of reaching the last index, not an empty array.\n\nIndex equal to arr.length would be one past the last valid position, which would cause an out-of-bounds access rather than match the base case as written."
  },
  {
    id: "csc302_ch_1_2_047",
    course: "CSC 302",
    chapter: "Chapter 1.2",
    text: "A recursive method is written as: public static int findMax(int[] arr, int index) { if (index == arr.length - 1) { return arr[index]; } int maxOfRest = findMax(arr, index + 1); return Math.max(arr[index], maxOfRest); }. Called on the array {12, 45, 7, 89, 23, 56} starting at index 0, what value does it produce as the maximum number?",
    options: ["56", "45", "89", "12"],
    correctAnswer: 2,
    explanation: "The Recursion with Array - Find Maximum code recursively compares each element against the largest of the rest using Math.max, and across {12, 45, 7, 89, 23, 56}, 89 is greater than every other element, so findMax(numbers, 0) returns 89, matching the program's own printed output.\n\n56 is the last element in the array and the base case's return value, but comparisons at earlier indexes replace it with the larger value 89 as the recursion unwinds.\n\n45 is larger than some elements but smaller than 89, so it is not the overall maximum.\n\n12 is the first element and the smallest of the group, not the maximum."
  },
  {
    id: "csc302_ch_1_2_048",
    course: "CSC 302",
    chapter: "Chapter 1.2",
    text: "How does the Recursion vs Iteration comparison describe the readability of each approach?",
    options: [
      "Recursion is usually harder to read than iteration",
      "Iteration is usually more elegant than recursion, while recursion can be longer but more straightforward",
      "Both approaches are described as equally readable",
      "Recursion is usually cleaner and more elegant, while iteration can be longer but more straightforward"
    ],
    correctAnswer: 3,
    explanation: "The Recursion vs Iteration comparison lists recursion's readability as usually cleaner and elegant, while describing iteration as can be longer but straightforward.\n\nDescribing recursion as usually harder to read reverses what the comparison states about recursion's readability.\n\nDescribing iteration as usually more elegant also reverses the comparison, which credits recursion, not iteration, with being cleaner and more elegant.\n\nThe comparison does not describe the two approaches as equally readable; it draws a distinction between them on this row of the table."
  },
  {
    id: "csc302_ch_1_2_049",
    course: "CSC 302",
    chapter: "Chapter 1.2",
    text: "Which pair correctly matches each approach with the kind of problem it is best suited for, per the Recursion vs Iteration comparison?",
    options: [
      "Recursion for tree traversal and factorial-style problems, iteration for simple loops and large data",
      "Recursion for simple loops and large data, iteration for tree traversal and factorial-style problems",
      "Both recursion and iteration are best suited for exactly the same kinds of problems",
      "Recursion for large data and factorial-style problems, iteration for simple loops and tree traversal"
    ],
    correctAnswer: 0,
    explanation: "The Recursion vs Iteration comparison lists recursion's best-for row as tree traversal, factorial, Fibonacci, and Tower of Hanoi, while listing iteration's best-for row as simple loops and large data.\n\nSwapping the two, recursion for simple loops and large data with iteration for tree traversal, reverses what the table actually pairs with each approach.\n\nThe table does not treat the two approaches as suited to the same kinds of problems; it lists distinct best-for categories for each.\n\nPairing recursion with large data and iteration with tree traversal also crosses the categories the table assigns to each approach."
  },
  {
    id: "csc302_ch_1_2_050",
    course: "CSC 302",
    chapter: "Chapter 1.2",
    text: "Which rule for safe recursion warns that large inputs may cause a StackOverflowError even when a base case exists?",
    options: [
      "Always define a base case, since without one recursion never stops",
      "Be careful with large inputs, since they may cause a StackOverflowError",
      "Use recursion only when it makes the code significantly cleaner",
      "Replace recursion with iteration whenever performance matters more than readability"
    ],
    correctAnswer: 1,
    explanation: "The Important Rules for Safe Recursion list includes being careful with large inputs, since they may cause a StackOverflowError, a risk that exists separately from whether a base case is present.\n\nAlways defining a base case addresses infinite recursion, a different rule from the risk that large inputs pose even to a method that already has a base case.\n\nUsing recursion only when it makes the code significantly cleaner is a separate rule about when recursion is worth choosing, not a warning about large inputs.\n\nReplacing recursion with iteration for better performance is listed as a possible improvement, not specifically framed as a warning about StackOverflowError from large inputs."
  }
];

export default csc302Chapter2Questions;
