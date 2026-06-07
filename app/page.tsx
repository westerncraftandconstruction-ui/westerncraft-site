export default function Page() {
  return (
    <main className="min-h-screen bg-stone-100 text-stone-900">

      {/* HERO */}
      <section className="bg-emerald-950 text-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          
          <p className="text-sm uppercase tracking-widest text-emerald-200">
            Serving Lethbridge • Coaldale • Taber
          </p>

          <h1 className="text-5xl font-bold mt-4 leading-tight">
            Kitchen Renovations & Custom Carpentry in Southern Alberta
          </h1>

          <p className="text-xl text-emerald-300 mt-4 font-semibold">
            Built With Craftsmanship. Backed By Reputation.
          </p>

          <p className="mt-6 text-stone-300 max-w-2xl">
            Western Craft & Construction specializes in kitchen renovations,
            cabinet installation, basement development, and custom carpentry across Southern Alberta.
          </p>

          <div className="mt-8 flex gap-4">
            <a href="#contact" className="bg-white text-emerald-900 px-6 py-3 rounded-xl font-semibold">
              Request a Quote
            </a>

            <a href="#services" className="border border-white/40 px-6 py-3 rounded-xl">
              View Services
            </a>
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="max-w-6xl mx-auto py-24 px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {[
            "Kitchen Renovations",
            "Cabinet Installation",
            "Basement Development",
            "Custom Carpentry",
            "Home Renovations",
            "Repairs & Maintenance"
          ].map((item) => (
            <div key={item} className="bg-white p-6 rounded-2xl shadow">
              <h3 className="text-xl font-bold text-emerald-900">{item}</h3>
            </div>
          ))}

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-stone-200 py-24 px-6">
        <div className="max-w-3xl mx-auto">

          <h2 className="text-4xl font-bold mb-8">
            Request a Quote
          </h2>

          <form
            action="https://formspree.io/f/xnjypkle"
            method="POST"
            className="bg-white p-8 rounded-2xl grid gap-4"
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

    </main>
  );
}