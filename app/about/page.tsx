import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | eCrop",
  description: "Free browser-based label cropping tool for Amazon, Flipkart, and Meesho sellers. All processing happens locally in your browser.",
};

const features = [
  { label: "Privacy-First", description: "Files never leave your device" },
  { label: "No Registration", description: "No login, no account needed" },
  { label: "Unlimited", description: "Free forever, no usage limits" },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-[48px] font-bold tracking-[-1.5px] text-notion-black mb-8 leading-tight">
        Built for Indian marketplace sellers
      </h1>

      <div className="prose max-w-none mb-8">
        <p className="text-[16px] leading-relaxed text-warm-gray-500">
          eCrop is a free label cropping tool for Amazon, Flipkart, and Meesho sellers. Browser-only processing, zero uploads, instant print-ready PDFs.
        </p>
        <p className="text-[16px] leading-relaxed text-warm-gray-500 mt-4">
          Upload your PDF, crop by marketplace preset, preview, and download the cropped PDF. No registration, unlimited usage. All processing happens in your browser for maximum privacy.
        </p>
        <p className="text-[16px] leading-relaxed text-warm-gray-500 mt-4">
          Built to match ecropper.in. Smart automation for shipping labels. Crop, organize, and format labels with precision in seconds.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        {features.map((f) => (
          <div
            key={f.label}
            className="bg-badge-blue-bg rounded-full px-4 py-2 flex items-center gap-2"
          >
            <span className="text-[13px] font-semibold text-badge-blue-text">
              {f.label}
            </span>
            <span className="text-[13px] text-warm-gray-500">
              {f.description}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}