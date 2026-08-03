import { QuestionV2, ShuffledQuestion } from "../quiz-types";
import { shuffleArray } from "./shuffle";

/**
 * Shuffles the options of a single question while tracking the correct answer.
 * Uses Fisher-Yates shuffle for randomization.
 *
 * @param question - The question to shuffle
 * @returns A shuffled question with displayOptions (A-D) and displayCorrectAnswer
 */
export function shuffleQuestion(question: QuestionV2): ShuffledQuestion {
  // Shuffle indices rather than option text so duplicate option strings
  // (e.g. "hi" / "Hi") can't be mislocated by value-based lookup.
  const shuffledIndices = shuffleArray(question.options.map((_, i) => i));
  const shuffled = shuffledIndices.map((i) => question.options[i]);
  const newIndex = shuffledIndices.indexOf(question.correctAnswer);

  return {
    ...question,
    displayOptions: {
      A: shuffled[0],
      B: shuffled[1],
      C: shuffled[2],
      D: shuffled[3],
    },
    displayCorrectAnswer: String.fromCharCode(65 + newIndex) as
      | "A"
      | "B"
      | "C"
      | "D",
    originalCorrectAnswer: question.correctAnswer,
  };
}

/**
 * Shuffles an array of questions (order + options).
 * The question order is randomized, then each question's options are independently shuffled.
 *
 * @param questions - Array of questions to shuffle
 * @returns Array of shuffled questions in random order
 */
export function shuffleQuestions(questions: QuestionV2[]): ShuffledQuestion[] {
  return shuffleArray(questions).map(shuffleQuestion);
}
