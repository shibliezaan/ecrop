import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "eCrop - Free Label Cropper for Amazon, Flipkart, Meesho Sellers",
  description: "Crop shipping labels instantly. Free, browser-only, zero uploads. No registration. Supports Amazon, Flipkart, Meesho, Myntra, Snapdeal, GlowRoad.",
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