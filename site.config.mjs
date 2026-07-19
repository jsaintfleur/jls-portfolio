// Central URL registry — the single source of truth for every public URL
// used across this portfolio. scripts/check-urls.mjs enforces it: pages may
// only reference production URLs listed here (plus allowlisted external
// documentation/data hosts), and legacy or preview hosts fail the check.
//
// Domain rules:
//   - A custom domain is a project's canonical public URL.
//   - A stable Vercel *production* URL is acceptable only until a custom
//     domain exists (status: "needs-custom-domain").
//   - Preview/branch deployment URLs must never appear in pages or metadata.

export const siteConfig = {
  // Canonical portfolio URL. www.jeanlucs.com and the legacy
  // jls-portfolio-zeta.vercel.app host 301 to this via vercel.json.
  portfolioUrl: "https://jeanlucs.com",
};

export const projectUrls = {
  econos: {
    url: "https://econos-sooty.vercel.app",
    status: "needs-custom-domain",
  },
  compet2026: {
    url: "https://wc2026-xi-gray.vercel.app",
    status: "needs-custom-domain",
  },
  sheltershield: {
    url: "https://jls-sheltershield.vercel.app",
    status: "needs-custom-domain",
  },
  careshed: {
    url: "https://jls-careshed.vercel.app",
    status: "needs-custom-domain",
  },
  pulsecredit: {
    url: "https://jls-pulsecredit.vercel.app",
    status: "needs-custom-domain",
  },
  transitshield: {
    url: "https://jls-transitshield.vercel.app",
    status: "needs-custom-domain",
  },
  marketplaceCompass: {
    url: "https://jls-marketplace-compass.vercel.app",
    status: "needs-custom-domain",
  },
};

// Hosts that must never appear in production pages.
export const forbiddenHosts = [
  "jls-portfolio-zeta.vercel.app", // legacy portfolio URL — redirects to jeanlucs.com
  "localhost",
  "127.0.0.1",
];

// External hosts pages are allowed to reference (docs, data providers, profiles).
export const allowedExternalHosts = [
  "jeanlucs.com",
  "github.com",
  "www.linkedin.com",
  "public.tableau.com",
  "data.census.gov",
  "www.huduser.gov",
  "www.cdc.gov",
  "fred.stlouisfed.org",
  "www.consumerfinance.gov",
  "www.mta.info",
  "hazards.fema.gov",
  "www.ncei.noaa.gov",
  "opendata.cityofnewyork.us",
  "www.bls.gov",
  "www.sitemaps.org", // XML schema namespace in sitemap.xml, not a hyperlink
];
