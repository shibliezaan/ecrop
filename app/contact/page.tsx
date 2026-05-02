import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | LabelCrop",
  description: "Contact LabelCrop support for help with shipping label cropping tools.",
  alternates: { canonical: "https://labelcrop.shop/contact" },
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-2xl">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <p className="mb-4">Have questions about LabelCrop? We're here to help Indian e-commerce sellers.</p>
      <div className="space-y-4">
        <div>
          <h2 className="font-semibold">Email Support</h2>
          <p>support@labelcrop.shop</p>
        </div>
        <div>
          <h2 className="font-semibold">Response Time</h2>
          <p>Within 24 hours on business days</p>
        </div>
      </div>
    </div>
  );
}