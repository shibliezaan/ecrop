import Link from "next/link";

export function Footer() {
  return (
    <footer className="whisper-border bg-warm-white mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-[14px] text-warm-gray-500">
            © 2026 eCrop. All rights reserved.
          </div>
<div className="flex gap-6">
            <Link 
              href="/tools" 
              className="text-[14px] text-warm-gray-500 hover:text-notion-black"
            >
              Tools
            </Link>
            <Link 
              href="/about" 
              className="text-[14px] text-warm-gray-500 hover:text-notion-black"
            >
              About
            </Link>
            <Link 
              href="/privacy-policy" 
              className="text-[14px] text-warm-gray-500 hover:text-notion-black"
            >
              Privacy
            </Link>
            <Link 
              href="/terms-conditions" 
              className="text-[14px] text-warm-gray-500 hover:text-notion-black"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}