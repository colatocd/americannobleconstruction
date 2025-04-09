"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <nav className="container mx-auto flex items-center justify-between py-0 px-6">
        {/* Logo (Moved Slightly Left) */}
        <Link href="/" className="ml-[-90px]">
  <div className="relative h-36 w-90"> {/* h-24 = 96px tall, w-64 = 256px wide */}
    <Image
      src="/images/logo.png"
      alt="Company Logo"
      fill
      className="object-contain"
      priority
    />
  </div>
</Link>




        {/* Navigation Links (Aligned Right) */}
        <div className="flex items-center space-x-8 text-lg font-medium ml-auto">
          <Link href="/" className="text-white hover:text-[#1e40af] transition">Home</Link>
          <Link href="/about" className="text-white hover:text-[#1e40af] transition">About</Link>
          <Link href="/gallery" className="text-white hover:text-[#1e40af] transition">Gallery</Link>
          <Link href="/contact" className="border border-white text-white font-semibold px-5 py-2 rounded-lg hover:bg-white hover:text-[#0a1f44] transition">
            Contact Us
          </Link>
        </div>
      </nav>
    </header>
  );
}
