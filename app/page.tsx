import Portfolio from "../components/Portfolio";

export const metadata = {
  title:
    "Western Craft & Construction | Kitchen Renovations in Lethbridge & Southern Alberta",
  description:
    "Kitchen renovations, cabinet installation, basement development, and custom carpentry in Lethbridge, Coaldale, Taber, and Southern Alberta."
};

export default function Page() {
  return (
    <main className="min-h-screen bg-stone-100 text-stone-900">

      {/* HERO */}
      <section className="relative bg-gradient-to-br from-emerald-950 via-emerald-900 to-stone-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-28">

          <p className="text-sm uppercase tracking-widest text-emerald-200">
            Serving Lethbridge • Coaldale • Taber
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mt-4 leading-tight">
            Kitchen Renovations & Custom Carpentry That Actually Last
          </h1>

          <p className="text-xl text-emerald-300 mt-4 font-semibold">
            Built With Craftsmanship. Backed By Reputation.
          </p>

          <p className="mt-6 max-w-2xl text-stone-300">
            Western Craft & Construction delivers high-quality kitchen renovations,
            cabinet installation, basement development, and full home renovations across Southern Alberta.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="bg-white text-emerald-900 px-6 py-4 rounded-xl font-semibold"
            >
              Get a Free Quote
            </a>

            <a
              href="#services"
              className="border border-white/30 px-6 py-4 rounded-xl"
            >
              View Services
            </a>
          </div>
        </div>
      </section>

      {/* TRUST / STATS */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-6">
        {[
          { title: "13+ Years Experience", text: "Hands-on construction expertise" },
          { title: "Local Alberta Contractor", text: "Lethbridge • Taber • Coaldale" },
          { title: "Owner Operated", text: "Direct communication, no middleman" }
        ].map((item) => (
          <div key={item.title} className="bg-white rounded-2xl p-6 shadow">
            <h3 className="font-bold text-emerald-900 text-lg">{item.title}</h3>
            <p className="text-stone-600 mt-2">{item.text}</p>
          </div>
        ))}
      </section>

      {/* SERVICES */}
      <section id="services" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">
          Construction Services in Southern Alberta
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Kitchen Renovations Lethbridge",
              text: "Full kitchen remodels, cabinetry, trim, and finishing."
            },
            {
              title: "Cabinet Installation Alberta",
              text: "Professional IKEA & custom cabinet installation."
            },
            {
              title: "Basement Development",
              text: "Turn unused basements into finished living space."
            },
            {
              title: "Custom Carpentry",
              text: "Trim, framing, feature walls, and finishing work."
            },
            {
              title: "Home Renovations",
              text: "Full interior renovations and upgrades."
            },
            {
              title: "Repairs & Maintenance",
              text: "Reliable small jobs and ongoing maintenance."
            }
          ].map((s) => (
            <div
              key={s.title}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <h3 className="font-bold text-emerald-900 text-lg mb-2">
                {s.title}
              </h3>
              <p className="text-stone-600">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold mb-6">
            Built on 13+ Years of Real Construction Experience
          </h2>

          <p className="text-stone-700 leading-relaxed mb-4">
            Western Craft & Construction serves homeowners across Lethbridge,
            Coaldale, Taber, and Southern Alberta with high-quality renovation and carpentry work.
          </p>

          <p className="text-stone-700 leading-relaxed">
            We specialize in kitchen renovations, cabinet installation, basement development,
            and custom carpentry with a focus on durability, detail, and honest workmanship.
          </p>
        </div>
      </section>

      <Portfolio />

      {/* CONTACT */}
      <section id="contact" className="bg-stone-200 px-6 py-20">
        <div className="max-w-3xl mx-auto">

          <h2 className="text-4xl font-bold mb-8">
            Request a Free Quote
          </h2>

          <form
            action="https://formspree.io/f/xnjypkle"
            method="POST"
            className="bg-white p-8 rounded-2xl shadow grid gap-4"
          >
            <input className="border p-4 rounded-xl" placeholder="Name" />
            <input className="border p-4 rounded-xl" placeholder="Email" />
            <input className="border p-4 rounded-xl" placeholder="Phone" />
            <textarea
              className="border p-4 rounded-xl"
              rows={5}
              placeholder="Tell us about your project"
            />
            <button className="bg-emerald-900 text-white p-4 rounded-xl font-semibold">
              Get My Quote
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-stone-950 text-stone-400 py-10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-white font-bold">
            Western Craft & Construction
          </p>
          <p className="text-sm mt-2">
            Kitchen Renovations • Carpentry • Southern Alberta
          </p>
        </div>
      </footer>

    </main>
  );
}