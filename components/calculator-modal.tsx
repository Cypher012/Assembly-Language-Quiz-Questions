"use client";

import { useEffect, useRef, useState } from "react";
import { Calculator as CalculatorIcon, X } from "lucide-react";

interface CalculatorModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const PANEL_WIDTH = 280;
const PANEL_MARGIN = 16;

const MAX_LENGTH = 40;

type Token = { type: "number"; value: number } | { type: "op"; value: string };

function tokenize(expression: string): Token[] {
  const tokens: Token[] = [];
  let i = 0;
  while (i < expression.length) {
    const char = expression[i];
    if (/[0-9.]/.test(char)) {
      let num = char;
      i++;
      while (i < expression.length && /[0-9.]/.test(expression[i])) {
        num += expression[i];
        i++;
      }
      tokens.push({ type: "number", value: parseFloat(num) });
      continue;
    }
    if ("+-×÷()".includes(char)) {
      tokens.push({ type: "op", value: char });
      i++;
      continue;
    }
    i++;
  }
  return tokens;
}

function evaluate(expression: string): number {
  const tokens = tokenize(expression);
  let pos = 0;

  const peek = () => tokens[pos];
  const next = () => tokens[pos++];

  function parseExpr(): number {
    let value = parseTerm();
    while (peek() && peek().type === "op" && (peek().value === "+" || peek().value === "-")) {
      const op = next().value;
      const rhs = parseTerm();
      value = op === "+" ? value + rhs : value - rhs;
    }
    return value;
  }

  function parseTerm(): number {
    let value = parseFactor();
    while (
      peek() &&
      peek().type === "op" &&
      (peek().value === "×" || peek().value === "÷")
    ) {
      const op = next().value;
      const rhs = parseFactor();
      value = op === "×" ? value * rhs : value / rhs;
    }
    return value;
  }

  function parseFactor(): number {
    const token = peek();
    if (token && token.type === "op" && token.value === "-") {
      next();
      return -parseFactor();
    }
    if (token && token.type === "op" && token.value === "(") {
      next();
      const value = parseExpr();
      if (peek() && peek().value === ")") next();
      return value;
    }
    if (token && token.type === "number") {
      next();
      return token.value;
    }
    return 0;
  }

  const result = parseExpr();
  if (!isFinite(result)) throw new Error("Invalid");
  return result;
}

function formatResult(value: number): string {
  if (!isFinite(value)) return "Error";
  const rounded = Math.round(value * 1e10) / 1e10;
  const str = String(rounded);
  return str.length > 14 ? value.toExponential(4) : str;
}

