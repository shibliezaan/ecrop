import type { Metadata } from "next";
import AmazonCropContent from "./content";

export const metadata: Metadata = {
  title: 'Amazon Label Crop PDF - Free Amazon Shipping Label Cropper',
  description: 'Free Amazon label crop tool for sellers. Crop Amazon shipping labels to exact size, remove extra margins. Browser-based, secure, works offline.',
  keywords: ['amazon label crop','amazon shipping label crop','amazon label crop pdf','amazon 4x6 label','amazon FBA label crop'],
  alternates: { canonical: 'https://labelcrop.shop/crop/amazon' }
};

export default function AmazonCropPage() {
  return <AmazonCropContent />;
}