"use client";

import { useMemo, useState } from "react";
import { Course, filterByChapter } from "@/lib/courses";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import PracticeExamModal from "./practice-exam-modal";
import type { ExamConfig } from "@/lib/quiz-types";
import {
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronDown,
  Clock,
} from "lucide-react";

const FOCUS_RING =
  "outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900";

interface ChapterSelectProps {
  course: Course;
  onSelectChapter: (chapter: string | null) => void;
  onSelectCustomChapters: (chapters: string[]) => void;
  onStartExam: (config: ExamConfig) => void;
  onBackToCourses: () => void;
}

export default function ChapterSelect({
  course,
  onSelectChapter,
  onSelectCustomChapters,
  onStartExam,
  onBackToCourses,
}: ChapterSelectProps) {
  const [isCustomMode, setIsCustomMode] = useState(false);
  const [selectedChapters, setSelectedChapters] = useState<string[]>([]);
  const [isExamModalOpen, setIsExamModalOpen] = useState(false);

  const allChapterIds = course.chapters.map((c) => c.id);

  const chapterQuestionCounts = useMemo(() => {
    const questions = course.getQuestions();
    const counts: Record<string, number> = {};
    for (const chapter of course.chapters) {
      counts[chapter.id] = filterByChapter(questions, chapter.id).length;
    }
    return counts;
  }, [course]);

  const toggleCustomMode = () => {
    if (!isCustomMode) {
      setSelectedChapters([...allChapterIds]);
    }
    setIsCustomMode(!isCustomMode);
  };

  const toggleChapter = (chapterId: string) => {
    setSelectedChapters((prev) =>
      prev.includes(chapterId)
        ? prev.filter((id) => id !== chapterId)
        : [...prev, chapterId],
    );
  };

  const toggleAll = () => {
    if (selectedChapters.length === allChapterIds.length) {
      setSelectedChapters([]);
    } else {
      setSelectedChapters([...allChapterIds]);
    }
  };

  const handleStartCustomQuiz = () => {
    if (selectedChapters.length === 0) return;

    if (selectedChapters.length === allChapterIds.length) {
      onSelectChapter(null);
    } else if (selectedChapters.length === 1) {
      onSelectChapter(selectedChapters[0]);
    } else {
      onSelectCustomChapters(selectedChapters);
    }
  };

  const allSelected = selectedChapters.length === allChapterIds.length;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto flex flex-col min-h-[calc(100vh-2rem)] sm:min-h-[calc(100vh-3rem)] lg:min-h-[calc(100vh-4rem)]">
        {/* Back button */}
        <button
          onClick={onBackToCourses}
          className={`mb-6 flex items-center text-slate-400 hover:text-white transition-colors group rounded-lg ${FOCUS_RING}`}
        >
          <ChevronLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Courses
        </button>

        <div className="text-center mb-8">
          <span className="px-3 py-1 text-sm font-medium bg-blue-100 text-blue-700 rounded-full mb-4 inline-block">
            {course.code}
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            {course.name}
          </h1>
          <p className="text-slate-400">
            Choose a specific chapter to focus on, or take the full quiz with
            all chapters.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          {course.chapters.map((chapter) => {
            const questionCount = chapterQuestionCounts[chapter.id] ?? 0;
            const isEmpty = questionCount === 0;
            return (
              <button
                key={chapter.id}
                onClick={() => !isEmpty && onSelectChapter(chapter.id)}
                disabled={isEmpty}
                className={`w-full p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02] text-left group disabled:opacity-60 disabled:hover:shadow-lg disabled:hover:scale-100 disabled:cursor-not-allowed ${FOCUS_RING}`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {chapter.label}
                    </h2>
                    <p className="text-slate-500 mt-1">
                      {isEmpty
                        ? "No questions available yet"
                        : chapter.description}
                    </p>
                  </div>
                  {!isEmpty && (
                    <ChevronRight className="w-6 h-6 text-slate-500 group-hover:text-blue-500 transition-colors flex-shrink-0" />
                  )}
                </div>
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* All Chapters option */}
          <button
            onClick={() => onSelectChapter(null)}
            className={`w-full p-6 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02] text-left group ${FOCUS_RING}`}
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-white">
                  All Chapters
                </h2>
                <p className="text-blue-100 mt-1">
                  All questions from every chapter
                </p>
              </div>
              <ChevronRight className="w-6 h-6 text-blue-200 group-hover:text-white transition-colors flex-shrink-0" />
            </div>
          </button>

          {/* Custom Quiz option */}
          <button
            onClick={toggleCustomMode}
            className={`w-full p-6 bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02] text-left group ${FOCUS_RING}`}
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-white">
                  Custom Quiz
                </h2>
                <p className="text-purple-100 mt-1">
                  Pick specific chapters to combine
                </p>
              </div>
              {isCustomMode ? (
                <ChevronUp className="w-6 h-6 text-purple-200 group-hover:text-white transition-colors flex-shrink-0" />
              ) : (
                <ChevronDown className="w-6 h-6 text-purple-200 group-hover:text-white transition-colors flex-shrink-0" />
              )}
            </div>
          </button>

          {/* Custom selection panel */}
          {isCustomMode && (
            <div className="sm:col-span-2 bg-slate-800/50 rounded-2xl border border-slate-700 p-6 space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-sm text-slate-400">
                  {selectedChapters.length} of {allChapterIds.length} chapters
                  selected
                </p>
                <button
                  onClick={toggleAll}
                  className={`text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors rounded ${FOCUS_RING}`}
                >
                  {allSelected ? "Deselect All" : "Select All"}
                </button>
              </div>

              <div className="space-y-2">
                {course.chapters.map((chapter) => {
                  const isChecked = selectedChapters.includes(chapter.id);
                  return (
                    <label
                      key={chapter.id}
                      className={`flex items-center gap-3 p-4 rounded-xl cursor-pointer transition-all duration-200 ${
                        isChecked
                          ? "bg-purple-900/30 border border-purple-700"
                          : "bg-slate-800 border border-slate-700 hover:border-slate-600"
                      }`}
                    >
                      <Checkbox
                        checked={isChecked}
                        onCheckedChange={() => toggleChapter(chapter.id)}
                        className="data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600"
                      />
                      <div>
                        <p className="text-white font-medium">
                          {chapter.label}
                        </p>
                        <p className="text-slate-400 text-sm">
                          {chapter.description}
                        </p>
                      </div>
                    </label>
                  );
                })}
              </div>

              <Button
                onClick={handleStartCustomQuiz}
                disabled={selectedChapters.length === 0}
                className="w-full h-auto p-4 bg-purple-600 hover:bg-purple-500 disabled:bg-slate-700 disabled:text-slate-500 disabled:opacity-100 text-white text-base font-semibold rounded-xl transition-colors duration-200"
              >
                {selectedChapters.length === 0
                  ? "Select at least one chapter"
                  : `Start Quiz (${selectedChapters.length} ${selectedChapters.length === 1 ? "chapter" : "chapters"})`}
              </Button>
            </div>
          )}
        </div>

        {/* Practice Exam Mode button — full width below the grid */}
        <button
          onClick={() => setIsExamModalOpen(true)}
          className={`w-full p-6 bg-gradient-to-r from-amber-600 to-amber-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02] text-left group mt-4 ${FOCUS_RING}`}
        >
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-white">
                Practice Exam Mode
              </h2>
              <p className="text-amber-100 mt-1">
                Timed exam pick chapters, question count & duration
              </p>
            </div>
            <Clock className="w-6 h-6 text-amber-200 group-hover:text-white transition-colors flex-shrink-0" />
          </div>
        </button>

        <p className="text-center mt-auto pt-8 text-slate-400 ">
          Crafted by Cipher 💻 ❤️
        </p>
      </div>

      <PracticeExamModal
        open={isExamModalOpen}
        onOpenChange={setIsExamModalOpen}
        course={course}
        onStartExam={onStartExam}
      />
    </div>
  );
}
