# Jean-Luc Saint-Fleur Portfolio 2.0 Audit

## Production UX/UI Audit

Strengths:
- Strong static performance, clean dark mode, accessible navigation, and real screenshots from live apps.
- The portfolio already demonstrates end-to-end product work across public data, dashboards, maps, forecasting, and ML.
- The page has a consistent Haiti-blue identity and concise business-facing copy.

Weaknesses addressed:
- The prior hero did not immediately read as a professional portfolio.
- EconOS was present but not treated as the centerpiece.
- Skillsets were visible but not strongly connected to evidence.
- Tableau was absent, despite being important to the positioning.
- GitHub inventory was not classified for hiring relevance.

Remaining watch items:
- Embed selected Tableau dashboards later only if embed performance and responsiveness stay strong.
- Add dedicated long-form case-study pages for the top projects if deeper recruiter review becomes the goal.
- Keep older bootcamp repositories off the homepage unless rewritten with polished screenshots and business context.

## Featured Project Inventory

| Project | Classification | Hiring Value | Notes |
| --- | --- | ---: | --- |
| EconOS | Featured Project | 10 | Centerpiece: economics, forecasting, household impact, policy scenarios. |
| Compet 2026 | Featured Project | 9 | Live sports intelligence product with mobile-first tournament UX. |
| ShelterShield | Featured Project | 9 | Housing/community development, geospatial risk, prioritization. |
| CareShed | Featured Project | 9 | Healthcare/population health, county need mapping, equity framing. |
| PulseCredit | Featured Project | 8 | Financial risk, forecasting, scenarios, anomaly detection. |
| TransitShield | Featured Project | 8 | Transit resilience, exposure/risk mapping, capital planning. |
| Marketplace Compass | Featured Project | 8 | ML model card, segmentation, retention/business decisions. |
| Tableau Analytics Collection | Featured / Supporting Collection | 8 | Tableau Public profile lists 23 vizzes; 12 audit-visible dashboards are featured as launch cards. |
| jls-portfolio | Featured Project | 8 | Portfolio hub demonstrating UX, static performance, and IA. |

## GitHub Audit Summary

Featured now:
- EconOS
- wc2026 / Compet 2026
- jls-sheltershield
- jls-careshed
- jls-pulsecredit
- jls-transitshield
- jls-marketplace-compass
- jls-portfolio

Supporting evidence:
- fx-rate-project: forecasting and macro/finance analysis.
- nyc-traffic-tickets: civic analytics and public-data EDA.
- Tracking-NYC-Homelessness: civic/community analytics.
- sonyma-loan-analysis-ny: housing finance and community development relevance.
- konektravay: AI/community product direction.
- neural-network-challenge-1 and neural-network-challenge-2: ML learning evidence, not homepage-grade case studies.

Archive or improve later:
- Early bootcamp challenge repositories, setup repos, and small exercises should stay off the homepage unless upgraded with screenshots, narrative, documentation, and deployment.

## Tableau Public Audit

Finding:
- User provided the correct Tableau Public profile at `https://public.tableau.com/app/profile/jeanlucsaintfleur/vizzes`.
- The profile reports 23 published vizzes.
- The public listing reliably exposed 12 dashboard/story links during audit.

Decision:
- Feature the 12 audit-visible dashboards as polished launch cards.
- Link to the full Tableau Public profile for all 23 vizzes.
- Avoid direct embeds for now because Tableau embeds would add performance cost to the portfolio and launch cards preserve speed and responsiveness.

## Final Top Project Recommendations

1. EconOS
2. Compet 2026
3. ShelterShield / Housing Opportunity Intelligence
4. CareShed / Healthcare Analytics Platform
5. PulseCredit / Economic Forecasting and Financial Risk
6. TransitShield
7. Marketplace Compass / Business Intelligence and ML
8. Tableau Analytics Collection
9. Community Development Intelligence, built from housing/civic/community repos
10. AI Workflow Platform, only after a polished live app exists

## Information Architecture Changes Implemented

- Hero: explicit professional portfolio positioning.
- Skills: evidence-linked skillsets based on live project screenshots.
- Projects: EconOS centerpiece, Compet 2026 added, existing strong apps preserved.
- Tableau: dedicated page with real launch cards and full public profile link.
- Audit Strategy: compact GitHub classification section.
- SEO: revised metadata and social preview language.

## Image Strategy Audit

Current portfolio images:
- Product screenshots: EconOS, Compet 2026, ShelterShield, CareShed, PulseCredit, TransitShield, Marketplace Compass.
- Tableau previews: 12 optimized WebP thumbnails captured from the public Tableau dashboards.
- Social preview: generated portfolio image.
- Favicon/wordmark: generated vector mark.

Images preserved:
- All live product screenshots because they demonstrate actual deployed work.
- Tableau previews because they are captured from Jean-Luc's public Tableau profile.
- EconOS as the dominant product image because it is the portfolio centerpiece.

Images replaced or improved:
- The prior narrow hero thumbnail strip was replaced with a clearer composition: EconOS primary, plus Compet 2026, Tableau, and ShelterShield supporting visuals.
- Tableau launch cards were upgraded from text-only cards to preview-image cards with view counts.