export default function CalculatorModal({
  open,
  onOpenChange,
}: CalculatorModalProps) {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("0");
  const [justEvaluated, setJustEvaluated] = useState(false);
  const [position, setPosition] = useState<{ x: number; y: number } | null>(
    null,
  );
  const dragState = useRef<{
    pointerId: number;
    offsetX: number;
    offsetY: number;
  } | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) setPosition(null);
  }, [open]);

  const clampPosition = (x: number, y: number) => {
    const panel = panelRef.current;
    const width = panel?.offsetWidth ?? PANEL_WIDTH;
    const height = panel?.offsetHeight ?? 0;
    const maxX = window.innerWidth - width - PANEL_MARGIN;
    const maxY = window.innerHeight - height - PANEL_MARGIN;
    return {
      x: Math.min(Math.max(x, PANEL_MARGIN), Math.max(maxX, PANEL_MARGIN)),
      y: Math.min(Math.max(y, PANEL_MARGIN), Math.max(maxY, PANEL_MARGIN)),
    };
  };

  const handleDragStart = (e: React.PointerEvent<HTMLDivElement>) => {
    const panel = panelRef.current;
    if (!panel) return;
    const rect = panel.getBoundingClientRect();
    dragState.current = {
      pointerId: e.pointerId,
      offsetX: e.clientX - rect.left,
      offsetY: e.clientY - rect.top,
    };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handleDragMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragState.current || dragState.current.pointerId !== e.pointerId)
      return;
    const { offsetX, offsetY } = dragState.current;
    setPosition(clampPosition(e.clientX - offsetX, e.clientY - offsetY));
  };

  const handleDragEnd = (e: React.PointerEvent<HTMLDivElement>) => {
    if (dragState.current?.pointerId === e.pointerId) {
      dragState.current = null;
    }
  };

  if (!open) return null;

  const lastChar = () => expression[expression.length - 1];
  const isOperator = (char: string) => "+-×÷".includes(char);

  const append = (value: string) => {
    if (justEvaluated) {
      if (/[0-9.]/.test(value)) {
        setExpression(value);
      } else {
        setExpression(result + value);
      }
      setJustEvaluated(false);
      return;
    }
    if (expression.length >= MAX_LENGTH) return;

    if (isOperator(value)) {
      if (expression === "" && value !== "-") return;
      if (isOperator(lastChar())) {
        setExpression(expression.slice(0, -1) + value);
        return;
      }
    }
    if (value === "." ) {
      const parts = expression.split(/[+\-×÷(]/);
      const currentNumber = parts[parts.length - 1];
      if (currentNumber.includes(".")) return;
      if (currentNumber === "") {
        setExpression(expression + "0.");
        return;
      }
    }
    setExpression(expression + value);
  };

  const openParen = () => {
    if (justEvaluated) {
      setExpression("(");
      setJustEvaluated(false);
      return;
    }
    if (expression === "" || isOperator(lastChar()) || lastChar() === "(") {
      setExpression(expression + "(");
    }
  };

  const closeParen = () => {
    const opens = (expression.match(/\(/g) || []).length;
    const closes = (expression.match(/\)/g) || []).length;
    if (
      opens > closes &&
      expression !== "" &&
      !isOperator(lastChar()) &&
      lastChar() !== "("
    ) {
      setExpression(expression + ")");
    }
  };

  const toggleSign = () => {
    if (justEvaluated) {
      const value = parseFloat(result);
      setExpression(String(-value));
      setJustEvaluated(false);
      return;
    }
    const match = expression.match(/(-?\d+\.?\d*)$/);
    if (!match) return;
    const numberStr = match[0];
    const start = expression.length - numberStr.length;
    const before = expression.slice(0, start);
    if (numberStr.startsWith("-")) {
      setExpression(before + numberStr.slice(1));
    } else if (before === "" || isOperator(before[before.length - 1]) || before[before.length - 1] === "(") {
      setExpression(before + "-" + numberStr);
    }
  };

  const clearAll = () => {
    setExpression("");
    setResult("0");
    setJustEvaluated(false);
  };

  const deleteLast = () => {
    if (justEvaluated) {
      clearAll();
      return;
    }
    setExpression(expression.slice(0, -1));
  };

  const square = () => {
    const base = justEvaluated ? result : expression;
    if (!base) return;
    try {
      const value = evaluate(base);
      const squared = value ** 2;
      setExpression(formatResult(squared));
      setResult(formatResult(squared));
      setJustEvaluated(true);
    } catch {
      setResult("Error");
    }
  };

  const equals = () => {
    if (!expression) return;
    try {
      const value = evaluate(expression);
      setResult(formatResult(value));
      setJustEvaluated(true);
    } catch {
      setResult("Error");
      setJustEvaluated(true);
    }
  };

  const buttonClass =
    "h-11 rounded-md text-base font-bold transition-all duration-150 active:scale-95 outline-none focus-visible:ring-[3px] focus-visible:ring-chalk-yellow/70";
  const numClass = `${buttonClass} bg-board-2 border border-board-line text-board-ink hover:bg-board`;
  const opClass = `${buttonClass} bg-board-2 border border-board-line text-chalk-yellow hover:bg-board`;

  return (
    <div
      ref={panelRef}
      className={`fixed z-50 w-[280px] board-surface rounded-md border-2 border-board-line shadow-2xl p-3 ${
        position ? "" : "bottom-4 right-4"
      }`}
      style={position ? { left: position.x, top: position.y } : undefined}
      role="dialog"
      aria-label="Calculator"
    >
      <div
        className="flex items-center justify-between mb-2 cursor-grab active:cursor-grabbing touch-none select-none"
        onPointerDown={handleDragStart}
        onPointerMove={handleDragMove}
        onPointerUp={handleDragEnd}
        onPointerCancel={handleDragEnd}
      >
        <div className="flex items-center gap-1.5 text-board-ink">
          <CalculatorIcon className="w-4 h-4 text-chalk-yellow" />
          <span className="text-sm font-bold">Calculator</span>
        </div>
        <button
          onClick={() => onOpenChange(false)}
          onPointerDown={(e) => e.stopPropagation()}
          aria-label="Close calculator"
          className="w-6 h-6 flex items-center justify-center rounded-md text-board-ink-muted hover:text-chalk-yellow transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="rounded-md border-2 border-board-line p-2.5 mb-2.5 bg-board">
        <p className="text-right font-mono text-xs text-board-ink-muted truncate min-h-[16px]">
          {expression || " "}
        </p>
        <p className="text-right font-mono text-2xl tabular-nums text-board-ink truncate">
          {justEvaluated ? result : expression || "0"}
        </p>
      </div>

      <div className="grid grid-cols-4 gap-1.5">
        <button onClick={openParen} className={opClass}>
          (
        </button>
        <button onClick={closeParen} className={opClass}>
          )
        </button>
        <button onClick={toggleSign} className={opClass}>
          +/−
        </button>
        <button
          onClick={clearAll}
          className={`${buttonClass} bg-chalk-coral/10 border border-chalk-coral/40 text-chalk-coral hover:bg-chalk-coral/20`}
        >
          C
        </button>

        <button onClick={() => append("7")} className={numClass}>
          7
        </button>
        <button onClick={() => append("8")} className={numClass}>
          8
        </button>
        <button onClick={() => append("9")} className={numClass}>
          9
        </button>
        <button onClick={() => append("÷")} className={opClass}>
          ÷
        </button>

        <button onClick={() => append("4")} className={numClass}>
          4
        </button>
        <button onClick={() => append("5")} className={numClass}>
          5
        </button>
        <button onClick={() => append("6")} className={numClass}>
          6
        </button>
        <button onClick={() => append("×")} className={opClass}>
          ×
        </button>

        <button onClick={() => append("1")} className={numClass}>
          1
        </button>
        <button onClick={() => append("2")} className={numClass}>
          2
        </button>
        <button onClick={() => append("3")} className={numClass}>
          3
        </button>
        <button onClick={() => append("-")} className={opClass}>
          −
        </button>

        <button onClick={() => append("0")} className={numClass}>
          0
        </button>
        <button onClick={() => append(".")} className={numClass}>
          .
        </button>
        <button onClick={square} className={opClass}>
          x²
        </button>
        <button onClick={() => append("+")} className={opClass}>
          +
        </button>

        <button
          onClick={deleteLast}
          className={`${buttonClass} col-span-2 bg-board-2 border border-board-line text-board-ink hover:bg-board`}
        >
          DEL
        </button>
        <button
          onClick={equals}
          className={`${buttonClass} col-span-2 bg-chalk-yellow border border-chalk-yellow text-board hover:bg-chalk-yellow/90`}
        >
          =
        </button>
      </div>
    </div>
  );
}
