const Footer = () => (
  <footer className="bg-charcoal border-t border-primary-foreground/10 py-12 px-6">
    <div className="container mx-auto text-center">
      <p className="font-display text-2xl text-primary-foreground mb-2">
        Trattoria <span className="text-gold italic">Valtenesi</span>
      </p>
      <p className="text-primary-foreground/40 font-body text-sm mb-6">
        Via Pergola, 53 — 25080 Moniga del Garda BS — Tel. 0365 511345
      </p>
      <div className="flex justify-center gap-6 mb-6">
        {["Home", "Menu", "Galleria", "Contatti"].map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase() === "home" ? "home" : l.toLowerCase() === "contatti" ? "contact" : l.toLowerCase()}`}
            className="text-primary-foreground/50 hover:text-gold text-sm tracking-wider uppercase font-body transition-colors"
          >
            {l}
          </a>
        ))}
      </div>
      <p className="text-primary-foreground/30 text-xs font-body">
        © {new Date().getFullYear()} Trattoria Pizzeria Valtenesi. Tutti i diritti riservati.
      </p>
    </div>
  </footer>
);

export default Footer;
