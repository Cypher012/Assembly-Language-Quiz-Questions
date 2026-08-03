"use client";

import type { Option } from "@/lib/quiz-types";
import { cn } from "@/lib/utils";

const FOCUS_RING =
  "outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white";

interface OptionButtonProps {
  option: Option | string; // Support both old object format and new string format
  optionLabel?: "A" | "B" | "C" | "D"; // For displaying A/B/C/D labels with shuffled questions
  isSelected: boolean;
  isCorrect: boolean;
  isRevealed: boolean;
  onClick: () => void;
  isDisabled: boolean;
}

export default function OptionButton({
  option,
  optionLabel,
  isSelected,
  isCorrect,
  isRevealed,
  onClick,
  isDisabled,
}: OptionButtonProps) {
  // Extract option text - handles both old (object) and new (string) formats
  const optionText = typeof option === "string" ? option : option.text;
  const displayLabel =
    optionLabel || (typeof option === "object" ? option.id.toUpperCase() : "");
  let bgColor =
    "bg-slate-50 hover:bg-slate-100";
  let borderColor = "border-slate-300";
  let textColor = "text-slate-900";

  if (isRevealed) {
    if (isCorrect) {
      bgColor = "bg-green-50";
      borderColor = "border-green-500";
      textColor = "text-slate-900";
    } else if (isSelected && !isCorrect) {
      bgColor = "bg-red-50";
      borderColor = "border-red-500";
      textColor = "text-slate-900";
    }
  } else if (isSelected) {
    bgColor = "bg-blue-50";
    borderColor = "border-blue-500";
    textColor = "text-slate-900";
  }

  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={cn(
        "w-full p-4 text-left rounded-lg border-2 transition-all duration-200",
        "font-medium text-lg",
        "disabled:cursor-not-allowed",
        !isDisabled && "cursor-pointer",
        FOCUS_RING,
        bgColor,
        borderColor,
        textColor,
      )}
    >
      <div className="flex items-center gap-3">
        <div
          className={cn(
            "w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0",
            isRevealed && isCorrect
              ? "bg-green-500 border-green-500"
              : isRevealed && isSelected && !isCorrect
                ? "bg-red-500 border-red-500"
                : isSelected
                  ? "bg-blue-500 border-blue-500"
                  : "border-slate-400",
          )}
        >
          {(isRevealed || isSelected) && (
            <div
              className={cn(
                "w-2 h-2 rounded-full",
                isRevealed && isCorrect
                  ? "bg-white"
                  : isRevealed && isSelected && !isCorrect
                    ? "bg-white"
                    : isSelected
                      ? "bg-white"
                      : "",
              )}
            />
          )}
        </div>
        {displayLabel && (
          <span className="font-bold text-sm text-slate-500">
            {displayLabel}.
          </span>
        )}
        <span>{optionText}</span>
      </div>
    </button>
  );
}
