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
              Premium Renovations & Custom Carpentry
            </p>
          </div>

          <nav className="hidden gap-8 md:flex">
            <a href="#services" className="hover:text-emerald-800">Services</a>
            <a href="#gallery" className="hover:text-emerald-800">Gallery</a>
            <a href="#about" className="hover:text-emerald-800">About</a>
            <a href="#contact" className="hover:text-emerald-800">Contact</a>
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
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[radial-gradient(circle_at_top_left,white,transparent_40%)]" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-emerald-200">
              Serving Lethbridge • Coaldale • Taber
            </p>

            <h2 className="mb-6 text-5xl font-bold leading-tight md:text-6xl">
              Kitchen Renovations, Custom Carpentry & Home Renovations in Southern Alberta
              <p className="text-2xl font-semibold text-emerald-300 mt-4">
Built With Craftsmanship. Backed By Reputation.
</p>

            <p className="mb-8 max-w-xl text-lg text-stone-300">
              Western Craft & Construction specializes in premium kitchen renovations,
              basement developments, custom carpentry, cabinet installation, and high-quality home renovations across Southern Alberta.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-2xl bg-white px-6 py-4 font-semibold text-emerald-950 transition hover:bg-stone-200"
              >
                Request a Quote
              </a>

              <a
                href="#gallery"
                className="rounded-2xl border border-white/30 px-6 py-4 font-semibold transition hover:bg-white/10"
              >
                View Projects
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-sm">
            <div className="grid gap-6">
              <div>
                <p className="text-4xl font-bold text-emerald-300">13+</p>
                <p className="text-stone-300">Years of construction experience</p>
              </div>

              <div className="grid gap-4">
                <div className="rounded-2xl bg-white/10 p-5">
                  <p className="text-lg font-semibold">
                    “Best construction experience I’ve ever had!”
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-5">
                  <p className="text-lg font-semibold">
                    “Rocky went above and beyond.”
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-5">
                  <p className="text-lg font-semibold">
                    “Highly recommend for building and reno needs.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">
            Services
          </p>
          <h3 className="text-4xl font-bold text-stone-900">
            Renovation & Carpentry Services
          </h3>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Kitchen Renovations',
              text: 'Complete kitchen transformations including cabinetry, trim, finishing, and custom upgrades.',
            },
            {
              title: 'IKEA Cabinet Installation',
              text: 'Professional cabinet assembly and installation with precision fit and finish.',
            },
            {
              title: 'Basement Development',
              text: 'Transform unfinished basements into beautiful and functional living spaces.',
            },
            {
              title: 'Custom Carpentry',
              text: 'Trim work, framing, finishing details, feature walls, and custom-built solutions.',
            },
            {
              title: 'Home Renovations',
              text: 'Modern interior updates designed to improve function, value, and appearance.',
            },
            {
              title: 'Property Maintenance',
              text: 'Reliable repairs and ongoing maintenance for homeowners and property managers.',
            },
          ].map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <h4 className="mb-4 text-2xl font-bold text-emerald-900">
                {service.title}
              </h4>
              <p className="leading-relaxed text-stone-600">{service.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Placeholder */}
      <section id="gallery" className="bg-stone-900 px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
              Project Gallery
            </p>
            <h3 className="text-4xl font-bold">
              Crafted Projects Across Southern Alberta
            </h3>
            <p className="mx-auto mt-6 max-w-2xl text-stone-300">
              Project photos will be added here. The gallery is designed so you can easily upload kitchens, trim work, basements, cabinetry, and renovation projects later.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="flex aspect-square items-center justify-center rounded-3xl border border-white/10 bg-white/5 text-stone-400"
              >
                Future Project Photo
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">
              About
            </p>

            <h3 className="mb-6 text-4xl font-bold text-stone-900">
              Owner-Operated Craftsmanship You Can Trust
            </h3>

            <p className="mb-6 leading-relaxed text-stone-700">
Western Craft & Construction serves homeowners throughout Lethbridge, Coaldale, Taber, and surrounding Southern Alberta communities. We specialize in kitchen renovations, basement developments, custom carpentry, IKEA kitchen installations, cabinet installation, trim work, and complete home renovations.
</p>

            <p className="mb-6 leading-relaxed text-stone-700">
              With more than 13 years of hands-on construction experience, Rocky focuses on quality workmanship, honest communication, and professional results homeowners can rely on.
            </p>

            <p className="leading-relaxed text-stone-700">
              Every project is approached with attention to detail, craftsmanship, and pride in the finished product.
            </p>
          </div>

          <div className="rounded-3xl bg-emerald-900 p-10 text-white shadow-2xl">
            <h4 className="mb-8 text-3xl font-bold">Why Homeowners Choose Us</h4>

            <div className="grid gap-5">
              {[
                '13+ Years Experience',
                'Premium Craftsmanship',
                'Reliable Communication',
                'Professional Job Sites',
                'Owner-Operated Service',
                'Trusted Across Southern Alberta',
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-white/10 p-4">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-stone-200 px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">
              Contact
            </p>

            <h3 className="mb-6 text-4xl font-bold text-stone-900">
              Request a Free Quote
            </h3>

            <p className="mb-8 leading-relaxed text-stone-700">
              Tell us about your renovation or carpentry project and we’ll get back to you as soon as possible.
            </p>

            <div className="space-y-5 text-lg">
              <div>
                <p className="font-semibold text-stone-900">Phone</p>
                <a href="tel:15873210630" className="text-emerald-800 hover:underline">
                  587-321-0630
                </a>
              </div>

              <div>
                <p className="font-semibold text-stone-900">Email</p>
                <a
                  href="mailto:westerncraftandconstruction@gmail.com"
                  className="text-emerald-800 hover:underline"
                >
                  westerncraftandconstruction@gmail.com
                </a>
              </div>

              <div>
                <p className="font-semibold text-stone-900">Service Area</p>
                <p className="text-stone-700">
                  Lethbridge • Coaldale • Taber • Southern Alberta
                </p>
              </div>
            </div>
          </div>

          <form
  action="https://formspree.io/f/xnjypkle"
  method="POST"
  className="rounded-3xl bg-white p-8 shadow-xl"
>
            <div className="grid gap-5">
              <input
                type="text"
                placeholder="Full Name"
                className="rounded-2xl border border-stone-300 px-5 py-4 outline-none focus:border-emerald-700"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="rounded-2xl border border-stone-300 px-5 py-4 outline-none focus:border-emerald-700"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="rounded-2xl border border-stone-300 px-5 py-4 outline-none focus:border-emerald-700"
              />

              <select className="rounded-2xl border border-stone-300 px-5 py-4 outline-none focus:border-emerald-700">
                <option>Select Project Type</option>
                <option>Kitchen Renovation</option>
                <option>Basement Development</option>
                <option>Cabinet Installation</option>
                <option>Custom Carpentry</option>
                <option>General Renovation</option>
              </select>

              <textarea
                rows={5}
                placeholder="Tell us about your project"
                className="rounded-2xl border border-stone-300 px-5 py-4 outline-none focus:border-emerald-700"
              />

              <button
                type="submit"
                className="rounded-2xl bg-emerald-900 px-6 py-4 font-semibold text-white transition hover:bg-emerald-950"
              >
                Submit Request
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-950 px-6 py-10 text-stone-400">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <h5 className="text-xl font-bold text-white">
              Western Craft & Construction
            </h5>
            <p className="mt-2 text-sm">
              Premium Renovations & Custom Carpentry in Southern Alberta
            </p>
          </div>

          <div className="text-sm">
            © 2026 Western Craft & Construction. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
