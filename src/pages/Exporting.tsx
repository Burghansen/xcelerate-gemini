import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function Exporting() {
  return (
    <div className="bg-white min-h-screen">

      {/* ── Hero ── */}
      <section className="relative min-h-[92vh] flex items-end pb-20 pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src={`${import.meta.env.BASE_URL}NZ-Export.webp`}
            alt="New Zealand Export"
            className="w-full h-full object-cover object-center"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-4 py-2 mb-10">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-white/85 text-xs font-medium tracking-[0.15em] uppercase">Outbound Logistics</span>
            </div>
            <h1 style={{ fontFamily: "var(--font-heading)" }} className="text-6xl md:text-8xl font-medium text-white leading-[1.03] mb-8 tracking-tight">
              Export<br /><span className="text-accent">Services</span>
            </h1>
            <p className="text-xl font-light leading-relaxed text-white/65 max-w-2xl">
              Supporting buyers outside New Zealand who want a taste of home — or high-quality Kiwi products for their market.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Body ── */}
      <div className="container mx-auto px-6 md:px-12 py-28">

        {/* Catalogue CTA */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 p-10 md:p-12 rounded-2xl border border-border bg-[#F7F7F5] mb-28">
          <div>
            <h2 style={{ fontFamily: "var(--font-heading)" }} className="text-2xl font-medium text-primary mb-3">NZ Export Product Catalogue</h2>
            <p className="text-muted text-sm max-w-lg leading-relaxed">
              Discover a curated selection of New Zealand shelf-stable food products suitable for international markets.
            </p>
          </div>
          <a
            href="https://www.xcelerate.co.nz/s/NZ-Export-Shelf-Stable-Catalogue_Mar-2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="luxury-btn-accent shrink-0"
          >
            View Catalogue <ArrowRight size={15} />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

          {/* Who We Support */}
          <div>
            <p className="section-label mb-8">Who We Support</p>
            <div className="space-y-0 divide-y divide-border">
              {[
                { title: "Importers", desc: "Distributors big or small looking for NZ quality." },
                { title: "NZ Alumni", desc: "Former visitors who miss their Kiwi favourites." },
                { title: "Embassies", desc: "NZ companies and embassies operating abroad." },
                { title: "Communities", desc: "Organisers for events and community groups." },
              ].map((item, i) => (
                <div key={i} className="py-7">
                  <h3 style={{ fontFamily: "var(--font-heading)" }} className="text-lg font-medium text-primary mb-1.5">{item.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* What We Supply */}
          <div>
            <p className="section-label mb-8">What We Supply</p>
            <p className="text-muted text-sm leading-relaxed mb-10">
              Shelf-stable food products and everyday pantry items from New Zealand and selected imported brands.
            </p>
            <ul className="space-y-3 mb-14">
              {[
                "Snacks and treats",
                "Breakfast essentials",
                "Milk powder & drinks",
                "Sauces & seasonings",
                "Ready-to-eat meals",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-primary">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="p-8 rounded-2xl border border-border bg-[#F7F7F5]">
              <p className="section-label mb-3">Minimum Order</p>
              <p style={{ fontFamily: "var(--font-heading)" }} className="text-5xl font-medium text-accent mb-1">1 Carton</p>
              <p className="text-muted text-sm">Per product. Accessible for all business sizes.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
