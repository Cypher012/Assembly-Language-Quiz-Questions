# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

University students studying for specific courses — primarily the developer ("Cipher") and their course mates. They use it to self-test before exams and tests, practicing against real question banks drawn from their own lecture material. No institutional or public-at-large audience; this is a peer tool built by a student for students on the same curriculum.

## Product Purpose

An interactive multiple-choice quiz app for exam preparation. Students pick a course and chapter (or a full timed practice exam), answer randomized/shuffled questions, and get instant feedback with explanations. Success means better exam readiness through realistic, repeatable practice — not content delivery or teaching from scratch.

## Positioning

Not a generic quiz platform — the value is course-specific question banks tied directly to the actual curriculum the users are studying (CSC302 Object-Oriented Programming, CSC304 Business and Commercial Programming, CPE310 Agent-Based Systems, CSC306 Human-Computer Interaction, CSC312 System Analysis and Design Methodologies). A neighboring generic MCQ app could not truthfully offer this specific, curriculum-matched content.

## Operating Context

Used casually and often close to test/exam dates, on whatever device is at hand (phone between classes, laptop while studying). No accounts, no institutional login — open the link and start practicing. Practice Exam mode (timed, configurable chapter/question-count/duration) mirrors real assessment conditions; regular chapter mode is lower-stakes, repeatable drilling.

## Capabilities and Constraints

- Fully client-side: no backend, no database, no accounts. State (course visibility settings, in-progress timed exams) lives in `localStorage` only.
- Deployed as a static/edge Next.js app via Cloudflare (OpenNext + Wrangler).
- Repository is now **public** (previously marked private in project docs — that note is stale and should be corrected as part of any documentation update).
- Question banks are real, already-written course content (hundreds of questions per course), not placeholder data.
- Undecided: whether a backend/accounts is ever added is open — current instruction is to preserve the no-backend architecture unless a redesign direction specifically calls for something a static client-side app can't do.

## Brand Commitments

Footer credit "Crafted by Cipher 💻 ❤️" is an existing personal signature on the app. Preserve unless the user says otherwise — this is a personal/peer project, not a corporate product, and that voice is part of its identity.

## Evidence on Hand

Real, already-authored question banks for 5 live courses (roughly 380, 220, 210, 100, and 270 questions respectively), each with real chapter/lecture titles and descriptions pulled from actual course material. No fabricated testimonials, pricing, or institutional branding exist or should be invented.

## Product Principles

1. Zero friction — no signup, no backend round-trip; open it and start practicing immediately.
2. The content is the product — course-specific accuracy matters more than feature breadth.
3. Practice should mirror real assessment conditions when it matters (timed exam mode) and stay low-stakes and repeatable otherwise (chapter drilling).
4. Free and shareable among course mates — public by nature, not gated or monetized.
5. Personal, peer-made craft — built by a student currently taking these courses, not a faceless ed-tech product.
