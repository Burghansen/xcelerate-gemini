import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";


const SERVICES = [
  { id: "01", title: "Export Operations", desc: "Strategic handling of outbound goods — fast, safe, and globally compliant.", img: `${import.meta.env.BASE_URL}Export-operation.webp`, link: "/exporting" },
  { id: "02", title: "Import Management", desc: "Seamless entry into new markets with full regulatory compliance.", img: `${import.meta.env.BASE_URL}Import-manage.webp`, link: "/importing" },
  { id: "03", title: "Supply Chain", desc: "End-to-end optimisation for your global operations.", img: `${import.meta.env.BASE_URL}Supply-chain.webp`, link: "/contact" },
  { id: "04", title: "Freight Forwarding", desc: "Reliable transport across ocean, air, and land.", img: `${import.meta.env.BASE_URL}Freight-Forwarding.webp`, link: "/contact" },
  { id: "05", title: "Customs Clearance", desc: "Navigating complex regulations to prevent costly delays.", img: `${import.meta.env.BASE_URL}Custom-clear.webp`, link: "/contact" },
  { id: "06", title: "Storage & Distribution", desc: "Secure warehousing and efficient last-mile delivery.", img: `${import.meta.env.BASE_URL}Storage-Dist.webp`, link: "/contact" },
];

const FEATURES = [
  { num: "01", title: "Reliable Global Network", desc: "With a trusted network of partners, agents, and carriers across 30+ countries, we ensure your shipments move efficiently — no matter the origin or destination." },
  { num: "02", title: "Transparent Pricing & Timelines", desc: "No hidden fees. Clear, upfront pricing and realistic timelines so you can plan your operations with confidence." },
  { num: "03", title: "Regulatory Expertise", desc: "Our local experts ensure full compliance with regional regulations to prevent costly delays at every border." },
  { num: "04", title: "Personalised Support", desc: "You're not a tracking number. Dedicated account managers provide proactive updates and tailored solutions." },
];

