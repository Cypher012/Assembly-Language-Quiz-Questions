import { QuestionV2 } from "@/lib/quiz-types";

const csc302Chapter4Questions: QuestionV2[] = [
  {
    id: "csc302_ch_1_4_001",
    course: "CSC 302",
    chapter: "Chapter 1.4",
    text: "When code writes String greeting = new String(\"Welcome\"); instead of String greeting = \"Welcome\";, what happens differently?",
    options: [
      "The assignment throws a compile time error",
      "The variable becomes a StringBuilder rather than a String",
      "A brand new String object is created in memory instead of reusing an existing string from the string pool",
      "The text is automatically converted to uppercase before it is stored"
    ],
    correctAnswer: 2,
    explanation: "The String Basics example shows new String(\"Welcome\") allocating a fresh object in memory rather than reusing a matching literal already sitting in the string pool.\n\nThere is no compile time error, since this is valid Java syntax used directly in the example.\n\nThe variable stays declared as a String, not a StringBuilder, since new String(...) still produces a String object.\n\nNothing in this construct converts the text to uppercase; that behavior belongs to a different method entirely."
  },
  {
    id: "csc302_ch_1_4_002",
    course: "CSC 302",
    chapter: "Chapter 1.4",
    text: "Given String name = \"Isaac\";, what does the call name.length() return?",
    options: [
      "The total number of characters in the string after converting every letter to uppercase form",
      "The number of characters in the string, which is 5 for \"Isaac\"",
      "A new uppercase copy of the string",
      "The string's hash code value"
    ],
    correctAnswer: 1,
    explanation: "The String Basics example calls name.length() to report how many characters the string holds, which is 5 for \"Isaac\".\n\nlength() does not perform any case conversion, so the option describing an uppercase conversion count misstates what the method does.\n\nReturning an uppercase copy describes toUpperCase(), a separate method shown in the same example.\n\nlength() returns a character count, not a hash code, which is an unrelated numeric identifier for the object."
  },
  {
    id: "csc302_ch_1_4_003",
    course: "CSC 302",
    chapter: "Chapter 1.4",
    text: "Given String name = \"Isaac\";, what does name.toUpperCase() produce?",
    options: [
      "The original string \"Isaac\" is modified in place so every letter becomes uppercase permanently",
      "A new String containing every letter of \"Isaac\" converted to uppercase, namely \"ISAAC\"",
      "The length of the string as an integer",
      "A boolean indicating success"
    ],
    correctAnswer: 1,
    explanation: "The String Basics example calls name.toUpperCase() to produce a new String, \"ISAAC\", with every letter converted to uppercase.\n\nStrings are immutable, so the original \"Isaac\" value is not modified in place; a new object is returned instead.\n\nReturning a length as an integer describes length(), a different method shown in the same example.\n\ntoUpperCase() returns a String, not a boolean, so no success flag is produced."
  },
  {
    id: "csc302_ch_1_4_004",
    course: "CSC 302",
    chapter: "Chapter 1.4",
    text: "Given String name = \"Isaac\"; and String greeting = new String(\"Welcome\");, what does name + \" \" + greeting produce?",
    options: [
      "A compile time error because String objects created with new cannot be combined using the plus operator",
      "An array holding the two original separate string values without joining them",
      "A single new string joining the two values, \"Isaac Welcome\"",
      "Nothing is printed"
    ],
    correctAnswer: 2,
    explanation: "The String Basics example uses the plus operator to concatenate name and greeting into a single new string, \"Isaac Welcome\".\n\nThere is no compile time error, since the plus operator works on any String regardless of whether it came from a literal or from new String(...).\n\nConcatenation produces a single String, not an array of separate values.\n\nThe example does print output, since the concatenated result is passed to System.out.println."
  },
  {
    id: "csc302_ch_1_4_005",
    course: "CSC 302",
    chapter: "Chapter 1.4",
    text: "Creating a String with new String(\"Welcome\") produces a separate object in memory rather than reusing a matching literal from the string pool.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "The String Basics example uses new String(\"Welcome\") specifically to create a distinct object rather than share the pooled literal, and the String Comparison example confirms this by showing that a new String() value fails a reference equality check even when its content matches a literal."
  },
  {
    id: "csc302_ch_1_4_006",
    course: "CSC 302",
    chapter: "Chapter 1.4",
    text: "Given String text = \" Hello World Java \";, what does text.trim() return?",
    options: [
      "A new string with every space character removed from anywhere inside the text, not only the ends",
      "The original string unchanged because trim only works on character arrays",
      "A new string with the leading and trailing spaces removed",
      "The string converted to lowercase"
    ],
    correctAnswer: 2,
    explanation: "The String Methods example calls text.trim() to produce a new string with only the leading and trailing spaces removed, leaving the internal spaces between words intact.\n\ntrim() does not remove spaces between words, only the ones at the very start and end.\n\ntrim() works directly on String objects and does modify the returned value, contrary to the claim that the string stays unchanged.\n\ntrim() does not change letter case; that behavior belongs to a different method."
  },
  {
    id: "csc302_ch_1_4_007",
    course: "CSC 302",
    chapter: "Chapter 1.4",
    text: "Given String text = \" Hello World Java \";, what does text.contains(\"Java\") return?",
    options: [
      "false, because the case of the letters does not exactly match anywhere in the text",
      "true, but only because the method ignores leading and trailing whitespace",
      "false, because contains only checks the first word of the string",
      "true, because the substring \"Java\" appears in the text"
    ],
    correctAnswer: 3,
    explanation: "The String Methods example calls text.contains(\"Java\") and returns true, because the exact substring \"Java\" appears in the text.\n\nThe result is not false due to a case mismatch, since \"Java\" appears with matching case in the string.\n\nWhitespace ignoring is not why this returns true; contains() simply checks for the substring wherever it occurs, and no whitespace stands between the letters of \"Java\" itself.\n\ncontains() checks the entire string, not only the first word, so that description of its scope is incorrect."
  },
  {
    id: "csc302_ch_1_4_008",
    course: "CSC 302",
    chapter: "Chapter 1.4",
    text: "Given String text = \" Hello World Java \";, what does text.replace(\"Java\", \"Programming\") return?",
    options: [
      "A new string in which every occurrence of \"Java\" in the original text has been substituted with \"Programming\", leaving the rest unchanged",
      "A new string with \"Java\" removed and nothing put in its place",
      "The original string with its first character replaced",
      "An error because replace requires two identical arguments"
    ],
    correctAnswer: 0,
    explanation: "The String Methods example calls text.replace(\"Java\", \"Programming\") to produce a new string where every occurrence of \"Java\" is substituted with \"Programming\", while the rest of the text stays the same.\n\nreplace() substitutes the given replacement text rather than simply deleting the matched text.\n\nreplace() targets the matching substring wherever it occurs, not just the first character of the string.\n\nreplace() does not require its two arguments to be identical; it accepts a target substring and a distinct replacement."
  },
  {
    id: "csc302_ch_1_4_009",
    course: "CSC 302",
    chapter: "Chapter 1.4",
    text: "Given String text = \" Hello World Java \"; where index 8 marks the start of the word \"World\", what does text.substring(8, 13) return?",
    options: [
      "The characters from index 8 all the way through index 13 inclusive, which adds one extra trailing character beyond \"World\"",
      "The five characters starting at index 8 up to but not including index 13, namely \"World\"",
      "The entire string with all spaces removed",
      "The character at index 8 only"
    ],
    correctAnswer: 1,
    explanation: "The String Methods example calls text.substring(8, 13) to return the characters from index 8 up to but not including index 13, which is \"World\".\n\nsubstring()'s end index is exclusive, so index 13 itself is not included, meaning the result does not extend one character beyond \"World\".\n\nsubstring() extracts a specific range rather than the whole string with spaces stripped out.\n\nsubstring(8, 13) returns a five character range, not a single character at index 8."
  },
  {
    id: "csc302_ch_1_4_010",
    course: "CSC 302",
    chapter: "Chapter 1.4",
    text: "Which of the following is true about the string methods demonstrated in the String Methods example?",
    options: [
      "The trim() method returns a new string with leading and trailing whitespace removed",
      "The contains() method returns a boolean indicating whether a substring is present",
      "All of these",
      "None of these"
    ],
    correctAnswer: 2,
    explanation: "The String Methods example shows trim() returning a new string with leading and trailing whitespace stripped away, confirming the first statement.\n\nThe same example shows contains() returning a boolean result that reports whether the given substring is present in the text, confirming the second statement.\n\nBoth statements are supported by the example, so the correct choice covers both rather than either one alone."
  },
  {
    id: "csc302_ch_1_4_011",
    course: "CSC 302",
    chapter: "Chapter 1.4",
    text: "Given String s1 = \"Java\"; and String s3 = new String(\"Java\");, what does s1.equals(s3) return?",
    options: [
      "false, because equals() compares memory addresses rather than character content",
      "true, but only because both strings happen to be stored at the same memory address",
      "true, because equals compares the actual character content of the two strings",
      "false, because the letter cases differ"
    ],
    correctAnswer: 2,
    explanation: "The String Comparison example shows s1.equals(s3) returning true, because equals() compares the actual character content of the two strings rather than their memory addresses.\n\nThis option reverses the definition: equals() is specifically defined to compare content, not memory addresses, so a false result from an address mismatch is not how equals() works.\n\nThe result is true regardless of memory address, since s1 and s3 are, in fact, separate objects at different addresses despite the true result.\n\nThe letter cases match exactly between the two strings, so a case difference is not the explanation."
  },
  {
    id: "csc302_ch_1_4_012",
    course: "CSC 302",
    chapter: "Chapter 1.4",
    text: "Given String s1 = \"Java\"; and String s2 = \"java\";, what does s1.equalsIgnoreCase(s2) return?",
    options: [
      "false, because equalsIgnoreCase still treats uppercase and lowercase letters as different characters",
      "false, because equalsIgnoreCase only ignores case for the first letter of each string",
      "true, but only for strings created with the new keyword rather than literals",
      "true"
    ],
    correctAnswer: 3,
    explanation: "The String Comparison example shows s1.equalsIgnoreCase(s2) returning true, since equalsIgnoreCase() compares content while ignoring letter case, and \"Java\" and \"java\" match once case is set aside.\n\nequalsIgnoreCase() is defined specifically so that uppercase and lowercase letters are treated as matching, not as different characters.\n\nequalsIgnoreCase() ignores case across the entire string, not only the first letter, so this partial description of its scope is incorrect.\n\nequalsIgnoreCase() works the same way regardless of whether the strings were created with a literal or with new, so it is not limited to new String objects."
  },
  {
    id: "csc302_ch_1_4_013",
    course: "CSC 302",
    chapter: "Chapter 1.4",
    text: "Given String s1 = \"Java\"; and String s3 = new String(\"Java\");, what does (s1 == s3) return?",
    options: [
      "false, because == compares object references and s3 refers to a separate object created by new rather than the pooled literal that s1 refers to",
      "true, because both strings contain the identical text \"Java\"",
      "false, because s1 was declared using a different data type",
      "true, because Java always pools every String object regardless of how it was created"
    ],
    correctAnswer: 0,
    explanation: "The String Comparison example shows (s1 == s3) returning false, because == compares object references, and s3 refers to a separate object created by new rather than the pooled literal that s1 refers to.\n\nMatching text content is exactly what makes equals() return true for these two strings, but == does not check content, so identical text does not make it return true.\n\ns1 and s3 are both declared as the same String type, so a type mismatch is not the reason for the false result.\n\nJava does not pool every String object; new String(...) deliberately creates an object outside the pool, which is why the reference comparison fails."
  },
  {
    id: "csc302_ch_1_4_014",
    course: "CSC 302",
    chapter: "Chapter 1.4",
    text: "What is the key difference between using .equals() and using == to compare two String objects in Java?",
    options: [
      ".equals() and == both compare whether two variables reference the same object in memory",
      ".equals() checks whether the character content is the same, while == checks whether both variables reference the same object in memory",
      "== checks character content while .equals() checks memory location",
      "There is no difference between them"
    ],
    correctAnswer: 1,
    explanation: "The String Comparison example demonstrates that .equals() checks whether the character content of two strings matches, while == checks whether both variables point to the very same object in memory.\n\n.equals() and == are shown to give different results for s1 and s3, so they do not both check references; only == checks references, while .equals() checks content, contrary to this claim.\n\nThe roles are the reverse of what this option states: content checking belongs to .equals(), and reference checking belongs to ==.\n\nThe example specifically shows a case where .equals() and == disagree, so there is a real difference between them."
  },
  {
    id: "csc302_ch_1_4_015",
    course: "CSC 302",
    chapter: "Chapter 1.4",
    text: "In Java, the == operator on two String objects always compares their character content rather than their memory references.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "The String Comparison example shows (s1 == s3) returning false even though s1 and s3 hold identical text, because == compares object references rather than character content. The claim that == always compares content is therefore contradicted by this result."
  },
  {
    id: "csc302_ch_1_4_016",
    course: "CSC 302",
    chapter: "Chapter 1.4",
    text: "Given String first = \"Hello\"; and String second = \"World\";, what does first.concat(\" \" + second) produce?",
    options: [
      "A compile time error, because concat can only be called on string literals and never on variables holding concatenated expressions",
      "A new string \"Hello World\" formed by joining first with a space and then second",
      "The original value of first, unchanged, since concat requires two String arguments",
      "An empty string"
    ],
    correctAnswer: 1,
    explanation: "The String Concatenation and split() example calls first.concat(\" \" + second) to build a new string, \"Hello World\", by joining first with a space and then second.\n\nconcat() works on any String value, whether it came from a variable or a literal, so this is not a compile time error.\n\nconcat() returns a new joined string rather than leaving first unchanged, since String objects are immutable and concat() produces a fresh result.\n\nThe method call produces the joined text, not an empty string, since both arguments contain real characters."
  },
  {
    id: "csc302_ch_1_4_017",
    course: "CSC 302",
    chapter: "Chapter 1.4",
    text: "Given String sentence = \"Java,is,awesome\";, what does sentence.split(\",\") return?",
    options: [
      "A single String with every comma removed and the three words joined together without any separator",
      "A String array containing the whole sentence as one unsplit element",
      "A String array containing \"Java\", \"is\", and \"awesome\"",
      "The integer 3"
    ],
    correctAnswer: 2,
    explanation: "The String Concatenation and split() example calls sentence.split(\",\") to break the text into a String array containing \"Java\", \"is\", and \"awesome\", using the comma as the delimiter.\n\nsplit() returns an array of separate pieces, not a single joined string with the comma simply deleted.\n\nsplit() divides the sentence at each comma rather than keeping it as one unsplit element.\n\nsplit() returns a String array, not an integer count, even though that array happens to contain three elements."
  },
  {
    id: "csc302_ch_1_4_018",
    course: "CSC 302",
    chapter: "Chapter 1.4",
    text: "What is the key advantage of using StringBuilder instead of String when a value needs to be modified repeatedly?",
    options: [
      "StringBuilder automatically converts every character to uppercase whenever a modification method such as append or insert is called on it",
      "StringBuilder methods run on a separate background thread so the main program can continue immediately without waiting",
      "StringBuilder is mutable, so its content can be changed without creating a new object each time",
      "StringBuilder objects use less memory than integers"
    ],
    correctAnswer: 2,
    explanation: "The StringBuilder example is labeled Mutable String because StringBuilder is mutable, letting append, insert, and reverse change its content without creating a new object for every modification.\n\nNo method in the example converts characters to uppercase automatically; append and insert simply add the given text as written.\n\nThe example runs its modification calls in the ordinary sequential flow of main, with no separate background thread involved.\n\nComparing memory use to an unrelated primitive type such as an integer is not a property the example discusses or supports."
  },
  {
    id: "csc302_ch_1_4_019",
    course: "CSC 302",
    chapter: "Chapter 1.4",
    text: "Given StringBuilder sb = new StringBuilder(\"Hello\"); followed by sb.append(\" World\"); and sb.append(\"!\");, what does sb now contain?",
    options: [
      "\"Hello\" only, since append does not modify the original StringBuilder object automatically",
      "\"! World Hello\", because append always adds new text to the front of the sequence",
      "\"HelloHello World!\", because the constructor text is duplicated before appending",
      "\"Hello World!\""
    ],
    correctAnswer: 3,
    explanation: "The StringBuilder example chains two append() calls onto the constructor text \"Hello\", producing \"Hello World!\" as the sequence grows in place.\n\nappend() does modify the original StringBuilder object directly, which is exactly the mutability the example is showing.\n\nappend() adds new text to the end of the sequence, not the front, so the order shown here is reversed from what actually happens.\n\nThe constructor text is not duplicated; it simply serves as the starting point that the append() calls extend."
  },
  {
    id: "csc302_ch_1_4_020",
    course: "CSC 302",
    chapter: "Chapter 1.4",
    text: "Which of the following is true about the StringBuilder methods used in the StringBuilder example?",
    options: [
      "The insert() method places the given text starting at the specified index inside the existing sequence",
      "The append() method places new text at the beginning of the sequence rather than the end",
      "All of these",
      "None of these"
    ],
    correctAnswer: 0,
    explanation: "The StringBuilder example calls sb.insert(6, \"Beautiful \"), placing the given text starting at the specified index inside the existing sequence, which confirms the first statement.\n\nThe same example builds its sequence with two append() calls that each add text after what is already present, so append() places new text at the end, not the beginning, which contradicts the second statement.\n\nOnly the first statement holds, so the correct choice is the single option describing insert(), not a pairing with the incorrect claim about append()."
  },
  {
    id: "csc302_ch_1_4_021",
    course: "CSC 302",
    chapter: "Chapter 1.4",
    text: "Continuing from sb.append(\" World\"); sb.append(\"!\"); on a StringBuilder holding \"Hello World!\", what does sb.insert(6, \"Beautiful \") produce?",
    options: [
      "\"Beautiful \" is placed starting at index 6, giving the sequence \"Hello Beautiful World!\"",
      "The sequence throws an IndexOutOfBoundsException because index 6 does not exist",
      "\"Beautiful \" replaces the first six characters of the sequence entirely",
      "\"Beautiful \" is appended to the very end of the sequence"
    ],
    correctAnswer: 0,
    explanation: "The StringBuilder example calls sb.insert(6, \"Beautiful \") on the sequence \"Hello World!\", inserting the text starting at index 6 to produce \"Hello Beautiful World!\".\n\nIndex 6 is a valid position within a twelve character sequence, so no IndexOutOfBoundsException occurs.\n\ninsert() adds the given text at the index without deleting any existing characters, so it does not replace the first six characters.\n\ninsert() places text at the given index rather than always appending it to the end, which is the behavior of a different method."
  },
  {
    id: "csc302_ch_1_4_022",
    course: "CSC 302",
    chapter: "Chapter 1.4",
    text: "After the insert operation leaves sb holding \"Hello Beautiful World!\", what does sb.reverse() do?",
    options: [
      "It creates and returns a brand new StringBuilder object containing the characters in reverse order while leaving the original sequence completely untouched",
      "It reverses the order of the characters in place, so the sequence now reads back to front",
      "It sorts the characters alphabetically rather than reversing their order",
      "It clears the sequence entirely"
    ],
    correctAnswer: 1,
    explanation: "The StringBuilder example calls sb.reverse() to reverse the order of the characters in the mutable sequence in place, so the sequence now reads back to front.\n\nreverse() operates on the same sequence rather than leaving the original untouched, consistent with StringBuilder being mutable throughout the example.\n\nreverse() reorders characters back to front rather than sorting them alphabetically.\n\nreverse() reorders the existing characters rather than clearing the sequence, so the content is preserved, just in reverse order."
  },
  {
    id: "csc302_ch_1_4_023",
    course: "CSC 302",
    chapter: "Chapter 1.4",
    text: "What does calling sb.toString() on a StringBuilder object do?",
    options: [
      "It converts the StringBuilder into an integer representing the total number of characters it currently holds",
      "It permanently empties the StringBuilder object right after copying its characters somewhere else",
      "It returns an immutable String containing the current character sequence",
      "It deletes the object"
    ],
    correctAnswer: 2,
    explanation: "The StringBuilder example calls sb.toString() to obtain an immutable String containing the current character sequence held by the mutable StringBuilder.\n\ntoString() returns a String value, not an integer count of characters, so it does not report a length.\n\ntoString() reads the current sequence without emptying the StringBuilder afterward.\n\ntoString() does not delete the StringBuilder object; it simply produces a String snapshot of its current content."
  },
  {
    id: "csc302_ch_1_4_024",
    course: "CSC 302",
    chapter: "Chapter 1.4",
    text: "Which package has been Java's original, legacy way of handling file operations since Java 1.0?",
    options: [
      "java.nio.file, introduced as the very first Java file handling package",
      "java.util, the package originally designed for collections and later repurposed for files",
      "java.nio, greatly improved in Java 7 and offered as the original package",
      "java.io"
    ],
    correctAnswer: 3,
    explanation: "The File Handling Packages overview names java.io as the original, legacy package for file operations, available since Java 1.0.\n\njava.nio.file is described as the modern package, not the very first one, so it was not introduced first.\n\njava.util is not mentioned as a file handling package at all in this material.\n\njava.nio is described as the modern package improved in Java 7, not as the original legacy package."
  },
  {
    id: "csc302_ch_1_4_025",
    course: "CSC 302",
    chapter: "Chapter 1.4",
    text: "What is true about when the java.nio and java.nio.file packages were introduced and improved?",
    options: [
      "java.nio was introduced in Java 1.4 and the java.nio.file (NIO.2) portion was greatly improved in Java 7",
      "java.nio.file has existed since Java 1.0, the same as java.io",
      "Both packages were introduced together in Java 7 for the first time",
      "java.nio was introduced in Java 7, the same version in which the NIO.2 improvements to java.nio.file were made"
    ],
    correctAnswer: 0,
    explanation: "The File Handling Packages overview states that java.nio was introduced in Java 1.4 and that the java.nio.file (NIO.2) portion was greatly improved in Java 7.\n\njava.io, not java.nio.file, is the package that has existed since Java 1.0.\n\njava.nio was introduced in Java 1.4, not Java 7, even though NIO.2 was improved in Java 7.\n\njava.nio itself dates to Java 1.4, well before Java 7; only the NIO.2 portion of java.nio.file was improved in Java 7, so this option merges two separate dates into one."
  },
  {
    id: "csc302_ch_1_4_026",
    course: "CSC 302",
    chapter: "Chapter 1.4",
    text: "What kind of classes does the java.io package work with to perform file operations?",
    options: [
      "Buffers that are filled with data first and then processed all at once using a Channel",
      "Streams such as InputStream, OutputStream, Reader, and Writer",
      "Only the File class",
      "Path and FileChannel objects exclusively"
    ],
    correctAnswer: 1,
    explanation: "The java.io Package section describes it as stream oriented, working with Streams such as InputStream, OutputStream, Reader, and Writer.\n\nFilling a Buffer first and processing it with a Channel describes the java.nio approach, not java.io.\n\njava.io provides several classes beyond File, including FileInputStream, FileOutputStream, BufferedReader, BufferedWriter, and Scanner.\n\nPath and FileChannel are common classes of java.nio.file, not java.io."
  },
  {
    id: "csc302_ch_1_4_027",
    course: "CSC 302",
    chapter: "Chapter 1.4",
    text: "What does it mean that java.io performs blocking I/O?",
    options: [
      "The thread that issues a read or write operation is immediately freed to perform other unrelated work while a separate background thread finishes the operation",
      "The thread that issues a read or write operation waits until that operation completes before continuing",
      "The operation is queued and processed only after the program exits",
      "The file is locked from other programs"
    ],
    correctAnswer: 1,
    explanation: "The java.io Package section describes blocking I/O as the thread waiting until the read or write operation completes before continuing.\n\nBeing freed to do other work while a background thread finishes describes non-blocking I/O, which is the java.nio approach, not java.io.\n\nBlocking I/O completes the operation while the program runs, not only after the program exits.\n\nBlocking refers to the calling thread waiting, not to locking the file from access by other programs."
  },
  {
    id: "csc302_ch_1_4_028",
    course: "CSC 302",
    chapter: "Chapter 1.4",
    text: "Which set of classes does the java.io package provide for common file operations?",
    options: [
      "Path, Paths, Files, FileChannel, and a set of asynchronous channel classes for non-blocking operations",
      "File, Scanner, FileChannel, and the WatchService class for monitoring directories",
      "File, FileInputStream, FileOutputStream, BufferedReader, BufferedWriter, and Scanner",
      "Only the Scanner class"
    ],
    correctAnswer: 2,
    explanation: "The java.io Package section lists File, FileInputStream, FileOutputStream, BufferedReader, BufferedWriter, and Scanner as its common classes.\n\nPath, Paths, Files, and FileChannel are listed as common classes of java.nio.file, not java.io.\n\nFileChannel and WatchService belong to the java.nio and java.nio.file packages, not to java.io.\n\njava.io provides several classes beyond Scanner alone, as listed in the section."
  },
  {
    id: "csc302_ch_1_4_029",
    course: "CSC 302",
    chapter: "Chapter 1.4",
    text: "In the java.io package, data is processed one byte or one character at a time rather than in large buffered chunks.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "The java.io Package section states that data is processed one byte or one character at a time, which is the stream oriented design that distinguishes it from the buffer oriented approach of java.nio."
  },
  {
    id: "csc302_ch_1_4_030",
    course: "CSC 302",
    chapter: "Chapter 1.4",
    text: "In IoExample.java, try (FileWriter writer = new FileWriter(\"data.txt\")) { writer.write(...); } is used with no explicit call to writer.close(). Why does this still close the file safely?",
    options: [
      "FileWriter objects in java.io do not need to be closed at all because the garbage collector releases file handles immediately after the last write statement runs",
      "The catch block that follows is responsible for calling close() automatically behind the scenes before the program continues",
      "Try-with-resources automatically closes the writer when the block ends, even if an exception occurs",
      "It does not; the file remains open"
    ],
    correctAnswer: 2,
    explanation: "The java.io How It Operates example opens the FileWriter inside a try-with-resources statement, which automatically closes the writer when the block ends, even if an exception occurs.\n\nFileWriter objects still require closing to flush and release their file handle; the garbage collector is not what the try-with-resources syntax relies on here.\n\nThe closing happens as part of the try-with-resources mechanism itself, not inside the catch block that handles IOException.\n\nThe file does not remain open; try-with-resources is specifically used so the writer is closed properly."
  },
  {
    id: "csc302_ch_1_4_031",
    course: "CSC 302",
    chapter: "Chapter 1.4",
    text: "In IoExample.java, after writing to data.txt, the code reads it back with BufferedReader br = new BufferedReader(new FileReader(\"data.txt\")) inside a while loop calling br.readLine(). What does this loop do?",
    options: [
      "It reads the entire file into a single String all at once and then splits that string into an array of lines before printing each element",
      "It counts the total number of lines in the file without printing any of their content",
      "It deletes each line from the file immediately after printing it",
      "It prints each line of the file until readLine() returns null"
    ],
    correctAnswer: 3,
    explanation: "The java.io How It Operates example reads data.txt inside a while loop that calls br.readLine() and prints each line until readLine() returns null, signaling the end of the file.\n\nThe loop reads and prints one line at a time rather than loading the whole file into a single String and splitting it afterward.\n\nThe loop prints each line's content with System.out.println, rather than only counting lines.\n\nReading a line with readLine() does not delete it from the file; the file's contents remain unchanged."
  },
  {
    id: "csc302_ch_1_4_032",
    course: "CSC 302",
    chapter: "Chapter 1.4",
    text: "Unlike IoExample.java, WriteFile.java opens its FileWriter with a plain FileWriter writer = new FileWriter(\"output.txt\"); statement rather than try-with-resources. What must the code do as a result?",
    options: [
      "It must call writer.close() explicitly after the write calls, and it does so inside the try block before the catch block handles any IOException",
      "Nothing extra, since java.io automatically closes every FileWriter once the program reaches the end of main",
      "It must open the file again immediately after writing to force the close",
      "It must use a Scanner instead to release the file handle"
    ],
    correctAnswer: 0,
    explanation: "The Writing to a Text File example opens FileWriter without try-with-resources and, as a result, calls writer.close() explicitly after the write calls, inside the try block, before the catch block handles any IOException.\n\njava.io does not close FileWriter objects automatically; without try-with-resources or an explicit close() call, the file handle would remain open.\n\nReopening the file does not close it; only calling close() releases the resource.\n\nSwitching to a Scanner would not close the FileWriter that was already opened for writing; the explicit close() call is what is needed."
  },
  {
    id: "csc302_ch_1_4_033",
    course: "CSC 302",
    chapter: "Chapter 1.4",
    text: "What classes does ReadFileScanner.java import and use together to read output.txt?",
    options: [
      "BufferedReader wrapped around a FileReader, combined with a try-with-resources block that catches only IOException and never FileNotFoundException",
      "File to represent the path, and Scanner to read it, catching FileNotFoundException if the file is missing",
      "FileWriter opened in append mode, combined with a Scanner reading from standard input",
      "Only the Scanner class, with no exception handling"
    ],
    correctAnswer: 1,
    explanation: "The Reading from a Text File (Scanner) example imports File to represent the path and Scanner to read it, wrapping the logic in a try block that catches FileNotFoundException if the file is missing.\n\nThe example uses a plain try block with Scanner, not a BufferedReader and FileReader combination, and it does catch FileNotFoundException rather than only IOException.\n\nThe FileWriter class and append mode belong to the AppendFile.java example, not to this reading example.\n\nThe example does include exception handling, catching FileNotFoundException around the Scanner logic."
  },
  {
    id: "csc302_ch_1_4_034",
    course: "CSC 302",
    chapter: "Chapter 1.4",
    text: "In ReadFileScanner.java, what does the loop while (scanner.hasNextLine()) { String line = scanner.nextLine(); ... } do?",
    options: [
      "It checks whether the file itself still exists on disk before reading a single fixed line from the very beginning of the file each time",
      "It counts how many total lines and total characters the file contains without printing any of the actual text",
      "It checks whether another line exists and then reads and prints each line until none remain",
      "It closes the scanner immediately"
    ],
    correctAnswer: 2,
    explanation: "The Reading from a Text File (Scanner) example uses hasNextLine() to check whether another line exists, then nextLine() to read it, printing each line until none remain.\n\nThe loop condition checks for a next line, not for whether the file still exists on disk, and it advances through the file rather than always rereading the first line.\n\nThe loop prints each line's text with System.out.println; it does not merely count lines and characters while withholding the text.\n\nThe scanner is closed after the loop finishes, with scanner.close(), not immediately at the start."
  },
  {
    id: "csc302_ch_1_4_035",
    course: "CSC 302",
    chapter: "Chapter 1.4",
    text: "Which of the following is true about the ReadBuffered.java and AppendFile.java examples?",
    options: [
      "ReadBuffered.java opens its FileReader without try-with-resources and requires an explicit call to br.close()",
      "AppendFile.java passes true as a second argument to FileWriter so new text is added after the existing content rather than overwriting it",
      "All of these",
      "None of these"
    ],
    correctAnswer: 1,
    explanation: "ReadBuffered.java actually opens its BufferedReader and FileReader inside a try-with-resources statement, so it does not require an explicit call to br.close(), which contradicts the first statement.\n\nThe Appending to an Existing File example shows FileWriter(\"output.txt\", true), where the true flag adds new text after the existing content instead of overwriting it, confirming the second statement.\n\nOnly the statement about AppendFile.java holds, so the correct choice is that single option rather than both or neither."
  },
  {
    id: "csc302_ch_1_4_036",
    course: "CSC 302",
    chapter: "Chapter 1.4",
    text: "What resource-management pattern does ReadBuffered.java use to read output.txt with a BufferedReader?",
    options: [
      "A manual try block followed by an explicit call to br.close() inside a finally block",
      "A static utility method that closes the reader automatically after each single readLine() call",
      "No resource management at all, relying on the garbage collector to close the file",
      "try-with-resources"
    ],
    correctAnswer: 3,
    explanation: "The Reading File using BufferedReader example opens its BufferedReader and FileReader using try-with-resources, so the reader closes automatically when the block ends.\n\nThe example does not use a manual try block with an explicit close() call in a finally block; the try-with-resources syntax itself handles the closing.\n\nThere is no static utility method closing the reader after each readLine() call; the resource is closed once, when the try-with-resources block ends.\n\nThe example does rely on explicit resource management through try-with-resources, not on the garbage collector."
  },
  {
    id: "csc302_ch_1_4_037",
    course: "CSC 302",
    chapter: "Chapter 1.4",
    text: "In AppendFile.java, what does passing true as the second argument to new FileWriter(\"output.txt\", true) accomplish?",
    options: [
      "It tells FileWriter to append new content to the end of the existing file instead of overwriting and erasing what was already there",
      "It tells FileWriter to overwrite the file's existing content from the very beginning",
      "It creates the file only if it does not already exist",
      "It opens the file in read only mode"
    ],
    correctAnswer: 0,
    explanation: "The Appending to an Existing File example passes true as the second argument to FileWriter so that new content is appended to the end of the existing file instead of overwriting and erasing what was already there.\n\nOverwriting from the beginning is what happens when the append flag is left out or set to false, which is the opposite of what true accomplishes here.\n\nThe true flag controls append behavior, not whether the file is created only when missing.\n\nFileWriter with the append flag still opens the file for writing, not for read only access."
  },
  {
    id: "csc302_ch_1_4_038",
    course: "CSC 302",
    chapter: "Chapter 1.4",
    text: "What does it mean for java.nio to be buffer oriented rather than stream oriented?",
    options: [
      "Data bypasses memory entirely and is written directly from the disk to the screen without ever being held in a variable or an intermediate structure of any kind",
      "Data is read into a Buffer first and then processed, instead of being handled one byte or character at a time",
      "Data is compressed automatically before every read or write operation",
      "Data is processed one byte at a time"
    ],
    correctAnswer: 1,
    explanation: "The java.nio and java.nio.file section describes it as buffer oriented, meaning data is read into a Buffer first and then processed, instead of being handled one byte or character at a time.\n\nData is held in a Buffer as an intermediate structure, not written directly from disk to screen while bypassing memory entirely.\n\nThe buffer oriented description does not involve automatic compression of the data.\n\nProcessing one byte at a time describes the stream oriented approach of java.io, which is the opposite of what java.nio does."
  },
  {
    id: "csc302_ch_1_4_039",
    course: "CSC 302",
    chapter: "Chapter 1.4",
    text: "What does java.nio use for data transfer, and why is this considered more efficient?",
    options: [
      "Sockets, which move data more efficiently by compressing every file into a smaller binary format before any read or write operation begins",
      "Channels, which move data more efficiently than reading or writing one byte or character at a time",
      "Streams, which are simpler for beginners to understand and use",
      "Threads, for parallel processing"
    ],
    correctAnswer: 1,
    explanation: "The java.nio and java.nio.file section states that java.nio uses Channels for data transfer, which are more efficient than reading or writing one byte or character at a time.\n\nThe section credits Channels, not Sockets, with this efficiency, and it does not describe any automatic compression step.\n\nStreams being simple for beginners describes java.io, not the Channel based approach of java.nio.\n\nThe efficiency described comes from using Channels, not from spreading work across multiple Threads."
  },
  {
    id: "csc302_ch_1_4_040",
    course: "CSC 302",
    chapter: "Chapter 1.4",
    text: "What advantage does non-blocking I/O in java.nio offer compared to the blocking I/O of java.io?",
    options: [
      "A thread is guaranteed to finish every read or write operation in exactly the same amount of time regardless of file size or system load",
      "Every file operation automatically runs on several background threads at once so the calling thread finishes noticeably sooner",
      "A thread can do other work while waiting for a read or write operation to complete",
      "Files can never be closed accidentally"
    ],
    correctAnswer: 2,
    explanation: "The java.nio and java.nio.file section states that non-blocking I/O lets a thread do other work while waiting for a read or write operation to complete, unlike the blocking I/O of java.io.\n\nNon-blocking I/O does not guarantee a fixed completion time for every operation; it simply avoids forcing the thread to wait idle.\n\nNon-blocking I/O is about the calling thread being free to do other work, not about java.nio automatically spreading each operation across several background threads.\n\nNon-blocking behavior concerns whether a thread waits during I/O, not whether files can be closed accidentally."
  },
  {
    id: "csc302_ch_1_4_041",
    course: "CSC 302",
    chapter: "Chapter 1.4",
    text: "The java.io package supports non-blocking input and output operations, allowing a thread to perform other work while a read completes.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "The java.io Package section states that java.io performs blocking I/O, meaning a thread waits until a read or write operation completes. Non-blocking I/O, which lets a thread do other work while waiting, is described as a feature of java.nio instead, so the claim about java.io is false."
  },
  {
    id: "csc302_ch_1_4_042",
    course: "CSC 302",
    chapter: "Chapter 1.4",
    text: "What does the java.nio.file package (NIO.2) provide, and for what kind of workloads is it better suited than java.io?",
    options: [
      "A low-level Files utility class limited to reading single characters, better suited only to very small configuration files under one kilobyte in size",
      "A graphical file browser utility, better suited to interactive desktop applications rather than automated scripts",
      "A network socket utility class, better suited to streaming video data across a network connection",
      "A high-level Files utility class, better suited to large files and high-concurrency workloads"
    ],
    correctAnswer: 3,
    explanation: "The java.nio and java.nio.file section states that java.nio.file (NIO.2) provides a high-level Files utility class and offers better performance for large files and high-concurrency applications than java.io.\n\nThe Files utility class is described as high-level, not limited to single-character reads or tiny configuration files.\n\nThe section describes a file handling utility class, not a graphical file browser.\n\nThe Files class handles file operations rather than network socket or video streaming tasks."
  },
  {
    id: "csc302_ch_1_4_043",
    course: "CSC 302",
    chapter: "Chapter 1.4",
    text: "Which classes does java.nio.file provide as its common set of tools for file operations?",
    options: [
      "Path to represent a file location, Paths to build one, Files for high-level operations, and FileChannel for buffer-based data transfer",
      "File, FileInputStream, FileOutputStream, and Scanner, carried over unchanged from java.io",
      "Only the Files class, with no supporting Path or Channel classes",
      "Socket, ServerSocket, and DatagramPacket, borrowed from the networking package"
    ],
    correctAnswer: 0,
    explanation: "The java.nio and java.nio.file section lists Path, Paths, Files, and FileChannel as the package's common classes for file operations.\n\nFile, FileInputStream, FileOutputStream, and Scanner are listed as java.io classes, not as java.nio.file classes.\n\njava.nio.file provides Path and FileChannel alongside Files, not Files alone.\n\nSocket, ServerSocket, and DatagramPacket are networking classes and are not part of the java.nio.file class list."
  },
  {
    id: "csc302_ch_1_4_044",
    course: "CSC 302",
    chapter: "Chapter 1.4",
    text: "In NioExample.java, what does Path path = Paths.get(\"data.txt\"); do?",
    options: [
      "It immediately opens data.txt for reading and loads its entire contents into memory as a single large String before any other statement runs",
      "It creates a Path object representing the location \"data.txt\", without opening or reading the file yet",
      "It deletes data.txt if the file already exists on disk",
      "It creates a brand new empty file"
    ],
    correctAnswer: 1,
    explanation: "The java.nio.file How It Operates example calls Paths.get(\"data.txt\") to create a Path object representing that location, without opening or reading the file at that point.\n\nCreating the Path does not open the file or load its contents; the file is only read later, by a separate call in the same example.\n\nCreating a Path does not delete any existing file; it simply names a location for later operations.\n\nCreating a Path does not create a file on disk by itself; the example creates content only when Files.writeString() is called."
  },
  {
    id: "csc302_ch_1_4_045",
    course: "CSC 302",
    chapter: "Chapter 1.4",
    text: "In NioExample.java, what does Files.writeString(path, \"Welcome to CSC302!\\nThis uses java.nio.file\"); do?",
    options: [
      "It opens the file, wraps it in a BufferedWriter, writes the text one character at a time, and then manually flushes and closes every stream involved",
      "It reads the current contents of the file located at path and returns them as a single String",
      "It writes the given text to the file at path in a single, concise method call",
      "It renames the file located at path"
    ],
    correctAnswer: 2,
    explanation: "The java.nio.file How It Operates example calls Files.writeString(path, ...) to write the given text to the file at path in a single, concise method call, without manually managing a Writer.\n\nThe example does not wrap the file in a BufferedWriter or manually flush and close streams; Files.writeString() handles that internally.\n\nReading the current contents back into a String describes Files.readAllLines(), a different call in the same example, not writeString().\n\nwriteString() writes content to the file; it does not rename the file."
  },
  {
    id: "csc302_ch_1_4_046",
    course: "CSC 302",
    chapter: "Chapter 1.4",
    text: "In NioExample.java, what does List<String> lines = Files.readAllLines(path); do?",
    options: [
      "It reads the entire file at path and returns every line as a separate element inside a List of String values",
      "It reads only the first line of the file and discards the rest",
      "It deletes every line from the file after reading it once",
      "It counts the number of lines without storing their text"
    ],
    correctAnswer: 0,
    explanation: "The java.nio.file How It Operates example calls Files.readAllLines(path) to read the entire file and return every line as a separate element inside a List of String values.\n\nreadAllLines() reads all lines in the file, not only the first one, as its name states.\n\nReading the file with readAllLines() does not delete its content; the file on disk remains unchanged.\n\nreadAllLines() stores each line's actual text inside the returned list, rather than only counting lines."
  },
  {
    id: "csc302_ch_1_4_047",
    course: "CSC 302",
    chapter: "Chapter 1.4",
    text: "Which of the following is true about the java.io and java.nio.file packages?",
    options: [
      "java.io is the newer, buffer-oriented package introduced in Java 7",
      "java.nio.file is limited to blocking I/O only, with no support for modern file attributes",
      "All of these",
      "None of these"
    ],
    correctAnswer: 3,
    explanation: "java.io is actually the original, legacy, stream-oriented package available since Java 1.0, not a newer buffer-oriented package introduced in Java 7, so the first statement is contradicted.\n\njava.nio.file supports non-blocking I/O and offers modern features such as symbolic links, file attributes, atomic operations, and a watch service, so the second statement is also contradicted.\n\nBoth statements are false, so neither specific option nor a combination of them is correct."
  },
  {
    id: "csc302_ch_1_4_048",
    course: "CSC 302",
    chapter: "Chapter 1.4",
    text: "In NioExample.java, what does System.out.println(\"File exists: \" + Files.exists(path)); check?",
    options: [
      "Whether the file at the given path is currently open for writing by another running program on the same machine",
      "Whether a file or directory currently exists at the given path, returning a boolean result",
      "Whether the file at the given path is empty",
      "The file's total size in bytes"
    ],
    correctAnswer: 1,
    explanation: "The java.nio.file How It Operates example calls Files.exists(path) to check whether a file or directory currently exists at the given path, returning a boolean result.\n\nFiles.exists() checks for existence, not for whether another program currently has the file open for writing.\n\nFiles.exists() reports existence rather than whether the file's content is empty.\n\nFiles.exists() returns a boolean, not a numeric measurement of the file's size in bytes."
  },
  {
    id: "csc302_ch_1_4_049",
    course: "CSC 302",
    chapter: "Chapter 1.4",
    text: "How do java.io and java.nio.file differ in their fundamental orientation for handling data?",
    options: [
      "java.io is stream oriented, processing data sequentially, while java.nio.file is buffer and channel oriented, moving data in blocks",
      "java.io is buffer oriented while java.nio.file is stream oriented",
      "Both packages use exactly the same buffer oriented design internally",
      "java.nio.file has no defined orientation at all"
    ],
    correctAnswer: 0,
    explanation: "The Key Differences table lists java.io as stream oriented and java.nio.file(NIO.2) as buffer and channel oriented, meaning java.io processes data sequentially while java.nio.file moves it in blocks.\n\nThe orientations are the reverse of what this option claims; java.io is the stream oriented one, and java.nio.file is the buffer oriented one.\n\nThe table lists two distinct orientations for the two packages, not one identical design shared by both.\n\nThe table explicitly assigns java.nio.file the orientation of buffer and channel oriented, so it is not left undefined."
  },
  {
    id: "csc302_ch_1_4_050",
    course: "CSC 302",
    chapter: "Chapter 1.4",
    text: "When is it appropriate to prefer java.io streams over java.nio.file for a file handling task?",
    options: [
      "Only when working with unusually large files that substantially exceed available memory, since java.nio.file cannot handle large files efficiently",
      "For beginners and simple applications, or when low-level control over reading and writing streams is specifically needed",
      "Never; java.nio.file should always be used regardless of the situation",
      "Only when writing unit tests"
    ],
    correctAnswer: 1,
    explanation: "The Which One Should You Use guidance recommends starting with java.io for beginners and simple applications, and it notes that java.io streams remain useful when low-level control over reading and writing is specifically needed.\n\njava.nio.file is in fact the package better suited to large files and high-concurrency workloads, the reverse of what this option claims, so preferring java.io there is not the guidance given.\n\nThe guidance allows mixing both packages rather than saying java.io should never be used.\n\nThe guidance does not restrict java.io usage to unit testing; it applies to beginners, simple applications, and cases needing low-level stream control."
  }
];

export default csc302Chapter4Questions;
