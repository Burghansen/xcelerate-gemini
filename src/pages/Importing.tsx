import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { NEXT_SHIPMENT } from "../constants";

export default function Importing() {
  return (
    <div className="bg-white min-h-screen">

      {/* ── Hero ── */}
      <section className="relative min-h-[92vh] flex items-end pb-20 pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src={`${import.meta.env.BASE_URL}Indonesia.webp`}
            alt="Indonesia"
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
              <span className="text-white/85 text-xs font-medium tracking-[0.15em] uppercase">Inbound Logistics</span>
            </div>
            <h1 style={{ fontFamily: "var(--font-heading)" }} className="text-6xl md:text-8xl font-medium text-white leading-[1.03] mb-8 tracking-tight">
              Importing<br /><span className="text-accent">from</span> Indonesia
            </h1>
            <p className="text-xl font-light leading-relaxed text-white/65 max-w-2xl">
              We help Indonesian suppliers and New Zealand startups bring products into Aotearoa safely and with confidence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Body ── */}
      <div className="container mx-auto px-6 md:px-12 py-28">

        {/* Section header */}
        <div className="mb-16">
          <p className="section-label text-accent mb-4">Partnerships</p>
          <h2 style={{ fontFamily: "var(--font-heading)" }} className="text-4xl md:text-5xl font-medium text-primary">Who We Work With</h2>
        </div>

        <div className="grid grid-cols-1 gap-10 mb-32 max-w-4xl">

          {/* Indonesian Suppliers */}
          <div className="luxury-card">
            <h2 style={{ fontFamily: "var(--font-heading)" }} className="text-2xl font-medium text-primary mb-8">Indonesian Suppliers & Brands</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5 text-muted text-sm mb-12">
              {[
                "Export your products into New Zealand",
                "Learn NZ requirements and market expectations",
                "Grow your brand through our distribution network",
                "Reach supermarkets, ethnic shops, and community buyers",
              ].map((text, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="text-accent font-medium shrink-0 mt-0.5 text-xs leading-5">—</span>
                  <span className="leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>

            <div className="pt-8 border-t border-border">
              <p className="section-label mb-8 text-center">Trusted by Leading Indonesian Brands</p>
              <div className="relative overflow-hidden">
                <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />
                <motion.div
                  className="flex gap-16 items-center"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  style={{ width: "fit-content" }}
                >
                  {[
                    `${import.meta.env.BASE_URL}Mamasuka.webp`, `${import.meta.env.BASE_URL}Mayora.webp`, `${import.meta.env.BASE_URL}kokita.webp`, `${import.meta.env.BASE_URL}desaku.webp`, `${import.meta.env.BASE_URL}maho.webp`, `${import.meta.env.BASE_URL}Rendang-Oma.webp`,
                    `${import.meta.env.BASE_URL}Mamasuka.webp`, `${import.meta.env.BASE_URL}Mayora.webp`, `${import.meta.env.BASE_URL}kokita.webp`, `${import.meta.env.BASE_URL}desaku.webp`, `${import.meta.env.BASE_URL}maho.webp`, `${import.meta.env.BASE_URL}Rendang-Oma.webp`,
                  ].map((img, i) => (
                    <div key={i} className="h-12 w-36 flex-shrink-0 flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                      <img src={img} alt="Brand Logo" loading="lazy" className="max-h-full max-w-full object-contain" />
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>

          {/* NZ Businesses */}
          <div className="luxury-card">
            <h2 style={{ fontFamily: "var(--font-heading)" }} className="text-2xl font-medium text-primary mb-8">NZ Startups & Businesses</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5 text-muted text-sm mb-12">
              {[
                "Import products without stress",
                "Shared container space (consolidation)",
                "Support with documents, MPI requirements, and logistics",
                "Friendly guidance for new importers",
              ].map((text, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="text-accent font-medium shrink-0 mt-0.5 text-xs leading-5">—</span>
                  <span className="leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>

            <div className="pt-8 border-t border-border">
              <p className="section-label mb-8 text-center">Trusted by NZ Retailers & Partners</p>
              <div className="relative overflow-hidden">
                <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />
                <motion.div
                  className="flex gap-16 items-center"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                  style={{ width: "fit-content" }}
                >
                  {[
                    `${import.meta.env.BASE_URL}paknsave.webp`, `${import.meta.env.BASE_URL}newworld.webp`, `${import.meta.env.BASE_URL}tofu-shop.webp`, `${import.meta.env.BASE_URL}furein.webp`, `${import.meta.env.BASE_URL}soung.webp`, `${import.meta.env.BASE_URL}halal-meats.webp`, `${import.meta.env.BASE_URL}java-room.webp`, `${import.meta.env.BASE_URL}raos.webp`, `${import.meta.env.BASE_URL}mill.webp`,
                    `${import.meta.env.BASE_URL}paknsave.webp`, `${import.meta.env.BASE_URL}newworld.webp`, `${import.meta.env.BASE_URL}tofu-shop.webp`, `${import.meta.env.BASE_URL}furein.webp`, `${import.meta.env.BASE_URL}soung.webp`, `${import.meta.env.BASE_URL}halal-meats.webp`, `${import.meta.env.BASE_URL}java-room.webp`, `${import.meta.env.BASE_URL}raos.webp`, `${import.meta.env.BASE_URL}mill.webp`,
                  ].map((img, i) => (
                    <div key={i} className="h-12 w-36 flex-shrink-0 flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                      <img src={img} alt="Retailer Logo" loading="lazy" className="max-h-full max-w-full object-contain" />
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Next shipment CTA */}
        <div className="border-t border-border pt-20 flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          <div>
            <p className="section-label text-accent mb-4">Next Shipment</p>
            <h3 style={{ fontFamily: "var(--font-heading)" }} className="text-4xl font-medium text-primary mb-2">{NEXT_SHIPMENT.etd}</h3>
            <p className="text-xl text-muted">{NEXT_SHIPMENT.eta}</p>
          </div>
          <Link to="/contact" className="luxury-btn-accent">
            Inquire Now <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}
