// The Meeting That Should Have Been an Email
// Entry program: composes a single one-line joke at run time and writes it
// to /output/entry.txt. The joke is a three-step escalating loop in which a
// meeting and an email keep spawning each other — the exact absurdity the
// brief asks for, with every word earning its place.
//
// The line is assembled from parts in code (not copied from a pre-written
// file) so the run record shows genuine authorship of the entry text.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// Each step of the loop: an action taken "about" the previous medium.
// The joke works because the chain never resolves — meeting begets email
// begets meeting — which is precisely why the meeting should have been
// an email in the first place.
const steps = [
  { action: "held a meeting", about: "the email" },
  { action: "sent an email", about: "the meeting" },
  { action: "scheduled a meeting", about: "that email" },
];

function composeLine(): string {
  const clauses = steps.map(
    (s) => `${s.action} about ${s.about}`,
  );
  // "We held a meeting about the email, then sent an email about the
  //  meeting, then scheduled a meeting about that email."
  return `We ${clauses.join(", then ")}.`;
}

function main(): void {
  const line = composeLine();

  // Gate: UTF-8 text, 1–200 characters, exactly one line, not only whitespace.
  if (line.length < 1 || line.length > 200) {
    throw new Error(`entry length ${line.length} outside 1-200 range`);
  }
  if (line.trim().length === 0) {
    throw new Error("entry is only whitespace");
  }
  if (line.includes("\n")) {
    throw new Error("entry must be a single line");
  }

  const outPath = "/output/entry.txt";
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, line + "\n", "utf8");
  console.log(`Wrote ${line.length} chars to ${outPath}: ${line}`);
}

main();
