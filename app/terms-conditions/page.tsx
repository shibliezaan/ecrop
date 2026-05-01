import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | eCrop",
  description: "Terms and conditions for eCrop. Free label cropping tool for sellers.",
};

export default function TermsConditionsPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-[40px] font-bold tracking-[-1.5px] text-notion-black mb-8">
        Terms & Conditions
      </h1>

      <div className="prose max-w-none space-y-6">
        <div>
          <h2 className="text-[20px] font-semibold text-notion-black mb-3">
            Free Tool
          </h2>
          <p className="text-[16px] leading-relaxed text-warm-gray-500">
            eCrop is provided free of charge. No payment, no subscription, no account required.
          </p>
        </div>

        <div>
          <h2 className="text-[20px] font-semibold text-notion-black mb-3">
            As-Is
          </h2>
          <p className="text-[16px] leading-relaxed text-warm-gray-500">
            eCrop is provided as-is. No warranty, no guarantee of accuracy. Results depend on your input files and their quality.
          </p>
        </div>

        <div>
          <h2 className="text-[20px] font-semibold text-notion-black mb-3">
            User Responsibility
          </h2>
          <p className="text-[16px] leading-relaxed text-warm-gray-500">
            You are responsible for verifying the accuracy of cropped labels before printing. eCrop does not guarantee print-ready results.
          </p>
        </div>

        <div>
          <h2 className="text-[20px] font-semibold text-notion-black mb-3">
            Privacy
          </h2>
          <p className="text-[16px] leading-relaxed text-warm-gray-500">
            All processing happens in your browser. Your files never leave your device. We do not collect, store, or access any data.
          </p>
        </div>

        <div>
          <h2 className="text-[20px] font-semibold text-notion-black mb-3">
            Changes
          </h2>
          <p className="text-[16px] leading-relaxed text-warm-gray-500">
            We may update these terms at any time. Continued use of eCrop constitutes acceptance of the terms.
          </p>
        </div>

        <div>
          <h2 className="text-[20px] font-semibold text-notion-black mb-3">
            Disclaimer
          </h2>
          <p className="text-[16px] leading-relaxed text-warm-gray-500">
            eCrop is not affiliated with Amazon, Flipkart, Meesho, or any other marketplace. All marketplace names are trademarks of their respective owners.
          </p>
        </div>
      </div>
    </div>
  );
}