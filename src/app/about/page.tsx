export default function AboutPage() {
  return (
    <main className="w-full min-h-screen bg-gray-100 text-white">

      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex flex-col items-center justify-center text-center">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/project3.jpeg')" }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-4xl px-6">
          <h1 className="text-5xl font-extrabold">Who We Are</h1>
          <p className="text-lg mt-4 font-light italic">Built on experience. Driven by quality. Trusted by our clients.</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-white text-black">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">About American Noble Construction</h2>
          <p className="text-lg leading-relaxed">
            American Noble Construction Inc. is a licensed, full-service contracting company serving homeowners and businesses since 2006.
            We specialize in delivering high-quality construction, remodeling, and custom carpentry services across the region.
          </p>
          <p className="mt-6 text-lg leading-relaxed">
            Whether it’s a complete home renovation, a large-scale commercial project, or precision carpentry, our experienced team brings
            skill, integrity, and attention to detail to every job. Our mission is simple: deliver dependable service and exceptional results
            that our clients can trust for years to come.
          </p>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-24 bg-[#0a1f44] text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              {
                title: "Remodeling & Renovations",
                desc: "We transform kitchens, bathrooms, basements, and more with unmatched craftsmanship and care.",
              },
              {
                title: "Carpentry & Woodwork",
                desc: "Our team builds custom cabinetry, trim, framing, and structural woodwork for all project sizes.",
              },
              {
                title: "Roofing & Exterior Work",
                desc: "We handle roofing, siding, and exterior renovations with durable materials and professional installation.",
              },
            ].map((item, index) => (
              <div key={index} className="p-6 rounded-lg shadow-md bg-white text-black">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
