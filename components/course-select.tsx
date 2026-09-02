"use client";

import { Course } from "@/lib/courses";
import { ChevronRight } from "lucide-react";
import ThemeToggle from "./theme-toggle";

const FOCUS_RING =
  "outline-none focus-visible:ring-[3px] focus-visible:ring-chalk-yellow/70 focus-visible:ring-offset-2 focus-visible:ring-offset-board";

interface CourseSelectProps {
  courses: Course[];
  onSelectCourse: (courseId: string) => void;
}

export default function CourseSelect({
  courses,
  onSelectCourse,
}: CourseSelectProps) {
  return (
    <div className="min-h-screen board-surface px-3 py-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto flex flex-col min-h-[calc(100vh-2rem)] sm:min-h-[calc(100vh-3rem)] lg:min-h-[calc(100vh-4rem)]">
        <div className="flex items-center gap-2 mb-8 sm:mb-10">
          <span className="font-display text-xl text-chalk-yellow -rotate-2 inline-block">
            QuizSpark
          </span>
          <span className="text-board-ink-muted text-sm">
            &mdash; practice, together
          </span>
          <div className="ml-auto">
            <ThemeToggle />
          </div>
        </div>

        <div className="text-center mb-10 sm:mb-12">
          <h1 className="font-display text-4xl sm:text-5xl text-board-ink chalk-underline mb-4">
            Select Your Course
          </h1>
          <p className="text-board-ink-muted max-w-md mx-auto">
            Pick a course and start practicing with real questions from your own
            lecture material.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, i) => (
            <button
              key={course.id}
              onClick={() => onSelectCourse(course.id)}
              className={`paper-surface rounded-md shadow-[0_10px_24px_-10px_rgba(15,20,17,0.55)] hover:shadow-[0_16px_32px_-10px_rgba(15,20,17,0.6)] hover:-translate-y-0.5 transition-all duration-200 text-left group pl-9 pr-4 py-4 sm:pl-16 sm:pr-6 sm:py-6 ${FOCUS_RING}`}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-start justify-between mb-3">
                  <span
                    className={`inline-flex items-center px-2.5 py-1 text-[11px] font-bold tracking-wide bg-chalk-yellow text-chalk-yellow-ink rounded-sm ${
                      i % 2 === 0 ? "-rotate-1" : "rotate-1"
                    }`}
                  >
                    {course.code}
                  </span>
                  <ChevronRight className="w-5 h-5 text-paper-ink-muted group-hover:text-rule-red group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                </div>
                <h2 className="text-lg font-bold text-paper-ink mb-2 leading-snug">
                  {course.name}
                </h2>
                <p className="text-paper-ink-muted text-sm flex-grow line-clamp-3">
                  {course.description}
                </p>
                <div className="mt-4 pt-3 border-t border-paper-line">
                  <span className="text-xs text-paper-ink-muted font-medium">
                    {course.chapters.length}{" "}
                    {course.chapters.length === 1 ? "chapter" : "chapters"}{" "}
                    available
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
