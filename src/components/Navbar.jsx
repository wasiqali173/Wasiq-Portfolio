import { useState, useEffect } from "react";

const NAV_LINKS = ["About", "Skills", "Projects", "Contact"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 transition-all duration-300 ${
        scrolled ? "py-3 bg-dark/95 backdrop-blur-xl shadow-lg" : "py-5 bg-dark/70 backdrop-blur-lg"
      } border-b border-white/5`}>
        
        {/* Logo */}
        <a href="#hero" className="font-display cursor-text font-extrabold text-xl text-white tracking-tight">
          W<span className="text-accent">.</span>Ali
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <button
                onClick={() => scrollTo(link)}
                className="text-gray-400 cursor-pointer hover:text-accent text-xs font-semibold uppercase tracking-widest transition-colors duration-200"
              >
                {link}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => scrollTo("Contact")}
              className="bg-accent cursor-pointer text-dark text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] hover:-translate-y-0.5 transition-all duration-200"
            >
              Hire Me
            </button>
          </li>
        </ul>

        {/* Hamburger (mobile only) */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg bg-card border border-white/10"
          aria-label="Open menu"
        >
          <span className="block w-5 h-0.5 bg-gray-300 rounded-full" />
          <span className="block w-5 h-0.5 bg-gray-300 rounded-full" />
          <span className="block w-5 h-0.5 bg-gray-300 rounded-full" />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div className={`mobile-menu fixed top-0 right-0 h-full w-72 bg-dark2 border-l border-white/8 z-50 md:hidden flex flex-col ${menuOpen ? "open" : ""}`}>
        
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/8">
          <span className="font-display font-extrabold text-lg text-white">
            W<span className="text-accent">.</span>Ali
          </span>
          {/* ✅ CLOSE BUTTON */}
          <button
            onClick={() => setMenuOpen(false)}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-card border border-white/10 text-gray-400 hover:text-accent hover:border-accent transition-colors duration-200"
            aria-label="Close menu"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Drawer Links */}
        <nav className="flex flex-col gap-2 p-6 flex-1">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-left px-4 py-3 rounded-xl text-gray-300 hover:text-accent hover:bg-white/5 font-semibold text-base transition-all duration-200"
            >
              {link}
            </button>
          ))}
        </nav>

        {/* Hire Me CTA at bottom */}
        <div className="p-6 border-t border-white/8 cursor-pointer ">
          <button
            onClick={() => scrollTo("Contact")}
            className="w-full bg-accent text-dark font-bold py-3 rounded-xl text-sm hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] transition-all duration-200"
          >
            🚀 Hire Me
          </button>
          <p className="text-center text-gray-500 text-xs mt-3">Available for projects</p>
        </div>
      </div>
    </>
  );
}
