// UI audit: opens the running site in headless Chrome and checks the rules of
// docs/DESIGN-STANDARD.md that need a real browser (the token guard cannot).
//
//   npm run dev            # or: npx serve out -l 3000 (basePath is empty in dev)
//   npm run audit:ui       # optional: URL=http://localhost:3100/ CHROME=/path/to/chrome
//   SELFTEST=1 npm run audit:ui   # injects a bad link: must report failures
//
// Runs 4 passes (desktop 1280 and phone 390, light and dark) and exits with 1
// if anything fails. Needs Node 22+ (global WebSocket) and Chrome/Chromium.
// token-check:allow-file color px typography (this file inspects rendered values)
import { spawn } from "node:child_process";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const URL_ = process.env.URL ?? "http://localhost:3000/";
const CHROME =
  process.env.CHROME ??
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const PORT = 9555;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

if (typeof WebSocket === "undefined") {
  console.error("Node 22+ is required (global WebSocket).");
  process.exit(2);
}

const profile = mkdtempSync(join(tmpdir(), "audit-ui-"));
const chrome = spawn(
  CHROME,
  [
    "--headless=new",
    `--remote-debugging-port=${PORT}`,
    `--user-data-dir=${profile}`,
    "--no-first-run",
    "--hide-scrollbars",
    "about:blank",
  ],
  { stdio: "ignore" },
);

async function connect() {
  for (let i = 0; i < 40; i++) {
    try {
      const targets = await (
        await fetch(`http://127.0.0.1:${PORT}/json`)
      ).json();
      const page = targets.find((t) => t.type === "page");
      if (page) return page.webSocketDebuggerUrl;
    } catch {}
    await sleep(250);
  }
  throw new Error("Chrome did not start. Set CHROME=/path/to/chrome");
}

