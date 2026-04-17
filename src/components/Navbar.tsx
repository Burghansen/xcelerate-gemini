import { Link, useLocation } from "react-router-dom";
import { NAV_LINKS, LOGO_URL } from "../constants";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isTransparentPage = ['/', '/importing', '/exporting', '/about-us'].includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const isLight = !scrolled && isTransparentPage;

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-400 ${
      scrolled
        ? "bg-white/96 backdrop-blur-xl border-b border-border shadow-[0_1px_12px_rgba(0,0,0,0.06)] py-3 lg:py-4"
        : "bg-transparent border-b border-transparent py-5 lg:py-7"
    }`}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <Link to="/" className="flex items-center z-50 flex-shrink-0">
            <img
              src={LOGO_URL}
              alt="XCelerate Logo"
              className={`h-10 lg:h-16 w-auto transition-all duration-300 ${
                isLight ? 'brightness-0 invert' : 'brightness-0'
              }`}
            />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.filter(link => link.name !== "Contact Us").map((link) => {
              const isActive = location.pathname === link.path;

              const base = "relative px-4 py-2 text-[14.5px] font-medium tracking-wide transition-all duration-200";

              const activeStyle = isLight
                ? "text-white bg-accent/80 rounded-md"
                : "text-white bg-accent rounded-md";

              const defaultStyle = isLight
                ? "text-white/75 hover:text-white hover:bg-accent/70 rounded-md"
                : "text-gray-500 hover:text-white hover:bg-accent rounded-md";

              return link.external ? (
                <a
                  key={link.name}
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${base} ${defaultStyle}`}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`${base} ${isActive ? activeStyle : defaultStyle}`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* CTA button */}
          <div className="hidden lg:flex items-center">
            <Link
              to="/contact"
              className={`text-[14px] font-semibold px-6 py-3 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-px ${
                isLight
                  ? 'bg-white text-gray-900 hover:bg-white/90'
                  : 'bg-accent text-white hover:bg-accent/90'
              }`}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className={`lg:hidden z-50 w-9 h-9 flex items-center justify-center rounded-md transition-colors ${
              isOpen ? 'text-gray-900 bg-gray-100' : isLight ? 'text-white hover:bg-white/10' : 'text-gray-900 hover:bg-gray-100'
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} strokeWidth={1.75} /> : <Menu size={20} strokeWidth={1.75} />}
          </button>
        </div>
      </div>

      {/* Mobile overlay menu */}
      {createPortal(
        <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-white z-[49] flex flex-col px-6 pt-28 pb-12"
          >
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 + 0.08, duration: 0.3, ease: "easeOut" }}
                >
                  {link.external ? (
                    <a
                      href={link.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block py-3 text-2xl font-medium text-gray-800 hover:text-accent transition-colors border-b border-gray-100"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.path}
                      className={`block py-3 text-2xl font-medium transition-colors border-b border-gray-100 ${
                        location.pathname === link.path ? "text-accent" : "text-gray-800 hover:text-accent"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="mt-auto pt-8 border-t border-gray-100">
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">Get in touch</p>
              <a href="mailto:info@xcelerate.co.nz" className="text-sm text-gray-600 hover:text-accent transition-colors">
                info@xcelerate.co.nz
              </a>
            </div>
          </motion.div>
        )}
        </AnimatePresence>,
        document.body
      )}
    </nav>
  );
}
