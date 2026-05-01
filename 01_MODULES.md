# Module Registry

> Live registry — matches ecropper.in feature set

| Module | Status | Owner | Depends On | Files |
|---|---|---|---|---|
| Context System | Done | Core | None | 00_CONTEXT.md, 01_MODULES.md, 02_CHANGES.md |
| Foundations | Done | Core | Context System | app/layout.tsx, app/globals.css, components/layout/*, components/ui/* |
| Home Page | Done | Core | Foundations | app/page.tsx |
| PDF Crop Engine | Done | Core | Foundations | lib/pdf/loader.ts, lib/pdf/cropper.ts, lib/pdf/presets.ts, components/pdf/upload-zone.tsx, workers/pdf-worker.ts |
| Marketplace Presets | Done | Core | PDF Crop Engine | lib/pdf/presets.ts |
| Amazon Page | Done | Core | Marketplace Presets | app/crop/amazon/page.tsx |
| Flipkart Page | Done | Core | Marketplace Presets | app/crop/flipkart/page.tsx |
| Meesho Page | Done | Core | Marketplace Presets | app/crop/meesho/page.tsx |
| SKU Sort Engine | Done | Core | PDF Crop Engine | lib/pdf/sku-sort.ts |
| PDF Export | Done | Core | PDF Crop Engine | lib/export/pdf-export.ts |
| Tools Directory | Done | Core | Foundations | app/tools/page.tsx |
| About Page | Done | Core | Foundations | app/about/page.tsx |
| Legal Pages | Done | Core | Foundations | app/privacy-policy/page.tsx, app/terms-conditions/page.tsx |
| SEO Layer | Done | Core | All pages | lib/seo/metadata.ts, app/sitemap.ts, app/robots.ts |
| Flipkart Invoice Split | Done | Core | Flipkart Page | lib/pdf/invoice-splitter.ts, lib/pdf/presets.ts |
| Static Export | Done | Core | Build Config | next.config.ts, public/sitemap.xml, public/robots.txt, public/_headers |
| Launch Hardening | Planned | Core | All modules | QA checklist |

## Notes
- Output is PDF only, matching ecropper.in
- Browser-only processing, zero uploads
- SKU sort for Meesho, invoice integration for Flipkart
