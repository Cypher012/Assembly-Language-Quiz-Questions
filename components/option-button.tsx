"use client";

import type { Option } from "@/lib/quiz-types";
import { cn } from "@/lib/utils";
import { Check, X } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

const FOCUS_RING =
  "outline-none focus-visible:ring-[3px] focus-visible:ring-chalk-yellow/70 focus-visible:ring-offset-2 focus-visible:ring-offset-paper";

interface OptionButtonProps {
  option: Option | string; // Support both old object format and new string format
  optionLabel?: "A" | "B" | "C" | "D"; // For displaying A/B/C/D labels with shuffled questions
  isSelected: boolean;
  isCorrect: boolean;
  isRevealed: boolean;
  onClick: () => void;
  isDisabled: boolean;
  isExamMode?: boolean; // Hide correctness indicators in exam mode
}

export default function OptionButton({
  option,
  optionLabel,
  isSelected,
  isCorrect,
  isRevealed,
  onClick,
  isDisabled,
  isExamMode = false,
}: OptionButtonProps) {
  // Extract option text - handles both old (object) and new (string) formats
  const optionText = typeof option === "string" ? option : option.text;
  const displayLabel =
    optionLabel || (typeof option === "object" ? option.id.toUpperCase() : "");

  // In exam mode, never show correctness indicators (no checkmark or X)
  const isWrongSelected = !isExamMode && isRevealed && isSelected && !isCorrect;
  const isRightAnswer = !isExamMode && isRevealed && isCorrect;

  let borderColor = "border-paper-line";
  let bgColor = "bg-paper hover:bg-paper-2";
  let markerClasses = "border-paper-ink-muted text-paper-ink-muted";

  if (isRightAnswer) {
    borderColor = "border-chalk-sage";
    bgColor = "bg-chalk-sage/10";
    markerClasses = "bg-chalk-sage border-chalk-sage text-white";
  } else if (isWrongSelected) {
    borderColor = "border-chalk-coral";
    bgColor = "bg-chalk-coral/10";
    markerClasses = "bg-chalk-coral border-chalk-coral text-white";
  } else if (isSelected) {
    borderColor = "border-chalk-yellow";
    bgColor = "bg-chalk-yellow/15";
    markerClasses = "bg-chalk-yellow border-chalk-yellow text-chalk-yellow-ink";
  }

  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={cn(
        "w-full p-4 text-left rounded-md border-2 transition-all duration-200",
        "font-medium text-base sm:text-lg text-paper-ink",
        "disabled:cursor-not-allowed",
        !isDisabled && "cursor-pointer",
        FOCUS_RING,
        bgColor,
        borderColor,
      )}
    >
      <div className="flex items-center gap-3">
        <div
          className={cn(
            "w-8 h-8 rounded-full border-2 flex items-center justify-center flex-shrink-0 font-bold text-sm transition-colors",
            markerClasses,
          )}
        >
          {isRightAnswer ? (
            <Check className="w-4 h-4" strokeWidth={3} />
          ) : isWrongSelected ? (
            <X className="w-4 h-4" strokeWidth={3} />
          ) : (
            displayLabel
          )}
        </div>
        <span className="[&_p]:m-0">
          <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
            {optionText}
          </ReactMarkdown>
        </span>
      </div>
    </button>
  );
}
