"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="relative h-16 w-40">
          <Image
            src="/images/logo.png"
            alt="Company Logo"
            fill
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6 text-lg font-medium ml-auto">
          <Link href="/" className="text-white hover:text-[#1e40af] transition">Home</Link>
          <Link href="/about" className="text-white hover:text-[#1e40af] transition">About</Link>
          <Link href="/gallery" className="text-white hover:text-[#1e40af] transition">Gallery</Link>
          <Link href="/contact" className="border border-white text-white font-semibold px-4 py-1.5 rounded-lg hover:bg-white hover:text-[#0a1f44] transition">
            Contact Us
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-3xl focus:outline-none"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0a1f44] text-white px-6 pb-6 space-y-4">
          <Link href="/" className="block hover:text-[#1e40af]" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/about" className="block hover:text-[#1e40af]" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/gallery" className="block hover:text-[#1e40af]" onClick={() => setMenuOpen(false)}>Gallery</Link>
          <Link href="/contact" className="block border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-[#0a1f44]" onClick={() => setMenuOpen(false)}>
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}
