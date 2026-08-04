"use client";

interface ExamTimerProps {
  secondsLeft: number;
}

export default function ExamTimer({ secondsLeft }: ExamTimerProps) {
  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const display = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  const isRed = secondsLeft <= 60;
  const isAmber = !isRed && secondsLeft <= 300;

  return (
    <div
      className={`flex flex-col items-end board-surface rounded-md px-3 py-2 sm:px-4 sm:py-3 border-2 ${
        isRed
          ? "border-chalk-coral animate-pulse"
          : isAmber
            ? "border-chalk-yellow"
            : "border-board-line"
      }`}
    >
      <p
        className={`text-[10px] uppercase tracking-wide mb-0.5 ${isRed ? "text-chalk-coral" : isAmber ? "text-chalk-yellow" : "text-board-ink-muted"}`}
      >
        Time Left
      </p>
      <p
        className={`text-2xl sm:text-3xl font-bold font-mono tabular-nums ${
          isRed
            ? "text-chalk-coral"
            : isAmber
              ? "text-chalk-yellow"
              : "text-board-ink"
        }`}
      >
        {display}
      </p>
    </div>
  );
}
