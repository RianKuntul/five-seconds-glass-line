// Five Seconds to Explain the Glass — make.fun entry (five-seconds-glass-line).
// Writes exactly one sentence — the excuse a house cat gives in the five
// seconds after sweeping a glass off the table — to
// $MAKEFUN_OUTPUT_DIR/entry.txt (or ./output/entry.txt when unset).
// Deterministic: fixed string, no network, no randomness, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "The glass spent all evening staring at the floor like it wanted to be closer to it, so I simply introduced them — they're very happy together now.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
