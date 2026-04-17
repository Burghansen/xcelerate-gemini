import { useState, type ChangeEvent, type SyntheticEvent } from "react";
import { motion } from "motion/react";
import { Check, Mail, Phone, MapPin } from "lucide-react";
import { CONTACT_INFO } from "../constants";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const set = (k: keyof typeof form) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [k]: e.target.value });

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(form.subject || "Website Inquiry");
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    window.location.href = `mailto:${CONTACT_INFO.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-white">

      {/* ── Top section ── */}
      <div className="bg-[#0D0D0D] pt-40 pb-28">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-3 bg-white/8 border border-white/10 rounded-full px-4 py-2 mb-10">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-white/70 text-xs font-medium tracking-[0.15em] uppercase">Connect</span>
            </div>
            <h1 style={{ fontFamily: "var(--font-heading)" }} className="text-6xl md:text-8xl font-medium text-white leading-[1.03] mb-6 tracking-tight">
              Get in Touch
            </h1>
            <p className="text-white/50 text-lg max-w-lg leading-relaxed">
              Ready to move goods across borders? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ── Contact body ── */}
      <div className="container mx-auto px-6 md:px-12 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

          {/* Contact info */}
          <div className="space-y-14">
            <div>
              <p className="section-label mb-5">Email</p>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center gap-3 group"
              >
                <Mail size={16} className="text-accent flex-shrink-0" />
                <span style={{ fontFamily: "var(--font-heading)" }} className="text-2xl font-medium text-primary group-hover:text-accent transition-colors">
                  {CONTACT_INFO.email}
                </span>
              </a>
            </div>

            <div>
              <p className="section-label mb-5">Phone & WhatsApp</p>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-accent flex-shrink-0" />
                  <p style={{ fontFamily: "var(--font-heading)" }} className="text-2xl font-medium text-primary">{CONTACT_INFO.phone}</p>
                </div>
                <p className="text-muted text-sm pl-7">WA: {CONTACT_INFO.whatsapp}</p>
              </div>
            </div>

            <div>
              <p className="section-label mb-5">Office</p>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-accent flex-shrink-0 mt-1" />
                <p className="text-muted text-sm leading-relaxed max-w-xs">{CONTACT_INFO.address}</p>
              </div>
            </div>

            {/* Business hours */}
            <div>
              <p className="section-label mb-5">Response Time</p>
              <p className="text-muted text-sm leading-relaxed">
                We respond to all inquiries within 24 hours on business days (NZT).
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-[#F7F7F5] rounded-2xl border border-border p-10">
            {sent ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center justify-center h-full text-center py-20"
              >
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                  <Check size={22} className="text-accent" />
                </div>
                <h3 style={{ fontFamily: "var(--font-heading)" }} className="text-2xl font-medium text-primary mb-3">Message Sent</h3>
                <p className="text-muted text-sm">Your email client has been opened. We'll get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-xs font-medium text-muted mb-2 tracking-wide">Full Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    required
                    value={form.name}
                    onChange={set("name")}
                    className="input-luxury"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-muted mb-2 tracking-wide">Email Address</label>
                  <input
                    type="email"
                    placeholder="you@company.com"
                    required
                    value={form.email}
                    onChange={set("email")}
                    className="input-luxury"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-muted mb-2 tracking-wide">Subject</label>
                  <input
                    type="text"
                    placeholder="Import inquiry, freight quote, etc."
                    required
                    value={form.subject}
                    onChange={set("subject")}
                    className="input-luxury"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-muted mb-2 tracking-wide">Message</label>
                  <textarea
                    placeholder="Tell us about your shipment, products, or questions..."
                    rows={5}
                    required
                    value={form.message}
                    onChange={set("message")}
                    className="input-luxury resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="luxury-btn-accent w-full mt-2 py-4 text-sm"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