Missing image recommendations:
- Add an owned professional portrait for the hero/About section.
- Add owned working/presenting, community-development, football, travel/culture, Brooklyn, or Haiti images only if Jean-Luc owns or has permission to publish them.
- Add case-study-specific architecture diagrams for AI workflow and deeper product case studies when those pages are built.

Hero image concept:
- Use the alternate PRD-approved approach until a professional portrait is available: a product composition featuring EconOS, Compet 2026, Tableau, and geospatial/housing work.

Featured-project screenshot plan:
- Keep current project-card screenshots at consistent 16:9 or 16:10 ratios.
- Refresh screenshots when product UIs change materially.
- Avoid using screenshots with debug controls, confidential data, or browser clutter.

Tableau thumbnail plan:
- Use optimized WebP thumbnails generated from Tableau Public pages.
- Keep launch-card previews instead of heavy embeds unless embed performance remains excellent.
- Link to Tableau Public for full interactivity.

Skills-image mapping:
- Economics: EconOS.
- Forecasting: PulseCredit and EconOS.
- Tableau / BI: Superstore Profit, NYS Nonprofit Database, Traffic Ticket Heat Map.
- Product Design: Compet 2026.
- Geospatial Analytics: ShelterShield, CareShed, TransitShield, Tableau map dashboards.
- Business Intelligence: Marketplace Compass and Tableau dashboards.
- Community Development: ShelterShield, CareShed, NYS nonprofit Tableau dashboards.

Image licensing review:
- Product screenshots are from Jean-Luc's deployed apps.
- Tableau previews are from Jean-Luc's Tableau Public profile.
- No Google Images, unverified stock photography, copyrighted match photography, or generic AI imagery was added.

Alt-text inventory:
- Meaningful product, hero, and Tableau preview images include descriptive alt text.
- Decorative or future imagery should use empty alt text only when it adds no content.

---

# Audit & Tableau Enhancement Sprint (2026-07-18)

## Full-portfolio audit findings

**Working well (preserved):** evidence-first positioning; real product screenshots
and real Tableau previews (no stock imagery); dark mode with persistence; skip
link, focus-visible states, reduced-motion support; screen-reader fallback for
the capability matrix; static single-file delivery (fast by construction);
EconOS-as-centerpiece strategy.

**Removed as dated/cheesy/promotional:**
- Animated count-up hero statistics (marketing-flashy; also thin stats like
  "1 validated ML model" replaced with substantive ones).
- Animated drifting grid motif in the hero.
- Pill overload in the hero (kicker pill + eyebrow + role pills + impact pills
  stacked four-deep before the headline) — consolidated to one eyebrow line and
  a single lede sentence.
- Font weights 800-900 throughout, ultra-tight letter-spacing (-.055em), and
  line-height .93 display styling — normalized to 650-750 weights and readable
  tracking.
- Italic marketing taglines on product cards (copy kept, styling normalized).
- "Portfolio audit decisions" homepage section (internal process content, not
  recruiter-facing — retained here in the audit doc instead).
- Duplicate EconOS card (spotlight + gallery card) — spotlight only now.
- "0 fabricated embeds" stat on the Tableau page.

**Bugs fixed:**
- Mobile horizontal overflow (579px page width at 375px viewport) caused by the
  visually-hidden capability-matrix fallback table: tables refuse widths below
  content minimum, so the 1px clip never applied. Fixed by moving the
  visually-hidden clip to a wrapper div — semantics preserved.

## Tableau audit and redesign

**Before:** 12 launch cards in a compressed 3-column grid; preview images were
full Tableau Public page screenshots including site chrome (nav, sign-up
banners, sidebar); no interactive embeds; weak workbook titles ("project_1",
"cip", "nys_survey_npos") displayed verbatim on equal footing with strong work.

**After:** dedicated /tableau page (clean URL via vercel.json) with:
- Four featured dashboards, max two per row on desktop, one per row below
  1024px, full-width mobile.
- Clean viz-only preview captures (embed view, no site chrome, 1024×640).
- Click-to-load interactive embeds via the Tableau Embedding API v3: the API
  module and viz load only on demand; spinner loading state; collapse restores
  the lightweight preview; every card keeps a direct Tableau Public fallback
  link. Page weight before interaction: static HTML + four preview images.
- Each card: large preview, title, description, category, view count, skills
  tags, stated selection rationale, and both actions.
- Remaining dashboards presented as a quiet archive list linking to Tableau
  Public, with the full 23-viz profile linked.

**Featured four and selection rationale:**
1. Heat Map for Ticket Issuance — civic analytics/geospatial; highest public
   engagement (260 views); clearest pattern-finding demonstration.
2. NYS Nonprofit Database — community development; 134 views; direct alignment
   with Jean-Luc's LISC community-development practice.
3. NYC Collisions — In-Depth Analysis — transportation safety; deepest
   analytical narrative (time × geography × contributing factors).
4. Superstore Profit Dashboard — business intelligence; the canonical executive
   BI artifact every Tableau reviewer can benchmark.
   Balanced mix: civic, community development, transportation, BI. Sports
   (UEFA) and operations dashboards remain in the archive.
