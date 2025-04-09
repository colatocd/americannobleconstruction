"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setStatus("✅ Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("❌ Error sending message. Try again.");
    }
  };

  return (
    <main className="w-full min-h-screen bg-gray-100 text-white">

      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex flex-col items-center justify-center text-center">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/project17.jpeg')" }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-4xl px-6">
          <h1 className="text-5xl font-extrabold">Contact Us</h1>
          <p className="text-lg mt-4 font-light italic">Let’s talk about your next construction or remodeling project.</p>
        </div>
      </section>

      {/* Company Capabilities */}
      <section className="py-24 bg-white text-black">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">We Build With Purpose</h2>
          <p className="text-lg leading-relaxed">
            At American Noble Construction Inc., we’re not just contractors — we’re full-service builders with decades of
            experience in both residential and commercial projects. From ground-up construction to high-end remodeling and
            everything in between, we deliver quality, durability, and trust.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              {
                title: "Remodeling & Renovations",
                desc: "Kitchens, bathrooms, basements, and whole-home transformations with expert craftsmanship.",
              },
              {
                title: "Carpentry & Custom Woodwork",
                desc: "Built-ins, framing, cabinetry, trim, and structural repairs for homes and businesses.",
              },
              {
                title: "Roofing, Siding & Exteriors",
                desc: "We handle roof replacements, siding, gutters, and large-scale exterior construction.",
              },
            ].map((item, index) => (
              <div key={index} className="p-6 rounded-lg shadow-md bg-gray-50">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-[#0a1f44] text-white">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg text-black">
            <label className="block mb-2 text-sm font-bold">Your Name:</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 border rounded mb-4 focus:ring-2 focus:ring-[#0a1f44]"
              required
            />

            <label className="block mb-2 text-sm font-bold">Your Email:</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 border rounded mb-4 focus:ring-2 focus:ring-[#0a1f44]"
              required
            />

            <label className="block mb-2 text-sm font-bold">Your Message:</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="w-full p-3 border rounded mb-4 focus:ring-2 focus:ring-[#0a1f44]"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full bg-[#0a1f44] text-white font-semibold py-3 rounded-lg hover:bg-[#1e40af] transition"
            >
              Send Message
            </button>

            {status && <p className="mt-4 text-center text-sm font-semibold text-black">{status}</p>}
          </form>
        </div>
      </section>
    </main>
  );
}
