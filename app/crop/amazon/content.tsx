'use client';

import Link from "next/link";
import dynamic from "next/dynamic";

const UploadZone = dynamic(() => {
  return import("@/components/pdf/upload-zone").then((mod) => mod.UploadZone);
}, { ssr: false }) as React.ComponentType<{ marketplace: string }>;

export default function AmazonCropContent() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h1 className="text-[36px] font-bold tracking-[-1px] text-notion-black mb-3">
          Amazon Shipping Label Cropper
        </h1>
        <div className="inline-flex gap-2 text-[13px] font-semibold">
          <span className="bg-badge-blue-bg text-badge-blue-text rounded-full px-3 py-1">Zero Uploads</span>
          <span className="bg-badge-blue-bg text-badge-blue-text rounded-full px-3 py-1">Browser-Only</span>
        </div>
        <p className="text-[14px] text-warm-gray-500 mt-3">
          Try also: <Link href="/crop/flipkart" className="text-notion-blue hover:underline">Flipkart cropper</Link> • <Link href="/crop/meesho" className="text-notion-blue hover:underline">Meesho cropper</Link>
        </p>
      </div>
      <UploadZone marketplace="amazon" />
    </div>
  );
}