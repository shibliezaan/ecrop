# Change Log

> Every change must be recorded here with timestamp, files touched, and reason.

## [2026-05-02 09:30 IST] Initialize Context System

Files changed:
- 00_CONTEXT.md
- 01_MODULES.md
- 02_CHANGES.md

What changed:
- Created canonical project context matching ecropper.in feature set
- Defined product as free browser-only label cropper for Amazon, Flipkart, Meesho
- Locked output format to print-ready PDF, zero uploads, no registration
- Created module registry with 15 modules aligned to competitor

Why:
- Establish durable context so any future agent can understand project instantly
- Match ecropper.in exactly for phase 1 to ensure competitive parity

Verification:
- Reviewed ecropper.in and ecroppr.com for features and messaging
- Confirmed browser-only processing and PDF output requirements

Notes:
- Next: build Foundations module (layout, design tokens)

## [2026-05-02 00:32 IST] Implement Notion Design System

Files changed:
- app/globals.css
- components/layout/header.tsx
- components/layout/footer.tsx
- components/ui/button.tsx
- components/ui/card.tsx
- app/page.tsx
- 01_MODULES.md

What changed:
- Implemented warm neutral palette, whisper borders, Notion Blue CTAs
- Added precise typography with negative letter-spacing
- Applied multi-layer shadows
- Updated Home page with proper display typography

Why:
- Matches design system spec for approachable minimalism

Verification:
- npm run dev — UI matches Notion warmth, not cold Tailwind defaults
- All borders are 1px rgba(0,0,0,0.1)

Notes:
- Design system locked, ready for PDF engine UI

## [2026-05-02 00:33 IST] Build Home Page

Files changed:
- app/page.tsx
- 01_MODULES.md
- 02_CHANGES.md

What changed:
- Implemented hero with privacy-first messaging
- Added 3 marketplace cards matching ecropper.in
- Added features section
- Added JSON-LD FAQ schema with 3 questions

Why:
- Home page is entry point for SEO keywords from 00_CONTEXT.md

Verification:
- Page renders on mobile and desktop
- All 3 buttons link correctly

Notes:
- Ready for PDF Crop Engine

## [2026-05-02 00:38 IST] Build PDF Crop Engine

Files changed:
- lib/pdf/loader.ts
- lib/pdf/presets.ts
- lib/pdf/cropper.ts
- workers/pdf-worker.ts
- components/pdf/upload-zone.tsx
- app/crop/amazon/page.tsx
- app/crop/flipkart/page.tsx
- app/crop/meesho/page.tsx
- lib/export/pdf-export.ts
- 01_MODULES.md
- 02_CHANGES.md

What changed:
- Implemented client-side PDF loading with pdf.js
- Built crop engine with pdf-lib, outputs print-ready PDF
- Created marketplace presets (amazon, flipkart, meesho)
- Created upload zone with Notion design
- Updated all three marketplace pages with upload functionality

Why:
- Core functionality matching ecropper.in

Verification:
- Build passes without errors
- Zero network requests during processing (browser-only)
- All pages render correctly

Notes:
- Preset coordinates are placeholders, need fine-tuning per marketplace

## [2026-05-02 00:54 IST] Implement SKU Sort for Meesho

Files changed:
- lib/pdf/sku-sort.ts
- lib/pdf/cropper.ts
- components/pdf/upload-zone.tsx
- workers/pdf-worker.ts
- app/crop/meesho/page.tsx
- 01_MODULES.md
- 02_CHANGES.md

What changed:
- Added client-side SKU extraction using pdf.js text content
- Implemented sort-by-SKU for Meesho labels
- Added UI checkbox with Notion styling (warm-gray-500 label, notion-blue checkbox)
- Added feature bullet "✓ Auto-sort by SKU" to Meesho page

Why:
- Matches ecropper.in "Auto-crop and sort Meesho shipping labels by SKU instantly"

Verification:
- Upload Meesho PDF, verify "Sort by SKU" checkbox appears
- Pages with SKU are sorted alphabetically
- Fallback to original order when no SKU found

Notes:
- SKU regex patterns may need refinement after real seller PDFs tested

## [2026-05-02 10:00 IST] Complete Static Pages

Files changed:
- app/tools/page.tsx
- app/about/page.tsx
- app/privacy-policy/page.tsx
- app/terms-conditions/page.tsx
- components/layout/footer.tsx

What changed:
- Built Tools directory with marketplace links
- Added About page emphasizing browser-only privacy
- Created Privacy Policy and Terms matching 00_Context.md

Why:
- Required for Phase 1 scope and SEO trust signals

Verification:
- All pages load, footer links work
- Privacy page explicitly states "zero uploads"

Notes:
- Ready for SEO layer

## [2026-05-02 11:30 IST] Implement SEO Layer

Files changed:
- lib/seo/metadata.ts
- app/page.tsx
- app/crop/amazon/page.tsx
- app/crop/flipkart/page.tsx
- app/crop/meesho/page.tsx
- app/sitemap.ts
- app/robots.ts
- 01_MODULES.md
- 02_CHANGES.md

What changed:
- Added unique titles/descriptions per marketplace matching 00_CONTEXT.md keywords
- Implemented JSON-LD FAQ schema
- Created sitemap and robots
- Added internal linking between marketplace pages

Why:
- Target long-tail: "[marketplace] label crop", "A4 to thermal print"

Verification:
- View source shows correct meta tags
- /sitemap.xml returns XML
- FAQ schema validates in Google Rich Results Test

Notes:
- Ready for launch hardening

## [2026-05-02 12:00 IST] Flipkart Invoice Integration

Files changed:
- lib/pdf/presets.ts
- lib/pdf/invoice-splitter.ts
- components/pdf/upload-zone.tsx
- app/crop/flipkart/page.tsx
- 01_MODULES.md
- 02_CHANGES.md

What changed:
- Implemented automatic label/invoice splitting for Flipkart
- Added dual PDF output (labels 4x6, invoices A4)
- Updated UI with two download buttons (primary/secondary style)

Why:
- Matches ecropper.in "with invoice integration" feature from 00_CONTEXT.md

Verification:
- Upload Flipkart A4 PDF, verify two PDFs download
- Labels PDF = 4x6 pages, Invoices PDF = A4 pages
- Zero network requests during processing

Notes:
- Preset coordinates may need tuning with real Flipkart PDFs

## [2026-05-02 14:00 IST] Static Export for Cloudflare Pages

Files changed:
- next.config.ts
- public/sitemap.xml
- public/robots.txt
- public/_headers
- app/crop/amazon/page.tsx, content.tsx
- app/crop/flipkart/page.tsx, content.tsx
- app/crop/meesho/page.tsx, content.tsx
- 01_MODULES.md
- 02_CHANGES.md

What changed:
- Configured Next.js for static export (output: 'export')
- Created static sitemap.xml and robots.txt in public/
- Added Cloudflare Pages headers (_headers)
- Split crop pages into server component (metadata) + client component (content)
- Used dynamic import with ssr:false for client-side PDF processing

Why:
- Browser-only per 00_CONTEXT.md - no server needed
- Cloudflare Pages deployment compatible

Verification:
- Build succeeds with all pages static
- out/ folder contains all HTML, assets, sitemap.xml, robots.txt
- No API routes exist (browser-only)

Notes:
- Ready for Cloudflare Pages deployment: `npx wrangler pages deploy out`
