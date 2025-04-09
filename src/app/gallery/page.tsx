"use client";

import { useState, useEffect } from "react";

export default function GalleryPage() {
  const images = Array.from({ length: 18 }, (_, i) => `/images/project${i + 1}.jpeg`);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleOpen = (index: number) => setSelectedIndex(index);
  const handleClose = () => setSelectedIndex(null);
  const showPrev = () => setSelectedIndex((prev) => (prev! > 0 ? prev! - 1 : images.length - 1));
  const showNext = () => setSelectedIndex((prev) => (prev! < images.length - 1 ? prev! + 1 : 0));

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };
  
    if (selectedIndex !== null) {
      window.addEventListener("keydown", handleKeyDown);
    }
  
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);
  

  return (
    <main className="w-full min-h-screen bg-gray-100 text-white">

      {/* Hero */}
      <section className="relative w-full h-[60vh] flex flex-col items-center justify-center text-center">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/project6.jpeg')" }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-4xl px-6">
          <h1 className="text-5xl font-extrabold">Our Work Speaks for Itself</h1>
          <p className="text-lg mt-4 font-light italic">
            A collection of craftsmanship and quality from our trusted projects.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-28 bg-white text-black">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Project Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Project ${index + 1}`}
                onClick={() => handleOpen(index)}
                className="rounded-lg shadow-lg w-full h-[200px] object-cover cursor-pointer hover:scale-105 transition-transform"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[9999]">
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 text-white text-4xl font-bold hover:opacity-80"
          >
            &times;
          </button>

          <div className="flex items-center justify-center w-full max-w-5xl px-4">
            {/* Prev button outside image */}
            <button
              onClick={showPrev}
              className="absolute left-4 text-white bg-[#0a1f44] px-4 py-2 rounded hover:bg-opacity-90"
            >
              ‹
            </button>

            {/* Image */}
            <img
              src={images[selectedIndex]}
              alt={`Enlarged Project ${selectedIndex + 1}`}
              className="max-h-[80vh] object-contain mx-auto"
            />

            {/* Next button outside image */}
            <button
              onClick={showNext}
              className="absolute right-4 text-white bg-[#0a1f44] px-4 py-2 rounded hover:bg-opacity-90"
            >
              ›
            </button>
          </div>
        </div>
      )}

      {/* Hide bottom-left "N" dev indicator */}
      <style>{`
        [data-nextjs-dev-overlay] {
          display: none !important;
        }
      `}</style>
    </main>
  );
}
