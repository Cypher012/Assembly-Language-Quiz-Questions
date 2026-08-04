import { QuestionV2 } from "@/lib/quiz-types";

const csc304Chapter1Questions: QuestionV2[] = [
  {
    id: "csc304_ch1_001",
    course: "CSC 304",
    chapter: "Chapter 1",
    text: "Which of the following best defines data?",
    options: [
      "Basic facts about business activities that have not been processed",
      "A report prepared specifically for top management",
      "The final invoice sent to a customer after a sale",
      "A summary of business performance over a full year"
    ],
    correctAnswer: 0,
    explanation: "Data is defined as basic facts about the activities of a business that have not been processed, such as the number of hours worked by an employee or the amount of material in a process.\n\nA report prepared for top management is instead an example of information, since it has already been processed into a meaningful form.\n\nAn invoice is also given as an example of information, not raw data, since it assembles facts into a useful document.\n\nA year-end performance summary is also processed information, not unprocessed raw data."
  },
  {
    id: "csc304_ch1_002",
    course: "CSC 304",
    chapter: "Chapter 1",
    text: "Which of the following is given as an example of data, rather than information?",
    options: [
      "An employee's hours worked",
      "A completed payroll",
      "A financial statement",
      "An efficiency report"
    ],
    correctAnswer: 0,
    explanation: "The number of hours worked by an employee is given directly as an example of data, an unprocessed basic fact about a business activity.\n\nA completed payroll is instead given as an example of information, since it results from processing raw facts like hours worked and pay rates.\n\nA financial statement is also given as an example of information, assembled from underlying data.\n\nAn efficiency report is also given as an example of information, produced by processing raw data."
  },
  {
    id: "csc304_ch1_003",
    course: "CSC 304",
    chapter: "Chapter 1",
    text: "Which of the following best defines information?",
    options: [
      "Data assembled into a useful form that is meaningful to the person who receives it",
      "Any number or fact recorded before it has been checked",
      "The raw hours worked by an employee before payroll is run",
      "The tons of unprocessed material sitting in a warehouse"
    ],
    correctAnswer: 0,
    explanation: "Information is defined as data assembled into a useful form, meaning data that has been processed so it is meaningful and useful to the person receiving it.\n\nAn unchecked recorded number describes raw data, not information, since it has not yet been processed into a useful form.\n\nRaw hours worked before payroll is run is an example of data, not information, since no processing has occurred yet.\n\nUnprocessed material sitting in a warehouse is also an example of raw data, not information."
  },
  {
    id: "csc304_ch1_004",
    course: "CSC 304",
    chapter: "Chapter 1",
    text: "Which of the following is given as an example of information, rather than data?",
    options: [
      "An invoice",
      "The rate of pay for one employee",
      "The number of tons of a finished product",
      "The type of material used in a process"
    ],
    correctAnswer: 0,
    explanation: "An invoice is given directly as an example of information, since it is assembled from underlying facts into a meaningful, useful document.\n\nThe rate of pay for one employee is instead given as an example of raw data, a basic fact not yet processed.\n\nThe number of tons of a finished product is also given as an example of raw data.\n\nThe type of material used in a process is also given as an example of raw data."
  },
  {
    id: "csc304_ch1_005",
    course: "CSC 304",
    chapter: "Chapter 1",
    text: "Which of the following best defines data processing?",
    options: [
      "The collection and manipulation of items of data to produce meaningful information",
      "The storage of finished reports in a filing cabinet",
      "The act of printing a document once it has already been completed",
      "The deletion of outdated records from a business archive"
    ],
    correctAnswer: 0,
    explanation: "Data processing is defined as the collection and manipulation of items of data to produce meaningful information, synonymous with data manipulation.\n\nStoring finished reports in a filing cabinet is a records-keeping activity, not the manipulation of data into information.\n\nPrinting an already-completed document does not involve manipulating data to extract new information.\n\nDeleting outdated records is a maintenance activity, not the manipulation of data to produce information."
  },
  {
    id: "csc304_ch1_006",
    course: "CSC 304",
    chapter: "Chapter 1",
    text: "Which of the following operations is listed as part of data processing?",
    options: [
      "Sorting",
      "Advertising",
      "Recruitment",
      "Budgeting"
    ],
    correctAnswer: 0,
    explanation: "Sorting is listed as one of the operations involved in data processing, alongside classification, calculations, and summarization.\n\nAdvertising is a marketing activity, not one of the listed data processing operations.\n\nRecruitment is a human resources activity, not one of the listed data processing operations.\n\nBudgeting is a planning activity, not one of the listed data processing operations."
  },
  {
    id: "csc304_ch1_007",
    course: "CSC 304",
    chapter: "Chapter 1",
    text: "Information can range from a simple report about routine operations up to a report supporting top management strategy decisions.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "This statement is true. Information is described as ranging from a simple report about routine operations up to a report by top management used to support strategy decisions."
  },
  {
    id: "csc304_ch1_008",
    course: "CSC 304",
    chapter: "Chapter 1",
    text: "In terms of form, how are data and information respectively described?",
    options: [
      "Data is unorganized, while information is organized",
      "Data is organized, while information is unorganized",
      "Both data and information are always unorganized",
      "Both data and information are always organized"
    ],
    correctAnswer: 0,
    explanation: "In terms of form, data is described as unorganized, while information is described as organized, since information results from refining and structuring data.\n\nReversing the pairing, calling data organized and information unorganized, contradicts the stated comparison directly.\n\nDescribing both as always unorganized ignores that information is specifically described as organized.\n\nDescribing both as always organized ignores that data is specifically described as unorganized."
  },
  {
    id: "csc304_ch1_009",
    course: "CSC 304",
    chapter: "Chapter 1",
    text: "In terms of dependency, which of the following accurately describes the relationship between data and information?",
    options: [
      "Data does not depend on information, but information cannot be processed without data",
      "Information does not depend on data, but data cannot exist without information",
      "Data and information are entirely independent of one another",
      "Data and information depend equally on each other in every case"
    ],
    correctAnswer: 0,
    explanation: "Data does not depend on information, but without data, information cannot be processed, reflecting data's role as the raw material information is built from.\n\nReversing the dependency, claiming information does not depend on data, contradicts the stated relationship directly.\n\nDescribing them as entirely independent contradicts the stated dependency of information on data.\n\nDescribing the dependency as mutual and equal contradicts the one-directional relationship stated, where only information depends on data."
  },
  {
    id: "csc304_ch1_010",
    course: "CSC 304",
    chapter: "Chapter 1",
    text: "In terms of being active or inactive, how are data and information respectively described?",
    options: [
      "Data is inactive, while information is active",
      "Data is active, while information is inactive",
      "Both data and information are described as active",
      "Both data and information are described as inactive"
    ],
    correctAnswer: 0,
    explanation: "Data is described as inactive, while information is described as active, reflecting how information is put to use once data has been processed.\n\nReversing the pairing, calling data active and information inactive, contradicts the stated comparison directly.\n\nDescribing both as active ignores that data is specifically described as inactive.\n\nDescribing both as inactive ignores that information is specifically described as active."
  },
  {
    id: "csc304_ch1_011",
    course: "CSC 304",
    chapter: "Chapter 1",
    text: "In terms of decision making, which of the following accurately distinguishes data from information?",
    options: [
      "Data cannot be used for decision making, while information can be used for decision making",
      "Data can be used for decision making, while information cannot be used for decision making",
      "Neither data nor information can ever be used for decision making",
      "Both data and information are equally usable for decision making"
    ],
    correctAnswer: 0,
    explanation: "Data cannot be used for decision making, while information can be used for decision making, since information has been refined into a meaningful, usable form.\n\nReversing the pairing, claiming data can be used for decisions while information cannot, contradicts the stated comparison directly.\n\nClaiming neither can be used for decisions contradicts the stated usefulness of information for decision making.\n\nClaiming both are equally usable ignores the explicit distinction drawn between the two on this basis."
  },
  {
    id: "csc304_ch1_012",
    course: "CSC 304",
    chapter: "Chapter 1",
    text: "In terms of nature, how are data and information respectively described?",
    options: [
      "Data is technology based, while information is business based",
      "Data is business based, while information is technology based",
      "Both data and information are described as technology based",
      "Both data and information are described as business based"
    ],
    correctAnswer: 0,
    explanation: "Data is described as technology based, while information is described as business based, reflecting where each is generated and how each is used.\n\nReversing the pairing, calling data business based and information technology based, contradicts the stated comparison directly.\n\nDescribing both as technology based ignores that information is specifically described as business based.\n\nDescribing both as business based ignores that data is specifically described as technology based."
  },
  {
    id: "csc304_ch1_013",
    course: "CSC 304",
    chapter: "Chapter 1",
    text: "Which of the following accurately describes a difference between data and information?",
    options: [
      "Data may or may not be useful, while information is always useful",
      "Data is always gotten from information, never the other way around",
      "All of these",
      "None of these"
    ],
    correctAnswer: 0,
    explanation: "Data may or may not be useful, while information is always useful, reflecting the usefulness comparison drawn between the two. Information is instead described as gotten from data, the reverse of claiming data is always gotten from information, which is not supported anywhere. Since only the usefulness statement is accurate, that is the correct answer."
  },
  {
    id: "csc304_ch1_014",
    course: "CSC 304",
    chapter: "Chapter 1",
    text: "In terms of specification, how are data and information respectively described?",
    options: [
      "Data is not specific, while information is specific",
      "Data is specific, while information is not specific",
      "Both data and information are described as specific",
      "Both data and information are described as not specific"
    ],
    correctAnswer: 0,
    explanation: "Data is described as not specific, while information is described as specific, reflecting how raw facts are refined into a targeted, meaningful form.\n\nReversing the pairing, calling data specific and information not specific, contradicts the stated comparison directly.\n\nDescribing both as specific ignores that data is specifically described as not specific.\n\nDescribing both as not specific ignores that information is specifically described as specific."
  },
  {
    id: "csc304_ch1_015",
    course: "CSC 304",
    chapter: "Chapter 1",
    text: "In terms of source, where is information described as being obtained from?",
    options: [
      "Data",
      "Various unrelated business departments only",
      "Only from top management decisions",
      "Only from printed textbooks"
    ],
    correctAnswer: 0,
    explanation: "Information is described as being gotten from data, while data itself is described as gotten from various sources such as records and observations.\n\nRestricting the source to unrelated business departments only misrepresents the stated source, which is data itself.\n\nRestricting the source to top management decisions only misrepresents the stated source, which is data itself.\n\nRestricting the source to printed textbooks only misrepresents the stated source, which is data itself."
  },
  {
    id: "csc304_ch1_016",
    course: "CSC 304",
    chapter: "Chapter 1",
    text: "Good information is described as needing to be complete. What happens if it is not complete?",
    options: [
      "It becomes a falsehood, or a half-truth",
      "It automatically becomes more cost effective",
      "It becomes easier for a computer to store",
      "It becomes more timely than before"
    ],
    correctAnswer: 0,
    explanation: "Incomplete information is described as becoming a falsehood, or a half-truth, since leaving out relevant facts distorts the overall picture.\n\nCost effectiveness is a separate characteristic of good information, not a consequence of incompleteness.\n\nStorage ease is not discussed as a consequence of incomplete information in this material.\n\nTimeliness is a separate characteristic of good information, not a consequence of incompleteness."
  },
  {
    id: "csc304_ch1_017",
    course: "CSC 304",
    chapter: "Chapter 1",
    text: "Which of the following is listed as a characteristic of good information?",
    options: [
      "It must be cost effective",
      "It must be handwritten",
      "It must be translated into every language",
      "It must be at least ten pages long"
    ],
    correctAnswer: 0,
    explanation: "Being cost effective is listed as one of the characteristics of good information, alongside relevance, completeness, accuracy, and timeliness.\n\nBeing handwritten is not listed as a characteristic of good information anywhere in this material.\n\nBeing translated into every language is not listed as a characteristic of good information.\n\nHaving a minimum length of ten pages is not listed as a characteristic of good information."
  },
  {
    id: "csc304_ch1_018",
    course: "CSC 304",
    chapter: "Chapter 1",
    text: "Which of the following is listed as a characteristic of good information, concerning how quickly it is delivered?",
    options: [
      "Timeliness",
      "Comprehensiveness",
      "Clarity",
      "Reliability"
    ],
    correctAnswer: 0,
    explanation: "Timeliness is the characteristic of good information concerning how quickly it is delivered, ensuring information arrives while it is still useful.\n\nComprehensiveness instead concerns how broadly the information covers a subject, not the speed of delivery.\n\nClarity instead concerns how easily the information can be understood, not the speed of delivery.\n\nReliability instead concerns how dependable the information is, not the speed of delivery."
  },
  {
    id: "csc304_ch1_019",
    course: "CSC 304",
    chapter: "Chapter 1",
    text: "Which of the following is listed as a characteristic of good information?",
    options: [
      "Comprehensiveness",
      "Reliability",
      "All of these",
      "None of these"
    ],
    correctAnswer: 2,
    explanation: "Both are accurate. Comprehensiveness is listed directly as a characteristic of good information, alongside clarity and accuracy. Reliability, also written as liability in the list, is separately listed as a characteristic of good information. Since both are correct, the answer is that both apply."
  },
  {
    id: "csc304_ch1_020",
    course: "CSC 304",
    chapter: "Chapter 1",
    text: "Good information must be relevant. What does this specific characteristic mean?",
    options: [
      "It must be relevant or enough for its purpose",
      "It must be relevant only to the person who typed it",
      "It must be relevant to every business in every industry",
      "It must be relevant for exactly one calendar year only"
    ],
    correctAnswer: 0,
    explanation: "Good information must be relevant or enough for its purpose, meaning it should suit the specific need it is meant to serve.\n\nRestricting relevance to only the person who typed the information is not what this characteristic describes.\n\nRequiring relevance to every business in every industry overstates the characteristic, which concerns fitness for a specific purpose, not universal applicability.\n\nRestricting relevance to exactly one calendar year is not part of this characteristic, which is not tied to a fixed time limit."
  },
  {
    id: "csc304_ch1_021",
    course: "CSC 304",
    chapter: "Chapter 1",
    text: "Information can be classified using three set criteria. Which of the following is one of them?",
    options: [
      "Time of occurrence",
      "Color of the document",
      "Number of authors involved",
      "Country of publication"
    ],
    correctAnswer: 0,
    explanation: "Time of occurrence is one of the three set criteria for classifying information, alongside the form in which it exists and its frequency of occurrence.\n\nDocument color is not one of the three classification criteria listed in this material.\n\nNumber of authors is not one of the three classification criteria listed in this material.\n\nCountry of publication is not one of the three classification criteria listed in this material."
  },
  {
    id: "csc304_ch1_022",
    course: "CSC 304",
    chapter: "Chapter 1",
    text: "Which kind of information, based on form, is documented and made up of numbers and words, usually gotten from textbooks and printed materials?",
    options: [
      "Written information",
      "Oral information",
      "Visual information",
      "Sensory information"
    ],
    correctAnswer: 0,
    explanation: "Written information is documented and made up of numbers and words, usually gotten from documents and printed materials such as textbooks and encyclopedias.\n\nOral information is instead verbal communication between people, not documented text.\n\nVisual information is instead communicated graphically or pictorially, not through documented text.\n\nSensory information is instead perceived through the five senses, not through documented text."
  },
  {
    id: "csc304_ch1_023",
    course: "CSC 304",
    chapter: "Chapter 1",
    text: "Which kind of information, based on form, is verbal communication between two or more people, gotten from discussions, seminars, and interviews?",
    options: [
      "Oral information",
      "Written information",
      "Visual information",
      "Sensory information"
    ],
    correctAnswer: 0,
    explanation: "Oral information is verbal communication between two or more people, gotten from discussions, seminars, meetings, and interviews.\n\nWritten information is instead documented, made up of numbers and words, not spoken communication.\n\nVisual information is instead communicated graphically or pictorially, not through spoken words.\n\nSensory information is instead perceived through the five senses generally, not specifically through spoken conversation."
  },
  {
    id: "csc304_ch1_024",
    course: "CSC 304",
    chapter: "Chapter 1",
    text: "Which kind of information, based on form, is communicated graphically, pictorially, or by means of some representation, gotten from images?",
    options: [
      "Visual information",
      "Written information",
      "Oral information",
      "Sensory information"
    ],
    correctAnswer: 0,
    explanation: "Visual information is communicated graphically, pictorially, or by means of some representation, gotten from images that can be seen.\n\nWritten information is instead documented text made of numbers and words, not pictorial representation.\n\nOral information is instead spoken communication between people, not pictorial representation.\n\nSensory information is instead perceived through all five senses generally, not specifically through sight-based imagery."
  },
  {
    id: "csc304_ch1_025",
    course: "CSC 304",
    chapter: "Chapter 1",
    text: "Which kind of information, based on form, is perceived by the five sensory organs, including hearing, touch, and smell?",
    options: [
      "Sensory information",
      "Written information",
      "Oral information",
      "Visual information"
    ],
    correctAnswer: 0,
    explanation: "Sensory information is communicated and perceived by the five sensory organs, hearing, sight, touch, smell, and feelings.\n\nWritten information is instead documented text, a narrower channel than all five senses combined.\n\nOral information is instead specifically spoken communication, a narrower channel than all five senses combined.\n\nVisual information is instead specifically pictorial or graphical, a narrower channel than all five senses combined."
  },
  {
    id: "csc304_ch1_026",
    course: "CSC 304",
    chapter: "Chapter 1",
    text: "Which of the following accurately describes a kind of information based on its form?",
    options: [
      "Oral information is documented and made up entirely of numbers and words",
      "Sensory information is gotten only from printed textbooks and encyclopedias",
      "All of these",
      "None of these"
    ],
    correctAnswer: 3,
    explanation: "Neither statement is accurate. Oral information is instead verbal communication gotten from discussions, seminars, and interviews, not documented numbers and words, which describes written information. Sensory information is instead perceived through the five sensory organs such as hearing, touch, and smell, not gotten only from printed textbooks. Since both statements are inaccurate, none of these applies."
  },
  {
    id: "csc304_ch1_027",
    course: "CSC 304",
    chapter: "Chapter 1",
    text: "A manager attends a meeting and receives verbal feedback directly from a colleague. Which kind of information, based on form, has the manager received?",
    options: [
      "Oral information",
      "Written information",
      "Visual information",
      "Sensory information generally"
    ],
    correctAnswer: 0,
    explanation: "Verbal feedback received directly in a meeting is oral information, since it is verbal communication between people gotten from a meeting.\n\nWritten information would instead require the feedback to be documented in numbers and words, not spoken.\n\nVisual information would instead require the feedback to be communicated graphically or pictorially, not spoken.\n\nDescribing it broadly as sensory information overlooks the more specific, correct classification of spoken communication as oral information."
  },
  {
    id: "csc304_ch1_028",
    course: "CSC 304",
    chapter: "Chapter 1",
    text: "Which kind of information, based on time of occurrence, refers to events, activities, and transactions that happened in the past, such as a date of birth?",
    options: [
      "Historical information",
      "Present information",
      "Future information",
      "Continuous information"
    ],
    correctAnswer: 0,
    explanation: "Historical information refers to events, activities, and transactions that happened in the past, such as a date of birth or place of birth.\n\nPresent information instead refers to current issues and day-to-day activities, not past events.\n\nFuture information instead refers to predictions about events likely to happen, not past events.\n\nContinuous information instead refers to information communicated without interruption, such as on radio or TV, not the timing of an event."
  },
  {
    id: "csc304_ch1_029",
    course: "CSC 304",
    chapter: "Chapter 1",
    text: "Which kind of information, based on time of occurrence, refers to current issues and day-to-day activities and transactions?",
    options: [
      "Present information",
      "Historical information",
      "Future information",
      "Annual information"
    ],
    correctAnswer: 0,
    explanation: "Present information refers to current issues and day-to-day activities and transactions happening now.\n\nHistorical information instead refers to events that happened in the past, not current activities.\n\nFuture information instead refers to predictions about events likely to happen, not current activities.\n\nAnnual information instead refers to information received once per year, a frequency category, not a description of current activity."
  },
  {
    id: "csc304_ch1_030",
    course: "CSC 304",
    chapter: "Chapter 1",
    text: "Which kind of information, based on time of occurrence, refers to predictions and projections about events likely to take place, such as weather forecasting?",
    options: [
      "Future information",
      "Historical information",
      "Present information",
      "Hourly information"
    ],
    correctAnswer: 0,
    explanation: "Future information refers to predictions and projections about activities and events likely to take place, such as weather forecasting, usually deduced from current and historical information.\n\nHistorical information instead refers to events that already happened in the past, not predictions.\n\nPresent information instead refers to current, day-to-day activities, not predictions about the future.\n\nHourly information instead refers to information received once per hour, a frequency category, not a prediction about future events."
  },
  {
    id: "csc304_ch1_031",
    course: "CSC 304",
    chapter: "Chapter 1",
    text: "Predictions and projections about the future are described as being deduced entirely at random, with no reliance on current or historical information at all.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "This statement is false. Information about the future is usually obtained or deduced from current and historical information, such as how weather forecasting relies on existing data, not random guessing."
  },
  {
    id: "csc304_ch1_032",
    course: "CSC 304",
    chapter: "Chapter 1",
    text: "Which kind of information, based on frequency of occurrence, is illustrated by what is broadcast on radio and TV?",
    options: [
      "Continuous information",
      "Hourly information",
      "Daily information",
      "Monthly information"
    ],
    correctAnswer: 0,
    explanation: "Continuous information is illustrated by radio and TV, which communicate information without interruption.\n\nHourly information instead refers to information received once per hour, a fixed interval rather than continuous broadcast.\n\nDaily information instead refers to information received once per day, a fixed interval rather than continuous broadcast.\n\nMonthly information instead refers to information received once per month, a fixed interval rather than continuous broadcast."
  },
  {
    id: "csc304_ch1_033",
    course: "CSC 304",
    chapter: "Chapter 1",
    text: "Based on frequency of occurrence, which of the following describes information received once per year?",
    options: [
      "Annually information",
      "Continuous information",
      "Hourly information",
      "Daily information"
    ],
    correctAnswer: 0,
    explanation: "Annually information is received once per year, one of the frequency-based categories listed alongside hourly, daily, and monthly information.\n\nContinuous information instead refers to uninterrupted communication such as radio and TV, not a once-a-year interval.\n\nHourly information instead refers to information received once per hour, a much shorter interval than annual.\n\nDaily information instead refers to information received once per day, a much shorter interval than annual."
  },
  {
    id: "csc304_ch1_034",
    course: "CSC 304",
    chapter: "Chapter 1",
    text: "Hourly, daily, monthly, and annually information are all classified based on their form, rather than their frequency of occurrence.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "This statement is false. Hourly, daily, monthly, and annually information are classified based on frequency of occurrence, alongside continuous information, not based on form, which instead covers written, oral, visual, and sensory information."
  },
  {
    id: "csc304_ch1_035",
    course: "CSC 304",
    chapter: "Chapter 1",
    text: "A company issues its staff payroll report only once every calendar month. Based on frequency of occurrence, what kind of information is this?",
    options: [
      "Monthly information",
      "Continuous information",
      "Hourly information",
      "Historical information"
    ],
    correctAnswer: 0,
    explanation: "A payroll report issued once every calendar month is monthly information, received at that specific frequency interval.\n\nContinuous information instead refers to uninterrupted communication such as radio and TV, not a once-a-month report.\n\nHourly information instead refers to information received once per hour, a much shorter interval than once a month.\n\nHistorical information instead refers to events that happened in the past, a time-of-occurrence category, not a frequency category."
  },
  {
    id: "csc304_ch1_036",
    course: "CSC 304",
    chapter: "Chapter 1",
    text: "Which method of data processing is described as entailing manual effort?",
    options: [
      "Manual data processing",
      "Mechanical data processing",
      "Electronic data processing",
      "Electromechanical data processing"
    ],
    correctAnswer: 0,
    explanation: "Manual data processing entails manual effort, processing data by hand without the use of machines.\n\nMechanical data processing instead makes use of machines, not purely manual effort.\n\nElectronic data processing instead is done electronically, not purely manual effort.\n\nElectromechanical data processing instead combines mechanical and electronic elements, not purely manual effort."
  },
  {
    id: "csc304_ch1_037",
    course: "CSC 304",
    chapter: "Chapter 1",
    text: "Which method of data processing is described as making use of machines?",
    options: [
      "Mechanical data processing",
      "Manual data processing",
      "Electronic data processing",
      "Electromechanical data processing"
    ],
    correctAnswer: 0,
    explanation: "Mechanical data processing is the type of process that makes use of machines to handle data.\n\nManual data processing instead entails manual effort, not the use of machines.\n\nElectronic data processing instead is done electronically, a different category from general mechanical machines.\n\nElectromechanical data processing instead combines mechanical and electronic elements together, not mechanical machines alone."
  },
  {
    id: "csc304_ch1_038",
    course: "CSC 304",
    chapter: "Chapter 1",
    text: "Which method of data processing is described as being done electronically?",
    options: [
      "Electronic data processing",
      "Manual data processing",
      "Mechanical data processing",
      "Electromechanical data processing"
    ],
    correctAnswer: 0,
    explanation: "Electronic data processing is the method where the processing is done electronically.\n\nManual data processing instead entails manual effort, not electronic processing.\n\nMechanical data processing instead makes use of machines generally, not specifically electronic processing.\n\nElectromechanical data processing instead combines mechanical and electronic elements together, not purely electronic processing."
  },
  {
    id: "csc304_ch1_039",
    course: "CSC 304",
    chapter: "Chapter 1",
    text: "Which method of data processing combines the elements of mechanical and electronic processing with some machines?",
    options: [
      "Electromechanical data processing",
      "Manual data processing",
      "Mechanical data processing",
      "Electronic data processing"
    ],
    correctAnswer: 0,
    explanation: "Electromechanical data processing combines the elements of mechanical and electronic processing with some machines.\n\nManual data processing instead entails only manual effort, not a combination of mechanical and electronic elements.\n\nMechanical data processing instead makes use of machines alone, not a combination with electronic elements.\n\nElectronic data processing instead is done electronically alone, not a combination with mechanical elements."
  },
  {
    id: "csc304_ch1_040",
    course: "CSC 304",
    chapter: "Chapter 1",
    text: "Which factor determining the method of data processing explains why a truly small company might need only one person, while a larger company may require computers?",
    options: [
      "Size and type of business",
      "Timing aspect",
      "Link between applications",
      "Frequency of occurrence"
    ],
    correctAnswer: 0,
    explanation: "Size and type of business explains why a small company can rely on one person, while as the company grows, calculators and computers may be required to handle larger volumes of data.\n\nTiming aspect instead concerns how time critical the information requirement is, not company size.\n\nLink between applications instead concerns whether data is needed for more than one requirement, not company size.\n\nFrequency of occurrence is a classification of information, not a factor determining the data processing method."
  },
  {
    id: "csc304_ch1_041",
    course: "CSC 304",
    chapter: "Chapter 1",
    text: "Which factor determining the method of data processing concerns how time critical an information requirement is?",
    options: [
      "Timing aspect",
      "Size and type of business",
      "Link between applications",
      "Nature of the information"
    ],
    correctAnswer: 0,
    explanation: "Timing aspect concerns how time critical an information requirement is, which has a considerable bearing on the methods and equipment needed to provide it.\n\nSize and type of business instead concerns how large the company is, not the time criticality of a specific requirement.\n\nLink between applications instead concerns whether data serves more than one requirement, not time criticality.\n\nNature of the information is not one of the three named factors determining the data processing method in this material."
  },
  {
    id: "csc304_ch1_042",
    course: "CSC 304",
    chapter: "Chapter 1",
    text: "Which factor determining the method of data processing applies when data is needed for more than one information requirement?",
    options: [
      "Link between applications",
      "Timing aspect",
      "Size and type of business",
      "Characteristics of good information"
    ],
    correctAnswer: 0,
    explanation: "Link between applications applies when data is needed for more than one information requirement, which may suggest a different processing method.\n\nTiming aspect instead concerns how time critical a single requirement is, not whether data serves multiple requirements.\n\nSize and type of business instead concerns company scale, not whether data serves multiple requirements.\n\nCharacteristics of good information is a separate topic entirely, not one of the three named factors determining the processing method."
  },
  {
    id: "csc304_ch1_043",
    course: "CSC 304",
    chapter: "Chapter 1",
    text: "Which stage of data processing is also known as data collection, where data are obtained and gathered from various resources?",
    options: [
      "Origination of data",
      "Preparation of data for input",
      "Input",
      "Output of information"
    ],
    correctAnswer: 0,
    explanation: "Origination of data is also known as data collection, the stage where data are obtained and gathered from various resources.\n\nPreparation of data for input instead makes already-gathered data ready for further use, a later stage than initial collection.\n\nInput instead passes data to the department or system responsible for processing, a stage after collection and preparation.\n\nOutput of information instead gives out the results of processing, the final stage, not the initial gathering of data."
  },
  {
    id: "csc304_ch1_044",
    course: "CSC 304",
    chapter: "Chapter 1",
    text: "Which stage of data processing involves classifying, folding, and rearranging data to make it ready for further use?",
    options: [
      "Preparation of data for input",
      "Origination of data",
      "Input",
      "Output of information"
    ],
    correctAnswer: 0,
    explanation: "Preparation of data for input involves classifying, folding, and rearranging data, making it ready for further use.\n\nOrigination of data instead is the initial gathering stage, before preparation begins.\n\nInput instead passes the already-prepared data to the department or system responsible for processing, a step after preparation.\n\nOutput of information instead gives out the final results of processing, a much later stage than preparation."
  },
  {
    id: "csc304_ch1_045",
    course: "CSC 304",
    chapter: "Chapter 1",
    text: "Data is transmitted from one stage of data processing to another, and storage and controls are used where necessary throughout these stages.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "This statement is true. As data moves through the stages of data processing, storage is used at the various stages, and controls are established where necessary."
  }
];

export default csc304Chapter1Questions;
