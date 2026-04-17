import { motion } from "motion/react";

export default function About() {
  return (
    <div className="bg-white min-h-screen">

      {/* ── Hero ── */}
      <section className="relative min-h-[92vh] flex items-end pb-20 pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src={`${import.meta.env.BASE_URL}bridge.webp`}
            alt="The Bridge"
            className="w-full h-full object-cover object-center"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20" />
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
              <span className="text-white/85 text-xs font-medium tracking-[0.15em] uppercase">About Us</span>
            </div>
            <h1 style={{ fontFamily: "var(--font-heading)" }} className="text-6xl md:text-8xl font-medium text-white leading-[1.03] mb-8 tracking-tight">
              The Bridge<br />Between <span className="text-accent">Markets</span>
            </h1>
            <p className="text-xl font-light leading-relaxed text-white/65 max-w-2xl">
              Bringing Indonesian products to New Zealand and helping NZ businesses connect with Indonesia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Body ── */}
      <div className="container mx-auto px-6 md:px-12 py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start mb-32">

          {/* Left — image mosaic */}
          <div className="pt-4 lg:pt-16">
            <h2 style={{ fontFamily: "var(--font-heading)" }} className="text-3xl font-medium text-primary mb-8">Who We Are</h2>
            <p className="text-lg text-muted leading-relaxed mb-14">
              Based in Auckland, we are an importer and distributor bridging the market between New Zealand and Indonesia. We specialise in bringing authentic Indonesian flavours to Aotearoa, helping Indonesian brands enter the Kiwi market, and supporting New Zealand businesses expanding overseas.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="aspect-[3/4] rounded-2xl overflow-hidden"
                >
                  <img src={`${import.meta.env.BASE_URL}cart1.webp`} alt="Logistics" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="aspect-square rounded-2xl overflow-hidden"
                >
                  <img src={`${import.meta.env.BASE_URL}cart2.webp`} alt="Logistics" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </motion.div>
              </div>
              <div className="space-y-4 pt-10">
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="aspect-square rounded-2xl overflow-hidden"
                >
                  <img src={`${import.meta.env.BASE_URL}cart3.webp`} alt="Logistics" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="aspect-[3/4] rounded-2xl overflow-hidden"
                >
                  <img src={`${import.meta.env.BASE_URL}cart4.webp`} alt="Logistics" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </motion.div>
              </div>
            </div>
          </div>

          {/* Right — mission & values */}
          <div className="pt-4 lg:pt-16 space-y-20">
            <div>
              <h2 style={{ fontFamily: "var(--font-heading)" }} className="text-3xl font-medium text-primary mb-8">Our Mission</h2>
              <p className="text-lg text-muted leading-relaxed mb-10">
                Xcelerate International exists to build a trusted bridge between Indonesia, Southeast Asia, and New Zealand.
              </p>
              <div className="space-y-6">
                <div className="border-l-2 border-accent pl-6 py-2">
                  <h3 style={{ fontFamily: "var(--font-heading)" }} className="font-medium text-lg text-primary mb-2">For New Zealand</h3>
                  <p className="text-muted text-sm leading-relaxed">We bring authentic Indonesian products into the country safely and legally, making them accessible to retailers and industry.</p>
                </div>
                <div className="border-l-2 border-accent pl-6 py-2">
                  <h3 style={{ fontFamily: "var(--font-heading)" }} className="font-medium text-lg text-primary mb-2">For Indonesia</h3>
                  <p className="text-muted text-sm leading-relaxed">We support producers and SMEs to understand NZ requirements and connect with real distribution opportunities.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 style={{ fontFamily: "var(--font-heading)" }} className="text-3xl font-medium text-primary mb-10">Why Choose Us</h2>
              <ul className="space-y-0 divide-y divide-border">
                {[
                  "Real import experience with practical biosecurity knowledge.",
                  "Trusted relationships with both producers and buyers.",
                  "Community-focused approach connected to local culture.",
                  "Flexible solutions from full containers to shared space.",
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 py-5 text-muted text-sm leading-relaxed">
                    <span className="text-accent font-medium text-xs mt-1 flex-shrink-0">{String(i + 1).padStart(2, "0")}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
