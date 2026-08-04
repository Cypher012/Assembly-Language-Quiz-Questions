---
name: QuizSpark
description: Curriculum-specific practice quizzes for university students, styled as the lecture hall itself
colors:
  board: "#1F2E28"
  board-2: "#24352E"
  board-ink: "#F2EFE4"
  board-ink-muted: "#A9B8AE"
  board-line: "#3C4D44"
  paper: "#F6F1E3"
  paper-2: "#EFE7D2"
  paper-ink: "#2B241C"
  paper-ink-muted: "#756A58"
  paper-line: "#DDD0AC"
  rule-blue: "#9FB8D4"
  rule-red: "#BD5445"
  chalk-yellow: "#E3B431"
  chalk-yellow-ink: "#241D0D"
  chalk-sage: "#5C9E79"
  chalk-sage-ink: "#0F2419"
  chalk-coral: "#CF6349"
  chalk-coral-ink: "#2A0F09"
  chalk-coral-bright: "#E08872"
typography:
  display:
    fontFamily: "Permanent Marker, 'Segoe Print', cursive"
    fontSize: "clamp(1.5rem, 3vw, 3rem)"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "normal"
  body:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  mono:
    fontFamily: "ui-monospace, monospace"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "normal"
  label-stamp:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "11px"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.02em"
  label-micro:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "10px"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "0.05em"
rounded:
  sm: "2px"
  md: "4px"
  lg: "6px"
  xl: "10px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
components:
  button-primary:
    backgroundColor: "{colors.chalk-yellow}"
    textColor: "{colors.chalk-yellow-ink}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "{colors.chalk-yellow}"
  button-outline:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.paper-ink}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
  card-paper:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.paper-ink}"
    rounded: "{rounded.md}"
    padding: "24px"
  card-board:
    backgroundColor: "{colors.board}"
    textColor: "{colors.board-ink}"
    rounded: "{rounded.md}"
    padding: "24px"
---

# Design System: QuizSpark

## Overview

**Creative North Star: "Chalkboard & Exercise Book"**

QuizSpark is the lecture hall itself, rebuilt as an interface. The world splits cleanly in two, the way a classroom does: the **chalkboard** — dark slate-green, chalk-dust grain, hand-chalked lettering — carries structure, navigation, and time (headers, timers, the practice-exam entry point, the question navigator). The **exercise book** — warm cream paper, faint blue ruling, a red margin line down the left edge — carries content: courses, chapters, questions, answers, results. A visitor never has to wonder what they're looking at; the material tells them whether they're navigating or working.

This is a peer-built study tool for university students (CSC/CPE coursework), not a corporate ed-tech product, and the world is drawn from the audience's own daily material — the actual chalkboard they sit in front of, the actual ruled exercise book they write answers in — rather than a generic quiz-app aesthetic (rounded cards, one soft accent, gradient CTAs) that any category-default AI build would reach for first.

**Key Characteristics:**
- Two surfaces, one rule: chrome is chalkboard, content is paper, never mixed on the same element.
- Chalk-yellow is the only warm accent; sage and coral are reserved exclusively for correct/incorrect feedback.
- Boxy, not soft — a 6px base radius throughout, refusing the rounded-2xl SaaS-card default.
- Hand-chalked display type (Permanent Marker) for short, shouted elements only; a clean workhorse sans (Inter) carries everything a student actually has to read.

## Colors

Two grounds, five accents. Every color exists because a real classroom object has that color — nothing is decorative.

