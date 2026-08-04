"use client";

import { useState, useEffect, useCallback } from "react";
import {
  type Question,
  type QuestionV2,
  type ShuffledQuestion,
  type ExamConfig,
  isQuestionV2,
} from "@/lib/quiz-types";
import { shuffleQuestions, orderQuestions } from "@/lib/utils/question-shuffle";
import { shuffleArray } from "@/lib/utils/shuffle";
import {
  getEnabledCourses,
  getCourseById,
  filterByChapter,
  filterByChapters,
  Course,
} from "@/lib/courses";
import { saveExamState, loadExamState, clearExamState } from "@/lib/exam-state";
import { Spinner } from "@/components/ui/spinner";
import QuestionCard from "./question-card";
import ProgressHeader from "./progress-header";
import ResultSummary from "./result-summary";
import ChapterSelect from "./chapter-select";
import CourseSelect from "./course-select";
import QuestionNavigator from "./question-navigator";

type QuizState = "idle" | "answered" | "revealed" | "next" | "complete";

interface UserAnswer {
  questionId: string;
  selectedOptionId: string;
  isCorrect: boolean;
}

// Orders a filtered question set for display, respecting the shuffle
// choice made in the "Shuffle the questions?" prompt before a topic starts.
function processQuestions(
  filtered: (Question | QuestionV2)[],
  shuffle: boolean,
): (Question | QuestionV2 | ShuffledQuestion)[] {
  if (filtered.every(isQuestionV2)) {
    return orderQuestions(filtered as QuestionV2[], shuffle);
  }
  return shuffle ? shuffleArray(filtered) : filtered;
}

