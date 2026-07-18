import { spawn } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");
const requireFromShelterShield = createRequire(path.resolve(root, "../jls-sheltershield/package.json"));
const { chromium } = requireFromShelterShield("playwright");

const products = [
  { id: "sheltershield", url: "https://jls-sheltershield.vercel.app" },
  { id: "careshed", url: "https://jls-careshed.vercel.app" },
  { id: "pulsecredit", url: "https://jls-pulsecredit.vercel.app" },
  { id: "transitshield", url: "https://jls-transitshield.vercel.app" },
  { id: "marketplace-compass", url: "https://jls-marketplace-compass.vercel.app" },
];

const outDir = path.join(root, "assets", "thumbs");
fs.mkdirSync(outDir, { recursive: true });

function run(command, args) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, { stdio: ["ignore", "pipe", "pipe"] });
    let output = "";
    child.stdout.on("data", (chunk) => {
      output += chunk;
    });
    child.stderr.on("data", (chunk) => {
      output += chunk;
    });
    child.on("close", (code) => {
      if (code === 0) resolve(output);
      else reject(new Error(`${command} ${args.join(" ")} failed with ${code}\n${output}`));
    });
  });
}

const browser = await chromium.launch();
try {
  for (const product of products) {
    const page = await browser.newPage({ viewport: { width: 1600, height: 1000 }, deviceScaleFactor: 1 });
    await page.addInitScript(() => {
      window.localStorage.setItem("jls-theme", "light");
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    });
    await page.goto(product.url, { waitUntil: "networkidle", timeout: 60_000 });
    await page.waitForTimeout(1_200);
    const png = path.join(outDir, `${product.id}.png`);
    const webp1x = path.join(outDir, `${product.id}.webp`);
    const webp2x = path.join(outDir, `${product.id}@2x.webp`);
    await page.screenshot({ path: png, fullPage: false });
    await page.close();
    await run("cwebp", ["-quiet", "-q", "82", "-resize", "800", "500", png, "-o", webp1x]);
    await run("cwebp", ["-quiet", "-q", "82", png, "-o", webp2x]);
    fs.rmSync(png, { force: true });
    console.log(`captured ${product.id}`);
  }
} finally {
  await browser.close();
}
