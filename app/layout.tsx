import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Script } from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://labelcrop.shop"),
  title: {
    default: "LabelCrop - Free Shipping Label Cropper for Flipkart, Amazon, Meesho",
    template: "%s | LabelCrop"
  },
  description: "Crop shipping labels for Flipkart, Amazon, Meesho to 4x6 thermal size. Free, no upload, works in browser.",
  keywords: ["flipkart label crop", "amazon label crop", "meesho label crop", "shipping label cropper", "label crop online free", "flipkart shipping label crop pdf", "flipkart label cropper", "amazon label cropper", "thermal label maker"],
  alternates: {
    canonical: "https://labelcrop.shop",
  },
  openGraph: {
    title: "LabelCrop - Free Shipping Label Cropper",
    description: "Crop shipping labels for Flipkart, Amazon, Meesho to 4x6 thermal size. Free, browser-only.",
    url: "https://labelcrop.shop",
    siteName: "LabelCrop",
    locale: "en_US",
    type: "website"
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <Script id="schema-software-application" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "LabelCrop",
            "applicationCategory": "BusinessApplication",
            "offers": {"@type": "Offer", "price": "0"},
            "operatingSystem": "Web",
            "description": "Free shipping label cropper for Flipkart, Amazon, Meesho sellers"
          })}
        </Script>
      </body>
    </html>
  );
}