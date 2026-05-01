import type { Metadata } from "next";
import { SEO_PAGES, DEFAULT_OG } from "@/lib/seo/metadata";
import AmazonCropContent from "./content";

export const metadata: Metadata = {
  ...SEO_PAGES.amazon,
  openGraph: {
    ...DEFAULT_OG,
    title: SEO_PAGES.amazon.title,
    description: SEO_PAGES.amazon.description,
  },
};

export default function AmazonCropPage() {
  return <AmazonCropContent />;
}