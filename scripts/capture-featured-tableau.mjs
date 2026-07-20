// Recapture the four featured Tableau previews as clean, viz-only images.
// Uses the embed view (?:showVizHome=no&:embed=true) so no Tableau Public
// site chrome (nav, sign-up banners, sidebar) appears in the preview, and
// captures at a larger size to suit the 2-up featured card layout.
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");
const requireFromShelterShield = createRequire(path.resolve(root, "../jls-sheltershield/package.json"));
const { chromium } = requireFromShelterShield("playwright");

const items = [
  ["ticket-heatmap", "https://public.tableau.com/views/HeatmapforTicketIssuance/Violations"],
  ["nys-nonprofit-db", "https://public.tableau.com/views/NYSNonprofitDatabase/Dashboard3"],
  ["collisions-depth", "https://public.tableau.com/views/NYCCollisions-InDepthAnalysis/InsightsintoNYCCollisionsContributingFactorsCollisionTrendsbyBoroughandZipCodeMapping"],
  ["superstore-profit", "https://public.tableau.com/views/SuperstoreProfitDashboard_16866700428150/ProfitDashboard"],
];

const outDir = path.join(root, "assets", "tableau");
fs.mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch({ headless: true });
try {
  for (const [id, url] of items) {
    const page = await browser.newPage({ viewport: { width: 1280, height: 800 }, deviceScaleFactor: 2 });
    try {
      await page.goto(`${url}?:showVizHome=no&:embed=true`, { waitUntil: "domcontentloaded", timeout: 60_000 });
      // Tableau renders progressively; give charts and map tiles time to paint.
      await page.waitForTimeout(12_000);
      const png = path.join(outDir, `${id}.png`);
      const webp = path.join(outDir, `${id}.webp`);
      await page.screenshot({ path: png, fullPage: false });
      const result = spawnSync("cwebp", ["-quiet", "-q", "82", "-resize", "1024", "640", png, "-o", webp], {
        encoding: "utf8",
      });
      if (result.status !== 0) throw new Error(result.stderr || result.stdout);
      fs.rmSync(png, { force: true });
      console.log(`captured ${id}`);
    } finally {
      await page.close();
    }
  }
} finally {
  await browser.close();
}
