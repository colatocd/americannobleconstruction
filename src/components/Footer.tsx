import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-green-700 text-white py-6">
      <div className="container mx-auto text-center">
        {/* Navigation Links */}
        <div className="flex justify-center space-x-8 text-lg font-medium mb-4">
          <Link href="/" className="hover:text-gray-300 transition">Home</Link>
          <Link href="/about" className="hover:text-gray-300 transition">About</Link>
          <Link href="/gallery" className="hover:text-gray-300 transition">Gallery</Link>
          <Link href="/contact" className="hover:text-gray-300 transition">Contact</Link>
        </div>

        {/* Footer Info */}
        <p className="text-sm">Serving the area since 2002</p>
        <p className="text-sm">(703) 926-4398 | danielcolato75@yahoo.com</p>

        {/* Copyright */}
        <p className="text-sm mt-2">© {new Date().getFullYear()} American Noble Construction Inc. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
