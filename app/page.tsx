export const metadata = {
  title:
    "Western Craft & Construction | Kitchen Renovations & Carpentry in Southern Alberta",
  description:
    "Western Craft & Construction provides kitchen renovations, cabinet installation, basement developments, and custom carpentry in Lethbridge, Coaldale, Taber, and Southern Alberta.",
  keywords: [
    "kitchen renovations Lethbridge",
    "cabinet installation Alberta",
    "custom carpentry Southern Alberta",
    "basement renovations Lethbridge",
    "home renovations Alberta"
  ],
  openGraph: {
    title: "Western Craft & Construction",
    description:
      "Premium kitchen renovations, cabinetry, and carpentry in Southern Alberta.",
    url: "https://westerncraftandconstruction.ca",
    type: "website"
  }
};

export default function WesternCraftConstructionWebsite() {
  return (
    <div className="min-h-screen bg-stone-100 text-stone-900">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-2xl font-bold tracking-wide text-emerald-900">
              Western Craft & Construction
            </h1>
            <p className="text-sm text-stone-600">
              Kitchen Renovations & Custom Carpentry in Southern Alberta
            </p>
          </div>

          <nav className="hidden gap-8 md:flex">
            <a href="#services">Services</a>
            <a href="#gallery">Gallery</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>

          <a
            href="#contact"
            className="rounded-2xl bg-emerald-800 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-emerald-900"
          >
            Request a Quote
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-stone-900 text-white">
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-emerald-200">
              Serving Lethbridge • Coaldale • Taber
            </p>

            <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl">
              Kitchen Renovations & Custom Carpentry in Southern Alberta
            </h1>

            <p className="text-2xl font-semibold text-emerald-300 mt-4">
              Built With Craftsmanship. Backed By Reputation.
            </p>

            <p className="mb-8 max-w-xl text-lg text-stone-300">
              Western Craft & Construction specializes in kitchen renovations,
              basement developments, custom carpentry, cabinet installation, and
              full home renovations across Southern Alberta.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-2xl bg-white px-6 py-4 font-semibold text-emerald-950"
              >
                Request a Quote
              </a>

              <a
                href="#gallery"
                className="rounded-2xl border border-white/30 px-6 py-4 font-semibold"
              >
                View Projects
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-sm">
            <p className="text-4xl font-bold text-emerald-300">13+</p>
            <p className="text-stone-300 mb-6">Years of construction experience</p>

            <div className="space-y-4">
              <div className="rounded-2xl bg-white/10 p-5">
                “Best construction experience I’ve ever had!”
              </div>
              <div className="rounded-2xl bg-white/10 p-5">
                “Rocky went above and beyond.”
              </div>
              <div className="rounded-2xl bg-white/10 p-5">
                “Highly recommend for renovations.”
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="text-4xl font-bold text-center mb-16">
          Renovation Services in Southern Alberta
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Kitchen Renovations Lethbridge",
              text:
                "Complete kitchen renovations including cabinetry, trim, and finishing."
            },
            {
              title: "Cabinet Installation Alberta",
              text:
                "Precision IKEA and custom cabinet installation with professional finish."
            },
            {
              title: "Basement Development",
              text:
                "Transform unfinished basements into functional living spaces."
            },
            {
              title: "Custom Carpentry",
              text:
                "Trim, framing, feature walls, and custom woodworking."
            },
            {
              title: "Home Renovations",
              text:
                "Full interior renovations designed to improve value and function."
            },
            {
              title: "Property Maintenance",
              text:
                "Reliable repairs and ongoing maintenance services."
            }
          ].map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border bg-white p-8 shadow-sm"
            >
              <h3 className="text-xl font-bold text-emerald-900 mb-4">
                {service.title}
              </h3>
              <p className="text-stone-600">{service.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-4xl font-bold mb-8">
          About Western Craft & Construction
        </h2>

        <p className="mb-6 text-stone-700 leading-relaxed">
          Western Craft & Construction serves Lethbridge, Coaldale, Taber, and
          surrounding Southern Alberta communities. We specialize in kitchen
          renovations, cabinet installation, basement developments, custom
          carpentry, and full home renovations.
        </p>

        <p className="text-stone-700 leading-relaxed">
          With over 13 years of hands-on experience, we focus on craftsmanship,
          reliability, and high-quality results on every project.
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-stone-200 px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-6">
            Request a Free Quote
          </h2>

          <form
            action="https://formspree.io/f/xnjypkle"
            method="POST"
            className="grid gap-5 bg-white p-8 rounded-3xl shadow-xl"
          >
            <input className="p-4 border rounded-xl" placeholder="Name" />
            <input className="p-4 border rounded-xl" placeholder="Email" />
            <input className="p-4 border rounded-xl" placeholder="Phone" />
            <textarea
              className="p-4 border rounded-xl"
              rows={5}
              placeholder="Project details"
            />
            <button className="bg-emerald-900 text-white p-4 rounded-xl">
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* Schema */}
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
              "Kitchen renovations, cabinetry, basement development, and custom carpentry in Southern Alberta."
          })
        }}
      />
    </div>
  );
}