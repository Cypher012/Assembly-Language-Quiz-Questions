"use client"

import { CheckCircle, XCircle } from "lucide-react"

interface FeedbackPanelProps {
  isCorrect: boolean
  explanation?: string
}

export default function FeedbackPanel({ isCorrect, explanation }: FeedbackPanelProps) {
  return (
    <div
      className={cn(
        "p-4 rounded-lg border-2 animate-in fade-in slide-in-from-top-2 duration-300 mb-6",
        isCorrect
          ? "bg-green-50 dark:bg-green-900/20 border-green-300 dark:border-green-700"
          : "bg-red-50 dark:bg-red-900/20 border-red-300 dark:border-red-700",
      )}
    >
      <div className="flex gap-3 items-start">
        {isCorrect ? (
          <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
        ) : (
          <XCircle className="w-6 h-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
        )}
        <div className="flex-1">
          <h3
            className={cn(
              "font-semibold text-lg mb-1",
              isCorrect ? "text-green-900 dark:text-green-100" : "text-red-900 dark:text-red-100",
            )}
          >
            {isCorrect ? "Correct!" : "Incorrect"}
          </h3>
          {explanation && (
            <p
              className={cn(
                "text-sm",
                isCorrect ? "text-green-800 dark:text-green-200" : "text-red-800 dark:text-red-200",
              )}
            >
              {explanation}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

import { cn } from "@/lib/utils"
