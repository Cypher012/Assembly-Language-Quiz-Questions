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
import { LogOut, AlertTriangle } from "lucide-react";

const FOCUS_RING =
  "outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900";

interface ProgressHeaderProps {
  current: number;
  total: number;
  score: number;
  examEndTime?: number | null;
  onTimeUp?: () => void;
  onExitExam?: () => void;
  showExitButton?: boolean;
}

export default function ProgressHeader({
  current,
  total,
  score,
  examEndTime,
  onTimeUp,
  onExitExam,
  showExitButton,
}: ProgressHeaderProps) {
  const progress = (current / total) * 100;
  const [secondsLeft, setSecondsLeft] = useState<number>(() => {
    if (!examEndTime) return 0;
    return Math.max(0, Math.ceil((examEndTime - Date.now()) / 1000));
  });

  useEffect(() => {
    if (!examEndTime) return;

    const tick = () => {
      const remaining = Math.ceil((examEndTime - Date.now()) / 1000);
      if (remaining <= 0) {
        setSecondsLeft(0);
        onTimeUp?.();
        return;
      }
      setSecondsLeft(remaining);
    };

    tick(); // run immediately
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [examEndTime, onTimeUp]);

  const showExit = (!!examEndTime && !!onExitExam) || !!showExitButton;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            Quiz Spark
          </h1>
          <p className="text-slate-300">
            Question {current} of {total}
          </p>
        </div>

        <div className="flex items-center gap-3">
          {showExit && onExitExam && (
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <button
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-red-400 border border-red-500/30 bg-red-500/10 hover:bg-red-500/20 hover:text-red-300 transition-all duration-200 ${FOCUS_RING}`}
                >
                  <LogOut className="w-3.5 h-3.5" />
                  Exit
                </button>
              </AlertDialogTrigger>
              <AlertDialogContent className="bg-slate-900 border border-slate-700 text-white rounded-2xl shadow-2xl p-0 overflow-hidden max-w-sm">
                <div className="p-6">
                  <div className="w-12 h-12 rounded-2xl bg-red-500/15 flex items-center justify-center mb-4">
                    <AlertTriangle className="w-6 h-6 text-red-400" />
                  </div>
                  <AlertDialogHeader>
                    <AlertDialogTitle className="text-white text-lg font-semibold mb-1">
                      Exit {examEndTime ? "exam" : "quiz"}?
                    </AlertDialogTitle>
                    <AlertDialogDescription className="text-slate-400 text-sm leading-relaxed">
                      Your progress will be lost and the {examEndTime ? "exam" : "quiz"} will be cancelled.
                      This cannot be undone.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                </div>
                <div className="flex gap-2 px-6 pb-6">
                  <AlertDialogCancel className="flex-1 h-10 bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white rounded-xl text-sm font-medium transition-all">
                    Keep going
                  </AlertDialogCancel>
                  <AlertDialogAction
                    onClick={onExitExam}
                    className="flex-1 h-10 bg-red-600 hover:bg-red-500 text-white border-0 rounded-xl text-sm font-medium transition-all"
                  >
                    Exit {examEndTime ? "exam" : "quiz"}
                  </AlertDialogAction>
                </div>
              </AlertDialogContent>
            </AlertDialog>
          )}
          {examEndTime ? (
            <ExamTimer secondsLeft={secondsLeft} />
          ) : (
            <div className="text-right bg-slate-700/50 backdrop-blur rounded-lg p-3 sm:p-4 border border-slate-600">
              <p className="text-sm text-slate-300 mb-1">Score</p>
              <p className="text-2xl sm:text-3xl font-bold text-white">
                {score}/{total}
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Progress
          value={progress}
          className="h-2 bg-slate-600 [&>[data-slot=progress-indicator]]:bg-white"
        />
        <p className="text-xs text-slate-400 text-right">
          {Math.round(progress)}% Complete
        </p>
      </div>
    </div>
  );
}
