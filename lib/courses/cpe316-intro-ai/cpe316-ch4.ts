import { QuestionV2 } from "../../quiz-types";

const cpe316Chapter4Questions: QuestionV2[] = [
  {
    id: "cpe316_ch4_001",
    course: "cpe316",
    chapter: "Chapter 4",
    text: "Which universe of discourse is used to demonstrate Regular, Context-neutral, and Context-sensitive rendering of Adase (Individual) human performance in the capacity to use language?",
    options: [
      "The Idije (Competition) dialogue universe",
      "The Ajose (Cooperative) dialogue universe",
      "The Ibatan (Kinship) universe of humans",
      "The Ise.ro. (Mechanism) universe of machines",
    ],
    correctAnswer: 2,
    explanation:
      "The chapter uses the human Ibatan (Kinship) universe of discourse to demonstrate how Assertions, Relations, and Quantification render Adase (Individual) human performance.\n\nThe Idije (Competition) dialogue universe is mentioned as a domain that could also demonstrate this but is not the chapter's chosen focus.\n\nThe Ajose (Cooperative) dialogue universe is likewise mentioned but not the chosen focus.\n\nThe Ise.ro. (Mechanism) universe of machines is not the domain used in this chapter's kinship exercise.",
  },
  {
    id: "cpe316_ch4_002",
    course: "cpe316",
    chapter: "Chapter 4",
    text: "In the flow used to formulate kinship expressions, what is Assertion first ascribed to?",
    options: [
      "A Relation between two humans",
      "An individual term cueing a human",
      "A Quantifier restricting a variable",
      "An informative explanation",
    ],
    correctAnswer: 1,
    explanation:
      "Assertion is first ascribed to an individual term cueing a human, before that term is used to formulate a Relation and then Quantification.\n\nA Relation between two humans is the second step, built from terms that already carry an Assertion.\n\nA Quantifier restricting a variable is the third step, applied after a Relation has been formulated.\n\nAn informative explanation is the outcome produced once a Relation has been rendered through Quantification, not the starting point.",
  },
  {
    id: "cpe316_ch4_003",
    course: "cpe316",
    chapter: "Chapter 4",
    text: "What are the two kinship universes of discourse used to demonstrate Formal Language rendering of Automated Intelligence?",
    options: [
      "English and French kinship universes",
      "Yoruba and Igbo kinship universes",
      "English and Yoruba kinship universes",
      "Regular and Context-sensitive kinship universes",
    ],
    correctAnswer: 2,
    explanation:
      "The chapter uses the English kinship universe of discourse and the Yoruba kinship universe of discourse side by side.\n\nFrench is not one of the two kinship universes used in the chapter.\n\nIgbo is not one of the two kinship universes used in the chapter.\n\nRegular and Context-sensitive are types of relations discussed within the universes, not the two universes themselves.",
  },
  {
    id: "cpe316_ch4_004",
    course: "cpe316",
    chapter: "Chapter 4",
    text: "In the English kinship universe, where is the Prime-axiom of the English language situated?",
    options: [
      "In a context-sensitive universe of discourse",
      "In a context-neutral universe of discourse",
      "In the Auxiliary-term of the Yoruba universe",
      "In the written Yoruba alphabet of signs",
    ],
    correctAnswer: 1,
    explanation:
      "The English language's Prime-axiom is situated in a context-neutral universe of discourse, based on the information content of a message communicated by a habitual human user of the instrument.\n\nA context-sensitive universe of discourse is not where the English Prime-axiom is situated.\n\nThe Auxiliary-term of the Yoruba universe belongs to the Yoruba kinship discussion, not the English Prime-axiom.\n\nThe written Yoruba alphabet of signs is part of the Yoruba naming discussion, unrelated to the English Prime-axiom.",
  },
  {
    id: "cpe316_ch4_005",
    course: "cpe316",
    chapter: "Chapter 4",
    text: "In the formal-language rendering of the English kinship universe, what plays the role of Primitive-terms?",
    options: [
      "Nominal-terms such as Ade and Kemi",
      "Letters of the written English alphabet",
      "Unary Assertion functions like boy()",
      "Binary Relation functions like Father()",
    ],
    correctAnswer: 1,
    explanation:
      "The Primitive-terms in the formal-language rendering of English kinship are the letters of the written English alphabet.\n\nNominal-terms such as Ade and Kemi are strings built by concatenating these primitive letters, not the primitives themselves.\n\nUnary Assertion functions like boy() ascribe Assertion to a term but are not the Primitive-terms.\n\nBinary Relation functions like Father() connect two terms but are not the Primitive-terms.",
  },
  {
    id: "cpe316_ch4_006",
    course: "cpe316",
    chapter: "Chapter 4",
    text: "A string such as \"Ade\" is constructed entirely from primitive symbols, so every instance of a primitive found within it is itself a primitive.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "This is true: since strings such as Ade, Akin, and Kemi are concatenations of primitive letters, every symbol occurring within them remains a primitive.\n\nFalse would wrongly claim the letters lose their primitive status once concatenated into a string.\n\nMaybe is not applicable since the source treats this as a settled point.\n\nI don't know is not applicable since the source directly states this relationship.",
  },
  {
    id: "cpe316_ch4_007",
    course: "cpe316",
    chapter: "Chapter 4",
    text: "Under the notation convention for symbols cueing a term, how is a symbol assigned to a Primitive-term enclosed?",
    options: [
      "In double quotes, like \"Ade\"",
      "In bold uppercase, like F()",
      "In single quotes, like 'A'",
      "In plain uppercase, like X",
    ],
    correctAnswer: 2,
    explanation:
      "A symbol assigned to a Primitive-term is enclosed in single quotes, such as 'A' or 'b'.\n\nDouble quotes are instead used to enclose a string of symbols cueing a term, such as \"Ade\".\n\nBold uppercase functions such as F() denote the simplification of a context-sensitive axiom through quantifiers, not a primitive symbol.\n\nPlain uppercase letters such as X denote a variable-term comprising finite instances of a term, not a single primitive symbol.",
  },
  {
    id: "cpe316_ch4_008",
    course: "cpe316",
    chapter: "Chapter 4",
    text: "Under the notation conventions, how is a string of symbols cueing a term enclosed?",
    options: [
      "In single quotes",
      "In double quotes",
      "In parentheses only",
      "In square brackets",
    ],
    correctAnswer: 1,
    explanation:
      "A string of symbols cueing a term, such as \"Ade\", is enclosed in double quotes.\n\nSingle quotes are reserved for a single primitive symbol, such as 'A', not a full string.\n\nParentheses only are used to hold operands passed to Assertion and Relation functions, not to mark a string.\n\nSquare brackets are not a notation convention used for strings in this scheme.",
  },
  {
    id: "cpe316_ch4_009",
    course: "cpe316",
    chapter: "Chapter 4",
    text: "By convention, what kind of letter is used as the symbol cueing an individual term, as in x = \"Ade\"?",
    options: [
      "An uppercase letter",
      "A lowercase letter",
      "A bold uppercase letter",
      "A numeral",
    ],
    correctAnswer: 1,
    explanation:
      "A lowercase letter, such as x or y, is used as the symbol cueing a term, so x can stand for \"Ade\" and y for \"Kemi\".\n\nAn uppercase letter such as X is instead used for a variable-term comprising finite instances of a term.\n\nA bold uppercase letter denotes the simplification of a context-sensitive axiom through quantifiers, not a single cueing symbol.\n\nA numeral is not the convention used to cue a term in this scheme.",
  },
  {
    id: "cpe316_ch4_010",
    course: "cpe316",
    chapter: "Chapter 4",
    text: "Consider these two claims about variable-terms: (1) an uppercase letter such as X denotes a variable-term comprising finite instances of a term; (2) a variable-term such as X = {x1, ..., xn} is written using set notation. Which verdict is correct?",
    options: [
      "Only claim (1) is correct",
      "Only claim (2) is correct",
      "All of these",
      "None of these",
    ],
    correctAnswer: 2,
    explanation:
      "Both claims are correct: an uppercase letter such as X denotes a variable-term comprising finite instances of a term, and it is written with the set notation X = {x1, ..., xn}, so \"All of these\" applies.\n\nOnly claim (1) being correct would wrongly exclude the set-notation claim, which is also stated in the source.\n\nOnly claim (2) being correct would wrongly exclude the definition of a variable-term, which is also stated in the source.\n\nNone of these would wrongly reject both claims even though the source affirms them.",
  },
  {
    id: "cpe316_ch4_011",
    course: "cpe316",
    chapter: "Chapter 4",
    text: "In the notation conventions, what quality does a bare term have with respect to Assertion, before an axiom of the instrument of regular language is applied to it?",
    options: [
      "It is already ascribed a fixed Assertion",
      "It is Assertion neutral",
      "It carries two conflicting Assertions",
      "It carries a Quantified Assertion",
    ],
    correctAnswer: 1,
    explanation:
      "A term is Assertion neutral until an axiom of the instrument of regular language, that is, an Auxiliary-term of the universe of discourse, ascribes Assertion to it.\n\nBeing already ascribed a fixed Assertion contradicts the stated neutrality of a bare term.\n\nCarrying two conflicting Assertions is not the described state of a bare term.\n\nCarrying a Quantified Assertion describes a later stage, after Quantifiers have been applied, not the neutral starting state.",
  },
  {
    id: "cpe316_ch4_012",
    course: "cpe316",
    chapter: "Chapter 4",
    text: "Which lowercase function symbol represents the axiom of the instrument of regular language that ascribes Assertion to a term?",
    options: [
      "F()",
      "f()",
      "X()",
      "P()",
    ],
    correctAnswer: 1,
    explanation:
      "The axiom of the instrument of regular language, which ascribes Assertion to a term, is represented with the lowercase function f().\n\nF(), in uppercase, instead represents the axiom of Context-neutral language that ascribes a binary opposite to Assertions.\n\nX() is not a notation used for this axiom in the scheme.\n\nP() is not a notation used for this axiom in the scheme.",
  },
  {
    id: "cpe316_ch4_013",
    course: "cpe316",
    chapter: "Chapter 4",
    text: "Which function notation represents the axiom of Context-neutral language that ascribes a binary opposite to Assertions?",
    options: [
      "Lowercase f()",
      "Uppercase F()",
      "Bold uppercase F()",
      "Single-quoted 'F'",
    ],
    correctAnswer: 1,
    explanation:
      "The axiom of Context-neutral language, which ascribes a binary opposite to Assertions, is represented with the uppercase function F(), an Auxiliary-axiom of the universe of discourse.\n\nLowercase f() instead represents the regular-language axiom that ascribes Assertion to a term, a step before binary opposition is introduced.\n\nBold uppercase F() is reserved for simplifying a context-sensitive axiom through quantifiers, a further step beyond context-neutral binary opposition.\n\nSingle-quoted 'F' is not a function notation in this scheme; single quotes are reserved for primitive symbols.",
  },
  {
    id: "cpe316_ch4_014",
    course: "cpe316",
    chapter: "Chapter 4",
    text: "Which notation is used to represent the simplification of a Context-sensitive axiom through quantifiers?",
    options: [
      "Lowercase f()",
      "Uppercase F()",
      "Bold uppercase F()",
      "Double-quoted \"F\"",
    ],
    correctAnswer: 2,
    explanation:
      "The simplification of a Context-sensitive axiom through quantifiers is represented with a bold uppercase function F().\n\nLowercase f() represents the regular-language axiom ascribing Assertion to a term, not a context-sensitive simplification.\n\nUppercase F() represents the context-neutral axiom ascribing a binary opposite to Assertions, a distinct notational level.\n\nDouble-quoted \"F\" is not used as a function notation; double quotes are reserved for strings cueing a term.",
  },
  {
    id: "cpe316_ch4_015",
    course: "cpe316",
    chapter: "Chapter 4",
    text: "Given f(\"Kemi\") and f(\"Ayo\"), what does F(\"Kemi\", \"Ayo\") represent?",
    options: [
      "Two unrelated regular Assertions on isolated strings",
      "A context-neutral formulation over a pair of regular Assertions",
      "A context-sensitive quantification over a variable instance",
      "A Primitive-term shared by two strings",
    ],
    correctAnswer: 1,
    explanation:
      "F(\"Kemi\", \"Ayo\") is a context-neutral formulation built over the pair of regular Assertions f(\"Kemi\") and f(\"Ayo\").\n\nTwo unrelated regular Assertions on isolated strings describes f(\"Kemi\") and f(\"Ayo\") individually, before they are combined by F().\n\nA context-sensitive quantification over a variable instance describes the bold uppercase F() case, which needs variable-terms X and Y, not fixed strings.\n\nA Primitive-term shared by two strings is not what F(\"Kemi\", \"Ayo\") expresses; it is a relation over Assertions, not a shared letter.",
  },
  {
    id: "cpe316_ch4_016",
    course: "cpe316",
    chapter: "Chapter 4",
    text: "If x = \"Kemi\" and y = \"Ayo\", what does F(x, y) represent?",
    options: [
      "A context-neutral formulation on regular terms",
      "A single regular Assertion on an isolated string",
      "A bold-uppercase quantification over variable-terms",
      "A Primitive-term enclosed in single quotes",
    ],
    correctAnswer: 0,
    explanation:
      "F(x, y), with x and y standing for regular terms such as Kemi and Ayo, is a context-neutral formulation on those regular terms.\n\nA single regular Assertion on an isolated string describes a form like f(x) alone, not the paired formulation F(x, y).\n\nA bold-uppercase quantification over variable-terms requires variable-terms X and Y, which are not what x and y denote here.\n\nA Primitive-term enclosed in single quotes describes a single letter symbol, not the two-argument formulation F(x, y).",
  },
  {
    id: "cpe316_ch4_017",
    course: "cpe316",
    chapter: "Chapter 4",
    text: "If x is an instance of the variable-term X and y is an instance of the variable-term Y, what does the bold-uppercase F(X, Y) represent?",
    options: [
      "A regular Assertion on an isolated instance",
      "A context-neutral formulation on a pair of regular terms",
      "A context-neutral quantification simplifying a sensitive instance",
      "A Primitive-term shared between X and Y",
    ],
    correctAnswer: 2,
    explanation:
      "When x belongs to X and y belongs to Y, the bold-uppercase F(X, Y) is a context-neutral quantification that simplifies a context-sensitive instance.\n\nA regular Assertion on an isolated instance describes a plain f() applied to a single string, not this quantified case.\n\nA context-neutral formulation on a pair of regular terms describes the plain uppercase F(x, y), not the bold-uppercase quantified form.\n\nA Primitive-term shared between X and Y is not what F(X, Y) denotes; it denotes a quantified relation over variable-terms.",
  },
  {
    id: "cpe316_ch4_018",
    course: "cpe316",
    chapter: "Chapter 4",
    text: "Which of the following correctly orders the four notational levels from a single Primitive-term symbol to a bold-uppercase quantified formulation?",
    options: [
      "'A' then \"Ade\" then f(x) then F(X, Y) in bold",
      "\"Ade\" then 'A' then F(X, Y) in bold then f(x)",
      "f(x) then F(X, Y) in bold then 'A' then \"Ade\"",
      "F(X, Y) in bold then f(x) then \"Ade\" then 'A'",
    ],
    correctAnswer: 0,
    explanation:
      "The progression runs from a primitive symbol 'A', to a string cueing a term \"Ade\", to a regular Assertion f(x), and finally to the bold-uppercase quantified formulation F(X, Y).\n\nStarting from \"Ade\" before 'A' reverses the order, since a string is built from primitive symbols, not the other way round.\n\nStarting from f(x) skips the primitive-symbol and string stages that must precede any Assertion.\n\nStarting from the bold-uppercase quantified formulation places the most complex level first, before any primitive symbol or string exists.",
  },
  {
    id: "cpe316_ch4_019",
    course: "cpe316",
    chapter: "Chapter 4",
    text: "How many operands does a unary Assertion operator such as boy() admit?",
    options: ["Exactly one", "Exactly two", "Exactly three", "As many as needed"],
    correctAnswer: 0,
    explanation:
      "An Assertion is a unary operator, so it admits exactly one operand, called the Major operand.\n\nExactly two operands describes a binary Relation, not a unary Assertion.\n\nExactly three operands describes a context-sensitive ternary Relation, not a unary Assertion.\n\nAs many as needed misrepresents Assertion as having an unbounded arity, when it is fixed at one.",
  },
  {
    id: "cpe316_ch4_020",
    course: "cpe316",
    chapter: "Chapter 4",
    text: "In the Assertion boy(\"Ade\"), formulated from \"Ade is a boy\", what role does \"Ade\" play?",
    options: [
      "It is the unary Assertion itself",
      "It is the Major operand",
      "It is a Minor operand",
      "It is a Quantifier",
    ],
    correctAnswer: 1,
    explanation:
      "In boy(\"Ade\"), \"Ade\" is the Major operand, the single operand that a unary Assertion admits.\n\nThe unary Assertion itself is boy(), the function, not the operand it is applied to.\n\nA Minor operand belongs to binary and ternary Relations, which admit a second or third operand; a unary Assertion has no Minor operand.\n\nA Quantifier is a separate device used to constrain Relations, not a role played by \"Ade\" inside an Assertion.",
  },
  {
    id: "cpe316_ch4_021",
    course: "cpe316",
    chapter: "Chapter 4",
    text: "If ¬boy(\"Ade\") holds, meaning \"Ade is not a boy\", what can be concluded about girl(\"Ade\") without a further formal prescription?",
    options: [
      "girl(\"Ade\") must also hold",
      "girl(\"Ade\") is automatically false",
      "Nothing can be concluded about girl(\"Ade\")",
      "\"Ade\" ceases to be a valid Major operand",
    ],
    correctAnswer: 2,
    explanation:
      "Negating boy(\"Ade\") does not, by itself, imply girl(\"Ade\"); such a link only holds if it is formally prescribed through a Quantifier, so without that prescription nothing can be concluded about girl(\"Ade\").\n\ngirl(\"Ade\") must also hold overstates what negation alone establishes.\n\ngirl(\"Ade\") is automatically false also overstates the conclusion, since negating boy() says nothing about girl() either way.\n\n\"Ade\" ceases to be a valid Major operand confuses negating an Assertion with invalidating the operand it is applied to.",
  },
  {
    id: "cpe316_ch4_022",
    course: "cpe316",
    chapter: "Chapter 4",
    text: "Consider these two claims about \"Ade is a tall, brilliant boy\": (1) it can be formulated recursively as boy(brilliant(tall(\"Ade\"))); (2) it can equally be formulated as boy(\"Ade\") ∧ brilliant(\"Ade\") ∧ tall(\"Ade\"). Which verdict is correct?",
    options: [
      "Only claim (1) is correct",
      "Only claim (2) is correct",
      "All of these",
      "None of these",
    ],
    correctAnswer: 2,
    explanation:
      "Both formulations are valid: multiple Assertions on a term can be joined with Conjunction as boy(\"Ade\") ∧ brilliant(\"Ade\") ∧ tall(\"Ade\"), and the same Assertions can be nested recursively as boy(brilliant(tall(\"Ade\"))), so \"All of these\" applies.\n\nOnly claim (1) being correct wrongly excludes the conjunctive formulation, which the source also presents as valid.\n\nOnly claim (2) being correct wrongly excludes the recursive nesting, which the source also presents as valid.\n\nNone of these wrongly rejects both formulations even though the source affirms them as equivalent renderings.",
  },
  {
    id: "cpe316_ch4_023",
    course: "cpe316",
    chapter: "Chapter 4",
    text: "Which logical connective, unlike Conjunction, cannot be rendered recursively when combining multiple Assertions on a term?",
    options: ["AND", "OR", "NOT", "IMPLY"],
    correctAnswer: 1,
    explanation:
      "Logic OR cannot be rendered recursively, so a statement such as \"Ade is young but tall\" cannot be expressed in the nested recursive style used for Conjunction.\n\nAND is precisely the connective that can be rendered recursively, as in boy(brilliant(tall(\"Ade\"))).\n\nNOT is a unary negation, not the connective identified as non-recursive in this discussion of multiple Assertions.\n\nIMPLY is used later to constrain Relations through Quantifiers, not the connective flagged here as non-recursive.",
  },
  {
    id: "cpe316_ch4_024",
    course: "cpe316",
    chapter: "Chapter 4",
    text: "\"Ade is a boy and Ade is human\" can be formulated recursively as boy(human(\"Ade\")).",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "This is true: two Assertions joined by Conjunction, such as boy(\"Ade\") ∧ human(\"Ade\"), can be re-expressed recursively as boy(human(\"Ade\")).\n\nFalse would wrongly deny that Conjunction of Assertions supports this recursive nesting, which the source demonstrates directly.\n\nMaybe is not applicable since the source treats this recursive equivalence as settled.\n\nI don't know is not applicable since the source states this formulation explicitly.",
  },
  {
    id: "cpe316_ch4_025",
    course: "cpe316",
    chapter: "Chapter 4",
    text: "How many terms does a context-neutral Relation with Assertion ascribed to it admit?",
    options: ["Exactly one", "Exactly two", "Exactly three", "An unbounded number"],
    correctAnswer: 1,
    explanation:
      "A context-neutral Relation admits exactly two terms, the first being the Major operand and the other the Minor operand.\n\nExactly one term describes a unary Assertion, not a binary Relation.\n\nExactly three terms describes a context-sensitive Relation, a ternary formulation distinct from the context-neutral case.\n\nAn unbounded number misstates Relation arity, which is fixed rather than open-ended.",
  },
  {
    id: "cpe316_ch4_026",
    course: "cpe316",
    chapter: "Chapter 4",
    text: "In Father(\"Akin\", \"Ade\"), formulated from \"Akin is the father of Ade\", which operand is \"Ade\"?",
    options: ["The Major operand", "The Minor operand", "A Quantified variable", "A Primitive-term symbol"],
    correctAnswer: 1,
    explanation:
      "In Father(\"Akin\", \"Ade\"), \"Akin\" is the Major operand and \"Ade\" is the Minor operand.\n\nThe Major operand in this expression is \"Akin\", the first term, not \"Ade\".\n\nA Quantified variable would be an uppercase variable-term restricted by a Quantifier, not a fixed string like \"Ade\" here.\n\nA Primitive-term symbol refers to a single letter such as 'A', not the full string operand \"Ade\".",
  },
  {
    id: "cpe316_ch4_027",
    course: "cpe316",
    chapter: "Chapter 4",
    text: "\"Ade is the son of Akin\" is formulated as Son(\"Ade\", \"Akin\"). Which term is the Major operand of this Relation?",
    options: ["\"Akin\"", "\"Ade\"", "Both terms equally", "Neither term"],
    correctAnswer: 1,
    explanation:
      "In Son(\"Ade\", \"Akin\"), \"Ade\" is the Major operand and \"Akin\" is the Minor operand.\n\n\"Akin\" is the Minor operand in this expression, occupying the second position, not the Major role.\n\nBoth terms equally is incorrect because a context-neutral Relation assigns distinct Major and Minor roles rather than treating its two operands identically.\n\nNeither term is incorrect since one of the two terms must occupy the Major-operand role.",
  },
  {
    id: "cpe316_ch4_028",
    course: "cpe316",
    chapter: "Chapter 4",
    text: "Which of the following is presented as a context-neutral, binary Relation in the English kinship universe?",
    options: ["boy()", "Mother()", "Between()", "Middle()"],
    correctAnswer: 1,
    explanation:
      "Mother() is listed among the binary Relations, alongside Son(), Daughter(), Father(), Brother(), Sister(), Previous(), Next(), Left(), Right(), Front(), and Back().\n\nboy() is a unary Assertion admitting only a Major operand, not a binary Relation.\n\nBetween() is a context-sensitive, ternary Relation admitting three operands, not a binary one.\n\nMiddle() is likewise a context-sensitive, ternary Relation, not a binary one.",
  },
  {
    id: "cpe316_ch4_029",
    course: "cpe316",
    chapter: "Chapter 4",
    text: "\"Kemi is a mother\", formulated as Mother(\"Kemi\"), is described as what kind of formulation?",
    options: [
      "A fully specified expression",
      "An abstraction rather than an expression",
      "A context-sensitive quantification",
      "A Primitive-term formulation",
    ],
    correctAnswer: 1,
    explanation:
      "Mother(\"Kemi\") is an abstraction rather than an expression, since \"Kemi\" merely cues one of several instances of Mother() without a second operand specified.\n\nA fully specified expression requires both operands of the Relation to be given, as in Mother(\"Kemi\", \"Ade\"), which this single-operand form is not.\n\nA context-sensitive quantification would involve a ternary formulation or a bold-uppercase quantifier, neither of which applies to Mother(\"Kemi\") alone.\n\nA Primitive-term formulation refers to a single letter symbol, not a Relation applied to a term.",
  },
  {
    id: "cpe316_ch4_030",
    course: "cpe316",
    chapter: "Chapter 4",
    text: "For Mother(\"Kemi\") to become a full expression rather than an abstraction, what must happen?",
    options: [
      "Its Assertion must be negated",
      "Both of its terms must be specified",
      "It must be rewritten as a ternary Relation",
      "It must be replaced with a Quantifier",
    ],
    correctAnswer: 1,
    explanation:
      "Mother(\"Kemi\") becomes a full expression, such as Mother(\"Kemi\", \"Ade\"), only once both of its two terms are specified.\n\nNegating its Assertion does not supply the missing second operand needed to turn an abstraction into an expression.\n\nRewriting it as a ternary Relation changes the Relation's arity entirely rather than simply completing Mother() as a binary Relation.\n\nReplacing it with a Quantifier addresses a different concern, constraining Relations, rather than completing a two-operand Relation.",
  },
  {
    id: "cpe316_ch4_031",
    course: "cpe316",
    chapter: "Chapter 4",
    text: "How many operands does a context-sensitive Relation such as Between() admit?",
    options: ["One", "Two", "Three", "Four"],
    correctAnswer: 2,
    explanation:
      "A context-sensitive Relation admits exactly three operands: one Major operand and two Minor operands.\n\nOne operand describes a unary Assertion, not a context-sensitive Relation.\n\nTwo operands describes a context-neutral Relation, not the ternary context-sensitive case.\n\nFour operands overstates the arity fixed for a context-sensitive Relation in this scheme.",
  },
  {
    id: "cpe316_ch4_032",
    course: "cpe316",
    chapter: "Chapter 4",
    text: "In Between(\"Akin\", \"Ade\", \"Kemi\"), what happens to the formulation if the two Minor operands, \"Ade\" and \"Kemi\", are swapped in position?",
    options: [
      "The formulation becomes inconsistent",
      "The formulation is unaffected because Minor operands are mutually inclusive here",
      "The Major operand changes to \"Ade\"",
      "The Relation is no longer context-sensitive",
    ],
    correctAnswer: 1,
    explanation:
      "The formulation is unaffected by swapping the two Minor operands, since in a context-sensitive Relation the Minor operands are treated as mutually inclusive and complementary.\n\nThe formulation becoming inconsistent misdescribes ternary Relations like Between(), where swapping Minor operands is explicitly stated not to change the meaning.\n\nThe Major operand does not change; \"Akin\" remains the Major operand regardless of how the Minor operands are ordered.\n\nThe Relation does not lose its context-sensitive status merely because its Minor operands are reordered.",
  },
  {
    id: "cpe316_ch4_033",
    course: "cpe316",
    chapter: "Chapter 4",
    text: "Which pair of binary opposite Relations is used to simplify the ternary Between() into a pair of consistent context-neutral formulations?",
    options: ["Father() and Mother()", "Son() and Daughter()", "Left() and Right()", "Previous() and Next()"],
    correctAnswer: 2,
    explanation:
      "Between() is simplified into a pair of consistent context-neutral formulations using the binary opposite Relations Left() and Right(), depending on which constraint is imposed.\n\nFather() and Mother() are kinship Relations used elsewhere, not the pair used to decompose Between().\n\nSon() and Daughter() are likewise kinship Relations, not the pair used to decompose Between().\n\nPrevious() and Next() are listed as binary Relations in the source but are not the pair used to simplify Between() in the worked example.",
  },
  {
    id: "cpe316_ch4_034",
    course: "cpe316",
    chapter: "Chapter 4",
    text: "What is the stated outcome of attempting to combine the binary opposite Relations Left() and Right() together when simplifying Between()?",
    options: [
      "A more precise ternary formulation results",
      "The result is inconsistency",
      "Both Minor operands become Major operands",
      "The Relation becomes context-neutral by default",
    ],
    correctAnswer: 1,
    explanation:
      "Attempting to combine the binary opposite Relations Left() and Right() together in simplifying Between() culminates in inconsistency, so only one of the pair is used per constraint.\n\nA more precise ternary formulation resulting is the opposite of what is stated; combining the opposites breaks consistency rather than sharpening the formulation.\n\nBoth Minor operands becoming Major operands is not a described effect of combining Left() and Right().\n\nThe Relation becoming context-neutral by default is not the described outcome; the stated outcome is inconsistency, not a change of Relation type.",
  },
  {
    id: "cpe316_ch4_035",
    course: "cpe316",
    chapter: "Chapter 4",
    text: "Which of the following is stated to be the only admissible kind of operand in the definition of Assertions and Relations?",
    options: ["Terms", "Quantifiers", "Auxiliary-axioms", "Prime-axioms"],
    correctAnswer: 0,
    explanation:
      "Terms are the only admissible operand type in the definition of Assertions and Relations.\n\nQuantifiers are devices that later constrain Relations, not the operand type admitted inside Assertion and Relation definitions.\n\nAuxiliary-axioms describe the axiom level associated with Relations themselves, not the operand type they admit.\n\nPrime-axioms describe the Quantification level of the grammar, not the admissible operand of Assertions and Relations.",
  },
  {
    id: "cpe316_ch4_036",
    course: "cpe316",
    chapter: "Chapter 4",
    text: "Consider these two claims about Son(\"Ade\") and Mother(\"Kemi\"): (1) both are abstractions rather than full expressions; (2) both would need to be rewritten as ternary Relations to become full expressions. Which verdict is correct?",
    options: ["Only claim (1) is correct", "Only claim (2) is correct", "All of these", "None of these"],
    correctAnswer: 0,
    explanation:
      "Only claim (1) is correct: Son(\"Ade\") and Mother(\"Kemi\") are each abstractions because only one operand is given, but completing them only requires adding a second operand while keeping them binary, such as Son(\"Ade\", \"Akin\") or Mother(\"Kemi\", \"Ade\"), not rewriting them as ternary Relations.\n\nOnly claim (2) being correct wrongly accepts the false rewriting-as-ternary claim while implicitly rejecting the true abstraction claim.\n\nAll of these wrongly accepts claim (2), when completing these Relations keeps them binary rather than making them ternary.\n\nNone of these wrongly rejects claim (1), which correctly describes both forms as abstractions.",
  },
  {
    id: "cpe316_ch4_037",
    course: "cpe316",
    chapter: "Chapter 4",
    text: "Which of the following relations is listed as an example of a context-sensitive, ternary Relation rather than a binary one?",
    options: ["Current()", "Father()", "Sister()", "Daughter()"],
    correctAnswer: 0,
    explanation:
      "Current() is listed alongside Middle() and Between() as an example of a context-sensitive Relation admitting three operands.\n\nFather() is listed among the binary, context-neutral Relations, not the ternary set.\n\nSister() is likewise listed among the binary, context-neutral Relations.\n\nDaughter() is also listed among the binary, context-neutral Relations, not the ternary set.",
  },
  {
    id: "cpe316_ch4_038",
    course: "cpe316",
    chapter: "Chapter 4",
    text: "When the constraint imposed on Between(\"Akin\", \"Ade\", \"Kemi\") uses Left(), which pair of context-neutral formulations results?",
    options: [
      "Right(\"Kemi\", \"Akin\") and Right(\"Akin\", \"Ade\")",
      "Left(\"Ade\", \"Akin\") and Left(\"Akin\", \"Kemi\")",
      "Father(\"Akin\", \"Ade\") and Mother(\"Kemi\", \"Ade\")",
      "Son(\"Ade\", \"Akin\") and Daughter(\"Kemi\", \"Akin\")",
    ],
    correctAnswer: 1,
    explanation:
      "Using Left() as the constraint gives Left(\"Ade\", \"Akin\") ∧ Left(\"Akin\", \"Kemi\"), expressing that Akin is between Ade and Kemi because Ade is left of Akin and Akin is left of Kemi.\n\nRight(\"Kemi\", \"Akin\") and Right(\"Akin\", \"Ade\") is instead the pair produced when the Right() constraint is imposed, not Left().\n\nFather(\"Akin\", \"Ade\") and Mother(\"Kemi\", \"Ade\") mix in unrelated kinship Relations that play no part in simplifying Between().\n\nSon(\"Ade\", \"Akin\") and Daughter(\"Kemi\", \"Akin\") likewise mix in unrelated kinship Relations, not the binary-opposite pair used here.",
  },
  {
    id: "cpe316_ch4_039",
    course: "cpe316",
    chapter: "Chapter 4",
    text: "What are Quantifiers used to impose on a Relation, as rendered through a Variable operand?",
    options: ["A negation", "A constraint", "A recursive nesting", "A new Prime-axiom"],
    correctAnswer: 1,
    explanation:
      "Quantifiers impose a constraint on a Relation as rendered through a Variable operand, restricting unary Assertion and binary Relation.\n\nA negation is a separate logical operator, distinct from the constraining role Quantifiers play here.\n\nA recursive nesting describes how multiple Assertions can be combined with Conjunction, not the function of Quantifiers.\n\nA new Prime-axiom is not what Quantifiers introduce; they constrain existing Relations rather than establishing a fresh Prime-axiom.",
  },
  {
    id: "cpe316_ch4_040",
    course: "cpe316",
    chapter: "Chapter 4",
    text: "\"Every man has a mother\" is formulated as ∀X. man(X) → ▽Y. Mother(Y, X). What does the ∀ quantifier express here?",
    options: ["Some", "Every", "None", "Exactly one"],
    correctAnswer: 1,
    explanation:
      "The ∀ quantifier expresses \"Every\", so ∀X. man(X) restricts the formulation to every instance of X that satisfies man(X).\n\nSome is instead expressed by the △ quantifier, not ∀.\n\nNone is not a meaning carried by ∀ in this scheme; ∀ expresses universal, not negative, quantification.\n\nExactly one is closer to the ▽ quantifier's role in singling out an instance such as Y, not the role of ∀.",
  },
  {
    id: "cpe316_ch4_041",
    course: "cpe316",
    chapter: "Chapter 4",
    text: "\"Some men are fathers\" is formulated as △X. man(X) → Father(X). What does the △ quantifier express?",
    options: ["Every", "Some", "None", "Exactly one"],
    correctAnswer: 1,
    explanation:
      "The △ quantifier expresses \"Some\", restricting the formulation to only some instances of X that satisfy man(X).\n\nEvery is instead expressed by the ∀ quantifier, not △.\n\nNone is not a meaning carried by △; it expresses a partial, not a null, quantification.\n\nExactly one is closer to the role of ▽ in singling out a specific instance, not the role of △.",
  },
  {
    id: "cpe316_ch4_042",
    course: "cpe316",
    chapter: "Chapter 4",
    text: "\"A man has a mother\" is formulated as man(X) → ▽Y. Mother(Y, X). What role does the ▽ quantifier play with respect to Y?",
    options: [
      "It restricts Y to every possible mother",
      "It singles out one admissible instance of Y",
      "It negates the existence of Y",
      "It makes Y a Primitive-term",
    ],
    correctAnswer: 1,
    explanation:
      "The ▽ quantifier singles out one admissible instance of the variable Y, expressing that a man has a mother without asserting every possible mother at once.\n\nRestricting Y to every possible mother describes the role of ∀, not ▽.\n\nNegating the existence of Y misdescribes ▽, which singles out an instance rather than denying one.\n\nMaking Y a Primitive-term confuses the role of a quantifier with the role of the notation conventions for symbols, which is unrelated to ▽'s constraining function.",
  },
  {
    id: "cpe316_ch4_043",
    course: "cpe316",
    chapter: "Chapter 4",
    text: "\"A child can either be a male or a female\" is formulated as ▽X. child(X) → male(X) ∨ female(X). Which connective joins male(X) and female(X) here?",
    options: ["Conjunction", "Disjunction", "Negation", "Implication"],
    correctAnswer: 1,
    explanation:
      "Disjunction, the OR connective, joins male(X) and female(X), reflecting the \"either... or\" phrasing of the original sentence.\n\nConjunction would instead require both male(X) and female(X) to hold together, which is not what \"either... or\" expresses.\n\nNegation is a unary operator and cannot join two Assertions the way this formulation does.\n\nImplication is used to link a Quantified condition to its consequence, such as child(X) to the disjunction, not to join male(X) and female(X) to each other.",
  },
  {
    id: "cpe316_ch4_044",
    course: "cpe316",
    chapter: "Chapter 4",
    text: "In a context-sensitive Relation once it is constrained by a Quantifier, how are the positions of the Minor operands described?",
    options: [
      "Fixed and non-swappable",
      "Location neutral, so they can be swapped without affecting the message",
      "Reassigned as a new Major operand",
      "Removed entirely from the formulation",
    ],
    correctAnswer: 1,
    explanation:
      "Once a context-sensitive Relation is constrained, its Minor operands are location neutral, meaning their positions can be swapped without changing the message.\n\nFixed and non-swappable contradicts the explicitly stated mutual inclusivity and complementarity of Minor operands in this case.\n\nReassigned as a new Major operand mischaracterizes what happens; the Minor operands keep their Minor role, only their order becomes flexible.\n\nRemoved entirely from the formulation is incorrect since the Minor operands remain part of the constrained Relation, just reorderable.",
  },
  {
    id: "cpe316_ch4_045",
    course: "cpe316",
    chapter: "Chapter 4",
    text: "If a wedding process is constrained to between two individuals only, Married(X, Y) → Married(Y, X) is stated to hold. What happens if this same swapping is attempted in a context-neutral formulation?",
    options: [
      "It remains valid without any change",
      "It culminates in an inconsistent expression",
      "It becomes a ternary Relation automatically",
      "It converts X and Y into Primitive-terms",
    ],
    correctAnswer: 1,
    explanation:
      "Swapping the operand order is stated to culminate in an inconsistent expression when attempted in a context-neutral formulation, unlike the constrained context-sensitive case.\n\nRemaining valid without any change describes the constrained context-sensitive case, not the context-neutral one the question asks about.\n\nBecoming a ternary Relation automatically is not a described effect of attempting this swap.\n\nConverting X and Y into Primitive-terms is unrelated to what happens when operand order is swapped in a context-neutral formulation.",
  },
  {
    id: "cpe316_ch4_046",
    course: "cpe316",
    chapter: "Chapter 4",
    text: "\"X and Y are sibling\" is equivalent to \"Y and X are sibling\", giving Sibling(X, Y) → Sibling(Y, X), when which Relation is used to constrain it?",
    options: ["Married()", "Parent()", "Father()", "Egbon()"],
    correctAnswer: 1,
    explanation:
      "Parent() is the Relation used to constrain Sibling(), yielding Sibling(X, Y) → Sibling(Y, X) as a mutually swappable formulation.\n\nMarried() is the Relation used in the earlier wedding example, not the one constraining Sibling() here.\n\nFather() alone is not cited as the constraint used for the general Sibling() case, though it appears in the related Brother() restriction.\n\nEgbon() is a Relation from the later Yoruba kinship section, not the Relation used to constrain the English Sibling() formulation.",
  },
  {
    id: "cpe316_ch4_047",
    course: "cpe316",
    chapter: "Chapter 4",
    text: "When the Assertion Male() is used to further restrict Sibling() into Brother(X, Y) → Brother(Y, X), what is implied about X and Y?",
    options: [
      "Male(X) and Male(Y) both hold",
      "Only Male(X) holds",
      "Neither X nor Y is male",
      "X and Y must belong to different Ebi",
    ],
    correctAnswer: 0,
    explanation:
      "Restricting Sibling() with the Assertion Male() to obtain Brother(X, Y) → Brother(Y, X) implies that both Male(X) and Male(Y) hold.\n\nOnly Male(X) holding would leave Y unconstrained, which does not match the stated restriction applied to both terms.\n\nNeither X nor Y being male directly contradicts the purpose of applying the Male() Assertion to this Relation.\n\nX and Y belonging to different Ebi is a Yoruba-kinship notion unrelated to this English-language Brother() restriction.",
  },
  {
    id: "cpe316_ch4_048",
    course: "cpe316",
    chapter: "Chapter 4",
    text: "\"All fathers are male\" is formulated as ∀X. Father(X) → male(X). Which quantifier introduces this formulation?",
    options: ["△", "▽", "∀", "None; it uses no quantifier"],
    correctAnswer: 2,
    explanation:
      "The ∀ quantifier introduces this formulation, matching the universal claim that every father is male.\n\n△ expresses \"Some\" and would understate the universal \"All\" claim being made.\n\n▽ singles out one admissible instance and would likewise understate the intended universal claim.\n\nA quantifier is present in this formulation, so \"None; it uses no quantifier\" is incorrect.",
  },
  {
    id: "cpe316_ch4_049",
    course: "cpe316",
    chapter: "Chapter 4",
    text: "Consider these two claims about Quantifiers: (1) they can restrict only a ternary Relation, never a unary Assertion; (2) they can restrict only a Nominal-term, never a Relation. Which verdict is correct?",
    options: ["Only claim (1) is correct", "Only claim (2) is correct", "All of these", "None of these"],
    correctAnswer: 3,
    explanation:
      "Neither claim is correct: Quantifiers are stated to impose constraint on both \"Unary Assertion\" and \"Binary relation\", so claim (1) wrongly excludes unary Assertion and claim (2) wrongly excludes Relations altogether, making \"None of these\" the correct verdict.\n\nOnly claim (1) being correct wrongly accepts a claim that excludes unary Assertion, which Quantifiers do restrict.\n\nOnly claim (2) being correct wrongly accepts a claim that excludes Relations, which Quantifiers do restrict.\n\nAll of these wrongly accepts both claims even though both misstate what Quantifiers can restrict.",
  },
  {
    id: "cpe316_ch4_050",
    course: "cpe316",
    chapter: "Chapter 4",
    text: "When a Wedding process W constrains a context-sensitive Relation between two instances, which formulation is given for \"X and Y are married through Wedding process W\"?",
    options: ["Married(X, Y, W)", "Married(W, X, Y)", "Wedding(X, Y, W)", "Married(X, Y)"],
    correctAnswer: 1,
    explanation:
      "The formulation given is Married(W, X, Y), placing the Wedding process W as the Major operand of the ternary Relation, with X and Y as its Minor operands.\n\nMarried(X, Y, W) reorders the operands incorrectly, since W is stated to occupy the Major-operand position, not the final Minor position.\n\nWedding(X, Y, W) uses the wrong function name; the Relation is named Married(), not Wedding().\n\nMarried(X, Y) is the simplified binary form used once the wedding is constrained to two individuals, not the general ternary formulation with W included.",
  },
  {
    id: "cpe316_ch4_051",
    course: "cpe316",
    chapter: "Chapter 4",
    text: "What distinguishes a Transitive relation from the binary and ternary Relations discussed earlier?",
    options: [
      "It expresses interrelation between more than two individuals",
      "It admits only one operand",
      "It cannot use Conjunction",
      "It is exclusive to the Yoruba kinship universe",
    ],
    correctAnswer: 0,
    explanation:
      "A Transitive relation expresses interrelation between more than two individuals, unlike the binary and ternary Relations discussed before it.\n\nAdmitting only one operand describes a unary Assertion, not a Transitive relation involving several individuals.\n\nBeing unable to use Conjunction is false; Transitive relations such as Grandfather() are built precisely by conjoining component Relations.\n\nBeing exclusive to the Yoruba kinship universe is incorrect since Transitive relations such as Grandfather() and Sibling() are introduced within the English kinship discussion.",
  },
  {
    id: "cpe316_ch4_052",
    course: "cpe316",
    chapter: "Chapter 4",
    text: "\"The father of a father is a grandfather\" interrelates how many individuals in its Transitive-relation formulation?",
    options: ["Two", "Three", "Four", "An unlimited number"],
    correctAnswer: 1,
    explanation:
      "This Transitive relation interrelates three individuals, X, Y, and Z, in the formulation Grandfather(X, Z) → Father(X, Y) ∧ (Mother(Y, Z) ∨ Father(X, Y)).\n\nTwo individuals would only suffice for a simple binary Relation such as Father(), not the compositional Grandfather() formulation.\n\nFour individuals overstates the arity used in this particular worked Transitive formulation.\n\nAn unlimited number misrepresents the Grandfather() formulation, which is fixed to three named variables.",
  },
  {
    id: "cpe316_ch4_053",
    course: "cpe316",
    chapter: "Chapter 4",
    text: "\"The parent of a parent is a grandparent\", formulated as Grandparent(X, Z) → Parent(Y, Z) ∧ Parent(X, Y), differs from the Grandfather() formulation in what respect?",
    options: [
      "It interrelates four individuals instead of three",
      "It ignores the gender of the parents involved",
      "It uses Disjunction instead of Conjunction throughout",
      "It admits only a single operand",
    ],
    correctAnswer: 1,
    explanation:
      "The Grandparent() formulation ignores the gender of the parents involved, using the ungendered Parent() Relation rather than the gendered Father()/Mother() pairing used for Grandfather().\n\nIt still interrelates three individuals, X, Y, and Z, the same count as the Grandfather() formulation, not four.\n\nIt is built with Conjunction linking Parent(Y, Z) and Parent(X, Y), not with Disjunction throughout.\n\nIt admits three operands via its component Relations, not a single operand.",
  },
  {
    id: "cpe316_ch4_054",
    course: "cpe316",
    chapter: "Chapter 4",
    text: "Which Relation is used to formulate that two individuals X and Y are Siblings, on the grounds that they share a Parent P?",
    options: ["Married()", "Parent()", "Egbon()", "Iyawo()"],
    correctAnswer: 1,
    explanation:
      "Parent() is used to formulate the Sibling relation, since X and Y are Siblings if a common Parent P is Parent of both, giving Sibling(X, Y) → Parent(P, X) ∧ Parent(P, X) as stated in the source.\n\nMarried() constrains a different Relation altogether, the wedding-based Relation between spouses, not the shared-parent basis for Sibling().\n\nEgbon() is a Yoruba-kinship Relation for an elder, introduced later, not the Relation grounding the English Sibling() formulation.\n\nIyawo() is the Yoruba Relation for a wife, also introduced later, and unrelated to grounding Sibling() through a shared parent.",
  },
  {
    id: "cpe316_ch4_055",
    course: "cpe316",
    chapter: "Chapter 4",
    text: "How is the Parent() relation further formulated in terms of gendered Relations, as P(X, Y) → Father(X, Y) ∨ Mother(X, Y)?",
    options: [
      "X is parent of Y if X is father of Y or X is mother of Y",
      "X is parent of Y only if X is both father and mother of Y",
      "X is parent of Y if Y is father of X and Y is mother of X",
      "X is parent of Y only if neither Father(X, Y) nor Mother(X, Y) holds",
    ],
    correctAnswer: 0,
    explanation:
      "P(X, Y) → Father(X, Y) ∨ Mother(X, Y) expresses that X is parent of Y if X is father of Y or X is mother of Y, using Disjunction rather than requiring both.\n\nRequiring X to be both father and mother of Y misreads the Disjunction as a Conjunction, which is not what ∨ expresses.\n\nReversing the roles so that Y is father or mother of X inverts the Major and Minor operands from how the formulation is stated.\n\nRequiring neither Father(X, Y) nor Mother(X, Y) to hold directly contradicts the Disjunction, which requires at least one to hold.",
  },
  {
    id: "cpe316_ch4_056",
    course: "cpe316",
    chapter: "Chapter 4",
    text: "For Brother(X, Y) to be mutually inclusive, giving Brother(X, Y) → Brother(Y, X), which Assertion must hold for both X and Y?",
    options: ["human(X) and human(Y)", "male(X) and male(Y)", "boy(X) and boy(Y)", "child(X) and child(Y)"],
    correctAnswer: 1,
    explanation:
      "Brother(X, Y) → Brother(Y, X) is mutually inclusive under the condition male(X) ∧ male(Y), so both individuals must be asserted male.\n\nhuman(X) and human(Y) alone is too weak, since a shared humanity does not on its own establish the gendered Brother() relation.\n\nboy(X) and boy(Y) is not the Assertion used in the source's Brother() formulation, which instead applies male().\n\nchild(X) and child(Y) is likewise not the Assertion cited; the source specifically applies male() to ground Brother().",
  },
  {
    id: "cpe316_ch4_057",
    course: "cpe316",
    chapter: "Chapter 4",
    text: "The generalised Grandfather() formulation, ∀x∈X, y∈Y, z∈Z, Grandfather(x, z) → Father(x, y) ∧ (Mother(y, z) ∨ Father(y, z)), quantifies its variables with which quantifier?",
    options: ["△", "▽", "∀", "No quantifier is used"],
    correctAnswer: 2,
    explanation:
      "The generalised Grandfather() formulation is quantified with ∀, applying the relation universally across x∈X, y∈Y, and z∈Z.\n\n△ expresses \"Some\" and is not the quantifier used in this generalised formulation.\n\n▽ singles out one admissible instance and is likewise not the quantifier used here.\n\nA quantifier, ∀, is explicitly present in the formulation, so \"No quantifier is used\" is incorrect.",
  },
  {
    id: "cpe316_ch4_058",
    course: "cpe316",
    chapter: "Chapter 4",
    text: "Sibling(X, Y) → Married(P, X) ∧ Married(P, Y) is the stated formulation for two individuals sharing a Parent.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "This is false: the stated formulation for two individuals sharing a Parent is Sibling(X, Y) → Parent(P, X) ∧ Parent(P, X), built from the Parent() relation, not Married().\n\nTrue would wrongly accept Married() as the relation grounding Sibling(), when Parent() is the relation actually used.\n\nMaybe is not applicable since the correct relation, Parent(), is stated directly.\n\nI don't know is not applicable since the formulation is explicitly stated in the source.",
  },
  {
    id: "cpe316_ch4_059",
    course: "cpe316",
    chapter: "Chapter 4",
    text: "Which two component Relations are conjoined to formulate Brother(X, Y) as male(X) ∧ Parent(P, X) ∧ Parent(P, Y)?",
    options: [
      "Being male and sharing a common Parent",
      "Being married and sharing a common Ebi",
      "Being older and being an Egbon",
      "Being a Nominal-term and being a Primitive-term",
    ],
    correctAnswer: 0,
    explanation:
      "Brother(X, Y) → male(X) ∧ Parent(P, X) ∧ Parent(P, Y) conjoins the Assertion of being male with the shared Parent Relation linking both X and Y to a common P.\n\nBeing married and sharing a common Ebi describes the Yoruba Iyawo() formulation, not the English Brother() formulation.\n\nBeing older and being an Egbon describes the later Yoruba Egbon() relation, not Brother().\n\nBeing a Nominal-term and being a Primitive-term are notational categories, not the component Relations conjoined here.",
  },
  {
    id: "cpe316_ch4_060",
    course: "cpe316",
    chapter: "Chapter 4",
    text: "In which direction are Yoruba expressions, including kinship, rendered through the Koro-Igi (Seed-Tree) aspect of the Atoledole (Organic) metaphor?",
    options: [
      "From Primitive-terms upward toward the Prime-axiom",
      "From the Prime-axiom toward Primitive-terms",
      "Simultaneously in both directions",
      "There is no directional structure",
    ],
    correctAnswer: 1,
    explanation:
      "Yoruba expressions are rendered from Oju-odu, the Prime-axiom, toward Ite-odu, the Primitive-terms or Ohun (Terms), the opposite direction from English.\n\nRendering from Primitive-terms upward toward the Prime-axiom describes the English kinship universe's direction, not the Yoruba one.\n\nSimultaneously in both directions is not how the Koro-Igi metaphor is described; a single direction, from Prime-axiom outward, is specified.\n\nThere being no directional structure contradicts the explicit Seed-Tree metaphor, which is defined by its direction of rendering.",
  },
  {
    id: "cpe316_ch4_061",
    course: "cpe316",
    chapter: "Chapter 4",
    text: "What role do Ohun (Terms) play in the Yoruba kinship universe?",
    options: [
      "They cue the identity of an individual, group, and ancestry of Eniyan",
      "They serve only as Auxiliary-axioms of the grammar",
      "They replace Iwon (Quantifiers) entirely",
      "They are exclusive to the English kinship universe",
    ],
    correctAnswer: 0,
    explanation:
      "Ohun (Terms) in Yoruba kinship are used to cue the Idamo (identity) of an individual, a group, and the ancestry or progenitor of Eniyan (Human agency).\n\nServing only as Auxiliary-axioms of the grammar misplaces Ohun, which are Terms, not the axiom level associated with Relations.\n\nReplacing Iwon (Quantifiers) entirely is incorrect since Terms and Quantifiers are distinct devices that both appear in the Yoruba kinship formulation.\n\nBeing exclusive to the English kinship universe is the reverse of the truth; Ohun is the Yoruba-specific term for Terms.",
  },
  {
    id: "cpe316_ch4_062",
    course: "cpe316",
    chapter: "Chapter 4",
    text: "What is stated to be the Prime-axiom of the Yoruba kinship universe of discourse, from which every other formulation is grounded?",
    options: ["Iyekan()", "Obakan()", "Ebi()", "Egbon()"],
    correctAnswer: 2,
    explanation:
      "Ebi() is the Prime-axiom of the Yoruba kinship universe of discourse, with every other kinship formulation grounded in it.\n\nIyekan() contextualises kinship formulation on the Mother's root but is not itself the Prime-axiom.\n\nObakan() contextualises kinship formulation on the Father's root but is likewise not the Prime-axiom.\n\nEgbon() is a Relation for an elder introduced later in the chapter, not the Prime-axiom of the whole kinship universe.",
  },
  {
    id: "cpe316_ch4_063",
    course: "cpe316",
    chapter: "Chapter 4",
    text: "Which English word is presented as the closest equivalent to Ebi?",
    options: ["Family", "Kindred", "Household", "Lineage"],
    correctAnswer: 1,
    explanation:
      "Kindred is presented as the closest English word to Ebi, formulated through relationship seeded or rooted in Alale (Ancestry).\n\nFamily is a plausible everyday translation but is not the term the source specifically identifies as closest to Ebi.\n\nHousehold refers to a residential grouping, not the ancestry-rooted relationship the source associates with Ebi.\n\nLineage emphasizes descent alone and is not the specific English word the source names as closest to Ebi.",
  },
  {
    id: "cpe316_ch4_064",
    course: "cpe316",
    chapter: "Chapter 4",
    text: "Consider these two claims about Iyekan and Obakan: (1) Iyekan contextualises kinship on Baba (Father) while Obakan contextualises it on Iya (Mother); (2) the two are treated as mutually inclusive and complementary binary opposites. Which verdict is correct?",
    options: ["Only claim (1) is correct", "Only claim (2) is correct", "All of these", "None of these"],
    correctAnswer: 1,
    explanation:
      "Only claim (2) is correct: the two roots are indeed treated as mutually inclusive, complementary binary opposites, but claim (1) reverses the grounding, since Iyekan is actually grounded in Iya (Mother) and Obakan in Baba (Father), not the other way round.\n\nOnly claim (1) being correct wrongly accepts the reversed Mother/Father grounding.\n\nAll of these wrongly accepts claim (1) alongside the correct claim (2).\n\nNone of these wrongly rejects claim (2), which correctly describes the two roots as complementary binary opposites.",
  },
  {
    id: "cpe316_ch4_065",
    course: "cpe316",
    chapter: "Chapter 4",
    text: "Relations in the Yoruba kinship universe, such as Omo(), are defined over what, rather than over an isolated Nominal-term?",
    options: [
      "A variable Nominal-term comprising instances of the isolated term",
      "A fixed Primitive-term letter",
      "An Auxiliary-axiom of the English grammar",
      "A single unquantified string",
    ],
    correctAnswer: 0,
    explanation:
      "Relations in Yoruba kinship, such as Omo(), are defined over a variable Nominal-term, a set comprising instances of the isolated Nominal-term, rather than over one isolated term directly.\n\nA fixed Primitive-term letter describes the English notion of a single symbol, not the Yoruba variable Nominal-term basis for Relations.\n\nAn Auxiliary-axiom of the English grammar belongs to a different universe of discourse entirely, not the Yoruba Relation definitions.\n\nA single unquantified string is closer to an isolated Nominal-term, which the source explicitly contrasts with the variable term actually used.",
  },
  {
    id: "cpe316_ch4_066",
    course: "cpe316",
    chapter: "Chapter 4",
    text: "In Omo(X, P) → Ebi(E, X, P) ∧ Obi(P, X), what condition must hold of P with respect to X for X to be Omo of P?",
    options: [
      "P must be young enough to be Omo of X",
      "P must share the same Ebi but not be an Obi of X",
      "P must be old enough to be Obi (Parent) of X",
      "P must be a Nominal-term rather than a Term",
    ],
    correctAnswer: 2,
    explanation:
      "X is Omo of P if X and P share ancestry through Ebi(E, X, P) and P is old enough to be Obi (Parent) of X, giving Obi(P, X).\n\nP being young enough to be Omo of X reverses the required age relationship, which instead requires P to be old enough to parent X.\n\nP sharing the same Ebi but not being an Obi of X contradicts the formulation, which requires Obi(P, X) to hold, not to be excluded.\n\nP being a Nominal-term rather than a Term misapplies a notational distinction that is not the condition specified for this Relation.",
  },
  {
    id: "cpe316_ch4_067",
    course: "cpe316",
    chapter: "Chapter 4",
    text: "What does Omoomo(X, Z) → Omo(X, Y) ∧ Omo(Y, Z) formulate?",
    options: [
      "A sibling relationship between X and Z",
      "A grandchild relationship, generalised through three variables",
      "A marriage relationship mediated by Y",
      "An elder relationship grounded in the Ju() relation",
    ],
    correctAnswer: 1,
    explanation:
      "Omoomo(X, Z) → Omo(X, Y) ∧ Omo(Y, Z) formulates \"Child of Child\", that is, Grandchild, generalised through the three variables X, Y, and Z.\n\nA sibling relationship between X and Z is a different Relation, grounded in a shared Parent, not the two-step Omo() chain used for Omoomo().\n\nA marriage relationship mediated by Y describes the Iyawo() formulation, not Omoomo().\n\nAn elder relationship grounded in the Ju() relation describes Egbon(), a separate Relation introduced later in the chapter.",
  },
  {
    id: "cpe316_ch4_068",
    course: "cpe316",
    chapter: "Chapter 4",
    text: "In Iyawo(Y, X) → Anon(M, EW, EH) ∧ Ebi(EW, Y) ∧ Ebi(EH, X), what does Anon(M, EW, EH) establish between the two Ebi involved?",
    options: [
      "An irrefutable obligation established through Marriage",
      "A temporary agreement that either Ebi may revoke",
      "A shared Prime-axiom between the two Ebi",
      "A transitive Relation extending to a third Ebi",
    ],
    correctAnswer: 0,
    explanation:
      "Anon(M, EW, EH) establishes an irrefutable, irrebuttable obligation between the Ebi of the wife (EW) and the Ebi of the husband (EH), grounded in Marriage (M).\n\nA temporary agreement that either Ebi may revoke contradicts the stated irrefutability of the obligation established through Marriage.\n\nA shared Prime-axiom between the two Ebi misapplies the grammar's Prime-axiom concept to what is actually a marriage obligation.\n\nA transitive Relation extending to a third Ebi is not what Anon() establishes; it links exactly the two Ebi named, EW and EH.",
  },
  {
    id: "cpe316_ch4_069",
    course: "cpe316",
    chapter: "Chapter 4",
    text: "Which Yoruba word denotes the woman who becomes Iyawo in the Ebi of her Oko?",
    options: ["Obinrin", "Iyawo", "Omo", "Egbon"],
    correctAnswer: 1,
    explanation:
      "Iyawo is the Yoruba word for the woman who becomes a wife in the Ebi of her Oko, established on grounds of agreement between the two Ebi.\n\nObinrin denotes a woman generally, grounded in the Ako/Abo distinction, not the specific wife-in-marriage relation.\n\nOmo denotes a child relation grounded in shared ancestry, not the marriage relation described here.\n\nEgbon denotes an elder relation grounded in the Ju() relation, unrelated to marriage.",
  },
  {
    id: "cpe316_ch4_070",
    course: "cpe316",
    chapter: "Chapter 4",
    text: "The Iyawo() relation is established purely by unilateral declaration of the Oko's Ebi, without any agreement from the woman's Ebi.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "This is false: Obinrin becomes Iyawo in the Ebi of her Oko on grounds of agreement between the two Ebi, with the coming together of both Ebi established through Anon (Marriage), not by unilateral declaration.\n\nTrue would wrongly deny that the woman's Ebi participates in this agreement, when both Ebi are stated to come together through it.\n\nMaybe is not applicable since the source directly describes this basis as an agreement between both Ebi.\n\nI don't know is not applicable since the source states this basis explicitly.",
  },
  {
    id: "cpe316_ch4_071",
    course: "cpe316",
    chapter: "Chapter 4",
    text: "In Iyawo(Y, x) → Anon(M, EW, EH) ∧ Ebi(EW, Y) ∧ Ebi(EH, x), what does x∈X represent?",
    options: [
      "A single individual instance of Oko in Ebi EH",
      "The Ebi of the Iyawo, denoted EW",
      "A Quantifier restricting the marriage",
      "A Primitive-term letter of the Yoruba alphabet",
    ],
    correctAnswer: 0,
    explanation:
      "Here x∈X represents a single individual instance of Oko belonging to Ebi EH, with EW remaining the Ebi of the Iyawo Y.\n\nThe Ebi of the Iyawo, EW, is a separate component of the formulation, not what x∈X itself represents.\n\nA Quantifier restricting the marriage is not what x∈X denotes; x∈X is an individual term instance, not a quantifying device.\n\nA Primitive-term letter of the Yoruba alphabet is inapplicable, since Primitive-terms are stated elsewhere to be inadmissible in Yoruba altogether.",
  },
  {
    id: "cpe316_ch4_072",
    course: "cpe316",
    chapter: "Chapter 4",
    text: "Consider these two claims about the Omo() relation formulas: (1) Omo(x, P) → Ebi(E, x, P) ∧ Ju(P, x) expresses that every instance x∈X young enough to be Omo of P is his or her Omo; (2) Omo(X, p) → Ebi(E, X, p) ∧ Obi(p, X) expresses that every instance p∈P old enough to be Obi of X is his or her Obi. Which verdict is correct?",
    options: ["Only claim (1) is correct", "Only claim (2) is correct", "All of these", "None of these"],
    correctAnswer: 1,
    explanation:
      "Only claim (2) is correct: it matches the source's own gloss of the parent-indexed Omo() variant, but claim (1) substitutes the Ju (Surpasses) relation used for Egbon() where the formula actually uses Obi(P, x), the Parent relation.\n\nOnly claim (1) being correct wrongly accepts a formula that swaps in the unrelated Ju() relation.\n\nAll of these wrongly accepts claim (1) alongside the correctly stated claim (2).\n\nNone of these wrongly rejects claim (2), which correctly glosses the parent-indexed Omo() formula.",
  },
  {
    id: "cpe316_ch4_073",
    course: "cpe316",
    chapter: "Chapter 4",
    text: "Why are formulations such as Gender/Sex, Age, and Status not admissible in Yoruba kinship discourse?",
    options: [
      "Because Yoruba kinship is grounded in mutually inclusive, complementary binary opposites rather than fixed categorical traits",
      "Because Yoruba has no written alphabet to express them",
      "Because Ebi() cannot admit more than two operands",
      "Because such formulations are reserved for the English kinship universe only",
    ],
    correctAnswer: 0,
    explanation:
      "Such categorical formulations are not admissible because Yoruba kinship discourse is grounded in the mutually inclusive, complementary treatment of binary opposite aspects of an instance, rather than fixed categorical traits like Gender, Age, or Status.\n\nYoruba having no written alphabet is false; the source describes a written Yoruba alphabet comprising Tone and Phone signs.\n\nEbi() being limited in operand count is unrelated to why Gender, Age, and Status formulations are excluded.\n\nSuch formulations being reserved for English only restates the exclusion without giving the actual stated reason, which is the binary-opposite, complementary grounding of Yoruba kinship.",
  },
  {
    id: "cpe316_ch4_074",
    course: "cpe316",
    chapter: "Chapter 4",
    text: "Ako and Abo are grounded in which pair of syllables?",
    options: ["Ko (Emitter) and Bo (Receptor)", "Egbon and Aburo", "Oko and Iyawo", "Iya and Baba"],
    correctAnswer: 0,
    explanation:
      "Ako and Abo are grounded in the syllables Ko (Emitter) and Bo (Receptor) respectively, ascribed to sensory accounts of that which emits and that which receives.\n\nEgbon and Aburo are the binary opposite terms for Older and Younger, a different pair from Ako/Abo.\n\nOko and Iyawo denote husband and wife, unrelated to the syllabic grounding of Ako and Abo.\n\nIya and Baba denote Mother and Father, unrelated to the syllabic grounding of Ako and Abo.",
  },
  {
    id: "cpe316_ch4_075",
    course: "cpe316",
    chapter: "Chapter 4",
    text: "What does the Yoruba single syllable \"rin\" cue, as used in forming Okunrin and Obinrin?",
    options: [
      "The centre or core of an instance",
      "The circumstance of a parent's calamity",
      "The Tone alphabet exclusively",
      "The Ebi Prime-axiom",
    ],
    correctAnswer: 0,
    explanation:
      "The syllable \"rin\" cues the centre or core of an instance, and is used with Ako and Abo to form Okunrin and Obinrin.\n\nThe circumstance of a parent's calamity is one of the grounds for Oruko (naming), not the meaning of the syllable \"rin\".\n\nThe Tone alphabet exclusively misrepresents \"rin\", which is a syllable combining tone and phone signs, not a reference to one alphabet alone.\n\nThe Ebi Prime-axiom is a separate concept from the syllable \"rin\" used to build gendered core-agency terms.",
  },
  {
    id: "cpe316_ch4_076",
    course: "cpe316",
    chapter: "Chapter 4",
    text: "How does the source transcribe the meaning of Okunrin?",
    options: [
      "That whose core agency is situated in Receiving",
      "That whose core agency is situated in Emitting",
      "That which is older on grounds of arrival",
      "That which is named for the circumstance of birth",
    ],
    correctAnswer: 1,
    explanation:
      "Okunrin is transcribed as \"That whose core agency is situated in Emitting\", combining Ako (Emitter) with the core-agency syllable rin.\n\nThat whose core agency is situated in Receiving instead transcribes Obinrin, which combines Abo (Receptor) with rin.\n\nThat which is older on grounds of arrival describes Egbon/Agba, not Okunrin.\n\nThat which is named for the circumstance of birth describes a basis for Oruko, not the meaning of Okunrin.",
  },
  {
    id: "cpe316_ch4_077",
    course: "cpe316",
    chapter: "Chapter 4",
    text: "Egbon/Agba (Older) and Aburo/Ewe (Younger) are quantified by imposing which kinds of context?",
    options: [
      "Only Dide (Arrival)",
      "Dide (Arrival), Ipo (Status), or Aiwaye Ibi (Occurrence of birth)",
      "Only Anon (Marriage)",
      "Only the written Tone alphabet",
    ],
    correctAnswer: 1,
    explanation:
      "Egbon/Agba and Aburo/Ewe are treated as mutually inclusive, complementary binary opposites quantified by imposing context such as Dide (Arrival), Ipo (Status), or Aiwaye Ibi (Occurrence of birth).\n\nOnly Dide (Arrival) is too narrow, since the source names two further contexts, Ipo and Aiwaye Ibi, alongside it.\n\nOnly Anon (Marriage) names the wrong context entirely; marriage is unrelated to quantifying Egbon and Aburo.\n\nOnly the written Tone alphabet is unrelated to the contexts named for quantifying these binary opposite terms.",
  },
  {
    id: "cpe316_ch4_078",
    course: "cpe316",
    chapter: "Chapter 4",
    text: "What does the source say results from using English words like \"Grandparent\", \"Parent\", and \"Son\" to render Yoruba kinship discourse?",
    options: [
      "No difference in meaning, since the words translate directly",
      "A serious information deficit",
      "An automatic conversion into Iyekan and Obakan",
      "A violation of the English grammar's Prime-axiom",
    ],
    correctAnswer: 1,
    explanation:
      "Using such English words to render Yoruba kinship discourse is stated to incur a serious information deficit, since these words carry categorical assumptions the Yoruba binary-opposite framework does not share.\n\nNo difference in meaning contradicts the explicit warning about information deficit given in the source.\n\nAn automatic conversion into Iyekan and Obakan is not a described effect of using these English words.\n\nA violation of the English grammar's Prime-axiom misapplies the concept; the concern here is about rendering Yoruba discourse, not about the English grammar's own axioms.",
  },
  {
    id: "cpe316_ch4_079",
    course: "cpe316",
    chapter: "Chapter 4",
    text: "Which of the following is NOT listed among the grounds on which Oruko (Nominal-term identity) is based, alongside Ebi into which one is born?",
    options: [
      "Character of birth, such as Twins or Bridge",
      "Circumstance of birth, such as during a festival",
      "Circumstance of a parent, such as during a calamity",
      "Marital status of a distant relative",
    ],
    correctAnswer: 3,
    explanation:
      "Marital status of a distant relative is not listed among the grounds for Oruko; the source names character of birth, circumstance of birth, and circumstance of parent instead.\n\nCharacter of birth, such as Twins, After twins, Bridge, or Leg first, is explicitly listed as a ground for Oruko.\n\nCircumstance of birth, such as during a festival or a parent's journey, is explicitly listed as a ground for Oruko.\n\nCircumstance of a parent, such as during a calamity or at a moment of wealth, is explicitly listed as a ground for Oruko.",
  },
  {
    id: "cpe316_ch4_080",
    course: "cpe316",
    chapter: "Chapter 4",
    text: "Since Assertion is inherent in the Nominal-terms used to identify an individual in the Yoruba universe of discourse, how are Yoruba names classified?",
    options: [
      "As Primitive-terms",
      "As Auxiliary-terms rather than Primitive-terms",
      "As Quantifiers",
      "As Prime-axioms",
    ],
    correctAnswer: 1,
    explanation:
      "Because Assertion is inherent in Yoruba names, they are classified as Auxiliary-terms rather than Primitive-terms.\n\nBeing classified as Primitive-terms is the opposite of the stated conclusion, which explicitly denies Yoruba names this classification.\n\nBeing classified as Quantifiers confuses names with the constraining devices used on Relations, an unrelated category.\n\nBeing classified as Prime-axioms confuses a naming convention with the Prime-axiom of the whole kinship grammar, Ebi().",
  },
  {
    id: "cpe316_ch4_081",
    course: "cpe316",
    chapter: "Chapter 4",
    text: "Within Arokun, how are terms treated with respect to the phenomena of nature they describe?",
    options: [
      "Terms are treated as identical to the beingness of the phenomenon itself",
      "Terms are situated in metaphor grounded in human sensory accounts of the phenomenon",
      "Terms are treated as arbitrary labels with no grounding at all",
      "Terms are borrowed directly from English kinship vocabulary",
    ],
    correctAnswer: 1,
    explanation:
      "Within Arokun, terms are not confused for the beingness of a phenomenon of nature; instead, their formulation is situated in metaphor grounded in human sensory accounts of that phenomenon's material manifestation.\n\nTreating terms as identical to the beingness of the phenomenon is precisely the confusion the source says Arokun avoids.\n\nTreating terms as arbitrary labels with no grounding contradicts the stated grounding in sensory-account metaphor.\n\nBorrowing directly from English kinship vocabulary is unrelated to how Arokun situates Yoruba terms in metaphor.",
  },
  {
    id: "cpe316_ch4_082",
    course: "cpe316",
    chapter: "Chapter 4",
    text: "What are the instances that make up written Yoruba described as, rather than letters?",
    options: ["Numerals", "Signs", "Syllables only, without any signs", "Pictograms"],
    correctAnswer: 1,
    explanation:
      "Instances in written Yoruba are signs, not letters, comprising two alphabets: an Alphabet of Tone and an Alphabet of Phone.\n\nNumerals are unrelated to the written Yoruba system described here.\n\nSyllables only, without any signs, is inconsistent with the source, which treats a syllable itself as a sign, or a combination of signs.\n\nPictograms are not the term the source uses; it specifically names Tone and Phone signs.",
  },
  {
    id: "cpe316_ch4_083",
    course: "cpe316",
    chapter: "Chapter 4",
    text: "Written Yoruba is described as comprising which two alphabets?",
    options: [
      "An Alphabet of Tone and an Alphabet of Phone",
      "An Alphabet of Ako and an Alphabet of Abo",
      "An Alphabet of Ebi and an Alphabet of Oruko",
      "An Alphabet of Motifs and an Alphabet of Numerals",
    ],
    correctAnswer: 0,
    explanation:
      "Written Yoruba comprises two alphabets: an Alphabet of Tone and an Alphabet of Phone.\n\nAn Alphabet of Ako and an Alphabet of Abo confuses the gendered emitter/receptor terms with the two named sign alphabets.\n\nAn Alphabet of Ebi and an Alphabet of Oruko confuses kinship and naming concepts with the two named sign alphabets.\n\nAn Alphabet of Motifs and an Alphabet of Numerals is not the pairing given; Motifs are combinations of signs, not a separate alphabet, and numerals are not mentioned at all.",
  },
  {
    id: "cpe316_ch4_084",
    course: "cpe316",
    chapter: "Chapter 4",
    text: "What are combinations of signs in written Yoruba called?",
    options: ["Motifs", "Primitive-terms", "Auxiliary-axioms", "Variable-terms"],
    correctAnswer: 0,
    explanation:
      "Combinations of signs in written Yoruba are called Motifs, with each syllable, or sign, cueing a partial-term.\n\nPrimitive-terms are explicitly stated to be inadmissible in the Yoruba instrument, so Motifs cannot be equated with them.\n\nAuxiliary-axioms describe the grammar level associated with Relations, not sign combinations.\n\nVariable-terms describe sets comprising instances of a term, an English-kinship-style notion, not a description of sign combinations.",
  },
  {
    id: "cpe316_ch4_085",
    course: "cpe316",
    chapter: "Chapter 4",
    text: "In the Yoruba kinship universe, strings such as \"Ade\", \"Akin\", and \"Kemi\" are used to cue what, in contrast with their role as full Nominal-terms in the English kinship universe?",
    options: [
      "Full Primitive-terms",
      "Partial-terms",
      "Prime-axioms",
      "Quantified variables",
    ],
    correctAnswer: 1,
    explanation:
      "In the Yoruba kinship universe, these same strings are used to cue partial-terms, since each syllable or combination of syllables is a partial-term, unlike in the English universe where they cue full Nominal-terms.\n\nFull Primitive-terms is the opposite characterisation; Primitive-terms are inadmissible in Yoruba, and even in English these strings are Nominal-terms built from primitives, not primitives themselves.\n\nPrime-axioms confuses a partial-term with the grammar's foundational axiom, Ebi().\n\nQuantified variables confuses a naming string with a variable restricted by a Quantifier, an unrelated notion.",
  },
  {
    id: "cpe316_ch4_086",
    course: "cpe316",
    chapter: "Chapter 4",
    text: "On what does the Egbon() relation, Egbon(E, A) → Ju(E, A), rest?",
    options: [
      "E preceding A on grounds of context rendered through Ju (Surpasses)",
      "E and A sharing a common Ebi",
      "E being married into A's Ebi",
      "E and A being of the same Age category",
    ],
    correctAnswer: 0,
    explanation:
      "Egbon(E, A) → Ju(E, A) rests on E preceding A on grounds of some context, rendered through the relation Ju (Surpasses), such as arrival at a location, status, or occurrence of birth.\n\nSharing a common Ebi is a basis used for Omo() and Sibling()-type Relations, not specifically what grounds Egbon().\n\nBeing married into A's Ebi describes the Iyawo() relation, unrelated to Egbon().\n\nBeing of the same Age category contradicts the earlier point that fixed Age categories are not admissible in Yoruba kinship discourse.",
  },
  {
    id: "cpe316_ch4_087",
    course: "cpe316",
    chapter: "Chapter 4",
    text: "On which grounds can the Ju (Surpasses) relation underlying Egbon() be contextualised?",
    options: [
      "Arrival at a location, Status, or Occurrence of birth",
      "Wealth, Marriage, or Fluency in Tone signs",
      "Height, Weight, or Physical strength",
      "Distance travelled and duration of a journey",
    ],
    correctAnswer: 0,
    explanation:
      "Ju() is contextualised or formulated based on arrival at a location, Status, or Occurrence of birth.\n\nWealth, Marriage, or Fluency in Tone signs are not the grounds named for contextualising Ju() in the source.\n\nHeight, Weight, or Physical strength are not mentioned anywhere as grounds for Ju().\n\nDistance travelled and duration of a journey are not the grounds named for Ju(); only arrival, status, and birth occurrence are cited.",
  },
  {
    id: "cpe316_ch4_088",
    course: "cpe316",
    chapter: "Chapter 4",
    text: "The Egbon() relation is stated to be transitive: if X is Egbon of Y and Y is Egbon of Z, then X is Egbon of Z.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "This is true: the source states Egbon() is transitive, giving Egbon(X, Z) → Ju(X, Y) ∧ Ju(Y, Z) for the case where X is Egbon of Y and Y is Egbon of Z.\n\nFalse would wrongly deny the explicitly stated transitivity of the Egbon() relation.\n\nMaybe is not applicable since the source states this property directly.\n\nI don't know is not applicable since the transitivity of Egbon() is explicitly stated.",
  },
  {
    id: "cpe316_ch4_089",
    course: "cpe316",
    chapter: "Chapter 4",
    text: "Is a Primitive-term admissible in the instrument of the Yoruba language?",
    options: [
      "Yes, in the same way as in English",
      "No, Primitive-term is not admissible in Yoruba",
      "Only when used for kinship discourse",
      "Only within the Alphabet of Tone",
    ],
    correctAnswer: 1,
    explanation:
      "The source states plainly that Primitive-term is not admissible in the instrument of the Yoruba language, since Ohun (Terms) of Yoruba are instead used to cue temporal and spatial aspects of instances directly.\n\nBeing admissible in the same way as in English is the opposite of what the source states about Yoruba.\n\nOnly when used for kinship discourse wrongly implies a partial admissibility that the source does not grant.\n\nOnly within the Alphabet of Tone misapplies the inadmissibility to one alphabet, when the source states it applies to the Yoruba instrument generally.",
  },
  {
    id: "cpe316_ch4_090",
    course: "cpe316",
    chapter: "Chapter 4",
    text: "In the Laboratory Exercise framed around \"Orofo the Chatbot\", on what grounds is Ogbon (Intelligence) ascribed to Adase (Individual) human activity?",
    options: [
      "Creativity and ingenuity manifesting in performance ability to use the instrument of language",
      "Physical strength demonstrated in competitive dialogue",
      "Membership in a particular Ebi",
      "Fluency exclusively in the Alphabet of Tone",
    ],
    correctAnswer: 0,
    explanation:
      "Ogbon is ascribed to Adase human activity on grounds of creativity and ingenuity manifesting in the performance ability to use the instrument of language, including generating an effective expression and ascribing message to a valid expression.\n\nPhysical strength demonstrated in competitive dialogue is not the ground named for ascribing Ogbon in this exercise.\n\nMembership in a particular Ebi is a kinship notion, unrelated to the grounds for ascribing Ogbon here.\n\nFluency exclusively in the Alphabet of Tone is too narrow and is not the stated ground for ascribing Ogbon.",
  },
  {
    id: "cpe316_ch4_091",
    course: "cpe316",
    chapter: "Chapter 4",
    text: "Which two abilities are named as part of using the instrument of language to express or ascribe message to expression, per the Laboratory Exercise framing?",
    options: [
      "Generating an expression that effectively conveys an informed message, and ascribing message to a valid expression",
      "Memorising every Nominal-term in a given Ebi, and reciting them in order",
      "Translating Yoruba Motifs into English letters, and vice versa",
      "Constructing a Primitive-term, and assigning it a Tone sign",
    ],
    correctAnswer: 0,
    explanation:
      "The two named abilities are generating an expression that effectively conveys an informed message, and ascribing message to a valid expression.\n\nMemorising every Nominal-term in a given Ebi and reciting them in order is not among the abilities named in this framing.\n\nTranslating Yoruba Motifs into English letters, and vice versa, is not among the abilities named here.\n\nConstructing a Primitive-term and assigning it a Tone sign is inconsistent with Primitive-term being inadmissible in Yoruba, and is not named in this framing.",
  },
  {
    id: "cpe316_ch4_092",
    course: "cpe316",
    chapter: "Chapter 4",
    text: "Consider these two example sentences given for the Laboratory Exercise: (1) \"You can deceive some human all of the time, but you cannot deceive all humans all of the time\"; (2) \"Some children resemble their parents\". Which verdict is correct about both appearing among the exercise's example sentences?",
    options: [
      "Only sentence (1) appears among the example sentences",
      "Only sentence (2) appears among the example sentences",
      "All of these",
      "None of these",
    ],
    correctAnswer: 2,
    explanation:
      "Both sentences appear among the six example sentences given for the Laboratory Exercise to be formalised, so \"All of these\" applies.\n\nOnly sentence (1) appearing wrongly excludes the resemblance sentence about children and parents, which is also among the six.\n\nOnly sentence (2) appearing wrongly excludes the deception sentence, which is also among the six.\n\nNone of these wrongly rejects both sentences even though both are listed among the exercise's examples.",
  },
  {
    id: "cpe316_ch4_093",
    course: "cpe316",
    chapter: "Chapter 4",
    text: "Two of the six Laboratory Exercise example sentences state, respectively, that an explanation comprises finite instances of expression, and that an Expression comprises infinite instances of explanation. How do these two stated sentences relate to each other?",
    options: [
      "They are fully consistent restatements of the same claim",
      "They state an internally inconsistent pair, as given in the source",
      "They both describe the Ako/Abo distinction instead",
      "They are unrelated sentences about Ebi and Oruko",
    ],
    correctAnswer: 1,
    explanation:
      "As given in the source, these two sentences form an internally inconsistent pair, since one calls explanation-from-expression finite while the other calls expression-from-explanation infinite, and the exercise preserves them exactly as stated rather than reconciling them.\n\nCalling them fully consistent restatements overlooks the finite-versus-infinite mismatch between the two sentences as literally worded.\n\nDescribing the Ako/Abo distinction misidentifies the topic; these two sentences concern expression and explanation, not the emitter/receptor gender pairing.\n\nCalling them unrelated sentences about Ebi and Oruko misidentifies their topic entirely; they concern expression and explanation, not kinship or naming.",
  },
  {
    id: "cpe316_ch4_094",
    course: "cpe316",
    chapter: "Chapter 4",
    text: "\"All human are equal but some are more equal than others\" is listed among the Laboratory Exercise's example sentences to be formalised.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "This is true: this sentence is one of the six example sentences given for the Laboratory Exercise on formalising expression.\n\nFalse would wrongly deny that this sentence is among the six listed examples.\n\nMaybe is not applicable since the sentence's inclusion is stated directly in the source.\n\nI don't know is not applicable since the source lists this sentence explicitly.",
  },
  {
    id: "cpe316_ch4_095",
    course: "cpe316",
    chapter: "Chapter 4",
    text: "\"An explanation comprises infinite instances of expression\" is one of the six example sentences given for the Laboratory Exercise.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "This is false: the source's actual sentence pairs \"finite\" with explanation-comprises-expression (\"An explanation comprises finite instances of expression\"); it is the companion sentence about Expression comprising instances of explanation that uses \"infinite\", not this one.\n\nTrue would wrongly accept a mismatched combination of \"infinite\" with this particular sentence.\n\nMaybe is not applicable since the six example sentences are stated exactly in the source.\n\nI don't know is not applicable since the source lists these sentences explicitly.",
  },
];

export default cpe316Chapter4Questions;
