"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <nav className="container mx-auto flex items-center justify-between py-6 px-6">
        {/* Logo (Moved Slightly Left) */}
        <a href="/" className="text-2xl font-bold text-white tracking-wide uppercase">
          <div className="ml-[-90px]">
            <Image
              src="/images/logo.png"
              alt="Company Logo"
              width={64}
              height={64}
              priority
            />
          </div>
        </a>

        {/* Navigation Links (Aligned Right) */}
        <div className="flex items-center space-x-8 text-lg font-medium ml-auto">
          <Link href="/" className="text-white hover:text-[#1e40af] transition">Home</Link>
          <Link href="/about" className="text-white hover:text-[#1e40af] transition">About</Link>
          <Link href="/gallery" className="text-white hover:text-[#1e40af] transition">Gallery</Link>
          <a href="/contact" className="border border-white text-white font-semibold px-5 py-2 rounded-lg hover:bg-white hover:text-[#0a1f44] transition">
            Contact Us
          </a>
        </div>
      </nav>
    </header>
  );
}
