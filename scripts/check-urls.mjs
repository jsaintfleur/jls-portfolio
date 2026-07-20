// URL audit: every absolute URL in the production pages must be either a
// registered project URL (site.config.mjs), the canonical portfolio URL, or
// an allowlisted external host. Legacy, preview, localhost, and unregistered
// vercel.app hosts fail the check. Run: node scripts/check-urls.mjs
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { siteConfig, projectUrls, forbiddenHosts, allowedExternalHosts } from "../site.config.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const pages = ["index.html", "tableau.html", "resume.html", "data-ethics.html", "sitemap.xml", "robots.txt"];

const registeredHosts = new Set([
  new URL(siteConfig.portfolioUrl).host,
  ...Object.values(projectUrls).map((p) => new URL(p.url).host),
  ...allowedExternalHosts,
]);

let failures = 0;
for (const page of pages) {
  const text = fs.readFileSync(path.join(root, page), "utf8");
  const urls = text.match(/https?:\/\/[a-zA-Z0-9.-]+/g) ?? [];
  for (const url of new Set(urls)) {
    const host = url.replace(/^https?:\/\//, "");
    if (forbiddenHosts.some((f) => host.includes(f))) {
      console.error(`FAIL  ${page}: forbidden host ${host}`);
      failures++;
    } else if (!registeredHosts.has(host)) {
      console.error(`FAIL  ${page}: unregistered host ${host} — add to site.config.mjs or remove`);
      failures++;
    }
  }
  // Preview deployments carry a hash segment, e.g. project-abc123-team.vercel.app
  const previews = text.match(/https?:\/\/[a-z0-9-]+-[a-z0-9]{9}-[a-z0-9-]+\.vercel\.app/g) ?? [];
  for (const p of new Set(previews)) {
    console.error(`FAIL  ${page}: preview deployment URL ${p}`);
    failures++;
  }
}

if (failures) {
  console.error(`\nURL audit failed: ${failures} issue(s).`);
  process.exit(1);
}
console.log(`URL audit passed: ${pages.length} files, all hosts registered in site.config.mjs.`);
