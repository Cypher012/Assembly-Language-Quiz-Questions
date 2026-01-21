"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import {
  allCourses,
  getEnabledCourseIds,
  saveEnabledCourseIds,
} from "@/lib/courses";

interface CourseSettingsProps {
  onSettingsChange: () => void;
}

export default function CourseSettings({ onSettingsChange }: CourseSettingsProps) {
  const [open, setOpen] = useState(false);
  const [enabledCourses, setEnabledCourses] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setEnabledCourses(getEnabledCourseIds());
  }, []);

  const handleToggle = (courseId: string, enabled: boolean) => {
    const newSettings = { ...enabledCourses, [courseId]: enabled };
    setEnabledCourses(newSettings);
    saveEnabledCourseIds(newSettings);
    onSettingsChange();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          className="p-2 rounded-lg bg-slate-700/50 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          aria-label="Course settings"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </button>
      </DialogTrigger>
      <DialogContent className="bg-slate-800 border-slate-700 text-white">
        <DialogHeader>
          <DialogTitle>Course Visibility</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 mt-4">
          <p className="text-sm text-slate-400">
            Toggle courses on or off to show or hide them from the course selection.
          </p>
          <div className="space-y-3">
            {allCourses.map((course) => (
              <div
                key={course.id}
                className="flex items-center justify-between p-3 rounded-lg bg-slate-700/50"
              >
                <div className="flex-1 mr-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium px-2 py-0.5 bg-blue-900/30 text-blue-300 rounded">
                      {course.code}
                    </span>
                    <span className="font-medium text-white">{course.name}</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-1">
                    {course.description}
                  </p>
                </div>
                <Switch
                  checked={enabledCourses[course.id] !== false}
                  onCheckedChange={(checked) => handleToggle(course.id, checked)}
                />
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
