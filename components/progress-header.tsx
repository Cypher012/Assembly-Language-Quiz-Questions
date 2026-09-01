"use client";

import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import ExamTimer from "./exam-timer";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  LogOut,
  AlertTriangle,
  Keyboard,
  Calculator as CalculatorIcon,
} from "lucide-react";

const FOCUS_RING =
  "outline-none focus-visible:ring-[3px] focus-visible:ring-chalk-yellow/70 focus-visible:ring-offset-2 focus-visible:ring-offset-board";

interface ProgressHeaderProps {
  current: number;
  total: number;
  score: number;
  examEndTime?: number | null;
  onTimeUp?: () => void;
  onExitExam?: () => void;
  showExitButton?: boolean;
  onShowShortcuts?: () => void;
  onShowCalculator?: () => void;
  isStudyMode?: boolean;
}

export default function ProgressHeader({
  current,
  total,
  score,
  examEndTime,
  onTimeUp,
  onExitExam,
  showExitButton,
  onShowShortcuts,
  onShowCalculator,
  isStudyMode = false,
}: ProgressHeaderProps) {
  const progress = (current / total) * 100;
  const [secondsLeft, setSecondsLeft] = useState<number>(() => {
    if (!examEndTime) return 0;
    return Math.max(0, Math.ceil((examEndTime - Date.now()) / 1000));
  });

  useEffect(() => {
    if (!examEndTime) return;

    let interval: ReturnType<typeof setInterval>;
    const tick = () => {
      const remaining = Math.ceil((examEndTime - Date.now()) / 1000);
      if (remaining <= 0) {
        setSecondsLeft(0);
        clearInterval(interval);
        onTimeUp?.();
        return;
      }
      setSecondsLeft(remaining);
    };

    tick(); // run immediately
    interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [examEndTime, onTimeUp]);

  const showExit = (!!examEndTime && !!onExitExam) || !!showExitButton;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <span className="font-display text-2xl sm:text-3xl text-chalk-yellow -rotate-1 inline-block">
            QuizSpark
          </span>
          <p className="text-board-ink-muted mt-1">
            Question {current} of {total}
          </p>
        </div>

        <div className="flex items-center gap-3">
          {onShowCalculator && (
            <button
              onClick={onShowCalculator}
              title="Calculator"
              aria-label="Calculator"
              className={`flex items-center justify-center w-8 h-8 rounded-md text-board-ink-muted border border-board-line hover:text-chalk-yellow hover:border-chalk-yellow/50 transition-all duration-200 ${FOCUS_RING}`}
            >
              <CalculatorIcon className="w-4 h-4" />
            </button>
          )}
          {onShowShortcuts && (
            <button
              onClick={onShowShortcuts}
              title="Keyboard shortcuts (?)"
              aria-label="Keyboard shortcuts"
              className={`hidden md:flex items-center justify-center w-8 h-8 rounded-md text-board-ink-muted border border-board-line hover:text-chalk-yellow hover:border-chalk-yellow/50 transition-all duration-200 ${FOCUS_RING}`}
            >
              <Keyboard className="w-4 h-4" />
            </button>
          )}
          {showExit && onExitExam && (
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <button
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-bold text-chalk-coral border border-chalk-coral/40 bg-chalk-coral/10 hover:bg-chalk-coral/20 transition-all duration-200 ${FOCUS_RING}`}
                >
                  <LogOut className="w-3.5 h-3.5" />
                  Exit
                </button>
              </AlertDialogTrigger>
              <AlertDialogContent className="bg-board border-2 border-board-line text-board-ink rounded-md shadow-2xl p-0 overflow-hidden w-[calc(100%-2rem)] sm:max-w-sm">
                <div className="p-6 min-w-0">
                  <AlertTriangle className="w-9 h-9 text-chalk-coral mb-4" />
                  <AlertDialogHeader>
                    <AlertDialogTitle className="text-board-ink text-lg font-bold mb-1">
                      Exit {examEndTime ? "exam" : "quiz"}?
                    </AlertDialogTitle>
                    <AlertDialogDescription className="text-board-ink-muted text-sm leading-relaxed">
                      Your progress will be lost and the{" "}
                      {examEndTime ? "exam" : "quiz"} will be cancelled. This
                      cannot be undone.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                </div>
                <div className="flex gap-2 px-6 pb-6">
                  <AlertDialogCancel className="flex-1 h-10 bg-board-2 border-board-line text-board-ink hover:bg-board rounded-md text-sm font-bold transition-all">
                    Keep going
                  </AlertDialogCancel>
                  <AlertDialogAction
                    onClick={onExitExam}
                    className="flex-1 h-10 bg-chalk-coral hover:bg-chalk-coral/90 text-white border-0 rounded-md text-sm font-bold transition-all"
                  >
                    Exit {examEndTime ? "exam" : "quiz"}
                  </AlertDialogAction>
                </div>
              </AlertDialogContent>
            </AlertDialog>
          )}
          {examEndTime ? (
            <ExamTimer secondsLeft={secondsLeft} />
          ) : isStudyMode ? (
            <div className="text-right board-surface rounded-md p-3 sm:p-4 border-2 border-board-line">
              <p className="text-[10px] uppercase tracking-wide text-board-ink-muted mb-0.5">
                Mode
              </p>
              <p className="text-lg sm:text-xl font-bold text-chalk-yellow">
                Study
              </p>
            </div>
          ) : (
            <div className="text-right board-surface rounded-md p-3 sm:p-4 border-2 border-board-line">
              <p className="text-[10px] uppercase tracking-wide text-board-ink-muted mb-0.5">
                Score
              </p>
              <p className="text-2xl sm:text-3xl font-bold font-mono tabular-nums text-board-ink">
                {score}/{total}
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="space-y-1.5">
        <Progress
          value={progress}
          className="h-2 bg-board-line [&>[data-slot=progress-indicator]]:bg-chalk-yellow"
        />
        <p className="text-xs text-board-ink-muted text-right">
          {Math.round(progress)}% Complete
        </p>
      </div>
    </div>
  );
}
