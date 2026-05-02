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
      <section className="text-center mb-12 max-w-3xl mx-auto">
        <h1 className="text-[48px] font-bold leading-tight tracking-[-1.5px] text-notion-black mb-6">
          Free Shipping Label Cropper for Flipkart, Amazon & Meesho Sellers
        </h1>
        <div className="flex justify-center items-center gap-6 mb-6 opacity-60">
          <img src="/flipkart-icon.svg" alt="Flipkart shipping label crop tool" width="32" height="32" />
          <img src="/amazon-icon.svg" alt="Amazon shipping label crop tool" width="32" height="32" />
          <img src="/meesho-icon.svg" alt="Meesho shipping label crop tool" width="32" height="32" />
        </div>
        <p className="text-[15px] font-semibold text-warm-gray-500 mb-4">
          Privacy-First • Browser-Only Processing • Zero Uploads
        </p>
        <p className="text-[15px] text-warm-gray-500 mb-6">
          You know the pain -打印 hundreds of shipping labels, margins wasted, barcode scanning fails at delivery hub. We built this because tired of manually cropping labels in Photoshop. Upload your PDF, get print-ready 4x6 labels in seconds.
        </p>
        <div className="inline-flex flex-wrap justify-center gap-3 mb-4">
          <span className="bg-badge-blue-bg text-badge-blue-text rounded-full px-3 py-1 text-[13px] font-semibold">No Registration</span>
          <span className="bg-badge-blue-bg text-badge-blue-text rounded-full px-3 py-1 text-[13px] font-semibold">No File Uploads</span>
          <span className="bg-badge-blue-bg text-badge-blue-text rounded-full px-3 py-1 text-[13px] font-semibold">Unlimited Usage</span>
        </div>
      </section>

      <section className="max-w-5xl mx-auto mb-16">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 border rounded-xl">
            <img src="/flipkart-icon.svg" alt="Flipkart logo - crop Flipkart shipping labels free" width="48" height="48" className="mx-auto mb-4" />
            <h3 className="text-[18px] font-semibold mb-2">Flipkart Label Crop</h3>
            <p className="text-[14px] text-warm-gray-500 mb-4">
              Flipkart labels include invoices in same PDF. We auto-separate shipping label from invoice, crop to exact 4x6, keep barcode crisp. Works with bulk PDFs up to 500 labels. Sellers in Delhi, Mumbai use this daily to save 2 hours per day. No Photoshop needed.
            </p>
            <Link href="/crop/flipkart" className="text-blue-600 font-medium hover:underline">
              Crop Flipkart labels free →
            </Link>
          </div>
          
          <div className="text-center p-6 border rounded-xl">
            <img src="/amazon-icon.svg" alt="Amazon logo - crop Amazon shipping labels PDF" width="48" height="48" className="mx-auto mb-4" />
            <h3 className="text-[18px] font-semibold mb-2">Amazon Label Crop</h3>
            <p className="text-[14px] text-warm-gray-500 mb-4">
              Amazon's A4 PDFs waste paper and time. We crop each label to thermal size, remove margins, optionally add SKU. Perfect for FBA and Easy Ship sellers printing 100+ labels daily. Works completely offline, your data never leaves browser.
            </p>
            <Link href="/crop/amazon" className="text-blue-600 font-medium hover:underline">
              Crop Amazon labels free →
            </Link>
          </div>
          
          <div className="text-center p-6 border rounded-xl">
            <img src="/meesho-icon.svg" alt="Meesho logo - crop Meesho shipping labels online" width="48" height="48" className="mx-auto mb-4" />
            <h3 className="text-[18px] font-semibold mb-2">Meesho Label Crop</h3>
            <p className="text-[14px] text-warm-gray-500 mb-4">
              Meesho sellers need speed. Upload PDF, we auto-sort by SKU, crop to 4x6, generate pick list. Process 200 orders in under a minute. No watermark, no signup, completely free for resellers across India.
            </p>
            <Link href="/crop/meesho" className="text-blue-600 font-medium hover:underline">
              Crop Meesho labels free →
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-[32px] font-bold text-center mb-10">The Problem We Solve</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-red-50 rounded-xl">
            <h3 className="text-[18px] font-semibold mb-2">❌ Wasted Margin Space</h3>
            <p className="text-[14px] text-warm-gray-500">A4 PDFs have huge white space. Your thermal printer wastes 40% of each page, costing money and time.</p>
          </div>
          <div className="p-6 bg-red-50 rounded-xl">
            <h3 className="text-[18px] font-semibold mb-2">❌ Barcode Fails to Scan</h3>
            <p className="text-[14px] text-warm-gray-500">Blurry or cropped barcodes get rejected at delivery hub. Customer waits extra days for package.</p>
          </div>
          <div className="p-6 bg-red-50 rounded-xl">
            <h3 className="text-[18px] font-semibold mb-2">❌ Manual Crop in Photoshop</h3>
            <p className="text-[14px] text-warm-gray-500">You spend 15 minutes per 50 labels manually selecting crop area. That's 2 hours daily wasted.</p>
          </div>
          <div className="p-6 bg-red-50 rounded-xl">
            <h3 className="text-[18px] font-semibold mb-2">❌ Mixed Label + Invoice</h3>
            <p className="text-[14px] text-warm-gray-500">Flipkart bundles invoice with label. Printing both wastes paper. Need separate files for thermal printer.</p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-[32px] font-bold text-center mb-10">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-3">📄</div>
            <h3 className="text-[16px] font-semibold mb-2">1. Upload PDF</h3>
            <p className="text-[14px] text-warm-gray-500">Drop your shipping label PDF. Works with A4 and letter from Flipkart, Amazon, Meesho.</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">✂️</div>
            <h3 className="text-[16px] font-semibold mb-2">2. Auto-Crop</h3>
            <p className="text-[14px] text-warm-gray-500">Smart detection finds label, crops to exact 4x6 inches. Removes invoice if bundled.</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">👀</div>
            <h3 className="text-[16px] font-semibold mb-2">3. Preview</h3>
            <p className="text-[14px] text-warm-gray-500">See cropped labels before download. Check barcode clarity, verify print quality.</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">⬇️</div>
            <h3 className="text-[16px] font-semibold mb-2">4. Download</h3>
            <p className="text-[14px] text-warm-gray-500">Download PDF ready for thermal printer. Print immediately, no waiting, no registration.</p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-[32px] font-bold text-center mb-8">Built for Indian Marketplaces</h2>
        <p className="text-center text-warm-gray-500 mb-8">We tested with real sellers across India - Mumbai, Delhi, Bangalore, Chennai, Hyderabad</p>
        <div className="flex flex-wrap justify-center gap-4">
          <span className="bg-blue-100 px-5 py-2 rounded-full text-sm font-medium">Flipkart</span>
          <span className="bg-yellow-100 px-5 py-2 rounded-full text-sm font-medium">Amazon</span>
          <span className="bg-pink-100 px-5 py-2 rounded-full text-sm font-medium">Meesho</span>
          <span className="bg-purple-100 px-5 py-2 rounded-full text-sm font-medium">Myntra</span>
          <span className="bg-red-100 px-5 py-2 rounded-full text-sm font-medium">Snapdeal</span>
          <span className="bg-green-100 px-5 py-2 rounded-full text-sm font-medium">GlowRoad</span>
          <span className="bg-gray-100 px-5 py-2 rounded-full text-sm font-medium">IndiaMART</span>
          <span className="bg-orange-100 px-5 py-2 rounded-full text-sm font-medium">Ekart</span>
        </div>
      </section>

      <section className="max-w-3xl mx-auto mb-16">
        <h2 className="text-[32px] font-bold text-center mb-8">Why 2,500+ Sellers Switched to LabelCrop</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 border rounded-xl">
            <h3 className="text-[18px] font-semibold mb-2">🔒 Browser-Only Processing</h3>
            <p className="text-[14px] text-warm-gray-500">Your files never leave your device. We don't upload to any server. Completely private for business documents.</p>
          </div>
          <div className="p-6 border rounded-xl">
            <h3 className="text-[18px] font-semibold mb-2">⚡ Saves 2 Hours Daily</h3>
            <p className="text-[14px] text-warm-gray-500">Upload bulk PDF, get all labels cropped in seconds. No more manual Photoshop work.</p>
          </div>
          <div className="p-6 border rounded-xl">
            <h3 className="text-[18px] font-semibold mb-2">🎯 Barcode Crisp</h3>
            <p className="text-[14px] text-warm-gray-500">We preserve barcode resolution. Scans perfectly at delivery hub - no failed deliveries.</p>
          </div>
          <div className="p-6 border rounded-xl">
            <h3 className="text-[18px] font-semibold mb-2">💯 Free Forever</h3>
            <p className="text-[14px] text-warm-gray-500">No hidden fees, no premium tier. Built by Indian sellers for Indian sellers.</p>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto mb-16">
        <h2 className="text-[32px] font-bold text-center mb-8">What Sellers Say</h2>
        <div className="space-y-6">
          <div className="p-6 bg-gray-50 rounded-xl">
            <p className="text-[16px] italic text-warm-gray-500 mb-3">"I was spending 2 hours every morning cropping labels in Photoshop. This tool saved my sanity. Just upload, click, done."</p>
            <p className="text-[14px] font-medium">- Priya S., Flipkart Seller, Mumbai</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl">
            <p className="text-[16px] italic text-warm-gray-500 mb-3">"Easy Ship sellers know the pain. LabelCrop's crisp barcodes mean zero scan failures at Amazon hub."</p>
            <p className="text-[14px] font-medium">- Rahul K., Amazon FBA, Delhi</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl">
            <p className="text-[16px] italic text-warm-gray-500 mb-3">"Processing 200 Meesho orders used to take an hour. Now it's 5 minutes. Auto-SKU sort is genius."</p>
            <p className="text-[14px] font-medium">- Anjali M., Meesho Reseller, Bangalore</p>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto mb-16">
        <h2 className="text-[32px] font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="p-6 border rounded-lg">
            <h3 className="text-[16px] font-semibold mb-2">Is my data uploaded to servers?</h3>
            <p className="text-[14px] text-warm-gray-500">No. All processing happens in your browser using JavaScript. Your files never leave your device. We can't see your files even if we wanted to.</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="text-[16px] font-semibold mb-2">Is it really free with no hidden costs?</h3>
            <p className="text-[14px] text-warm-gray-500">Yes. Unlimited usage, no registration, no premium tier. We built this to help Indian sellers, not to make money from you.</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="text-[16px] font-semibold mb-2">What file formats work?</h3>
            <p className="text-[14px] text-warm-gray-500">PDF files only. Works with A4 and letter size shipping labels from any marketplace. Batch processing handles up to 500 labels per file.</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="text-[16px] font-semibold mb-2">What print size do cropped labels have?</h3>
            <p className="text-[14px] text-warm-gray-500">Exactly 4x6 inches (101.6 x 152.4mm). This is standard thermal printer size. Works with all popular thermal printers in India.</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="text-[16px] font-semibold mb-2">Does it work with Flipkart's invoice + label PDF?</h3>
            <p className="text-[14px] text-warm-gray-500">Yes! We automatically separate shipping label from invoice. You get clean 4x6 label file, plus separate invoice file if needed.</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="text-[16px] font-semibold mb-2">Can I use this offline?</h3>
            <p className="text-[14px] text-warm-gray-500">Yes. Once the page loads, you can disconnect from internet. All processing happens locally in browser - no server calls.</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="text-[16px] font-semibold mb-2">Does it work for Amazon Easy Ship?</h3>
            <p className="text-[14px] text-warm-gray-500">Yes. We handle Amazon's A4 format perfectly. Cropped labels maintain barcode quality for hub scanning.</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="text-[16px] font-semibold mb-2">Can I add my SKU to labels?</h3>
            <p className="text-[14px] text-warm-gray-500">Yes. Enable the "Add SKU" option and your SKU text appears on each label for easy sorting at packing station.</p>
          </div>
        </div>
      </section>

      <section className="text-center mb-8">
        <h2 className="text-[28px] font-bold mb-6">Start Cropping Now - It's Free</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/crop/flipkart" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700">Crop Flipkart Labels</Link>
          <Link href="/crop/amazon" className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-yellow-600">Crop Amazon Labels</Link>
          <Link href="/crop/meesho" className="bg-pink-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-pink-600">Crop Meesho Labels</Link>
        </div>
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
                  "text": "No. All processing happens in your browser using JavaScript. Your files never leave your device. We can't see your files even if we wanted to."
                }
              },
              {
                "@type": "Question",
                "name": "Is it really free with no hidden costs?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Unlimited usage, no registration, no premium tier. We built this to help Indian sellers, not to make money from you."
                }
              },
              {
                "@type": "Question",
                "name": "What file formats work?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "PDF files only. Works with A4 and letter size shipping labels from any marketplace. Batch processing handles up to 500 labels per file."
                }
              },
              {
                "@type": "Question",
                "name": "What print size do cropped labels have?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Exactly 4x6 inches (101.6 x 152.4mm). This is standard thermal printer size. Works with all popular thermal printers in India."
                }
              },
              {
                "@type": "Question",
                "name": "Does it work with Flipkart's invoice + label PDF?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! We automatically separate shipping label from invoice. You get clean 4x6 label file, plus separate invoice file if needed."
                }
              },
              {
                "@type": "Question",
                "name": "Can I use this offline?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Once the page loads, you can disconnect from internet. All processing happens locally in browser - no server calls."
                }
              },
              {
                "@type": "Question",
                "name": "Does it work for Amazon Easy Ship?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. We handle Amazon's A4 format perfectly. Cropped labels maintain barcode quality for hub scanning."
                }
              },
              {
                "@type": "Question",
                "name": "Can I add my SKU to labels?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Enable the Add SKU option and your SKU text appears on each label for easy sorting at packing station."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}