"use client";

import { useState } from "react";
import type { Question, QuestionV2, ShuffledQuestion } from "@/lib/quiz-types";
import { isQuestionV2, isShuffledQuestion } from "@/lib/quiz-types";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

const FOCUS_RING =
  "outline-none focus-visible:ring-[3px] focus-visible:ring-chalk-yellow/70 focus-visible:ring-offset-2 focus-visible:ring-offset-paper";

const FOCUS_RING_BOARD =
  "outline-none focus-visible:ring-[3px] focus-visible:ring-chalk-yellow/70 focus-visible:ring-offset-2 focus-visible:ring-offset-board";

type ReviewFilter = "wrong" | "correct" | "all";

interface UserAnswer {
  questionId: string;
  selectedOptionId: string;
  isCorrect: boolean;
}

interface ResultSummaryProps {
  score: number;
  total: number;
  userAnswers: UserAnswer[];
  questions: (Question | QuestionV2 | ShuffledQuestion)[];
  isExamMode?: boolean;
  courseCode?: string;
  courseName?: string;
  chapterLabel?: string;
  onRestart: () => void;
  onBackToChapters?: () => void;
  onBackToCourses?: () => void;
}

export default function ResultSummary({
  score,
  total,
  userAnswers,
  questions,
  isExamMode = false,
  courseCode,
  courseName,
  chapterLabel,
  onRestart,
  onBackToChapters,
  onBackToCourses,
}: ResultSummaryProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const wrongCount = userAnswers.filter((a) => !a.isCorrect).length;
  // Default to the mistakes -- that is what a review is actually for, and it
  // avoids scrolling a long list to find them.
  const [reviewFilter, setReviewFilter] = useState<ReviewFilter>(
    wrongCount > 0 ? "wrong" : "all",
  );
  const percentage = total > 0 ? Math.round((score / total) * 100) : 0;
  const passed = percentage >= 70;

  const getPerformanceMessage = () => {
    if (percentage === 100) return "Perfect Score!";
    if (percentage >= 90) return "Outstanding!";
    if (percentage >= 80) return "Excellent!";
    if (percentage >= 70) return "Good Job!";
    if (percentage >= 60) return "Not Bad!";
    return "Keep Practicing!";
  };

  // Question numbers stay tied to the original run order so they still match
  // the quiz even when the list is filtered down.
  const numberedAnswers = userAnswers.map((answer, index) => ({
    answer,
    number: index + 1,
  }));
  const visibleAnswers = numberedAnswers.filter(({ answer }) =>
    reviewFilter === "all" ? true : reviewFilter === "wrong" ? !answer.isCorrect : answer.isCorrect,
  );

  const reviewTabs: { id: ReviewFilter; label: string; count: number }[] = [
    { id: "wrong", label: "Wrong", count: wrongCount },
    { id: "correct", label: "Correct", count: userAnswers.length - wrongCount },
    { id: "all", label: "All", count: userAnswers.length },
  ];

  return (
    <div className="min-h-screen board-surface p-4 sm:p-6 lg:p-8">
      <div className="max-w-3xl mx-auto">
        {/* Summary Card — the graded paper handed back */}
        <div className="paper-surface rounded-md shadow-2xl p-6 sm:p-8 pl-16 sm:pl-20 border-2 border-board mb-8 animate-in fade-in duration-500 relative overflow-hidden">
          <div
            className={cn(
              "absolute top-4 right-4 sm:top-6 sm:right-8 w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 flex flex-col items-center justify-center rotate-6",
              passed
                ? "border-chalk-sage text-chalk-sage"
                : "border-chalk-coral text-chalk-coral",
            )}
          >
            <span className="font-display text-2xl sm:text-3xl leading-none">
              {percentage}%
            </span>
          </div>

          <div className="mb-8 max-w-[calc(100%-6rem)] sm:max-w-[calc(100%-8rem)]">
            {(courseCode || courseName) && (
              <div className="flex items-center gap-2 flex-wrap mb-2">
                {courseCode && (
                  <span className="inline-flex items-center px-2 py-0.5 text-[11px] font-bold tracking-wide bg-chalk-yellow text-chalk-yellow-ink rounded-sm -rotate-1">
                    {courseCode}
                  </span>
                )}
                <span className="text-sm text-paper-ink-muted truncate">
                  {courseName}
                  {chapterLabel ? ` — ${chapterLabel}` : ""}
                </span>
              </div>
            )}
            <h1 className="font-display text-3xl sm:text-4xl text-paper-ink chalk-underline mb-3">
              {isExamMode ? "Practice Exam Complete!" : "Quiz Complete!"}
            </h1>
            <p
              className={cn(
                "text-xl font-bold",
                passed ? "text-chalk-sage-ink" : "text-chalk-coral-ink",
              )}
            >
              {getPerformanceMessage()}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
            <div className="bg-paper-2 rounded-md p-4 text-center border border-paper-line">
              <p className="text-sm text-paper-ink-muted mb-1">Score</p>
              <p className="text-3xl font-bold font-mono tabular-nums text-paper-ink">
                {score}/{total}
              </p>
            </div>
            <div className="bg-paper-2 rounded-md p-4 text-center border border-paper-line">
              <p className="text-sm text-paper-ink-muted mb-1">Percentage</p>
              <p className="text-3xl font-bold font-mono tabular-nums text-paper-ink">
                {percentage}%
              </p>
            </div>
            <div className="bg-paper-2 rounded-md p-4 text-center col-span-2 sm:col-span-1 border border-paper-line">
              <p className="text-sm text-paper-ink-muted mb-1">Correct</p>
              <p className="text-3xl font-bold font-mono tabular-nums text-chalk-sage-ink">
                {score}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            {!isExamMode && (
              <Button
                onClick={onRestart}
                className="flex-1 h-11 text-base font-bold rounded-md"
              >
                Restart Quiz
              </Button>
            )}
            {onBackToChapters && (
              <Button
                onClick={onBackToChapters}
                variant="outline"
                className="flex-1 h-11 text-base font-bold rounded-md bg-paper border-2 border-board text-paper-ink hover:bg-paper-2"
              >
                Change Chapter
              </Button>
            )}
            {onBackToCourses && (
              <Button
                onClick={onBackToCourses}
                variant="outline"
                className="flex-1 h-11 text-base font-bold rounded-md bg-paper border-2 border-board text-paper-ink hover:bg-paper-2"
              >
                Back to Courses
              </Button>
            )}
          </div>
        </div>

        {/* Review Section */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <h2 className="font-display text-2xl text-board-ink chalk-underline inline-block">
              Review Your Answers
            </h2>
            <div className="flex gap-2">
              {reviewTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setReviewFilter(tab.id);
                    setExpandedId(null);
                  }}
                  className={cn(
                    "px-3 py-1.5 rounded-md text-xs font-bold border transition-all duration-200",
                    FOCUS_RING_BOARD,
                    reviewFilter === tab.id
                      ? tab.id === "wrong"
                        ? "bg-chalk-coral border-chalk-coral text-white"
                        : tab.id === "correct"
                          ? "bg-chalk-sage border-chalk-sage text-white"
                          : "bg-chalk-yellow border-chalk-yellow text-chalk-yellow-ink"
                      : "bg-board-2 border-board-line text-board-ink-muted hover:text-board-ink hover:border-board-ink-muted",
                  )}
                >
                  {tab.label} ({tab.count})
                </button>
              ))}
            </div>
          </div>

          {visibleAnswers.length === 0 ? (
            <p className="text-board-ink-muted text-sm py-8 text-center">
              {reviewFilter === "wrong"
                ? "Nothing wrong here - you got every question right."
                : "You did not get any question right this run."}
            </p>
          ) : (
            visibleAnswers.map(({ answer, number }) => {
            const question = questions.find((q) => q.id === answer.questionId);
            if (!question) return null;

            // Handle both old and new question formats for option lookup
            let selectedOptionText: string | undefined;
            let correctOptionText: string | undefined;

            if (isQuestionV2(question) && isShuffledQuestion(question)) {
              // Shuffled V2 questions
              selectedOptionText =
                question.displayOptions[
                  answer.selectedOptionId as "A" | "B" | "C" | "D"
                ];
              correctOptionText =
                question.displayOptions[question.displayCorrectAnswer];
            } else if (isQuestionV2(question)) {
              // Non-shuffled V2 questions
              const selectedIndex = answer.selectedOptionId.charCodeAt(0) - 65;
              selectedOptionText = question.options[selectedIndex];
              correctOptionText = question.options[question.correctAnswer];
            } else {
              // Old V1 questions
              const q = question as Question;
              selectedOptionText = q.options.find(
                (o) => o.id === answer.selectedOptionId,
              )?.text;
              correctOptionText = q.options.find(
                (o) => o.id === q.correctOptionId,
              )?.text;
            }

            return (
              <div
                key={answer.questionId}
                className={cn(
                  "paper-surface rounded-md border-2 overflow-hidden transition-all duration-200 pl-14 sm:pl-16",
                  answer.isCorrect ? "border-chalk-sage/50" : "border-chalk-coral/50",
                )}
              >
                <button
                  onClick={() =>
                    setExpandedId(
                      expandedId === answer.questionId
                        ? null
                        : answer.questionId,
                    )
                  }
                  className={cn(
                    "w-full p-4 pl-2 text-left hover:bg-paper-2/60 transition-colors",
                    FOCUS_RING,
                  )}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm font-bold text-rule-red">
                          Q{number}
                        </span>
                        <span
                          className={cn(
                            "inline-flex items-center px-2 py-1 rounded-sm text-xs font-bold",
                            answer.isCorrect
                              ? "bg-chalk-sage/15 text-chalk-sage-ink"
                              : "bg-chalk-coral/15 text-chalk-coral-ink",
                          )}
                        >
                          {answer.isCorrect ? "✓ Correct" : "✗ Wrong"}
                        </span>
                      </div>
                      <div className="text-paper-ink font-medium [&_p]:m-0">
                        <ReactMarkdown
                          remarkPlugins={[remarkMath]}
                          rehypePlugins={[rehypeKatex]}
                        >
                          {question.text}
                        </ReactMarkdown>
                      </div>
                    </div>
                    <ChevronDown
                      className={cn(
                        "w-5 h-5 text-paper-ink-muted transition-transform flex-shrink-0",
                        expandedId === answer.questionId && "rotate-180",
                      )}
                    />
                  </div>
                </button>

                {expandedId === answer.questionId && (
                  <div className="border-t border-paper-line p-4 pl-2 bg-paper-2/50 space-y-3">
                    <div>
                      <p className="text-xs font-bold text-paper-ink-muted uppercase mb-2">
                        Your Answer
                      </p>
                      <div
                        className={cn(
                          "text-sm p-3 rounded-md border-2 [&_p]:m-0",
                          answer.isCorrect
                            ? "bg-chalk-sage/10 border-chalk-sage text-chalk-sage-ink"
                            : "bg-chalk-coral/10 border-chalk-coral text-chalk-coral-ink",
                        )}
                      >
                        <ReactMarkdown
                          remarkPlugins={[remarkMath]}
                          rehypePlugins={[rehypeKatex]}
                        >
                          {selectedOptionText}
                        </ReactMarkdown>
                      </div>
                    </div>

                    {!answer.isCorrect && (
                      <div>
                        <p className="text-xs font-bold text-paper-ink-muted uppercase mb-2">
                          Correct Answer
                        </p>
                        <div className="text-sm p-3 rounded-md border-2 bg-chalk-sage/10 border-chalk-sage text-chalk-sage-ink [&_p]:m-0">
                          <ReactMarkdown
                            remarkPlugins={[remarkMath]}
                            rehypePlugins={[rehypeKatex]}
                          >
                            {correctOptionText}
                          </ReactMarkdown>
                        </div>
                      </div>
                    )}

                    {question.explanation && (
                      <div>
                        <p className="text-xs font-bold text-paper-ink-muted uppercase mb-2">
                          Explanation
                        </p>
                        <div className="text-sm text-paper-ink-muted [&_p]:m-0">
                          <ReactMarkdown
                            remarkPlugins={[remarkMath]}
                            rehypePlugins={[rehypeKatex]}
                          >
                            {question.explanation}
                          </ReactMarkdown>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
            })
          )}
        </div>
      </div>
    </div>
  );
}
