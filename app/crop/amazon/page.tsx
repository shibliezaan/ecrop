import type { Metadata } from "next";
import { SEO_PAGES, DEFAULT_OG } from "@/lib/seo/metadata";
import AmazonCropContent from "./content";

export const metadata: Metadata = {
  title: 'Amazon Label Crop PDF - Free Amazon Shipping Label Cropper',
  description: 'Free Amazon label crop tool for sellers. Crop Amazon shipping labels to exact size, remove extra margins. Browser-based, secure, works offline.',
  alternates: { canonical: 'https://labelcrop.shop/amazon' }
};

export default function AmazonCropPage() {
  return <AmazonCropContent />;
}