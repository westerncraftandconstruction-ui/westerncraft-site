export const metadata = {
  title:
    "Western Craft & Construction | Kitchen Renovations & Carpentry in Southern Alberta",
  description:
    "Western Craft & Construction provides kitchen renovations, cabinet installation, basement development, and custom carpentry in Lethbridge, Coaldale, Taber, and Southern Alberta.",
};

export default function Page() {
  return (
    <div className="min-h-screen bg-stone-100 text-stone-900">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <h2 className="text-2xl font-bold text-emerald-900">
              Western Craft & Construction
            </h2>
            <p className="text-sm text-stone-600">
              Kitchen Renovations & Carpentry in Southern Alberta
            </p>
          </div>

          <a
            href="#contact"
            className="rounded-xl bg-emerald-800 px-5 py-3 text-white font-semibold"
          >
            Get a Quote
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-gradient-to-br from-emerald-950 via-emerald-900 to-stone-900 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 items-center">
          
          <div>
            <p className="text-sm uppercase tracking-widest text-emerald-200 mb-4">
              Serving Lethbridge • Coaldale • Taber
            </p>

            <h1 className="text-5xl font-bold leading-tight">
              Kitchen Renovations & Custom Carpentry in Southern Alberta
            </h1>

            <p className="mt-4 text-xl text-emerald-300 font-semibold">
              Built With Craftsmanship. Backed By Reputation.
            </p>

            <p className="mt-6 text-stone-300 max-w-xl">
              We specialize in kitchen renovations, cabinet installation,
              basement development, and full home renovations across Southern Alberta.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="#contact"
                className="rounded-xl bg-white px-6 py-4 font-semibold text-emerald-900"
              >
                Request a Quote
              </a>

              <a
                href="#services"
                className="rounded-xl border border-white/30 px-6 py-4"
              >
                View Services
              </a>
            </div>
          </div>

          <div className="rounded-3xl bg-white/5 border border-white/10 p-8">
            <p className="text-4xl font-bold text-emerald-300">13+</p>
            <p className="text-stone-300 mb-6">Years of Experience</p>

            <div className="space-y-4 text-stone-200">
              <div>✔ Kitchen Renovations</div>
              <div>✔ Cabinet Installation</div>
              <div>✔ Basement Development</div>
              <div>✔ Custom Carpentry</div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-center mb-16">
          Services in Southern Alberta
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Kitchen Renovations Lethbridge",
              text: "Full kitchen remodels including cabinets, trim, and finishing."
            },
            {
              title: "Cabinet Installation Alberta",
              text: "Professional IKEA & custom cabinet installation."
            },
            {
              title: "Basement Development",
              text: "Turn unused basements into finished living spaces."
            },
            {
              title: "Custom Carpentry",
              text: "Trim, framing, feature walls, and finish carpentry."
            },
            {
              title: "Home Renovations",
              text: "Full interior renovation projects across Southern Alberta."
            },
            {
              title: "Property Maintenance",
              text: "Reliable repairs and ongoing maintenance work."
            }
          ].map((s) => (
            <div key={s.title} className="bg-white p-8 rounded-2xl shadow">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">
                {s.title}
              </h3>
              <p className="text-stone-600">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold mb-6">
          About Western Craft & Construction
        </h2>

        <p className="text-stone-700 leading-relaxed mb-4">
          Western Craft & Construction serves Lethbridge, Coaldale, Taber, and surrounding areas
          specializing in kitchen renovations, cabinetry, basement development, and custom carpentry.
        </p>

        <p className="text-stone-700 leading-relaxed">
          With over 13 years of experience, we focus on quality craftsmanship and reliable service.
        </p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-stone-200 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">
            Request a Free Quote
          </h2>

          <form
            action="https://formspree.io/f/xnjypkle"
            method="POST"
            className="bg-white p-8 rounded-2xl shadow grid gap-4"
          >
            <input className="border p-4 rounded" placeholder="Name" />
            <input className="border p-4 rounded" placeholder="Email" />
            <input className="border p-4 rounded" placeholder="Phone" />
            <textarea className="border p-4 rounded" rows={5} placeholder="Project details" />
            <button className="bg-emerald-900 text-white p-4 rounded">
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Western Craft & Construction",
            url: "https://westerncraftandconstruction.ca",
            telephone: "587-321-0630",
            areaServed: "Southern Alberta",
            description:
              "Kitchen renovations, cabinet installation, basement development, and custom carpentry."
          })
        }}
      />
    </div>
  );
}