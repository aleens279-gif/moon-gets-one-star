// The Moon Gets One Star — writes one line to /output/entry.txt
// Gate: 98 chars (max 120), one line, no trailing newline. Verified by running node main.ts.
// Twist: the Moon reviewed as a bad roommate — night shifts, ghosting, phasing.
import { mkdirSync, writeFileSync } from "node:fs";

const PARTS = [
  "One star. Only works",
  "nights, ghosts me",
  "for weeks, and keeps phasing.",
  "Worst roommate",
  "I've ever had.",
];

const LINE = PARTS.join(" ");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
