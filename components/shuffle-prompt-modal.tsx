"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Shuffle } from "lucide-react";

interface ShufflePromptModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onChoose: (shuffle: boolean) => void;
}

export default function ShufflePromptModal({
  open,
  onOpenChange,
  onChoose,
}: ShufflePromptModalProps) {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent className="bg-board border-2 border-board-line text-board-ink rounded-md shadow-2xl p-0 overflow-hidden w-[calc(100%-2rem)] sm:max-w-sm">
        <div className="p-6 min-w-0">
          <Shuffle className="w-9 h-9 text-chalk-yellow mb-4" />
          <AlertDialogHeader>
            <AlertDialogTitle className="text-board-ink text-lg font-bold mb-1">
              Shuffle the question order?
            </AlertDialogTitle>
            <AlertDialogDescription className="text-board-ink-muted text-sm leading-relaxed">
              Answer options are always shuffled. This only decides whether
              the questions come in random order or the order they were
              written.
            </AlertDialogDescription>
          </AlertDialogHeader>
        </div>
        <div className="flex gap-2 px-6 pb-6">
          <AlertDialogCancel
            onClick={() => onChoose(false)}
            className="flex-1 h-10 bg-board-2 border-board-line text-board-ink hover:bg-board rounded-md text-sm font-bold transition-all"
          >
            Written order
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={() => onChoose(true)}
            className="flex-1 h-10 text-sm font-bold rounded-md"
          >
            Shuffle
          </AlertDialogAction>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
