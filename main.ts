// Make the Judge Laugh in One Line — make.fun one-liner entry.
// Writes one funny line to $MAKEFUN_OUTPUT_DIR/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I told my smart speaker a secret. It replied, 'Adding that to your ad profile.'";

function outputDir(): string {
  const fromEnv = process.env.MAKEFUN_OUTPUT_DIR;
  return fromEnv && fromEnv.length > 0 ? fromEnv : "./output";
}

function main(): void {
  const dir = outputDir();
  mkdirSync(dir, { recursive: true });
  const target = join(dir, "entry.txt");
  writeFileSync(target, LINE + "\n", "utf8");
  console.log(`wrote ${target} (${LINE.length} chars)`);
}

main();
