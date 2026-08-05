import { Course } from "../../courses";
import { QuestionV2 } from "../../quiz-types";
import csc304Chapter1Questions from "./csc304_ch1_data_and_data_processing";
import csc304Chapter2Questions from "./csc304_ch2_file_manipulation_sorting_searching";
import csc304Chapter3Questions from "./csc304_ch3_merging_file_maintenance_data_structures";
import csc304Chapter4Questions from "./csc304_ch4_os_introduction";
import csc304Chapter5Questions from "./csc304_ch5_it_audit_control";
import csc304Chapter6Questions from "./csc304_ch6_disaster_recovery_bcp";

export const csc304BusinessProgrammingCourse: Course = {
  id: "csc304-business-commercial-programming",
  code: "CSC304",
  name: "Business and Commercial Programming",
  description:
    "Data and data processing, file manipulation, and the sorting and searching algorithms used in business and commercial applications.",
  chapters: [
    {
      id: "Chapter 1",
      label: "Data and Data Processing",
      description:
        "Data versus information, characteristics of good information, classification of information, methods and stages of data processing.",
    },
    {
      id: "Chapter 2",
      label: "File Manipulation: Sorting & Searching",
      description:
        "Files and file manipulation techniques, linear and binary search, merging, and the Merge-Sort, Bubble-Sort, Selection-Sort, and Insertion-Sort algorithms.",
    },
    {
      id: "Chapter 3",
      label: "Merging, File Maintenance & Data Structures",
      description:
        "Concatenation and sorted merging, file/record/field fundamentals, file organisation methods, file maintenance and OS-level operations, the File Management System, and core data structures.",
    },
    {
      id: "Chapter 4",
      label: "Introduction to Operating Systems",
      description:
        "The OS's role and functions, the hardware/system/application program layers, CLI vs GUI, the Kernel and Shell, OS goals, common operating systems, and factors for choosing an OS.",
    },
    {
      id: "Chapter 5",
      label: "IT Audit and Control",
      description:
        "IS controls and auditing fundamentals, internal control components, the IS auditor's profile and skills, the six-phase IS audit process, and audit standards and frameworks such as ISACA, COBIT, ISO 27001, IIA, and ITIL.",
    },
    {
      id: "Chapter 6",
      label: "Disaster Recovery and Business Continuity Planning",
      description:
        "Business continuity versus disaster recovery, the continuity planning components and lifecycle, BCP objectives and goals, the eight phases of BCP development, and the distinction between emergency, backup, and recovery plans.",
    },
  ],
  getQuestions: (): QuestionV2[] => {
    return [
      ...csc304Chapter1Questions,
      ...csc304Chapter2Questions,
      ...csc304Chapter3Questions,
      ...csc304Chapter4Questions,
      ...csc304Chapter5Questions,
      ...csc304Chapter6Questions,
    ];
  },
};