export default function QuizContainer() {
  // Course and chapter selection state
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [selectedChapter, setSelectedChapter] = useState<
    string | null | undefined
  >(undefined);
  const [selectedChapters, setSelectedChapters] = useState<string[] | null>(
    null,
  );
  const [enabledCourses, setEnabledCourses] = useState<Course[]>([]);
  const [shufflePreference, setShufflePreference] = useState(true);

  // Quiz state
  const [questions, setQuestions] = useState<
    (Question | QuestionV2 | ShuffledQuestion)[]
  >([]);
  const [isReady, setIsReady] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [state, setState] = useState<QuizState>("idle");
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const [score, setScore] = useState(0);

  // Exam mode state
  const [isExamMode, setIsExamMode] = useState(false);
  const [examEndTime, setExamEndTime] = useState<number | null>(null);

  // Load enabled courses on mount; also restore any persisted exam
  useEffect(() => {
    setEnabledCourses(getEnabledCourses());

    const persisted = loadExamState();
    if (persisted) {
      const course = getCourseById(persisted.courseId);
      if (course) {
        setSelectedCourse(course);
        setSelectedChapter(null);
        setQuestions(persisted.questions);
        setUserAnswers(persisted.userAnswers);
        setCurrentIndex(persisted.currentIndex);
        setScore(persisted.score);
        setExamEndTime(persisted.endTimestamp);
        setIsExamMode(true);
        setIsReady(true);
      } else {
        clearExamState();
      }
    }
  }, []);

  const handleSelectCourse = (courseId: string) => {
    const course = getCourseById(courseId);
    if (course) {
      setSelectedCourse(course);
    }
  };

  const handleSelectChapter = (chapter: string | null, shuffle: boolean) => {
    if (!selectedCourse) return;

    setSelectedChapter(chapter);
    setShufflePreference(shuffle);
    const courseQuestions = selectedCourse.getQuestions();
    const filtered = filterByChapter(courseQuestions, chapter);

    setQuestions(processQuestions(filtered, shuffle));
    setIsReady(true);
  };

  const handleSelectCustomChapters = (chapters: string[], shuffle: boolean) => {
    if (!selectedCourse) return;

    setSelectedChapter(null);
    setSelectedChapters(chapters);
    setShufflePreference(shuffle);
    const courseQuestions = selectedCourse.getQuestions();
    const filtered = filterByChapters(courseQuestions, chapters);

    setQuestions(processQuestions(filtered, shuffle));
    setIsReady(true);
  };

  const handleStartExam = useCallback(
    (config: ExamConfig) => {
      if (!selectedCourse) return;

      const courseQuestions = selectedCourse.getQuestions();
      const filtered = filterByChapters(courseQuestions, config.chapters);
      const shuffled = shuffleQuestions(filtered as QuestionV2[]);
      const sliced = shuffled.slice(0, config.questionCount);

      const endTimestamp = Date.now() + config.durationMinutes * 60_000;

      setSelectedChapter(null);
      setSelectedChapters(config.chapters);
      setQuestions(sliced);
      setUserAnswers([]);
      setScore(0);
      setCurrentIndex(0);
      setSelectedOption(null);
      setState("idle");
      setExamEndTime(endTimestamp);
      setIsExamMode(true);
      setIsReady(true);

      saveExamState({
        endTimestamp,
        questions: sliced as ShuffledQuestion[],
        userAnswers: [],
        currentIndex: 0,
        score: 0,
        courseId: selectedCourse.id,
      });
    },
    [selectedCourse],
  );

  // Persist exam state on every relevant change
  useEffect(() => {
    if (!isExamMode || !examEndTime || !selectedCourse) return;
    saveExamState({
      endTimestamp: examEndTime,
      questions: questions as ShuffledQuestion[],
      userAnswers,
      currentIndex,
      score,
      courseId: selectedCourse.id,
    });
  }, [
    isExamMode,
    examEndTime,
    questions,
    userAnswers,
    currentIndex,
    score,
    selectedCourse,
  ]);

  const handleAutoSubmit = useCallback(() => {
    clearExamState();
    setState("complete");
  }, []);

  // Warn user before leaving/refreshing during active quiz
  useEffect(() => {
    const isQuizInProgress =
      isReady && state !== "complete" && userAnswers.length > 0;

    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (isQuizInProgress) {
        e.preventDefault();
        e.returnValue = "";
        return "";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [isReady, state, userAnswers.length]);

  const currentQuestion = questions[currentIndex];
  const isLastQuestion = currentIndex === questions.length - 1;
  const isAnswered = state !== "idle";
  const isRevealed = state === "revealed" || state === "complete";

  const handleSelectOption = (optionId: string) => {
    if (!isAnswered) {
      setSelectedOption(optionId);
    }
  };

  const handleConfirmAnswer = () => {
    if (!selectedOption) return;

    // Handle both old and new question formats for correctness check
    const isCorrect =
      isQuestionV2(currentQuestion) && "displayCorrectAnswer" in currentQuestion
        ? selectedOption === currentQuestion.displayCorrectAnswer
        : isQuestionV2(currentQuestion)
          ? selectedOption ===
            String.fromCharCode(65 + currentQuestion.correctAnswer)
          : selectedOption === (currentQuestion as Question).correctOptionId;

    setUserAnswers((prev) => [
      ...prev,
      {
        questionId: currentQuestion.id,
        selectedOptionId: selectedOption,
        isCorrect,
      },
    ]);

    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    setState("revealed");
  };

  const handleNextQuestion = () => {
    if (isLastQuestion) {
      clearExamState();
      setState("complete");
    } else {
      const nextIndex = currentIndex + 1;
      const nextQuestionId = questions[nextIndex]?.id;
      const previousAnswer = userAnswers.find(
        (a) => a.questionId === nextQuestionId,
      );

      setCurrentIndex(nextIndex);
      if (previousAnswer) {
        setSelectedOption(previousAnswer.selectedOptionId);
        setState("revealed");
      } else {
        setSelectedOption(null);
        setState("idle");
      }
    }
  };

  const handleRestart = () => {
    if (!selectedCourse) return;

    clearExamState();
    setIsExamMode(false);
    setExamEndTime(null);

    const courseQuestions = selectedCourse.getQuestions();
    const filtered = selectedChapters
      ? filterByChapters(courseQuestions, selectedChapters)
      : filterByChapter(courseQuestions, selectedChapter ?? null);

    // Reuses the shuffle preference chosen when this topic was started
    setQuestions(processQuestions(filtered, shufflePreference));
    setCurrentIndex(0);
    setSelectedOption(null);
    setState("idle");
    setUserAnswers([]);
    setScore(0);
  };

  const handleBackToChapters = () => {
    clearExamState();
    setIsExamMode(false);
    setExamEndTime(null);
    setSelectedChapter(undefined);
    setSelectedChapters(null);
    setQuestions([]);
    setIsReady(false);
    setCurrentIndex(0);
    setSelectedOption(null);
    setState("idle");
    setUserAnswers([]);
    setScore(0);
  };

  const handleBackToCourses = () => {
    clearExamState();
    setIsExamMode(false);
    setExamEndTime(null);
    setSelectedCourse(null);
    setSelectedChapter(undefined);
    setSelectedChapters(null);
    setQuestions([]);
    setIsReady(false);
    setCurrentIndex(0);
    setSelectedOption(null);
    setState("idle");
    setUserAnswers([]);
    setScore(0);
  };

  const handleNavigateToQuestion = (index: number) => {
    // Only allow navigation to answered questions
    const questionId = questions[index]?.id;
    const previousAnswer = userAnswers.find((a) => a.questionId === questionId);
    if (previousAnswer) {
      setCurrentIndex(index);
      setSelectedOption(previousAnswer.selectedOptionId);
      setState("revealed");
    }
  };

  // Show course selection if no course selected yet
  if (!selectedCourse) {
    return (
      <CourseSelect
        courses={enabledCourses}
        onSelectCourse={handleSelectCourse}
      />
    );
  }

  // Show chapter selection if no chapter selected yet
  if (selectedChapter === undefined) {
    return (
      <ChapterSelect
        course={selectedCourse}
        onSelectChapter={handleSelectChapter}
        onSelectCustomChapters={handleSelectCustomChapters}
        onStartExam={handleStartExam}
        onBackToCourses={handleBackToCourses}
      />
    );
  }

  if (!isReady) {
    return (
      <div className="min-h-screen board-surface p-4 sm:p-6 lg:p-8">
        <div className="max-w-2xl mx-auto flex flex-col items-center justify-center gap-3 min-h-[50vh]">
          <Spinner className="size-6 text-chalk-yellow" />
          <div className="text-board-ink text-lg">Loading quiz...</div>
        </div>
      </div>
    );
  }

  if (state === "complete") {
    return (
      <ResultSummary
        score={score}
        total={questions.length}
        userAnswers={userAnswers}
        questions={questions}
        isExamMode={isExamMode}
        onRestart={handleRestart}
        onBackToChapters={handleBackToChapters}
        onBackToCourses={handleBackToCourses}
      />
    );
  }

  return (
    <div className="min-h-screen board-surface p-4 sm:p-6 lg:p-8 pb-20">
      <div className="max-w-2xl mx-auto">
        <ProgressHeader
          current={currentIndex + 1}
          total={questions.length}
          score={score}
          examEndTime={examEndTime}
          onTimeUp={handleAutoSubmit}
          onExitExam={handleBackToChapters}
          showExitButton={true}
        />

        <QuestionCard
          question={currentQuestion}
          selectedOption={selectedOption}
          isRevealed={isRevealed}
          onSelectOption={handleSelectOption}
          onConfirmAnswer={handleConfirmAnswer}
          onNextQuestion={handleNextQuestion}
          isLastQuestion={isLastQuestion}
        />
      </div>

      <QuestionNavigator
        totalQuestions={questions.length}
        currentIndex={currentIndex}
        userAnswers={userAnswers}
        questionIds={questions.map((q) => q.id)}
        onNavigate={handleNavigateToQuestion}
      />
    </div>
  );
}
