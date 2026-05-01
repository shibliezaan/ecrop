import type { Metadata } from "next";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SEO_PAGES, DEFAULT_OG } from "@/lib/seo/metadata";

export const metadata: Metadata = {
  ...SEO_PAGES.home,
  openGraph: {
    ...DEFAULT_OG,
    title: SEO_PAGES.home.title,
    description: SEO_PAGES.home.description,
  },
};

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-16 max-w-3xl mx-auto">
        <h1 className="text-[48px] font-bold leading-tight tracking-[-1.5px] text-notion-black mb-4">
          Free Label Cropping Tool for Amazon, Flipkart & Meesho
        </h1>
        <p className="text-[15px] font-semibold text-warm-gray-500 mb-4">
          Privacy-First • Browser-Only Processing • Zero Uploads
        </p>
        <p className="text-[15px] text-warm-gray-500 mb-6">
          Smart automation for shipping labels. Crop, organize, and format labels with precision in seconds. Completely free, no registration required. All processing happens in your browser for maximum privacy.
        </p>
        <div className="inline-flex flex-wrap justify-center gap-3 mb-4">
          <span className="bg-badge-blue-bg text-badge-blue-text rounded-full px-3 py-1 text-[13px] font-semibold">No Registration</span>
          <span className="bg-badge-blue-bg text-badge-blue-text rounded-full px-3 py-1 text-[13px] font-semibold">No File Uploads</span>
          <span className="bg-badge-blue-bg text-badge-blue-text rounded-full px-3 py-1 text-[13px] font-semibold">Unlimited Usage</span>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
        <Card>
          <h2 className="text-[18px] font-semibold text-notion-black mb-2">Meesho Labels</h2>
          <p className="text-[14px] text-warm-gray-500 mb-4">Auto-crop and sort Meesho shipping labels by SKU instantly</p>
          <Link href="/crop/meesho">
            <Button>Start Cropping</Button>
          </Link>
        </Card>
        <Card>
          <h2 className="text-[18px] font-semibold text-notion-black mb-2">Flipkart Labels</h2>
          <p className="text-[14px] text-warm-gray-500 mb-4">Process Flipkart shipping labels with invoice integration</p>
          <Link href="/crop/flipkart">
            <Button>Start Cropping</Button>
          </Link>
        </Card>
        <Card>
          <h2 className="text-[18px] font-semibold text-notion-black mb-2">Amazon Labels</h2>
          <p className="text-[14px] text-warm-gray-500 mb-4">Optimize Amazon FBA and seller-fulfilled shipping labels</p>
          <Link href="/crop/amazon">
            <Button>Start Cropping</Button>
          </Link>
        </Card>
      </section>

      <section className="max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-[16px] font-semibold text-notion-black mb-2">Browser-Only Processing</h3>
            <p className="text-[14px] text-warm-gray-500">All cropping happens directly in your browser. No server uploads, no cloud storage</p>
          </div>
          <div className="text-center">
            <h3 className="text-[16px] font-semibold text-notion-black mb-2">Zero Data Collection</h3>
            <p className="text-[14px] text-warm-gray-500">We never see, store, or access your files</p>
          </div>
          <div className="text-center">
            <h3 className="text-[16px] font-semibold text-notion-black mb-2">Instant Download</h3>
            <p className="text-[14px] text-warm-gray-500">Processed labels download directly to your device</p>
          </div>
        </div>
      </section>

      <section className="text-center mb-8">
        <p className="text-[14px] text-warm-gray-500">
          <Link href="/crop/amazon" className="text-notion-blue hover:underline">Crop Amazon labels</Link>
          {" • "}
          <Link href="/crop/flipkart" className="text-notion-blue hover:underline">Crop Flipkart labels</Link>
          {" • "}
          <Link href="/crop/meesho" className="text-notion-blue hover:underline">Crop Meesho labels</Link>
        </p>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Is my data uploaded to servers?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. All processing happens in your browser."
                }
              },
              {
                "@type": "Question",
                "name": "Is it really free?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, unlimited usage, no registration."
                }
              },
              {
                "@type": "Question",
                "name": "What marketplaces are supported?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Amazon, Flipkart, Meesho, Myntra, Snapdeal, GlowRoad."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}