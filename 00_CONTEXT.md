# Project Context

## Product
Free label cropping tool for Amazon, Flipkart, and Meesho sellers — built to match ecropper.in. Browser-only processing, zero uploads, instant print-ready PDFs. No registration, unlimited usage.

## Phase 1 Scope
Home, marketplace crop pages (Amazon, Flipkart, Meesho, Myntra, Snapdeal, GlowRoad), tools page, about, privacy policy, terms.

## Core User Flow
Upload PDF -> auto-crop by marketplace preset -> preview -> download cropped PDF.

## Who Uses This
Indian marketplace sellers processing daily shipping labels. Need fast, free, private tool that works on mobile and desktop.

## Supported Files
- PRIMARY: PDF (shipping labels from marketplaces)
- SECONDARY: JPG, PNG, WEBP (fallback)

## Product Rules
- Browser-only processing — zero file uploads to server
- No registration, no login
- No data collection
- Free forever, unlimited usage
- Keep processing client-side for privacy
- Match ecropper.in feature set in phase 1

## Design Principles
- Privacy-first messaging above the fold
- One-click cropping
- Mobile and desktop compatible
- No learning curve

## Marketplace Features (from competitor)
- Amazon: auto-crop FBA and seller-fulfilled labels
- Flipkart: auto-crop with invoice integration
- Meesho: auto-crop and sort by SKU
- Myntra, Snapdeal, GlowRoad: basic auto-crop

## SEO Rules
- Target: "amazon label cropper", "flipkart shipping label crop", "meesho label crop online"
- Unique page per marketplace
- Emphasize "free", "no upload", "privacy-first", "instant PDF"

## Technical Rules
- Next.js frontend
- Tailwind UI
- pdf.js for PDF rendering
- pdf-lib for PDF creation client-side
- Canvas for cropping
- All processing in browser

## Upload Rules
- Max file size: 50MB
- Client-side only
- Files never leave device
- Accept: application/pdf

## PDF Rules
- Process all pages
- Auto-detect label areas per marketplace
- Output: print-ready PDF (not images)
- Maintain original quality
- Instant download, no server storage

## Current Decisions (locked to match ecropper.in)
- Output format: PDF only in phase 1 (no ZIP, no PNG)
- Zero uploads — browser-only
- Free, no registration
- Smart SKU organization for Meesho
- Invoice integration for Flipkart
- No blog, no auth, no CMS

## Route Map
- / (home)
- /crop/amazon
- /crop/flipkart
- /crop/meesho
- /crop/myntra
- /crop/snapdeal
- /crop/glowroad
- /tools
- /about
- /privacy-policy
- /terms-conditions

## Non-Goals
- ZIP downloads
- Image output
- User accounts
- Cloud storage
- Blog

## Decisions Locked
- Match ecropper.in feature set exactly for phase 1
- Browser-only, privacy-first
- PDF output
- Next.js + Tailwind