### Primary
- **Chalk Yellow** (#E3B431): the only primary-action color in the system. Confirm buttons, selected states, focus rings, the exam-mode accent. Ink text on top is Chalk Yellow Ink (#241D0D).

### Secondary
- **Chalk Sage** (#5C9E79): correct answers only — option markers, feedback panels, the "correct" badge in results review.
- **Chalk Coral** (#CF6349): incorrect answers and destructive actions only — wrong-answer markers, the Exit button, delete/cancel affordances.
- **Chalk Coral Bright** (#E08872): the same destructive/warning meaning as Chalk Coral, used only for small or bold text sitting directly on a board surface — plain Chalk Coral clears just ~3.7:1 there, under AA for text. Never use it on paper; plain Chalk Coral already clears AA on cream.

### Neutral — Board (chrome)
- **Chalkboard Slate** (#1F2E28) / **Chalkboard Slate Deep** (#24352E): the page background and every chrome surface (headers, the bottom question-navigator bar, the practice-exam entry card). Rendered with a faint chalk-dust grain texture, never flat.
- **Chalk White** (#F2EFE4): text and icons on board surfaces.
- **Faded Chalk** (#A9B8AE): secondary/muted text on board surfaces.
- **Board Rail** (#3C4D44): borders and dividers on board surfaces.

### Neutral — Paper (content)
- **Exercise-Book Cream** (#F6F1E3) / **Cream Shade** (#EFE7D2): every content surface — course cards, chapter cards, the question card, results, modal bodies. Rendered with faint horizontal blue ruling and a solid red margin line, the same as a real exercise book.
- **Ink Brown** (#2B241C): primary text on paper.
- **Faded Ink** (#756A58): secondary/muted text on paper.
- **Paper Rule** (#DDD0AC): borders on paper surfaces.
- **Notebook Rule Blue** (#9FB8D4): the faint horizontal ruling inside paper surfaces.
- **Margin Red** (#BD5445): the vertical margin line on paper surfaces, and small structural accents (chapter numbers, "Q1" labels) that echo it.

### Named Rules
**The Board-Paper Rule.** Chrome (navigation, time, structure) is always rendered on the chalkboard palette; content (what a student reads or answers) is always rendered on the paper palette. A surface never mixes the two — this is how a visitor always knows whether they're navigating or working.

**The One Accent Rule.** Chalk Yellow is the system's only "this is the primary action" color. Sage and coral are never used for anything except correct/incorrect feedback — they carry meaning, not decoration.

## Typography

**Display Font:** Permanent Marker (with 'Segoe Print', cursive fallback)
**Body Font:** Inter (with ui-sans-serif, system-ui fallback)
**Label/Mono Font:** ui-monospace (system monospace stack)

**Character:** A hand-chalked marker face carries every large, short, declarative moment — screen titles, the practice-exam header, big score/percentage numbers, wordmarks — while Inter carries every sentence a student actually has to read for comprehension: question stems, option text, descriptions, explanations. The pairing is deliberately lopsided: personality is loud but brief, comprehension is quiet and constant.

### Hierarchy
- **Display** (400, clamp(1.5rem, 3vw, 3rem), 1.15 line-height): Screen titles ("Select Your Course", "Practice Exam", "Quiz Complete!"), the QuizSpark wordmark. Always paired with a hand-drawn underline stroke (`.chalk-underline`). Never used below ~1.25rem — it loses legibility fast at small sizes.
- **Body** (400–700, 0.875–1.5rem, 1.4–1.5 line-height): Question stems (1.25–1.5rem, bold), option text (1rem–1.125rem, medium), descriptions and explanations (0.875rem).
- **Label — Stamp** (700, 11px, 0.02em tracking): The rotated course-code chip on course/chapter cards ("CSC302") — the only place in the system that carries a slight rotation, echoing a rubber stamp.
- **Label — Micro** (400, 10px, uppercase, 0.05em tracking): Small status labels above a value — "SCORE", "TIME LEFT". Always paired with a larger value directly below it (score fraction, timer digits), never used alone.
- **Label — General** (700, 0.6875–0.75rem, uppercase or small-caps tracking where used): Chapter numbers ("Ch. 3"), step badges, status badges ("✓ Correct" / "✗ Wrong").
- **Mono/Measurement** (700, 1.5–1.875rem, tabular-nums): Exam timer digits, score fractions ("15/75"). Monospace is used only for literal countdown/measurement values, never as a "technical" costume.

### Named Rules
**The Loud-and-Brief Rule.** Permanent Marker never carries a sentence — only titles, numbers, and short labels. The moment content needs to be *read* rather than *recognized*, it switches to Inter.

## Layout

Single-column content on a max-width container per screen role: course grid at `max-w-7xl` (needs width for a 3-column card grid), chapter/results screens at `max-w-3xl`–`max-w-4xl`, the active question screen at `max-w-2xl` (a single question wants a narrow reading column, not a wide one). The live quiz screen reserves `pb-20` for the fixed bottom navigator bar.

Spacing follows Tailwind's default 4px scale; card interiors use 16–32px padding depending on density (chip rows use 8px gaps, card stacks use 16–24px). Paper cards that carry the red margin line reserve 56–64px of left padding so text never collides with the rule.

Responsive behavior: card grids collapse `lg:grid-cols-3 → sm:grid-cols-2 → grid-cols-1`; the bottom question-navigator bar drops its "Answered: N" segment and the chapter/duration separator below `sm:` to keep the collapsed bar on one line; modals use `w-[calc(100%-2rem)] sm:max-w-lg` so they never exceed the viewport on narrow phones.

## Elevation & Depth

Paper surfaces are soft-shadowed cards resting on the board, the way an index card or sheet of paper actually casts a shadow under ambient light — never a flat, zero-blur block shadow. Depth increases slightly and the card lifts 2px on hover.

### Shadow Vocabulary
- **Resting** (`box-shadow: 0 10px 24px -10px rgba(15,20,17,0.55)`): default state for every selectable paper card (course, chapter, exam-mode cards).
- **Hover** (`box-shadow: 0 16px 32px -10px rgba(15,20,17,0.6)`, `translateY(-2px)`): interactive lift on hover for the same cards.
- **Modal** (`shadow-2xl`): dialogs and the practice-exam modal sit above everything else.

### Named Rules
**The Ambient Rule.** Shadows are always soft and offset, describing a physical object under light. A hard, zero-blur "sticker" shadow never appears — this system isn't neobrutalist.

## Shapes

Base radius is 6px (`--radius: 0.375rem`), driving a small scale: 2px / 4px / 6px / 10px. This is deliberately boxy — closer to an index card or a ruled page than the soft `rounded-2xl` a default SaaS build reaches for. Borders are usually 2px solid in board or paper-line tones; the one exception that's earned rather than decorative is the paper surfaces' red vertical margin line, a literal reproduction of a real exercise book's margin rule, present on every paper card as structural signature rather than an emphasis accent.

## Components

### Buttons
- **Shape:** 4–6px radius (`rounded-md`), never pill-shaped.
- **Primary:** Chalk Yellow fill, Chalk Yellow Ink text, bold weight. Used for the single primary action per screen (Confirm Answer, Start Exam, Restart Quiz).
- **Outline/Secondary:** Paper fill with a 2px board-colored border when placed on a paper surface — shadcn's default `bg-background` outline style is explicitly overridden wherever it would render board-dark on a paper card.
- **Hover / Focus:** Hover darkens/lightens the fill slightly; every focusable control (including hand-rolled `<button>`s that aren't shadcn primitives) carries an explicit `focus-visible:ring-[3px] focus-visible:ring-chalk-yellow/70` ring with a surface-matched offset color — no control ships without a visible keyboard-focus state.

### Cards / Containers
- **Corner Style:** 4–6px (`rounded-md`).
- **Background:** Paper (`.paper-surface`, ruled + margin line) for content cards; Board (`.board-surface`, chalk-dust grain) for the practice-exam entry point and all navigation chrome.
- **Shadow Strategy:** see Elevation & Depth — Resting/Hover pair.
- **Border:** none by default on paper cards (the shadow + ruling carry the edge); 2px solid on modals and the practice-exam board card.
- **Internal Padding:** 20–32px, with an extra 56–64px on the left for any card carrying the margin-rule background.

### Inputs / Fields (Checkboxes)
- **Style:** shadcn Checkbox, retokenized — checked state fills Chalk Yellow.
- **Focus:** the shared focus-visible ring.

### Modals
- Board-styled throughout — header strip and body both use the Board palette (`bg-board`, `text-board-ink`/`text-board-ink-muted`, `bg-board-2` for secondary fills), so the dialog reads as one continuous chalked surface rather than switching materials mid-dialog. The header keeps the chalk-dust grain texture (`.board-surface`) with a `border-b border-board-line` separating it from the flatter body. Chip/row "unselected" states use `bg-board-2 border-board-line`; "selected" states use a `bg-chalk-yellow/20` tint, which reads clearly against the dark ground.
- **Never set `DialogContent`/`AlertDialogContent`'s background with the custom `.paper-surface-plain`/`.board-surface` classes.** Both are declared in Tailwind's `@layer components`, which is emitted *before* `@layer utilities` — so the base component's own `bg-background` utility class always wins the cascade regardless of class order in `className`, silently reverting the surface to board-dark even when a paper look was intended. Set the background with a real Tailwind utility instead (`bg-board` or `bg-paper`), which `cn()`'s `twMerge` can correctly de-conflict against the base class.
- Width is `w-[calc(100%-2rem)] sm:max-w-lg` (or `sm:max-w-sm` for the smaller alert dialog) — never override this pattern with a bare `max-w-*` utility, since it collides with the base Dialog's mobile constraint via Tailwind's class-merge and reopens the mobile-overflow bug this system fixed once already.
- Any direct child of `DialogContent` that wraps text-truncating or flex-wrapping content needs its own explicit `min-w-0` — `DialogContent` is `display: grid`, and grid items default to `min-width: auto`, which silently defeats `truncate` and `flex-wrap` deeper in the tree.

### Question Navigator (signature component)
The fixed bottom bar is Board-styled chrome. Its expanded state renders one small square per question — a literal seating-chart / attendance-grid metaphor — filled Chalk Sage (correct), Chalk Coral (incorrect), or Board-2 (unanswered, disabled), with the current question ringed in Chalk Yellow.

## Do's and Don'ts

### Do:
- **Do** keep chrome on the board palette and content on the paper palette — never blend them on one element (The Board-Paper Rule).
- **Do** reserve Chalk Yellow for the single primary action on a screen; reserve Sage/Coral exclusively for correct/incorrect feedback (The One Accent Rule).
- **Do** give every new interactive element — including hand-rolled buttons — an explicit `focus-visible` ring; none of the shared utility classes apply one automatically outside the shadcn primitives.
- **Do** add `min-w-0` to any direct child of a `grid`-based container (shadcn `DialogContent`/`AlertDialogContent`) that contains `truncate` text or a `flex-wrap` row.
- **Do** use the 6px-based radius scale (`rounded-sm/md/lg`) for a boxy, index-card feel.
- **Do** use Chalk Coral Bright, not plain Chalk Coral, for any coral text sitting directly on a board surface (dark ground drops it under 4:1).

### Don't:
- **Don't** use Permanent Marker for anything a student has to read as a sentence — headings, numbers, and short labels only.
- **Don't** override a shadcn `Dialog`/`AlertDialog`'s width with a bare `max-w-*` class; use `w-[calc(100%-2rem)] sm:max-w-*` so the mobile constraint survives Tailwind's class merge.
- **Don't** apply a gradient fill to a CTA — every accent in this system is a flat chalk color; gradients read as the generic SaaS-button default this world specifically refuses.
- **Don't** use the shadcn `outline` Button variant unmodified on a paper surface — its default `bg-background` resolves to board-dark and reads as disabled against cream paper.
- **Don't** set a `DialogContent`/`AlertDialogContent` background with the custom `.paper-surface-plain`/`.board-surface` classes — `@layer components` loses to the base component's `bg-background` utility regardless of class order. Use a real utility (`bg-board`/`bg-paper`) so `twMerge` can resolve the conflict.
