// Re-export types from quiz-types
export type { Option, Question } from "./quiz-types";

import cpe301Chapter1 from "./cpe301-chapter-1";
import assemblyChapters23 from "./assembly-chapters-2-3";
import assemblyChapter4 from "./assemblyChapter4";

export { cpe301Chapter1, assemblyChapters23, assemblyChapter4 };

export const allQuestions = [
  ...cpe301Chapter1,
  ...assemblyChapters23,
  ...assemblyChapter4,
];
