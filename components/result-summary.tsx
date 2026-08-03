"use client";

import { useState } from "react";
import type { Question, QuestionV2, ShuffledQuestion } from "@/lib/quiz-types";
import { isQuestionV2, isShuffledQuestion } from "@/lib/quiz-types";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const FOCUS_RING =
  "outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white";

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
  onRestart,
  onBackToChapters,
  onBackToCourses,
}: ResultSummaryProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 p-4 sm:p-6 lg:p-8">
      <div className="max-w-3xl mx-auto">
        {/* Summary Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200 mb-8 animate-in fade-in duration-500">
          <div className="text-center mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-2">
              {isExamMode ? "Practice Exam Complete!" : "Quiz Complete!"}
            </h1>
            <p
              className={cn(
                "text-2xl font-semibold",
                passed ? "text-green-600" : "text-orange-600",
              )}
            >
              {getPerformanceMessage()}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
            <div className="bg-slate-50 rounded-lg p-4 text-center">
              <p className="text-sm text-slate-600 mb-1">Score</p>
              <p className="text-3xl font-bold text-slate-900">
                {score}/{total}
              </p>
            </div>
            <div className="bg-slate-50 rounded-lg p-4 text-center">
              <p className="text-sm text-slate-600 mb-1">Percentage</p>
              <p className="text-3xl font-bold text-slate-900">
                {percentage}%
              </p>
            </div>
            <div className="bg-slate-50 rounded-lg p-4 text-center col-span-2 sm:col-span-1">
              <p className="text-sm text-slate-600 mb-1">Correct</p>
              <p className="text-3xl font-bold text-green-600">{score}</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            {!isExamMode && (
              <Button
                onClick={onRestart}
                className="flex-1 h-11 text-base font-semibold"
              >
                Restart Quiz
              </Button>
            )}
            {onBackToChapters && (
              <Button
                onClick={onBackToChapters}
                variant="outline"
                className="flex-1 h-11 text-base font-semibold"
              >
                Change Chapter
              </Button>
            )}
            {onBackToCourses && (
              <Button
                onClick={onBackToCourses}
                variant="outline"
                className="flex-1 h-11 text-base font-semibold"
              >
                Back to Courses
              </Button>
            )}
          </div>
        </div>

        {/* Review Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white mb-4">
            Review Your Answers
          </h2>

          {userAnswers.map((answer, index) => {
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
                className="bg-white rounded-lg border border-slate-200 overflow-hidden transition-all duration-200"
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
                    "w-full p-4 text-left hover:bg-slate-50 transition-colors",
                    FOCUS_RING,
                  )}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm font-semibold text-slate-500">
                          Q{index + 1}
                        </span>
                        <span
                          className={cn(
                            "inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold",
                            answer.isCorrect
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-700",
                          )}
                        >
                          {answer.isCorrect ? "✓ Correct" : "✗ Wrong"}
                        </span>
                      </div>
                      <p className="text-slate-900 font-medium">
                        {question.text}
                      </p>
                    </div>
                    <ChevronDown
                      className={cn(
                        "w-5 h-5 text-slate-500 transition-transform flex-shrink-0",
                        expandedId === answer.questionId && "rotate-180",
                      )}
                    />
                  </div>
                </button>

                {expandedId === answer.questionId && (
                  <div className="border-t border-slate-200 p-4 bg-slate-50 space-y-3">
                    <div>
                      <p className="text-xs font-semibold text-slate-600 uppercase mb-2">
                        Your Answer
                      </p>
                      <p
                        className={cn(
                          "text-sm p-3 rounded border-2",
                          answer.isCorrect
                            ? "bg-green-50 border-green-300 text-green-900"
                            : "bg-red-50 border-red-300 text-red-900",
                        )}
                      >
                        {selectedOptionText}
                      </p>
                    </div>

                    {!answer.isCorrect && (
                      <div>
                        <p className="text-xs font-semibold text-slate-600 uppercase mb-2">
                          Correct Answer
                        </p>
                        <p className="text-sm p-3 rounded border-2 bg-green-50 border-green-300 text-green-900">
                          {correctOptionText}
                        </p>
                      </div>
                    )}

                    {question.explanation && (
                      <div>
                        <p className="text-xs font-semibold text-slate-600 uppercase mb-2">
                          Explanation
                        </p>
                        <p className="text-sm text-slate-700">
                          {question.explanation}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
