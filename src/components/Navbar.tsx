import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Chi Siamo", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Galleria", href: "#gallery" },
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
          ? "bg-charcoal/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <a href="#home" className="font-display text-xl md:text-2xl text-primary-foreground tracking-wide">
          Trattoria <span className="text-gold italic">Valtenesi</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-primary-foreground/80 hover:text-gold transition-colors duration-300 text-sm tracking-widest uppercase font-body"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:0365511345"
            className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2 rounded-sm text-sm tracking-wider uppercase hover:bg-primary/80 transition-colors"
          >
            <Phone className="w-4 h-4" />
            Prenota
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-primary-foreground"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-charcoal/98 backdrop-blur-lg absolute top-full left-0 right-0"
          >
            <div className="flex flex-col items-center py-8 gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-primary-foreground/80 hover:text-gold transition-colors text-lg tracking-widest uppercase font-body"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:0365511345"
                className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-sm tracking-wider uppercase"
              >
                <Phone className="w-4 h-4" />
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
