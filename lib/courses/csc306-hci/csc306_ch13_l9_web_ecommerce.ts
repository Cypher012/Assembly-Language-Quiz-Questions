import { QuestionV2 } from "@/lib/quiz-types";

const csc306Lecture9WebQuestions: QuestionV2[] = [
  {
    id: "csc306_ch13_001",
    course: "CSC 306",
    chapter: "Chapter 13",
    text: "Roughly how many internet users worldwide are cited for 2024?",
    options: [
      "5.4 billion",
      "540 million",
      "54 million",
      "54 billion"
    ],
    correctAnswer: 0,
    explanation: "The 2024 figure cited is 5.4 billion internet users worldwide.\n\n540 million substantially understates the cited global figure.\n\n54 million also substantially understates the cited global figure.\n\n54 billion vastly overstates the cited figure, exceeding the world's total population many times over."
  },
  {
    id: "csc306_ch13_002",
    course: "CSC 306",
    chapter: "Chapter 13",
    text: "Roughly what proportion of web traffic is cited as now coming from mobile devices?",
    options: [
      "60%+",
      "5%",
      "20%",
      "99%"
    ],
    correctAnswer: 0,
    explanation: "The figure cited is 60%+ of web traffic now coming from mobile devices.\n\n5% vastly understates the cited proportion.\n\n20% substantially understates the cited proportion.\n\n99% overstates the cited proportion."
  },
  {
    id: "csc306_ch13_003",
    course: "CSC 306",
    chapter: "Chapter 13",
    text: "Which web HCI factor is illustrated by users arriving via search, social media, QR codes, and links, meaning they may land anywhere, not just the homepage?",
    options: [
      "Entry points are unpredictable",
      "No single user",
      "Competition is one click away",
      "Context is unknown"
    ],
    correctAnswer: 0,
    explanation: "Entry points are unpredictable is illustrated by users arriving via search, social media, QR codes, and links, meaning they may land anywhere, not just the homepage.\n\nNo single user instead concerns audiences spanning every age, ability, and device, not the point of entry to a site.\n\nCompetition is one click away instead concerns users abandoning without warning when friction appears, not the entry point.\n\nContext is unknown instead concerns not knowing the user's device or environment, not the specific page they land on."
  },
  {
    id: "csc306_ch13_004",
    course: "CSC 306",
    chapter: "Chapter 13",
    text: "Which of the Four Components of Information Architecture concerns how content is categorised and structured, mirroring the user's mental model?",
    options: [
      "Organisation systems",
      "Labelling systems",
      "Navigation systems",
      "Search systems"
    ],
    correctAnswer: 0,
    explanation: "Organisation systems concern how content is categorised and structured, hierarchical, faceted, or sequential, mirroring the user's mental model, not the organisation's internal logic.\n\nLabelling systems instead concern the words used for categories and links, not the underlying categorisation structure.\n\nNavigation systems instead concern how users move through content, not the categorisation structure itself.\n\nSearch systems instead concern how users find content when browsing fails, not the categorisation structure itself."
  },
  {
    id: "csc306_ch13_005",
    course: "CSC 306",
    chapter: "Chapter 13",
    text: "Which of the Four Components of Information Architecture concerns the words used for categories and links, which must match the user's vocabulary, not the team's?",
    options: [
      "Labelling systems",
      "Organisation systems",
      "Navigation systems",
      "Search systems"
    ],
    correctAnswer: 0,
    explanation: "Labelling systems concern the words used for categories, navigation items, and links, which must match the vocabulary of the user, not the vocabulary of the team that built the site.\n\nOrganisation systems instead concern how content is categorised and structured, a different layer than word choice.\n\nNavigation systems instead concern how users physically move through content, not label wording.\n\nSearch systems instead concern query formulation and result display, not label wording for navigation."
  },
  {
    id: "csc306_ch13_006",
    course: "CSC 306",
    chapter: "Chapter 13",
    text: "Which navigation pattern is described as good for showing breadth on large content-heavy sites, but cognitively demanding since every option is visible at once?",
    options: [
      "Mega menu",
      "Hamburger menu",
      "Tab bar",
      "Breadcrumbs"
    ],
    correctAnswer: 0,
    explanation: "Mega menu is good for showing breadth on large content-heavy sites, but cognitively demanding since every option is visible at once.\n\nHamburger menu instead reduces visual noise on mobile but hides navigation, reducing discoverability, a different tradeoff.\n\nTab bar instead is always visible but limited to 3 to 5 primary destinations, a different tradeoff than showing full breadth.\n\nBreadcrumbs instead help users understand hierarchy position, not showing the full breadth of a site's content."
  },
  {
    id: "csc306_ch13_007",
    course: "CSC 306",
    chapter: "Chapter 13",
    text: "Which navigation pattern is mobile-first and reduces visual noise, but hides navigation and reduces discoverability of content?",
    options: [
      "Hamburger menu",
      "Mega menu",
      "Tab bar",
      "Faceted filters"
    ],
    correctAnswer: 0,
    explanation: "Hamburger menu is mobile-first and reduces visual noise, but hides navigation and reduces discoverability of content.\n\nMega menu instead shows breadth on large sites with every option visible, the opposite tradeoff of hiding navigation.\n\nTab bar instead is always visible and limited to a few destinations, not a hidden menu.\n\nFaceted filters instead let users narrow results by multiple attributes, a different navigation function than a collapsible menu."
  },
  {
    id: "csc306_ch13_008",
    course: "CSC 306",
    chapter: "Chapter 13",
    text: "Which navigation pattern is always visible and best suited for only 3 to 5 primary destinations in mobile apps and simple websites?",
    options: [
      "Tab bar",
      "Mega menu",
      "Hamburger menu",
      "Breadcrumbs"
    ],
    correctAnswer: 0,
    explanation: "Tab bar is always visible and best for only 3 to 5 primary destinations in mobile apps and simple websites.\n\nMega menu instead is suited for large content-heavy sites showing full breadth, not a limited set of primary destinations.\n\nHamburger menu instead hides navigation behind an icon, unlike a tab bar's constant visibility.\n\nBreadcrumbs instead show hierarchy position for deep content structures, not a fixed set of primary destinations."
  },
  {
    id: "csc306_ch13_009",
    course: "CSC 306",
    chapter: "Chapter 13",
    text: "Which navigation pattern helps users understand where they are in a hierarchy, essential for deep content structures like catalogues?",
    options: [
      "Breadcrumbs",
      "Tab bar",
      "Hamburger menu",
      "Mega menu"
    ],
    correctAnswer: 0,
    explanation: "Breadcrumbs help users understand where they are in a hierarchy, essential for deep content structures like catalogues.\n\nTab bar instead offers constant access to a few primary destinations, not hierarchy position awareness.\n\nHamburger menu instead hides navigation behind an icon, not showing hierarchy position.\n\nMega menu instead shows full site breadth at once, not a trail of hierarchy position."
  },
  {
    id: "csc306_ch13_010",
    course: "CSC 306",
    chapter: "Chapter 13",
    text: "Which type of search query is illustrated by 'Facebook login' or 'BBC sport', where the user wants to reach a specific site or page?",
    options: [
      "Navigational",
      "Informational",
      "Transactional",
      "Organisational"
    ],
    correctAnswer: 0,
    explanation: "Navigational queries are illustrated by 'Facebook login' or 'BBC sport', where the user wants to reach a specific site or page directly.\n\nInformational queries instead are illustrated by 'What is HCI?', where the user wants to learn something, not reach a specific site.\n\nTransactional queries instead are illustrated by 'Buy iPhone 15 Nigeria', where the user wants to complete an action, not just navigate.\n\nOrganisational is not one of the three named query types in this material."
  },
  {
    id: "csc306_ch13_011",
    course: "CSC 306",
    chapter: "Chapter 13",
    text: "Which type of search query is illustrated by 'What is HCI?' or 'How to fix a PDF error', where the user wants to learn something or answer a question?",
    options: [
      "Informational",
      "Navigational",
      "Transactional",
      "Behavioural"
    ],
    correctAnswer: 0,
    explanation: "Informational queries are illustrated by 'What is HCI?' or 'How to fix a PDF error', where the user wants to learn something or answer a question.\n\nNavigational queries instead are illustrated by wanting to reach a specific site, not learn general information.\n\nTransactional queries instead are illustrated by wanting to complete an action like a purchase, not learn information.\n\nBehavioural is not one of the three named query types in this material; it instead describes a category of research method elsewhere."
  },
  {
    id: "csc306_ch13_012",
    course: "CSC 306",
    chapter: "Chapter 13",
    text: "Which type of search query is illustrated by 'Buy iPhone 15 Nigeria' or 'Book flight Lagos Abuja', where the user wants to complete an action?",
    options: [
      "Transactional",
      "Navigational",
      "Informational",
      "Attitudinal"
    ],
    correctAnswer: 0,
    explanation: "Transactional queries are illustrated by 'Buy iPhone 15 Nigeria' or 'Book flight Lagos Abuja', where the user wants to complete an action such as buying or booking.\n\nNavigational queries instead are illustrated by wanting to reach a specific site, not complete a transaction.\n\nInformational queries instead are illustrated by wanting to learn something, not complete a transaction.\n\nAttitudinal is not one of the three named query types in this material; it instead describes a category of research method elsewhere."
  },
  {
    id: "csc306_ch13_013",
    course: "CSC 306",
    chapter: "Chapter 13",
    text: "Which of the following is recommended for designing good search results?",
    options: [
      "Design for zero results, since empty states need guidance, not a dead end",
      "Hide the total number of results to keep the interface uncluttered",
      "Never allow sorting or filtering of results",
      "Avoid highlighting query terms within the results"
    ],
    correctAnswer: 0,
    explanation: "Designing for zero results, since empty states need guidance rather than a dead end, is recommended for good search results.\n\nHiding the total result count contradicts the recommendation to show the number of results so users can calibrate expectations.\n\nNever allowing sorting or filtering contradicts the recommendation to allow sorting and filtering, since results are only a starting point.\n\nAvoiding term highlighting contradicts the recommendation to highlight query terms in results to confirm relevance."
  },
  {
    id: "csc306_ch13_014",
    course: "CSC 306",
    chapter: "Chapter 13",
    text: "In the e-commerce funnel, roughly what percentage of users are estimated to reach the Add to Cart stage, described as a commitment signal rather than a purchase decision?",
    options: [
      "About 15%",
      "About 100%",
      "About 60%",
      "About 3-5%"
    ],
    correctAnswer: 0,
    explanation: "Roughly 15% of users are estimated to reach Add to Cart, described as a commitment signal, not yet a purchase decision.\n\nAbout 100% instead represents the Awareness stage, the very top of the funnel where every user starts.\n\nAbout 60% instead represents the Browse stage, earlier in the funnel than Add to Cart.\n\nAbout 3-5% instead represents the final Purchase stage, later in the funnel than Add to Cart."
  },
  {
    id: "csc306_ch13_015",
    course: "CSC 306",
    chapter: "Chapter 13",
    text: "In the e-commerce funnel, the Checkout stage, at roughly 8%, is described as what?",
    options: [
      "The highest-stakes UX step in the entire journey",
      "An entirely optional, low-priority stage to design",
      "A stage that occurs before Add to Cart",
      "The stage with the highest percentage of all users remaining"
    ],
    correctAnswer: 0,
    explanation: "Checkout, at roughly 8%, is described as the highest-stakes UX step in the entire journey, since improving its conversion often delivers more revenue than increasing traffic.\n\nDescribing it as optional and low-priority directly contradicts its description as the highest-stakes step.\n\nCheckout occurs after Add to Cart in the funnel sequence, not before it.\n\nCheckout retains a smaller percentage of users than earlier stages like Awareness or Browse, not the highest percentage."
  },
  {
    id: "csc306_ch13_016",
    course: "CSC 306",
    chapter: "Chapter 13",
    text: "The key insight about checkout conversion states that improving it by 1% often delivers more revenue than what?",
    options: [
      "Increasing traffic by 20%",
      "Doubling the marketing budget",
      "Hiring ten additional customer service staff",
      "Reducing the number of products listed"
    ],
    correctAnswer: 0,
    explanation: "The key insight states that improving checkout conversion by 1% often delivers more revenue than increasing traffic by 20%, showing the outsized value of the final step's UX.\n\nDoubling the marketing budget is not the specific comparison made in this material.\n\nHiring additional customer service staff is not the specific comparison made in this material.\n\nReducing the number of listed products is not the specific comparison made in this material."
  },
  {
    id: "csc306_ch13_017",
    course: "CSC 306",
    chapter: "Chapter 13",
    text: "Which product page essential warns that unexpected price revelation is the leading cause of cart abandonment?",
    options: [
      "Price, immediately visible",
      "Multiple high-quality images",
      "Social proof",
      "Availability & shipping"
    ],
    correctAnswer: 0,
    explanation: "Price, immediately visible, warns that unexpected price revelation is the leading cause of cart abandonment, so price should never be hidden below the fold.\n\nMultiple high-quality images instead concerns showing zoom and 360-degree views since users cannot touch the product, not pricing.\n\nSocial proof instead concerns reviews and ratings building trust, not pricing visibility.\n\nAvailability & shipping instead concerns stock level and delivery estimates reducing uncertainty, not pricing visibility specifically."
  },
  {
    id: "csc306_ch13_018",
    course: "CSC 306",
    chapter: "Chapter 13",
    text: "Which checkout design principle states that mandatory account creation is the single biggest cause of checkout abandonment?",
    options: [
      "Guest checkout",
      "Progress indicator",
      "Minimal form fields",
      "Persistent order summary"
    ],
    correctAnswer: 0,
    explanation: "Guest checkout states that mandatory account creation is the single biggest cause of checkout abandonment, so a guest option should always be offered.\n\nProgress indicator instead concerns showing how many steps remain, not account creation requirements.\n\nMinimal form fields instead concerns asking only what is needed, since every extra field increases abandonment, a related but distinct principle.\n\nPersistent order summary instead concerns keeping the order visible throughout checkout, not account creation requirements."
  },
  {
    id: "csc306_ch13_019",
    course: "CSC 306",
    chapter: "Chapter 13",
    text: "Which trust signal is illustrated by users distrusting products with only 5-star ratings, since imperfection is believable?",
    options: [
      "Reviews and ratings",
      "HTTPS & security badges",
      "Visible contact info",
      "Clear returns policy"
    ],
    correctAnswer: 0,
    explanation: "Reviews and ratings is illustrated by users distrusting products with only 5-star ratings, since imperfection is believable and independently verified reviews build trust.\n\nHTTPS & security badges instead concerns SSL padlocks and payment logos reducing anxiety at card entry, not review authenticity.\n\nVisible contact info instead concerns a phone number or address signalling real presence, not review authenticity.\n\nClear returns policy instead concerns easy, visible return processes reducing perceived risk, not review authenticity."
  },
  {
    id: "csc306_ch13_020",
    course: "CSC 306",
    chapter: "Chapter 13",
    text: "Which persuasion pattern is described as Cialdini's most powerful persuasion principle, illustrated by free samples or trials creating a sense of obligation?",
    options: [
      "Reciprocity",
      "Scarcity & urgency",
      "Social proof",
      "Dark patterns"
    ],
    correctAnswer: 0,
    explanation: "Reciprocity is described as Cialdini's most powerful persuasion principle, illustrated by free samples, trials, or content creating a sense of obligation to return the favour.\n\nScarcity & urgency instead is illustrated by messages like 'Only 3 left', legitimate if true but manipulative if fabricated, a different principle.\n\nSocial proof instead is illustrated by '1,200 people bought this today', anchoring to others' choices, a different principle from reciprocity.\n\nDark patterns instead describes manipulative practices like pre-ticked boxes, always harmful, not a persuasion principle to use ethically."
  },
  {
    id: "csc306_ch13_021",
    course: "CSC 306",
    chapter: "Chapter 13",
    text: "Pre-ticked boxes, hidden fees, confusing unsubscribes, and roach motels are examples of what, described as increasingly regulated and always harmful to long-term trust?",
    options: [
      "Dark patterns",
      "Reciprocity",
      "Scarcity & urgency",
      "Trust signals"
    ],
    correctAnswer: 0,
    explanation: "Dark patterns include pre-ticked boxes, hidden fees, confusing unsubscribes, and roach motels, increasingly regulated and always harmful to long-term trust and brand.\n\nReciprocity instead is an ethical persuasion principle based on obligation from free samples, not a manipulative pattern.\n\nScarcity & urgency instead can be legitimate if true, unlike dark patterns which are always described as harmful.\n\nTrust signals instead are positive elements like security badges and reviews, the opposite of manipulative dark patterns."
  },
  {
    id: "csc306_ch13_022",
    course: "CSC 306",
    chapter: "Chapter 13",
    text: "Under mobile-first design, primary actions should be placed within the bottom two-thirds of the screen because of what principle?",
    options: [
      "Thumb-first layout",
      "Performance is UX",
      "Content priority",
      "Context of use"
    ],
    correctAnswer: 0,
    explanation: "Thumb-first layout places primary actions in the bottom two-thirds of the screen, within thumb reach, since the top corners of a phone are hardest to reach.\n\nPerformance is UX instead concerns load time affecting conversions, not the physical placement of buttons for thumb reach.\n\nContent priority instead concerns cutting content that doesn't earn its place on a small screen, not physical button placement.\n\nContext of use instead concerns designing for motion and distraction, not physical button placement for thumb reach."
  },
  {
    id: "csc306_ch13_023",
    course: "CSC 306",
    chapter: "Chapter 13",
    text: "Every additional second of load time is cited as reducing conversions by roughly what percentage?",
    options: [
      "About 7%",
      "About 0.1%",
      "About 50%",
      "About 1%"
    ],
    correctAnswer: 0,
    explanation: "Every additional second of load time is cited as reducing conversions by roughly 7%, making performance a core UX concern, not just a technical one.\n\nAbout 0.1% substantially understates the cited figure for this performance effect.\n\nAbout 50% substantially overstates the cited figure for this performance effect.\n\nAbout 1% understates the cited figure for this performance effect."
  },
  {
    id: "csc306_ch13_024",
    course: "CSC 306",
    chapter: "Chapter 13",
    text: "Which mobile web principle states that mobile users are often in motion, distracted, or in variable lighting, requiring design for glanceable interaction, not focus?",
    options: [
      "Context of use",
      "Thumb-first layout",
      "Performance is UX",
      "Adaptive patterns"
    ],
    correctAnswer: 0,
    explanation: "Context of use states that mobile users are often in motion, distracted, or in variable lighting, requiring design for one-handed, interrupted, glanceable interaction, not sustained focus.\n\nThumb-first layout instead concerns physical button placement within thumb reach, not the surrounding environment.\n\nPerformance is UX instead concerns load time affecting conversions, not the user's surrounding environment.\n\nAdaptive patterns instead concerns using mobile-native components like bottom sheets, not the surrounding environment."
  },
  {
    id: "csc306_ch13_025",
    course: "CSC 306",
    chapter: "Chapter 13",
    text: "Which mobile web principle recommends hamburger menus, bottom sheets, cards, and accordions rather than porting desktop navigation directly?",
    options: [
      "Adaptive patterns",
      "Thumb-first layout",
      "Content priority",
      "Offline & low-connectivity"
    ],
    correctAnswer: 0,
    explanation: "Adaptive patterns recommends mobile-native components like hamburger menus, bottom sheets, cards, and accordions, rather than porting desktop navigation directly.\n\nThumb-first layout instead concerns placing actions within thumb reach, not the choice of navigation component style.\n\nContent priority instead concerns cutting content that doesn't earn its place, not the choice of navigation component style.\n\nOffline & low-connectivity instead concerns Progressive Web Apps and offline states, not the choice of navigation component style."
  },
  {
    id: "csc306_ch13_026",
    course: "CSC 306",
    chapter: "Chapter 13",
    text: "Which Core Web Vital measures how quickly the main content of a page loads, with a target of 2.5 seconds or less?",
    options: [
      "LCP (Largest Contentful Paint)",
      "FID (First Input Delay)",
      "CLS (Cumulative Layout Shift)",
      "Bounce Rate"
    ],
    correctAnswer: 0,
    explanation: "LCP, Largest Contentful Paint, measures how quickly the main content loads, with a target of 2.5 seconds or less.\n\nFID instead measures how quickly the page responds to the first interaction, with a target of 100 milliseconds or less, not content load time.\n\nCLS instead measures how much content moves unexpectedly during load, with a target of 0.1 or less, not load speed.\n\nBounce Rate is a behavioural UX metric, not one of the three Core Web Vitals."
  },
  {
    id: "csc306_ch13_027",
    course: "CSC 306",
    chapter: "Chapter 13",
    text: "Which Core Web Vital measures how much content moves unexpectedly during load, with a target of 0.1 or less?",
    options: [
      "CLS (Cumulative Layout Shift)",
      "LCP (Largest Contentful Paint)",
      "FID (First Input Delay)",
      "Conversion Rate"
    ],
    correctAnswer: 0,
    explanation: "CLS, Cumulative Layout Shift, measures how much content moves unexpectedly during load, with a target of 0.1 or less.\n\nLCP instead measures how quickly the main content loads, with a target of 2.5 seconds, not layout movement.\n\nFID instead measures response time to first interaction, with a target of 100 milliseconds, not layout movement.\n\nConversion Rate is a behavioural UX metric, not one of the three Core Web Vitals."
  },
  {
    id: "csc306_ch13_028",
    course: "CSC 306",
    chapter: "Chapter 13",
    text: "Which behavioural UX metric measures the percentage of users who leave after viewing only one page, with a target of under 40%?",
    options: [
      "Bounce Rate",
      "Task Completion Rate",
      "Conversion Rate",
      "Time on Task"
    ],
    correctAnswer: 0,
    explanation: "Bounce Rate measures the percentage of users who leave after viewing one page, with a target of under 40%, and high bounce on landing pages suggests a content mismatch.\n\nTask Completion Rate instead measures the percentage of users who successfully complete a defined goal, with a target above 80%, not single-page exits.\n\nConversion Rate instead measures the percentage completing the primary business goal, with a target around 2-5%, not single-page exits.\n\nTime on Task instead measures duration spent, context-dependent, not single-page exits."
  },
  {
    id: "csc306_ch13_029",
    course: "CSC 306",
    chapter: "Chapter 13",
    text: "Which behavioural UX metric has a target above 80%, and is described as the most direct measure of whether the UX works?",
    options: [
      "Task Completion Rate",
      "Bounce Rate",
      "Conversion Rate",
      "Time on Task"
    ],
    correctAnswer: 0,
    explanation: "Task Completion Rate, with a target above 80%, is described as the most direct measure of whether the UX works, since it tracks whether users achieve their defined goal.\n\nBounce Rate instead targets under 40%, measuring single-page exits, not goal completion.\n\nConversion Rate instead targets around 2-5%, measuring business goal completion specifically, a narrower metric than general task completion.\n\nTime on Task instead is context-dependent, not a direct pass/fail measure of whether the UX works."
  },
  {
    id: "csc306_ch13_030",
    course: "CSC 306",
    chapter: "Chapter 13",
    text: "Which of the following accurately describes a Core Web Vital or a behavioural UX metric?",
    options: [
      "FID targets a response of 100 milliseconds or less to the first user interaction",
      "Conversion Rate targets under 40% of visitors completing the primary business goal",
      "All of these",
      "None of these"
    ],
    correctAnswer: 0,
    explanation: "FID targeting a response of 100 milliseconds or less to the first interaction is stated directly. Conversion Rate instead targets around 2-5% of visitors completing the primary business goal, not under 40%, which is instead the Bounce Rate target. Since only the FID statement is accurate, that is the correct answer."
  },
  {
    id: "csc306_ch13_031",
    course: "CSC 306",
    chapter: "Chapter 13",
    text: "The web is used by billions of people in thousands of contexts, meaning there is no single 'typical' web user.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "This statement is true. The material states directly that web audiences span every age, ability, culture, device, language, and bandwidth, and there is no 'typical' web user."
  },
  {
    id: "csc306_ch13_032",
    course: "CSC 306",
    chapter: "Chapter 13",
    text: "Mobile-first design is described as starting with the most constrained context and progressively enhancing for larger screens, never starting with desktop and shrinking down.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "This statement is true. Mobile-first design is described as starting with the most constrained context, small screen, slow connection, one-thumb interaction, and progressively enhancing for larger screens, never starting with desktop and shrinking down."
  }
];

export default csc306Lecture9WebQuestions;
