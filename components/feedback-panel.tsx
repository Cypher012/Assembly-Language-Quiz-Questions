"use client";

import { BookOpen, CheckCircle, XCircle } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { cn } from "@/lib/utils";

interface FeedbackPanelProps {
  isCorrect: boolean;
  explanation?: string;
  // Study mode shows the explanation without the user having answered, so
  // there is nothing to mark right or wrong.
  neutral?: boolean;
}

export default function FeedbackPanel({
  isCorrect,
  explanation,
  neutral = false,
}: FeedbackPanelProps) {
  if (neutral) {
    return (
      <div className="p-4 rounded-md border-2 bg-paper-2 border-paper-line animate-in fade-in slide-in-from-top-2 duration-300 mb-6">
        <div className="flex gap-3 items-start">
          <BookOpen className="w-6 h-6 text-paper-ink-muted flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <h3 className="font-bold text-lg mb-1 text-paper-ink">
              Explanation
            </h3>
            {explanation && (
              <div className="text-sm text-paper-ink-muted [&_p]:mb-2 [&_p:last-child]:mb-0 [&_code]:bg-paper [&_code]:px-1 [&_code]:rounded-sm [&_code]:text-paper-ink">
                <ReactMarkdown
                  remarkPlugins={[remarkMath]}
                  rehypePlugins={[rehypeKatex]}
                >
                  {explanation}
                </ReactMarkdown>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "p-4 rounded-md border-2 animate-in fade-in slide-in-from-top-2 duration-300 mb-6",
        isCorrect
          ? "bg-chalk-sage/10 border-chalk-sage"
          : "bg-chalk-coral/10 border-chalk-coral",
      )}
    >
      <div className="flex gap-3 items-start">
        {isCorrect ? (
          <CheckCircle className="w-6 h-6 text-chalk-sage flex-shrink-0 mt-0.5" />
        ) : (
          <XCircle className="w-6 h-6 text-chalk-coral flex-shrink-0 mt-0.5" />
        )}
        <div className="flex-1">
          <h3
            className={cn(
              "font-bold text-lg mb-1",
              isCorrect ? "text-chalk-sage-ink" : "text-chalk-coral-ink",
            )}
          >
            {isCorrect ? "Correct!" : "Incorrect"}
          </h3>
          {explanation && (
            <div className="text-sm text-paper-ink-muted [&_p]:mb-2 [&_p:last-child]:mb-0 [&_code]:bg-paper-2 [&_code]:px-1 [&_code]:rounded-sm [&_code]:text-paper-ink">
              <ReactMarkdown
                remarkPlugins={[remarkMath]}
                rehypePlugins={[rehypeKatex]}
              >
                {explanation}
              </ReactMarkdown>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
