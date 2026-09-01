"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ChevronUp, ChevronDown } from "lucide-react";

const FOCUS_RING =
  "outline-none focus-visible:ring-[3px] focus-visible:ring-chalk-yellow/70 focus-visible:ring-offset-2 focus-visible:ring-offset-board";

// Fades from chalk-sage (green, 70%+) to chalk-coral (red, below 40%) in five
// steps rather than a hard cutoff at 70%.
function getPercentageColor(percentage: number): string {
  if (percentage >= 70) return "var(--chalk-sage)";
  if (percentage >= 60)
    return "color-mix(in oklch, var(--chalk-sage) 70%, var(--chalk-coral) 30%)";
  if (percentage >= 50)
    return "color-mix(in oklch, var(--chalk-sage) 50%, var(--chalk-coral) 50%)";
  if (percentage >= 40)
    return "color-mix(in oklch, var(--chalk-sage) 30%, var(--chalk-coral) 70%)";
  return "var(--chalk-coral)";
}

interface UserAnswer {
  questionId: string;
  selectedOptionId: string;
  isCorrect: boolean;
}

interface QuestionNavigatorProps {
  totalQuestions: number;
  currentIndex: number;
  userAnswers: UserAnswer[];
  questionIds: string[];
  onNavigate: (index: number) => void;
  hideCorrectness?: boolean; // Hide correctness info in exam mode
  // Study mode has no answers to gate on: every question is reachable and
  // there is no running score to report.
  isStudyMode?: boolean;
}

export default function QuestionNavigator({
  totalQuestions,
  currentIndex,
  userAnswers,
  questionIds,
  onNavigate,
  hideCorrectness = false,
  isStudyMode = false,
}: QuestionNavigatorProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Prevent body scroll when expanded on mobile
  useEffect(() => {
    if (isExpanded) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [isExpanded]);

  const getAnswerStatus = (index: number) => {
    const questionId = questionIds[index];
    const answer = userAnswers.find((a) => a.questionId === questionId);
    if (!answer) return null;
    return answer.isCorrect;
  };

  const isAnswered = (index: number) => {
    const questionId = questionIds[index];
    return userAnswers.some((a) => a.questionId === questionId);
  };

  const answeredCount = userAnswers.length;
  const correctCount = userAnswers.filter((a) => a.isCorrect).length;
  const passPercentage =
    answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 board-surface border-t-2 border-board-line z-50"
      style={{
        paddingBottom: "max(env(safe-area-inset-bottom, 0), 0px)",
        WebkitBackfaceVisibility: "hidden",
        backfaceVisibility: "hidden",
      }}
    >
      {/* Collapsed view - always visible */}
      <div className="px-4 py-2">
        <div className="max-w-3xl mx-auto flex items-center justify-between gap-2">
          {/* Hide score stats in exam mode */}
          {!hideCorrectness && (
            <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm min-w-0">
              <span className="text-board-ink-muted whitespace-nowrap">
                Q{" "}
                <span className="text-board-ink font-bold">
                  {currentIndex + 1}
                </span>
                /{totalQuestions}
              </span>
              {!isStudyMode && (
                <>
                  <span className="text-board-line hidden sm:inline">|</span>
                  <span className="text-board-ink-muted hidden sm:inline whitespace-nowrap">
                    Answered:{" "}
                    <span className="text-board-ink font-bold">
                      {answeredCount}
                    </span>
                  </span>
                  <span className="text-chalk-sage font-bold whitespace-nowrap">
                    {correctCount} ✓
                  </span>
                  <span className="text-chalk-coral font-bold whitespace-nowrap">
                    {answeredCount - correctCount} ✗
                  </span>
                  {passPercentage !== null && (
                    <span
                      className="font-bold whitespace-nowrap"
                      style={{ color: getPercentageColor(passPercentage) }}
                    >
                      {passPercentage}%
                    </span>
                  )}
                </>
              )}
            </div>
          )}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsExpanded(!isExpanded);
            }}
            onTouchStart={(e) => {
              e.stopPropagation();
            }}
            className={`flex items-center gap-1 text-xs sm:text-sm text-chalk-yellow hover:text-chalk-yellow/80 transition-colors rounded flex-shrink-0 ${FOCUS_RING}`}
            style={{ touchAction: "manipulation" }}
          >
            {isExpanded ? (
              <>
                Hide <ChevronDown className="w-4 h-4" />
              </>
            ) : (
              <>
                Show all <ChevronUp className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </div>

      {/* Expanded view - question grid */}
      {isExpanded && (
        <div
          className="px-4 pb-3 border-t border-board-line/60"
          onTouchStart={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}
        >
          <div className="max-w-3xl mx-auto pt-3">
            <div
              className="max-h-32 overflow-y-auto overscroll-contain"
              style={{
                WebkitOverflowScrolling: "touch",
                touchAction: "pan-y",
                overscrollBehavior: "contain",
              }}
            >
              <div className="flex flex-wrap justify-center gap-1.5">
                {Array.from({ length: totalQuestions }, (_, index) => {
                  const answered = isAnswered(index);
                  const canNavigate = isStudyMode || answered;
                  const status = getAnswerStatus(index);
                  const isCurrent = index === currentIndex;

                  return (
                    <button
                      key={index}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        if (canNavigate) {
                          onNavigate(index);
                          setIsExpanded(false);
                        }
                      }}
                      onTouchStart={(e) => {
                        e.stopPropagation();
                      }}
                      disabled={!canNavigate}
                      className={cn(
                        "relative w-8 h-8 sm:w-7 sm:h-7 rounded-sm text-xs font-bold transition-all duration-200",
                        "flex items-center justify-center",
                        "active:scale-95",
                        FOCUS_RING,
                        isCurrent && "ring-2 ring-chalk-yellow",
                        answered &&
                          !hideCorrectness &&
                          status === true &&
                          "bg-chalk-sage text-white hover:bg-chalk-sage/90 cursor-pointer",
                        answered &&
                          !hideCorrectness &&
                          status === false &&
                          "bg-chalk-coral text-white hover:bg-chalk-coral/90 cursor-pointer",
                        answered &&
                          hideCorrectness &&
                          "bg-board-2 text-board-ink hover:bg-board-2/80 cursor-pointer",
                        !answered &&
                          !canNavigate &&
                          "bg-board-2 text-board-ink-muted cursor-not-allowed",
                        !answered &&
                          canNavigate &&
                          "bg-board-2 text-board-ink hover:bg-board-2/80 cursor-pointer",
                        isCurrent && !answered && "bg-chalk-yellow/20 text-chalk-yellow",
                      )}
                      style={{ touchAction: "manipulation" }}
                      title={
                        hideCorrectness && answered
                          ? `Question ${index + 1} - Answered`
                          : answered
                            ? `Question ${index + 1} - ${status ? "Correct" : "Incorrect"}`
                            : `Question ${index + 1} - Not answered`
                      }
                    >
                      {answered && !hideCorrectness ? (
                        <span className="text-xs font-bold">
                          {status ? "✓" : "✗"}
                        </span>
                      ) : (
                        <span>{index + 1}</span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
