"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
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
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-board border-2 border-board-line text-board-ink rounded-md shadow-2xl w-[calc(100%-2rem)] sm:max-w-sm">
        <Shuffle className="w-9 h-9 text-chalk-yellow mb-2" />
        <DialogHeader>
          <DialogTitle className="text-board-ink text-lg font-bold mb-1">
            Shuffle the question order?
          </DialogTitle>
          <DialogDescription className="text-board-ink-muted text-sm leading-relaxed">
            Answer options are always shuffled. This only decides whether
            the questions come in random order or the order they were
            written.
          </DialogDescription>
        </DialogHeader>
        <div className="flex gap-2 pt-2">
          <Button
            onClick={() => onChoose(false)}
            variant="outline"
            className="flex-1 h-10 bg-board-2 border-board-line text-board-ink hover:bg-board rounded-md text-sm font-bold"
          >
            Written order
          </Button>
          <Button
            onClick={() => onChoose(true)}
            className="flex-1 h-10 text-sm font-bold rounded-md"
          >
            Shuffle
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
