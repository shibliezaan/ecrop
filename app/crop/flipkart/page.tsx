import type { Metadata } from "next";
import { SEO_PAGES, DEFAULT_OG } from "@/lib/seo/metadata";
import FlipkartCropContent from "./content";

export const metadata: Metadata = {
  ...SEO_PAGES.flipkart,
  openGraph: {
    ...DEFAULT_OG,
    title: SEO_PAGES.flipkart.title,
    description: SEO_PAGES.flipkart.description,
  },
};

export default function FlipkartCropPage() {
  return <FlipkartCropContent />;
}