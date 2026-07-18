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
  ["ticket-heatmap", "https://public.tableau.com/app/profile/jeanlucsaintfleur/viz/HeatmapforTicketIssuance/Violations"],
  ["npo-zip-map", "https://public.tableau.com/app/profile/jeanlucsaintfleur/viz/MapforNYNPOs-ZipCodeLevel/Dashboard1"],
  ["npo-county-survey", "https://public.tableau.com/app/profile/jeanlucsaintfleur/viz/nys_survey_npos/MAPCountyCoverage"],
  ["event-regs", "https://public.tableau.com/app/profile/jeanlucsaintfleur/viz/EventRegs/Dashboard1"],
  ["project-1", "https://public.tableau.com/app/profile/jeanlucsaintfleur/viz/project_1_17551325624360/Sheet8"],
  ["nys-nonprofit-db", "https://public.tableau.com/app/profile/jeanlucsaintfleur/viz/NYSNonprofitDatabase/Dashboard3"],
  ["community-improvement", "https://public.tableau.com/app/profile/jeanlucsaintfleur/viz/CommunityImprovementProject/Story1"],
  ["cip-orders", "https://public.tableau.com/app/profile/jeanlucsaintfleur/viz/cip_17087044855180/OrdersAssignedtoEachUser"],
  ["collisions-yearly", "https://public.tableau.com/app/profile/jeanlucsaintfleur/viz/NYCCollisions-IncidentsYearly/NYCCollisionsUnveiledADetailedDiveintoFatalitiesInjuriesBoroughTrendsandContributingFactors"],
  ["collisions-depth", "https://public.tableau.com/app/profile/jeanlucsaintfleur/viz/NYCCollisions-InDepthAnalysis/InsightsintoNYCCollisionsContributingFactorsCollisionTrendsbyBoroughandZipCodeMapping"],
  ["uefa-dashboard", "https://public.tableau.com/app/profile/jeanlucsaintfleur/viz/UEFAChampionsLeagueDashboard_16869617489090/UEFAChampionsLeagueDashboard"],
  ["superstore-profit", "https://public.tableau.com/app/profile/jeanlucsaintfleur/viz/SuperstoreProfitDashboard_16866700428150/ProfitDashboard"],
];

const outDir = path.join(root, "assets", "tableau");
fs.mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch({ headless: true });
try {
  for (const [id, url] of items) {
    const page = await browser.newPage({ viewport: { width: 1280, height: 820 }, deviceScaleFactor: 1 });
    try {
      await page.goto(url, { waitUntil: "domcontentloaded", timeout: 45_000 });
      await page.waitForTimeout(6_500);
      const png = path.join(outDir, `${id}.png`);
      const webp = path.join(outDir, `${id}.webp`);
      await page.screenshot({ path: png, fullPage: false });
      const result = spawnSync("cwebp", ["-quiet", "-q", "78", "-resize", "640", "410", png, "-o", webp], {
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
