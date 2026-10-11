#!/usr/bin/env node
/**
 * Design-token guard. Fails (exit 1) when component code bypasses the token
 * system in src/styles/tokens.css. Runs as part of `npm run lint` and in CI.
 *
 * Rules (see README, "Дизайн-система"):
 *   primitive     CSS/TSX must not reference palette primitives
 *                 (--red-500, --ink-900, --cream-100 …); use roles
 *                 (--color-accent, --text-strong, --surface-page …).
 *   color         no hex / rgb() / hsl() colour literals outside tokens.css.
 *   typography    no literal font-size / font-weight / letter-spacing /
 *                 line-height values; use --fs-*, --fw-*, --ls-*, --lh-*.
 *   px            no literal px lengths in CSS (media queries excepted);
 *                 use --space-*, --border-*, --radius-* …
 *   inline-style  no style={{…}} in components.
 *   unknown-var   var(--x) must be defined (globally or as a local token).
 *   theme-parity  every themed role in tokens.css (light-dark(...)) must also
 *                 appear in the @supports fallback block for old browsers.
 *
 * Opt out per file, explicitly and visibly, with a comment such as:
 *   // token-check:allow-file inline-style px (reason)
 */
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL("..", import.meta.url));
const SRC = join(ROOT, "src");
const TOKENS = join(SRC, "styles", "tokens.css");

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
}

const files = walk(SRC).filter((f) => /\.(css|tsx)$/.test(f));

// ---- collect defined custom properties ----
const defined = new Set(["--font-golos", "--font-jetbrains"]); // injected by next/font
for (const f of files.filter((f) => f.endsWith(".css"))) {
  for (const m of readFileSync(f, "utf8").matchAll(/(--[\w-]+)\s*:/g))
    defined.add(m[1]);
}

const violations = [];
const add = (file, line, rule, msg) =>
  violations.push(`${relative(ROOT, file)}:${line}  [${rule}]  ${msg}`);

for (const file of files) {
  const isTokens = file === TOKENS;
  const isCss = file.endsWith(".css");
  const text = readFileSync(file, "utf8");
  const allowed = new Set(
    (text.match(/token-check:allow-file\s+([^\n(*]*)/)?.[1] ?? "")
      .trim()
      .split(/\s+/)
      .filter(Boolean),
  );
  // blank out /* block comments */ (also multi-line ones) but keep line numbers
  const lines = text
    .replace(/\/\*[\s\S]*?\*\//g, (m) => m.replace(/[^\n]/g, " "))
    .split("\n");

  lines.forEach((raw, i) => {
    const n = i + 1;
    // strip comments so documentation can mention the forbidden things
    const line = raw.replace(/\/\*.*?\*\//g, "").replace(/(^|\s)\/\/.*$/, "$1");
    if (!line.trim()) return;

    // unknown variables apply everywhere, tokens.css included
    for (const m of line.matchAll(/var\(\s*(--[\w-]+)/g)) {
      if (!defined.has(m[1]) && !allowed.has("unknown-var"))
        add(file, n, "unknown-var", `${m[1]} is not defined`);
    }
    if (isTokens) return;

    if (!allowed.has("primitive")) {
      const m = line.match(/var\(\s*--(cream|sand|ink|red|olive|amber)-\d+/);
      if (m)
        add(
          file,
          n,
          "primitive",
          `palette primitive in a component: use a role token (${m[0].replace("var(", "")})`,
        );
    }
    if (!allowed.has("color")) {
      if (
        /#[0-9a-fA-F]{3,8}\b/.test(
          line
            .replace(/href=["'][^"']*["']/g, "")
            .replace(/["'`]#[\w-]+["'`]/g, ""),
        ) ||
        /\b(rgba?|hsla?|oklch|oklab)\(/.test(line)
      )
        add(file, n, "color", "colour literal: use a semantic token");
    }
    if (isCss && !allowed.has("typography")) {
      if (/font-size:\s*[\d.]+(px|rem|em)\b/.test(line))
        add(file, n, "typography", "literal font-size: use --fs-*");
      if (/font-weight:\s*\d{3}\b/.test(line))
        add(file, n, "typography", "literal font-weight: use --fw-*");
      if (/letter-spacing:\s*-?[\d.]+(px|em|rem)\b/.test(line))
        add(file, n, "typography", "literal letter-spacing: use --ls-*");
      if (
        /line-height:\s*[\d.]+\s*(;|$)/.test(line) &&
        !/line-height:\s*1\s*(;|$)/.test(line)
      )
        add(file, n, "typography", "literal line-height: use --lh-*");
    }
    if (
      isCss &&
      !allowed.has("px") &&
      !/@media/.test(line) &&
      /(^|[^\w.-])-?\d*\.?\d+px\b/.test(line)
    ) {
      add(
        file,
        n,
        "px",
        "literal px length: use a spacing/border/radius token",
      );
    }
    if (!isCss && !allowed.has("inline-style") && /style=\{\{/.test(line)) {
      add(
        file,
        n,
        "inline-style",
        "inline style: move it to a CSS module using tokens",
      );
    }
  });
}

// ---- theme parity: light-dark() roles <-> @supports fallback ----
{
  const css = readFileSync(TOKENS, "utf8");
  const marker = css.indexOf("@supports not (color: light-dark");
  if (marker === -1) {
    violations.push(
      `${relative(ROOT, TOKENS)}:1  [theme-parity]  missing the @supports fallback block`,
    );
  } else {
    const fallbackEnd = css.indexOf("/* ----", marker);
    const fallback = css.slice(
      marker,
      fallbackEnd === -1 ? undefined : fallbackEnd,
    );
    const themed = [
      ...css.slice(0, marker).matchAll(/(--[\w-]+)\s*:\s*light-dark\(/g),
    ].map((m) => m[1]);
    const inFallback = new Set(
      [...fallback.matchAll(/(--[\w-]+)\s*:/g)].map((m) => m[1]),
    );
    for (const name of themed) {
      if (!inFallback.has(name)) {
        violations.push(
          `${relative(ROOT, TOKENS)}:1  [theme-parity]  ${name} is themed but missing from the @supports fallback`,
        );
      }
    }
  }
}

if (violations.length) {
  console.error(`\nDesign-token check failed (${violations.length}):\n`);
  for (const v of violations) console.error("  " + v);
  console.error("\nSee src/styles/tokens.css and README → «Дизайн-система».\n");
  process.exit(1);
}
console.log(`design tokens OK — ${files.length} files checked`);
