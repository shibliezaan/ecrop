import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | eCrop",
  description: "eCrop privacy policy. All processing happens in your browser. We never upload your files.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-[40px] font-bold tracking-[-1.5px] text-notion-black mb-8">
        Privacy Policy
      </h1>

      <div className="prose max-w-none space-y-6">
        <div>
          <h2 className="text-[20px] font-semibold text-notion-black mb-3">
            How eCrop Works
          </h2>
          <p className="text-[16px] leading-relaxed text-warm-gray-500">
            All processing happens in your browser. We never upload your files to our servers. Files never leave your device.
          </p>
        </div>

        <div>
          <h2 className="text-[20px] font-semibold text-notion-black mb-3">
            Data Collection
          </h2>
          <p className="text-[16px] leading-relaxed text-warm-gray-500">
            No data collection, no cookies for tracking. We do not collect, store, or access your files. Your shipping labels remain on your device at all times.
          </p>
        </div>

        <div>
          <h2 className="text-[20px] font-semibold text-notion-black mb-3">
            Cookies
          </h2>
          <p className="text-[16px] leading-relaxed text-warm-gray-500">
            We do not use cookies or any other tracking technologies. eCrop is completely anonymous.
          </p>
        </div>

        <div>
          <h2 className="text-[20px] font-semibold text-notion-black mb-3">
            Third Parties
          </h2>
          <p className="text-[16px] leading-relaxed text-warm-gray-500">
            eCrop does not share any data with third parties. We have no analytics, no external services, and no data sharing agreements.
          </p>
        </div>

        <div>
          <h2 className="text-[20px] font-semibold text-notion-black mb-3">
            Contact
          </h2>
          <p className="text-[16px] leading-relaxed text-warm-gray-500">
            eCrop is a free tool with no contact form. Since we process nothing server-side, there is nothing to contact us about.
          </p>
        </div>
      </div>
    </div>
  );
}