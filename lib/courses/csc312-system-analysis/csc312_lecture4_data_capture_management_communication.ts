import { QuestionV2 } from "@/lib/quiz-types";

const csc312Lecture4Questions: QuestionV2[] = [
  {
    id: "csc312_ch3_001",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which of the following correctly defines data capture?",
    options: [
      "The process of collecting raw facts and converting them into a form an information system can process",
      "The process of deleting outdated records from a database",
      "The process of encrypting data before it is transmitted",
      "The process of designing a network's physical topology",
    ],
    correctAnswer: 0,
    explanation:
      "The What is Data Capture section defines it as the process of collecting raw facts and figures from real-world events and converting them into a form that can be processed by an information system.\n\nDeleting outdated records is a data management or maintenance task, not the definition of data capture.\n\nEncrypting data before transmission is a data communication security control, not the definition of data capture.\n\nDesigning a network's physical topology is a networking concern, not the definition of data capture.",
  },
  {
    id: "csc312_ch3_002",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which of the following is listed as a data quality requirement that captured data must meet?",
    options: ["Expensive", "Accurate", "Anonymous", "Encrypted"],
    correctAnswer: 1,
    explanation:
      "The What is Data Capture section lists accurate, complete, timely, and consistent as the four data quality requirements.\n\nBeing expensive is not one of the four listed quality requirements.\n\nBeing anonymous is not one of the four listed quality requirements.\n\nBeing encrypted is a security concern discussed later, not one of the four data quality requirements listed here.",
  },
  {
    id: "csc312_ch3_003",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "The phrase 'garbage in, garbage out' is used to illustrate which of the following?",
    options: [
      "That network bandwidth determines data quality",
      "That poor data capture leads to poor decisions",
      "That databases automatically correct bad data",
      "That encryption prevents all data entry errors",
    ],
    correctAnswer: 1,
    explanation:
      "The 'Garbage in, garbage out' warning explicitly states that poor data capture leads to poor decisions.\n\nBandwidth is a networking concept discussed elsewhere, not connected to this warning about data capture quality.\n\nThe warning does not claim databases automatically correct bad data; it warns that poor input causes poor output.\n\nEncryption is a security control discussed elsewhere, not connected to this warning about data entry quality.",
  },
  {
    id: "csc312_ch3_004",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which of the following operational systems is given as an example that relies on clean captured data?",
    options: [
      "A point-of-sale (POS) system",
      "A firewall configuration panel",
      "A DNS resolver",
      "A Wi-Fi router's admin console",
    ],
    correctAnswer: 0,
    explanation:
      "The In Context section lists operational systems like POS, ERP, and CRM as relying on clean captured data.\n\nA firewall configuration panel is a security control discussed in the Data Communication part, not a system listed here relying on captured data.\n\nA DNS resolver is a networking component discussed elsewhere, not listed here.\n\nA Wi-Fi router's admin console is a networking tool discussed elsewhere, not listed here.",
  },
  {
    id: "csc312_ch3_005",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which data capture method is described as direct typing by users or operators, and is the most common method?",
    options: ["Keyboard Entry", "RFID", "OCR/OMR", "Sensors & IoT"],
    correctAnswer: 0,
    explanation:
      "The Data Capture Methods table describes Keyboard Entry as direct typing by users or operators, noting it is the most common method.\n\nRFID is described as radio-frequency tags read wirelessly, not direct typing.\n\nOCR/OMR is described as scanning printed text or marks, not direct typing.\n\nSensors & IoT is described as automated capture from smart devices, not direct typing.",
  },
  {
    id: "csc312_ch3_006",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which data capture method involves converting paper forms such as invoices and orders into digital records?",
    options: [
      "Source Documents",
      "Barcode / QR Scanning",
      "RFID",
      "Sensors & IoT",
    ],
    correctAnswer: 0,
    explanation:
      "The Data Capture Methods table describes Source Documents as paper forms, such as invoices and orders, converted to digital records.\n\nBarcode / QR Scanning is described as optical scanning of product codes, not converting paper forms.\n\nRFID is described as radio-frequency tags read wirelessly, not converting paper forms.\n\nSensors & IoT is described as automated capture from smart devices, not converting paper forms.",
  },
  {
    id: "csc312_ch3_007",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which data capture method is described as optical scanning of product codes, used in retail and logistics?",
    options: ["Barcode / QR Scanning", "Keyboard Entry", "RFID", "OCR/OMR"],
    correctAnswer: 0,
    explanation:
      "The Data Capture Methods table describes Barcode / QR Scanning as optical scanning of product codes, used in retail and logistics.\n\nKeyboard Entry is described as direct typing by users, not optical scanning of codes.\n\nRFID is described as radio-frequency tags read wirelessly, a different mechanism from optical barcode scanning.\n\nOCR/OMR is described as scanning printed text or marks, not product codes specifically.",
  },
  {
    id: "csc312_ch3_008",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which data capture method uses radio-frequency tags read wirelessly, and is used in warehouses and ports such as DP World?",
    options: ["RFID", "Keyboard Entry", "Source Documents", "OCR/OMR"],
    correctAnswer: 0,
    explanation:
      "The Data Capture Methods table describes RFID as radio-frequency tags read wirelessly, used in warehouses and ports, giving DP World as an example.\n\nKeyboard Entry is described as direct typing, not wireless radio-frequency tags.\n\nSource Documents is described as paper forms converted to digital records, not wireless tags.\n\nOCR/OMR is described as scanning printed text or marks, not wireless radio-frequency tags.",
  },
  {
    id: "csc312_ch3_009",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which data capture method scans printed text or marks, such as optical character or mark recognition?",
    options: ["OCR/OMR", "RFID", "Barcode / QR Scanning", "Sensors & IoT"],
    correctAnswer: 0,
    explanation:
      "The Data Capture Methods table describes OCR/OMR as optical character or mark recognition, scanning printed text or marks.\n\nRFID is described as radio-frequency tags read wirelessly, not scanning printed text.\n\nBarcode / QR Scanning is described as optical scanning of product codes, not printed text or marks generally.\n\nSensors & IoT is described as automated capture from smart devices, not scanning printed text or marks.",
  },
  {
    id: "csc312_ch3_010",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which data capture method is described as automated capture from smart devices and embedded systems?",
    options: [
      "Sensors & IoT",
      "Keyboard Entry",
      "Source Documents",
      "Barcode / QR Scanning",
    ],
    correctAnswer: 0,
    explanation:
      "The Data Capture Methods table describes Sensors & IoT as automated capture from smart devices and embedded systems.\n\nKeyboard Entry is described as direct typing by users, not automated capture from devices.\n\nSource Documents is described as paper forms converted to digital records, not automated device capture.\n\nBarcode / QR Scanning is described as optical scanning of product codes, not automated capture from embedded systems.",
  },
  {
    id: "csc312_ch3_011",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Keyboard Entry, RFID, and OCR/OMR are all valid data capture methods.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "This is True. The Data Capture Methods table lists all six methods: Keyboard Entry, Source Documents, Barcode/QR Scanning, RFID, OCR/OMR, and Sensors & IoT.",
  },
  {
    id: "csc312_ch3_012",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which quality dimension is described as ensuring all required fields are present?",
    options: ["Completeness", "Accuracy", "Consistency", "Timeliness"],
    correctAnswer: 0,
    explanation:
      "The Data Quality & Validation table describes Completeness as all required fields present.\n\nAccuracy is described as data reflecting real-world values, not the presence of required fields.\n\nConsistency is described as the same format across the system, not the presence of required fields.\n\nTimeliness is described as data being current when needed, not the presence of required fields.",
  },
  {
    id: "csc312_ch3_013",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which quality dimension is described as data reflecting real-world values?",
    options: ["Accuracy", "Completeness", "Consistency", "Timeliness"],
    correctAnswer: 0,
    explanation:
      "The Data Quality & Validation table describes Accuracy as data reflecting real-world values.\n\nCompleteness is described as all required fields present, not reflecting real-world values.\n\nConsistency is described as the same format across the system, not reflecting real-world values.\n\nTimeliness is described as data being current when needed, not reflecting real-world values.",
  },
  {
    id: "csc312_ch3_014",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which quality dimension is described as the same format being used across the system?",
    options: ["Consistency", "Accuracy", "Completeness", "Timeliness"],
    correctAnswer: 0,
    explanation:
      "The Data Quality & Validation table describes Consistency as the same format across the system.\n\nAccuracy is described as data reflecting real-world values, not format uniformity.\n\nCompleteness is described as all required fields present, not format uniformity.\n\nTimeliness is described as data being current when needed, not format uniformity.",
  },
  {
    id: "csc312_ch3_015",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which validation technique ensures numeric values fall within acceptable limits, such as age between 0 and 120?",
    options: ["Range Check", "Format Check", "Presence Check", "Batch Totals"],
    correctAnswer: 0,
    explanation:
      "The Validation Techniques section describes a Range Check as ensuring numeric values fall within acceptable limits, giving age 0-120 as its example.\n\nA Format Check verifies data matches an expected pattern, such as a date format, not a numeric range.\n\nA Presence Check confirms required fields are not left blank, not a numeric range.\n\nBatch Totals sum numeric fields against known control totals, not check a single value's range.",
  },
  {
    id: "csc312_ch3_016",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which validation technique verifies that data matches an expected pattern, such as a date formatted as DD/MM/YYYY?",
    options: [
      "Format Check",
      "Range Check",
      "Presence Check",
      "Lookup/Reference Check",
    ],
    correctAnswer: 0,
    explanation:
      "The Validation Techniques section describes a Format Check as verifying data matches an expected pattern, giving a DD/MM/YYYY date as its example.\n\nA Range Check ensures numeric values fall within acceptable limits, not that data matches a pattern.\n\nA Presence Check confirms required fields are not left blank, not that data matches a pattern.\n\nA Lookup/Reference Check cross-references against a valid values table, not a formatting pattern.",
  },
  {
    id: "csc312_ch3_017",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which validation technique confirms that required fields are not left blank?",
    options: [
      "Presence Check",
      "Range Check",
      "Format Check",
      "Consistency Check",
    ],
    correctAnswer: 0,
    explanation:
      "The Validation Techniques section describes a Presence Check as confirming required fields are not left blank.\n\nA Range Check ensures numeric values fall within acceptable limits, not that a field was left blank.\n\nA Format Check verifies data matches an expected pattern, not that a field was left blank.\n\nA Consistency Check ensures related fields do not contradict each other, not that a field was left blank.",
  },
  {
    id: "csc312_ch3_018",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which validation technique cross-references entered data against a valid values table or database?",
    options: [
      "Lookup/Reference Check",
      "Range Check",
      "Presence Check",
      "Batch Totals",
    ],
    correctAnswer: 0,
    explanation:
      "The Validation Techniques section describes a Lookup/Reference Check as cross-referencing against a valid values table or database.\n\nA Range Check ensures numeric values fall within acceptable limits, not cross-referencing a table.\n\nA Presence Check confirms required fields are not left blank, not cross-referencing a table.\n\nBatch Totals sum numeric fields against known control totals, not cross-referencing a values table.",
  },
  {
    id: "csc312_ch3_019",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which validation technique ensures related fields do not contradict each other?",
    options: [
      "Consistency Check",
      "Range Check",
      "Format Check",
      "Presence Check",
    ],
    correctAnswer: 0,
    explanation:
      "The Validation Techniques section describes a Consistency Check as ensuring related fields do not contradict each other.\n\nA Range Check ensures numeric values fall within acceptable limits, not the agreement between related fields.\n\nA Format Check verifies data matches an expected pattern, not the agreement between related fields.\n\nA Presence Check confirms required fields are not left blank, not the agreement between related fields.",
  },
  {
    id: "csc312_ch3_020",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which validation technique checks sums of numeric fields against known control totals?",
    options: [
      "Batch Totals",
      "Range Check",
      "Format Check",
      "Lookup/Reference Check",
    ],
    correctAnswer: 0,
    explanation:
      "The Validation Techniques section describes Batch Totals as sums of numeric fields checked against known control totals.\n\nA Range Check ensures a single numeric value falls within acceptable limits, not a sum checked against a control total.\n\nA Format Check verifies data matches an expected pattern, not a sum checked against a control total.\n\nA Lookup/Reference Check cross-references against a valid values table, not a sum checked against a control total.",
  },
  {
    id: "csc312_ch3_021",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which of the following is listed as a validation technique at data entry?",
    options: [
      "Range Check",
      "Lookup/Reference Check",
      "All of these",
      "None of these",
    ],
    correctAnswer: 2,
    explanation:
      "The Validation Techniques section lists both a Range Check and a Lookup/Reference Check among its six listed validation techniques, so both named options are correct, making All of these the right choice.",
  },
  {
    id: "csc312_ch3_022",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which of the following is listed as a problem of the traditional file environment?",
    options: [
      "Data redundancy",
      "Automatic data consistency",
      "Unified single source of truth",
      "Granular access control",
    ],
    correctAnswer: 0,
    explanation:
      "The Traditional File Environment section lists data redundancy among its six listed problems, alongside inconsistency, isolation, rigidity, program-data dependence, and limited security.\n\nAutomatic data consistency is listed as a DBMS advantage, the opposite of a traditional file environment problem.\n\nA unified single source of truth is listed as a DBMS advantage under centralized data storage, not a file environment problem.\n\nGranular access control is listed as a DBMS security advantage, not a file environment problem.",
  },
  {
    id: "csc312_ch3_023",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which of the following describes the 'data isolation' problem of the traditional file environment?",
    options: [
      "Difficulty combining data across files",
      "Programs being fully independent of file formats",
      "Excessive security and access control",
      "Easy addition of new data types",
    ],
    correctAnswer: 0,
    explanation:
      "The Traditional File Environment section describes data isolation as data being difficult to combine across files.\n\nPrograms being fully independent of file formats is the opposite of the program-data dependence problem listed for traditional files.\n\nExcessive security is the opposite of the limited security and access control problem listed for traditional files.\n\nEasy addition of new data types is the opposite of the rigidity problem listed for traditional files.",
  },
  {
    id: "csc312_ch3_024",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which of the following describes the 'program-data dependence' problem of the traditional file environment?",
    options: [
      "Programs being tied to specific file formats",
      "Data being centrally stored in one place",
      "Data being automatically validated by the DBMS",
      "Multiple applications sharing one database",
    ],
    correctAnswer: 0,
    explanation:
      "The Traditional File Environment section describes program-data dependence as programs being tied to file formats.\n\nCentralized storage in one place is a DBMS advantage, the opposite of the file environment's isolated, dependent files.\n\nAutomatic validation by a DBMS is a database advantage, not a traditional file environment characteristic.\n\nMultiple applications sharing one database is a DBMS advantage under data sharing, not a file environment problem.",
  },
  {
    id: "csc312_ch3_025",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which of the following is listed as an advantage of the Database Approach (DBMS)?",
    options: [
      "Centralized data storage",
      "Data redundancy across multiple files",
      "Program-data dependence",
      "Data isolation between files",
    ],
    correctAnswer: 0,
    explanation:
      "The Database Approach (DBMS) section lists centralized data storage as a single source of truth among its six listed advantages.\n\nData redundancy across multiple files is a traditional file environment problem, not a DBMS advantage.\n\nProgram-data dependence is a traditional file environment problem, not a DBMS advantage.\n\nData isolation between files is a traditional file environment problem, not a DBMS advantage.",
  },
  {
    id: "csc312_ch3_026",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which DBMS advantage is described as programs being separated from storage?",
    options: [
      "Data independence",
      "Data redundancy",
      "Data isolation",
      "Rigidity",
    ],
    correctAnswer: 0,
    explanation:
      "The Database Approach (DBMS) section describes data independence as programs being separated from storage.\n\nData redundancy is a traditional file environment problem, the opposite of the DBMS advantages listed.\n\nData isolation is a traditional file environment problem, the opposite of the DBMS advantages listed.\n\nRigidity is a traditional file environment problem, the opposite of the DBMS's flexibility advantage.",
  },
  {
    id: "csc312_ch3_027",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which of the following correctly defines a DBMS?",
    options: [
      "Software that creates, maintains, and provides access to a database",
      "A single physical server used only for backups",
      "A protocol for transmitting data over wireless networks",
      "A team responsible for writing user documentation",
    ],
    correctAnswer: 0,
    explanation:
      "The Database Management Systems (DBMS) section defines it as software that creates, maintains, and provides access to a database.\n\nA physical backup server is hardware, not the software definition given for a DBMS.\n\nA wireless transmission protocol belongs to the Data Communication part, not the DBMS definition.\n\nA documentation team is a human role, not the software definition given for a DBMS.",
  },
  {
    id: "csc312_ch3_028",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which of the following is listed as a key DBMS capability?",
    options: [
      "Data definition language (DDL)",
      "Wireless signal amplification",
      "Barcode label printing",
      "Physical cable installation",
    ],
    correctAnswer: 0,
    explanation:
      "The Key DBMS Capabilities section lists Data Definition Language (DDL) among its six listed capabilities.\n\nWireless signal amplification is a networking concern, not a listed DBMS capability.\n\nBarcode label printing is a data capture concern, not a listed DBMS capability.\n\nPhysical cable installation is a networking infrastructure task, not a listed DBMS capability.",
  },
  {
    id: "csc312_ch3_029",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which of the following query languages is listed as a key DBMS capability?",
    options: ["SQL", "HTML", "TCP/IP", "HTTP"],
    correctAnswer: 0,
    explanation:
      "The Key DBMS Capabilities section lists SQL as the query language capability of a DBMS.\n\nHTML is a web markup language, not the query language listed as a DBMS capability.\n\nTCP/IP is the protocol suite governing internet transmission, not a DBMS capability.\n\nHTTP is a web transfer protocol, not a DBMS capability.",
  },
  {
    id: "csc312_ch3_030",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which of the following is listed as a key DBMS capability, alongside DDL, DML, and SQL?",
    options: [
      "Transaction management",
      "Cellular network handoff",
      "RFID tag manufacturing",
      "Firewall rule configuration",
    ],
    correctAnswer: 0,
    explanation:
      "The Key DBMS Capabilities section lists transaction management among its six listed capabilities, alongside security & access control and a data dictionary.\n\nCellular network handoff is a wireless technology concern, not a DBMS capability.\n\nRFID tag manufacturing is a data capture hardware concern, not a DBMS capability.\n\nFirewall rule configuration is a security control in data communication, not a DBMS capability.",
  },
  {
    id: "csc312_ch3_031",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "In the relational data model, which term refers to rows of data about an entity, such as CUSTOMER?",
    options: [
      "Table (Relation)",
      "Row (Tuple)",
      "Column (Attribute)",
      "Foreign Key",
    ],
    correctAnswer: 0,
    explanation:
      "The Relational Model Terms table defines a Table (Relation) as rows of data about an entity, giving CUSTOMER as an example.\n\nA Row (Tuple) is defined as a single record or instance of an entity, not the whole table.\n\nA Column (Attribute) is defined as a specific piece of data, such as CustomerName, not the whole table.\n\nA Foreign Key is defined as a link to a primary key in another table, not the table itself.",
  },
  {
    id: "csc312_ch3_032",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "In the relational data model, which term refers to a single record or instance of an entity?",
    options: [
      "Row (Tuple)",
      "Table (Relation)",
      "Column (Attribute)",
      "Primary Key",
    ],
    correctAnswer: 0,
    explanation:
      "The Relational Model Terms table defines a Row (Tuple) as a single record or instance of an entity.\n\nA Table (Relation) is defined as rows of data about an entity, the whole collection rather than a single record.\n\nA Column (Attribute) is defined as a specific piece of data, not a single record.\n\nA Primary Key is defined as the unique identifier for each row, not the record itself.",
  },
  {
    id: "csc312_ch3_033",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "In the relational data model, which term refers to a specific piece of data, such as CustomerName?",
    options: [
      "Column (Attribute)",
      "Row (Tuple)",
      "Table (Relation)",
      "Foreign Key",
    ],
    correctAnswer: 0,
    explanation:
      "The Relational Model Terms table defines a Column (Attribute) as a specific piece of data, giving CustomerName as an example.\n\nA Row (Tuple) is defined as a single record or instance of an entity, not one specific data item.\n\nA Table (Relation) is defined as rows of data about an entity, the whole collection rather than one data item.\n\nA Foreign Key is defined as a link to a primary key in another table, not a general data item.",
  },
  {
    id: "csc312_ch3_034",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "In the relational data model, which term refers to the unique identifier for each row?",
    options: [
      "Primary Key",
      "Foreign Key",
      "Column (Attribute)",
      "Table (Relation)",
    ],
    correctAnswer: 0,
    explanation:
      "The Relational Model Terms table defines a Primary Key as the unique identifier for each row.\n\nA Foreign Key is defined as a link to a primary key in another table, not the unique identifier within its own table.\n\nA Column (Attribute) is defined as a specific piece of data, not necessarily a unique identifier.\n\nA Table (Relation) is defined as rows of data about an entity, not a single identifying value.",
  },
  {
    id: "csc312_ch3_035",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "In the relational data model, which term refers to a link to a primary key in another table?",
    options: [
      "Foreign Key",
      "Primary Key",
      "Row (Tuple)",
      "Column (Attribute)",
    ],
    correctAnswer: 0,
    explanation:
      "The Relational Model Terms table defines a Foreign Key as a link to a primary key in another table.\n\nA Primary Key is defined as the unique identifier for each row within its own table, not a link to another table.\n\nA Row (Tuple) is defined as a single record or instance of an entity, not a linking mechanism.\n\nA Column (Attribute) is defined as a specific piece of data, not specifically a linking mechanism between tables.",
  },
  {
    id: "csc312_ch3_036",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Table (Relation), Row (Tuple), and Bandwidth are all relational data model terms.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "This is False. The Relational Model Terms table lists Table (Relation), Row (Tuple), Column (Attribute), Primary Key, and Foreign Key as its five relational model terms. Bandwidth is a networking concept from the Key Networking Concepts section, not a relational data model term.",
  },
  {
    id: "csc312_ch3_037",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "In the CUSTOMER table example, the SQL query 'SELECT Name, City FROM CUSTOMER WHERE City = Cairo ORDER BY Name' would return which customer?",
    options: [
      "Ahmed Al-Rashid",
      "Fatima Hassan",
      "Omar Abdullah",
      "Sara Khalil",
    ],
    correctAnswer: 0,
    explanation:
      "The Example: CUSTOMER Table lists Ahmed Al-Rashid as the customer whose City field is Cairo, so this is the row the query's WHERE clause would return.\n\nFatima Hassan's City is listed as Dubai, not Cairo, so she would not match the WHERE City = Cairo condition.\n\nOmar Abdullah's City is listed as Riyadh, not Cairo, so he would not match the condition.\n\nSara Khalil's City is listed as Beirut, not Cairo, so she would not match the condition.",
  },
  {
    id: "csc312_ch3_038",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "In the data warehousing data flow, which stage comes immediately after Operational Systems (OLTP)?",
    options: [
      "ETL Process",
      "Data Warehouse",
      "BI & Analytics Tools",
      "Reports and dashboards",
    ],
    correctAnswer: 0,
    explanation:
      "The Data Warehousing & Business Intelligence flow lists the order as Operational Systems (OLTP), ETL Process, Data Warehouse, then BI & Analytics Tools, so the ETL Process comes directly after operational systems.\n\nThe Data Warehouse stage comes after the ETL Process, not directly after operational systems.\n\nBI & Analytics Tools is the final stage in this flow, not the one directly after operational systems.\n\nReports and dashboards are examples of BI & Analytics Tools output, the final stage, not directly after operational systems.",
  },
  {
    id: "csc312_ch3_039",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "In the ETL process referenced in the data warehousing flow, what does the 'T' stand for?",
    options: ["Transform", "Transmit", "Translate", "Transfer"],
    correctAnswer: 0,
    explanation:
      "The Data Warehousing & Business Intelligence flow spells out ETL as Extract, Transform, Load.\n\nTransmit is not the term used in the ETL breakdown given in this section.\n\nTranslate is not the term used in the ETL breakdown given in this section.\n\nTransfer is not the term used in the ETL breakdown given in this section.",
  },
  {
    id: "csc312_ch3_040",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "In the Data Warehouse versus Operational Database comparison, which is described as being used to run day-to-day transactions?",
    options: [
      "Operational DB (OLTP)",
      "Data Warehouse",
      "Both equally",
      "Neither",
    ],
    correctAnswer: 0,
    explanation:
      "The Data Warehouse vs. Operational Database table describes the Operational DB (OLTP) purpose as running day-to-day transactions.\n\nThe Data Warehouse purpose is described as analyzing historical data, not running day-to-day transactions.\n\nThe table draws a clear distinction between the two purposes, so they are not described as equal.\n\nThe table explicitly assigns day-to-day transactions to the Operational DB, so it is incorrect to say neither.",
  },
  {
    id: "csc312_ch3_041",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "In the Data Warehouse versus Operational Database comparison, whose data is described as historical and summarized?",
    options: [
      "Data Warehouse",
      "Operational DB (OLTP)",
      "Both equally",
      "Neither",
    ],
    correctAnswer: 0,
    explanation:
      "The Data Warehouse vs. Operational Database table describes the Data Warehouse's data as historical and summarized.\n\nThe Operational DB's data is described as current and detailed, not historical and summarized.\n\nThe table draws a clear distinction between the two, so they are not described as equal.\n\nThe table explicitly assigns historical, summarized data to the Data Warehouse, so it is incorrect to say neither.",
  },
  {
    id: "csc312_ch3_042",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "In the Data Warehouse versus Operational Database comparison, which typical users are listed for the Operational DB (OLTP)?",
    options: [
      "Clerks, operators",
      "Managers, analysts",
      "Executives only",
      "External auditors only",
    ],
    correctAnswer: 0,
    explanation:
      "The Data Warehouse vs. Operational Database table lists clerks and operators as the typical users of the Operational DB.\n\nManagers and analysts are listed as the typical users of the Data Warehouse, not the Operational DB.\n\nExecutives only is not the user group listed for either system in this table.\n\nExternal auditors only is not the user group listed for either system in this table.",
  },
  {
    id: "csc312_ch3_043",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which operations are listed as most common for a Data Warehouse in the comparison table?",
    options: [
      "Mostly read/query",
      "Insert, update, delete",
      "Formatting hard drives",
      "Installing network cables",
    ],
    correctAnswer: 0,
    explanation:
      "The Data Warehouse vs. Operational Database table lists mostly read/query operations for the Data Warehouse.\n\nInsert, update, delete are listed as the operations for the Operational DB, not the Data Warehouse.\n\nFormatting hard drives is not an operation listed in this table for either system.\n\nInstalling network cables is not an operation listed in this table for either system.",
  },
  {
    id: "csc312_ch3_044",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which 'V' of Big Data refers to enormous amounts of data, from terabytes to petabytes, generated daily?",
    options: ["Volume", "Variety", "Velocity", "Validity"],
    correctAnswer: 0,
    explanation:
      "The 3 V's of Big Data table describes Volume as enormous amounts of data, from terabytes to petabytes, generated daily.\n\nVariety is described as structured tables, unstructured text, video, and sensor readings, not the sheer amount of data.\n\nVelocity is described as data generated and processed in real time, not the sheer amount of data.\n\nValidity is not one of the three V's listed in this table.",
  },
  {
    id: "csc312_ch3_045",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which 'V' of Big Data refers to structured tables, unstructured text, video, and sensor readings?",
    options: ["Variety", "Volume", "Velocity", "Value"],
    correctAnswer: 0,
    explanation:
      "The 3 V's of Big Data table describes Variety as structured tables, unstructured text, video, sensor readings, and social media.\n\nVolume is described as enormous amounts of data, not the diversity of data types.\n\nVelocity is described as data generated and processed in real time, not the diversity of data types.\n\nValue is not one of the three V's listed in this table.",
  },
  {
    id: "csc312_ch3_046",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which 'V' of Big Data refers to data being generated and processed in real time, such as streaming data from IoT?",
    options: ["Velocity", "Volume", "Variety", "Veracity"],
    correctAnswer: 0,
    explanation:
      "The 3 V's of Big Data table describes Velocity as data generated and processed in real time, giving streaming data from IoT and transactions as its example.\n\nVolume is described as enormous amounts of data, not the speed of generation and processing.\n\nVariety is described as diverse data types, not the speed of generation and processing.\n\nVeracity is not one of the three V's listed in this table.",
  },
  {
    id: "csc312_ch3_047",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Volume, Variety, and Velocity are the 3 V's of Big Data.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "This is True. The 3 V's of Big Data table lists exactly these three: Volume, Variety, and Velocity.",
  },
  {
    id: "csc312_ch3_048",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which data governance component determines who can access what data and for what purpose?",
    options: [
      "Information Policy",
      "Data Quality Standards",
      "Data Dictionary",
      "Data Stewardship",
    ],
    correctAnswer: 0,
    explanation:
      "The Data Governance Framework section describes Information Policy as determining who can access what data and for what purpose.\n\nData Quality Standards are described as rules for accuracy, completeness, and timeliness, not access permissions.\n\nA Data Dictionary is described as a central repository of data definitions, not access permissions.\n\nData Stewardship is described as assigned responsibility for data assets, not access permissions specifically.",
  },
  {
    id: "csc312_ch3_049",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which data governance component is described as a central repository of all data definitions?",
    options: [
      "Data Dictionary",
      "Information Policy",
      "Data Stewardship",
      "Compliance",
    ],
    correctAnswer: 0,
    explanation:
      "The Data Governance Framework section describes a Data Dictionary as a central repository of all data definitions.\n\nInformation Policy is described as governing who can access what data, not a repository of definitions.\n\nData Stewardship is described as assigned responsibility for data assets, not a repository of definitions.\n\nCompliance is described as adherence to regulations such as GDPR, not a repository of definitions.",
  },
  {
    id: "csc312_ch3_050",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which data governance component is described as assigned responsibility for data assets?",
    options: [
      "Data Stewardship",
      "Information Policy",
      "Data Dictionary",
      "Compliance",
    ],
    correctAnswer: 0,
    explanation:
      "The Data Governance Framework section describes Data Stewardship as assigned responsibility for data assets.\n\nInformation Policy is described as governing who can access what data, not assigned responsibility for the data itself.\n\nA Data Dictionary is described as a repository of data definitions, not assigned responsibility for the data.\n\nCompliance is described as adherence to regulations such as GDPR, not assigned responsibility for data assets.",
  },
  {
    id: "csc312_ch3_051",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which of the following is listed as an example of compliance under data governance?",
    options: ["GDPR", "TCP/IP", "HTTP", "DNS"],
    correctAnswer: 0,
    explanation:
      "The Data Governance Framework section lists GDPR, local Arab privacy laws, and industry regulations under Compliance.\n\nTCP/IP is a networking protocol suite discussed in the Data Communication part, not a compliance example.\n\nHTTP is a web transfer protocol, not a compliance example listed here.\n\nDNS is the Domain Name System, a networking concept, not a compliance example listed here.",
  },
  {
    id: "csc312_ch3_052",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which of the following is listed as a component of the data governance framework?",
    options: ["Firewalls", "Bandwidth", "All of these", "None of these"],
    correctAnswer: 3,
    explanation:
      "The Data Governance Framework section lists five components: Information Policy, Data Quality Standards, Data Dictionary, Data Stewardship, and Compliance. Firewalls is a security control from the Security Controls table, and Bandwidth is a networking concept from Key Networking Concepts, so neither belongs to the data governance framework, making None of these the right choice.",
  },
  {
    id: "csc312_ch3_053",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which network type is described as covering a small geographic area, such as an office or campus, with high speed?",
    options: ["LAN", "MAN", "WAN", "VPN"],
    correctAnswer: 0,
    explanation:
      "The Network Types table describes a LAN (Local Area Network) as covering a small geographic area, such as an office or campus, at high speed.\n\nA MAN is described as a city-wide network linking multiple LANs, a larger scope than a single office or campus.\n\nA WAN is described as spanning countries or continents, a much larger scope than a LAN.\n\nA VPN is not one of the three network types listed in this table.",
  },
  {
    id: "csc312_ch3_054",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which network type is described as a city-wide network linking multiple LANs?",
    options: ["MAN", "LAN", "WAN", "PAN"],
    correctAnswer: 0,
    explanation:
      "The Network Types table describes a MAN (Metropolitan Area Network) as a city-wide network linking multiple LANs.\n\nA LAN is described as covering a small geographic area like an office, not a whole city.\n\nA WAN is described as spanning countries or continents, a larger scope than a single city.\n\nA PAN is not one of the three network types listed in this table.",
  },
  {
    id: "csc312_ch3_055",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which network type is described as spanning countries or continents, using leased lines or the internet?",
    options: ["WAN", "LAN", "MAN", "PAN"],
    correctAnswer: 0,
    explanation:
      "The Network Types table describes a WAN (Wide Area Network) as spanning countries or continents, using leased lines or the internet.\n\nA LAN is described as covering a small geographic area like an office, not countries or continents.\n\nA MAN is described as a city-wide network, a smaller scope than a WAN.\n\nA PAN is not one of the three network types listed in this table.",
  },
  {
    id: "csc312_ch3_056",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which networking concept is described as data transmission capacity, measured in Mbps or Gbps?",
    options: ["Bandwidth", "Packet Switching", "DNS", "Protocol"],
    correctAnswer: 0,
    explanation:
      "The Key Networking Concepts section describes Bandwidth as data transmission capacity, measured in Mbps or Gbps.\n\nPacket Switching is described as data broken into packets, routed independently, and reassembled, not a capacity measurement.\n\nDNS is described as translating names to IP addresses, not a capacity measurement.\n\nProtocol is described as agreed rules for formatting and transmitting data, not a capacity measurement.",
  },
  {
    id: "csc312_ch3_057",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which networking concept is described as data being broken into packets, routed independently, and reassembled?",
    options: ["Packet Switching", "Bandwidth", "IP Address", "DNS"],
    correctAnswer: 0,
    explanation:
      "The Key Networking Concepts section describes Packet Switching as data broken into packets, routed independently, and reassembled.\n\nBandwidth is described as data transmission capacity, not the packet-based routing mechanism.\n\nAn IP Address is described as a unique numeric identifier for a device, not the packet-based routing mechanism.\n\nDNS is described as translating names to IP addresses, not the packet-based routing mechanism.",
  },
  {
    id: "csc312_ch3_058",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which networking concept is described as the protocol suite governing data transmission on the internet?",
    options: ["TCP/IP", "Bandwidth", "DNS", "Packet Switching"],
    correctAnswer: 0,
    explanation:
      "The Key Networking Concepts section describes TCP/IP as the protocol suite governing data transmission on the internet.\n\nBandwidth is described as data transmission capacity, not a protocol suite.\n\nDNS is described as translating names to IP addresses, a specific service rather than the whole governing protocol suite.\n\nPacket Switching is described as the mechanism of breaking data into packets, not the overall governing protocol suite.",
  },
  {
    id: "csc312_ch3_059",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which networking concept is described as a unique numeric identifier for each device on a network?",
    options: ["IP Address", "Bandwidth", "Protocol", "DNS"],
    correctAnswer: 0,
    explanation:
      "The Key Networking Concepts section describes an IP Address as a unique numeric identifier for each device on a network.\n\nBandwidth is described as data transmission capacity, not a device identifier.\n\nProtocol is described as agreed rules for formatting and transmitting data, not a device identifier.\n\nDNS is described as the system that translates names to IP addresses, not the address itself.",
  },
  {
    id: "csc312_ch3_060",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which networking concept translates domain names to IP addresses?",
    options: ["DNS", "Bandwidth", "TCP/IP", "Packet Switching"],
    correctAnswer: 0,
    explanation:
      "The Key Networking Concepts section describes DNS, the Domain Name System, as translating names to IP addresses.\n\nBandwidth is described as data transmission capacity, not a name-to-address translation service.\n\nTCP/IP is described as the protocol suite governing internet transmission generally, not the specific name translation service.\n\nPacket Switching is described as breaking data into packets, not translating names to addresses.",
  },
  {
    id: "csc312_ch3_061",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which networking concept is described as agreed rules for formatting, transmitting, and receiving data?",
    options: ["Protocol", "Bandwidth", "IP Address", "DNS"],
    correctAnswer: 0,
    explanation:
      "The Key Networking Concepts section describes a Protocol as agreed rules for formatting, transmitting, and receiving data.\n\nBandwidth is described as data transmission capacity, not a set of formatting rules.\n\nAn IP Address is described as a device identifier, not a set of formatting rules.\n\nDNS is described as translating names to addresses, a specific service rather than the general rule set.",
  },
  {
    id: "csc312_ch3_062",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which of the following best describes the internet?",
    options: [
      "A worldwide interconnection of networks using TCP/IP",
      "A single national network limited to one country",
      "A private network accessible only to government agencies",
      "A type of database management system",
    ],
    correctAnswer: 0,
    explanation:
      "The Global Network: The Internet section describes the internet as a worldwide interconnection of networks using TCP/IP.\n\nA single national network limited to one country contradicts the worldwide scope described for the internet.\n\nA private government-only network contradicts the broad, worldwide interconnection described for the internet.\n\nA type of DBMS confuses the internet with data management, a separate part of this lecture.",
  },
  {
    id: "csc312_ch3_063",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which internet service is described as a system of interlinked hypertext documents accessed via browsers, using HTTP/HTTPS?",
    options: [
      "World Wide Web",
      "Email & Messaging",
      "Cloud Computing",
      "File Transfer (FTP)",
    ],
    correctAnswer: 0,
    explanation:
      "The Internet Services & Communication Tools table describes the World Wide Web as a system of interlinked hypertext documents accessed via browsers, using HTTP/HTTPS.\n\nEmail & Messaging is described as electronic communication via SMTP/POP3/IMAP, not hypertext documents.\n\nCloud Computing is described as on-demand computing resources delivered over the internet, not hypertext documents specifically.\n\nFile Transfer (FTP) is described as a protocol for transferring files, not hypertext documents.",
  },
  {
    id: "csc312_ch3_064",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which internet service is described as electronic communication via SMTP, POP3, and IMAP?",
    options: [
      "Email & Messaging",
      "World Wide Web",
      "VoIP",
      "Web Services & APIs",
    ],
    correctAnswer: 0,
    explanation:
      "The Internet Services & Communication Tools table describes Email & Messaging as electronic communication via SMTP/POP3/IMAP, with instant messaging via XMPP.\n\nThe World Wide Web is described as accessed via browsers using HTTP/HTTPS, not SMTP/POP3/IMAP.\n\nVoIP is described as voice calls transmitted as digital packets over IP networks, not SMTP/POP3/IMAP.\n\nWeb Services & APIs are described as standards enabling systems to communicate over the web, not SMTP/POP3/IMAP.",
  },
  {
    id: "csc312_ch3_065",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which internet service is described as on-demand computing resources and applications delivered over the internet?",
    options: [
      "Cloud Computing",
      "Email & Messaging",
      "File Transfer (FTP)",
      "VoIP",
    ],
    correctAnswer: 0,
    explanation:
      "The Internet Services & Communication Tools table describes Cloud Computing as on-demand computing resources and applications delivered over the internet.\n\nEmail & Messaging is described as electronic communication via SMTP/POP3/IMAP, not on-demand computing resources.\n\nFile Transfer (FTP) is described as a protocol for transferring files, not on-demand computing resources.\n\nVoIP is described as voice calls transmitted over IP networks, not on-demand computing resources.",
  },
  {
    id: "csc312_ch3_066",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which internet service is described as a protocol for transferring files between networked computers?",
    options: [
      "File Transfer (FTP)",
      "World Wide Web",
      "VoIP",
      "Cloud Computing",
    ],
    correctAnswer: 0,
    explanation:
      "The Internet Services & Communication Tools table describes File Transfer (FTP) as a protocol for transferring files between networked computers.\n\nThe World Wide Web is described as a system of hypertext documents, not a file transfer protocol.\n\nVoIP is described as voice calls transmitted over IP networks, not a file transfer protocol.\n\nCloud Computing is described as on-demand computing resources, not specifically a file transfer protocol.",
  },
  {
    id: "csc312_ch3_067",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which internet service is described as voice calls transmitted as digital packets over IP networks?",
    options: [
      "VoIP",
      "World Wide Web",
      "File Transfer (FTP)",
      "Web Services & APIs",
    ],
    correctAnswer: 0,
    explanation:
      "The Internet Services & Communication Tools table describes VoIP as voice calls transmitted as digital packets over IP networks, giving Main Telecom as an example.\n\nThe World Wide Web is described as hypertext documents accessed via browsers, not voice calls.\n\nFile Transfer (FTP) is described as a file transfer protocol, not voice calls.\n\nWeb Services & APIs are described as standards enabling systems to communicate over the web, not voice calls specifically.",
  },
  {
    id: "csc312_ch3_068",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which internet service is described as standards enabling systems to communicate over the web, forming the foundation of SOA?",
    options: [
      "Web Services & APIs",
      "World Wide Web",
      "Email & Messaging",
      "VoIP",
    ],
    correctAnswer: 0,
    explanation:
      "The Internet Services & Communication Tools table describes Web Services & APIs as standards enabling systems to communicate over the web, forming the foundation of SOA.\n\nThe World Wide Web is described as hypertext documents accessed via browsers, a related but distinct concept from system-to-system APIs.\n\nEmail & Messaging is described as electronic communication via SMTP/POP3/IMAP, not system-to-system APIs.\n\nVoIP is described as voice calls over IP networks, not system-to-system APIs.",
  },
  {
    id: "csc312_ch3_069",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "The World Wide Web and TCP/IP are both listed among the Internet Services & Communication Tools.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "This is False. The Internet Services & Communication Tools table lists six services: World Wide Web, Email & Messaging, Cloud Computing, File Transfer (FTP), VoIP, and Web Services & APIs. TCP/IP is listed separately under Key Networking Concepts, not among these six services.",
  },
  {
    id: "csc312_ch3_070",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which cellular network generation is described as offering voice and SMS at 9.6 to 115 Kbps?",
    options: ["2G", "3G", "4G", "5G"],
    correctAnswer: 0,
    explanation:
      "The Network Generations table describes 2G as offering voice and SMS capabilities at speeds of 9.6-115 Kbps.\n\n3G is described as offering mobile internet and video at 144 Kbps-2 Mbps, faster than 2G.\n\n4G is described as offering HD streaming at up to 100 Mbps, much faster than 2G.\n\n5G is described as offering up to 10 Gbps, far faster than 2G.",
  },
  {
    id: "csc312_ch3_071",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which cellular network generation is described as offering mobile internet and video at 144 Kbps to 2 Mbps?",
    options: ["3G", "2G", "4G", "5G"],
    correctAnswer: 0,
    explanation:
      "The Network Generations table describes 3G as offering mobile internet and video at speeds of 144 Kbps-2 Mbps.\n\n2G is described as offering only voice and SMS at slower speeds, not mobile internet and video.\n\n4G is described as offering HD streaming at up to 100 Mbps, faster than 3G.\n\n5G is described as offering up to 10 Gbps, far faster than 3G.",
  },
  {
    id: "csc312_ch3_072",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which cellular network generation is described as offering HD streaming and mobile broadband at up to 100 Mbps?",
    options: ["4G", "2G", "3G", "5G"],
    correctAnswer: 0,
    explanation:
      "The Network Generations table describes 4G as offering HD streaming and mobile broadband at up to 100 Mbps.\n\n2G is described as offering only voice and SMS, not HD streaming.\n\n3G is described as offering mobile internet and video at slower speeds than 4G.\n\n5G is described as offering up to 10 Gbps, far faster than 4G.",
  },
  {
    id: "csc312_ch3_073",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which cellular network generation is described as supporting IoT, autonomous vehicles, and smart cities at up to 10 Gbps?",
    options: ["5G", "2G", "3G", "4G"],
    correctAnswer: 0,
    explanation:
      "The Network Generations table describes 5G as supporting IoT, autonomous vehicles, and smart cities at speeds up to 10 Gbps.\n\n2G is described as offering only voice and SMS, far below the capabilities described for 5G.\n\n3G is described as offering mobile internet and video, not the IoT and autonomous vehicle capabilities of 5G.\n\n4G is described as offering HD streaming and mobile broadband, at slower speeds than 5G.",
  },
  {
    id: "csc312_ch3_074",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which wireless technology is described as wireless LANs in homes and offices, with a range of about 100 meters?",
    options: [
      "Wi-Fi (802.11)",
      "Bluetooth",
      "RFID",
      "Wireless Sensor Networks",
    ],
    correctAnswer: 0,
    explanation:
      "The Wireless Technologies section describes Wi-Fi (802.11) as wireless LANs in homes and offices, with a range of about 100 meters and speeds up to several Gbps.\n\nBluetooth is described as short-range, about 10 meters, and low power, a much shorter range than Wi-Fi.\n\nRFID is described as radio-frequency tags used in supply chains, not a wireless LAN technology.\n\nWireless Sensor Networks are described as networks of tiny sensors monitoring the environment, not a home or office LAN technology.",
  },
  {
    id: "csc312_ch3_075",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which wireless technology is described as short-range, about 10 meters, and low power, used for personal devices and wearables?",
    options: [
      "Bluetooth",
      "Wi-Fi (802.11)",
      "RFID",
      "Wireless Sensor Networks",
    ],
    correctAnswer: 0,
    explanation:
      "The Wireless Technologies section describes Bluetooth as short-range, about 10 meters, and low power, used for personal devices, IoT sensors, and wearables.\n\nWi-Fi is described as having a range of about 100 meters, much longer than Bluetooth's range.\n\nRFID is described as radio-frequency tags used in supply chains, not personal wearables specifically.\n\nWireless Sensor Networks are described as networks of tiny sensors monitoring the environment, a different use case from personal wearables.",
  },
  {
    id: "csc312_ch3_076",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which wireless technology is described as networks of tiny sensors monitoring the environment, used in smart buildings and agriculture?",
    options: [
      "Wireless Sensor Networks",
      "Wi-Fi (802.11)",
      "Bluetooth",
      "RFID",
    ],
    correctAnswer: 0,
    explanation:
      "The Wireless Technologies section describes Wireless Sensor Networks as networks of tiny sensors monitoring the environment, used in smart buildings and agriculture.\n\nWi-Fi is described as wireless LANs in homes and offices, not networks of environmental sensors.\n\nBluetooth is described as short-range personal device connectivity, not environmental sensor networks.\n\nRFID is described as radio-frequency tags used in supply chains, not environmental sensor networks.",
  },
  {
    id: "csc312_ch3_077",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Wi-Fi (802.11) and Bluetooth are both wireless technologies.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "This is True. The Wireless Technologies section lists both Wi-Fi (802.11) and Bluetooth among its four listed wireless technologies, alongside RFID and Wireless Sensor Networks.",
  },
  {
    id: "csc312_ch3_078",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which security threat is described as viruses, worms, ransomware, and spyware that exploit network vulnerabilities?",
    options: ["Malware", "Phishing", "Eavesdropping", "DoS Attacks"],
    correctAnswer: 0,
    explanation:
      "The Common Threats table describes Malware as viruses, worms, ransomware, and spyware that exploit network vulnerabilities.\n\nPhishing is described as social engineering via fake websites or fraudulent emails, not malicious software itself.\n\nEavesdropping is described as intercepting unencrypted data, not malicious software.\n\nDoS Attacks are described as flooding servers with requests, not malicious software.",
  },
  {
    id: "csc312_ch3_079",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which security threat is described as a social engineering attack via fake websites or fraudulent emails?",
    options: ["Phishing", "Malware", "Eavesdropping", "DoS Attacks"],
    correctAnswer: 0,
    explanation:
      "The Common Threats table describes Phishing as a social engineering attack via fake websites or fraudulent emails.\n\nMalware is described as viruses, worms, ransomware, and spyware, not social engineering via fake websites.\n\nEavesdropping is described as intercepting unencrypted data, not social engineering via fake websites.\n\nDoS Attacks are described as flooding servers with requests, not social engineering via fake websites.",
  },
  {
    id: "csc312_ch3_080",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which security threat is described as intercepting unencrypted data traveling over networks, such as a man-in-the-middle attack?",
    options: ["Eavesdropping", "Malware", "Phishing", "DoS Attacks"],
    correctAnswer: 0,
    explanation:
      "The Common Threats table describes Eavesdropping as intercepting unencrypted data traveling over networks, giving man-in-the-middle as an example.\n\nMalware is described as viruses, worms, ransomware, and spyware, not intercepting data in transit.\n\nPhishing is described as social engineering via fake websites, not intercepting data in transit.\n\nDoS Attacks are described as flooding servers with requests, not intercepting data in transit.",
  },
  {
    id: "csc312_ch3_081",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which security threat is described as flooding servers with requests to make services unavailable?",
    options: ["DoS Attacks", "Malware", "Phishing", "Eavesdropping"],
    correctAnswer: 0,
    explanation:
      "The Common Threats table describes DoS Attacks as flooding servers with requests to make services unavailable.\n\nMalware is described as viruses, worms, ransomware, and spyware, not flooding servers with requests.\n\nPhishing is described as social engineering via fake websites, not flooding servers with requests.\n\nEavesdropping is described as intercepting unencrypted data, not flooding servers with requests.",
  },
  {
    id: "csc312_ch3_082",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which of the following is listed as a common security threat in data communication?",
    options: ["Malware", "Firewalls", "Encryption", "WPA3"],
    correctAnswer: 0,
    explanation:
      "The Common Threats table lists Malware among its four listed threats, alongside phishing, eavesdropping, and DoS attacks.\n\nFirewalls are listed as a security control, not a threat.\n\nEncryption is listed as a security control, not a threat.\n\nWPA3 is listed as a security control for wireless networks, not a threat.",
  },
  {
    id: "csc312_ch3_083",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which security control is described as encoding data so only authorized recipients can read it, with HTTPS using this control?",
    options: [
      "Encryption (SSL/TLS)",
      "Firewalls",
      "Authentication & PKI",
      "Secure Wi-Fi (WPA3)",
    ],
    correctAnswer: 0,
    explanation:
      "The Security Controls table describes Encryption (SSL/TLS) as encoding data so only authorized recipients can read it, noting that HTTPS uses TLS.\n\nFirewalls are described as filtering incoming and outgoing traffic based on rules, not encoding data.\n\nAuthentication & PKI is described as verifying identities with digital certificates, not encoding data.\n\nSecure Wi-Fi (WPA3) is described as an encryption standard for wireless networks specifically, not the general HTTPS encryption described here.",
  },
  {
    id: "csc312_ch3_084",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which security control is described as filtering incoming and outgoing traffic based on security rules?",
    options: [
      "Firewalls",
      "Encryption (SSL/TLS)",
      "Authentication & PKI",
      "Secure Wi-Fi (WPA3)",
    ],
    correctAnswer: 0,
    explanation:
      "The Security Controls table describes Firewalls as filtering incoming and outgoing traffic based on security rules.\n\nEncryption (SSL/TLS) is described as encoding data for authorized recipients, not filtering traffic.\n\nAuthentication & PKI is described as verifying identities with digital certificates, not filtering traffic.\n\nSecure Wi-Fi (WPA3) is described as an encryption standard for wireless networks, not traffic filtering.",
  },
  {
    id: "csc312_ch3_085",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which security control uses digital certificates to verify identities, as part of a Public Key Infrastructure?",
    options: [
      "Authentication & PKI",
      "Firewalls",
      "Encryption (SSL/TLS)",
      "Secure Wi-Fi (WPA3)",
    ],
    correctAnswer: 0,
    explanation:
      "The Security Controls table describes Authentication & PKI as using digital certificates to verify identities, as part of a Public Key Infrastructure.\n\nFirewalls are described as filtering traffic based on rules, not verifying identities with certificates.\n\nEncryption (SSL/TLS) is described as encoding data, not specifically verifying identities with certificates.\n\nSecure Wi-Fi (WPA3) is described as a wireless encryption standard, not certificate-based identity verification.",
  },
  {
    id: "csc312_ch3_086",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which security control is described as a modern encryption standard for wireless networks?",
    options: [
      "Secure Wi-Fi (WPA3)",
      "Firewalls",
      "Authentication & PKI",
      "DoS mitigation",
    ],
    correctAnswer: 0,
    explanation:
      "The Security Controls table describes Secure Wi-Fi (WPA3) as a modern encryption standard for wireless networks.\n\nFirewalls are described as filtering traffic based on rules, not a wireless encryption standard.\n\nAuthentication & PKI is described as certificate-based identity verification, not a wireless encryption standard.\n\nDoS mitigation is not one of the four security controls listed in this table.",
  },
  {
    id: "csc312_ch3_087",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Firewalls and Phishing are both listed among the security controls in data communication.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "This is False. The Security Controls table lists four controls: Encryption (SSL/TLS), Firewalls, Authentication & PKI, and Secure Wi-Fi (WPA3). Phishing is listed under Common Threats, not Security Controls, so it does not belong in this list.",
  },
  {
    id: "csc312_ch3_088",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which of the following is listed as a security control for data communication?",
    options: ["Malware", "Phishing", "All of these", "None of these"],
    correctAnswer: 3,
    explanation:
      "The Security Controls table lists four controls: Encryption (SSL/TLS), Firewalls, Authentication & PKI, and Secure Wi-Fi (WPA3). Malware and Phishing are both listed under Common Threats instead, the opposite category, so neither is a security control, making None of these the right choice.",
  },
  {
    id: "csc312_ch3_089",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "In the Dubai Ports World (DP World) case study, which of the following is listed under Data Capture?",
    options: [
      "RFID tags on trucks capturing vehicle ID automatically",
      "Real-time lookup against booking records",
      "EDI links to customs",
      "An internet portal for tracking container status",
    ],
    correctAnswer: 0,
    explanation:
      "The Data Capture at DP World section lists RFID tags on trucks capturing vehicle ID automatically as one of its four listed points.\n\nReal-time lookup against booking records is listed under Data Management, not Data Capture.\n\nEDI links to customs are listed under Data Communication, not Data Capture.\n\nAn internet portal for tracking containers is listed under Data Communication, not Data Capture.",
  },
  {
    id: "csc312_ch3_090",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "In the DP World case study, which technology is described as reading container and license plate numbers?",
    options: ["OCR system", "RFID readers", "EDI", "Wireless Sensor Networks"],
    correctAnswer: 0,
    explanation:
      "The Data Capture at DP World section states the OCR system reads container and license plate numbers.\n\nRFID readers are described as capturing vehicle ID from truck tags, a separate capture mechanism from OCR.\n\nEDI is described under Data Communication as linking to customs, not reading container numbers.\n\nWireless Sensor Networks are not mentioned in the DP World case study at all.",
  },
  {
    id: "csc312_ch3_091",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "In the DP World case study, data capture at the gate is described as which of the following?",
    options: [
      "Fully automated, with no manual paper forms",
      "Entirely manual, relying on paper forms",
      "Handled exclusively by phone calls",
      "Outsourced to a third-party call center",
    ],
    correctAnswer: 0,
    explanation:
      "The Data Capture at DP World section explicitly states there are no manual paper forms and that entry is fully automated.\n\nThe section explicitly denies manual paper forms, the opposite of this option.\n\nPhone calls are not mentioned anywhere in the DP World data capture description.\n\nA third-party call center is not mentioned anywhere in the DP World data capture description.",
  },
  {
    id: "csc312_ch3_092",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "In the DP World case study, which of the following is listed under Data Management?",
    options: [
      "Captured RFID data stored in a central terminal database",
      "RFID tags on trucks capturing vehicle ID",
      "RFID readers communicating wirelessly to gate systems",
      "An internet portal for tracking container status",
    ],
    correctAnswer: 0,
    explanation:
      "The Data Management at DP World section lists captured RFID data being stored in a central terminal database as one of its four listed points.\n\nRFID tags capturing vehicle ID is listed under Data Capture, not Data Management.\n\nRFID readers communicating wirelessly to gate systems is listed under Data Communication, not Data Management.\n\nAn internet portal for tracking containers is listed under Data Communication, not Data Management.",
  },
  {
    id: "csc312_ch3_093",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "In the DP World case study, why are gate transaction records retained?",
    options: [
      "For audit and billing",
      "To train new employees only",
      "For advertising purposes",
      "To comply with a competitor's request",
    ],
    correctAnswer: 0,
    explanation:
      "The Data Management at DP World section states gate transaction records are retained for audit and billing.\n\nEmployee training is not the stated purpose for retaining these records in this section.\n\nAdvertising is not the stated purpose for retaining these records in this section.\n\nA competitor's request is not the stated purpose for retaining these records in this section.",
  },
  {
    id: "csc312_ch3_094",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "In the DP World case study, which of the following is listed under Data Communication?",
    options: [
      "EDI (Electronic Data Interchange) links to customs",
      "Historical data analyzed for congestion patterns",
      "An OCR system reading license plate numbers",
      "Gate transaction records retained for audit",
    ],
    correctAnswer: 0,
    explanation:
      "The Data Communication at DP World section lists EDI links to customs as one of its four listed points.\n\nHistorical data analyzed for congestion patterns is listed under Data Management, not Data Communication.\n\nAn OCR system reading license plates is listed under Data Capture, not Data Communication.\n\nGate transaction records retained for audit is listed under Data Management, not Data Communication.",
  },
  {
    id: "csc312_ch3_095",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "In the DP World case study, across how many global terminals is data described as being shared?",
    options: ["50+", "5", "500", "It is not shared across terminals"],
    correctAnswer: 0,
    explanation:
      "The Data Communication at DP World section states data is shared across DP World's 50+ global terminals.\n\nFive terminals understates the figure given in this section.\n\nFive hundred overstates the figure given in this section.\n\nThe section explicitly describes data sharing across terminals, contradicting a claim that it is not shared.",
  },
  {
    id: "csc312_ch3_096",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which of the following is listed among the Key Takeaways as a benefit that centralized databases provided over the file environment?",
    options: [
      "Eliminating redundancy and inconsistency",
      "Increasing data isolation between departments",
      "Making programs more tightly tied to file formats",
      "Removing the need for SQL entirely",
    ],
    correctAnswer: 0,
    explanation:
      "The Key Takeaways section states that centralized databases eliminated redundancy and inconsistency, and that SQL and relational models remain the standard.\n\nIncreasing data isolation is a traditional file environment problem, the opposite of what centralized databases achieved.\n\nMaking programs more tied to file formats is a traditional file environment problem, the opposite of what centralized databases achieved.\n\nThe Key Takeaways state SQL and relational models remain the standard, contradicting a claim that SQL was removed.",
  },
  {
    id: "csc312_ch3_097",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Data capture, data management, and data communication are best described as which of the following?",
    options: [
      "Interconnected pillars that always work together in enterprise information systems",
      "Entirely separate concerns that never interact",
      "Optional add-ons that most systems can ignore",
      "Relevant only to manual, paper-based businesses",
    ],
    correctAnswer: 0,
    explanation:
      "The Key Takeaways section states all three pillars are interconnected and always work together in enterprise information systems, giving the example of data captured at a POS terminal traveling over a network and being stored in a database.\n\nThe section explicitly states they always work together, contradicting a claim that they never interact.\n\nThe section describes them as pillars, not optional add-ons that can be ignored.\n\nThe POS terminal example given is a digital, automated context, not a manual, paper-based one.",
  },
  {
    id: "csc312_ch3_098",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Without data communication, which of the following does the Key Takeaways section state would not be possible?",
    options: [
      "E-commerce, cloud computing, and ERP",
      "Keyboard entry of data",
      "Paper-based source documents",
      "Manual filing cabinets",
    ],
    correctAnswer: 0,
    explanation:
      "The Key Takeaways section states that without data communication, there would be no e-commerce, no cloud, and no ERP, calling TCP/IP and the internet the universal infrastructure.\n\nKeyboard entry is a data capture method that does not inherently depend on data communication infrastructure.\n\nPaper-based source documents are a data capture method predating digital communication, not dependent on it.\n\nManual filing cabinets are a traditional file environment concept, not dependent on data communication.",
  },
  {
    id: "csc312_ch3_099",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which of the following is listed under the DP World Data Capture section?",
    options: [
      "The system records arrival time and booking status",
      "EDI links to customs",
      "All of these",
      "None of these",
    ],
    correctAnswer: 0,
    explanation:
      "The Data Capture at DP World section lists the system recording arrival time and booking status as one of its four listed points. EDI links to customs is listed instead under Data Communication, a different pillar, so only the arrival time and booking status point is correct.",
  },
  {
    id: "csc312_ch3_100",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which of the following is listed as a key DBMS capability alongside a data dictionary?",
    options: [
      "Security & access control",
      "Cellular handoff management",
      "Barcode symbology design",
      "Antenna signal boosting",
    ],
    correctAnswer: 0,
    explanation:
      "The Key DBMS Capabilities section lists security & access control among its six listed capabilities, alongside a data dictionary, DDL, DML, SQL, and transaction management.\n\nCellular handoff management is a wireless network concern, not a DBMS capability.\n\nBarcode symbology design is a data capture hardware concern, not a DBMS capability.\n\nAntenna signal boosting is a wireless networking concern, not a DBMS capability.",
  },
];

export default csc312Lecture4Questions;
