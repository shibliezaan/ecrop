import type { Metadata } from "next";
import Link from "next/link";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Free E-commerce Tools for Sellers | eCrop",
  description: "Free browser-based tools for Indian marketplace sellers. Crop and organize shipping labels for Amazon, Flipkart, and Meesho.",
};

const tools = [
  {
    name: "Amazon Cropper",
    href: "/crop/amazon",
    description: "Optimize Amazon FBA and seller-fulfilled shipping labels",
  },
  {
    name: "Flipkart Cropper",
    href: "/crop/flipkart",
    description: "Process Flipkart shipping labels with invoice integration",
  },
  {
    name: "Meesho Cropper",
    href: "/crop/meesho",
    description: "Auto-crop and sort Meesho shipping labels by SKU",
  },
];

export default function ToolsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-[40px] font-bold tracking-[-1.5px] text-notion-black text-center mb-4">
        Free Seller Tools
      </h1>
      <p className="text-[16px] text-warm-gray-500 text-center mb-12">
        Browser-only processing. Zero uploads. No registration.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {tools.map((tool) => (
          <Link key={tool.href} href={tool.href} className="block">
            <Card className="h-full hover:shadow-notion-deep transition-shadow cursor-pointer">
              <h2 className="text-[22px] font-bold tracking-tight text-notion-black mb-2">
                {tool.name}
              </h2>
              <p className="text-[16px] text-warm-gray-500">
                {tool.description}
              </p>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}