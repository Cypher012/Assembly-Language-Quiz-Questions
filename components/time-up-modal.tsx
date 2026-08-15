"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { AlarmClock } from "lucide-react";

const FOCUS_RING =
  "outline-none focus-visible:ring-[3px] focus-visible:ring-chalk-yellow/70 focus-visible:ring-offset-2 focus-visible:ring-offset-board";

const ADD_TIME_OPTIONS = [5, 10, 15];

interface TimeUpModalProps {
  open: boolean;
  onAddTime: (minutes: number) => void;
  onRemoveTimer: () => void;
}

export default function TimeUpModal({
  open,
  onAddTime,
  onRemoveTimer,
}: TimeUpModalProps) {
  return (
    <Dialog open={open}>
      <DialogContent
        showCloseButton={false}
        onPointerDownOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
        className="bg-board border-2 border-board-line text-board-ink w-[calc(100%-2rem)] sm:max-w-sm rounded-md shadow-2xl"
      >
        <AlarmClock className="w-9 h-9 text-chalk-coral mb-2" />
        <DialogHeader>
          <DialogTitle className="text-board-ink text-lg font-bold mb-1">
            Time&apos;s Up!
          </DialogTitle>
          <DialogDescription className="text-board-ink-muted text-sm leading-relaxed">
            Your timer ran out. Add more time to keep going, or drop the
            timer and finish this quiz at your own pace.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 pt-1">
          <div>
            <p className="text-xs font-bold text-board-ink-muted uppercase tracking-wide mb-2">
              Add time
            </p>
            <div className="flex gap-2">
              {ADD_TIME_OPTIONS.map((mins) => (
                <button
                  key={mins}
                  onClick={() => onAddTime(mins)}
                  className={`flex-1 px-4 py-2 rounded-md text-sm font-bold transition-all duration-200 border bg-board-2 border-board-line text-board-ink hover:border-chalk-yellow hover:text-chalk-yellow ${FOCUS_RING}`}
                >
                  +{mins}m
                </button>
              ))}
            </div>
          </div>

          <Button
            onClick={onRemoveTimer}
            variant="outline"
            className="w-full h-auto min-h-11 py-2 text-sm font-bold rounded-md bg-board-2 border-board-line text-board-ink hover:bg-board"
          >
            Remove timer &amp; continue
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
