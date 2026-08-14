import { Course } from "../../courses";
import { QuestionV2 } from "../../quiz-types";
import csc312Lecture1And2Questions from "./csc312_lecture1-2_system_analysis_design";
import csc312Lecture3Questions from "./csc312_lecture3_sdlc_methodologies";
import csc312Lecture2DataProcessModelingQuestions from "./csc312_lecture2_data_process_modeling";
import csc312Lecture4Questions from "./csc312_lecture4_data_capture_management_communication";
import csc312Lecture5Questions from "./csc312_lecture5_course_summary";
import csc312Lecture6Questions from "./csc312_lecture6_communications_systems";

export const csc312SystemAnalysisCourse: Course = {
  id: "csc312-system-analysis",
  code: "CSC312",
  name: "System Analysis and Design",
  description:
    "A broad introductory understanding of Systems Analysis and Design methodologies, covering systems concepts, the SDLC, analysis and design activities, the systems analyst role, and major development methodologies.",
  chapters: [
    {
      id: "Chapter 1",
      label: "Lecture 1-2: Introduction to System Analysis and Design",
      description:
        "Who develops information systems, the SDLC, systems concepts and elements, types of systems, how business uses information systems, systems analysis and design activities, the systems analyst role and skills, and the six major development methodologies with their comparison.",
    },
    {
      id: "Chapter 2",
      label: "Lecture 3: System Development Life Cycle",
      description:
        "The organizational systems pyramid (TPS, OAS, KWS, MIS, DSS, ES, ESS, GDSS, CSCWS), the seven-phase SDLC from Planning through Maintenance, preliminary and detailed system study, feasibility analysis, analysis and design deliverables and artifacts, implementation and testing, deployment strategies and changeover, maintenance, and system development methodologies including Waterfall, RAD, Agile, XP, DevOps, and hybrid approaches.",
    },
    {
      id: "Chapter 3",
      label: "Lecture 2: Data and Process Modeling & Data Design",
      description:
        "Logical versus physical models, the four DFD symbols, drawing context diagrams and Diagram 0, leveling and balancing DFDs into primitive processes, Structured English and decision trees, the journey from logical data to a physical database, the three core DBMS components, candidate/primary/foreign keys and referential integrity, entity relationship cardinality (1:1, 1:M, M:N), and data storage, coding, and control.",
    },
    {
      id: "Chapter 4",
      label: "Lecture 4: Data Capture, Management & Communication",
      description:
        "Data capture methods and validation techniques, traditional files versus DBMS, the relational data model and SQL basics, data warehousing and the 3 V's of big data, data governance, networking fundamentals, the internet and wireless technologies, data communication security, and the DP World RFID case study.",
    },
    {
      id: "Chapter 5",
      label: "Lecture 5: Course Summary",
      description:
        "A whole-course recap centered on the five system properties, systems analyst qualities, the seven SDLC phases with deliverables and architectural styles, the Waterfall/RAD/Agile/DevOps methodology comparison and selection guidelines, and the five requirements-determination techniques including the interview steps and JAD roles.",
    },
    {
      id: "Chapter 6",
      label: "Lecture 6: Communications Systems - Maintenance, Support & User Involvement",
      description:
        "Requirements elicitation technique profiles and trade-offs (interviews, JAD, questionnaires, document analysis, observation), requirements analysis strategies (problem, root-cause, duration), Lewin's model of organizational change, the three postimplementation pillars, Level 1/2 support and problem reports, the six-step change-request lifecycle, the five sources of change requests, project assessment, and the Tune Source case study.",
    },
  ],
  getQuestions: (): QuestionV2[] => {
    return [
      ...csc312Lecture1And2Questions,
      ...csc312Lecture3Questions,
      ...csc312Lecture2DataProcessModelingQuestions,
      ...csc312Lecture4Questions,
      ...csc312Lecture5Questions,
      ...csc312Lecture6Questions,
    ];
  },
};
