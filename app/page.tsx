export default function Home() {
  return (
    <>
      {/* HERO / HOME */}
      <section id="home" className="min-h-screen flex items-center justify-center text-center px-6">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold max-w-4xl mx-auto leading-tight">
            Critical low voltage and IT infrastructure you can rely on.
          </h1>
          <p className="text-white/60 mt-6 max-w-2xl mx-auto">
            Kleotech installs and supports mission-critical IT and low-voltage
            infrastructure systems. Mission-critical performance, every time.
          </p>

          <div className="mt-12 flex justify-center gap-8">
  <a
    href="#services"
    className="bg-primary px-7 py-3 rounded-md font-medium hover:shadow-glow transition"
  >
    View Services
  </a>

  <a
    href="#contact"
    className="bg-primary px-7 py-3 rounded-md font-medium hover:shadow-glow transition"
  >
    Contact Kleotech
  </a>
</div>

        </div>
      </section>

      {/* SERVICES */}
      <section
  id="services"
  className="min-h-screen px-6 py-32 flex items-center justify-center text-center"
>
  <div className="max-w-6xl w-full">
    <h2 className="text-4xl md:text-5xl font-bold mb-8">
      Our Services
    </h2>

    <p className="text-white/60 mb-20 max-w-3xl mx-auto">
      Comprehensive IT and low voltage infrastructure solutions designed
      for uptime, security, scalability, and long-term reliability.
    </p>

    <div className="grid md:grid-cols-3 gap-6 text-left">
      {[
        "Network Management",
        "IT Staff Support",
        "Audio / Video Installation",
        "Multimedia Experience Installation",
        "Phone System Installation",
        "Email Hosting",
        "Web Hosting",
        "Security Systems",
        "Camera Systems",
        "Structured Cabling",
        "IoT Managment",
        "Access Control",
      ].map(service => (
        <div
          key={service}
          className="bg-card border border-white/5 rounded-xl p-6 hover:shadow-glow transition"
        >
          {service}
        </div>
      ))}
    </div>
  </div>
</section>


      {/* ABOUT */}
      <section
  id="about"
  className="min-h-screen px-6 py-32 flex items-center justify-center text-center"
>
  <div className="max-w-3xl">
    <h2 className="text-4xl md:text-5xl font-bold mb-8">
      About Kleotech
    </h2>

    <p className="text-white/60 mb-6">
      Kleotech is a low voltage contractor specializing in critical IT and
      infrastructure systems. Reliability and security aren’t optional —
      they’re essential.
    </p>

    <p className="text-white/60 mb-6">
      We serve offices, campuses, and complex facilities with solutions
      designed for uptime, scalability, and long-term maintainability.
    </p>

    <p className="text-white/60">
      From initial installation to ongoing management, we work as an
      extension of your team to ensure your infrastructure performs at
      its peak.
    </p>
  </div>
</section>


      {/* CONTACT */}
      <section id="contact" className="min-h-screen px-6 py-32 text-center">
        <h2 className="text-4xl font-bold mb-6">Contact Kleotech</h2>
        <p className="text-white/60 mb-16">
          Get in touch to discuss your IT and low voltage infrastructure needs.
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          <div className="bg-card border border-white/5 rounded-xl p-10">
            <h3 className="font-semibold mb-2">Email</h3>
            <a href="mailto:kleo@kleotech.net" className="text-primary">
              kleo@kleotech.net
            </a>
          </div>

          <div className="bg-card border border-white/5 rounded-xl p-10">
            <h3 className="font-semibold mb-2">Phone</h3>
            <a href="tel:17863182134" className="text-primary">
              786-318-2134
            </a>
          </div>

          <div className="bg-card border border-white/5 rounded-xl p-10">
            <h3 className="font-semibold mb-2">Service Area</h3>
            <p className="text-white/60">Miami & Broward</p>
          </div>
        </div>

        <a
          href="mailto:kleo@kleotech.net"
          className="bg-primary px-8 py-3 rounded-md hover:shadow-glow transition"
        >
          Get in Touch
        </a>
      </section>
    </>
  );
}