// What the page reports back. Runs inside the browser.
const inPage = () => {
  const fails = [];
  const fail = (rule, msg) => fails.push(`${rule}: ${msg}`);
  const mobile = innerWidth < 641;
  const root = document.documentElement;

  // --- allowed typography, measured from the tokens themselves ---------------
  const probe = (css) => {
    const el = document.createElement("span");
    el.style.cssText = `position:absolute;visibility:hidden;${css}`;
    document.body.append(el);
    const v = getComputedStyle(el);
    const out = { size: v.fontSize, weight: v.fontWeight };
    el.remove();
    return out;
  };
  const sizes = new Set(
    ["xs", "sm", "md", "lg", "xl", "h2", "display"].map(
      (k) => probe(`font-size:var(--fs-${k})`).size,
    ),
  );
  const weights = new Set(
    ["regular", "semibold", "bold"].map(
      (k) => probe(`font-weight:var(--fw-${k})`).weight,
    ),
  );

  // --- colour contrast (WCAG AA) ---------------------------------------------
  const parse = (c) => {
    const m = c.match(
      /rgba?\(([\d.]+),\s*([\d.]+),\s*([\d.]+)(?:,\s*([\d.]+))?/,
    );
    if (m) return [+m[1], +m[2], +m[3], m[4] === undefined ? 1 : +m[4]];
    const s = c.match(
      /color\(srgb ([\d.]+) ([\d.]+) ([\d.]+)(?: \/ ([\d.]+))?\)/,
    );
    return s
      ? [s[1] * 255, s[2] * 255, s[3] * 255, s[4] === undefined ? 1 : +s[4]]
      : null;
  };
  const over = (t, b) =>
    [0, 1, 2].map((i) => t[i] * t[3] + b[i] * (1 - t[3])).concat(1);
  const bgOf = (e) => {
    const layers = [];
    for (let n = e; n; n = n.parentElement) {
      const b = parse(getComputedStyle(n).backgroundColor);
      if (b && b[3] > 0) {
        layers.push(b);
        if (b[3] === 1) break;
      }
    }
    return layers
      .reverse()
      .reduce((base, l) => over(l, base), [255, 255, 255, 1]);
  };
  const lum = (c) => {
    const f = (v) =>
      (v /= 255) <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
    return 0.2126 * f(c[0]) + 0.7152 * f(c[1]) + 0.0722 * f(c[2]);
  };
  const ratio = (a, b) =>
    (Math.max(lum(a), lum(b)) + 0.05) / (Math.min(lum(a), lum(b)) + 0.05);

  const seenFont = new Set();
  for (const e of document.querySelectorAll("body *")) {
    if (e.closest("svg,script,style,iframe,[aria-hidden='true']")) continue;
    const hasText = [...e.childNodes].some(
      (n) => n.nodeType === 3 && n.textContent.trim(),
    );
    const cs = getComputedStyle(e);
    if (cs.display === "none" || cs.visibility === "hidden") continue;
    const label = (e.textContent || "")
      .trim()
      .replace(/\s+/g, " ")
      .slice(0, 28);
    if (hasText) {
      const size = parseFloat(cs.fontSize);
      const large =
        size >= 24 || (size >= 18.66 && parseInt(cs.fontWeight) >= 700);
      const fg0 = parse(cs.color);
      if (fg0) {
        const bg = bgOf(e);
        const r = ratio(over(fg0, bg), bg);
        if (r < (large ? 3 : 4.5))
          fail("contrast", `${r.toFixed(2)}:1 «${label}»`);
      }
      const key = `${cs.fontSize}|${cs.fontWeight}|${cs.fontFamily.split(",")[0]}`;
      if (!seenFont.has(key)) {
        seenFont.add(key);
        if (!sizes.has(cs.fontSize))
          fail("type-size", `${cs.fontSize} is not on the scale («${label}»)`);
        if (!weights.has(cs.fontWeight))
          fail("type-weight", `${cs.fontWeight} («${label}»)`);
      }
    }
  }
  const families = new Set(
    [...document.querySelectorAll("body *")]
      .filter((e) =>
        [...e.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim()),
      )
      .map((e) =>
        getComputedStyle(e).fontFamily.split(",")[0].replace(/"/g, ""),
      ),
  );
  if (families.size > 2)
    fail(
      "type-family",
      `${families.size} families: ${[...families].join(", ")}`,
    );

  // --- touch targets: 24px on desktop, 44px on phones ------------------------
  const minHit = mobile ? 44 : 24;
  for (const e of document.querySelectorAll("a[href],button,summary")) {
    if (e.classList.contains("skip-link")) continue;
    const r = e.getBoundingClientRect();
    if (!r.width || !r.height) continue;
    if (r.height < minHit - 0.5)
      fail(
        "hit-target",
        `${Math.round(r.height)}px < ${minHit}px «${(e.textContent || e.getAttribute("aria-label") || "").trim().slice(0, 28)}»`,
      );
  }

  // --- structure ---------------------------------------------------------------
  if (root.scrollWidth > root.clientWidth)
    fail(
      "overflow",
      `horizontal scroll (${root.scrollWidth} > ${root.clientWidth})`,
    );
  const heads = [...document.querySelectorAll("h1,h2,h3,h4")].map(
    (h) => +h.tagName[1],
  );
  if (heads.filter((h) => h === 1).length !== 1)
    fail("headings", "exactly one h1 is required");
  heads.forEach((h, i) => {
    if (i && h - heads[i - 1] > 1)
      fail("headings", `level jumps from h${heads[i - 1]} to h${h}`);
  });
  for (const img of document.querySelectorAll("img"))
    if (!img.hasAttribute("alt")) fail("alt", img.getAttribute("src"));
  if (!document.querySelector("main")) fail("landmarks", "no <main>");
  if (!document.querySelector("a.skip-link")) fail("landmarks", "no skip link");
  for (const a of document.querySelectorAll('a[href^="#"]')) {
    const id = a.getAttribute("href").slice(1);
    if (id && !document.getElementById(id))
      fail("anchors", `#${id} does not exist`);
  }
  for (const a of document.querySelectorAll("a:not([href])"))
    fail("anchors", `link without href «${a.textContent.trim().slice(0, 28)}»`);
  for (const a of document.querySelectorAll('a[target="_blank"]')) {
    if (!/noopener/.test(a.rel))
      fail(
        "links",
        `target=_blank without rel=noopener «${a.textContent.trim().slice(0, 28)}»`,
      );
  }

  // --- section rhythm: backgrounds strictly alternate -----------------------------
  const bands = [...document.querySelectorAll("main > section")].map((s) => {
    const c = getComputedStyle(s).backgroundColor;
    return c === "rgba(0, 0, 0, 0)" ? "page" : c;
  });
  const page = getComputedStyle(document.body).backgroundColor;
  const names = bands.map((b, i) =>
    b === "page"
      ? "page"
      : b === page
        ? "page"
        : i === bands.length - 1
          ? "inverse"
          : "sunken",
  );
  for (let i = 1; i < names.length; i++) {
    if (names[i] === names[i - 1])
      fail(
        "rhythm",
        `sections ${i} and ${i + 1} share a background (${names[i]})`,
      );
  }
  return fails;
};

const wsUrl = await connect();
const ws = new WebSocket(wsUrl);
await new Promise((r) => ws.addEventListener("open", r, { once: true }));
let id = 0;
const pending = new Map();
ws.addEventListener("message", (m) => {
  const d = JSON.parse(m.data);
  if (d.id && pending.has(d.id)) {
    pending.get(d.id)(d);
    pending.delete(d.id);
  }
});
const send = (method, params = {}) =>
  new Promise((res, rej) => {
    const i = ++id;
    pending.set(i, (d) =>
      d.error ? rej(new Error(`${method}: ${d.error.message}`)) : res(d.result),
    );
    ws.send(JSON.stringify({ id: i, method, params }));
  });

let failed = 0;
try {
  await send("Page.enable");
  await send("Runtime.enable");
  for (const [label, width, mobile, scheme] of [
    ["desktop 1280 light", 1280, false, "light"],
    ["desktop 1280 dark", 1280, false, "dark"],
    ["phone 390 light", 390, true, "light"],
    ["phone 390 dark", 390, true, "dark"],
  ]) {
    await send("Emulation.setDeviceMetricsOverride", {
      width,
      height: 900,
      deviceScaleFactor: 1,
      mobile,
    });
    await send("Emulation.setEmulatedMedia", {
      features: [{ name: "prefers-color-scheme", value: scheme }],
    });
    await send("Page.navigate", { url: URL_ });
    await sleep(2500);
    if (process.env.SELFTEST) {
      // Proves the audit can fail: injects a tiny, low-contrast, dead link.
      await send("Runtime.evaluate", {
        expression: `document.querySelector("main").insertAdjacentHTML("afterbegin", '<a href="#nope" style="font-size:13px;color:#bbb;background:#ddd">x</a>')`,
      });
    }
    const r = await send("Runtime.evaluate", {
      expression: `(${inPage})()`,
      returnByValue: true,
    });
    if (r.exceptionDetails)
      throw new Error(JSON.stringify(r.exceptionDetails).slice(0, 300));
    const fails = r.result.value;
    failed += fails.length;
    console.log(`${fails.length ? "FAIL" : "ok  "}  ${label}`);
    // Same finding on one page repeats (e.g. 7 numerals): show each kind once.
    const seen = new Set();
    for (const f of fails) {
      const kind = f.split(":")[0];
      const n = fails.filter((x) => x.startsWith(kind)).length;
      if (seen.has(kind)) continue;
      seen.add(kind);
      console.log(`      ${f}${n > 1 ? `  (+${n - 1} more ${kind})` : ""}`);
    }
  }
} finally {
  try {
    await send("Browser.close");
  } catch {}
  ws.close();
  chrome.kill();
  await sleep(500);
  try {
    rmSync(profile, { recursive: true, force: true, maxRetries: 5 });
  } catch {}
}
console.log(failed ? `\n${failed} problem(s)` : "\nUI audit passed");
process.exit(failed ? 1 : 0);
