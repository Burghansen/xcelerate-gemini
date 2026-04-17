import { CONTACT_INFO, COMPANY_NAME, NAV_LINKS } from "../constants";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0D0D0D] text-white">

      {/* Top section */}
      <div className="container mx-auto px-6 md:px-12 pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Brand column */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span
                style={{ fontFamily: "var(--font-heading)" }}
                className="font-medium text-base text-white tracking-tight"
              >
                {COMPANY_NAME}
              </span>
            </div>
            <p className="text-white/45 text-sm leading-relaxed max-w-sm mb-10">
              Auckland-based trade partner connecting New Zealand and Indonesia — bringing authentic goods across borders, compliantly and reliably.
            </p>

            {/* Trade corridor pill */}
            <div className="inline-flex items-center gap-3 bg-white/6 border border-white/8 rounded-full px-4 py-2.5">
              <span className="text-white/60 text-xs tracking-wide">Auckland</span>
              <span className="text-white/20 text-xs">—</span>
              <span className="text-accent text-xs font-medium tracking-wide">Jakarta</span>
              <span className="text-white/20 text-xs">—</span>
              <span className="text-white/60 text-xs tracking-wide">Global</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3">
            <p className="text-xs font-semibold text-white/30 uppercase tracking-[0.18em] mb-7">Navigation</p>
            <ul className="space-y-3">
              {NAV_LINKS.filter(link => link.name !== "Home").map((link) => (
                <li key={link.name}>
                  {link.external ? (
                    <a
                      href={link.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-white/50 hover:text-white transition-colors text-sm group"
                    >
                      {link.name}
                      <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ) : (
                    <Link
                      to={link.path}
                      className="text-white/50 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <p className="text-xs font-semibold text-white/30 uppercase tracking-[0.18em] mb-7">Contact</p>
            <ul className="space-y-5">
              <li>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center gap-3 text-white/50 hover:text-white transition-colors group"
                >
                  <Mail size={14} className="text-white/25 flex-shrink-0 group-hover:text-accent transition-colors" />
                  <span className="text-sm">{CONTACT_INFO.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="flex items-center gap-3 text-white/50 hover:text-white transition-colors group"
                >
                  <Phone size={14} className="text-white/25 flex-shrink-0 group-hover:text-accent transition-colors" />
                  <span className="text-sm">{CONTACT_INFO.phone}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/50">
                <MapPin size={14} className="text-white/25 flex-shrink-0 mt-0.5" />
                <span className="text-sm leading-relaxed">{CONTACT_INFO.address}</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/6">
        <div className="container mx-auto px-6 md:px-12 py-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/25 text-xs">
            © {year} {COMPANY_NAME}. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            Auckland, New Zealand
          </p>
        </div>
      </div>
    </footer>
  );
}
