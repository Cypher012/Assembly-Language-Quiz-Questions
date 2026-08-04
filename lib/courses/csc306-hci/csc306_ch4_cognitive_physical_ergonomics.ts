import { QuestionV2 } from "@/lib/quiz-types";

const csc306Chapter4Questions: QuestionV2[] = [
  {
    id: "csc306_ch4_001",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "In HCI, the term 'computer' can refer to which of the following?",
    options: [
      "Any technology from desktop computers to large-scale systems, including phones or VCRs",
      "Only devices that have a physical keyboard permanently attached",
      "Only machines that run one single specific operating system version",
      "Only devices that were manufactured within the last two years"
    ],
    correctAnswer: 0,
    explanation: "In HCI, 'computer' refers to any technology ranging from desktop computers to large-scale systems, and devices such as mobile phones or VCRs can also be considered computers.\n\nRequiring a physical keyboard would exclude many devices, such as touchscreen phones, that are still considered computers in this broad sense.\n\nRestricting the term to a single operating system contradicts the broad, technology-agnostic definition given.\n\nRestricting the term to recently manufactured devices contradicts the broad definition, which includes older technologies like VCRs."
  },
  {
    id: "csc306_ch4_002",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "A design team is working on a website. Within the HCI framing of user, computer, and interaction, what does the website itself count as?",
    options: [
      "The computer",
      "The user",
      "The interaction",
      "An organisation factor"
    ],
    correctAnswer: 0,
    explanation: "When discussing the design of a website, the website itself is referred to as 'the computer', illustrating how broadly the term is applied in HCI.\n\nThe user refers to the individual or group of people operating the system, not the website itself.\n\nThe interaction refers to the exchange between the human and the computer, not the website as an artefact.\n\nAn organisation factor refers to things like training, job design, or work organisation, not the identity of the website within the user-computer-interaction framing."
  },
  {
    id: "csc306_ch4_003",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "Why is an appreciation of a user's sensory systems, such as sight, hearing, and touch, described as vital in HCI?",
    options: [
      "Because these senses relay information, and users also form different mental models",
      "Because sensory systems determine the exact price of a software license",
      "Because sensory systems are irrelevant once a system reaches production",
      "Because only one sense can ever be used in any interface design"
    ],
    correctAnswer: 0,
    explanation: "An appreciation of the way people's sensory systems relay information is vital, since different users also form different mental models about their interactions and have different ways of learning and keeping knowledge, along with cultural and national differences.\n\nSoftware license pricing is a business detail unrelated to sensory systems.\n\nSensory systems remain relevant throughout a system's life, not just before production, since users continue to rely on them during use.\n\nInterfaces commonly combine multiple senses, such as sight and hearing together, so restricting design to only one sense misrepresents the point being made."
  },
  {
    id: "csc306_ch4_004",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "In real HCI systems, what must be balanced against what would be ideal for users?",
    options: [
      "The schedule and the budget",
      "The number of installed fonts",
      "The color of the company logo",
      "The number of social media followers"
    ],
    correctAnswer: 0,
    explanation: "In real systems, the schedule and the budget are important, and it is vital to find a balance between what would be ideal for users and what is feasible in reality.\n\nFont count is a minor design detail, not the practical constraint described as needing to be balanced against user needs.\n\nLogo color is a branding detail unrelated to the schedule and budget constraints described.\n\nSocial media follower count is a marketing metric unrelated to the schedule and budget constraints described."
  },
  {
    id: "csc306_ch4_005",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "Which of the following is listed as part of the goals of HCI, in order to produce computer systems with good usability?",
    options: [
      "Understand how people use technology, and put people first",
      "Maximize the total number of advertisements shown to users per session",
      "Minimize the number of user research sessions conducted each quarter",
      "Ensure every system requires a lengthy printed instruction manual"
    ],
    correctAnswer: 0,
    explanation: "The goals of HCI include understanding the factors that determine how people use technology, developing tools and techniques to build suitable systems, achieving efficient, effective, and safe interaction, and putting people first.\n\nMaximizing advertisements is a business monetization goal, not one of the listed goals of HCI.\n\nMinimizing user research contradicts the emphasis on understanding how people use technology, which relies on research.\n\nRequiring a lengthy printed manual contradicts the goal of achieving efficient and effective interaction."
  },
  {
    id: "csc306_ch4_006",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "Which of the following best describes usability, as one of the key concepts in HCI?",
    options: [
      "Making systems easy to learn, effective, and enjoyable to use",
      "Making systems as visually colorful and decorative as technically possible",
      "Making systems compatible with the largest possible number of platforms",
      "Making systems require the fewest possible number of physical components"
    ],
    correctAnswer: 0,
    explanation: "Usability is concerned with making systems easy to learn and use; a usable system is easy to learn, easy to remember how to use, effective to use, efficient to use, safe to use, and enjoyable to use.\n\nVisual colorfulness is a stylistic choice, not part of the definition of usability given here.\n\nProgramming language compatibility is a technical implementation detail unrelated to the definition of usability.\n\nMinimizing physical components is a hardware design detail unrelated to the definition of usability given here."
  },
  {
    id: "csc306_ch4_007",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "The golden principle underlying HCI is that people should have to change the way they use a system in order to fit in with it, rather than the system being designed to match their requirements.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "This statement is false. The golden principle states that people should not have to change the way they use a system to fit in with it; instead, the system should be designed to match their requirements, needs, capabilities, and preferences."
  },
  {
    id: "csc306_ch4_008",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "Which of the following is listed under Organisation Factors as a consideration in HCI system design?",
    options: [
      "Training, job design, and work organisation",
      "Screen brightness and refresh rate",
      "The number of CPU cores in a device",
      "The color palette used in a logo"
    ],
    correctAnswer: 0,
    explanation: "Organisation Factors include training, job design, politics, roles, and work organisation, one of the main categories of factors considered in HCI system design.\n\nScreen brightness and refresh rate are hardware display specifications, not organisation factors.\n\nCPU core count is a hardware specification, not an organisation factor.\n\nLogo color palette is a branding detail, not an organisation factor."
  },
  {
    id: "csc306_ch4_009",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "Which of the following is an accurate description of a trait of a usable system?",
    options: [
      "A usable system is easy to remember how to use",
      "A usable system is safe to use",
      "All of these",
      "None of these"
    ],
    correctAnswer: 2,
    explanation: "Both statements are accurate. Being easy to remember how to use is listed directly as a trait of a usable system, alongside being easy to learn, effective, efficient, safe, and enjoyable to use. Being safe to use is also listed directly among the same set of traits. Since both are correct, the answer is that both apply."
  },
  {
    id: "csc306_ch4_010",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "Which of the following is listed under Environmental Factors as a consideration in HCI system design?",
    options: [
      "Noise, heating, lighting, and ventilation",
      "The programming language used to build the backend",
      "The number of user accounts registered",
      "The version number of the operating system"
    ],
    correctAnswer: 0,
    explanation: "Environmental Factors include noise, heating, lighting, and ventilation, describing the physical surroundings in which a system is used.\n\nBackend programming language is a technical implementation detail, not an environmental factor.\n\nRegistered user account count is a usage metric, not an environmental factor.\n\nOperating system version is a software detail, not an environmental factor."
  },
  {
    id: "csc306_ch4_011",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "Which of the following is listed as one of the main factor categories in HCI, alongside Organisation Factors and Environmental Factors?",
    options: [
      "Health and Safety Factors",
      "Marketing and Advertising Factors",
      "Shareholder Value Factors",
      "Currency Exchange Rate Factors"
    ],
    correctAnswer: 0,
    explanation: "Health and Safety Factors is listed as one of the main factor categories in HCI, alongside Organisation Factors, Environmental Factors, the User, Comfort Factors, and others.\n\nMarketing Factors is not one of the listed main factor categories in this material.\n\nShareholder Factors is not one of the listed main factor categories in this material.\n\nCurrency Exchange Factors is not one of the listed main factor categories in this material."
  },
  {
    id: "csc306_ch4_012",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "Under the User factor category, which of the following is listed alongside cognitive processes and capabilities?",
    options: [
      "Motivation, enjoyment, satisfaction, personality, and experience",
      "The number of browser tabs typically open",
      "The brand of keyboard the user owns",
      "The exact geographic coordinates of the user"
    ],
    correctAnswer: 0,
    explanation: "Under the User factor category, motivation, enjoyment, satisfaction, personality, and experience are listed alongside cognitive processes and capabilities.\n\nBrowser tab count is not a listed User factor in this material.\n\nKeyboard brand is a hardware detail, not a listed User factor.\n\nGeographic coordinates are not a listed User factor in this material."
  },
  {
    id: "csc306_ch4_013",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "Which of the following is listed under Comfort Factors as a consideration in HCI system design?",
    options: [
      "Seating, equipment, and layout",
      "The number of software licenses purchased",
      "The company's annual revenue",
      "The number of programming languages supported"
    ],
    correctAnswer: 0,
    explanation: "Comfort Factors include seating, equipment, and layout, concerning the physical setup a user works within.\n\nSoftware license count is a procurement detail, not a comfort factor.\n\nAnnual revenue is a business metric, not a comfort factor.\n\nSupported programming language count is a technical detail, not a comfort factor."
  },
  {
    id: "csc306_ch4_014",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "Which of the following is listed under User Interface factors as a consideration in HCI system design?",
    options: [
      "Input devices, output devices, and use of colour",
      "The total number of employees currently at the company",
      "The stock market performance of the parent company",
      "The physical square footage of the entire office building"
    ],
    correctAnswer: 0,
    explanation: "User Interface factors include input devices, output devices, dialogue structures, use of colour, icons, commands, navigation, graphics, natural language, user support, and multimedia.\n\nEmployee count is a business detail, not a User Interface factor.\n\nStock market performance is a financial detail, not a User Interface factor.\n\nOffice square footage is a facilities detail, not a User Interface factor."
  },
  {
    id: "csc306_ch4_015",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "Many of the factors considered in HCI system analysis interact with each other, which makes the analysis even more complex.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "This statement is true. The material explicitly states that many of the large number of factors considered in HCI interact with each other, making the analysis and design of a system even more complex."
  },
  {
    id: "csc306_ch4_016",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "Which of the following is listed under Task Factors as a consideration in HCI system design?",
    options: [
      "Easy, complex, or novel tasks, task allocation, monitoring, and skills",
      "The user's preferred beverage while working at their desk",
      "The number of public holidays observed by the company annually",
      "The physical distance between the company's different office branches"
    ],
    correctAnswer: 0,
    explanation: "Task Factors include whether tasks are easy, complex, or novel, along with task allocation, monitoring, and the skills required.\n\nBeverage preference is not a listed Task Factor in this material.\n\nCompany holiday count is not a listed Task Factor in this material.\n\nDistance between office branches is not a listed Task Factor in this material."
  },
  {
    id: "csc306_ch4_017",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "Which of the following is listed under Constraints as a factor in HCI system design?",
    options: [
      "Cost, timescales, budgets, staff, equipment, and buildings",
      "The color scheme selected for a splash screen",
      "The font family used in body text",
      "The number of icons on the home screen"
    ],
    correctAnswer: 0,
    explanation: "Constraints include cost, timescales, budgets, staff, equipment, and buildings, all practical limitations that shape system design.\n\nSplash screen color scheme is a visual design detail, not a listed constraint.\n\nBody text font family is a visual design detail, not a listed constraint.\n\nHome screen icon count is a visual design detail, not a listed constraint."
  },
  {
    id: "csc306_ch4_018",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "Which of the following is listed under System Functionality as a factor in HCI system design?",
    options: [
      "Hardware, software, and application",
      "The user's favorite color",
      "The number of social media platforms a company uses",
      "The average commute time of employees"
    ],
    correctAnswer: 0,
    explanation: "System Functionality includes hardware, software, and application, describing the technical makeup of the system itself.\n\nFavorite color is a personal preference unrelated to system functionality as a design factor.\n\nSocial media platform count is a marketing detail unrelated to system functionality.\n\nEmployee commute time is an unrelated logistical detail, not a system functionality factor."
  },
  {
    id: "csc306_ch4_019",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "Which of the following is listed under Productivity Factors as a consideration in HCI system design?",
    options: [
      "Increase output and quality, decrease costs and errors, increase innovation",
      "Increase the total number of pop-up advertisements shown to users",
      "Decrease the total number of accessibility options made available",
      "Increase the number of mandatory software updates required per day"
    ],
    correctAnswer: 0,
    explanation: "Productivity Factors include increasing output, increasing quality, decreasing costs, decreasing errors, and increasing innovation.\n\nIncreasing pop-up advertisements is not a listed productivity factor and would likely harm usability rather than support it.\n\nDecreasing accessibility options is not a listed productivity factor and contradicts broader HCI goals of inclusivity.\n\nIncreasing mandatory updates per day is not a listed productivity factor in this material."
  },
  {
    id: "csc306_ch4_020",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "Which of the following accurately pairs an HCI factor category with an example listed under it?",
    options: [
      "Task Factors include seating and equipment layout",
      "Constraints include the number of installed browser extensions",
      "All of these",
      "None of these"
    ],
    correctAnswer: 3,
    explanation: "Neither pairing is accurate. Seating and equipment layout are instead listed under Comfort Factors, not Task Factors, which concern task complexity, allocation, monitoring, and skills. Constraints instead include cost, timescales, budgets, staff, equipment, and buildings, not browser extension counts, which are not mentioned anywhere. Since both pairings are inaccurate, none of these applies."
  },
  {
    id: "csc306_ch4_021",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "Which discipline contributing to HCI is associated with software design, development and maintenance, prototyping tools, and graphics?",
    options: ["Computer Science", "Social Psychology", "Linguistics", "Ergonomics/Human Factors"],
    correctAnswer: 0,
    explanation: "Computer Science is associated with technology, software design, development, and maintenance, User Interface Management Systems and Development Environments, prototyping tools, and graphics.\n\nSocial Psychology is instead associated with social and organizational structures, not software development.\n\nLinguistics is instead associated with natural language interfaces, not general software development and prototyping tools.\n\nErgonomics/Human Factors is instead associated with hardware design and display readability, not software development and prototyping tools."
  },
  {
    id: "csc306_ch4_022",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "Which discipline contributing to HCI is associated with information processing, capabilities, limitations, cooperative working, and performance prediction?",
    options: ["Cognitive Psychology", "Computer Science", "Artificial Intelligence", "Engineering & Design"],
    correctAnswer: 0,
    explanation: "Cognitive Psychology is associated with information processing, capabilities, limitations, cooperative working, and performance prediction.\n\nComputer Science is instead associated with software development and prototyping tools, not information processing capabilities and limitations.\n\nArtificial Intelligence is instead associated with intelligent software, not general information processing capabilities and limitations.\n\nEngineering & Design is instead associated with graphic design and engineering principles, not information processing and performance prediction."
  },
  {
    id: "csc306_ch4_023",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "Which discipline contributing to HCI is associated with social and organizational structures?",
    options: ["Social Psychology", "Cognitive Psychology", "Linguistics", "Computer Science"],
    correctAnswer: 0,
    explanation: "Social Psychology is associated with social and organizational structures, a distinct contribution from the individual mental focus of cognitive psychology.\n\nCognitive Psychology is instead associated with individual information processing, capabilities, and limitations, not social or organizational structures.\n\nLinguistics is instead associated with natural language interfaces, not social and organizational structures.\n\nComputer Science is instead associated with software development, not social and organizational structures."
  },
  {
    id: "csc306_ch4_024",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "Which discipline contributing to HCI is associated with hardware design and display readability?",
    options: ["Ergonomics/Human Factors", "Social Psychology", "Artificial Intelligence", "Engineering & Design"],
    correctAnswer: 0,
    explanation: "Ergonomics/Human Factors is associated with hardware design and display readability, contributing the physical and perceptual optimization side of HCI.\n\nSocial Psychology is instead associated with social and organizational structures, not hardware design.\n\nArtificial Intelligence is instead associated with intelligent software, not hardware design and display readability.\n\nEngineering & Design is instead associated with graphic design and engineering principles broadly, not specifically display readability as named here."
  },
  {
    id: "csc306_ch4_025",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "Astrology and Culinary Arts are listed among the disciplines contributing to HCI, alongside Artificial Intelligence.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "This statement is false. Artificial Intelligence, contributing intelligent software, is listed among the disciplines contributing to HCI, but alongside disciplines such as Linguistics and Engineering & Design, not Astrology or Culinary Arts, which are not mentioned anywhere in this material."
  },
  {
    id: "csc306_ch4_026",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "Which discipline contributing to HCI is associated specifically with natural language interfaces?",
    options: ["Linguistics", "Social Psychology", "Ergonomics/Human Factors", "Computer Science"],
    correctAnswer: 0,
    explanation: "Linguistics is associated specifically with natural language interfaces, contributing an understanding of how people use language to interact with systems.\n\nSocial Psychology is instead associated with social and organizational structures, not natural language interfaces.\n\nErgonomics/Human Factors is instead associated with hardware design and display readability, not natural language interfaces.\n\nComputer Science is instead associated with software development and prototyping tools, not specifically natural language interfaces."
  },
  {
    id: "csc306_ch4_027",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "Which discipline contributing to HCI is associated with intelligent software?",
    options: ["Artificial Intelligence", "Linguistics", "Cognitive Psychology", "Social Psychology"],
    correctAnswer: 0,
    explanation: "Artificial Intelligence is associated with intelligent software, one of the disciplines contributing to the development of HCI.\n\nLinguistics is instead associated with natural language interfaces specifically, a related but distinct contribution from general intelligent software.\n\nCognitive Psychology is instead associated with information processing and performance prediction, not building intelligent software itself.\n\nSocial Psychology is instead associated with social and organizational structures, not intelligent software."
  },
  {
    id: "csc306_ch4_028",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "Which discipline contributing to HCI is associated with graphic design and engineering principles?",
    options: ["Engineering & Design", "Artificial Intelligence", "Cognitive Psychology", "Linguistics"],
    correctAnswer: 0,
    explanation: "Engineering & Design is associated with graphic design and engineering principles, contributing the visual and structural design aspects of HCI.\n\nArtificial Intelligence is instead associated with intelligent software, not graphic design and engineering principles.\n\nCognitive Psychology is instead associated with information processing and performance prediction, not graphic design principles.\n\nLinguistics is instead associated with natural language interfaces, not graphic design and engineering principles."
  },
  {
    id: "csc306_ch4_029",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "What do the acronyms UIMS and UIDE stand for in the context of disciplines contributing to HCI?",
    options: [
      "User Interface Management Systems and User Interface Development Environments",
      "Universal Internet Messaging Standard and User Input Design Engine",
      "User Identity Management System and User Input Data Encryption",
      "Unified Interface Modeling Software and User Interaction Design Engineering"
    ],
    correctAnswer: 0,
    explanation: "UIMS and UIDE stand for User Interface Management Systems and User Interface Development Environments, listed as contributions from Computer Science alongside prototyping tools.\n\nUniversal Internet Messaging Standard and User Input Design Engine is not the correct expansion of these acronyms.\n\nUser Identity Management System and User Input Data Encryption is not the correct expansion of these acronyms.\n\nUnified Interface Modeling Software and User Interaction Design Engineering is not the correct expansion of these acronyms."
  },
  {
    id: "csc306_ch4_030",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "Which of the following is an accurate pairing of a discipline with its contribution to HCI?",
    options: [
      "Cognitive Psychology contributes an understanding of performance prediction",
      "Social Psychology contributes hardware design and display readability",
      "All of these",
      "None of these"
    ],
    correctAnswer: 0,
    explanation: "Cognitive Psychology contributing an understanding of performance prediction is stated directly, alongside information processing, capabilities, limitations, and cooperative working. Hardware design and display readability are instead contributed by Ergonomics/Human Factors, not Social Psychology, which contributes social and organizational structures. Since only the Cognitive Psychology pairing is accurate, that is the correct answer."
  },
  {
    id: "csc306_ch4_031",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "What is the golden rule of ergonomics in HCI?",
    options: [
      "Design the system to fit the human, not the other way around",
      "Design the human to fit the system, through extensive user training",
      "Design every system identically, regardless of the specific user",
      "Design systems exclusively around whatever hardware is cheapest to produce"
    ],
    correctAnswer: 0,
    explanation: "The golden rule of ergonomics in HCI is to design the system to fit the human, rather than forcing the human to alter their body or mind to fit the system.\n\nDesigning the human to fit the system through training reverses the golden rule, which places the burden of adaptation on the system, not the person.\n\nDesigning every system identically ignores the human variability that ergonomics is meant to accommodate.\n\nDesigning exclusively around the cheapest hardware is a cost constraint, not the golden rule of ergonomics described here."
  },
  {
    id: "csc306_ch4_032",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "In HCI, human beings are described as 'the bottleneck.' What does this framing refer to?",
    options: [
      "Technology is fast, but human bodies tire and brains get overwhelmed",
      "Computers are always significantly slower than the humans operating them",
      "Human beings are completely and physically incapable of using modern technology",
      "Bottlenecks are said to only occur in network infrastructure, never cognition"
    ],
    correctAnswer: 0,
    explanation: "Human beings are described as the bottleneck because technology is incredibly fast, but human bodies get tired and human brains get overwhelmed, making human limitations the limiting factor in system performance.\n\nComputers being slower than humans is the opposite of the point being made, which is that technology outpaces human capability.\n\nHumans are not described as physically incapable of using technology; rather, they have limits that must be respected, not an inability to use it at all.\n\nThe bottleneck framing specifically applies to human cognitive and physical limits, not network infrastructure."
  },
  {
    id: "csc306_ch4_033",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "What consequences are described as resulting from ignoring ergonomics in system design?",
    options: [
      "Physical pain, mental exhaustion, catastrophic workplace errors, and product abandonment",
      "A permanent increase in a company's overall stock valuation",
      "An automatic reduction in overall software development time and cost",
      "A guaranteed improvement in server response speed and reliability"
    ],
    correctAnswer: 0,
    explanation: "Ignoring ergonomics is described as leading to systems that cause physical pain, mental exhaustion, catastrophic workplace errors, and product abandonment.\n\nStock valuation increases are not a described consequence of ignoring ergonomics; the described consequences are negative, not positive business outcomes.\n\nReduced development time is not a described consequence of ignoring ergonomics in this material.\n\nImproved server response speed is unrelated to the human-centered consequences of ignoring ergonomics described here."
  },
  {
    id: "csc306_ch4_034",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "Ergonomics is described as being split into which two major pillars to bridge the gap between fast technology and limited human capacity?",
    options: [
      "Physical Ergonomics for the body, and Cognitive Ergonomics for the mind",
      "Hardware Ergonomics and Software Ergonomics design guidelines",
      "Visual Ergonomics and Auditory Ergonomics design guidelines",
      "Individual Ergonomics and Organizational Ergonomics design guidelines"
    ],
    correctAnswer: 0,
    explanation: "Ergonomics is split into two massive pillars: Physical Ergonomics, designing for the body, and Cognitive Ergonomics, designing for the mind.\n\nHardware Ergonomics and Software Ergonomics is not the pairing of pillars named in this material.\n\nVisual Ergonomics and Auditory Ergonomics is not the pairing of pillars named in this material.\n\nIndividual Ergonomics and Organizational Ergonomics is not the pairing of pillars named in this material."
  },
  {
    id: "csc306_ch4_035",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "Which of the following best describes cognitive ergonomics?",
    options: [
      "How software accommodates human mental processes and psychological limits",
      "How hardware is manufactured to withstand physical wear and tear",
      "How marketing teams decide on a product's total advertising budget",
      "How a company selects the location of its office building"
    ],
    correctAnswer: 0,
    explanation: "Cognitive ergonomics is about how software accommodates human mental processes, looking at psychological limitations such as memory, attention, perception, and decision-making, ensuring the interface doesn't cause mental burnout.\n\nHardware manufacturing durability is a physical engineering concern unrelated to cognitive ergonomics.\n\nAdvertising budget decisions are a marketing concern unrelated to cognitive ergonomics.\n\nOffice location selection is a business facilities concern unrelated to cognitive ergonomics."
  },
  {
    id: "csc306_ch4_036",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "What happens when software design ignores cognitive ergonomics?",
    options: [
      "User frustration, high error rates, and system abandonment",
      "A guaranteed and permanent increase in overall software sales",
      "An automatic reduction in monthly server hosting costs",
      "A permanent improvement in overall device battery life"
    ],
    correctAnswer: 0,
    explanation: "Ignoring cognitive ergonomics in software design leads to user frustration, high error rates, and system abandonment caused by mental exhaustion and catastrophic workplace errors.\n\nIncreased software sales is not a described consequence of ignoring cognitive ergonomics; the described consequences are negative for the user and the product.\n\nReduced hosting costs is unrelated to the human-centered consequences of ignoring cognitive ergonomics.\n\nImproved battery life is unrelated to the cognitive consequences of poor interface design described here."
  },
  {
    id: "csc306_ch4_037",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "When designing interfaces, what metaphor is used to describe the relationship being built between the computer and the human user?",
    options: [
      "Building a bridge between the computer's silicon processor and the human brain",
      "Building a wall to separate the user from the underlying system entirely",
      "Building a warehouse to store as much user data as possible",
      "Building a highway exclusively for network data packets"
    ],
    correctAnswer: 0,
    explanation: "Designing interfaces is described as building a bridge between two processors: the silicon processor inside the computer and the biological processor inside the human skull.\n\nBuilding a wall to separate the user from the system contradicts the bridge metaphor, which is about connecting the two, not isolating them.\n\nA warehouse for data storage is unrelated to the cognitive bridge metaphor being described.\n\nA highway for network packets is a networking metaphor unrelated to the cognitive processor bridge described here."
  },
  {
    id: "csc306_ch4_038",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "Under the core focus areas of cognitive ergonomics, what does 'Mental Workload' aim to prevent when an interface displays too much data at once?",
    options: [
      "Cognitive overload, where the user's brain freezes up",
      "Server overload, where the entire backend crashes",
      "Network overload, where data packets are dropped",
      "Battery overload, where the device overheats quickly"
    ],
    correctAnswer: 0,
    explanation: "Mental Workload as a core focus area aims to prevent cognitive overload, since if an interface displays too much data at once, the user's brain freezes.\n\nServer overload is a backend infrastructure concern, not the cognitive concern described under Mental Workload.\n\nNetwork overload concerns data transmission, not the user's cognitive processing.\n\nBattery overload concerns device hardware, not the user's cognitive processing described under Mental Workload."
  },
  {
    id: "csc306_ch4_039",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "Under the core focus areas of cognitive ergonomics, why does good design rely on recognition rather than recall when working within human memory constraints?",
    options: [
      "Because short-term memory can only hold about 7 plus or minus 2 chunks",
      "Because recall is always much faster than recognition for every task",
      "Because users always prefer typing commands over selecting from a menu",
      "Because memory constraints only apply to users over the age of sixty"
    ],
    correctAnswer: 0,
    explanation: "Memory Constraints notes that human short-term memory can only hold about 7 plus or minus 2 chunks of information at a time, so good design relies on recognition rather than recall, such as using a visible menu instead of requiring memorized command lines.\n\nRecall being faster than recognition contradicts the stated reasoning, which favors recognition specifically because recall is harder.\n\nUsers generally find typing memorized commands harder than selecting visible options, the opposite of the described preference.\n\nMemory constraints are described as a general human limitation, not one restricted to a specific age group."
  },
  {
    id: "csc306_ch4_040",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "Under the core focus areas of cognitive ergonomics, what does the Decision Making focus area state about the number of choices given to a user?",
    options: [
      "The more choices given, the longer it takes to decide",
      "The number of choices given has no measurable effect on decision time",
      "Fewer choices always take longer to decide between than many choices",
      "Decision time is determined solely by the user's internet connection speed"
    ],
    correctAnswer: 0,
    explanation: "The Decision Making focus area states that the more choices given to a user, the longer it takes them to make a decision, pushing cognitive ergonomics toward clean, minimalist designs that guide the user smoothly.\n\nClaiming no measurable effect contradicts the entire premise of this focus area, which is built around choice count affecting decision time.\n\nClaiming fewer choices always take longer reverses the actual relationship described, where more choices increase decision time.\n\nInternet connection speed is a network factor unrelated to the cognitive decision-making process described here."
  },
  {
    id: "csc306_ch4_041",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "In the mathematical expression of Hick's Law, T = a + b log2(n + 1), what does T represent?",
    options: [
      "The total reaction time",
      "The total number of pixels on screen",
      "The temperature of the device's processor",
      "The transfer rate of a network connection"
    ],
    correctAnswer: 0,
    explanation: "In Hick's Law, T represents the total reaction time, the outcome the formula is used to predict based on the number of choices presented.\n\nPixel count is a display specification unrelated to what T represents in Hick's Law.\n\nProcessor temperature is a hardware measurement unrelated to what T represents in Hick's Law.\n\nNetwork transfer rate is a networking measurement unrelated to what T represents in Hick's Law."
  },
  {
    id: "csc306_ch4_042",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "In the mathematical expression of Hick's Law, T = a + b log2(n + 1), what does n represent?",
    options: [
      "The number of equally probable choices",
      "The number of users currently online",
      "The number of pixels in a single icon",
      "The number of software updates released per year"
    ],
    correctAnswer: 0,
    explanation: "In Hick's Law, n represents the number of equally probable choices presented to the user, the key variable driving the logarithmic increase in reaction time.\n\nCurrent online user count is an unrelated system metric, not what n represents in Hick's Law.\n\nIcon pixel count is a display detail unrelated to what n represents in Hick's Law.\n\nAnnual software update count is unrelated to what n represents in Hick's Law."
  },
  {
    id: "csc306_ch4_043",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "In the mathematical expression of Hick's Law, what do the constants a and b represent?",
    options: [
      "Empirical constants representing cognitive processing speed",
      "The exact screen resolution of the user's device",
      "The total cost of developing the software",
      "The number of programming languages used in the project"
    ],
    correctAnswer: 0,
    explanation: "In Hick's Law, a and b are empirical constants representing cognitive processing speed, calibrated from experimental data rather than derived from a single fixed value.\n\nScreen resolution is a display specification unrelated to the empirical constants in Hick's Law.\n\nDevelopment cost is a business detail unrelated to the empirical constants in Hick's Law.\n\nProgramming language count is a technical detail unrelated to the empirical constants in Hick's Law."
  },
  {
    id: "csc306_ch4_044",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "What design implication does Hick's Law suggest for handling a large number of menu options?",
    options: [
      "Utilize progressive disclosure, hierarchical categorization, or multi-step wizards rather than a massive, flat menu",
      "Present every possible option in a single flat menu with no categorization at all",
      "Remove all menus entirely and require users to memorize every command",
      "Randomize the order of menu options every time the menu opens"
    ],
    correctAnswer: 0,
    explanation: "Hick's Law's design implication is to avoid overwhelming users with massive, flat menus, instead utilizing progressive disclosure, hierarchical categorization, or multi-step wizards to drastically minimize choice selection times.\n\nA single flat menu with no categorization is exactly the design Hick's Law warns against, since it maximizes the number of simultaneous choices.\n\nRemoving menus and requiring memorized commands would increase reliance on recall, working against the recognition-over-recall principle described elsewhere.\n\nRandomizing menu order would increase decision time and cognitive load, contradicting the goal of guiding users smoothly."
  },
  {
    id: "csc306_ch4_045",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "Which of the following best describes Fitts's Law?",
    options: [
      "A model predicting movement time to a target based on distance and size",
      "A model predicting how many colors a user can distinguish on a screen",
      "A model predicting the exact battery life of a mobile device",
      "A model predicting the number of errors a server will generate per day"
    ],
    correctAnswer: 0,
    explanation: "Fitts's Law is a biomechanical and cognitive model predicting the time required to rapidly move to a target area based on the distance to the target and the size of the target.\n\nColor distinguishability is addressed under Gestalt and color vision limitations, not Fitts's Law.\n\nBattery life prediction is a hardware concern unrelated to Fitts's Law's focus on movement time.\n\nServer error rate is a backend reliability concern unrelated to Fitts's Law's focus on physical target acquisition."
  },
  {
    id: "csc306_ch4_046",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "In the Shannon formulation of Fitts's Law, what does MT represent?",
    options: [
      "The Movement Time to acquire the target",
      "The Maximum Throughput of a data connection",
      "The Memory Threshold of working memory",
      "The Minimum Tolerance of a touch sensor"
    ],
    correctAnswer: 0,
    explanation: "In the Shannon formulation of Fitts's Law, MT represents the Movement Time to acquire the target, the outcome the formula predicts based on distance and target width.\n\nMaximum Throughput is a networking term unrelated to what MT represents in Fitts's Law.\n\nMemory Threshold is unrelated to what MT represents in Fitts's Law, which concerns physical movement, not memory capacity.\n\nMinimum Tolerance of a touch sensor is a hardware specification unrelated to what MT represents in Fitts's Law."
  },
  {
    id: "csc306_ch4_047",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "In the Shannon formulation of Fitts's Law, what does D represent?",
    options: [
      "The Distance, or amplitude, to the center of the target",
      "The total Duration of a typical user's browsing session",
      "The Density of pixels displayed on the screen",
      "The Delay before a tooltip appears on hover"
    ],
    correctAnswer: 0,
    explanation: "In the Shannon formulation of Fitts's Law, D represents the Distance, or amplitude, to the center of the target, one of the two key variables in the formula alongside target width.\n\nSession duration is an unrelated usage metric, not what D represents in Fitts's Law.\n\nPixel density is a display specification unrelated to what D represents in Fitts's Law.\n\nTooltip delay is an unrelated interface timing detail, not what D represents in Fitts's Law."
  },
  {
    id: "csc306_ch4_048",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "In the Shannon formulation of Fitts's Law, what does W represent?",
    options: [
      "The Width of the target along the axis of motion",
      "The total Weight of the physical device itself",
      "The Wattage consumed by the display panel",
      "The total number of Windows open on screen"
    ],
    correctAnswer: 0,
    explanation: "In the Shannon formulation of Fitts's Law, W represents the Width of the target along the axis of motion, the second key variable alongside distance.\n\nDevice weight is a physical hardware specification unrelated to what W represents in Fitts's Law.\n\nDisplay wattage is a power consumption detail unrelated to what W represents in Fitts's Law.\n\nOpen window count is an unrelated interface state, not what W represents in Fitts's Law."
  },
  {
    id: "csc306_ch4_049",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "In Fitts's Law, the term log2(D/W + 1) is known by which name?",
    options: [
      "The Index of Difficulty",
      "The Coefficient of Friction",
      "The Rate of Transmission",
      "The Threshold of Perception"
    ],
    correctAnswer: 0,
    explanation: "The term log2(D/W + 1) in Fitts's Law is known as the Index of Difficulty, combining distance and target width into a single measure of how hard a target is to acquire.\n\nCoefficient of Friction is a physics term unrelated to Fitts's Law terminology.\n\nRate of Transmission is a networking term unrelated to Fitts's Law terminology.\n\nThreshold of Perception is a sensory term unrelated to the specific Index of Difficulty term in Fitts's Law."
  },
  {
    id: "csc306_ch4_050",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "Based on Fitts's Law, what design implication follows for a crucial UI element such as a 'Submit' button?",
    options: [
      "It should be large, and placed close to the cursor",
      "It should be as small as possible to save screen space",
      "It should be placed as far from the user's cursor as possible",
      "It should be hidden until the user searches for it"
    ],
    correctAnswer: 0,
    explanation: "Fitts's Law implies that crucial UI elements like a Submit button should be large, meaning a large W, and placed close to the user's expected cursor or hand placement, meaning a small D, reducing movement time.\n\nMaking the button as small as possible would increase the Index of Difficulty and movement time, the opposite of the recommended implication.\n\nPlacing the button far from the cursor would increase distance and movement time, the opposite of the recommended implication.\n\nHiding the button until searched for contradicts the goal of minimizing movement time to acquire a crucial target."
  },
  {
    id: "csc306_ch4_051",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "Why do elements placed at the edge of a screen or in a corner require less precision to acquire, under Fitts's Law?",
    options: [
      "The edge acts as an infinite boundary, effectively maximizing the target's width",
      "Edges and corners are always rendered in a larger font size automatically",
      "Corners contain fewer pixels than the center of the screen",
      "The operating system disables precision requirements near edges"
    ],
    correctAnswer: 0,
    explanation: "Elements at the edge of a screen or in a corner require less precision because the edge acts as an infinite boundary, effectively maximizing the target's width, which reduces the Index of Difficulty.\n\nFont size is not automatically increased at edges or corners; the reduced precision requirement comes from the boundary effect, not typography.\n\nCorners do not inherently contain fewer pixels in a way that explains the reduced precision requirement described.\n\nOperating systems do not disable precision requirements near edges; the effect comes from the physical boundary stopping cursor movement, described by Fitts's Law itself."
  },
  {
    id: "csc306_ch4_052",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "Which of the following accurately describes a mathematical law used in cognitive ergonomics?",
    options: [
      "Hick's Law relates decision time to the number of choices presented",
      "Fitts's Law relates movement time to the distance and width of a target",
      "All of these",
      "None of these"
    ],
    correctAnswer: 2,
    explanation: "Both statements are accurate. Hick's Law relates decision time to the number of choices presented, expressed as T = a + b log2(n + 1). Fitts's Law relates movement time to the distance and width of a target, expressed in its Shannon formulation using D and W. Since both are correct, the answer is that both apply."
  },
  {
    id: "csc306_ch4_053",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "The Human Information Processing (HIP) Model divides human cognition into which three interacting subsystems?",
    options: [
      "The Perceptual System, the Cognitive System, and the Motor System",
      "The Input System, the Storage System, and the Output System",
      "The Visual System, the Auditory System, and the Tactile System",
      "The Short-Term System, the Long-Term System, and the Sensory System"
    ],
    correctAnswer: 0,
    explanation: "The HIP Model divides human cognition into three interacting subsystems: the Perceptual System, the Cognitive System, and the Motor System, viewing the human mind similarly to a computer system.\n\nInput, Storage, and Output describes a general computer processing model, not the specific three named HIP subsystems.\n\nVisual, Auditory, and Tactile describes sensory channels, not the three named HIP subsystems.\n\nShort-Term, Long-Term, and Sensory describes memory types, not the three named HIP subsystems."
  },
  {
    id: "csc306_ch4_054",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "In the HIP Model, which subsystem takes in data from the outside world through the eyes, ears, and touch, but can easily be overwhelmed by too much stimuli?",
    options: [
      "The Perceptual System",
      "The Cognitive System",
      "The Motor System",
      "The Organizational System"
    ],
    correctAnswer: 0,
    explanation: "The Perceptual System takes in data from the outside world through the eyes, ears, and touch, and while extremely fast, it can easily be overwhelmed by too much stimuli, such as a website with 50 flashing ads.\n\nThe Cognitive System instead processes information, accesses memory, and makes decisions, acting as the brain's CPU, rather than taking in raw sensory data.\n\nThe Motor System instead executes the physical response, such as moving a hand to click a mouse, not sensing the outside world.\n\nThe Organizational System is not one of the three named HIP subsystems in this material."
  },
  {
    id: "csc306_ch4_055",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "In the HIP Model, which subsystem is described as the 'CPU' of the brain, processing information, accessing memory, and making decisions?",
    options: [
      "The Cognitive System",
      "The Perceptual System",
      "The Motor System",
      "The Ergonomic System"
    ],
    correctAnswer: 0,
    explanation: "The Cognitive System is described as the CPU of the brain, processing information, accessing memory, and making decisions, sitting between perception and physical response.\n\nThe Perceptual System instead takes in data from the outside world, a preceding stage rather than the processing and decision-making stage.\n\nThe Motor System instead executes the physical response after a decision has been made, not the processing itself.\n\nThe Ergonomic System is not one of the three named HIP subsystems in this material."
  },
  {
    id: "csc306_ch4_056",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "In the HIP Model, which subsystem executes the physical response based on the cognitive system's decision, such as moving a hand to click a mouse?",
    options: [
      "The Motor System",
      "The Perceptual System",
      "The Cognitive System",
      "The Sensory System"
    ],
    correctAnswer: 0,
    explanation: "The Motor System executes the physical response based on the cognitive system's decision, such as moving the hand to click the mouse, completing the perception-cognition-action cycle.\n\nThe Perceptual System instead takes in sensory data, a stage that precedes the physical response rather than executing it.\n\nThe Cognitive System instead processes information and makes decisions, the stage that precedes execution rather than performing the physical action itself.\n\nThe Sensory System is not one of the three named HIP subsystems in this material."
  },
  {
    id: "csc306_ch4_057",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "HCI researchers view the human mind similarly to a computer system, dividing cognition into the Perceptual, Cognitive, and Motor subsystems of the HIP Model.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "This statement is true. The Human Information Processing Model views the human mind similarly to a computer system, dividing human cognition into three interacting subsystems: the Perceptual System, the Cognitive System, and the Motor System."
  },
  {
    id: "csc306_ch4_058",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "Phone numbers are commonly written as +1 (800) 555-0199 instead of as one long unbroken string of digits. What cognitive principle does this formatting apply?",
    options: [
      "Chunking, where hyphens and spaces group digits for the user",
      "The Index of Difficulty term from the Fitts's Law formula",
      "The Motor System subsystem of the HIP Model",
      "Germane Cognitive Load from Cognitive Load Theory"
    ],
    correctAnswer: 0,
    explanation: "This applies chunking, grouping information to bypass Miller's Law; the hyphens and spaces in a formatted phone number do the cognitive work of grouping digits into memorable chunks for the user.\n\nThe Index of Difficulty concerns physical target acquisition distance and size, not the formatting of digit sequences.\n\nThe Motor System concerns executing a physical response, not the mental grouping of digits into chunks.\n\nGermane Cognitive Load concerns the beneficial effort of learning a system's schema, not the formatting of a phone number into chunks."
  },
  {
    id: "csc306_ch4_059",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "Why is it easier for a user to recognize and click a 'Print' icon than to recall and type a command like 'lp -d printer_name file.txt' in a terminal?",
    options: [
      "Recognition of something familiar is easier than recalling it from memory",
      "Icons always load faster than text-based commands on any system",
      "Terminal commands are physically impossible to type accurately",
      "Recall is always easier than recognition for expert computer users"
    ],
    correctAnswer: 0,
    explanation: "It is much easier for humans to recognize something familiar than to recall it from memory, which is the entire reason Graphical User Interfaces were invented, illustrated by recognizing a Print icon versus recalling an exact terminal command.\n\nLoading speed is a technical performance detail, not the cognitive reason recognition is easier than recall.\n\nTerminal commands are not physically impossible to type; they are simply harder to recall accurately than recognizing a visible icon.\n\nClaiming recall is always easier than recognition, even for experts, contradicts the general principle that recognition is the easier cognitive process."
  },
  {
    id: "csc306_ch4_060",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "Under the Gestalt Law of Proximity, why must a 'Submit' button be placed physically close to the form fields it applies to?",
    options: [
      "Objects placed close together are perceived as a related group",
      "Objects placed close together always render at a higher resolution",
      "Proximity determines the exact color of an interface element",
      "Proximity has no effect on how users visually group elements"
    ],
    correctAnswer: 0,
    explanation: "The Law of Proximity states that objects placed close together are perceived as a related group, which is why a Submit button must be physically close to the form fields it applies to.\n\nProximity does not affect rendering resolution; that is a display specification unrelated to visual grouping.\n\nProximity does not determine element color; color is a separate visual design choice from spatial grouping.\n\nProximity is specifically described as affecting how users visually group elements, the opposite of having no effect."
  },
  {
    id: "csc306_ch4_061",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "Under the Gestalt Law of Similarity, if one clickable link on a page is styled blue, what should follow for consistency?",
    options: [
      "All other clickable links should also be styled blue for consistency",
      "All other links should be styled in a completely different color to stand out",
      "No other element on the page should ever use the color blue again",
      "The link's function should change every time the page reloads"
    ],
    correctAnswer: 0,
    explanation: "The Law of Similarity states that objects that look alike are perceived as having the same function, so if one clickable link is blue, all clickable links must be blue for users to correctly perceive them as sharing the same function.\n\nStyling other links in a completely different color would break the perceived similarity that signals shared function, the opposite of what the law recommends.\n\nBanning blue elsewhere on the page is an overly broad and unnecessary restriction not implied by the Law of Similarity.\n\nChanging a link's function on every reload would create an inconsistent, confusing experience, unrelated to the visual grouping principle described."
  },
  {
    id: "csc306_ch4_062",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "Under the Gestalt Law of Continuity, what does the human eye naturally prefer to follow when scanning a screen?",
    options: [
      "Lines, curves, and sequences",
      "Only perfectly straight vertical edges",
      "Random scattered points with no pattern",
      "Only the exact center pixel of the display"
    ],
    correctAnswer: 0,
    explanation: "The Law of Continuity states that the human eye naturally prefers to follow lines, curves, and sequences, which good UI design uses to guide the eye smoothly across the screen without jarring interruptions.\n\nRestricting the eye's preference to only perfectly straight vertical edges is too narrow; the law describes a general preference for lines, curves, and sequences broadly.\n\nRandom scattered points with no pattern is the opposite of what the Law of Continuity describes, which is a preference for continuous, ordered visual paths.\n\nFocusing only on the center pixel misrepresents the law, which concerns following extended paths across a screen, not fixating on a single point."
  },
  {
    id: "csc306_ch4_063",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "Roughly what percentage of men are affected by red-green color blindness?",
    options: ["About 8%", "About 1%", "About 25%", "About 50%"],
    correctAnswer: 0,
    explanation: "About 8% of men are described as red-green colorblind, which is why the HCI rule states that color should never be the only way to convey information.\n\nAbout 1% substantially understates the figure given for red-green color blindness in men.\n\nAbout 25% substantially overstates the figure given for red-green color blindness in men.\n\nAbout 50% vastly overstates the figure given for red-green color blindness in men."
  },
  {
    id: "csc306_ch4_064",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "Because roughly 8% of men are red-green colorblind, what does the HCI rule about color recommend for a success message?",
    options: [
      "It must pair the green box with a checkmark icon, not color alone",
      "It should be displayed exclusively in shades of red",
      "It should rely on color alone, since most users have normal color vision",
      "It should flash rapidly to draw maximum attention"
    ],
    correctAnswer: 0,
    explanation: "The HCI rule states that color should never be the only way to convey information; a success message shouldn't just be a green box, it must be a green box with a checkmark icon added.\n\nDisplaying the message exclusively in red would be an unusual and confusing choice for a success message, unrelated to the color-blindness concern described.\n\nRelying on color alone is exactly what the rule warns against, since a meaningful portion of users cannot reliably distinguish certain colors.\n\nRapid flashing is not the recommended fix for color-blind accessibility; pairing color with an additional cue like an icon is the recommended fix."
  },
  {
    id: "csc306_ch4_065",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "Which of the following accurately describes a Gestalt principle or color guideline used in cognitive ergonomics?",
    options: [
      "The Law of Similarity states that objects that look alike are perceived as sharing the same function",
      "The Law of Proximity states that color should never be used to convey information",
      "All of these",
      "None of these"
    ],
    correctAnswer: 0,
    explanation: "The Law of Similarity stating that objects that look alike are perceived as sharing the same function is stated directly. The rule that color should never be the only way to convey information is instead a separate color vision guideline, not part of the Law of Proximity, which concerns grouping by closeness. Since only the Law of Similarity statement is accurate, that is the correct answer."
  },
  {
    id: "csc306_ch4_066",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "What is described as the goal of cognitive ergonomics, in terms of how an interface should feel to use?",
    options: [
      "To make the software feel intuitive, matching how the brain thinks",
      "To make the software require a certification course before first use",
      "To make the software display as many features as technically possible at once",
      "To make the software change its layout randomly to keep users engaged"
    ],
    correctAnswer: 0,
    explanation: "The goal of cognitive ergonomics is to make the software completely intuitive; a well-designed cognitive interface feels almost invisible because it perfectly matches how the human brain naturally thinks and expects things to work.\n\nRequiring a certification course before use is the opposite of an intuitive, invisible interface, which should require no special training.\n\nDisplaying as many features as possible at once would increase cognitive overload, working against the goal of an intuitive, invisible interface.\n\nRandomly changing layout would undermine the natural, expected experience that makes an interface feel invisible and intuitive."
  },
  {
    id: "csc306_ch4_067",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "Which type of cognitive load is described as the inherent difficulty of a task itself, independent of the interface, such as calculating an insurance premium?",
    options: [
      "Intrinsic Cognitive Load",
      "Extraneous Cognitive Load",
      "Germane Cognitive Load",
      "Perceptual Cognitive Load"
    ],
    correctAnswer: 0,
    explanation: "Intrinsic Cognitive Load is the inherent difficulty of the task itself, independent of the interface, such as calculating an insurance premium or parsing a complex database schema; the designer cannot reduce this load but must protect the user's mental space to handle it.\n\nExtraneous Cognitive Load is instead mental effort wasted on poorly designed interfaces, not the inherent difficulty of the task itself.\n\nGermane Cognitive Load is instead beneficial mental effort spent constructing mental schemas, not the inherent task difficulty.\n\nPerceptual Cognitive Load is not one of the three named types of cognitive load in this material."
  },
  {
    id: "csc306_ch4_068",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "Which type of cognitive load represents mental effort wasted on poorly designed interfaces, such as unclear navigation or chaotic layouts?",
    options: [
      "Extraneous Cognitive Load",
      "Intrinsic Cognitive Load",
      "Germane Cognitive Load",
      "Motor Cognitive Load"
    ],
    correctAnswer: 0,
    explanation: "Extraneous Cognitive Load is mental effort wasted on poorly designed interfaces, representing structural flaws such as unclear navigation, unorganized data, low-contrast fonts, or chaotic layouts that force the brain to work harder just to read the screen.\n\nIntrinsic Cognitive Load is instead the inherent difficulty of the task itself, not effort wasted due to poor design.\n\nGermane Cognitive Load is instead beneficial mental effort spent learning a system, not wasted effort from poor design.\n\nMotor Cognitive Load is not one of the three named types of cognitive load in this material."
  },
  {
    id: "csc306_ch4_069",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "What is the technical fix recommended for reducing Extraneous Cognitive Load caused by structural flaws in a user interface?",
    options: [
      "Applying Gestalt Principles to visually group related information",
      "Increasing the total number of options shown on every screen",
      "Removing all whitespace to fit more content onto the page",
      "Randomizing the page layout on every visit to keep users alert"
    ],
    correctAnswer: 0,
    explanation: "The technical fix for Extraneous Cognitive Load is applying Gestalt Principles of Visual Perception, such as Proximity, Similarity, Continuity, and Closure, to visually group related information and reduce visual search times.\n\nIncreasing the number of options on every screen would increase, not reduce, extraneous load by adding more to process.\n\nRemoving whitespace to cram in more content would likely worsen visual clutter, increasing extraneous load rather than reducing it.\n\nRandomizing layout would prevent users from building a reliable mental model, increasing rather than reducing extraneous cognitive load."
  },
  {
    id: "csc306_ch4_070",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "Which type of cognitive load is described as beneficial, representing the brain power spent constructing mental schemas and processing information deeply to learn a system?",
    options: [
      "Germane Cognitive Load",
      "Intrinsic Cognitive Load",
      "Extraneous Cognitive Load",
      "Sensory Cognitive Load"
    ],
    correctAnswer: 0,
    explanation: "Germane Cognitive Load is beneficial mental effort, representing the brain power spent constructing mental schemas and processing information deeply to learn a system.\n\nIntrinsic Cognitive Load is instead the inherent difficulty of the task itself, a different concept from the beneficial effort of schema-building.\n\nExtraneous Cognitive Load is instead wasted effort caused by poor interface design, the opposite of the beneficial load described here.\n\nSensory Cognitive Load is not one of the three named types of cognitive load in this material."
  },
  {
    id: "csc306_ch4_071",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "What is the technical fix recommended for supporting Germane Cognitive Load, so users can transfer mental schemas from other apps instead of building new ones from scratch?",
    options: [
      "Maintaining strict platform consistency, using standard design tokens and predictable UI patterns",
      "Changing every icon's meaning on a regular weekly schedule",
      "Removing all documentation and onboarding material from the product",
      "Using a completely unique design language for every single screen"
    ],
    correctAnswer: 0,
    explanation: "Supporting Germane Cognitive Load involves maintaining strict platform consistency, using standard design tokens and predictable UI patterns, so users can transfer schemas from other apps instead of building new ones from scratch.\n\nChanging icon meanings regularly would prevent schema transfer and force users to relearn the system, the opposite of supporting germane load.\n\nRemoving documentation and onboarding would not support schema construction; it would instead make learning harder.\n\nUsing a completely unique design language per screen would prevent consistency and schema transfer, working against the recommended fix."
  },
  {
    id: "csc306_ch4_072",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "Cognitive load in interface design is classified into intrinsic, extraneous, and germane types, where only extraneous load is something the designer can meaningfully reduce through better design.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "This statement is true. Intrinsic load is inherent to the task and cannot be reduced by the designer, extraneous load is caused by poor design and can be reduced through fixes like applying Gestalt principles, and germane load is beneficial effort supported through platform consistency rather than eliminated."
  },
  {
    id: "csc306_ch4_073",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "James Reason's GEMS framework, used in cognitive error engineering, stands for which of the following?",
    options: [
      "Generic Error Modelling System",
      "Global Ergonomic Measurement Standard",
      "General Efficiency Management System",
      "Graphical Element Mapping Software"
    ],
    correctAnswer: 0,
    explanation: "GEMS stands for Generic Error Modelling System, developed by James Reason, and is used in cognitive error engineering to categorize human error in interface design.\n\nGlobal Ergonomic Measurement Standard is not the correct expansion of the GEMS acronym in this material.\n\nGeneral Efficiency Management System is not the correct expansion of the GEMS acronym in this material.\n\nGraphical Element Mapping Software is not the correct expansion of the GEMS acronym in this material."
  },
  {
    id: "csc306_ch4_074",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "In cognitive error engineering, human error is described as being rarely random. What is it typically described as instead?",
    options: [
      "A systematic failure of the interface to safeguard human cognitive limits",
      "A purely random event with absolutely no identifiable cause",
      "Always the direct and total fault of the user's intelligence",
      "An unavoidable and inherent cost of using digital technology"
    ],
    correctAnswer: 0,
    explanation: "Human error is described as rarely random; it is typically a systematic failure of the interface to safeguard human cognitive limits, which is why GEMS categorizes errors by their systemic causes.\n\nDescribing error as purely random contradicts the stated view that error is typically systematic rather than random.\n\nBlaming the user's intelligence contradicts the framing of error as an interface failure, not a personal failing of the user.\n\nDescribing error as simply an unavoidable cost avoids the point that specific, fixable interface causes are typically identifiable."
  },
  {
    id: "csc306_ch4_075",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "In the GEMS framework, which error type describes a user who has the correct goal but executes the physical action incorrectly?",
    options: [
      "A Slip", "A Mistake", "A Germane error", "An Intrinsic error"
    ],
    correctAnswer: 0,
    explanation: "A Slip is when the user has the correct goal, but executes the physical action incorrectly, often due to a system issue like buttons placed too close together.\n\nA Mistake is instead when the user executes the action perfectly, but their initial plan or understanding was wrong due to a flawed mental model, a different kind of failure.\n\nGermane is a type of cognitive load, not a GEMS error category.\n\nIntrinsic is also a type of cognitive load, not a GEMS error category."
  },
  {
    id: "csc306_ch4_076",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "In the GEMS framework, what system cause is given as an example of what leads to a Slip?",
    options: [
      "Buttons that are too close together, or touch targets that are too small",
      "A completely blank screen containing no interactive elements whatsoever",
      "A Delete button that permanently purges data without any warning",
      "An interface that displays absolutely no color anywhere at all"
    ],
    correctAnswer: 0,
    explanation: "A system cause of a Slip is buttons being too close together, or touch targets being too small, making it easy to execute the wrong physical action despite having the correct goal.\n\nA completely blank screen is not the described cause of a Slip; the described cause involves cramped or small interactive targets, not the absence of elements.\n\nA misleading Delete button that purges data without warning is instead given as the cause of a Mistake, not a Slip, since it concerns a flawed understanding rather than a physical execution error.\n\nAn interface with no color at all is not the described cause of a Slip in this material."
  },
  {
    id: "csc306_ch4_077",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "Which HCI solution is recommended for reducing Slips caused by small or closely packed touch targets?",
    options: [
      "Increase target padding, and implement undo functionality",
      "Remove all buttons from the interface entirely",
      "Require a written confirmation for every single click",
      "Decrease the spacing between all interactive elements further"
    ],
    correctAnswer: 0,
    explanation: "The HCI solution for Slips is to increase target padding and implement undo functionality, making it harder to hit the wrong target by accident and easier to recover if a Slip does occur.\n\nRemoving all buttons entirely would eliminate necessary functionality rather than fix the underlying spacing problem causing Slips.\n\nRequiring a written confirmation for every click would add significant friction to normal interactions, an excessive response to a spacing problem.\n\nDecreasing spacing further would worsen the problem, since cramped targets are the described cause of Slips in the first place."
  },
  {
    id: "csc306_ch4_078",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "In the GEMS framework, which error type describes a user who executes an action perfectly, but whose initial plan or understanding was wrong due to a flawed mental model?",
    options: [
      "A Mistake", "A Slip", "An Extraneous error", "A Perceptual error"
    ],
    correctAnswer: 0,
    explanation: "A Mistake is when the user executes the action perfectly, but their initial plan or understanding was completely wrong due to a flawed mental model.\n\nA Slip is instead when the user has the correct goal but executes the physical action incorrectly, a different kind of failure from a flawed understanding.\n\nExtraneous is a type of cognitive load, not a GEMS error category.\n\nPerceptual is a subsystem of the HIP Model, not a GEMS error category."
  },
  {
    id: "csc306_ch4_079",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "In the GEMS framework, a 'Delete' button that actually permanently purges a database without warning is given as an example of the system cause of which error type?",
    options: [
      "A Mistake", "A Slip", "Germane Cognitive Load", "Extraneous Cognitive Load"
    ],
    correctAnswer: 0,
    explanation: "A misleading 'Delete' button that permanently purges a database without warning is given as an example of the system cause of a Mistake, since the interface misled the user about what the action would actually do.\n\nA Slip is instead caused by issues like small or closely packed touch targets leading to the wrong physical action, not a misleading label about what an action does.\n\nGermane Cognitive Load concerns beneficial schema-building effort, not a misleading button causing an error.\n\nExtraneous Cognitive Load concerns wasted effort from poor structural design like unclear navigation, a different concept from a specific misleading action label."
  },
  {
    id: "csc306_ch4_080",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "Which HCI solution is recommended for reducing Mistakes caused by a misleading interface, such as a Delete button that behaves unexpectedly?",
    options: [
      "Implement clear dialog confirmations, double-verification patterns, and unambiguous visual cues",
      "Remove all warning messages to streamline the interface",
      "Allow the action to execute immediately with no possibility of review",
      "Hide the true function of the button from the user entirely"
    ],
    correctAnswer: 0,
    explanation: "The HCI solution for Mistakes is to implement clear dialog confirmations, double-verification patterns, and unambiguous visual cues, helping ensure the user's mental model matches what the action will actually do.\n\nRemoving warning messages would worsen the problem, since Mistakes are caused by users not understanding what an action does, which warnings help clarify.\n\nAllowing immediate execution with no review is the opposite of the recommended confirmation-based solution.\n\nHiding the button's true function would deepen the flawed mental model that causes Mistakes, rather than fix it."
  },
  {
    id: "csc306_ch4_081",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "Which of the following accurately distinguishes a Slip from a Mistake in the GEMS framework?",
    options: [
      "A Slip involves a correct goal with incorrect execution, while a Mistake involves a flawed plan despite correct execution",
      "A Slip and a Mistake are simply two different names for the exact same kind of error",
      "All of these",
      "None of these"
    ],
    correctAnswer: 0,
    explanation: "A Slip involving a correct goal with incorrect execution, while a Mistake involves a flawed plan despite correct execution, is stated directly and captures the core distinction between the two error types. Treating them as the same kind of error contradicts this distinction, since they have different causes and require different HCI solutions. Since only the first statement is accurate, that is the correct answer."
  },
  {
    id: "csc306_ch4_082",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "Which of the following best describes physical ergonomics?",
    options: [
      "The tangible, biomechanical side of how the body interacts with hardware",
      "The study of how software algorithms are optimized for speed",
      "The study of consumer purchasing behavior for hardware products",
      "The study of programming language syntax and design"
    ],
    correctAnswer: 0,
    explanation: "Physical ergonomics deals with the tangible, anatomical, and biomechanical side of technology, studying how the human body interacts with physical hardware and workspaces, focusing heavily on comfort, safety, and health.\n\nAlgorithm speed optimization is a computer science concern unrelated to the anatomical and biomechanical focus of physical ergonomics.\n\nConsumer purchasing behavior is a marketing concern unrelated to physical ergonomics.\n\nProgramming language syntax is a software development concern unrelated to physical ergonomics."
  },
  {
    id: "csc306_ch4_083",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "Why should the physical environment in which a system is used be considered in all design?",
    options: [
      "It can influence system acceptance and user health and safety",
      "It has no measurable effect on how a system is used",
      "It only matters for systems used outdoors",
      "It is solely the responsibility of building maintenance staff"
    ],
    correctAnswer: 0,
    explanation: "The physical environment in which a system is used may influence how well it is accepted and even the health and safety of its users, which is why it should be considered in all design.\n\nClaiming no measurable effect directly contradicts the stated influence on acceptance, health, and safety.\n\nRestricting relevance to outdoor systems is not supported; the discussion applies broadly to workstation and device use in general.\n\nTreating environmental design as solely a maintenance concern contradicts the framing that it should be considered as part of system design itself."
  },
  {
    id: "csc306_ch4_084",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "Under the core focus areas of physical ergonomics, what alternative hardware is designed to keep wrists in a natural position and help prevent Repetitive Strain Injuries?",
    options: [
      "Vertical mice or split keyboards",
      "Monitors with higher display resolution",
      "Central processing units that run faster",
      "Hard drives with larger storage capacities"
    ],
    correctAnswer: 0,
    explanation: "Physical ergonomics designs alternative hardware, such as vertical mice or split keyboards, to keep wrists in a natural position and help prevent conditions like Repetitive Strain Injuries and Carpal Tunnel Syndrome caused by long hours of clicking or typing.\n\nHigher resolution monitors address visual clarity, not wrist positioning during typing or clicking.\n\nFaster processing units address computational performance, not physical wrist strain.\n\nLarger hard drive capacity addresses storage, not physical wrist strain during repetitive motions."
  },
  {
    id: "csc306_ch4_085",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "Under the core focus areas of physical ergonomics, what two measures are given for addressing posture and fatigue?",
    options: [
      "Adjusting screen height and choosing spine-supporting chairs",
      "Increasing the font size on every application by default",
      "Requiring users to stand for their entire eight-hour work shift",
      "Disabling all keyboard shortcuts to reduce hand movement entirely"
    ],
    correctAnswer: 0,
    explanation: "Posture and Fatigue is addressed by adjusting screen heights to prevent neck strain, the 'tech neck' phenomenon, and choosing chairs that support the spine.\n\nIncreasing default font size is a visual accessibility measure, not the posture and fatigue measure described here.\n\nRequiring users to stand for an entire shift is not the recommended measure; the material focuses on adjustable heights and supportive chairs, not eliminating sitting entirely.\n\nDisabling keyboard shortcuts is unrelated to posture and fatigue; it would not address screen height or spinal support."
  },
  {
    id: "csc306_ch4_086",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "In mobile and interaction design, what does the term 'Thumb Zone' refer to?",
    options: [
      "The area of a screen reachable with one thumb without stretching",
      "The exact pixel dimensions of a smartphone's entire display screen",
      "The area of a screen reserved exclusively for advertisements",
      "The battery percentage at which a phone begins power-saving mode"
    ],
    correctAnswer: 0,
    explanation: "The Thumb Zone is the area of a smartphone screen that a user can easily reach with one thumb without stretching or dropping the phone, a key consideration in mobile physical ergonomics.\n\nScreen pixel dimensions are a display specification, not the Thumb Zone concept described here.\n\nAdvertisement placement is a business and layout decision unrelated to the Thumb Zone concept.\n\nBattery power-saving thresholds are a power management detail unrelated to the Thumb Zone concept."
  },
  {
    id: "csc306_ch4_087",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "When a computer interface or workstation is poorly designed, what does it cause to the body that accumulates over time?",
    options: [
      "Micro-traumas", "Immediate permanent paralysis", "Instant hearing loss", "Sudden vision correction"
    ],
    correctAnswer: 0,
    explanation: "A poorly designed computer interface or workstation causes micro-traumas to the body that accumulate over time, eventually leading to conditions like RSI, CTS, CVS, and MSDs.\n\nImmediate permanent paralysis is a far more severe, instantaneous outcome not described as resulting from poor workstation design in this material.\n\nInstant hearing loss is not a described consequence of poor workstation or interface design.\n\nSudden vision correction is not a real or described outcome of poor workstation design; the described visual issue is strain, not correction."
  },
  {
    id: "csc306_ch4_088",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "Which of the following best defines Repetitive Strain Injury (RSI)?",
    options: [
      "Damage to tendons, nerves, and muscles caused by repeated, unnatural motions",
      "A software bug that repeats the same exact error message endlessly",
      "A network issue caused by repeated failed connection attempts overall",
      "A battery fault caused by repeated daily charging cycles over time"
    ],
    correctAnswer: 0,
    explanation: "Repetitive Strain Injury is damage to tendons, nerves, and muscles caused by repeated, unnatural motions, with typing on a flat, poorly positioned keyboard for 8 hours a day without wrist support given as a primary cause.\n\nA repeating software error message is a technical software issue unrelated to physical injury from repeated motion.\n\nRepeated failed connection attempts describe a networking issue, unrelated to physical strain injury.\n\nRepeated charging cycles describe a battery degradation issue, unrelated to physical strain injury."
  },
  {
    id: "csc306_ch4_089",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "Which of the following best describes Carpal Tunnel Syndrome (CTS)?",
    options: [
      "A severe RSI where swollen ligaments compress the wrist's median nerve",
      "A vision condition caused by staring at bright screens for extended periods",
      "A hearing condition caused by excessive headphone volume",
      "A skin condition caused by prolonged contact with a keyboard surface"
    ],
    correctAnswer: 0,
    explanation: "Carpal Tunnel Syndrome is a specific, severe type of RSI where the median nerve in the wrist is compressed by swollen ligaments, causing numbness, tingling, and severe pain in the hand.\n\nA vision condition from bright screens instead describes Computer Vision Syndrome, not Carpal Tunnel Syndrome.\n\nA hearing condition from headphone volume is unrelated to Carpal Tunnel Syndrome, which concerns the wrist and hand.\n\nA skin condition from keyboard contact is not the described mechanism of Carpal Tunnel Syndrome, which specifically involves median nerve compression."
  },
  {
    id: "csc306_ch4_090",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "Which of the following best describes Computer Vision Syndrome (CVS), also known as Digital Eye Strain?",
    options: [
      "Dry eyes, blurred vision, and headaches from glowing screens and glare",
      "Numbness and tingling in the fingers caused by typing for long periods",
      "Chronic lower back pain caused by an unsupportive chair",
      "Ringing in the ears caused by loud notification sounds"
    ],
    correctAnswer: 0,
    explanation: "Computer Vision Syndrome, also known as Digital Eye Strain, includes symptoms such as dry eyes, blurred vision, and tension headaches caused by staring at glowing screens, poor screen contrast, or heavy glare from overhead lights.\n\nNumbness and tingling in the fingers instead describes symptoms of Carpal Tunnel Syndrome, not Computer Vision Syndrome.\n\nChronic lower back pain instead falls under Musculoskeletal Disorders, not Computer Vision Syndrome.\n\nRinging in the ears is an auditory symptom unrelated to Computer Vision Syndrome, which concerns the eyes."
  },
  {
    id: "csc306_ch4_091",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "Which of the following best describes Musculoskeletal Disorders (MSDs) as discussed in physical ergonomics?",
    options: [
      "Chronic back, shoulder, and neck pain from hunching or bad chairs",
      "A temporary condition that resolves itself within minutes without any intervention",
      "A condition exclusively affecting professional athletes",
      "A software error that occurs only on outdated operating systems"
    ],
    correctAnswer: 0,
    explanation: "Musculoskeletal Disorders are chronic back, shoulder, and neck pain resulting from hunching over laptops, casually known as 'Tech Neck,' or from using non-adjustable chairs.\n\nDescribing it as resolving within minutes contradicts the chronic nature of Musculoskeletal Disorders described here.\n\nMSDs are not restricted to professional athletes; they are described as a general risk for computer users.\n\nMSDs are a physical health condition, not a software error, and are unrelated to operating system version."
  },
  {
    id: "csc306_ch4_092",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "Which of the following is an accurate description of a medical consequence of poor physical design?",
    options: [
      "Computer Vision Syndrome is a condition affecting only the muscles of the lower back",
      "Repetitive Strain Injury is caused exclusively by excessive screen brightness",
      "All of these",
      "None of these"
    ],
    correctAnswer: 3,
    explanation: "Neither statement is accurate. Computer Vision Syndrome instead concerns the eyes, causing dry eyes, blurred vision, and headaches, not the lower back muscles, which fall under Musculoskeletal Disorders instead. Repetitive Strain Injury is instead caused by repeated, unnatural motions such as typing without wrist support, not by screen brightness. Since both statements are inaccurate, none of these applies."
  },
  {
    id: "csc306_ch4_093",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "What is described as the goal of physical ergonomics, regardless of how brilliant a piece of software might be?",
    options: [
      "To protect physical health, even if the software itself is brilliant",
      "To ensure the software has the most visually striking animations possible",
      "To ensure the software runs on the widest possible range of operating systems",
      "To ensure the software costs less than all of its competitors"
    ],
    correctAnswer: 0,
    explanation: "The goal of physical ergonomics is to protect physical health; no matter how brilliant a piece of software is, if using it for an hour makes a user's wrists throb or eyes strain, the system has failed.\n\nVisually striking animations are a design style choice unrelated to the physical health goal described.\n\nOperating system compatibility is a technical distribution concern unrelated to the physical health goal described.\n\nCompetitive pricing is a business concern unrelated to the physical health goal described here."
  },
  {
    id: "csc306_ch4_094",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "Of the five major human senses, sight, hearing, touch, taste, and smell, which three are described as the most important to HCI?",
    options: [
      "Sight, hearing, and touch",
      "Taste, smell, and touch",
      "Sight, taste, and smell",
      "Hearing, taste, and smell"
    ],
    correctAnswer: 0,
    explanation: "Of the five major senses, sight, hearing, and touch are described as the most important to HCI, since taste and smell do not currently play a significant role in most general computer systems.\n\nTaste, smell, and touch omits sight and hearing, the two senses most central to typical screen-based interaction.\n\nSight, taste, and smell omits touch and hearing, and incorrectly includes taste, which is described as not currently significant to HCI.\n\nHearing, taste, and smell omits sight and touch, and incorrectly includes taste and smell as most important, contrary to what is described."
  },
  {
    id: "csc306_ch4_095",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "Although taste and smell do not currently play a significant role in general computer systems, where might they still have a role to play?",
    options: [
      "In specialized systems, such as malfunction warnings or augmented reality",
      "In every single mobile application currently on the market",
      "In replacing sight entirely as the primary interaction channel",
      "In eliminating the need for any visual display technology"
    ],
    correctAnswer: 0,
    explanation: "Taste and smell could have a role to play in more specialized systems, such as smells giving warning of a malfunction, or in augmented reality systems, even though they are not significant in general computer systems today.\n\nClaiming a role in every mobile application overstates the described, narrow, specialized use case.\n\nReplacing sight entirely contradicts the material, which continues to describe sight as central and simply notes a possible additional, specialized role for smell and taste.\n\nEliminating the need for visual display technology is not implied anywhere in this discussion of specialized sensory roles."
  },
  {
    id: "csc306_ch4_096",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "Among the effectors involved in interacting with a computer, such as the limbs, fingers, eyes, head, and vocal system, which play the primary role through typing or mouse control?",
    options: [
      "The fingers",
      "The vocal system",
      "The head",
      "The feet"
    ],
    correctAnswer: 0,
    explanation: "The fingers play the primary role in interacting with a computer, through typing or mouse control, with some additional use of voice, eye, head, and body position.\n\nThe vocal system is described as having some use, but not the primary role, which belongs to the fingers.\n\nThe head is described as having some use in interaction, such as position tracking, but not the primary role described here.\n\nThe feet are not listed among the named effectors in this discussion of computer interaction."
  },
  {
    id: "csc306_ch4_097",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "When using a personal computer with a graphical interface featuring menus, icons, and windows, a user receives information primarily through which sense?",
    options: ["Sight", "Smell", "Taste", "Vestibular balance"],
    correctAnswer: 0,
    explanation: "When using a personal computer with a graphical interface of menus, icons, and windows, the user receives information primarily by sight, from what appears on the screen.\n\nSmell is described as not currently playing a significant role in general computer systems, not the primary channel for receiving screen information.\n\nTaste is described as not currently playing a significant role in general computer systems, not the primary channel for receiving screen information.\n\nVestibular balance is not discussed as a sense involved in receiving graphical interface information in this material."
  },
  {
    id: "csc306_ch4_098",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "Under health issues affecting the use of computers, what does the Performance factor recommend regarding controls, displays, and sustained body positions?",
    options: [
      "Users should reach controls comfortably and get support for long positions",
      "Users should stand for the entire duration of their work session",
      "Controls should be placed as far from the user as possible to encourage movement",
      "Displays should be positioned so they cannot be seen without leaning forward"
    ],
    correctAnswer: 0,
    explanation: "The Performance factor recommends that users be able to reach all controls comfortably and see all displays, and that support be provided to allow rest if a particular body position, such as typing, is held for long periods.\n\nRequiring users to stand for an entire session is not the described recommendation; the material instead discusses providing back support if sitting and rest support for sustained positions.\n\nPlacing controls far from the user contradicts the recommendation that controls should be comfortably reachable.\n\nPositioning displays so they require leaning forward contradicts the recommendation for comfortable, strain-free viewing."
  },
  {
    id: "csc306_ch4_099",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "Under health issues affecting the use of computers, what does the Temperature factor state about extremes of hot or cold?",
    options: [
      "Performance deteriorates at high or low temperatures",
      "Temperature is said to have no measurable effect on performance",
      "Only extremely cold temperatures are said to affect performance, never heat",
      "Temperature is said to only matter for hardware, never the user"
    ],
    correctAnswer: 0,
    explanation: "The Temperature factor states that extremes of hot or cold will affect performance, and experimental studies show that performance deteriorates at high or low temperatures, with users being unable to concentrate efficiently.\n\nClaiming no measurable effect directly contradicts the described deterioration in performance at extreme temperatures.\n\nRestricting the effect to cold only ignores the described effect of both high and low temperatures on performance.\n\nRestricting temperature's relevance to hardware only ignores the described effect on human concentration and performance."
  },
  {
    id: "csc306_ch4_100",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "Under health issues affecting the use of computers, what does the Lighting factor recommend to avoid discomfort or eyestrain?",
    options: [
      "Adequate lighting should be provided, positioned to avoid glare",
      "All overhead lighting should be removed entirely from any workspace",
      "Lighting should always be as bright as physically possible",
      "Lighting levels should remain identical across every possible work environment"
    ],
    correctAnswer: 0,
    explanation: "The Lighting factor recommends that adequate lighting be provided to allow users to see the screen without discomfort or eyestrain, with the light source positioned to avoid glare affecting the display.\n\nRemoving all overhead lighting entirely is not the recommendation; the material calls for adequate, well-positioned lighting, not the total absence of lighting.\n\nMaximizing brightness as much as possible is not the recommendation; the material emphasizes avoiding glare and discomfort, not simply maximizing brightness.\n\nThe material states lighting level depends on the work environment, contradicting the idea that it should remain identical across every environment."
  },
  {
    id: "csc306_ch4_101",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "Under health issues affecting the use of computers, what does the Noise factor state about the role of noise in a work environment?",
    options: [
      "Excessive noise is harmful, but noise can also confirm system activity",
      "All noise, no matter how quiet, must be eliminated completely from every workspace",
      "Noise has no effect on user health under any circumstances",
      "Noise only affects users who wear hearing aids"
    ],
    correctAnswer: 0,
    explanation: "The Noise factor states that excessive noise can be harmful to health, but this does not mean no noise at all is desirable, since noise can be a stimulus to users and can provide needed confirmation of system activity.\n\nEliminating all noise completely contradicts the description of noise sometimes serving a useful confirmatory function.\n\nClaiming no effect on health contradicts the description of excessive noise causing pain and, in acute cases, hearing loss.\n\nRestricting the noise factor's relevance to hearing aid users is not supported; the discussion applies to users generally."
  },
  {
    id: "csc306_ch4_102",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "Under health issues affecting the use of computers, the Time factor states that excessive use of which older display technology has been suggested to be harmful, particularly to pregnant women?",
    options: ["CRT displays", "LED displays", "E-ink displays", "OLED displays"],
    correctAnswer: 0,
    explanation: "The Time factor notes that it has been suggested that excessive use of CRT displays can be harmful to users, particularly pregnant women, which is why the time users spend using a system should also be controlled.\n\nLED displays are not the display technology specifically named in this concern about excessive use and pregnancy.\n\nE-ink displays are not the display technology specifically named in this concern about excessive use and pregnancy.\n\nOLED displays are not the display technology specifically named in this concern about excessive use and pregnancy."
  },
  {
    id: "csc306_ch4_103",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "Which of the following is an accurate description of a health issue factor affecting computer use?",
    options: [
      "The Lighting factor recommends positioning the light source to avoid glare on the display",
      "The Noise factor recommends eliminating every sound from a workspace with no exceptions",
      "All of these",
      "None of these"
    ],
    correctAnswer: 0,
    explanation: "The Lighting factor recommending positioning the light source to avoid glare affecting the display is stated directly. The Noise factor instead states that some noise can be a useful stimulus providing confirmation of system activity, not that every sound must be eliminated with no exceptions. Since only the Lighting factor statement is accurate, that is the correct answer."
  },
  {
    id: "csc306_ch4_104",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "Under guidance on the use of color in displays, which color should not be used to display critical information?",
    options: ["Blue", "Red", "Yellow", "Green"],
    correctAnswer: 0,
    explanation: "The guidance states that blue should not be used to display critical information, as part of broader guidance that color distinctions should remain clear and unaffected by contrast changes.\n\nRed is instead described as frequently associated with stop, and may be used to indicate emergencies and alarms, not the color flagged as unsuitable for critical information.\n\nYellow is instead described as associated with standby, and may be used for standby and auxiliary functions, not the color flagged as unsuitable for critical information.\n\nGreen is instead described as associated with go, and may be used to indicate normal activity, not the color flagged as unsuitable for critical information."
  },
  {
    id: "csc306_ch4_105",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "Which colors are frequently associated with stop, go, and standby respectively in common HCI display conventions?",
    options: [
      "Red, green, and yellow",
      "Blue, purple, and orange",
      "Black, white, and grey",
      "Pink, brown, and teal"
    ],
    correctAnswer: 0,
    explanation: "Red, green, and yellow are colors frequently associated with stop, go, and standby respectively; red may indicate emergencies and alarms, green normal activity, and yellow standby and auxiliary functions.\n\nBlue, purple, and orange is not the color set associated with stop, go, and standby in this material.\n\nBlack, white, and grey is not the color set associated with stop, go, and standby in this material.\n\nPink, brown, and teal is not the color set associated with stop, go, and standby in this material."
  },
  {
    id: "csc306_ch4_106",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "Color conventions such as red for emergency, green for normal activity, and yellow for standby can be freely disregarded at any time without cause.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "This statement is false. These color conventions should not be violated without very good cause, since they correspond to common conventions and user expectations that users rely on to interpret a system correctly."
  },
  {
    id: "csc306_ch4_107",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "In the comparison of cognitive and physical ergonomics, what is given as the primary target of cognitive ergonomics?",
    options: [
      "The human mind, or brain",
      "The human anatomy, or body",
      "The company's server infrastructure",
      "The organization's budget"
    ],
    correctAnswer: 0,
    explanation: "In the comparison table, the primary target of cognitive ergonomics is the human mind, or brain, contrasted with physical ergonomics targeting the human anatomy, or body.\n\nHuman anatomy, or body, is instead listed as the primary target of physical ergonomics, not cognitive ergonomics.\n\nServer infrastructure is not listed as the primary target of either branch of ergonomics in this comparison.\n\nOrganizational budget is not listed as the primary target of either branch of ergonomics in this comparison."
  },
  {
    id: "csc306_ch4_108",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "In the comparison of cognitive and physical ergonomics, what is given as the primary target of physical ergonomics?",
    options: [
      "The human anatomy, or body",
      "The human mind, or brain",
      "The company's marketing strategy",
      "The software's source code"
    ],
    correctAnswer: 0,
    explanation: "In the comparison table, the primary target of physical ergonomics is the human anatomy, or body, contrasted with cognitive ergonomics targeting the human mind, or brain.\n\nThe human mind, or brain, is instead listed as the primary target of cognitive ergonomics, not physical ergonomics.\n\nMarketing strategy is not listed as the primary target of either branch of ergonomics in this comparison.\n\nSource code is not listed as the primary target of either branch of ergonomics in this comparison."
  },
  {
    id: "csc306_ch4_109",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "In the comparison table, what does cognitive ergonomics deal with, as opposed to physical ergonomics?",
    options: [
      "Attention, memory, logic, and error prevention",
      "Posture, muscle fatigue, reach, and hardware layout",
      "Server uptime and network latency",
      "Company revenue and profit margins"
    ],
    correctAnswer: 0,
    explanation: "The comparison table states that cognitive ergonomics deals with attention, memory, logic, and error prevention, contrasted with physical ergonomics dealing with posture, muscle fatigue, reach, and hardware layout.\n\nPosture, muscle fatigue, reach, and hardware layout is instead what physical ergonomics deals with, not cognitive ergonomics.\n\nServer uptime and network latency are not listed in the comparison table as what either branch of ergonomics deals with.\n\nCompany revenue and profit margins are not listed in the comparison table as what either branch of ergonomics deals with."
  },
  {
    id: "csc306_ch4_110",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "In the comparison table, what does physical ergonomics deal with, as opposed to cognitive ergonomics?",
    options: [
      "Posture, muscle fatigue, reach, and hardware layout",
      "Attention, memory, logic, and error prevention strategies",
      "Programming syntax rules and compiler design choices",
      "Customer service response times and satisfaction scores"
    ],
    correctAnswer: 0,
    explanation: "The comparison table states that physical ergonomics deals with posture, muscle fatigue, reach, and hardware layout, contrasted with cognitive ergonomics dealing with attention, memory, logic, and error prevention.\n\nAttention, memory, logic, and error prevention is instead what cognitive ergonomics deals with, not physical ergonomics.\n\nProgramming syntax and compiler design are not listed in the comparison table as what either branch of ergonomics deals with.\n\nCustomer service response times are not listed in the comparison table as what either branch of ergonomics deals with."
  },
  {
    id: "csc306_ch4_111",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "In the comparison table, structuring a checkout page so the user doesn't get confused is given as an HCI example of which branch of ergonomics?",
    options: [
      "Cognitive ergonomics",
      "Physical ergonomics",
      "Organizational ergonomics",
      "Environmental ergonomics"
    ],
    correctAnswer: 0,
    explanation: "Structuring a checkout page so the user doesn't get confused is given as the HCI example of cognitive ergonomics, contrasted with designing a mouse that keeps the wrist at a natural angle as the physical ergonomics example.\n\nPhysical ergonomics is instead illustrated by the mouse design example concerning wrist angle, not the checkout page structuring example.\n\nOrganizational ergonomics is not one of the two branches compared in this table.\n\nEnvironmental ergonomics is not one of the two branches compared in this table."
  },
  {
    id: "csc306_ch4_112",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "In the comparison table, what is listed as the worst-case failure of cognitive ergonomics, as opposed to physical ergonomics?",
    options: [
      "User frustration, confusion, and catastrophic user errors",
      "Physical pain, fatigue, and long-term joint or muscle injuries",
      "A complete loss of internet connectivity",
      "A permanent increase in hardware manufacturing costs"
    ],
    correctAnswer: 0,
    explanation: "The comparison table lists the worst-case failure of cognitive ergonomics as user frustration, confusion, and catastrophic user errors, contrasted with physical ergonomics failing through physical pain, fatigue, and long-term joint or muscle injuries.\n\nPhysical pain, fatigue, and long-term joint or muscle injuries is instead listed as the worst-case failure of physical ergonomics, not cognitive ergonomics.\n\nLoss of internet connectivity is not listed as a worst-case failure of either branch of ergonomics in this comparison.\n\nIncreased hardware manufacturing costs is not listed as a worst-case failure of either branch of ergonomics in this comparison."
  },
  {
    id: "csc306_ch4_113",
    course: "CSC 306",
    chapter: "Chapter 4",
    text: "Great HCI requires a balance of both physical and cognitive ergonomics, since physical ergonomics ensures comfort while cognitive ergonomics ensures the user knows what to do once they look at the screen.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "This statement is true. The material concludes that great HCI requires a balance of both: physical ergonomics ensures the user can comfortably sit at the computer or hold the device, while cognitive ergonomics ensures that once they look at the screen, they actually know what to do."
  }
];

export default csc306Chapter4Questions;
