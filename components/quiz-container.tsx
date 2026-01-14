"use client";

import { useState, useEffect } from "react";
import { type Question, allQuestions } from "@/lib/quiz-data";
import QuestionCard from "./question-card";
import ProgressHeader from "./progress-header";
import ResultSummary from "./result-summary";

type QuizState = "idle" | "answered" | "revealed" | "next" | "complete";

interface UserAnswer {
  questionId: string;
  selectedOptionId: string;
  isCorrect: boolean;
}

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function QuizContainer() {
  const [questions, setQuestions] = useState<Question[]>(allQuestions);
  const [isShuffled, setIsShuffled] = useState(false);

  useEffect(() => {
    setQuestions(shuffleArray(allQuestions));
    setIsShuffled(true);
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [state, setState] = useState<QuizState>("idle");
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const [score, setScore] = useState(0);

  const currentQuestion = questions[currentIndex];
  const isLastQuestion = currentIndex === questions.length - 1;
  const isAnswered = state !== "idle";
  const isRevealed = state === "revealed" || state === "complete";

  const handleSelectOption = (optionId: string) => {
    if (!isAnswered) {
      setSelectedOption(optionId);
    }
  };

  const handleConfirmAnswer = () => {
    if (!selectedOption) return;

    const isCorrect = selectedOption === currentQuestion.correctOptionId;

    setUserAnswers((prev) => [
      ...prev,
      {
        questionId: currentQuestion.id,
        selectedOptionId: selectedOption,
        isCorrect,
      },
    ]);

    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    setState("revealed");
  };

  const handleNextQuestion = () => {
    if (isLastQuestion) {
      setState("complete");
    } else {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setState("idle");
    }
  };

  const handleRestart = () => {
    setQuestions(shuffleArray(allQuestions));
    setCurrentIndex(0);
    setSelectedOption(null);
    setState("idle");
    setUserAnswers([]);
    setScore(0);
  };

  if (!isShuffled) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 p-4 sm:p-6 lg:p-8">
        <div className="max-w-2xl mx-auto flex items-center justify-center min-h-[50vh]">
          <div className="text-white text-lg">Loading quiz...</div>
        </div>
      </div>
    );
  }

  if (state === "complete") {
    return (
      <ResultSummary
        score={score}
        total={questions.length}
        userAnswers={userAnswers}
        questions={questions}
        onRestart={handleRestart}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 p-4 sm:p-6 lg:p-8">
      <div className="max-w-2xl mx-auto">
        <ProgressHeader
          current={currentIndex + 1}
          total={questions.length}
          score={score}
        />

        <QuestionCard
          question={currentQuestion}
          selectedOption={selectedOption}
          isRevealed={isRevealed}
          onSelectOption={handleSelectOption}
          onConfirmAnswer={handleConfirmAnswer}
          onNextQuestion={handleNextQuestion}
          isLastQuestion={isLastQuestion}
        />
      </div>
    </div>
  );
}
