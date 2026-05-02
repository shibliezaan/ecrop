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
        <h1 className="text-[48px] font-bold leading-tight tracking-[-1.5px] text-notion-black mb-6">
          Free Shipping Label Cropper for Flipkart, Amazon & Meesho Sellers
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

      <div className="flex justify-center items-center gap-8 opacity-70 mb-16">
        <img 
          src="/flipkart-logo.png" 
          alt="Flipkart shipping label crop tool - crop Flipkart labels to 4x6 free" 
          width="100" 
          height="32" 
        />
        <img 
          src="/amazon-logo.svg" 
          alt="Amazon shipping label crop tool - crop Amazon FBA labels PDF free" 
          width="100" 
          height="32" 
        />
        <img 
          src="/meesho-logo.png" 
          alt="Meesho shipping label crop tool - crop Meesho labels online free" 
          width="100" 
          height="32" 
        />
      </div>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
        <Card className="p-6">
          <div className="mb-4">
            <img 
              src="/flipkart-logo.png" 
              alt="Flipkart logo - crop Flipkart shipping labels free online" 
              width="100" 
              height="32" 
              className="h-8 w-auto"
            />
          </div>
          <h2 className="text-[18px] font-semibold text-notion-black mb-2">Flipkart Labels</h2>
          <p className="text-[14px] text-warm-gray-500 mb-4">Process Flipkart shipping labels with invoice integration. Auto-detect label position and crop to exact 4x6 thermal size.</p>
          <Link href="/crop/flipkart">
            <Button>Start Cropping</Button>
          </Link>
        </Card>
        <Card className="p-6">
          <div className="mb-4">
            <img 
              src="/amazon-logo.svg" 
              alt="Amazon logo - crop Amazon shipping labels PDF free for FBA sellers" 
              width="100" 
              height="32" 
              className="h-8 w-auto"
            />
          </div>
          <h2 className="text-[18px] font-semibold text-notion-black mb-2">Amazon Labels</h2>
          <p className="text-[14px] text-warm-gray-500 mb-4">Optimize Amazon FBA and seller-fulfilled shipping labels. Split A4 PDFs into single 4x6 labels instantly.</p>
          <Link href="/crop/amazon">
            <Button>Start Cropping</Button>
          </Link>
        </Card>
        <Card className="p-6">
          <div className="mb-4">
            <img 
              src="/meesho-logo.png" 
              alt="Meesho logo - crop Meesho shipping labels online for thermal printers" 
              width="100" 
              height="32" 
              className="h-8 w-auto"
            />
          </div>
          <h2 className="text-[18px] font-semibold text-notion-black mb-2">Meesho Labels</h2>
          <p className="text-[14px] text-warm-gray-500 mb-4">Auto-crop and sort Meesho shipping labels by SKU instantly. Perfect for bulk label processing.</p>
          <Link href="/crop/meesho">
            <Button>Start Cropping</Button>
          </Link>
        </Card>
      </section>

      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-[32px] font-bold text-center mb-10">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-3">📄</div>
            <h3 className="text-[16px] font-semibold mb-2">1. Upload PDF</h3>
            <p className="text-[14px] text-warm-gray-500">Drop your shipping label PDF - works with A4 and letter sizes</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">✂️</div>
            <h3 className="text-[16px] font-semibold mb-2">2. Auto-Crop</h3>
            <p className="text-[14px] text-warm-gray-500">Our smart algorithm detects and crops labels to 4x6 size</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">👀</div>
            <h3 className="text-[16px] font-semibold mb-2">3. Preview</h3>
            <p className="text-[14px] text-warm-gray-500">Check cropped labels before downloading - verify quality</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">⬇️</div>
            <h3 className="text-[16px] font-semibold mb-2">4. Download</h3>
            <p className="text-[14px] text-warm-gray-500">Get print-ready PDFs optimized for thermal printers</p>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto mb-16">
        <h2 className="text-[32px] font-bold text-center mb-8">Why Indian Sellers Choose LabelCrop</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 border rounded-lg">
            <h3 className="text-[18px] font-semibold mb-2">Browser-Only Processing</h3>
            <p className="text-[14px] text-warm-gray-500">All cropping happens directly in your browser. No server uploads, no cloud storage - your files never leave your device.</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="text-[18px] font-semibold mb-2">Zero Data Collection</h3>
            <p className="text-[14px] text-warm-gray-500">We never see, store, or access your files. Completely private - ideal for sensitive business documents.</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="text-[18px] font-semibold mb-2">Instant Download</h3>
            <p className="text-[14px] text-warm-gray-500">Processed labels download directly to your device. No waiting, no account creation, no limits.</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="text-[18px] font-semibold mb-2">Free Forever</h3>
            <p className="text-[14px] text-warm-gray-500">No hidden fees, no premium tiers. Built for Indian e-commerce sellers who need reliable tools.</p>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto mb-16">
        <h2 className="text-[32px] font-bold text-center mb-8">Compatible Marketplaces</h2>
        <p className="text-center text-warm-gray-500 mb-8">LabelCrop works with all major Indian e-commerce platforms</p>
        <div className="flex flex-wrap justify-center gap-4">
          <span className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium">Flipkart</span>
          <span className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium">Amazon</span>
          <span className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium">Meesho</span>
          <span className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium">Myntra</span>
          <span className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium">Snapdeal</span>
          <span className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium">GlowRoad</span>
          <span className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium">IndiaMART</span>
          <span className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium">Ekart</span>
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
                  "text": "No. All processing happens in your browser. Your files never leave your device."
                }
              },
              {
                "@type": "Question",
                "name": "Is it really free?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, unlimited usage, no registration, no hidden fees."
                }
              },
              {
                "@type": "Question",
                "name": "What marketplaces are supported?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Amazon, Flipkart, Meesho, Myntra, Snapdeal, GlowRoad, IndiaMART, and Ekart."
                }
              },
              {
                "@type": "Question",
                "name": "What file formats work?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "PDF files - works with A4 and letter size shipping labels."
                }
              },
              {
                "@type": "Question",
                "name": "What print size do I get?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Cropped to 4x6 inches (101.6 x 152.4mm) - standard thermal printer size."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}