import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "LabelCrop - Free Flipkart Amazon Meesho Label Cropper",
  description: "Crop shipping labels for Flipkart, Amazon, Meesho to 4x6 thermal size. Free, no upload, works in browser.",
  metadataBase: new URL("https://labelcrop.shop"),
  keywords: ["flipkart label cropper", "amazon label cropper", "meesho label crop", "shipping label crop", "thermal label maker"],
  alternates: {
    canonical: "https://labelcrop.shop",
  },
  openGraph: {
    title: "LabelCrop - Free Shipping Label Cropper",
    description: "Crop shipping labels for Flipkart, Amazon, Meesho to 4x6 thermal size. Free, browser-only.",
    url: "https://labelcrop.shop",
    siteName: "LabelCrop",
    locale: "en_US",
    type: "website",
  },
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
      </body>
    </html>
  );
}