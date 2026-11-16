// link preview images for the guide: one per article plus the overview, in the
// style of the other previews (navy, HASC, the mountains), 1200×630 at 2x.
// Run after adding an article: npm run og:ratgeber
// Uses the Chromium that Playwright has already installed on this machine.
// The range shows its whole height, the summit stays the highest point.
import { chromium } from "playwright-core";
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const out = path.join(root, "public/og");
const articlesDir = path.join(root, "app/content/ratgeber");

const font = (weight) =>
  `@font-face{font-family:S;font-weight:${weight};src:url(data:font/woff2;base64,${fs
    .readFileSync(
      path.join(
        root,
        `public/fonts/source-sans-3-latin-${weight}-normal.woff2`,
      ),
    )
    .toString("base64")})}`;
const logo = fs.readFileSync(
  path.join(root, "public/brand/hasc-wortmarke-negativ.svg"),
  "utf8",
);
const escape = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");

// the header block of an article, the same fields the site reads
function frontmatter(file) {
  const raw = fs.readFileSync(file, "utf8");
  const block = raw.match(/^---\n([\s\S]*?)\n---/)[1];
  return Object.fromEntries(
    block
      .split("\n")
      .filter((l) => l.includes(":"))
      .map((l) => {
        const i = l.indexOf(":");
        return [l.slice(0, i).trim(), l.slice(i + 1).trim()];
      }),
  );
}

const page = ({ title, sub }) => `<!doctype html><html><head><style>
${font(400)}${font(600)}
*{margin:0;box-sizing:border-box}
body{width:1200px;height:630px;background:#15233a;font-family:S;position:relative;overflow:hidden;text-align:center;color:#fff}
.logo{position:absolute;top:52px;left:50%;transform:translateX(-50%);width:150px}
.logo svg{width:100%;height:auto;display:block}
.text{position:absolute;top:150px;left:120px;right:120px;display:flex;flex-direction:column;align-items:center}
.eyebrow{font-size:22px;font-weight:600;letter-spacing:.2em;color:#3fb8a0}
h1{margin-top:22px;font-size:${title.length > 48 ? 56 : 64}px;line-height:1.15;font-weight:600;text-wrap:balance}
.sub{margin-top:24px;font-size:26px;color:#cbd5e1}
svg.m{position:absolute;bottom:-1px}
</style></head><body>
<div class="logo">${logo}</div>
<div class="text"><p class="eyebrow">RATGEBER</p><h1>${escape(title)}</h1><p class="sub">${escape(sub)}</p></div>
<svg class="m" viewBox="0 190 1200 210" preserveAspectRatio="none" style="left:0;width:100%;height:160px">
<path d="M0 400 L180 260 L300 320 L460 220 L600 290 L760 200 L900 280 L1050 240 L1200 300 L1200 400Z" fill="#1c2e4a"/>
<path d="M0 400 L240 320 L420 350 L600 300 L780 350 L960 310 L1200 370 L1200 400Z" fill="#26395a"/>
</svg>
<svg class="m" viewBox="380 130 440 270" style="height:195px;left:50%;transform:translateX(-50%)">
<path d="M380 400 L600 140 L820 400Z" fill="#26395a"/>
<path d="M469.5 400 L600 160 L730.5 400 L704 400 L600 208.7 L496 400Z" fill="#3fb8a0"/>
</svg>
</body></html>`;

const jobs = [
  {
    file: "ratgeber-de.png",
    title: "Websites verständlich erklärt.",
    sub: "Für Selbstständige, kleine Betriebe und Vereine",
  },
  ...fs
    .readdirSync(articlesDir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const m = frontmatter(path.join(articlesDir, f));
      return {
        file: `ratgeber-${f.replace(/\.md$/, "")}-de.png`,
        title: `${m.titel} ${m.hervorhebung}`,
        sub: m.thema ? `${m.thema} · hschaletzky.com` : "hschaletzky.com",
      };
    }),
];

const browser = await chromium.launch();
const tab = await browser.newPage({
  viewport: { width: 1200, height: 630 },
  deviceScaleFactor: 2,
});
for (const job of jobs) {
  await tab.setContent(page(job));
  await tab.evaluate(() => document.fonts.ready);
  await tab.screenshot({ path: path.join(out, job.file) });
  console.log("public/og/" + job.file);
}
await browser.close();
