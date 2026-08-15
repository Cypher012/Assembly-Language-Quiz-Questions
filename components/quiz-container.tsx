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
import KeyboardShortcutsModal from "./keyboard-shortcuts-modal";
import TimeUpModal from "./time-up-modal";

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
  const [timerDurationMinutes, setTimerDurationMinutes] = useState<
    number | null
  >(null);

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

  // Desktop keyboard shortcuts help panel
  const [isShortcutsModalOpen, setIsShortcutsModalOpen] = useState(false);

  // Shown when a *non*-exam-mode timer (a timed chapter/custom quiz) runs
  // out, offering to add time or drop the timer instead of force-ending.
  const [showTimeUpModal, setShowTimeUpModal] = useState(false);

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
        setIsExamMode(persisted.isExamMode);
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

  // Arms (or clears) the optional timer for a normal chapter/custom quiz --
  // reuses the same examEndTime/persistence machinery Practice Exam Mode
  // uses, but leaves isExamMode false so results still read "Quiz Complete!"
  // and keep the Restart button.
  const applyTimerChoice = (
    durationMinutes: number | null,
    processedQuestions: (Question | QuestionV2 | ShuffledQuestion)[],
    courseId: string,
  ) => {
    setTimerDurationMinutes(durationMinutes);
    if (durationMinutes === null) {
      setExamEndTime(null);
      return;
    }
    const endTimestamp = Date.now() + durationMinutes * 60_000;
    setExamEndTime(endTimestamp);
    setIsExamMode(false);
    saveExamState({
      endTimestamp,
      questions: processedQuestions as ShuffledQuestion[],
      userAnswers: [],
      currentIndex: 0,
      score: 0,
      courseId,
      isExamMode: false,
    });
  };

  const handleSelectChapter = (
    chapter: string | null,
    shuffle: boolean,
    durationMinutes: number | null,
  ) => {
    if (!selectedCourse) return;

    setSelectedChapter(chapter);
    setShufflePreference(shuffle);
    const courseQuestions = selectedCourse.getQuestions();
    const filtered = filterByChapter(courseQuestions, chapter);
    const processedQuestions = processQuestions(filtered, shuffle);

    setQuestions(processedQuestions);
    applyTimerChoice(durationMinutes, processedQuestions, selectedCourse.id);
    setIsReady(true);
  };

  const handleSelectCustomChapters = (
    chapters: string[],
    shuffle: boolean,
    durationMinutes: number | null,
  ) => {
    if (!selectedCourse) return;

    setSelectedChapter(null);
    setSelectedChapters(chapters);
    setShufflePreference(shuffle);
    const courseQuestions = selectedCourse.getQuestions();
    const filtered = filterByChapters(courseQuestions, chapters);
    const processedQuestions = processQuestions(filtered, shuffle);

    setQuestions(processedQuestions);
    applyTimerChoice(durationMinutes, processedQuestions, selectedCourse.id);
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
      setTimerDurationMinutes(config.durationMinutes);
      setIsReady(true);

      saveExamState({
        endTimestamp,
        questions: sliced as ShuffledQuestion[],
        userAnswers: [],
        currentIndex: 0,
        score: 0,
        courseId: selectedCourse.id,
        isExamMode: true,
      });
    },
    [selectedCourse],
  );

  // Persist timer state (Practice Exam Mode or a timed chapter quiz) on
  // every relevant change, so a refresh mid-run resumes correctly.
  useEffect(() => {
    if (!examEndTime || !selectedCourse) return;
    saveExamState({
      endTimestamp: examEndTime,
      questions: questions as ShuffledQuestion[],
      userAnswers,
      currentIndex,
      score,
      courseId: selectedCourse.id,
      isExamMode,
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

  // Practice Exam Mode still force-ends when time runs out -- that's the
  // point of a real timed exam. A timed chapter/custom quiz instead offers
  // a choice: add more time or drop the timer and keep going untimed.
  const handleTimeUp = useCallback(() => {
    if (isExamMode) {
      handleAutoSubmit();
    } else {
      setShowTimeUpModal(true);
    }
  }, [isExamMode, handleAutoSubmit]);

  const handleAddTime = (minutes: number) => {
    setExamEndTime(Date.now() + minutes * 60_000);
    setShowTimeUpModal(false);
  };

  const handleRemoveTimer = () => {
    setExamEndTime(null);
    setTimerDurationMinutes(null);
    clearExamState();
    setShowTimeUpModal(false);
  };

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

  // Human-readable label for which chapter(s) this run covers, shown on the
  // results screen. selectedChapters (multi-chapter custom quiz or practice
  // exam) takes precedence over selectedChapter (single chapter or "All").
  const chapterLabel = (() => {
    if (!selectedCourse) return undefined;
    if (selectedChapters && selectedChapters.length > 0) {
      if (selectedChapters.length === selectedCourse.chapters.length) {
        return "All Chapters";
      }
      const labels = selectedChapters
        .map((id) => selectedCourse.chapters.find((c) => c.id === id)?.label)
        .filter((label): label is string => !!label);
      return labels.length <= 2 ? labels.join(" & ") : `${labels.length} chapters`;
    }
    if (selectedChapter === null) return "All Chapters";
    if (selectedChapter) {
      return (
        selectedCourse.chapters.find((c) => c.id === selectedChapter)?.label ??
        selectedChapter
      );
    }
    return undefined;
  })();

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

    // Restart is only reachable when isExamMode is already false (Practice
    // Exam results hide this button), so this never re-arms a real exam.
    clearExamState();
    setIsExamMode(false);

    const courseQuestions = selectedCourse.getQuestions();
    const filtered = selectedChapters
      ? filterByChapters(courseQuestions, selectedChapters)
      : filterByChapter(courseQuestions, selectedChapter ?? null);

    // Reuses the shuffle preference chosen when this topic was started
    const processedQuestions = processQuestions(filtered, shufflePreference);
    setQuestions(processedQuestions);
    // A timed run gets a fresh full-length timer, not silently untimed
    applyTimerChoice(timerDurationMinutes, processedQuestions, selectedCourse.id);
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

  // Desktop keyboard shortcuts -- only act while actively answering a
  // question (not on course/chapter select, loading, or results screens).
  const isOnLiveQuizScreen =
    !!selectedCourse && selectedChapter !== undefined && isReady && state !== "complete";

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey || e.altKey) return;

      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable)
      ) {
        return;
      }

      // A modal is open (e.g. Exit confirmation, shortcuts panel itself) --
      // let it handle its own keys instead of double-firing quiz actions.
      if (
        document.querySelector(
          '[role="dialog"][data-state="open"], [role="alertdialog"][data-state="open"]',
        )
      ) {
        return;
      }

      if (e.key === "?") {
        e.preventDefault();
        setIsShortcutsModalOpen((prev) => !prev);
        return;
      }

      if (!isOnLiveQuizScreen) return;

      const optionMap: Record<string, string> = {
        "1": "A",
        "2": "B",
        "3": "C",
        "4": "D",
        a: "A",
        b: "B",
        c: "C",
        d: "D",
      };
      const mappedOption = optionMap[e.key.toLowerCase()];

      if (mappedOption && !isAnswered) {
        e.preventDefault();
        handleSelectOption(mappedOption);
        return;
      }

      if (e.key === "Enter") {
        e.preventDefault();
        if (isRevealed) {
          handleNextQuestion();
        } else {
          handleConfirmAnswer();
        }
        return;
      }

      if (e.key === "ArrowRight") {
        if (isRevealed) {
          e.preventDefault();
          handleNextQuestion();
        }
        return;
      }

      if (e.key === "ArrowLeft") {
        if (currentIndex > 0) {
          e.preventDefault();
          handleNavigateToQuestion(currentIndex - 1);
        }
        return;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

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
        courseCode={selectedCourse?.code}
        courseName={selectedCourse?.name}
        chapterLabel={chapterLabel}
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
          onTimeUp={handleTimeUp}
          onExitExam={handleBackToChapters}
          showExitButton={true}
          onShowShortcuts={() => setIsShortcutsModalOpen(true)}
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

      <KeyboardShortcutsModal
        open={isShortcutsModalOpen}
        onOpenChange={setIsShortcutsModalOpen}
      />

      <TimeUpModal
        open={showTimeUpModal}
        onAddTime={handleAddTime}
        onRemoveTimer={handleRemoveTimer}
      />
    </div>
  );
}
