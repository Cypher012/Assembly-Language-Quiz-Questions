"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ChevronUp, ChevronDown } from "lucide-react";

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
}

export default function QuestionNavigator({
  totalQuestions,
  currentIndex,
  userAnswers,
  questionIds,
  onNavigate,
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

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 bg-slate-900/95 backdrop-blur-sm border-t border-slate-700 z-50"
      style={{ 
        paddingBottom: 'max(env(safe-area-inset-bottom, 0), 0px)',
        WebkitBackfaceVisibility: 'hidden',
        backfaceVisibility: 'hidden',
      }}
    >
      {/* Collapsed view - always visible */}
      <div className="px-4 py-2">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4 text-sm">
            <span className="text-slate-400">
              Question{" "}
              <span className="text-white font-semibold">
                {currentIndex + 1}
              </span>{" "}
              of {totalQuestions}
            </span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-400">
              Answered:{" "}
              <span className="text-white font-semibold">{answeredCount}</span>
            </span>
            <span className="text-green-500 font-semibold">
              {correctCount} ✓
            </span>
            <span className="text-red-500 font-semibold">
              {answeredCount - correctCount} ✗
            </span>
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsExpanded(!isExpanded);
            }}
            onTouchStart={(e) => {
              e.stopPropagation();
            }}
            className="flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300 transition-colors"
            style={{ touchAction: 'manipulation' }}
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
          className="px-4 pb-3 border-t border-slate-700/50"
          onTouchStart={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}
        >
          <div className="max-w-2xl mx-auto pt-3">
            <div 
              className="max-h-32 overflow-y-auto overscroll-contain"
              style={{ 
                WebkitOverflowScrolling: 'touch',
                touchAction: 'pan-y',
                overscrollBehavior: 'contain'
              }}
            >
              <div className="flex flex-wrap justify-center gap-1.5">
                {Array.from({ length: totalQuestions }, (_, index) => {
                  const answered = isAnswered(index);
                  const status = getAnswerStatus(index);
                  const isCurrent = index === currentIndex;

                  return (
                    <button
                      key={index}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        if (answered) {
                          onNavigate(index);
                          setIsExpanded(false);
                        }
                      }}
                      onTouchStart={(e) => {
                        e.stopPropagation();
                      }}
                      disabled={!answered}
                      className={cn(
                        "relative w-8 h-8 sm:w-7 sm:h-7 rounded text-xs font-medium transition-all duration-200",
                        "flex items-center justify-center",
                        "active:scale-95",
                        isCurrent && "ring-2 ring-blue-500",
                        answered &&
                          status === true &&
                          "bg-green-600 text-white hover:bg-green-500 active:bg-green-500 cursor-pointer",
                        answered &&
                          status === false &&
                          "bg-red-600 text-white hover:bg-red-500 active:bg-red-500 cursor-pointer",
                        !answered &&
                          "bg-slate-700 text-slate-400 cursor-not-allowed",
                        isCurrent && !answered && "bg-blue-600 text-white",
                      )}
                      style={{ touchAction: 'manipulation' }}
                      title={
                        answered
                          ? `Question ${index + 1} - ${status ? "Correct" : "Incorrect"}`
                          : `Question ${index + 1} - Not answered`
                      }
                    >
                      {answered ? (
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
