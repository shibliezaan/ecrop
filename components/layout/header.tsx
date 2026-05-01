import Link from "next/link";

export function Header() {
  return (
    <header className="whisper-border bg-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link 
            href="/" 
            className="text-[22px] font-bold tracking-[-0.25px] text-notion-black"
          >
            eCrop
          </Link>
          <nav className="flex gap-6 items-center">
            <Link 
              href="/" 
              className="text-[15px] font-semibold text-notion-black hover:opacity-70"
            >
              Home
            </Link>
            <Link 
              href="/tools" 
              className="text-[15px] font-semibold text-notion-black hover:opacity-70"
            >
              Tools
            </Link>
            <Link 
              href="/about" 
              className="text-[15px] font-semibold text-notion-black hover:opacity-70"
            >
              About
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}