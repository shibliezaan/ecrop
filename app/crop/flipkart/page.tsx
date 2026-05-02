import type { Metadata } from "next";
import { SEO_PAGES, DEFAULT_OG } from "@/lib/seo/metadata";
import FlipkartCropContent from "./content";

export const metadata: Metadata = {
  title: 'Flipkart Label Crop Online Free - 4x6 Shipping Label Cropper',
  description: 'Crop Flipkart shipping labels instantly. Upload PDF, get print-ready 4x6 label for thermal printer. Works with invoices, SKU sorting. Free, no login.',
  alternates: { canonical: 'https://labelcrop.shop/flipkart' }
};

export default function FlipkartCropPage() {
  return <FlipkartCropContent />;
}