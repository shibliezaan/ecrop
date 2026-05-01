import type { Metadata } from "next";
import { SEO_PAGES, DEFAULT_OG } from "@/lib/seo/metadata";
import MeeshoCropContent from "./content";

export const metadata: Metadata = {
  ...SEO_PAGES.meesho,
  openGraph: {
    ...DEFAULT_OG,
    title: SEO_PAGES.meesho.title,
    description: SEO_PAGES.meesho.description,
  },
};

export default function MeeshoCropPage() {
  return <MeeshoCropContent />;
}