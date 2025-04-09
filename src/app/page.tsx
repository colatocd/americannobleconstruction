export default function Home() {
  return (
    <main className="w-full min-h-screen bg-gray-100 text-white">

     {/* Hero Section */}
<section className="relative w-full min-h-[65vh] flex items-center justify-center text-center px-4 sm:px-6 md:px-8">
  {/* Background Image */}
  <div
    className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: "url('/images/project4.jpeg')" }}
  />
  <div className="absolute inset-0 bg-black/50" />

  {/* Text Content */}
  <div className="relative z-10 max-w-3xl w-full">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-white">
      Our Process Turns Your Remodeling Dreams into Reality
    </h1>
    <p className="text-base sm:text-lg mt-4 font-light italic text-white">
      Quality work completed on time and on budget at reasonable rates
    </p>
    <a
      href="/contact"
      className="mt-6 inline-block bg-[#0a1f44] text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-[#1e40af] transition"
    >
      Schedule a Consultation
    </a>
  </div>
</section>


      {/* Services Section */}
      <section className="py-28 bg-white text-black">
        <div className="container mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Kitchen", text: "From simple upgrades to complete renovations, we’ll help bring your dream kitchen to life." },
              { title: "Bath", text: "We install high-quality shower enclosures and provide waterproof solutions." },
              { title: "Carpentry", text: "Custom woodworking, built-ins, and home renovations tailored to your needs." },
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold">{service.title}</h3>
                <p className="text-gray-600 mt-3">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

   {/* About Section */}
<section className="py-28 bg-[#0a1f44] text-white text-center">
  <div className="container mx-auto flex flex-col md:flex-row items-center">
    
    {/* Left Column - Centered Text */}
    <div className="md:w-1/2 p-8 flex flex-col items-center text-center">
      <h2 className="text-3xl font-bold">A Licensed Contracting Firm</h2>
      <p className="mt-4 text-lg font-light max-w-md">
        We are a dedicated team of licensed professionals providing our customers with affordable, quality workmanship.
      </p>
    </div>

    {/* Right Column - Contact Info */}
    <div className="md:w-1/2 flex justify-center items-center p-8">
      <div className="bg-white text-[#0a1f44] rounded-lg shadow-lg p-6 w-full max-w-sm text-left">
        <h3 className="text-2xl font-bold mb-2">Daniel Colato</h3>
        <p className="mb-1">📞 (703) 926-4398</p>
        <p>✉️ danielcolato75@yahoo.com</p>
      </div>
    </div>
    
  </div>
</section>



      {/* Testimonials Section */}
      <section className="py-28 bg-white text-center text-black">
        <h2 className="text-3xl font-bold">What Our Clients Have to Say</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto italic text-[#0a1f44]">
          <div className="p-6 bg-gray-50 rounded-lg shadow-md">
            <p className="text-lg">“This is a quality general contractor run by quality people that I have enjoyed working with. The crew is polite and hard working. I appreciate the quality work and all the effort they put into my project and highly recommend American Noble Construction.”</p>
            <span className="block mt-4 text-gray-700 font-semibold">— Gara M. (Yelp)</span>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow-md text-center flex flex-col justify-center items-center">
  <p className="text-lg max-w-md">“You guys are doing a great job. Thank you very much for putting so much effort into my construction project.”</p>
  <span className="block mt-4 text-gray-700 font-semibold">— Cotor C. (Yellow Pages)</span>
</div>

        </div>
      </section>

  {/* Animated Scrolling Gallery Section */}
<section className="py-28 bg-white text-center text-black overflow-hidden">
  <h2 className="text-3xl font-bold mb-10">Gallery</h2>
  <div className="relative w-full overflow-hidden">
    <div className="flex animate-scroll whitespace-nowrap">
      {Array.from({ length: 36 }, (_, i) => {
        const imgIndex = (i % 18) + 1; // Loop 1–18 twice
        return (
          <img
            key={i}
            src={`/images/project${imgIndex}.jpeg`}
            alt={`Project ${imgIndex}`}
            className="h-[200px] w-auto rounded-lg shadow-lg mx-2 object-cover"
          />
        );
      })}
    </div>
  </div>
  <a
    href="/gallery"
    className="mt-10 inline-block bg-[#0a1f44] text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-[#1e40af] transition"
  >
    View Full Gallery
  </a>

  <style>{`
    @keyframes scroll {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .animate-scroll {
      animation: scroll 60s linear infinite;
    }
  `}</style>
</section>


    </main>
  );
}
