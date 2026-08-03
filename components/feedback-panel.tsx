"use client"

import { CheckCircle, XCircle } from "lucide-react"
import ReactMarkdown from "react-markdown"

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
          ? "bg-green-50 border-green-300"
          : "bg-red-50 border-red-300",
      )}
    >
      <div className="flex gap-3 items-start">
        {isCorrect ? (
          <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
        ) : (
          <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
        )}
        <div className="flex-1">
          <h3
            className={cn(
              "font-semibold text-lg mb-1",
              isCorrect ? "text-green-900" : "text-red-900",
            )}
          >
            {isCorrect ? "Correct!" : "Incorrect"}
          </h3>
          {explanation && (
            <div
              className={cn(
                "text-sm prose max-w-none",
                isCorrect ? "text-green-800" : "text-red-800",
              )}
            >
              <ReactMarkdown>{explanation}</ReactMarkdown>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

import { cn } from "@/lib/utils"
