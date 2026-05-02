import type { Metadata } from "next";
import MeeshoCropContent from "./content";

export const metadata: Metadata = {
  title: 'Meesho Label Crop Online - Free Meesho Shipping Label Cropper',
  description: 'Crop Meesho labels in one click. Perfect for Meesho sellers printing on 4x6 thermal paper. Free Meesho label crop PDF tool - no watermark.',
  keywords: ['meesho label crop','meesho shipping label crop','meesho label crop pdf','meesho 4x6 label','meesho thermal printer label'],
  alternates: { canonical: 'https://labelcrop.shop/meesho' }
};

export default function MeeshoCropPage() {
  return <MeeshoCropContent />;
}