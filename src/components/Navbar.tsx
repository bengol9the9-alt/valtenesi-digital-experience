import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Chi Siamo", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Galleria", href: "#gallery" },
  { label: "Recensioni", href: "#reviews" },
  { label: "Contatti", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <a href="#home" className="font-display text-xl md:text-2xl text-foreground tracking-wide">
          Trattoria <span className="text-gold italic">Valtenesi</span>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-foreground/70 hover:text-gold transition-colors duration-300 text-xs tracking-[0.2em] uppercase font-body font-bold"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:0365511345"
            className="flex items-center gap-2 border border-gold/40 text-gold px-5 py-2.5 rounded-none text-xs tracking-[0.15em] uppercase hover:bg-gold/10 transition-all"
          >
            <Phone className="w-3.5 h-3.5" />
            Prenota
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden bg-background/98 backdrop-blur-lg absolute top-full left-0 right-0 border-t border-border"
          >
            <div className="flex flex-col items-center py-8 gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-foreground/80 hover:text-gold transition-colors text-sm tracking-[0.2em] uppercase font-body font-bold"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:0365511345"
                className="flex items-center gap-2 border border-gold/40 text-gold px-6 py-3 text-xs tracking-[0.15em] uppercase"
              >
                <Phone className="w-3.5 h-3.5" />
                Prenota
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