export default function Home() {
  return (
    <div className="bg-background">

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-end pb-20 pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src={`${import.meta.env.BASE_URL}Hero-bg.webp`}
            alt="Container Ship and Port"
            className="w-full h-full object-cover object-center"
            fetchPriority="high"
          />
          {/* Richer gradient — strong left, gentle top fade */}
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
            {/* Badge */}
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-4 py-2 mb-10">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-white/85 text-xs font-medium tracking-[0.15em] uppercase">Auckland · Indonesia · Global</span>
            </div>

            <h1 style={{ fontFamily: "var(--font-heading)" }} className="text-6xl md:text-8xl lg:text-[88px] font-medium text-white leading-[1.03] mb-8 tracking-tight">
              Moving Business<br />
              Beyond Borders
            </h1>

            <p className="text-white/70 text-lg md:text-xl font-light leading-relaxed max-w-xl mb-12">
              Your trusted bridge between New Zealand, Indonesia, and the world — from customs to last-mile delivery.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link
                to="/contact"
                className="bg-accent text-white px-8 py-4 rounded-lg text-sm font-medium hover:bg-accent/90 transition-all flex items-center gap-2 group"
              >
                Get in Touch
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                to="/importing"
                className="bg-white/8 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-lg text-sm font-medium hover:bg-white/15 transition-all"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ── Services ──────────────────────────────────────────────── */}
      <section className="py-28 bg-[#F7F7F5]">
        <div className="container mx-auto px-6 md:px-12">

          {/* Section header */}
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div>
              <p className="section-label mb-4">Services</p>
              <h2 style={{ fontFamily: "var(--font-heading)" }} className="text-4xl md:text-5xl font-medium text-primary">What We Deliver</h2>
            </div>
            <p className="text-muted text-sm max-w-sm leading-relaxed text-right hidden md:block">
              From a single carton to a full container — we handle the complexity so you focus on your business.
            </p>
          </div>

          {/* Featured top row — 2 large cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {SERVICES.slice(0, 2).map((service) => (
              <Link to={service.link} key={service.id} className="group relative h-[420px] rounded-2xl overflow-hidden block">
                <img src={service.img} alt={service.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-103" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  <span className="text-white/50 text-xs font-medium tracking-[0.15em] uppercase">{service.id}</span>
                  <div>
                    <h3 style={{ fontFamily: "var(--font-heading)" }} className="text-3xl font-medium text-white mb-3">{service.title}</h3>
                    <div className="flex items-end justify-between">
                      <p className="text-white/65 text-sm max-w-[75%] leading-relaxed opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">{service.desc}</p>
                      <span className="w-10 h-10 rounded-full bg-white/15 border border-white/20 flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <ArrowUpRight size={16} className="text-white" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* 4-card row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SERVICES.slice(2).map((service) => (
              <Link to={service.link} key={service.id} className="group relative h-[260px] rounded-2xl overflow-hidden block">
                <img src={service.img} alt={service.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <span className="text-white/45 text-xs font-medium tracking-[0.15em] uppercase">{service.id}</span>
                  <div>
                    <h3 style={{ fontFamily: "var(--font-heading)" }} className="text-xl font-medium text-white mb-2">{service.title}</h3>
                    <p className="text-white/60 text-xs leading-relaxed opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">{service.desc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Dark Stats Band ─────────────────────────────────────────── */}
      <section className="bg-[#0D0D0D] py-20 border-y border-white/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-0 md:divide-x md:divide-white/10">

            <div className="md:pr-16">
              <p className="section-label text-white/40 mb-8">Our Reach</p>
              <p style={{ fontFamily: "var(--font-heading)" }} className="text-6xl font-medium text-white mb-2">30+</p>
              <p className="text-white/50 text-sm">Countries across Asia-Pacific, the Pacific, and beyond.</p>
            </div>

            <div className="md:px-16">
              <p className="section-label text-white/40 mb-8">What We Move</p>
              <div className="space-y-4">
                {["Food & Beverages", "Agriculture & Commodities", "Consumer Goods", "Industrial Equipment", "Fashion & Textiles"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                    <span className="text-white/65 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:pl-16">
              <p className="section-label text-white/40 mb-8">Trade Corridor</p>
              <div className="space-y-6">
                <div>
                  <p style={{ fontFamily: "var(--font-heading)" }} className="text-xl font-medium text-white mb-1">New Zealand → Indonesia</p>
                  <p className="text-white/45 text-xs">NZ premium goods, dairy, F&B exports</p>
                </div>
                <div className="w-full h-px bg-white/10" />
                <div>
                  <p style={{ fontFamily: "var(--font-heading)" }} className="text-xl font-medium text-white mb-1">Indonesia → New Zealand</p>
                  <p className="text-white/45 text-xs">Authentic Indonesian products, FMCG, ingredients</p>
                </div>
                <div className="w-full h-px bg-white/10" />
                <div>
                  <p style={{ fontFamily: "var(--font-heading)" }} className="text-xl font-medium text-white mb-1">Global Connections</p>
                  <p className="text-white/45 text-xs">SE Asia, Pacific Islands, Middle East</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Industries ──────────────────────────────────────────────── */}
      <section className="bg-[#111827] text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image panel */}
          <div className="relative min-h-[480px] lg:min-h-0">
            <img
              src={`${import.meta.env.BASE_URL}Industries.webp`}
              alt="Containers"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/60 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#111827]/40" />
          </div>

          {/* Content panel */}
          <div className="p-12 md:p-20 lg:p-24 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 mb-10">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <p className="text-white/55 text-xs font-medium tracking-[0.18em] uppercase">Industries We Support</p>
            </div>

            <h2 style={{ fontFamily: "var(--font-heading)" }} className="text-4xl md:text-5xl font-medium mb-4 leading-tight">
              Built for the<br />businesses that move<br />the world.
            </h2>
            <p className="text-white/50 text-sm leading-relaxed mb-12 max-w-sm">
              From agricultural commodities to retail consumer goods, our network is calibrated for complexity.
            </p>

            <div className="space-y-0 divide-y divide-white/8">
              {["Agriculture & Commodities", "Automotive & Heavy Equipment", "Consumer Goods & Retail", "Electronics & Technology", "Fashion & Textiles"].map((ind, i) => (
                <div key={ind} className="flex items-center justify-between py-4 group cursor-default">
                  <span className="text-white/75 text-sm group-hover:text-white transition-colors">{ind}</span>
                  <span className="text-white/20 text-xs font-mono group-hover:text-white/40 transition-colors">0{i + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Us ──────────────────────────────────────────────────── */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20">
            <div>
              <p className="section-label mb-4">Why Us</p>
              <h2 style={{ fontFamily: "var(--font-heading)" }} className="text-4xl md:text-5xl font-medium text-primary">What Sets Us Apart</h2>
            </div>
            <Link to="/about-us" className="hidden md:flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors group">
              About the company
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border rounded-2xl overflow-hidden">
            {FEATURES.map((feature, i) => (
              <div key={i} className="bg-white p-10 md:p-14 relative group hover:bg-[#F7F7F5] transition-colors duration-300">
                {/* Large background number */}
                <span
                  style={{ fontFamily: "var(--font-heading)" }}
                  className="absolute top-8 right-10 text-[80px] font-medium text-border leading-none select-none pointer-events-none group-hover:text-accent/10 transition-colors duration-300"
                >
                  {feature.num}
                </span>
                <h3 style={{ fontFamily: "var(--font-heading)" }} className="text-xl font-medium mb-4 text-primary relative z-10">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-muted relative z-10 max-w-xs">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────── */}
      <section className="bg-[#0D0D0D] py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 mb-10">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <p className="text-white/45 text-xs font-medium tracking-[0.18em] uppercase">Ready to Scale?</p>
            </div>
            <h2 style={{ fontFamily: "var(--font-heading)" }} className="text-5xl md:text-7xl font-medium text-white leading-[1.05] mb-10 tracking-tight">
              Let's move your<br />business beyond<br />borders.
            </h2>
            <p className="text-white/50 text-lg leading-relaxed max-w-xl mb-14">
              Whether you're bringing Indonesian goods into New Zealand or exporting Kiwi quality to the world — we're the partner that makes it happen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-accent text-white px-8 py-4 rounded-lg text-sm font-medium hover:bg-accent/90 transition-all flex items-center gap-2 group w-fit"
              >
                Start a Conversation
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                to="/importing"
                className="bg-white/6 text-white/80 border border-white/12 px-8 py-4 rounded-lg text-sm font-medium hover:bg-white/12 hover:text-white transition-all w-fit"
              >
                View Import Services
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
