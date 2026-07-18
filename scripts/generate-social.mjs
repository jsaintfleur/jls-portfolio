import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");
const requireFromShelterShield = createRequire(path.resolve(root, "../jls-sheltershield/package.json"));
const { chromium } = requireFromShelterShield("playwright");

const outDir = path.join(root, "assets");
fs.mkdirSync(outDir, { recursive: true });

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<style>
  *{box-sizing:border-box}
  body{margin:0;width:1200px;height:630px;background:#0a1642;color:#fff;font-family:Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;overflow:hidden}
  .mesh{position:absolute;inset:-20%;background:
    radial-gradient(circle at 18% 20%, rgba(127,154,224,.56), transparent 28%),
    radial-gradient(circle at 80% 8%, rgba(42,73,184,.58), transparent 30%),
    radial-gradient(circle at 74% 78%, rgba(224,50,61,.34), transparent 28%),
    linear-gradient(135deg,#0a1642,#102270 55%,#142d8c);filter:saturate(1.08)}
  .grid{position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.08) 1px,transparent 1px);background-size:64px 64px;mask-image:linear-gradient(90deg,rgba(0,0,0,.2),#000 34%,#000 70%,rgba(0,0,0,.2))}
  main{position:relative;height:100%;padding:76px 86px;display:flex;flex-direction:column;justify-content:space-between}
  .eyebrow{font-size:24px;letter-spacing:.18em;text-transform:uppercase;color:#d6e0f7;font-weight:700}
  h1{font-size:74px;line-height:.95;letter-spacing:-.04em;max-width:760px;margin:18px 0 0}
  p{font-size:30px;line-height:1.3;color:#eef2fc;max-width:780px;margin:24px 0 0}
  .marks{display:flex;gap:16px}
  .mark{width:54px;height:54px;border:1px solid rgba(255,255,255,.28);border-radius:16px;background:rgba(255,255,255,.1);display:grid;place-items:center;font-size:22px;font-weight:800}
  .name{font-size:28px;font-weight:800;letter-spacing:-.02em}
</style>
</head>
<body>
  <div class="mesh"></div>
  <div class="grid"></div>
  <main>
    <div>
      <div class="eyebrow">Data & AI Portfolio</div>
      <h1>Jean-Luc Saint-Fleur</h1>
      <p>Geospatial analysis · forecasting · ML · executive dashboards</p>
    </div>
    <div class="marks" aria-hidden="true">
      <div class="mark">S</div><div class="mark">C</div><div class="mark">P</div><div class="mark">T</div><div class="mark">M</div><div class="mark">E</div>
    </div>
    <div class="name">Six production-grade public-data products</div>
  </main>
</body>
</html>`;

const browser = await chromium.launch();
try {
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
  await page.setContent(html, { waitUntil: "load" });
  await page.screenshot({ path: path.join(outDir, "social-preview.png"), fullPage: false });
} finally {
  await browser.close();
}

fs.writeFileSync(
  path.join(outDir, "favicon.svg"),
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="16" fill="#142d8c"/><path d="M16 40V24h7v10c0 5 3 8 8 8 6 0 9-4 9-10V24h8v16h-7v-5c-2 4-6 6-11 6-8 0-14-5-14-14z" fill="#fff"/></svg>\n`,
);
