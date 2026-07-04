import { Course } from "../../courses";
import { QuestionV2 } from "../../quiz-types";
import csc312Lecture12 from "./lecture-1-2";
import csc312Lecture3 from "./lecture-3";
import csc312Lecture4 from "./lecture-4";

export const csc312Course: Course = {
  id: "csc312-system-analysis-and-design-methodologies",
  code: "CSC312",
  name: "System Analysis and Design Methodologies",
  description:
    "A structured approach to developing efficient information systems. Covers requirements engineering, SDLC models, database design, and real-world implementation case studies.",
  chapters: [
    {
      id: "Chapter 1",
      label: "Introduction & Methodologies (Module 1 Lectures 1-2)",
      description:
        "Fundamentals of Systems Analysis and Design, elements and characteristics of systems, roles and skills of a systems analyst, and systems development methodologies including Waterfall, Agile, Spiral, and RAD.",
    },
    {
      id: "Chapter 2",
      label: "System Development Life Cycle (Module 1 Lecture 3)",
      description:
        "The 7 phases of the SDLC, deliverables, key feasibility types, Agile Manifesto values, V-Model validation structures, project team roles, and post-deployment software maintenance costs.",
    },
    {
      id: "Chapter 3",
      label: "Data Capture, Management & Communication (Lecture 4)",
      description:
        "Data quality requirements, manual vs automated input methods (OMR, OCR, MICR, RFID), data validation rules, database models, SQL queries, Big Data, network categories, and security protocols.",
    },
  ],
  getQuestions: (): QuestionV2[] => {
    return [...csc312Lecture12, ...csc312Lecture3, ...csc312Lecture4];
  },
};
