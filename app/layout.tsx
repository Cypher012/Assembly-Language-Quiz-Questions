import type React from "react";
import type { Metadata } from "next";
import { Inter, Permanent_Marker } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import "katex/dist/katex.min.css";

const body = Inter({ subsets: ["latin"], variable: "--font-body" });
const chalk = Permanent_Marker({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-chalk",
});

export const metadata: Metadata = {

  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ),

  title: "QuizSpark - Interactive Course Quizzes",
  description:
    "Interactive MCQ quizzes for university courses including Assembly Language Programming, Data Structures and Algorithms, Information Systems, Computer Appreciation, and more.",
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "QuizSpark - Interactive Course Quizzes",
    description:
      "Smart quizzing for modern students. Randomized MCQs, instant feedback, and score tracking across multiple university courses.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "QuizSpark - Interactive Course Quizzes",
    description:
      "Smart quizzing for modern students. Randomized MCQs, instant feedback, and score tracking across multiple university courses.",
  },
};

const DIRECTION_CONTRACT = `
THESIS: The classroom is the interface -- chalkboard for structure and time,
exercise-book paper for where you answer -- refusing the generic rounded-card
SaaS quiz dashboard every AI-built app defaults to.
OWN-WORLD: Chalkboard slate-green (#1F2E28) chrome, chalk-white hand-lettered
display type; ruled exercise-book cream (#F6F1E3) content surfaces, workhorse
body face; chalk-yellow (#E3B431) primary, chalk-coral (#CF6349) wrong,
chalk-sage (#5C9E79) correct. Board = chrome, paper = content, never mixed.
STORY: A student opens it between classes, instantly reads "class is in
session," picks a course, and drills questions on paper-textured cards under
a chalk timer -- feels like the real classroom, not corporate ed-tech.
FIRST VIEWPORT: Course-select: chalkboard header band (course code
hand-chalked, underline stroke) above a grid of exercise-book-paper course
cards, ruled like jotter pages, hand-titled.
FORM: Chalkboard & Exercise Book -- candidate 7/7, Nigerian lecture-hall
material list, seed key 5d79a384.
FINISH: unreviewed and undocumented is unfinished; this build ends with the
finish review, the verdict, and DESIGN.md.
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${body.variable} ${chalk.variable} font-sans antialiased`}
      >
        <div
          style={{ display: "none" }}
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `<!--${DIRECTION_CONTRACT}-->`,
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
