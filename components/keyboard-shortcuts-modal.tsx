"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Kbd, KbdGroup } from "@/components/ui/kbd";
import { Keyboard } from "lucide-react";

interface KeyboardShortcutsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const KEY_CLASS =
  "bg-paper text-paper-ink border border-paper-line rounded-sm shadow-sm";

const SHORTCUTS: { keys: string[]; label: string }[] = [
  { keys: ["1", "2", "3", "4"], label: "Select answer A / B / C / D" },
  { keys: ["A", "B", "C", "D"], label: "Select answer A / B / C / D" },
  { keys: ["Enter"], label: "Confirm answer, then advance" },
  { keys: ["→"], label: "Next question (once revealed)" },
  { keys: ["←"], label: "Previous question (if already answered)" },
  { keys: ["?"], label: "Toggle this panel" },
];

export default function KeyboardShortcutsModal({
  open,
  onOpenChange,
}: KeyboardShortcutsModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-board border-2 border-board-line text-board-ink rounded-md shadow-2xl w-[calc(100%-2rem)] sm:max-w-sm">
        <Keyboard className="w-9 h-9 text-chalk-yellow mb-2" />
        <DialogHeader>
          <DialogTitle className="text-board-ink text-lg font-bold mb-1">
            Keyboard Shortcuts
          </DialogTitle>
          <DialogDescription className="text-board-ink-muted text-sm leading-relaxed">
            Only active while answering a question.
          </DialogDescription>
        </DialogHeader>
        <ul className="space-y-2.5 pt-1">
          {SHORTCUTS.map((shortcut) => (
            <li
              key={shortcut.label + shortcut.keys.join()}
              className="flex items-center justify-between gap-4"
            >
              <span className="text-board-ink text-sm">{shortcut.label}</span>
              <KbdGroup>
                {shortcut.keys.map((key) => (
                  <Kbd key={key} className={KEY_CLASS}>
                    {key}
                  </Kbd>
                ))}
              </KbdGroup>
            </li>
          ))}
        </ul>
      </DialogContent>
    </Dialog>
  );
}
