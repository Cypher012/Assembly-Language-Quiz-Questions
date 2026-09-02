"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const FOCUS_RING =
  "outline-none focus-visible:ring-[3px] focus-visible:ring-chalk-yellow/70 focus-visible:ring-offset-2 focus-visible:ring-offset-board";

const BUTTON_CLASS =
  "flex items-center justify-center w-8 h-8 rounded-md text-board-ink-muted border border-board-line hover:text-chalk-yellow hover:border-chalk-yellow/50 transition-all duration-200";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // The resolved theme is only known on the client, so render a matching
  // placeholder first rather than guessing and flipping after hydration.
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className={BUTTON_CLASS} aria-hidden="true" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`${BUTTON_CLASS} ${FOCUS_RING}`}
    >
      {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </button>
  );
}
